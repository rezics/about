/**
 * The locale for a visitor at `/` or an unprefixed path, as the product resolves it
 * (rezics-next apps/web/i18n/locale.ts): the rezics_locale cookie, then Accept-Language, then
 * English. functions/[[path]].ts redirects with it.
 */
import { fallbackLocale, isLocale, type Locale } from './locales';

export function matchLocale(value: string): Locale | undefined {
  let tag: Intl.Locale;
  try { tag = new Intl.Locale(value.trim().replaceAll('_', '-')); } catch { return undefined; }
  const canonical = tag.toString();
  if (isLocale(canonical)) return canonical;
  if (tag.language === 'zh') return tag.script === 'Hant' || ['TW', 'HK', 'MO'].includes(tag.region ?? '') ? 'zh-Hant' : 'zh-Hans';
  return isLocale(tag.language) ? tag.language : undefined;
}

export function pickLocale(cookieHeader: string | null, acceptLanguage: string | null): Locale {
  const stored = /(?:^|;\s*)rezics_locale=([^;]+)/.exec(cookieHeader ?? '')?.[1];
  const fromCookie = stored && matchLocale(decodeURIComponent(stored));
  if (fromCookie) return fromCookie;
  const ranges = (acceptLanguage ?? '').split(',').map((part, i) => {
    const [tag = '', ...params] = part.trim().split(';');
    const q = Number(params.find((p) => p.trim().startsWith('q='))?.trim().slice(2) ?? 1);
    return { tag, q: Number.isFinite(q) ? q : 0, i };
  }).filter((r) => r.tag && r.tag !== '*' && r.q > 0).sort((a, b) => b.q - a.q || a.i - b.i);
  for (const { tag } of ranges) {
    const found = matchLocale(tag);
    if (found) return found;
  }
  return fallbackLocale;
}
