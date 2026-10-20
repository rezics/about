// The build's phrase step (scripts/phrase.mjs) puts line breaks between BudouX phrases, and the
// Traditional Chinese model splits some Taiwan technical words this site uses on every page
// (伺|服器, 用|戶端, 維護|者, 工具清|單). Text inside a `.nw` span is never broken, so this site
// wraps those words in one before the phrase step runs. A workaround in this site's paths
// until the phrase step protects them itself.

/** Words that must never break inside. */
export const wholeWords = ['伺服器', '用戶端', '維護者', '版本號', '雜湊值', '工具清單'];

const WORDS = new RegExp(wholeWords.join('|'), 'g');

/** Wrap every whole word in the text of `html` (never inside a tag, a script or a style) in a
 * `.nw` span. */
export function joinWords(html: string): string {
  let raw = 0;
  return html
    .split(/(<[^>]+>)/)
    .map((part) => {
      if (part.startsWith('<')) {
        if (/^<(script|style)\b/i.test(part)) raw++;
        else if (/^<\/(script|style)\b/i.test(part)) raw = Math.max(0, raw - 1);
        return part;
      }
      return raw ? part : part.replace(WORDS, (w) => `<span class="nw">${w}</span>`);
    })
    .join('');
}
