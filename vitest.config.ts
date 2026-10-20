import { defineConfig } from 'vitest/config';

export default defineConfig({
  cacheDir: '.temp/cache/vitest',
  test: {
    include: ['tests/unit/**/*.test.ts', 'tests/build/**/*.test.ts', 'src/sites/**/*.test.ts'],
    environment: 'node',
    // The file cache keeps a test's import.meta.glob expansion, so new translations
    // (src/content/*.<locale>.ts) went unseen; the suite is small enough without it.
    fsModuleCache: false,
  },
});
