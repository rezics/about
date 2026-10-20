import { describe, expect, test } from 'vitest';
import { phraseHtml } from '../../../scripts/phrase.mjs';
import { joinWords } from './words';

describe('mcp whole words', () => {
  test('wraps a word in text in a no-break span', () => {
    expect(joinWords('<h2>一份清單，放得下伺服器。</h2>')).toBe('<h2>一份清單，放得下<span class="nw">伺服器</span>。</h2>');
  });

  test('leaves tags, attributes, scripts and styles alone', () => {
    const html = '<img alt="伺服器"><script>const a = "伺服器";</script><style>/* 用戶端 */</style>';
    expect(joinWords(html)).toBe(html);
  });

  test('keeps technical words whole through the production phrase step', () => {
    const html = phraseHtml(joinWords('<h2>伺服器與用戶端的工具清單。</h2>'));
    for (const word of ['伺服器', '用戶端', '工具清單']) {
      expect(html).toContain(`<span class="nw">${word}</span>`);
    }
  });
});
