/**
 * Tiles for a TileMasonry (v3): the kinds in their paper colours, a site's own pages in shades
 * and tints of its accent, and the layout of a single row.
 *
 *   kindTiles(['books', 'manga'])                      neighbouring kinds, with their summaries
 *   pageTiles(site, field, [{ slug: 'editions', line }]) a site's own pages (accentRamp shades)
 *   oneRow(items)                                       columns for one level row of tiles
 */
import type { KindId, MiniSite } from '../content/schema';
import type { MasonryItem, MasonryPlace } from './components/TileMasonry.astro';
import { kindById, kindHref } from './content';
import { kindFields } from './theme';
import { accentRamp } from './color';
import { pageHref } from './sites';

export function kindTiles(ids: KindId[], lines: Partial<Record<KindId, string>> = {}): MasonryItem[] {
  return ids.map((id) => {
    const k = kindById(id);
    return { id, name: k.name, line: lines[id] ?? k.summary, href: kindHref(id), bg: kindFields[id].field, on: kindFields[id].on };
  });
}

export function pageTiles(site: MiniSite, accent: string, rows: { slug: string; line?: string; name?: string }[]): MasonryItem[] {
  const ramp = accentRamp(accent);
  return rows.map((r, i) => {
    const page = site.pages.find((p) => p.slug === r.slug);
    if (!page) throw new Error(`${site.id}: no page "${r.slug}"`);
    const shade = ramp[i % ramp.length]!;
    return { id: r.slug || 'home', name: r.name ?? page.label, line: r.line, href: pageHref(site, page), bg: shade.bg, on: shade.on };
  });
}

export const oneRow = (items: { id: string }[]): MasonryPlace[][] => items.map((it) => [{ id: it.id, h: 1 }]);
