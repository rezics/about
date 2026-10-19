// Copy rules (DESIGN.md "Content model and voice") over every string in src/content, including
// every mini-site's content file.
import { describe, expect, test } from 'vitest';
import { kinds } from '../../src/content/kinds';
import { modules } from '../../src/content/modules';
import { parts } from '../../src/content/parts';
import { site } from '../../src/content/site';
import { sites } from '../../src/kit/sites';

/** Keys whose values are not visible copy. */
const SKIP = new Set(['id', 'url', 'sourceUrl', 'href', 'base', 'slug', 'code', 'language', 'to', 'kind', 'group', 'theme', 'field', 'on', 'parts', 'usedBy', 'next']);

function strings(value: unknown, where: string, out: [string, string][] = []): [string, string][] {
  if (typeof value === 'string') out.push([where, value]);
  else if (Array.isArray(value)) value.forEach((v, i) => strings(v, `${where}[${i}]`, out));
  else if (value && typeof value === 'object')
    for (const [k, v] of Object.entries(value)) if (!SKIP.has(k)) strings(v, `${where}.${k}`, out);
  return out;
}

const all = [
  ...strings(site, 'site'),
  ...strings(kinds, 'kinds'),
  ...strings(modules, 'modules'),
  ...strings(parts, 'parts'),
  ...sites.flatMap((s) => strings(s, `sites/${s.id}`)),
];

const rules: [RegExp, string][] = [
  [/[—–]/, 'em or en dash'],
  [/——/, '「——」'],
  [/[!！]/, 'exclamation mark'],
  [/革命性|顛覆|無縫|賦能|一站式|極致|打造[^。]*體驗|不只是[^。]*更是/, 'hype word'],
  [/滑鼠|hover/i, 'pointer-only wording'],
  [/即將|敬請期待|coming soon/i, 'status label'],
  [/lorem ipsum|TODO/i, 'placeholder text'],
  [/\.\.\.|……/, 'ellipsis filler'],
  [/方塊|一格|九宮格/, 'square-metaphor wording (V3-SPEC content rules)'],
];

describe('copy', () => {
  test('there is copy to check', () => {
    expect(all.length).toBeGreaterThan(200);
  });

  test.each(rules)('no string contains %s (%s)', (re) => {
    const bad = all.filter(([, s]) => re.test(s)).map(([w, s]) => `${w}: ${s}`);
    expect(bad).toEqual([]);
  });

  test('no heading-like field is a question', () => {
    const bad = all.filter(([w, s]) => /(headline|title|heading)$/.test(w) && /[?？]$/.test(s)).map(([w]) => w);
    expect(bad).toEqual([]);
  });

  test('no sentence is repeated anywhere on the site', () => {
    // Shared content is referenced by mini-site stubs; count each source string once.
    const seen = new Map<string, string>();
    const unique = new Map(all.map(([w, s]) => [s, w]));
    const dupes: string[] = [];
    for (const [text, where] of unique)
      for (const sentence of text.split(/(?<=[。！？])/).map((x) => x.trim()).filter((x) => [...x].length >= 8)) {
        const first = seen.get(sentence);
        if (first && first !== where) dupes.push(`${sentence} (${first}, ${where})`);
        else seen.set(sentence, where);
      }
    expect(dupes).toEqual([]);
  });
});
