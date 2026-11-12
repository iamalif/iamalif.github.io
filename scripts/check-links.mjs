// Post-build checks on dist/: internal links and assets exist under the base path; each page has one h1, a title, a description and a canonical URL; images have alt text.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const base = (process.env.PUBLIC_BASE || '/').replace(/\/*$/, '/');
const site = (process.env.PUBLIC_SITE || 'https://iamalif.github.io').replace(/\/+$/, '');
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const canonicalRe = new RegExp(`<link rel="canonical" href="${escapeRe(site + base)}[^"]*"`);
const root = 'dist';
const pages = [];
const walk = (d) => { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && pages.push(p); } };
walk(root);
let problems = 0;
const bad = (page, msg) => { console.log(`${page}: ${msg}`); problems++; };
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) bad(page, `expected 1 h1, found ${h1}`);
  if (!/<title>[^<]+<\/title>/.test(html)) bad(page, 'missing title');
  if (!/<meta name="description" content="[^"]+"/.test(html)) bad(page, 'missing description');
  if (!canonicalRe.test(html)) bad(page, 'missing or wrong canonical');
  for (const img of html.match(/<img\b[^>]*>/g) || []) if (!/\balt="/.test(img)) bad(page, `image without alt: ${img.slice(0, 80)}`);
  for (const m of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    const url = m[1];
    if (!url.startsWith(base)) { bad(page, `link outside base path: ${url}`); continue; }
    const rel = url.slice(base.length);
    const candidates = [join(root, rel), join(root, rel, 'index.html')];
    if (!candidates.some((c) => existsSync(c) && (statSync(c).isFile()))) bad(page, `broken internal link: ${url}`);
  }
  for (const m of html.matchAll(/(?:href|src)="(https?:\/\/[^"]+)"/g)) {
    if (/(googleapis|gstatic|cdn\.|cloudflare|unpkg|jsdelivr)/.test(m[1])) bad(page, `third-party resource: ${m[1]}`);
  }
}
console.log(problems ? `\n${problems} problem(s) in ${pages.length} pages.` : `All ${pages.length} pages passed link, heading and metadata checks.`);
process.exit(problems ? 1 : 0);
