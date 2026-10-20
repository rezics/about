// Translations: every `src/content/<module>.<locale>.ts` mirrors its zh-Hant source module. Same
// exports, keys, array lengths and every non-copy value (links, ids, colours, ...); only visible
// copy differs. `-t <locale>` checks one locale's files; "complete" requires every locale.
import { describe, expect, test } from 'vitest';
import { locales, sourceLocale } from '../../src/kit/locales';

const files = import.meta.glob<Record<string, unknown>>('../../src/content/**/*.ts', { eager: true });
const targets = locales.filter((l) => l !== sourceLocale);
const sidecar = /^(.*)\.([A-Za-z-]+)\.ts$/;
const sources = Object.keys(files).filter((f) => !sidecar.test(f) && !f.endsWith('/schema.ts'));

/** Keys whose values are not copy: a translation keeps them exactly. */
const SAME = new Set(['id', 'url', 'sourceUrl', 'href', 'base', 'slug', 'language', 'to', 'kind', 'group', 'theme', 'field', 'on', 'parts', 'usedBy', 'next', 'lang']);
const HAN = /[㐀-鿿豈-﫿]/;
const FOREIGN_ORIGINAL = /[぀-ヿ가-힯]/;
const FULLWIDTH = /[，。；：「」『』！？、]/;

function compare(src: unknown, tr: unknown, at: string, locale: string, out: string[]) {
  if (typeof src === 'function') return;
  if (typeof src === 'string') {
    if (typeof tr !== 'string') return void out.push(`${at}: not a string`);
    if (src.trim() && !tr.trim()) return void out.push(`${at}: empty`);
    const latinScript = ['en', 'de', 'fr', 'es', 'ko'].includes(locale);
    if (latinScript && HAN.test(tr) && !FOREIGN_ORIGINAL.test(src)) out.push(`${at}: untranslated Chinese: ${tr}`);
    if (latinScript && FULLWIDTH.test(tr) && !FOREIGN_ORIGINAL.test(src)) out.push(`${at}: full-width punctuation: ${tr}`);
    return;
  }
  if (Array.isArray(src)) {
    if (!Array.isArray(tr) || tr.length !== src.length) return void out.push(`${at}: array length ${src.length} → ${Array.isArray(tr) ? tr.length : typeof tr}`);
    src.forEach((v, i) => compare(v, tr[i], `${at}[${i}]`, locale, out));
    return;
  }
  if (src && typeof src === 'object') {
    if (!tr || typeof tr !== 'object') return void out.push(`${at}: not an object`);
    const a = Object.keys(src).sort().join(','), b = Object.keys(tr).sort().join(',');
    if (a !== b) return void out.push(`${at}: keys differ (${a} → ${b})`);
    for (const [k, v] of Object.entries(src)) {
      const t = (tr as Record<string, unknown>)[k];
      if (SAME.has(k)) { if (JSON.stringify(v) !== JSON.stringify(t)) out.push(`${at}.${k}: must stay ${JSON.stringify(v)}`); }
      else compare(v, t, `${at}.${k}`, locale, out);
    }
    return;
  }
  if (src !== tr) out.push(`${at}: ${String(src)} → ${String(tr)}`);
}

for (const locale of targets) {
  describe(locale, () => {
    const present = sources.filter((s) => files[s.replace(/\.ts$/, `.${locale}.ts`)]);
    test.each(present.length ? present : ['(none yet)'])('%s mirrors its source', (source) => {
      if (source === '(none yet)') return;
      const src = files[source]!, tr = files[source.replace(/\.ts$/, `.${locale}.ts`)]!;
      const out: string[] = [];
      expect(Object.keys(tr).sort()).toEqual(Object.keys(src).sort());
      for (const name of Object.keys(src)) compare(src[name], tr[name], name, locale, out);
      expect(out).toEqual([]);
    });
  });
}

test('complete: every locale has every content module', () => {
  const missing = targets.flatMap((l) => sources.filter((s) => !files[s.replace(/\.ts$/, `.${l}.ts`)]).map((s) => `${l}: ${s}`));
  expect(missing).toEqual([]);
});
