/**
 * Colour roles (v3, .temp/sites/V3-SPEC.md "Tokens"; DESIGN.md "v3"): paper, ink, muted, the link
 * accent, logo red, and the muted kind colours taken from the paper still-life photograph.
 * tokens.css repeats the palette for CSS; a unit test keeps the two in step and checks every
 * text/field pair for AA contrast.
 */
import type { KindId, ModuleId } from '../content/schema';

export const palette = {
  /** Ground (paper), ink and muted text (AA for small text on paper). */
  paper: '#efe9e0',
  ink: '#26292d',
  muted: '#606468',
  /** Links and the pill's hover. */
  link: '#2f4fa3',
  /** Logo red: the logo only. Never text. */
  mark: '#df3d35',
  /** A lighter and a deeper paper for quiet grounds (the code block's caption, the phone sheet). */
  card: '#f4efe7',
  panel: '#e7e0d5',
  /** The spec's muted ink: large text only (a statement's second half, 4.2:1). */
  quiet: '#6b6f73',
} as const;

export type OnField = 'paper' | 'ink';
export interface Field {
  field: string;
  /** Light (paper) or dark (ink) text on this field; `fieldText` gives the exact colour. */
  on: OnField;
}

/** The nine kinds (V3-SPEC): muted, from the photograph. */
export const kindFields: Record<KindId, Field> = {
  books: { field: '#3f5a45', on: 'paper' },
  anime: { field: '#b77d77', on: 'ink' },
  manga: { field: '#26282b', on: 'paper' },
  games: { field: '#2f4fa3', on: 'paper' },
  software: { field: '#24555a', on: 'paper' },
  'visual-novels': { field: '#7768a3', on: 'paper' },
  mcp: { field: '#c9963f', on: 'ink' },
  skills: { field: '#b8c58a', on: 'ink' },
  apis: { field: '#a9c3dc', on: 'ink' },
};

/** Modules are ink tints: the engine underneath, with products as colour on top. */
export const moduleFields: Record<ModuleId, Field> = {
  'universal-index': { field: '#26292d', on: 'paper' },
  community: { field: '#353a40', on: 'paper' },
  zones: { field: '#454b52', on: 'paper' },
  create: { field: '#5a6168', on: 'paper' },
  trust: { field: '#6e757c', on: 'paper' },
};

export const neutralField: Field = { field: palette.ink, on: 'paper' };

/** Fields of sites that are neither kinds nor modules. */
export const siteFields = {
  developers: { field: '#3b4a5a', on: 'paper' },
} as const satisfies Record<string, Field>;

export type Theme = { kind: KindId } | { module: ModuleId } | Field | undefined;

export function fieldOf(theme: Theme): Field {
  if (!theme) return neutralField;
  if ('kind' in theme) return kindFields[theme.kind];
  if ('module' in theme) return moduleFields[theme.module];
  return theme;
}

// Text colours, lightest or darkest last: the first that reaches AA (4.5:1) on a field is used,
// so a mid-tone field (visual novels, the lightest module, anime) still carries text that passes.
const LIGHT = ['#f6f1ea', '#ffffff'] as const;
const DARK = [palette.ink, '#1c1e21', '#111214'] as const;

function lum(hex: string): number {
  const n = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4]
    .map((i) => parseInt(n.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
}
function ratio(a: string, b: string): number {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x! + 0.05) / (y! + 0.05);
}

/** The exact text colour on `bg`: light or dark as `on` says, the first shade that passes AA. */
export function inkOn(bg: string, on: OnField): string {
  const list = on === 'paper' ? LIGHT : DARK;
  return list.find((c) => ratio(c, bg) >= 4.5) ?? list[list.length - 1]!;
}

/** The exact text colour on a field. */
export const fieldText = (f: Field): string => inkOn(f.field, f.on);

/** Inline CSS custom properties for an element that carries a field. */
export function fieldStyle(field: Field): string {
  return `--field:${field.field};--on-field:${fieldText(field)}`;
}
