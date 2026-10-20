// The games site's paper still-life photographs (SITE.md "v3", Pictures): the hero at 1920 and
// 960 wide with a phone crop, the section pictures at 1200 and 640. Alternative text lives in the
// content file.
import site from '../../content/sites/games';

const base = '/images/sites/games';
const alt = site.strings.pictures;

export const heroPicture = {
  src: `${base}/hero`,
  widths: [960, 1920],
  width: 1920,
  height: 1280,
  alt: alt.hero,
  position: '100% 55%',
  phone: { src: `${base}/hero-phone`, widths: [640, 960], width: 960, height: 640, position: '50% 50%' },
};

export type SectionPictureName = 'store' | 'library' | 'guides' | 'creators';

export const sectionPicture = (name: SectionPictureName) => ({
  src: `${base}/${name}`,
  widths: [640, 1200],
  width: 1200,
  height: 800,
  alt: alt[name],
  // A paper photograph needs no 1200 px transfer for a 390 px phone band.
  phone: { src: `${base}/${name}`, widths: [640], width: 640, height: 427 },
});
