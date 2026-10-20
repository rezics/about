#!/usr/bin/env node
// The production build: one `astro build` per locale (in parallel, each into .temp/build/<locale>),
// assembled into dist/:
//   dist/<locale>/…        every page of that locale; its internal links carry the prefix
//   dist/_astro, images, fonts (Latin), favicons, robots.txt   shared by every locale
//   dist/sitemap-*.xml     every page in every locale, with hreflang alternates
//   dist/_routes.json      only `/` and unprefixed page paths reach the Pages Function
//                          (functions/[[path]].ts), which picks a locale and redirects
// Then scripts/postbuild.mjs runs per locale (phrase breaks, CJK font slices, Open Graph images).
//   node scripts/build.mjs [locale…]   (default: every locale)
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const { locales } = await import(path.join(root, 'src/kit/locales.ts')).catch(() => null) ?? {};
const all = locales ?? ['en', 'zh-Hant', 'zh-Hans', 'ja', 'ko', 'de', 'fr', 'es'];
const chosen = process.argv.slice(2).length ? process.argv.slice(2) : all;
const origin = (process.env.ABOUT_SITE_URL ?? 'https://about.rezics.com').replace(/\/$/, '');
const dist = path.join(root, 'dist');
const work = path.join(root, '.temp', 'build');

function run(cmd, args, env) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { cwd: root, env: { ...process.env, ...env }, stdio: ['ignore', 'pipe', 'pipe'] });
    let out = '';
    child.stdout.on('data', (d) => (out += d));
    child.stderr.on('data', (d) => (out += d));
    child.on('close', (code) => (code === 0 ? resolve(out) : reject(new Error(`${cmd} ${args.join(' ')} (${env.ABOUT_LOCALE}) failed:\n${out}`))));
  });
}

fs.rmSync(work, { recursive: true, force: true });
await Promise.all(
  chosen.map(async (locale) => {
    await run('npx', ['astro', 'build'], { ABOUT_LOCALE: locale, ABOUT_OUT: path.join(work, locale) });
    console.log(`built ${locale}`);
  }),
);

const SHARED = /^(?:_astro|images|fonts|og|favicon[^"/]*|apple-touch-icon[^"/]*|robots\.txt|sitemap[^"/]*)(?:[/"?#]|$)/;
const prefixed = new RegExp(`^(?:${all.join('|')})/`);
/** Internal page links gain the locale: href="/books/" → href="/en/books/". */
function localizeLinks(html, locale) {
  return html.replace(/(\shref=")\/(?!\/)([^"]*)"/g, (whole, attr, rest) =>
    SHARED.test(rest) || prefixed.test(rest) ? whole : `${attr}/${locale}/${rest}"`);
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
const routes = new Set();
for (const locale of chosen) {
  const src = path.join(work, locale);
  for (const file of walk(src)) {
    const rel = path.relative(src, file).split(path.sep).join('/');
    if (/^sitemap/.test(rel)) continue;
    if (rel.endsWith('.html')) {
      const target = path.join(dist, locale, rel);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, localizeLinks(fs.readFileSync(file, 'utf8'), locale));
      if (rel !== '404.html') routes.add(`/${rel.replace(/index\.html$/, '')}`);
    } else {
      // Hashed bundles and public files are the same bytes in every build; the first copy wins.
      const target = path.join(dist, rel);
      if (!fs.existsSync(target)) {
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.copyFileSync(file, target);
      }
    }
  }
}
// A top-level 404 keeps Pages from treating the site as a single-page app.
fs.copyFileSync(path.join(dist, chosen.includes('en') ? 'en' : chosen[0], '404.html'), path.join(dist, '404.html'));

const sorted = [...routes].sort();
const urls = sorted.flatMap((route) =>
  chosen.map((locale) => {
    const links = chosen.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${origin}/${l}${route}"/>`).join('');
    return `<url><loc>${origin}/${locale}${route}</loc>${links}<xhtml:link rel="alternate" hreflang="x-default" href="${origin}${route}"/></url>`;
  }),
);
fs.writeFileSync(path.join(dist, 'sitemap-0.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`);
fs.writeFileSync(path.join(dist, 'sitemap-index.xml'), `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${origin}/sitemap-0.xml</loc></sitemap></sitemapindex>`);

const top = fs.readdirSync(dist).filter((n) => !all.includes(n));
fs.writeFileSync(path.join(dist, '_routes.json'), JSON.stringify({
  version: 1,
  include: ['/*'],
  exclude: [...all.map((l) => `/${l}/*`), ...top.map((n) => (fs.statSync(path.join(dist, n)).isDirectory() ? `/${n}/*` : `/${n}`))],
}, null, 2));
console.log(`assembled ${chosen.length} locales × ${sorted.length} pages into dist/`);

await run('node', ['scripts/postbuild.mjs', dist, ...chosen], { ABOUT_LOCALE: 'all' }).then((out) => process.stdout.write(out));
