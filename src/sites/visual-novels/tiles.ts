// One flat colour per page of this site, wherever its tile appears (the landing's masonry and
// the next-page masonry at the end of every inner page). Shades and tints of the accent violet,
// chosen so the masonry alternates deep and light in both layouts; tiles.test.ts checks AA.
import { contrast, mix } from '../../kit/color';
import { inkOn, kindFields, palette, type OnField } from '../../kit/theme';

const accent = kindFields['visual-novels'].field;
const deep = (t: number) => mix(accent, '#1a1c1f', t);
const light = (t: number) => mix(accent, palette.paper, t);

export const pageTiles: Record<string, { bg: string; on: OnField }> = {
  releases: { bg: accent, on: 'paper' },
  translations: { bg: light(0.55), on: 'ink' },
  characters: { bg: light(0.3), on: 'ink' },
  spoilers: { bg: deep(0.45), on: 'paper' },
  wiki: { bg: deep(0.25), on: 'paper' },
  zones: { bg: light(0.45), on: 'ink' },
};

/** The contrast of a page tile's text on its ground (for the test). */
export const tileContrast = (slug: string) => {
  const t = pageTiles[slug]!;
  return contrast(inkOn(t.bg, t.on), t.bg);
};
