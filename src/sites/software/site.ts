// Shared pieces of the software site's pages: the pictures, the tiles of its own pages (the
// kind colour's ramp, one colour per page everywhere it appears), the tiles of neighbouring
// kinds, and the next pages that end every inner page.
import site, { type Picture } from '../../content/sites/software';
import { kindById, kindHref } from '../../kit/content';
import { accentRamp } from '../../kit/color';
import { kindFields } from '../../kit/theme';
import type { MasonryItem } from '../../kit/components/TileMasonry.astro';
import type { KindId } from '../../content/schema';

const IMG = '/images/sites/software/';
const s = site.strings;

/** A section picture (1200 and 640 wide, 3:2). */
export function sectionPicture(p: Picture) {
  return { src: `${IMG}${p.name}`, widths: [640, 1200], width: 1200, height: 800, alt: p.alt };
}

/** The landing hero: 1920 and 960 wide, and a 3:2 phone crop of the fan. */
export const heroPicture = {
  src: `${IMG}${s.pictures.hero.name}`,
  widths: [960, 1920],
  width: 1920,
  height: 1280,
  alt: s.pictures.hero.alt,
  position: '100% 40%',
  phone: { src: `${IMG}${s.pictures.hero.name}-phone`, widths: [640, 960], width: 960, height: 640, position: '50% 50%' },
};

export const pageHref = (slug: string) => `${site.base}${slug ? `${slug}/` : ''}`;

const ramp = accentRamp(kindFields.software.field);
const inner = site.pages.filter((p) => p.slug !== '');

/** The six inner pages as tiles, each in its own step of the kind colour. */
export const pageTiles: MasonryItem[] = inner.map((p, i) => ({
  id: p.slug,
  name: p.label,
  line: (s.landing.pages.lines as Record<string, string>)[p.slug],
  href: pageHref(p.slug),
  bg: ramp[i % ramp.length]!.bg,
  on: ramp[i % ramp.length]!.on,
}));

/** A neighbouring kind as a tile in its own colour. */
export function kindTile(id: KindId, line?: string): MasonryItem {
  const k = kindById(id);
  return { id, name: k.name, line, href: kindHref(id), bg: kindFields[id].field, on: kindFields[id].on };
}

/** The pages after `slug` in site order (the last page leads to the next site instead). */
export function nextTiles(slug: string, count = 2): MasonryItem[] {
  const i = inner.findIndex((p) => p.slug === slug);
  return pageTiles.slice(i + 1, i + 1 + count);
}
