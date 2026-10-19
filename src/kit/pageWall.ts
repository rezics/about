/**
 * A mini-site's own pages as a hero wall (DESIGN.md "Direction v2"): one flat tile per page in
 * distinct shades and tints of the site's accent (src/kit/color.ts `accentRamp`), with the
 * page's slug as its Latin id and the site's one-line description under the name. Three columns
 * on wide screens, two on phones, heights varied so the first page stands tallest.
 */
import type { MiniSite } from '../content/schema';
import type { WallItem, WallPlace } from './components/TileWall.astro';
import { accentRamp } from './color';
import { pageHref } from './sites';

export function pageWall(site: MiniSite, accent: string, rows: { slug: string; body: string }[]) {
  const ramp = accentRamp(accent);
  const items: WallItem[] = rows.map((r, i) => {
    const page = site.pages.find((p) => p.slug === r.slug);
    if (!page) throw new Error(`${site.id}: no page "${r.slug}"`);
    return { id: r.slug, name: page.label, tag: r.slug.replace(/-/g, ' '), line: r.body, href: pageHref(site, page), ...ramp[i % ramp.length]! };
  });
  const ids = items.map((it) => it.id);
  const wideShape = [5, 3.2, 4.4, 3.4, 5.2, 4];
  const wide: WallPlace[][] = [[], [], []];
  ids.forEach((id, i) => wide[i % 3]!.push({ id, h: wideShape[i] ?? 4 }));
  // Phones: two columns that keep dark and light alternating down each column.
  const phoneCols = ids.length === 6 ? [[0, 3, 4], [1, 2, 5]] : [ids.map((_, i) => i).filter((i) => i % 2 === 0), ids.map((_, i) => i).filter((i) => i % 2 === 1)];
  const phoneShape = [4, 3.2, 3, 3.8, 3.6, 3.4];
  const phone: WallPlace[][] = phoneCols.map((col) => col.map((i) => ({ id: ids[i]!, h: phoneShape[i] ?? 3.4 })));
  return { items, wide, phone };
}
