// The production build (run `task build` first; `task check` does): every route of every locale
// in dist/<locale>/ is a complete page. Routes come from the build output, so new mini-site pages are covered by
// themselves.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { gzipSync } from 'node:zlib';
import { describe, expect, test } from 'vitest';
import { locales } from '../../src/kit/locales';

const dist = new URL('../../dist/', import.meta.url).pathname;
const ORIGIN = 'https://about.rezics.com';
const SCRIPT_BUDGET = 120 * 1024;
const CJK_HOME_BUDGET = 400 * 1024;

function htmlFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? htmlFiles(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : [],
  );
}
const built = existsSync(dist);
const builtLocales = built ? readdirSync(dist).filter((n) => (locales as readonly string[]).includes(n)) : [];
const pages = builtLocales.flatMap((locale) =>
  htmlFiles(join(dist, locale)).map((file) => {
    const rel = relative(join(dist, locale), file).split(sep).join('/');
    const route = rel === '404.html' ? `/${locale}/404/` : `/${locale}/${rel.replace(/index\.html$/, '')}`;
    return { locale, route, html: readFileSync(file, 'utf8') };
  }),
);
const attr = (html: string, re: RegExp) => html.match(re)?.[1] ?? null;
const metaContent = (html: string, key: string) => attr(html, new RegExp(`<meta[^>]+(?:name|property)="${key}"[^>]*content="([^"]*)"`));

describe.skipIf(!built)('build output', () => {
  test('there are pages', () => {
    expect(pages.length).toBeGreaterThanOrEqual(19);
    for (const l of builtLocales)
      expect(pages.map((p) => p.route)).toEqual(expect.arrayContaining(['/', '/404/', '/books/', '/engine/', '/engine/community/', '/developers/', '/roadmap/'].map((r) => `/${l}${r}`)));
  });

  test.each(pages.map((p) => [p.route, p] as const))('%s: one h1, lang, title, description, canonical, OG image, fonts', (route, p) => {
    expect((p.html.match(/<h1[\s>]/g) ?? []).length).toBe(1);
    expect(p.html).toMatch(new RegExp(`<html[^>]+lang="${p.locale}"`));
    expect(attr(p.html, /<title>([^<]+)<\/title>/)?.trim()).toBeTruthy();
    expect(metaContent(p.html, 'description')?.trim()).toBeTruthy();
    const canonical = attr(p.html, /<link rel="canonical" href="([^"]+)"/);
    if (!route.endsWith('/404/')) expect(canonical).toBe(`${ORIGIN}${route}`);
    const og = metaContent(p.html, 'og:image');
    expect(og).toMatch(new RegExp(`^${ORIGIN}/${p.locale}/og/.+\\.png$`));
    expect(existsSync(join(dist, new URL(og!).pathname)), og!).toBe(true);
    expect(p.html).toContain('application/ld+json');
    expect(p.html, 'font slices were written by scripts/postbuild.mjs').not.toContain('name="rezics:fonts"');
    expect(p.html).toContain('"REZICS Sans"');
    expect(p.html).toContain('"REZICS Serif"');
    expect(p.html, 'the serif that sets the h1 is preloaded').toMatch(new RegExp(`<link rel="preload" href="/${p.locale}/fonts/rezics-serif-`));
    expect(p.html).toMatch(/<a class="skip-link" href="#main">/);
  });

  test.each(builtLocales)('%s: titles and descriptions are unique', (locale) => {
    const own = pages.filter((p) => p.locale === locale);
    expect(new Set(own.map((p) => attr(p.html, /<title>([^<]+)<\/title>/))).size).toBe(own.length);
    expect(new Set(own.map((p) => metaContent(p.html, 'description'))).size).toBe(own.length);
  });

  test.each(pages.map((p) => [p.route, p] as const))('%s: scripts stay within 120 KB gzip', (_, p) => {
    const srcs = [...p.html.matchAll(/<script[^>]+src="([^"]+)"/g)].map((m) => m[1]!);
    const seen = new Set<string>();
    const queue = [...srcs];
    let bytes = 0;
    // Follow static imports between chunks: the browser downloads those too.
    while (queue.length) {
      const src = queue.shift()!;
      if (seen.has(src)) continue;
      seen.add(src);
      const code = readFileSync(join(dist, src), 'utf8');
      bytes += gzipSync(code).length;
      for (const m of code.matchAll(/(?:import|from)\s*["'](\.\/[^"']+\.js|\/_astro\/[^"']+\.js)["']/g))
        queue.push(m[1]!.startsWith('./') ? `/_astro/${m[1]!.slice(2)}` : m[1]!);
    }
    expect(bytes).toBeLessThanOrEqual(SCRIPT_BUDGET);
  });

  test.each(builtLocales)('%s: CJK font bytes on the home page stay within 400 KB', (locale) => {
    const report = JSON.parse(readFileSync(join(dist, locale, 'fonts/report.json'), 'utf8')) as { pages: { route: string; bytes: number }[] };
    const home = report.pages.find((p) => p.route === '/');
    expect(home?.bytes).toBeGreaterThan(0);
    expect(home!.bytes).toBeLessThanOrEqual(CJK_HOME_BUDGET);
  });

  test('sitemap lists every indexable page; robots points to it', () => {
    const index = readFileSync(join(dist, 'sitemap-index.xml'), 'utf8');
    const maps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]!).pathname);
    const listed = maps.flatMap((m) => [...readFileSync(join(dist, m), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => new URL(x[1]!).pathname));
    const indexable = pages.filter((p) => !/<meta name="robots" content="noindex"/.test(p.html)).map((p) => p.route);
    expect([...listed].sort()).toEqual([...indexable].sort());
    expect(readFileSync(join(dist, 'robots.txt'), 'utf8')).toContain(`Sitemap: ${ORIGIN}/sitemap-index.xml`);
  });

  test('no page asks to sign up: every primary action leads into the product', () => {
    for (const p of pages) {
      expect(p.html, p.route).not.toMatch(/\/api\/notify|id="notify"|開放時通知我/);
      expect(p.html, p.route).toContain(`href="https://rezics.com/${p.locale}/"`);
    }
  });

  test('every picture a page references exists', () => {
    const missing = new Set<string>();
    for (const p of pages)
      for (const m of p.html.matchAll(/(?:src|srcset)="([^"]+)"/g))
        for (const url of m[1]!.split(',').map((x) => x.trim().split(/\s+/)[0]!))
          if (url.startsWith('/images/') && !existsSync(join(dist, url))) missing.add(`${p.route}: ${url}`);
    expect([...missing]).toEqual([]);
  });
});
