// Every text/field pair passes WCAG AA, and tokens.css repeats theme.ts exactly.
import { readFileSync } from 'node:fs';
import { describe, expect, test } from 'vitest';
import { kindFields, moduleFields, palette, siteFields, fieldOf, type Field } from '../../src/kit/theme';
import { sites } from '../../src/kit/sites';

function luminance(hex: string) {
  const n = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
}
export function contrast(a: string, b: string) {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return (x! + 0.05) / (y! + 0.05);
}
const text = (f: Field) => palette[f.on];

describe('contrast', () => {
  test.each(Object.entries({ ...kindFields, ...moduleFields, ...siteFields }))('text on the %s field passes AA (4.5:1)', (_, f) => {
    expect(contrast(text(f), f.field)).toBeGreaterThanOrEqual(4.5);
  });

  test.each(sites.map((s) => [s.id, s] as const))('the %s site field passes AA', (_, s) => {
    const f = fieldOf(s.theme);
    expect(contrast(text(f), f.field)).toBeGreaterThanOrEqual(4.5);
  });

  test('text roles on paper and on ink bands pass AA', () => {
    expect(contrast(palette.ink, palette.paper)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(palette.muted, palette.paper)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(palette.link, palette.paper)).toBeGreaterThanOrEqual(4.5);
    expect(contrast('#a9b2c1', palette.ink)).toBeGreaterThanOrEqual(4.5); // muted on .band-ink
    expect(contrast('#9ab8e6', palette.ink)).toBeGreaterThanOrEqual(3); // focus ring on .band-ink
    expect(contrast(palette.link, palette.paper)).toBeGreaterThanOrEqual(3); // focus ring on paper
  });

  test('the developers field is REZICS ink blue with paper text', () => {
    expect(siteFields.developers).toEqual({ field: palette.link, on: 'paper' });
  });
});

describe('tokens.css', () => {
  const css = readFileSync(new URL('../../src/styles/tokens.css', import.meta.url), 'utf8');
  test.each(Object.entries(palette))('--c-%s matches theme.ts', (name, value) => {
    expect(css).toContain(`--c-${name}: ${value};`);
  });
});
