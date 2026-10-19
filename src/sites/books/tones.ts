// The books site's tile colours (SITE.md "Theme"): the papers of its photographs seen flat. The
// accent green, two deeper greens, and three greens mixed toward the sage of the bookmark strip.
// The kit's accentRamp mixes toward the paper ground, which turns this green grey; mixing toward
// the sage keeps every tile a paper colour. The text colour is chosen per tile (textOn) and the
// exact shade by the Tile (inkOn); a unit test checks AA for every tone.
import { mix, textOn } from '../../kit/color';
import { kindFields } from '../../kit/theme';

const accent = kindFields.books.field;
const sage = kindFields.skills.field;
const ink = '#1a1c1f';

const tone = (bg: string) => ({ bg, on: textOn(bg) });

/** Six tones, deepest to lightest. */
export const tones = {
  deepest: tone(mix(accent, ink, 0.62)),
  deep: tone(mix(accent, ink, 0.38)),
  accent: tone(accent),
  green: tone(mix(accent, sage, 0.2)),
  olive: tone(mix(accent, sage, 0.68)),
  sage: tone(mix(accent, sage, 0.85)),
};
