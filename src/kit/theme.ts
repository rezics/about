/**
 * Colour roles (DESIGN.md "Palette"). tokens.css repeats these values for CSS; a unit test keeps
 * the two in step and checks every text/field pair for AA contrast.
 */
import type { KindId, ModuleId } from '../content/schema';

export const palette = {
  paper: '#f4f5f2',
  ink: '#0e1420',
  muted: '#566070',
  link: '#2f63ad',
  /** Logo red: logo, current-page marker, the empty-square cursor. Never text. */
  mark: '#df3d35',
} as const;

export type OnField = 'paper' | 'ink';
export interface Field {
  field: string;
  /** The text colour on this field. */
  on: OnField;
}

export const kindFields: Record<KindId, Field> = {
  books: { field: '#1d5a47', on: 'paper' },
  anime: { field: '#b03a62', on: 'paper' },
  manga: { field: '#181b22', on: 'paper' },
  games: { field: '#2a49c9', on: 'paper' },
  software: { field: '#0d6873', on: 'paper' },
  'visual-novels': { field: '#5a3d9e', on: 'paper' },
  mcp: { field: '#efb53f', on: 'ink' },
  skills: { field: '#c7d35a', on: 'ink' },
  apis: { field: '#93c4ef', on: 'ink' },
};

/** Modules are ink tints: the engine underneath, with products as colour on top. */
export const moduleFields: Record<ModuleId, Field> = {
  'universal-index': { field: '#0e1420', on: 'paper' },
  community: { field: '#1d2636', on: 'paper' },
  zones: { field: '#2c3850', on: 'paper' },
  create: { field: '#3d4b66', on: 'paper' },
  trust: { field: '#4f5f7e', on: 'paper' },
};

export const neutralField: Field = { field: palette.ink, on: 'paper' };

/** Fields of sites that are neither kinds nor modules (DESIGN.md "Palette"). */
export const siteFields = {
  developers: { field: '#2f63ad', on: 'paper' },
} as const satisfies Record<string, Field>;

export type Theme = { kind: KindId } | { module: ModuleId } | Field | undefined;

export function fieldOf(theme: Theme): Field {
  if (!theme) return neutralField;
  if ('kind' in theme) return kindFields[theme.kind];
  if ('module' in theme) return moduleFields[theme.module];
  return theme;
}

/** Inline CSS custom properties for an element that carries a field. */
export function fieldStyle(field: Field): string {
  return `--field:${field.field};--on-field:${palette[field.on]}`;
}
