// The build's phrase step (scripts/phrase.mjs): a paragraph's last characters stay together, also
// when the paragraph ends inside an inline element (a statement's muted half).
import { describe, expect, test } from 'vitest';
import { bindTail, phraseHtml } from '../../scripts/phrase.mjs';

describe('bindTail', () => {
  test('binds the last four characters of plain text', () => {
    expect(bindTail('又彼此相連。')).toBe('又彼<span class="nw">此相連。</span>');
  });
  test('drops phrase breaks inside the tail', () => {
    expect(bindTail('甲乙<wbr>丙丁戊')).toBe('甲<span class="nw">乙丙丁戊</span>');
  });
  test('binds inside a trailing inline element', () => {
    expect(bindTail('一部<span class="quiet">每一頁都跟著更<wbr>新。</span>')).toBe('一部<span class="quiet">每一頁都跟<span class="nw">著更新。</span></span>');
  });
  test('serif and lead paragraphs get phrase breaks', () => {
    expect(phraseHtml('<p class="lead">每一部作品都有自己的頁面</p>')).toContain('<wbr>');
    expect(phraseHtml('<p class="tile__name serif">視覺小說與遊戲</p>')).toContain('<wbr>');
  });
});
