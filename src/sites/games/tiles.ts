// Tile colours for the games site's own masonries (SITE.md "v3", Theme): the games blue, two
// deeper shades from the kit's ramp, and three tints mixed toward a cool white (the warm paper
// greys the blue out), each with the text colour that passes AA; tiles that stand for another
// kind take that kind's colour. drivers.test.ts checks every pair.
import { accentRamp, mix } from '../../kit/color';
import { kindFields, type OnField } from '../../kit/theme';
import type { KindId } from '../../content/schema';

export interface Tone {
  bg: string;
  on: OnField;
}

const accent = kindFields.games.field;
const ramp = accentRamp(accent);

export const blue: Record<'accent' | 'deep' | 'deeper' | 'tint' | 'light' | 'lightest', Tone> = {
  accent: { bg: accent, on: 'paper' },
  deep: ramp[2]!,
  deeper: ramp[4]!,
  tint: { bg: mix(accent, '#ffffff', 0.45), on: 'ink' },
  light: { bg: mix(accent, '#ffffff', 0.6), on: 'ink' },
  lightest: { bg: mix(accent, '#ffffff', 0.7), on: 'ink' },
};

/** From light to deep, for sequences (versions, purchase steps). */
export const sequence: Tone[] = [blue.lightest, blue.light, blue.tint, blue.accent, blue.deep, blue.deeper];

export const kindTile = (id: KindId): Tone => ({ bg: kindFields[id].field, on: kindFields[id].on });
