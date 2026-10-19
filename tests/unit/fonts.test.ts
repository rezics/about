// The serif subset reads the text set in the serif (scripts/fonts.mjs): h1 to h3 and elements
// with a serif class, in a whole document or in a fragment.
import { describe, expect, test } from 'vitest';
import { serifText } from '../../scripts/fonts.mjs';

describe('serifText', () => {
  test('headings and serif-class elements of a document, nothing else', () => {
    const html = '<head><title>標題</title></head><body><h1>你在<wbr>乎</h1><p class="lead">內文</p><p class="tile__name serif">書庫</p><div class="serif"><div>甲</div>乙</div></body>';
    const text = serifText(html);
    for (const ch of '你在乎書庫甲乙') expect(text).toContain(ch);
    for (const ch of '標題內文') expect(text).not.toContain(ch);
  });
  test('a fragment without <body>', () => {
    expect(serifText('<h1 id="x">你在乎的一切</h1>')).toBe('你在乎的一切');
  });
});
