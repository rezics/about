import { expect, test } from 'vitest';
import { pickLocale } from '../../src/kit/negotiate';

test('the cookie wins, then Accept-Language by quality, then English', () => {
  expect(pickLocale('a=1; rezics_locale=ja', 'de')).toBe('ja');
  expect(pickLocale(null, 'fr;q=0.5, ko;q=0.9')).toBe('ko');
  expect(pickLocale(null, 'zh-TW,zh;q=0.9')).toBe('zh-Hant');
  expect(pickLocale(null, 'zh-CN')).toBe('zh-Hans');
  expect(pickLocale(null, 'es-419')).toBe('es');
  expect(pickLocale('rezics_locale=xx', 'pt-BR, it')).toBe('en');
  expect(pickLocale(null, null)).toBe('en');
});
