// Phrase-level line breaking for CJK display text. Browsers break Chinese between any two
// characters, so headings split words (遊|戲, 開放索|引). After the build, every heading and
// display or lede paragraph gets <wbr> between BudouX phrases, and base.css sets
// `word-break: keep-all` on them, so lines break only between phrases. Runs over the build
// output, so every site's pages get it without code of their own.
//   import { phraseHtml } from './phrase.mjs'
import { loadDefaultTraditionalChineseParser } from 'budoux';

const parser = loadDefaultTraditionalChineseParser();
const CJK = /[㐀-鿿豈-﫿]/;
const PUNCT = /[，。、；：！？」』）》〉]$/;

/** BudouX phrases, with runs of single characters joined (同|一|個 → 同一個) and a lone
 * character attached to the phrase before it unless that phrase ends a clause. */
export function phrases(text) {
  const single = (s) => [...s].length === 1 && CJK.test(s);
  const merged = [];
  for (const chunk of parser.parse(text)) {
    const last = merged[merged.length - 1];
    if (last !== undefined && single(chunk) && last.run) last.text += chunk;
    else merged.push({ text: chunk, run: single(chunk) });
  }
  const out = [];
  merged.forEach(({ text: t }, i) => {
    if ([...t].length === 1 && CJK.test(t)) {
      if (out.length && !PUNCT.test(out[out.length - 1])) out[out.length - 1] += t;
      else if (i + 1 < merged.length) merged[i + 1].text = t + merged[i + 1].text;
      else out.push(t);
    } else out.push(t);
  });
  return out;
}

const breakText = (text) => (CJK.test(text) && !text.includes('&') ? phrases(text).join('<wbr>') : text);

const breakInner = (inner) =>
  inner
    .split(/(<[^>]+>)/)
    .map((part) => (part.startsWith('<') ? part : breakText(part)))
    .join('');

const HEADING = /<(h[1-4])(\s[^>]*)?>([\s\S]*?)<\/\1>/g;
const DISPLAY_P = /<p(\s[^>]*\bclass="[^"]*\b(?:t-mega|t-xl|t-l|t-m|lede)\b[^"]*"[^>]*)>([\s\S]*?)<\/p>/g;

/** Insert phrase breaks into the headings and display paragraphs of one HTML document. */
export function phraseHtml(html) {
  return html
    .replace(HEADING, (_, tag, attrs = '', inner) => `<${tag}${attrs}>${breakInner(inner)}</${tag}>`)
    .replace(DISPLAY_P, (_, attrs, inner) => `<p${attrs}>${breakInner(inner)}</p>`);
}
