import { defineConfig } from 'vitest/config';

export default defineConfig({
  cacheDir: '.temp/cache/vitest',
  test: {
    include: ['tests/unit/**/*.test.ts', 'tests/build/**/*.test.ts'],
    environment: 'node',
  },
});
