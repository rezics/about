import { describe, expect, test } from 'vitest';
import { modules } from '../../content/modules';
import { splitStatement } from './family';

describe('module family statement', () => {
  test('splits at the first comma and keeps every character', () => {
    expect(splitStatement('每個網站長得都不一樣，背後是同一套引擎。')).toEqual(['每個網站長得都不一樣，', '背後是同一套引擎。']);
    expect(splitStatement('沒有逗號。')).toEqual(['沒有逗號。', '']);
  });

  test('every module statement has a muted second half', () => {
    for (const m of modules) {
      const [text, sub] = splitStatement(m.statement);
      expect(text + sub).toBe(m.statement);
      expect(sub.length).toBeGreaterThan(0);
    }
  });
});
