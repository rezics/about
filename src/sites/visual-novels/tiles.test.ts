// Every page tile of the visual-novels site carries text at AA, and each page has its own colour.
import { describe, expect, test } from 'vitest';
import site from '../../content/sites/visual-novels';
import { pageTiles, tileContrast } from './tiles';

describe('page tiles', () => {
  const inner = site.pages.filter((p) => p.slug).map((p) => p.slug);
  test('every inner page has a tile colour, all distinct', () => {
    expect(Object.keys(pageTiles).sort()).toEqual([...inner].sort());
    expect(new Set(Object.values(pageTiles).map((t) => t.bg)).size).toBe(inner.length);
  });
  test.each(inner)('%s passes AA', (slug) => {
    expect(tileContrast(slug)).toBeGreaterThanOrEqual(4.5);
  });
});
