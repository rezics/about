import { expect, test } from 'vitest';
import { pictureSrcSet } from '../../src/kit/pictures';

test('responsive sources are ordered without mutating the image definition', () => {
  const image = { src: '/images/sites/anime/hero', widths: [1920, 960] };
  expect(pictureSrcSet(image, 'avif')).toBe('/images/sites/anime/hero-960.avif 960w, /images/sites/anime/hero-1920.avif 1920w');
  expect(image.widths).toEqual([1920, 960]);
});

test('single phone sources and WebP fallbacks use the same naming rule', () => {
  expect(pictureSrcSet({ src: '/images/sites/games/guides', widths: [640] }, 'avif')).toBe('/images/sites/games/guides-640.avif 640w');
  expect(pictureSrcSet({ src: '/images/home/hero', widths: [960, 1920] }, 'webp')).toBe('/images/home/hero-960.webp 960w, /images/home/hero-1920.webp 1920w');
});
