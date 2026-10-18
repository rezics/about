// The production build (run `task build` first; `task check` does): every route in dist is a
// complete page. Routes come from the build output, so new mini-site pages are covered by
// themselves.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { gzipSync } from 'node:zlib';
import { describe, expect, test } from 'vitest';

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
const pages = built
  ? htmlFiles(dist).map((file) => {
      const rel = relative(dist, file).split(sep).join('/');
      const route = rel === '404.html' ? '/404/' : `/${rel.replace(/index\.html$/, '')}`;
      return { route, html: readFileSync(file, 'utf8') };
    })
  : [];
const attr = (html: string, re: RegExp) => html.match(re)?.[1] ?? null;
const metaContent = (html: string, key: string) => attr(html, new RegExp(`<meta[^>]+(?:name|property)="${key}"[^>]*content="([^"]*)"`));

describe.skipIf(!built)('build output', () => {
  test('there are pages', () => {
    expect(pages.length).toBeGreaterThanOrEqual(20);
    expect(pages.map((p) => p.route)).toEqual(expect.arrayContaining(['/', '/404/', '/notified/', '/books/', '/engine/', '/engine/community/', '/developers/', '/roadmap/']));
  });

  test.each(pages.map((p) => [p.route, p] as const))('%s: one h1, lang, title, description, canonical, OG image, fonts', (route, p) => {
    expect((p.html.match(/<h1[\s>]/g) ?? []).length).toBe(1);
    expect(p.html).toMatch(/<html[^>]+lang="zh-Hant"/);
    expect(attr(p.html, /<title>([^<]+)<\/title>/)?.trim()).toBeTruthy();
    expect(metaContent(p.html, 'description')?.trim()).toBeTruthy();
    const canonical = attr(p.html, /<link rel="canonical" href="([^"]+)"/);
    if (route !== '/404/') expect(canonical).toBe(`${ORIGIN}${route}`);
    const og = metaContent(p.html, 'og:image');
    expect(og).toMatch(new RegExp(`^${ORIGIN}/og/.+\\.png$`));
    expect(existsSync(join(dist, new URL(og!).pathname)), og!).toBe(true);
    expect(p.html).toContain('application/ld+json');
    expect(p.html, 'font slices were written by scripts/postbuild.mjs').not.toContain('name="rezics:fonts"');
    expect(p.html).toContain('"REZICS Sans"');
    expect(p.html).toMatch(/<a class="skip-link" href="#main">/);
  });

  test('titles and descriptions are unique', () => {
    const titles = pages.map((p) => attr(p.html, /<title>([^<]+)<\/title>/));
    const descriptions = pages.map((p) => metaContent(p.html, 'description'));
    expect(new Set(titles).size).toBe(pages.length);
    expect(new Set(descriptions).size).toBe(pages.length);
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

  test('CJK font bytes on the home page stay within 400 KB', () => {
    const report = JSON.parse(readFileSync(join(dist, 'fonts/report.json'), 'utf8')) as { pages: { route: string; bytes: number }[] };
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

  test('every kind picture the pages reference exists with both formats and sizes', () => {
    const refs = new Set(pages.flatMap((p) => [...p.html.matchAll(/\/images\/kinds\/([a-z-]+)-(?:320|960)\.(?:avif|webp)/g)].map((m) => m[1]!)));
    for (const id of refs)
      for (const variant of ['320.avif', '320.webp', '960.avif', '960.webp'])
        expect(existsSync(join(dist, 'images/kinds', `${id}-${variant}`)), `${id}-${variant}`).toBe(true);
  });
});
