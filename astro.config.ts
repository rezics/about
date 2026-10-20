import { existsSync, realpathSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import { searchForWorkspaceRoot, type Plugin } from 'vite';
import { isLocale, sourceLocale } from './src/kit/locales';

// The public origin: canonical URLs, Open Graph images and the sitemap depend on it.
const site = process.env.ABOUT_SITE_URL ?? 'https://about.rezics.com';

// Worktrees under .temp/worktrees/<id> link node_modules from the main checkout, so caches must
// live in each checkout and the dev server must be allowed to read the linked dependencies.
const modules = realpathSync('node_modules');

// One build per locale (scripts/build.mjs sets ABOUT_LOCALE and ABOUT_OUT, then assembles dist/<locale>/).
// A locale's build reads `src/content/<module>.<locale>.ts` wherever it exists in place of the
// zh-Hant source module, so pages and components never name a locale.
const locale = process.env.ABOUT_LOCALE ?? sourceLocale;
if (!isLocale(locale)) throw new Error(`ABOUT_LOCALE: unknown locale "${locale}"`);
const contentDir = new URL('./src/content/', import.meta.url).pathname;
const translated: Plugin = {
  name: 'rezics-locale-content',
  enforce: 'pre',
  async resolveId(source, importer, options) {
    if (locale === sourceLocale) return null;
    const resolved = await this.resolve(source, importer, { ...options, skipSelf: true });
    const id = resolved?.id;
    if (!id?.startsWith(contentDir) || !id.endsWith('.ts') || /\.[A-Za-z-]+\.ts$/.test(id.slice(contentDir.length)) || id.endsWith('/schema.ts')) return null;
    const sidecar = id.replace(/\.ts$/, `.${locale}.ts`);
    if (!existsSync(sidecar)) throw new Error(`${locale}: missing translation ${sidecar.slice(contentDir.length - 'src/content/'.length)}`);
    return sidecar;
  },
};

export default defineConfig({
  site,
  output: 'static',
  outDir: process.env.ABOUT_OUT ?? 'dist',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  cacheDir: `.temp/cache/astro-${locale}`,
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  devToolbar: { enabled: false },
  server: { host: '127.0.0.1' },
  // The sitemap lists every locale with its alternates; scripts/build.mjs writes it.
  integrations: [],
  vite: {
    define: { 'import.meta.env.ABOUT_LOCALE': JSON.stringify(locale) },
    plugins: [translated],
    cacheDir: `.temp/cache/vite-${locale}`,
    server: { fs: { allow: [searchForWorkspaceRoot(process.cwd()), modules] } },
  },
});
