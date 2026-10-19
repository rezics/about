// State logic of the games site's drivers. Runs once the kit's vitest config includes
// src/sites/**/*.test.ts (requested in the stage 2 report).
import { describe, expect, test } from 'vitest';
import { indexAt, itemState } from './inventory';
import { matching } from './table';
import site from '../../content/sites/games';

describe('inventory driver', () => {
  const from = { dx: -300, dy: -120, s: 0.5 };
  test('an item starts inside the source cell, hidden, and ends in its slot', () => {
    expect(itemState(0, 0, from)).toEqual({ x: -300, y: -120, scale: 0.5, opacity: 0 });
    expect(itemState(1, 8, from)).toEqual({ x: 0, y: 0, scale: 1, opacity: 1 });
  });
  test('items travel along x first, then along y (never diagonally)', () => {
    const mid = itemState(0.15, 0, from);
    expect(mid.y).toBe(-120);
    expect(mid.x).toBeGreaterThan(-300);
    const late = itemState(0.45, 0, from);
    expect(late.x).toBe(0);
    expect(late.y).toBeGreaterThan(-120);
  });
  test('later items leave the cell later', () => {
    expect(itemState(0.1, 8, from).opacity).toBe(0);
    expect(itemState(0.1, 0, from).opacity).toBe(1);
  });
  test('scroll progress selects every slot once, in order', () => {
    const n = 9;
    const seen = new Set<number>();
    for (let p = 0; p <= 1; p += 0.001) seen.add(indexAt(p, n));
    expect([...seen]).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    expect(indexAt(0, n)).toBe(0);
    expect(indexAt(1, n)).toBe(8);
  });
});

describe('releases table', () => {
  const releases = site.strings.example.releases;
  test('language and platform must hold on the same release', () => {
    const hits = matching(releases, 'zh', 'handheld');
    expect(hits.map((r) => r.id)).toEqual(['handheld-asia']);
  });
  test('an absent condition matches everything; impossible pairs match nothing', () => {
    expect(matching(releases, null, null)).toHaveLength(releases.length);
    expect(matching(releases, 'en', 'mobile')).toHaveLength(0);
  });
  test('every inventory item that names a platform release agrees with the table', () => {
    const ids = new Set(releases.map((r) => r.id));
    for (const id of ['pc-std', 'pc-deluxe', 'console-complete', 'handheld-asia']) expect(ids.has(id)).toBe(true);
  });
});
