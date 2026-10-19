// Tiles of the anime site (SITE.md "Theme"): the site's own pages take shades and tints of the
// accent from the kit's ramp (each with AA text), neighbouring kinds take their own colour.
import type { MasonryItem } from '../../kit/components/TileMasonry.astro';
import { accentRamp } from '../../kit/color';
import { kindById, kindHref } from '../../kit/content';
import { kindFields } from '../../kit/theme';
import type { KindId } from '../../content/schema';
import site from '../../content/sites/anime';

const ramp = accentRamp(kindFields.anime.field);
/** Ramp stops: 0 the accent, 1 and 3 light tints, 2 and 4 deep shades, 5 a mid tint. */
export const tone = (i: number) => ramp[i % ramp.length]!;

const lines = new Map(site.strings.landing.pages.lines.map((l) => [l.slug, l.line]));

/** A tile for one of the site's own pages, in ramp stop `stop`. */
export function pageTile(slug: string, stop: number): MasonryItem {
  const page = site.pages.find((p) => p.slug === slug);
  if (!page) throw new Error(`anime: no page '${slug}'`);
  const { bg, on } = tone(stop);
  return { id: slug, name: page.label, line: lines.get(slug), href: `${site.base}${slug}/`, bg, on };
}

/** A tile for a neighbouring kind, in its own colour. */
export function kindTile(id: KindId, line?: string): MasonryItem {
  const k = kindById(id);
  return { id, name: k.name, line: line ?? k.summary, href: kindHref(id), bg: kindFields[id].field, on: kindFields[id].on };
}
