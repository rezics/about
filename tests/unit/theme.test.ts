// Every text/field pair passes WCAG AA, and tokens.css repeats theme.ts exactly.
import { readFileSync } from 'node:fs';
import { describe, expect, test } from 'vitest';
import { kindFields, moduleFields, palette, siteFields, fieldOf, fieldText, inkOn } from '../../src/kit/theme';
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

describe('contrast', () => {
  test.each(Object.entries({ ...kindFields, ...moduleFields, ...siteFields }))('text on the %s field passes AA (4.5:1)', (_, f) => {
    expect(contrast(fieldText(f), f.field)).toBeGreaterThanOrEqual(4.5);
  });

  test.each(sites.map((s) => [s.id, s] as const))('the %s site field passes AA', (_, s) => {
    const f = fieldOf(s.theme);
    expect(contrast(fieldText(f), f.field)).toBeGreaterThanOrEqual(4.5);
  });

  test('text roles on paper pass AA; the quiet ink is for large text only', () => {
    expect(contrast(palette.ink, palette.paper)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(palette.muted, palette.paper)).toBeGreaterThanOrEqual(4.5);
    expect(contrast('#4a4e52', palette.paper)).toBeGreaterThanOrEqual(4.5); // --c-text
    expect(contrast(palette.link, palette.paper)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(palette.quiet, palette.paper)).toBeGreaterThanOrEqual(3); // statements' second half
    expect(contrast(palette.link, palette.paper)).toBeGreaterThanOrEqual(3); // focus ring on paper
  });

  test('the deeper paper (code block, sheet) and the ink pill pass AA', () => {
    for (const ground of [palette.card, palette.panel]) {
      expect(contrast(palette.ink, ground)).toBeGreaterThanOrEqual(4.5);
      expect(contrast(palette.muted, ground)).toBeGreaterThanOrEqual(4.5);
    }
    expect(contrast('#3f5a45', palette.panel)).toBeGreaterThanOrEqual(4.5); // code strings
    expect(contrast(palette.paper, palette.ink)).toBeGreaterThanOrEqual(4.5); // pill at rest
    expect(contrast(palette.paper, palette.link)).toBeGreaterThanOrEqual(4.5); // pill on hover
  });

  test('a tile keeps AA when its tone shifts on hover (light text deepens, dark text lightens)', () => {
    const mix = (a: string, b: string, t: number) => {
      const p = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
      const [x, y] = [p(a), p(b)];
      return `#${x.map((c, i) => Math.round(c + (y[i]! - c) * t).toString(16).padStart(2, '0')).join('')}`;
    };
    for (const f of [...Object.values(kindFields), ...Object.values(moduleFields)]) {
      const hover = f.on === 'paper' ? mix(f.field, '#000000', 0.12) : mix(f.field, '#ffffff', 0.14);
      expect(contrast(inkOn(f.field, f.on), hover), f.field).toBeGreaterThanOrEqual(4.5);
    }
  });

  test('the developers field is a deep slate with light text', () => {
    expect(siteFields.developers).toEqual({ field: '#3b4a5a', on: 'paper' });
  });
});

describe('tokens.css', () => {
  const css = readFileSync(new URL('../../src/styles/tokens.css', import.meta.url), 'utf8');
  test.each(Object.entries(palette))('--c-%s matches theme.ts', (name, value) => {
    expect(css).toContain(`--c-${name}: ${value};`);
  });
});
