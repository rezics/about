#!/usr/bin/env node
// Self-hosted fonts, subset to what the site uses.
//
//   node scripts/fonts.mjs latin        Archivo + Martian Mono Latin subsets into public/fonts/
//                                       (committed) and Archivo advance widths for name fitting.
//   node scripts/fonts.mjs cjk [dist]   Noto Sans TC sliced by actual use in the built HTML:
//                                       slice 0 holds the characters on every page (the chrome),
//                                       slice 1 the rest of the home page; the rest is grouped by
//                                       how many pages use a character. Writes dist/fonts/rezics-sans-*.woff2 and puts the
//                                       @font-face rules (unicode-range per slice) and preloads into
//                                       each page in place of <meta name="rezics:fonts">.
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
  const archivo = await subsetFont(await source('archivo'), latinText, {
    targetFormat: 'woff2',
    variationAxes: { wdth: { min: 100, max: 125 }, wght: { min: 400, max: 900 } },
  });
  fs.writeFileSync(path.join(out, 'archivo.woff2'), archivo);
  const martian = await subsetFont(await source('martian'), latinText, {
    targetFormat: 'woff2',
    variationAxes: { wdth: 100, wght: { min: 400, max: 700 } },
  });
  fs.writeFileSync(path.join(out, 'martian-mono.woff2'), martian);
  console.log(`archivo.woff2 ${kb(archivo)} KB, martian-mono.woff2 ${kb(martian)} KB`);
  console.log(`unicode-range: ${latinUnicodeRange}`);
  await advances();
}

// Advance widths (em) of Archivo at the square-name setting, so names can be sized to fill a
// square at build time without measuring in the browser (no layout shift).
async function advances() {
  const hb = await import('harfbuzzjs');
  const data = await source('archivo');
  const face = new hb.Face(new hb.Blob(data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength)));
  const font = new hb.Font(face);
  font.setVariations([new hb.Variation('wdth', 125), new hb.Variation('wght', 900)]);
  const upem = face.upem;
  const widths = {};
  for (let c = 0x20; c <= 0x7e; c++) {
    const buffer = new hb.Buffer();
    buffer.addText(String.fromCharCode(c));
    buffer.guessSegmentProperties();
    hb.shape(font, buffer);
    widths[String.fromCharCode(c)] = Math.round((buffer.getGlyphPositions()[0].xAdvance / upem) * 1000) / 1000;
  }
  const file = path.join(root, 'src', 'kit', 'archivo-advances.json');
  fs.writeFileSync(file, `${JSON.stringify({ setting: 'wdth 125, wght 900', widths }, null, 2)}\n`);
  console.log(`wrote ${path.relative(root, file)}`);
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

export async function cjk(dist = path.join(root, 'dist')) {
  const all = pages(dist).map(([route, file]) => ({ route, file, html: fs.readFileSync(file, 'utf8') }));
  if (!all.length) throw new Error(`no pages in ${dist}`);
  if (all.every((p) => !p.html.includes('name="rezics:fonts"') && p.html.includes('"REZICS Sans"'))) {
    console.log('CJK: already sliced (run a fresh astro build to redo)');
    return null;
  }
  const chars = new Map(all.map((p) => [p.route, pageChars(p.html)]));
  const home = chars.get('/') ?? new Set();
  // Slice 0: characters on every page (the shared chrome). Slice 1: the rest of the home page.
  // Then the remaining characters, most widely used first. A page loads only the slices it uses.
  const chrome = new Set([...(chars.get(all[0].route) ?? [])].filter((c) => all.every((p) => chars.get(p.route).has(c))));
  const homeOnly = [...home].filter((c) => !chrome.has(c));
  const placed = new Set([...chrome, ...homeOnly]);
  const frequency = new Map();
  for (const set of chars.values()) for (const c of set) if (!placed.has(c)) frequency.set(c, (frequency.get(c) ?? 0) + 1);
  const rest = [...frequency.keys()].sort((a, b) => frequency.get(b) - frequency.get(a) || a - b);
  const slices = [[...chrome], homeOnly];
  for (let i = 0; i < rest.length; i += SLICE) slices.push(rest.slice(i, i + SLICE));

  const src = await source('noto');
  const outDir = path.join(dist, 'fonts');
  fs.mkdirSync(outDir, { recursive: true });
  const faces = [];
  let total = 0;
  for (const [i, codes] of slices.entries()) {
    if (!codes.length) continue;
    const text = String.fromCodePoint(...codes);
    const woff2 = await subsetFont(src, text, { targetFormat: 'woff2', variationAxes: { wght: { min: 400, max: 900 } } });
    const name = `rezics-sans-${i}-${hashOf(text)}.woff2`;
    fs.writeFileSync(path.join(outDir, name), woff2);
    total += woff2.length;
    faces.push({ i, name, codes: new Set(codes), bytes: woff2.length, range: unicodeRange(codes) });
  }
  const report = [];
  for (const page of all) {
    const used = chars.get(page.route);
    const needed = faces.filter((f) => [...used].some((c) => f.codes.has(c)));
    const css = needed
      .map((f) => `@font-face{font-family:"REZICS Sans";src:url(/fonts/${f.name}) format("woff2");font-weight:400 900;font-display:swap;unicode-range:${f.range}}`)
      .join('');
    // The two most used slices a page needs are preloaded, so most of its text swaps in near the
    // first paint; the rest load as the text that needs them is laid out, so on a slow phone they
    // do not take the bandwidth the page's large picture (its largest paint) needs.
    const preload = needed.slice(0, 2).map((f) => `<link rel="preload" href="/fonts/${f.name}" as="font" type="font/woff2" crossorigin>`).join('');
    const tag = /<meta name="rezics:fonts"[^>]*>/;
    if (!tag.test(page.html)) throw new Error(`${page.route}: missing <meta name="rezics:fonts"> in the head`);
    fs.writeFileSync(page.file, page.html.replace(tag, `${preload}<style>${css}</style>`));
    report.push({ route: page.route, slices: needed.map((f) => f.i), bytes: needed.reduce((s, f) => s + f.bytes, 0) });
  }
  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify({ total, slices: faces.map(({ i, name, bytes, codes }) => ({ i, name, bytes, chars: codes.size })), pages: report }, null, 2));
  const homeBytes = report.find((r) => r.route === '/')?.bytes ?? 0;
  console.log(`CJK: ${faces.length} slices, ${Math.round(total / 1024)} KB in all; home page ${Math.round(homeBytes / 1024)} KB`);
  return { faces, report };
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
