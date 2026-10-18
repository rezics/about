#!/usr/bin/env node
// The awwwards skill's Phase 4 on the production build: serve dist on a free port, then
//   shoot.mjs --crawl --nav   screenshots, vitals, axe, keyboard and hover reports in .shots/
//   audit.mjs                 SEO, metadata, weight and copy audit into .shots/audit.txt
// Pass paths to shoot those pages instead of crawling: node scripts/qa.mjs /books/ /books/editions/
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
// The vendored skill lives in the main checkout; a worktree may not carry it.
const main = path.dirname(execFileSync('git', ['rev-parse', '--path-format=absolute', '--git-common-dir'], { cwd: root, encoding: 'utf8' }).trim());
const skill = [root, main].map((r) => path.join(r, '.agents/skills/awwwards/scripts')).find((d) => fs.existsSync(d));
if (!skill) {
  console.error('The awwwards skill is missing (.agents/skills/awwwards).');
  process.exit(1);
}
const { serve } = await import(path.join(skill, 'serve.mjs'));
const dist = path.join(root, 'dist');
if (!fs.existsSync(dist)) {
  console.error('No dist/: run task build first.');
  process.exit(1);
}
const server = await serve(dist, 0);
const base = `http://127.0.0.1:${server.address().port}`;
const targets = process.argv.slice(2).filter((a) => a.startsWith('/'));
const shots = path.join(root, '.shots');
fs.mkdirSync(shots, { recursive: true });
const run = (args, opts = {}) => spawnSync(process.execPath, args, { cwd: root, stdio: 'inherit', ...opts });
let status = 0;
if (targets.length) {
  for (const target of targets) {
    const out = path.join(shots, target.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'home');
    status ||= run([path.join(skill, 'shoot.mjs'), `${base}${target}`, '--out', out, '--nav']).status ?? 1;
  }
} else {
  status ||= run([path.join(skill, 'shoot.mjs'), `${base}/`, '--crawl', '--nav', '--max', '12', '--out', shots]).status ?? 1;
  const audit = spawnSync(process.execPath, [path.join(skill, 'audit.mjs'), `${base}/`], { cwd: root, encoding: 'utf8' });
  fs.writeFileSync(path.join(shots, 'audit.txt'), audit.stdout + audit.stderr);
  console.log(audit.stdout.split('\n').slice(-4).join('\n'));
  status ||= audit.status ?? 1;
}
server.close();
process.exit(status);
