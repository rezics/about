/**
 * Interface locales, the same set and spelling as the product (rezics-next apps/web/i18n/define.ts),
 * so 「前往 REZICS」 and the language menu land on the same locale there. zh-Hant is the source copy:
 * every other locale is a translation of it, kept beside it as `<module>.<locale>.ts` with the same
 * shape (tests/unit/locales.test.ts). Each locale is built under `/<locale>/`.
 */
export const locales = ['en', 'zh-Hant', 'zh-Hans', 'ja', 'ko', 'de', 'fr', 'es'] as const;
export type Locale = (typeof locales)[number];

export const sourceLocale: Locale = 'zh-Hant';
/** The locale for visitors whose cookie and browser name none of ours, and the `x-default`. */
export const fallbackLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English', 'zh-Hant': '繁體中文', 'zh-Hans': '简体中文', ja: '日本語',
  ko: '한국어', de: 'Deutsch', fr: 'Français', es: 'Español',
};

/** The language menu's name, in each locale (chrome, not page copy). */
export const languageLabel: Record<Locale, string> = {
  en: 'Language', 'zh-Hant': '語言', 'zh-Hans': '语言', ja: '言語', ko: '언어', de: 'Sprache', fr: 'Langue', es: 'Idioma',
};

/** Open Graph `og:locale` values. */
export const ogLocales: Record<Locale, string> = {
  en: 'en_US', 'zh-Hant': 'zh_TW', 'zh-Hans': 'zh_CN', ja: 'ja_JP',
  ko: 'ko_KR', de: 'de_DE', fr: 'fr_FR', es: 'es_ES',
};

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);
