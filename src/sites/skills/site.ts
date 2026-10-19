// Skill Hub's shared page data: the pictures (paper still lifes, SITE.md "Pictures") and the
// tiles of its own pages, coloured from the kind's paper by the kit's ramp so a page keeps one
// colour wherever its tile appears (the landing masonry and the next-page tile).
import site, { type Pic } from '../../content/sites/skills';
import { accentRamp } from '../../kit/color';
import { pageHref } from '../../kit/sites';
import { kindFields } from '../../kit/theme';
import type { MasonryItem } from '../../kit/components/TileMasonry.astro';

const base = '/images/sites/skills/';

/** The landing hero: 1536 × 1024 master, empty paper on the left; the phone crop is its right part. */
export const heroImage = (pic: Pic) => ({
  src: base + pic.src,
  widths: [960, 1920],
  width: 1920,
  height: 1280,
  alt: pic.alt,
  position: '100% 50%',
  phone: { src: `${base}${pic.src}-phone`, widths: [640, 960], width: 960, height: 640, position: '50% 50%' },
});

/** A section picture (photo row), 3:2. */
export const sectionImage = (pic: Pic) => ({
  src: base + pic.src,
  widths: [640, 1200],
  width: 1200,
  height: 800,
  alt: pic.alt,
});

// Ramp stops (color.ts): 0 the accent, 1 a pale tint, 2 a deep shade, 4 a deeper shade, 5 a
// tint. Stop 3 is left out: it is nearly the paper ground.
const ramp = accentRamp(kindFields.skills.field);
const stopFor: Record<string, number> = { directory: 0, versions: 2, evidence: 5, use: 4, publish: 1 };

/** A tile for one of the site's own pages, with its one line. */
export function pageTile(slug: string, line: string): MasonryItem {
  const page = site.pages.find((p) => p.slug === slug);
  if (!page) throw new Error(`skills: no page "${slug}"`);
  const colour = ramp[stopFor[slug] ?? 0]!;
  return { id: slug, name: page.label, line, href: pageHref(site, page), bg: colour.bg, on: colour.on };
}

/** The line each page's tile carries (the landing's masonry). */
export const pageLine = (slug: string): string => {
  const tile = site.strings.landing.pages.tiles.find((t) => t.slug === slug);
  if (!tile) throw new Error(`skills: no tile line for "${slug}"`);
  return tile.line;
};
