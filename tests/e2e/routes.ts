// Every route of the build, read from dist/ (new mini-site pages are covered by themselves).
import { readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const dist = new URL('../../dist/', import.meta.url).pathname;
const walk = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : e.name === 'index.html' ? [join(dir, e.name)] : [],
  );

export const routes = walk(dist)
  .map((file) => `/${relative(dist, file).split(sep).join('/').replace(/index\.html$/, '')}`)
  .sort();
