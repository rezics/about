// The usable-release rule: a release matches a selection only when every chosen condition holds
// on that same release. Pure functions, shared by the build (the landing's three queries and the
// complete table without script) and the release filter in the browser.
import type { Dim, VnRelease } from '../../content/sites/visual-novels';

export type Selection = Partial<Record<Dim, string>>;

export interface Verdict {
  /** neutral: nothing chosen yet; match: every chosen condition holds on this release. */
  state: 'neutral' | 'match' | 'fail';
  /** The chosen conditions this release does not meet, in condition order. */
  fails: Dim[];
  /** Its title is in the chosen language while its content is not (a translated name only). */
  titleOnly: boolean;
}

export const dims: Dim[] = ['language', 'platform', 'region', 'coverage'];

/** The conditions the release filter offers (region stays in the table, not in the filter). */
export const filterDims: Dim[] = ['language', 'platform', 'coverage'];

export function judge(release: VnRelease, selection: Selection): Verdict {
  const chosen = dims.filter((d) => selection[d]);
  if (!chosen.length) return { state: 'neutral', fails: [], titleOnly: false };
  // A release without a region limit ('any') meets every region condition.
  const fails = chosen.filter((d) => release.values[d] !== selection[d] && !(d === 'region' && release.values[d] === 'any'));
  const titleOnly =
    !!selection.language && release.titleLanguage === selection.language && release.values.language !== selection.language;
  return { state: fails.length ? 'fail' : 'match', fails, titleOnly };
}

export interface VerdictLabels {
  dims: Record<Dim, string>;
  fails: string;
  titleOnly: string;
  match: string;
}

/** What a row says after its name: 符合, the conditions it fails, or that only its title matches. */
export function verdictText(release: VnRelease, selection: Selection, labels: VerdictLabels): string {
  const v = judge(release, selection);
  if (v.state === 'match') return labels.match;
  if (v.state === 'neutral') return '';
  if (v.titleOnly && v.fails.length === 1) return labels.titleOnly;
  return labels.fails + v.fails.map((d) => labels.dims[d]).join('、');
}

export const matches = (releases: VnRelease[], selection: Selection) =>
  releases.filter((r) => judge(r, selection).state === 'match');

/** The filter's state on first paint and without script. */
export const initialSelection: Selection = { language: 'zh', platform: 'pc', coverage: 'full' };

/** The landing's three queries: one answer each, the last an honest zero. */
export const exampleSelections: Selection[] = [
  { language: 'zh', platform: 'pc', coverage: 'full' },
  { language: 'zh', platform: 'console', coverage: 'full' },
  { language: 'zh', platform: 'mobile', coverage: 'full' },
];
