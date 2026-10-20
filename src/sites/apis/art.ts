// API Hub's pictures and flat colours (SITE.md "v3"). The five paper still-lifes live in
// public/images/sites/apis/ as `<name>-<width>.avif|webp`; the tile colours are the pale blue
// of the API paper, its lighter and deeper shades, and its two neighbours in the pictures:
// slate (the request strip) and ink blue (the sheet under the punched sheets).
import type { OnField } from '../../kit/theme';
import site from '../../content/sites/apis';

const alt = site.strings.pictures;
const base = '/images/sites/apis';

/** The landing hero and its phone crop. */
export const heroPicture = {
  src: `${base}/apis-hero`,
  widths: [960, 1920],
  width: 1920,
  height: 1280,
  alt: alt.hero,
  position: '0% 50%',
  phone: { src: `${base}/apis-hero-phone`, widths: [640, 960], width: 960, height: 640, position: '50% 50%' },
};

const section = (name: 'request' | 'versions' | 'specs' | 'connections') => ({
  src: `${base}/apis-${name}`,
  widths: [640, 1200],
  width: 1200,
  height: 800,
  alt: alt[name],
});

/** The section pictures: under an inner page's head, and as photo rows on the landing. */
export const pictures = {
  request: section('request'),
  versions: section('versions'),
  specs: section('specs'),
  connections: section('connections'),
};

/** Flat tile colours, each with the text that passes AA on it. */
export const tones = {
  blue: { bg: '#a9c3dc', on: 'ink' },
  light: { bg: '#c8d8e7', on: 'ink' },
  mid: { bg: '#86a5c4', on: 'ink' },
  deep: { bg: '#4c6a8c', on: 'paper' },
  slate: { bg: '#3b4a5a', on: 'paper' },
  inkBlue: { bg: '#2f4fa3', on: 'paper' },
} satisfies Record<string, { bg: string; on: OnField }>;
