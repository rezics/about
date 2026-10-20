#!/usr/bin/env node
// Self-hosted fonts, subset to what the site uses.
//
//   node scripts/fonts.mjs latin        the Martian Mono Latin subset into public/fonts/ (committed).
//                                       (Archivo stays a source for the Open Graph wordmark.)
//   node scripts/fonts.mjs cjk [dist]   Noto Sans TC sliced by actual use in the built HTML:
//                                       slice 0 holds the characters on every page (the chrome),
//                                       slice 1 the rest of the home page; the rest is grouped by
//                                       how many pages use a character. Writes dist/fonts/rezics-sans-*.woff2 and puts the
//                                       @font-face rules (unicode-range per slice) and preloads into
//                                       each page in place of <meta name="rezics:fonts">.
//                                       Noto Serif TC ("REZICS Serif", 500 to 600) is sliced the
//                                       same way from the text that is set in the serif: h1 to h3
//                                       and elements with a serif class (`serif`, `t-statement`…),
//                                       Latin included (the serif's own Latin in serif headings).
//
// Source fonts (OFL, Google Fonts repository) are cached in node_modules/.cache/rezics-fonts, which
// worktrees share through their linked node_modules.
import fs from 'node:fs';
import path from 'node:path';
import subsetFont from 'subset-font';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const cache = path.join(fs.realpathSync(path.join(root, 'node_modules')), '.cache', 'rezics-fonts');
const sources = {
  noto: ['NotoSansTC[wght].ttf', 'ofl/notosanstc/NotoSansTC%5Bwght%5D.ttf'],
  serif: ['NotoSerifTC[wght].ttf', 'ofl/notoseriftc/NotoSerifTC%5Bwght%5D.ttf'],
  'noto-zh-Hans': ['NotoSansSC[wght].ttf', 'ofl/notosanssc/NotoSansSC%5Bwght%5D.ttf'],
  'serif-zh-Hans': ['NotoSerifSC[wght].ttf', 'ofl/notoserifsc/NotoSerifSC%5Bwght%5D.ttf'],
  'noto-ja': ['NotoSansJP[wght].ttf', 'ofl/notosansjp/NotoSansJP%5Bwght%5D.ttf'],
  'serif-ja': ['NotoSerifJP[wght].ttf', 'ofl/notoserifjp/NotoSerifJP%5Bwght%5D.ttf'],
  'noto-ko': ['NotoSansKR[wght].ttf', 'ofl/notosanskr/NotoSansKR%5Bwght%5D.ttf'],
  'serif-ko': ['NotoSerifKR[wght].ttf', 'ofl/notoserifkr/NotoSerifKR%5Bwght%5D.ttf'],
  archivo: ['Archivo[wdth,wght].ttf', 'ofl/archivo/Archivo%5Bwdth,wght%5D.ttf'],
  martian: ['MartianMono[wdth,wght].ttf', 'ofl/martianmono/MartianMono%5Bwdth,wght%5D.ttf'],
};

export async function source(key) {
  const [file, remote] = sources[key];
  const local = path.join(cache, file);
  if (fs.existsSync(local)) return fs.readFileSync(local);
  fs.mkdirSync(cache, { recursive: true });
  const response = await fetch(`https://github.com/google/fonts/raw/main/${remote}`);
  if (!response.ok) throw new Error(`font download failed (${response.status}): ${remote}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  const temp = `${local}.${process.pid}.part`;
  fs.writeFileSync(temp, buffer);
  fs.renameSync(temp, local); // atomic: parallel builds never read a half-written file
  return buffer;
}

// Latin text: printable ASCII, Latin-1 punctuation and letters, curly quotes, arrows, ellipsis.
const latinRanges = [
  [0x20, 0x7e],
  [0xa0, 0xff],
  [0x2018, 0x201d],
  [0x2026, 0x2026],
  [0x2190, 0x2193],
];
const latinText = latinRanges
  .flatMap(([a, b]) => Array.from({ length: b - a + 1 }, (_, i) => String.fromCodePoint(a + i)))
  .join('');
const latinUnicodeRange = latinRanges
  .map(([a, b]) => (a === b ? `U+${hex(a)}` : `U+${hex(a)}-${hex(b)}`))
  .join(', ');

function hex(n) {
  return n.toString(16).toUpperCase().padStart(4, '0');
}

async function latin() {
  const out = path.join(root, 'public', 'fonts');
  fs.mkdirSync(out, { recursive: true });
  const martian = await subsetFont(await source('martian'), latinText, {
    targetFormat: 'woff2',
    variationAxes: { wdth: 100, wght: { min: 400, max: 700 } },
  });
  fs.writeFileSync(path.join(out, 'martian-mono.woff2'), martian);
  console.log(`martian-mono.woff2 ${kb(martian)} KB`);
  console.log(`unicode-range: ${latinUnicodeRange}`);
}

const kb = (b) => Math.round(b.length / 1024);

/** Every built HTML page under dist, as [route, file]. */
export function pages(dist) {
  const found = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.html')) {
        const rel = path.relative(dist, full).split(path.sep).join('/');
        const route = rel === '404.html' ? '/404/' : `/${rel.replace(/index\.html$/, '')}`;
        found.push([route, full]);
      }
    }
  };
  walk(dist);
  return found.sort(([a], [b]) => a.localeCompare(b));
}

const isCjk = (cp) =>
  (cp >= 0x1100 && cp <= 0x11ff) || (cp >= 0xac00 && cp <= 0xd7af) ||
  (cp >= 0x2e80 && cp <= 0x9fff) || (cp >= 0xf900 && cp <= 0xfaff) || (cp >= 0xfe30 && cp <= 0xfe4f) ||
  (cp >= 0xff00 && cp <= 0xffef) || (cp >= 0x3000 && cp <= 0x303f) || (cp >= 0x20000 && cp <= 0x2fa1f);

/** Characters the CJK face must cover on a page: all CJK text in markup, attributes included. */
function pageChars(html) {
  const set = new Set();
  for (const ch of html) if (isCjk(ch.codePointAt(0))) set.add(ch.codePointAt(0));
  return set;
}

function unicodeRange(codes) {
  const sorted = [...codes].sort((a, b) => a - b);
  const parts = [];
  for (let i = 0; i < sorted.length; i++) {
    let j = i;
    while (j + 1 < sorted.length && sorted[j + 1] === sorted[j] + 1) j++;
    parts.push(i === j ? `U+${hex(sorted[i])}` : `U+${hex(sorted[i])}-${hex(sorted[j])}`);
    i = j;
  }
  return parts.join(',');
}

const SLICE = 180;

// Classes whose text is set in the serif (base.css "Type roles"): their text goes into the serif
// slices. Headings h1 to h3 are serif too.
const SERIF_CLASSES = new Set(['serif', 't-title', 't-mega', 't-xl', 't-h2', 't-l', 't-big', 't-statement', 't-h3', 't-m']);

const decodeEntities = (s) =>
  s.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

/** Text set in the serif on a page: h1 to h3 and every element carrying a serif class. */
export function serifText(html) {
  const at = html.indexOf('<body');
  const body = at < 0 ? html : html.slice(at);
  const out = [];
  for (const m of body.matchAll(/<(h[1-3])\b[^>]*>([\s\S]*?)<\/\1>/g)) out.push(m[2]);
  const open = /<([a-z][a-z0-9-]*)\b[^>]*?\bclass="([^"]*)"[^>]*>/g;
  for (const m of body.matchAll(open)) {
    if (!m[2].split(/\s+/).some((c) => SERIF_CLASSES.has(c))) continue;
    const tag = m[1];
    const re = new RegExp(`<${tag}\\b[^>]*>|</${tag}>`, 'g');
    re.lastIndex = m.index + m[0].length;
    let depth = 1;
    let end = body.length;
    for (let t; (t = re.exec(body)); ) {
      depth += t[0][1] === '/' ? -1 : 1;
      if (depth === 0) {
        end = t.index;
        break;
      }
    }
    out.push(body.slice(m.index + m[0].length, end));
  }
  return decodeEntities(out.join(' ').replace(/<[^>]+>/g, ''));
}

function serifChars(html) {
  const set = new Set();
  for (const ch of serifText(html)) if (!/\s/.test(ch)) set.add(ch.codePointAt(0));
  return set;
}

/** One face sliced by use: slice 0 on every page, slice 1 the rest of the home page, then the
 * remaining characters most widely used first. Returns the faces and each page's slices. */
async function slice(all, chars, { key, family, weights, prefix, base = '' }) {
  const home = chars.get('/') ?? new Set();
  const chrome = new Set([...(chars.get(all[0].route) ?? [])].filter((c) => all.every((p) => chars.get(p.route).has(c))));
  const homeOnly = [...home].filter((c) => !chrome.has(c));
  const placed = new Set([...chrome, ...homeOnly]);
  const frequency = new Map();
  for (const set of chars.values()) for (const c of set) if (!placed.has(c)) frequency.set(c, (frequency.get(c) ?? 0) + 1);
  const rest = [...frequency.keys()].sort((a, b) => frequency.get(b) - frequency.get(a) || a - b);
  const slices = [[...chrome], homeOnly];
  for (let i = 0; i < rest.length; i += SLICE) slices.push(rest.slice(i, i + SLICE));
  const src = await source(key);
  const faces = [];
  for (const [i, codes] of slices.entries()) {
    if (!codes.length) continue;
    const text = String.fromCodePoint(...codes);
    const woff2 = await subsetFont(src, text, { targetFormat: 'woff2', variationAxes: { wght: weights } });
    const name = `${prefix}-${i}-${hashOf(text)}.woff2`;
    fs.writeFileSync(path.join(all.outDir, name), woff2);
    faces.push({ i, name, codes: new Set(codes), bytes: woff2.length, range: unicodeRange(codes) });
  }
  const css = (f) => `@font-face{font-family:"${family}";src:url(${base}/fonts/${f.name}) format("woff2");font-weight:${weights.min} ${weights.max};font-display:swap;unicode-range:${f.range}}`;
  return { faces, css };
}

/** The sans and serif sources a locale's pages are sliced from: the regional Noto faces for
 * Simplified Chinese, Japanese and Korean, Traditional Chinese for every other locale (whose pages
 * carry CJK only in names such as the language menu). */
export const faceKeys = (locale) => (['zh-Hans', 'ja', 'ko'].includes(locale) ? [`noto-${locale}`, `serif-${locale}`] : ['noto', 'serif']);

export async function cjk(dist = path.join(root, 'dist'), { locale = 'zh-Hant', base = '' } = {}) {
  const all = pages(dist).map(([route, file]) => ({ route, file, html: fs.readFileSync(file, 'utf8') }));
  if (!all.length) throw new Error(`no pages in ${dist}`);
  if (all.every((p) => !p.html.includes('name="rezics:fonts"') && p.html.includes('"REZICS Sans"'))) {
    console.log('CJK: already sliced (run a fresh astro build to redo)');
    return null;
  }
  all.outDir = path.join(dist, 'fonts');
  fs.mkdirSync(all.outDir, { recursive: true });
  const sansChars = new Map(all.map((p) => [p.route, pageChars(p.html)]));
  const serifCharsBy = new Map(all.map((p) => [p.route, serifChars(p.html)]));
  const [sansKey, serifKey] = faceKeys(locale);
  const sans = await slice(all, sansChars, { key: sansKey, family: 'REZICS Sans', weights: { min: 400, max: 900 }, prefix: 'rezics-sans', base });
  const serif = await slice(all, serifCharsBy, { key: serifKey, family: 'REZICS Serif', weights: { min: 500, max: 600 }, prefix: 'rezics-serif', base });
  const report = [];
  for (const page of all) {
    const usedSans = sansChars.get(page.route);
    const usedSerif = serifCharsBy.get(page.route);
    const needSans = sans.faces.filter((f) => [...usedSans].some((c) => f.codes.has(c)));
    const needSerif = serif.faces.filter((f) => [...usedSerif].some((c) => f.codes.has(c)));
    // Preloads: the two most used sans slices, and the serif slices that set most of the page's
    // h1 (its first visible serif text; the header panels' names wait until a panel opens).
    // The rest load as their text is laid out, so on a slow phone they do not take the
    // bandwidth the page's large picture needs.
    const h1 = new Set([...serifText(page.html.match(/<h1\b[\s\S]*?<\/h1>/)?.[0] ?? '')].map((c) => c.codePointAt(0)));
    const serifFirst = needSerif
      .map((f) => ({ f, n: [...h1].filter((c) => f.codes.has(c)).length }))
      .filter((x) => x.n > 0)
      .sort((a, b) => b.n - a.n)
      .slice(0, 2)
      .map((x) => x.f);
    const preload = [...needSans.slice(0, 2), ...serifFirst]
      .map((f) => `<link rel="preload" href="${base}/fonts/${f.name}" as="font" type="font/woff2" crossorigin>`)
      .join('');
    const css = needSans.map(sans.css).join('') + needSerif.map(serif.css).join('');
    const tag = /<meta name="rezics:fonts"[^>]*>/;
    if (!tag.test(page.html)) throw new Error(`${page.route}: missing <meta name="rezics:fonts"> in the head`);
    fs.writeFileSync(page.file, page.html.replace(tag, `${preload}<style>${css}</style>`));
    report.push({
      route: page.route,
      slices: needSans.map((f) => f.i),
      bytes: needSans.reduce((s, f) => s + f.bytes, 0),
      serifSlices: needSerif.map((f) => f.i),
      serifBytes: needSerif.reduce((s, f) => s + f.bytes, 0),
    });
  }
  const total = sans.faces.reduce((s, f) => s + f.bytes, 0);
  const serifTotal = serif.faces.reduce((s, f) => s + f.bytes, 0);
  const list = (faces) => faces.map(({ i, name, bytes, codes }) => ({ i, name, bytes, chars: codes.size }));
  fs.writeFileSync(path.join(all.outDir, 'report.json'), JSON.stringify({ total, slices: list(sans.faces), serifTotal, serifSlices: list(serif.faces), pages: report }, null, 2));
  const home = report.find((r) => r.route === '/');
  console.log(`CJK: sans ${sans.faces.length} slices, ${Math.round(total / 1024)} KB; serif ${serif.faces.length} slices, ${Math.round(serifTotal / 1024)} KB; home page ${Math.round((home?.bytes ?? 0) / 1024)} + ${Math.round((home?.serifBytes ?? 0) / 1024)} KB`);
  return { report };
}

function hashOf(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return (h >>> 0).toString(36);
}

if (process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname) {
  const [command, arg] = process.argv.slice(2);
  if (command === 'latin') await latin();
  else if (command === 'cjk') await cjk(arg ? path.resolve(arg) : undefined);
  else {
    console.error('usage: node scripts/fonts.mjs latin | cjk [dist]');
    process.exit(1);
  }
}
