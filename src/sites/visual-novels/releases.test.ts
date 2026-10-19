// Behaviour of the usable-release rule (runs with the shared unit tests: task test).
import { describe, expect, test } from 'vitest';
import site from '../../content/sites/visual-novels';
import { exampleSelections, initialSelection, judge, matches, verdictText } from './releases';

const releases = site.strings.shared.releases;
const byId = (id: string) => releases.find((r) => r.id === id)!;

describe('usable release', () => {
  test('nothing chosen leaves every release neutral', () => {
    expect(releases.every((r) => judge(r, {}).state === 'neutral')).toBe(true);
    expect(matches(releases, {})).toEqual(releases);
  });

  test('the first selection keeps exactly the complete Chinese patch for computers', () => {
    expect(matches(releases, initialSelection).map((r) => r.id)).toEqual(['r4']);
  });

  test('conditions are never stitched from several releases', () => {
    // Chinese exists (r2, r3), computers exist (r1, r3), complete exists (r1, r2): no single
    // release among r1 to r3 has all three, so none of them matches.
    for (const id of ['r1', 'r2', 'r3']) expect(judge(byId(id), initialSelection).state).toBe('fail');
  });

  test('a near miss names exactly the conditions it fails', () => {
    expect(judge(byId('r2'), initialSelection).fails).toEqual(['platform']);
    expect(judge(byId('r3'), initialSelection).fails).toEqual(['coverage']);
    expect(judge(byId('r5'), initialSelection).fails).toEqual(['language', 'coverage']);
  });

  test('a Chinese title does not make a Chinese release', () => {
    const v = judge(byId('r6'), { language: 'zh' });
    expect(v.state).toBe('fail');
    expect(v.titleOnly).toBe(true);
    expect(judge(byId('r6'), { language: 'ja' }).titleOnly).toBe(false);
  });

  test('a release without a region limit meets any region condition', () => {
    expect(judge(byId('r4'), { region: 'tw' }).state).toBe('match');
    expect(judge(byId('r1'), { region: 'tw' }).fails).toEqual(['region']);
    expect(matches(releases, { language: 'zh', region: 'tw' }).map((r) => r.id)).toEqual(['r2', 'r3', 'r4']);
  });

  test('the landing queries have one answer each and end on an honest zero', () => {
    expect(exampleSelections.map((s) => matches(releases, s).map((r) => r.id))).toEqual([['r4'], ['r2'], []]);
    // The zero is the phone version, whose title alone is Chinese.
    expect(judge(byId('r6'), exampleSelections[2]!).titleOnly).toBe(true);
  });
});

describe('verdict text', () => {
  const sh = site.strings.shared;
  const labels = { dims: sh.dims, fails: sh.fails, titleOnly: sh.titleOnly, match: sh.match };
  test('names the failing conditions, or that only the title matches', () => {
    expect(verdictText(byId('r4'), initialSelection, labels)).toBe('符合');
    expect(verdictText(byId('r2'), initialSelection, labels)).toBe('不符：平台');
    expect(verdictText(byId('r5'), initialSelection, labels)).toBe('不符：語言、完整度');
    expect(verdictText(byId('r6'), { language: 'zh' }, labels)).toBe('只有標題是中文');
    expect(verdictText(byId('r6'), initialSelection, labels)).toBe('只有標題是中文；不符：平台');
    expect(verdictText(byId('r6'), {}, labels)).toBe('');
  });
});
