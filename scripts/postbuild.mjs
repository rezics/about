#!/usr/bin/env node
// After `astro build`: insert phrase breaks into CJK headings (scripts/phrase.mjs), slice the CJK font by actual use (scripts/fonts.mjs) and render one Open
// Graph image per built page into dist/og/<slug>.png (the path BaseLayout puts in og:image).
// Both read the build output, so new pages need no registration.
//   node scripts/postbuild.mjs [dist]
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import subsetFont from 'subset-font';
import { cjk, faceKeys, pages, source } from './fonts.mjs';
import { phraseHtml } from './phrase.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const dist = path.resolve(process.argv[2] ?? path.join(root, 'dist'));
// Locales built under dist/<locale>/ (scripts/build.mjs); none means one zh-Hant build at dist/.
const locales = process.argv.slice(3);

const decode = (s) =>
  s.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const meta = (html, key) => decode(html.match(new RegExp(`<meta[^>]+(?:name|property)="${key}"[^>]*content="([^"]*)"`, 'i'))?.[1] ?? '');

// v3 (V3-SPEC): paper, ink, muted, logo red and the nine kind colours of the photograph.
const PAPER = '#efe9e0';
const INK = '#26292d';
const MUTED = '#606468';
const MARK = '#df3d35';
const KIND_FIELDS = ['#3f5a45', '#b77d77', '#26282b', '#2f4fa3', '#24555a', '#7768a3', '#c9963f', '#b8c58a', '#a9c3dc'];

// Latin-script locales: longer clips for the same box (set per locale by og()).
let LATIN = false;
function h(type, style, children) {
  return { type, props: { style, children } };
}

// A middle connective (創作與發行) becomes a small glyph between two lines.
function nameBlock(name, color) {
  const chars = [...name];
  const mid = (chars.length - 1) / 2;
  if (chars.length >= 3 && chars.length % 2 === 1 && '與和及之的'.includes(chars[mid])) {
    const size = Math.min(360 / (chars.length - 1 - mid), 360 / 2.4);
    return h('div', { display: 'flex', flexDirection: 'column', color, fontFamily: 'Noto Serif TC', fontWeight: 600, lineHeight: 1.1, fontSize: size }, [
      h('div', {}, chars.slice(0, mid).join('')),
      h('div', { fontSize: size * 0.34, lineHeight: 1.2, paddingLeft: 6 }, chars[mid]),
      h('div', {}, chars.slice(mid + 1).join('')),
    ]);
  }
  return h('div', { color, fontFamily: 'Noto Serif TC', fontSize: chars.length <= 2 ? 120 : chars.length <= 4 ? 76 : 56, fontWeight: 600, lineHeight: 1.15, display: 'flex', flexWrap: 'wrap', width: 360, alignSelf: 'flex-end' }, name);
}

function card({ title, description, name, field, onField }) {
  const square = field
    ? h('div', { width: 440, height: 440, background: field, display: 'flex', padding: 30 }, [
        nameBlock(name, onField),
      ])
    : h('div', { width: 440, height: 440, display: 'flex', flexWrap: 'wrap', gap: 3 }, KIND_FIELDS.map((c) => h('div', { width: 144, height: 144, background: c }, [])));
  const clip = (s, n) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);
  // A page with its own square states its description large; the home page leads with its title.
  const text = field
    ? [h('div', { fontFamily: 'Noto Serif TC', fontSize: 40, fontWeight: 600, lineHeight: 1.45, color: INK }, clip(description, LATIN ? 96 : 46))]
    : [
        h('div', { fontFamily: 'Noto Serif TC', fontSize: LATIN ? 46 : 54, fontWeight: 600, lineHeight: 1.3, color: INK }, clip(title, LATIN ? 60 : 30)),
        h('div', { fontSize: 26, fontWeight: 400, lineHeight: 1.7, color: MUTED }, clip(description, LATIN ? 110 : 52)),
      ];
  return h('div', { width: 1200, height: 630, display: 'flex', alignItems: 'center', justifyContent: 'center', background: PAPER, fontFamily: 'Noto Sans TC' }, [h('div', { width: 1072, height: 502, display: 'flex' }, [
    h('div', { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 596, height: 502, paddingRight: 48 }, [
      h('div', { display: 'flex', alignItems: 'center', gap: 14 }, [
        {
          type: 'svg',
          props: {
            width: 42,
            height: 30,
            viewBox: '0 142.857 1000 714.286',
            children: { type: 'path', props: { fill: MARK, d: 'M0 571.429 642.857 142.857 571.429 428.571 1000 142.857v285.714L357.143 857.143l71.428-285.714L0 857.143Z' } },
          },
        },
        h('div', { fontFamily: 'Archivo', fontWeight: 900, fontSize: 22, letterSpacing: 6, color: INK }, 'REZICS'),
      ]),
      h('div', { display: 'flex', flexDirection: 'column', gap: 20 }, text),
    ]),
    h('div', { display: 'flex', alignItems: 'flex-end', width: 476, justifyContent: 'flex-end' }, [square]),
  ])]);
}

async function og(dir = dist, locale = 'zh-Hant') {
  LATIN = !/^(zh|ja|ko)/.test(locale);
  const list = pages(dir).map(([route, file]) => {
    const html = fs.readFileSync(file, 'utf8');
    const image = meta(html, 'og:image');
    const full = meta(html, 'og:title');
    // `頁面｜REZICS` → 頁面; the home title (`REZICS｜…`) stays whole.
    const title = full.replace(/(｜| \| )REZICS$/, '');
    const body = html.match(/<body[^>]*>/)?.[0] ?? '';
    const field = body.match(/--field:(#[0-9a-f]{3,8})/i)?.[1];
    const onField = body.match(/--on-field:(#[0-9a-f]{3,8})/i)?.[1] ?? PAPER;
    return { route, out: image ? new URL(image).pathname : null, title, description: meta(html, 'og:description'), name: title, field, onField };
  });
  const text = list.map((p) => p.title + p.description).join('') + 'REZICS…';
  const [serif600, noto400, archivo900] = await Promise.all([
    subsetFont(await source(faceKeys(locale)[1]), text, { targetFormat: 'truetype', variationAxes: { wght: 600 } }),
    subsetFont(await source(faceKeys(locale)[0]), text, { targetFormat: 'truetype', variationAxes: { wght: 400 } }),
    subsetFont(await source('archivo'), 'REZICS…', { targetFormat: 'truetype', variationAxes: { wght: 900, wdth: 100 } }),
  ]);
  const fonts = [
    { name: 'Noto Serif TC', data: serif600, weight: 600, style: 'normal' },
    { name: 'Noto Sans TC', data: noto400, weight: 400, style: 'normal' },
    { name: 'Archivo', data: archivo900, weight: 900, style: 'normal' },
  ];
  let n = 0;
  for (const p of list) {
    if (!p.out) continue;
    const svg = await satori(card(p), { width: 1200, height: 630, fonts });
    const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
    const file = path.join(dist, p.out);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, png);
    n++;
  }
  console.log(`OG: ${n} images for ${locale}`);
}

// Phrase breaks first: they add no glyphs, and the font slicing reads the final HTML.
for (const locale of locales.length ? locales : [null]) {
  const dir = locale ? path.join(dist, locale) : dist;
  for (const [, file] of pages(dir)) fs.writeFileSync(file, phraseHtml(fs.readFileSync(file, 'utf8'), locale ?? 'zh-Hant'));
  await cjk(dir, locale ? { locale, base: `/${locale}` } : undefined);
  await og(dir, locale ?? 'zh-Hant');
}
