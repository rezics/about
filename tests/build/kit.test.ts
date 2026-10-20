import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, test } from 'vitest';

const dist = new URL('../../dist/', import.meta.url);
const built = existsSync(new URL('index.html', dist));
const html = (route: string) => readFileSync(new URL(`${route.replace(/^\//, '')}index.html`, dist), 'utf8');
const firstRow = (page: string) => page.match(/<section\b[^>]*class="prow\b[\s\S]*?<\/section>/)?.[0] ?? '';
const attrs = (tag: string) => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1], m[2]]));

describe.skipIf(!built)('shared photograph options', () => {
  const priority = ['/anime/credits/', '/anime/adaptations/', '/developers/apps/', '/games/guides/', '/manga/series/', '/manga/progress/', '/manga/adaptations/', '/manga/publish/', '/mcp/directory/', '/mcp/evidence/', '/mcp/versions/', '/skills/publish/', '/software/catalogue/', '/software/compatibility/', '/software/connections/'];
  test.each(priority)('%s forwards PhotoRow priority to its image', route => {
    const row = firstRow(html(route));
    const image = attrs(row.match(/<img\b[^>]*>/)?.[0] ?? '');
    expect(image.loading).toBe('eager');
    expect(image.fetchpriority).toBe('high');
    expect(image.decoding).toBe('sync');
    expect(image.width).toBeTruthy();
    expect(image.height).toBeTruthy();
  });

  test('rows without priority keep lazy loading', () => {
    const image = attrs(firstRow(html('/')).match(/<img\b[^>]*>/)?.[0] ?? '');
    expect(image.loading).toBe('lazy');
    expect(image.fetchpriority).toBeUndefined();
  });

  test.each(priority.filter(route => !route.startsWith('/mcp/')))('%s places responsive preloads in the document head and matches Picture sources', route => {
    const page = html(route);
    const head = page.match(/<head[\s\S]*?<\/head>/)![0];
    const body = page.slice(page.indexOf('<body'));
    const links = [...head.matchAll(/<link\b[^>]*as="image"[^>]*>/g)].map(m => attrs(m[0]));
    const sources = [...firstRow(page).matchAll(/<source\b[^>]*type="image\/avif"[^>]*>/g)].map(m => attrs(m[0]));
    expect(links.length).toBeGreaterThan(0);
    expect(body).not.toMatch(/<link\b[^>]*as="image"/);
    for (const link of links) {
      const source = link.media === '(max-width: 767px)' ? sources.find(s => s.media === link.media) ?? sources.find(s => !s.media)! : sources.find(s => !s.media)!;
      expect(link.imagesrcset).toBe(source.srcset);
      expect(link.imagesizes).toBe(link.media === '(max-width: 767px)' ? '100vw' : source.sizes);
      expect(link.type).toBe('image/avif');
      expect(link.fetchpriority).toBe('high');
    }
  });

  test('media-scoped hints preserve the intended phone and desktop policies', () => {
    const head = (route: string) => html(route).match(/<head[\s\S]*?<\/head>/)![0];
    expect(head('/anime/adaptations/')).toMatch(/as="image"[^>]*media="\(min-width: 768px\)"/);
    expect(head('/anime/adaptations/')).not.toMatch(/as="image"[^>]*media="\(max-width: 767px\)"/);
    expect(head('/games/guides/')).toContain('guides-640.avif 640w');
    expect(head('/games/guides/')).not.toContain('guides-1200.avif');
  });

  test('MCP hero reuses its existing phone rendition in a matching head hint', () => {
    const page = html('/mcp/');
    const head = page.match(/<head[\s\S]*?<\/head>/)![0];
    const hero = page.match(/<section\b[^>]*class="phero\b[\s\S]*?<\/section>/)![0];
    const hint = attrs(head.match(/<link\b[^>]*as="image"[^>]*>/)![0]);
    const sources = [...hero.matchAll(/<source\b[^>]*type="image\/avif"[^>]*>/g)].map(m => attrs(m[0]));
    const phone = sources.find(s => s.media === '(max-width: 767px)')!;
    expect(phone.srcset).toBe('/images/sites/mcp/hero-phone-640.avif 640w');
    expect(hint.media).toBe(phone.media);
    expect(hint.imagesrcset).toBe(phone.srcset);
    expect(hint.imagesizes).toBe(phone.sizes);
    expect(hint.fetchpriority).toBe('high');
    expect(sources.find(s => !s.media)!.srcset).toBe('/images/sites/mcp/hero-960.avif 960w, /images/sites/mcp/hero-1920.avif 1920w');
  });
});

describe.skipIf(!built)('shared module family', () => {
  test.each(['universal-index', 'community', 'zones', 'create', 'trust'])('%s has one ring with the current module unlinked', current => {
    const page = html(`/engine/${current}/`);
    const ring = page.match(/<nav\b[^>]*class="ring"[\s\S]*?<\/nav>/)![0];
    expect(ring).toContain('你在這裡');
    expect(ring).toContain('回到模組總覽');
    expect(ring).not.toContain(`href="/engine/${current}/"`);
    for (const other of ['universal-index', 'community', 'zones', 'create', 'trust'].filter(id => id !== current)) expect(ring).toContain(`href="/engine/${other}/"`);
  });
  test('footer retains the privacy sentence without the type colophon', () => {
    const footer = html('/').match(/<footer[\s\S]*?<\/footer>/)![0];
    expect(footer).toContain('本站不做流量分析');
    expect(footer).not.toMatch(/Noto|Manrope/);
  });
});
