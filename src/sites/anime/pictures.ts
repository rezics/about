// The anime site's paper still-lifes (SITE.md "Pictures"): file names and intrinsic sizes for the
// kit's Picture, PhotoRow and PhotoHero. Files live in public/images/sites/anime/.
import type { Photo } from '../../content/sites/anime';

const BASE = '/images/sites/anime/';

/** A section picture: 1200 and 640 wide, 3:2. */
export const sectionPhoto = (p: Photo) => ({ src: BASE + p.src, widths: [640, 1200], width: 1200, height: 800, alt: p.alt });

/** The landing hero: 1920 and 960 wide, the empty paper on the left; phones get the strip cropped to 3:2. */
export const heroPhoto = (p: Photo) => ({
  src: BASE + p.src,
  widths: [960, 1920],
  width: 1920,
  height: 1280,
  alt: p.alt,
  position: '100% 50%',
  phone: { src: `${BASE}${p.src}-phone`, widths: [640, 960], width: 960, height: 640, position: '50% 50%' },
});
