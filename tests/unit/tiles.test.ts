// Flat tiles: the text colour on every ground passes AA.
import { describe, expect, test } from 'vitest';
import { accentRamp, contrast, textOn } from '../../src/kit/color';
import { inkOn, kindFields, moduleFields, palette } from '../../src/kit/theme';

describe('tile colours', () => {
  test('every kind and module field takes text that passes AA', () => {
    for (const f of [...Object.values(kindFields), ...Object.values(moduleFields)]) expect(contrast(inkOn(f.field, f.on), f.field)).toBeGreaterThanOrEqual(4.5);
  });
  test.each(Object.entries(kindFields))('the %s accent ramp gives six distinct grounds, each with AA text', (_, f) => {
    const ramp = accentRamp(f.field);
    expect(new Set(ramp.map((r) => r.bg)).size).toBe(6);
    for (const r of ramp) expect(contrast(inkOn(r.bg, r.on), r.bg)).toBeGreaterThanOrEqual(4.5);
  });
  test('textOn with inkOn gives AA text on any kind field and on ink', () => {
    for (const f of [...Object.values(kindFields).map((k) => k.field), palette.ink])
      expect(contrast(inkOn(f, textOn(f)), f)).toBeGreaterThanOrEqual(4.5);
  });
});
