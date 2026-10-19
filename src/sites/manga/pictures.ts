// The manga site's paper still-life pictures (SITE.md "v3", Pictures): files in
// public/images/sites/manga/, named `<name>-<width>.avif|webp`, the hero's phone crop
// `hero-phone-<width>`. The 800 wide files serve phones at two device pixels (390 css px), so
// they do not fetch the 1200 or 960 file. Returns the props a kit Picture, PhotoHero or PhotoRow takes.
import type { MangaPicture } from '../../content/sites/manga';

const base = '/images/sites/manga/';

export function hero(p: MangaPicture) {
  return {
    src: `${base}${p.name}`,
    widths: [960, 1920],
    width: 1920,
    height: 1280,
    alt: p.alt,
    // The sheet sits on the right; the copy takes the empty paper on the left.
    position: '100% 50%',
    phone: { src: `${base}${p.name}-phone`, widths: [640, 800, 960], width: 960, height: 640, position: '50% 50%' },
  };
}

export function photo(p: MangaPicture) {
  return { src: `${base}${p.name}`, widths: [640, 800, 1200], width: 1200, height: 800, alt: p.alt };
}
