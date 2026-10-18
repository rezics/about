// Mini-sites: discovered from src/content/sites/*.ts, each owning its base path and pages.
import { describe, expect, test } from 'vitest';
import { kindIds, moduleIds } from '../../src/content/schema';
import { navigationOrder, nextSite, pageHref, siteById, siteFor, sites } from '../../src/kit/sites';

describe('mini-sites', () => {
  test('every kind, every module, the engine overview, developers and the roadmap is a site', () => {
    for (const id of kindIds) expect(siteById(id)?.base, id).toBe(`/${id}/`);
    for (const id of moduleIds) expect(siteById(id)?.base, id).toBe(`/engine/${id}/`);
    expect(siteById('engine')?.base).toBe('/engine/');
    expect(siteById('developers')?.base).toBe('/developers/');
    expect(siteById('roadmap')?.base).toBe('/roadmap/');
  });

  test('ids and bases are unique; pages have unique slugs, labels and metadata', () => {
    expect(new Set(sites.map((s) => s.id)).size).toBe(sites.length);
    expect(new Set(sites.map((s) => s.base)).size).toBe(sites.length);
    for (const s of sites) {
      expect(s.pages[0]?.slug, s.id).toBe('');
      expect(new Set(s.pages.map((p) => p.slug)).size, s.id).toBe(s.pages.length);
      for (const p of s.pages) {
        expect(p.slug, s.id).toMatch(/^([a-z0-9-]+(\/[a-z0-9-]+)*)?$/);
        expect(p.label.trim(), s.id).toBeTruthy();
        expect(p.meta.title.trim(), s.id).toBeTruthy();
        expect(p.meta.description.trim(), s.id).toBeTruthy();
      }
    }
  });

  test('a module page never collides with the engine overview: the longest base wins', () => {
    expect(siteFor('/engine/')?.site.id).toBe('engine');
    expect(siteFor('/engine/community/')?.site.id).toBe('community');
    expect(siteFor('/books/')?.page.slug).toBe('');
    expect(siteFor('/books/no-such-page/')).toBeUndefined();
    const books = siteById('books')!;
    expect(pageHref(books, books.pages[0]!)).toBe('/books/');
  });

  test('the next-site finale follows the navigation order, then wraps', () => {
    const chain = navigationOrder.map((id) => nextSite(siteById(id)!)?.id);
    expect(chain).toEqual([...navigationOrder.slice(1), navigationOrder[0]]);
    expect(navigationOrder.at(-1)).toBe('developers');
    expect(nextSite(siteById('trust')!)?.id).toBe('universal-index');
    expect(nextSite(siteById('roadmap')!)).toBeUndefined();
  });
});
