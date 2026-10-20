/** The locale this build renders (astro.config.ts sets it per build; zh-Hant elsewhere, tests included). */
import { locales, sourceLocale, type Locale } from './locales';

export const locale = (import.meta.env.ABOUT_LOCALE ?? sourceLocale) as Locale;

/** A site path (`/books/`) in this build's locale: `/en/books/`. */
export const localized = (path: string, to: Locale = locale) => `/${to}${path}`;

const prefix = new RegExp(`^/(${locales.join('|')})(?=/)`);
/** `/en/books/` → `/books/`; paths without a locale come back unchanged. */
export const withoutLocale = (path: string) => path.replace(prefix, '');

/** Title separator: full-width in Chinese and Japanese, spaced elsewhere. */
export const titleSeparator = /^(zh|ja)/.test(locale) ? '｜' : ' | ';
