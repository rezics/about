// Shared pieces of the software site's pages: the pictures, the tiles of its own pages (the
// kind colour's ramp, one colour per page everywhere it appears), the tiles of neighbouring
// kinds, and the next pages that end every inner page.
import site, { type Picture } from '../../content/sites/software';
import { kindById, kindHref } from '../../kit/content';
import { kindFields, type OnField } from '../../kit/theme';
import type { MasonryItem } from '../../kit/components/TileMasonry.astro';
import type { KindId } from '../../content/schema';
import './feedback.css';

const IMG = '/images/sites/software/';
const s = site.strings;

/**
 * A section picture (1200 and 640 wide, 3:2) with a 3:2 phone version at 800 wide: a phone
 * band is 390 css px at twice the density, so without it the browser takes the 1200 file.
 */
export function sectionPicture(p: Picture) {
  return {
    src: `${IMG}${p.name}`,
    widths: [640, 1200],
    width: 1200,
    height: 800,
    alt: p.alt,
    phone: { src: `${IMG}${p.name}-phone`, widths: [800], width: 800, height: 533 },
  };
}

/** The landing hero: 1920 and 960 wide, and a 3:2 phone crop of the fan. */
export const heroPicture = {
  src: `${IMG}${s.pictures.hero.name}`,
  widths: [960, 1920],
  width: 1920,
  height: 1280,
  alt: s.pictures.hero.alt,
  // Preserve the empty paper behind the headline when a tall tablet crops the photograph.
  position: '0% 40%',
  phone: { src: `${IMG}${s.pictures.hero.name}-phone`, widths: [640, 800, 960], width: 960, height: 640, position: '50% 50%' },
};

export const pageHref = (slug: string) => `${site.base}${slug ? `${slug}/` : ''}`;

const inner = site.pages.filter((p) => p.slug !== '');

/**
 * One teal paper per inner page, the same on the landing and in every page's ending: the kind
 * colour for 相容性, deeper and lighter teals of the photographs for the rest, alternating dark
 * and light in reading order so neighbours never share a tone (the kit's accentRamp mixes the
 * teal with the warm paper into greys). Text on each passes AA (5.9:1 or more).
 */
const pageColours: Record<string, { bg: string; on: OnField }> = {
  catalogue: { bg: '#a3c2bf', on: 'ink' },
  compatibility: { bg: kindFields.software.field, on: 'paper' },
  reviews: { bg: '#2f6468', on: 'paper' },
  updates: { bg: '#bcd2ce', on: 'ink' },
  publishing: { bg: '#8fb2b0', on: 'ink' },
  connections: { bg: '#1b3f43', on: 'paper' },
};

/** The six inner pages as tiles. */
export const pageTiles: MasonryItem[] = inner.map((p) => ({
  id: p.slug,
  name: p.label,
  line: (s.landing.pages.lines as Record<string, string>)[p.slug],
  href: pageHref(p.slug),
  ...pageColours[p.slug]!,
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
