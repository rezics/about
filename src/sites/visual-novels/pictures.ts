// The site's paper still-life pictures (SITE.md "Pictures"), in the shape the kit's Picture,
// PhotoHero and PhotoRow take. Descriptions live in the site's content file.
// Files: public/images/sites/visual-novels/<name>-<width>.avif|webp.
import site from '../../content/sites/visual-novels';

const dir = '/images/sites/visual-novels';

const section = (name: keyof typeof site.strings.images) => ({
  src: `${dir}/${name}`,
  widths: [640, 1200],
  width: 1200,
  height: 800,
  alt: site.strings.images[name],
});

export const pictures = {
  /** Violet strips branching like a story's routes; one route in ink blue. */
  routes: {
    src: `${dir}/routes`,
    widths: [960, 1920],
    width: 1920,
    height: 1280,
    alt: site.strings.images.routes,
    position: '100% 50%',
    phone: { src: `${dir}/routes-phone`, widths: [640, 960], width: 960, height: 640, position: '50% 50%' },
  },
  /** A fanned stack with one window cut through every sheet: the release that meets every condition. */
  window: section('window'),
  /** A paler sheet stitched to the deeper one it was made from: a translation and its source. */
  thread: section('thread'),
  /** A strip of panels, the later ones folded shut: the part not yet read. */
  fold: section('fold'),
  /** Two small standing structures folded from one sheet: two Zones on one identity. */
  sites: section('sites'),
};
