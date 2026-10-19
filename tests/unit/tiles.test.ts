// Flat colour tiles: masonry placement and the text colour on every ground.
import { describe, expect, test } from 'vitest';
import { place } from '../../src/kit/masonry';
import { accentRamp, contrast } from '../../src/kit/color';
import { kindFields, palette } from '../../src/kit/theme';

describe('masonry placement', () => {
  const items = [{ h: 9, col: 1 }, { h: 8, col: 2 }, { h: 7, col: 3 }, { h: 7, col: 1 }, { h: 7, col: 2 }, { h: 8, col: 3 }, { h: 5, col: 1 }, { h: 6, col: 2 }, { h: 6, col: 3 }];
  const bottoms = (ps: ReturnType<typeof place>, cols: number) =>
    Array.from({ length: cols }, (_, c) => Math.max(...ps.filter((p) => p.col === c + 1).map((p) => p.row + p.span)));

  test('the wide layout keeps each tile in its column, stacked without overlap', () => {
    const ps = place(items, 3);
    expect(ps.map((p) => p.col)).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
    for (let c = 1; c <= 3; c++) {
      const col = ps.filter((p) => p.col === c);
      for (let i = 1; i < col.length; i++) expect(col[i]!.row).toBe(col[i - 1]!.row + col[i - 1]!.span);
    }
  });

  test('every column ends level, wide and narrow; a short column grows its tiles a little', () => {
    expect(new Set(bottoms(place(items, 3), 3)).size).toBe(1);
    const narrow = place(items, 2, false);
    expect(new Set(bottoms(narrow, 2)).size).toBe(1);
    narrow.forEach((p, i) => expect(p.span - items[i]!.h).toBeLessThanOrEqual(2));
  });
});

describe('tile colours', () => {
  test('every kind field takes text that passes AA', () => {
    for (const f of Object.values(kindFields)) expect(contrast(palette[f.on], f.field)).toBeGreaterThanOrEqual(4.5);
  });
  test.each(Object.entries(kindFields))('the %s accent ramp gives six distinct grounds, each with AA text', (_, f) => {
    const ramp = accentRamp(f.field);
    expect(new Set(ramp.map((r) => r.bg)).size).toBe(6);
    for (const r of ramp) expect(contrast(palette[r.on], r.bg)).toBeGreaterThanOrEqual(4.5);
  });
});
