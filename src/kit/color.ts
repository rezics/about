/**
 * Flat colour for tiles (DESIGN.md "Direction v2", tiles): mixing, WCAG contrast, the text
 * colour (paper or ink) a ground takes, and a ramp of distinct flat shades and tints of an
 * accent, each with text that passes AA.
 */
import { palette } from './theme';

type Rgb = [number, number, number];

const parse = (hex: string): Rgb => {
  const n = hex.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16)) as Rgb;
};
const toHex = (rgb: Rgb) => `#${rgb.map((c) => Math.round(Math.min(255, Math.max(0, c))).toString(16).padStart(2, '0')).join('')}`;

/** `a` mixed with `b` by `t` (0 keeps `a`, 1 gives `b`), in sRGB. */
export function mix(a: string, b: string, t: number): string {
  const x = parse(a);
  const y = parse(b);
  return toHex([0, 1, 2].map((i) => x[i]! + (y[i]! - x[i]!) * t) as Rgb);
}

export function luminance(hex: string): number {
  const [r, g, b] = parse(hex).map((c) => c / 255).map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
}

export function contrast(a: string, b: string): number {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return (x! + 0.05) / (y! + 0.05);
}

/** Paper or ink, whichever reads better on `bg`. */
export function textOn(bg: string): 'paper' | 'ink' {
  return contrast(palette.paper, bg) >= contrast(palette.ink, bg) ? 'paper' : 'ink';
}

/** The darkest stop of a ramp: a deep ink with a trace of blue. */
const DEEP = '#121820';

/** A ground nudged deeper (paper text) or lighter (ink text) until its text passes AA. */
function settle(bg: string): { bg: string; on: 'paper' | 'ink' } {
  let ground = bg;
  for (let i = 0; i < 20; i++) {
    const on = textOn(ground);
    if (contrast(palette[on], ground) >= 4.6) return { bg: ground, on };
    ground = on === 'paper' ? mix(ground, DEEP, 0.08) : mix(ground, palette.paper, 0.08);
  }
  return { bg: ground, on: textOn(ground) };
}

/**
 * Distinct flat colours from one accent, for tiles that index a site's own pages: the accent,
 * deeper shades and light tints, alternating dark and light. A stop whose text would miss AA is
 * nudged deeper or lighter until it passes, so mid tones never carry text.
 */
export function accentRamp(accent: string): { bg: string; on: 'paper' | 'ink' }[] {
  const stops = [mix(accent, DEEP, 0), mix(accent, palette.paper, 0.72), mix(accent, DEEP, 0.38), mix(accent, palette.paper, 0.86), mix(accent, DEEP, 0.62), mix(accent, palette.paper, 0.58)];
  return stops.map(settle);
}
