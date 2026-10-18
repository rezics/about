import { realpathSync } from 'node:fs';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { searchForWorkspaceRoot } from 'vite';

// The public origin: canonical URLs, Open Graph images and the sitemap depend on it.
const site = process.env.ABOUT_SITE_URL ?? 'https://about.rezics.com';

// Worktrees under .temp/worktrees/<id> link node_modules from the main checkout, so caches must
// live in each checkout and the dev server must be allowed to read the linked dependencies.
const modules = realpathSync('node_modules');

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  cacheDir: '.temp/cache/astro',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  devToolbar: { enabled: false },
  server: { host: '127.0.0.1' },
  integrations: [
    sitemap({
      // Pages a visitor reaches only after an action stay out of the sitemap.
      filter: (page) => !/\/(notified|404)\/?$/.test(new URL(page).pathname),
    }),
  ],
  vite: {
    cacheDir: '.temp/cache/vite',
    server: { fs: { allow: [searchForWorkspaceRoot(process.cwd()), modules] } },
  },
});
