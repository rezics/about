// Flat tiles: the text colour on every ground passes AA.
import { describe, expect, test } from 'vitest';
import { accentRamp, contrast, textOn } from '../../src/kit/color';
import { kindFields, palette } from '../../src/kit/theme';

describe('tile colours', () => {
  test('every kind field takes text that passes AA', () => {
    for (const f of Object.values(kindFields)) expect(contrast(palette[f.on], f.field)).toBeGreaterThanOrEqual(4.5);
  });
  test.each(Object.entries(kindFields))('the %s accent ramp gives six distinct grounds, each with AA text', (_, f) => {
    const ramp = accentRamp(f.field);
    expect(new Set(ramp.map((r) => r.bg)).size).toBe(6);
    for (const r of ramp) expect(contrast(palette[r.on], r.bg)).toBeGreaterThanOrEqual(4.5);
  });
  test('the closing block takes paper or ink that passes AA on any field', () => {
    for (const f of [...Object.values(kindFields).map((k) => k.field), palette.ink])
      expect(contrast(palette[textOn(f)], f)).toBeGreaterThanOrEqual(4.5);
  });
});
