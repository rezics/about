// Square layouts and names (src/kit/arrange.ts, src/kit/fit.ts).
import { describe, expect, test } from 'vitest';
import { kinds } from '../../src/content/kinds';
import { arrange, partCells } from '../../src/kit/arrange';
import { fitName } from '../../src/kit/fit';

describe('arrange', () => {
  const layouts = arrange(kinds.map((k) => k.parts));

  test('every layout fills the eight cells around the centre, once each', () => {
    for (const layout of layouts) expect(Object.values(layout).sort()).toEqual([...partCells].sort());
  });

  test('the first kind follows its own order and identity stays top-left everywhere', () => {
    kinds[0]!.parts.forEach((p, i) => expect(layouts[0]![p]).toBe(partCells[i]));
    for (const layout of layouts) expect(layout.identity).toBe(0);
  });

  test('a part the next kind shares keeps its cell', () => {
    for (let i = 1; i < layouts.length; i++)
      for (const p of kinds[i]!.parts)
        if (layouts[i - 1]![p] !== undefined) expect(layouts[i]![p], `${kinds[i]!.id}.${p}`).toBe(layouts[i - 1]![p]);
  });

  test('a square holds exactly eight parts', () => {
    expect(() => arrange([['identity']])).toThrow();
  });
});

describe('fitName', () => {
  test('two characters on one line, four in a 2×2, Latin on two lines', () => {
    expect(fitName('書庫').lines.map((l) => l.text)).toEqual(['書庫']);
    expect(fitName('視覺小說').lines.map((l) => l.text)).toEqual(['視覺', '小說']);
    const latin = fitName('MCP Hub');
    expect(latin.latin).toBe(true);
    expect(latin.lines.map((l) => l.text)).toEqual(['MCP', 'Hub']);
    expect(latin.size).toBeGreaterThan(20);
  });

  test('a middle connective becomes a small glyph between two lines', () => {
    const fit = fitName('創作與發行');
    expect(fit.lines).toEqual([{ text: '創作' }, { text: '與', minor: true }, { text: '發行' }]);
    expect(fit.size * 2).toBeLessThanOrEqual(88);
  });

  test('names fit the square width', () => {
    for (const name of ['書庫', '視覺小說', '通用索引', 'Skill Hub', 'API Hub']) {
      const fit = fitName(name);
      expect(fit.size, name).toBeGreaterThan(0);
      expect(fit.size, name).toBeLessThanOrEqual(44);
    }
  });
});
