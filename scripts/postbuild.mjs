#!/usr/bin/env node
// After `astro build`: slice the CJK font by actual use (scripts/fonts.mjs) and render one Open
// Graph image per built page into dist/og/<slug>.png (the path BaseLayout puts in og:image).
// Both read the build output, so new pages need no registration.
//   node scripts/postbuild.mjs [dist]
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import subsetFont from 'subset-font';
import { cjk, pages, source } from './fonts.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const dist = path.resolve(process.argv[2] ?? path.join(root, 'dist'));

const decode = (s) =>
  s.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const meta = (html, key) => decode(html.match(new RegExp(`<meta[^>]+(?:name|property)="${key}"[^>]*content="([^"]*)"`, 'i'))?.[1] ?? '');

const PAPER = '#f4f5f2';
const INK = '#0e1420';
const MUTED = '#566070';
const MARK = '#df3d35';
const KIND_FIELDS = ['#1d5a47', '#b03a62', '#181b22', '#2a49c9', '#0d6873', '#5a3d9e', '#efb53f', '#c7d35a', '#93c4ef'];

function h(type, style, children) {
  return { type, props: { style, children } };
}

// The same rule as src/kit/fit.ts: a middle connective becomes a small glyph between two lines.
function nameBlock(name, color) {
  const chars = [...name];
  const mid = (chars.length - 1) / 2;
  if (chars.length >= 3 && chars.length % 2 === 1 && '與和及之的'.includes(chars[mid])) {
    const size = Math.min(360 / (chars.length - 1 - mid), 360 / 2.4);
    return h('div', { display: 'flex', flexDirection: 'column', color, fontWeight: 900, lineHeight: 1, fontSize: size }, [
      h('div', {}, chars.slice(0, mid).join('')),
      h('div', { fontSize: size * 0.34, lineHeight: 1.2, paddingLeft: 6 }, chars[mid]),
      h('div', {}, chars.slice(mid + 1).join('')),
    ]);
  }
  return h('div', { color, fontSize: chars.length <= 2 ? 172 : chars.length <= 4 ? 86 : 64, fontWeight: 900, lineHeight: 1, display: 'flex', flexWrap: 'wrap', width: 360 }, name);
}

function card({ title, description, name, field, onField }) {
  const square = field
    ? h('div', { width: 440, height: 440, background: field, display: 'flex', padding: 30 }, [
        nameBlock(name, onField),
      ])
    : h('div', { width: 440, height: 440, display: 'flex', flexWrap: 'wrap', gap: 10 }, KIND_FIELDS.map((c) => h('div', { width: 140, height: 140, background: c }, [])));
  const clip = (s, n) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);
  // A page with its own square states its description large; the home page leads with its title.
  const text = field
    ? [h('div', { fontSize: 40, fontWeight: 900, lineHeight: 1.35, color: INK }, clip(description, 46))]
    : [
        h('div', { fontSize: 56, fontWeight: 900, lineHeight: 1.15, color: INK }, clip(title, 30)),
        h('div', { fontSize: 26, fontWeight: 400, lineHeight: 1.6, color: MUTED }, clip(description, 52)),
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
        h('div', { fontFamily: 'Archivo', fontWeight: 900, fontSize: 24, letterSpacing: 5, color: INK }, 'REZICS'),
      ]),
      h('div', { display: 'flex', flexDirection: 'column', gap: 20 }, text),
    ]),
    h('div', { display: 'flex', alignItems: 'flex-end', width: 476, justifyContent: 'flex-end' }, [square]),
  ])]);
}

async function og() {
  const list = pages(dist).map(([route, file]) => {
    const html = fs.readFileSync(file, 'utf8');
    const image = meta(html, 'og:image');
    const full = meta(html, 'og:title');
    const title = full.split('｜')[0] || full;
    const body = html.match(/<body[^>]*>/)?.[0] ?? '';
    const field = body.match(/--field:(#[0-9a-f]{3,8})/i)?.[1];
    const onField = body.match(/--on-field:(#[0-9a-f]{3,8})/i)?.[1] ?? PAPER;
    return { route, out: image ? new URL(image).pathname : null, title, description: meta(html, 'og:description'), name: title, field, onField };
  });
  const text = list.map((p) => p.title + p.description).join('') + 'REZICS…';
  const [noto900, noto400, archivo900] = await Promise.all([
    subsetFont(await source('noto'), text, { targetFormat: 'truetype', variationAxes: { wght: 900 } }),
    subsetFont(await source('noto'), text, { targetFormat: 'truetype', variationAxes: { wght: 400 } }),
    subsetFont(await source('archivo'), 'REZICS…', { targetFormat: 'truetype', variationAxes: { wght: 900, wdth: 100 } }),
  ]);
  const fonts = [
    { name: 'Noto Sans TC', data: noto900, weight: 900, style: 'normal' },
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
  console.log(`OG: ${n} images in ${path.relative(root, path.join(dist, 'og'))}/`);
}

await cjk(dist);
await og();
