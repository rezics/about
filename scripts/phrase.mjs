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
  return attachPunctuation(out);
}

// Closing punctuation never starts a line and opening brackets never end one: move a phrase's
// leading closers onto the phrase before it, and its trailing openers onto the phrase after it.
const CLOSERS = /^[；：，、。！？」』）》〉】…·\s]+/;
const OPENERS = /[「『（《〈【\s]+$/;
function attachPunctuation(list) {
  const out = [...list];
  for (let i = 1; i < out.length; i++) {
    const lead = out[i].match(CLOSERS)?.[0];
    if (lead && lead !== out[i]) {
      out[i - 1] += lead;
      out[i] = out[i].slice(lead.length);
    }
  }
  for (let i = out.length - 2; i >= 0; i--) {
    const trail = out[i].match(OPENERS)?.[0];
    if (trail && trail !== out[i]) {
      out[i + 1] = trail + out[i + 1];
      out[i] = out[i].slice(0, -trail.length);
    }
  }
  return out.filter(Boolean);
}

// Latin runs (words, numbers, versions, paths: letters, digits and . / + - #) never break: they
// are held out of the phrase parser as single private-use characters, then set back inside a
// no-break span (.nw in base.css), so REZICS, MCP or v1.2 stay whole.
const LATIN = /[A-Za-z0-9][A-Za-z0-9.\/+\-#]*/g;
const PUA = 0xe000;

function breakText(text) {
  if (!CJK.test(text) || text.includes('&')) return text;
  const runs = [];
  const masked = text.replace(LATIN, (run) => String.fromCharCode(PUA + runs.push(run) - 1));
  return phrases(masked)
    .join('<wbr>')
    .replace(/[\ue000-\uf8ff]/g, (c) => `<span class="nw">${runs[c.charCodeAt(0) - PUA]}</span>`);
}

// Text inside a `.nw` span is never broken (browsers break at <wbr> even under nowrap).
function breakInner(inner) {
  const spans = [];
  return inner
    .split(/(<[^>]+>)/)
    .map((part) => {
      if (part.startsWith('</span')) spans.pop();
      else if (part.startsWith('<span')) spans.push(/\bclass="[^"]*\bnw\b/.test(part));
      if (part.startsWith('<')) return part;
      return spans.includes(true) ? part : breakText(part);
    })
    .join('');
}

const HEADING = /<(h[1-4])(\s[^>]*)?>([\s\S]*?)<\/\1>/g;
const DISPLAY_P = /<p(\s[^>]*\bclass="[^"]*\b(?:t-mega|t-xl|t-l|t-m|lede)\b[^"]*"[^>]*)>([\s\S]*?)<\/p>/g;

// No orphans: the last few characters of a paragraph stay together, so a line never ends a
// paragraph with one or two characters (圖。). Phrase breaks inside that tail are dropped.
const TAIL = 4;
const PARAGRAPH = /<(p|dd)(\s[^>]*)?>([\s\S]*?)<\/\1>/g;

export function bindTail(inner, n = TAIL) {
  const parts = inner.split(/(<[^>]+>)/);
  let tail = '';
  for (let i = parts.length - 1; i >= 0 && [...tail].length < n; i--) {
    const part = parts[i];
    if (part.startsWith('<')) {
      if (/^<wbr\s*\/?>$/i.test(part)) {
        parts[i] = '';
        continue;
      }
      break;
    }
    const chars = [...part];
    const take = Math.min(chars.length, n - [...tail].length);
    tail = chars.slice(chars.length - take).join('') + tail;
    parts[i] = chars.slice(0, chars.length - take).join('');
    if (parts[i]) break;
  }
  if ([...tail].length < n || /[\s&<>]/.test(tail) || !CJK.test(tail)) return inner;
  return `${parts.join('')}<span class="nw">${tail}</span>`;
}

/** Insert phrase breaks into the headings and display paragraphs of one HTML document, and keep
 * every paragraph's last characters together. */
export function phraseHtml(html) {
  return html
    .replace(HEADING, (_, tag, attrs = '', inner) => `<${tag}${attrs}>${breakInner(inner)}</${tag}>`)
    .replace(DISPLAY_P, (_, attrs, inner) => `<p${attrs}>${breakInner(inner)}</p>`)
    .replace(PARAGRAPH, (_, tag, attrs = '', inner) => `<${tag}${attrs}>${bindTail(inner)}</${tag}>`);
}
