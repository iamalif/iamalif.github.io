// Release check. Run after `npm run build`: `npm run check:release`.
// Ordinary local builds never run this. It guards what goes live.
//   PUBLIC_INDEXABLE=true  strict: unresolved placeholders, drafts and the portrait placeholder FAIL the check.
//   otherwise (staging)    those are listed as warnings; structural problems still fail.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const strict = process.env.PUBLIC_INDEXABLE === 'true';
const site = (process.env.PUBLIC_SITE || 'https://iamalif.github.io').replace(/\/+$/, '');
const base = (process.env.PUBLIC_BASE || '/').replace(/\/*$/, '/');
const address = site + base;

const failures = []; // always fail
const blockers = []; // fail only in strict mode

const files = (dir, test, out = []) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    statSync(p).isDirectory() ? files(p, test, out) : test.test(f) && out.push(p);
  }
  return out;
};

// 1. Source flags: unfinished or draft content.
for (const f of files('src/content', /\.md$/)) {
  const fm = readFileSync(f, 'utf8').split('---')[1] || '';
  if (/^\s*placeholder:\s*true/m.test(fm)) blockers.push(`${f}: placeholder: true`);
  if (/^draft:\s*true/m.test(fm)) blockers.push(`${f}: draft: true`);
  if (/^todo:/m.test(fm)) failures.push(`${f}: private review notes must not sit in public frontmatter (keep them in private/)`);
}

// 2. Built pages: visible placeholder text (covers the portrait, which is not in Markdown).
if (!existsSync('dist')) { console.log('dist/ missing. Run npm run build first.'); process.exit(1); }
for (const page of files('dist', /\.html$/)) {
  const html = readFileSync(page, 'utf8');
  const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ');
  if (/placeholder|lorem ipsum|\bTODO\b|\bTBD\b/i.test(text)) blockers.push(`${page}: visible placeholder text`);
  const noindex = /<meta name="robots" content="[^"]*noindex/i.test(html);
  if (strict && noindex) failures.push(`${page}: noindex present but PUBLIC_INDEXABLE=true`);
  if (!strict && !noindex && !page.endsWith('404.html')) failures.push(`${page}: indexable although PUBLIC_INDEXABLE is not true`);
  if (!html.includes(site + base) && !page.endsWith('404.html')) failures.push(`${page}: does not reference ${address}`);
}

// 3. robots.txt and sitemap agree with the indexing decision and address.
const robots = existsSync('dist/robots.txt') ? readFileSync('dist/robots.txt', 'utf8') : '';
if (strict && /Disallow:\s*\/\s*$/m.test(robots)) failures.push('robots.txt blocks all crawlers but PUBLIC_INDEXABLE=true');
if (!strict && !/Disallow:\s*\/\s*$/m.test(robots)) failures.push('robots.txt allows crawlers but PUBLIC_INDEXABLE is not true');
const sitemap = existsSync('dist/sitemap.xml') ? readFileSync('dist/sitemap.xml', 'utf8') : '';
for (const m of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) if (!m[1].startsWith(address)) failures.push(`sitemap.xml: ${m[1]} is outside ${address}`);

// 4. CV PDF was generated for this address (an environment variable cannot rewrite an existing PDF).
const stamp = existsSync('scripts/cv-pdf-built-for.txt') ? readFileSync('scripts/cv-pdf-built-for.txt', 'utf8').trim() : '';
if (!existsSync('public/Al-Amin-Alif-CV.pdf')) failures.push('public/Al-Amin-Alif-CV.pdf is missing');
else if (stamp !== address) failures.push(`CV PDF was built for "${stamp || 'unknown'}" but the address is "${address}". Run scripts/build-cv-pdf.sh and commit the result.`);

// 4b. The CV download must work in the BUILT output, not just exist as a file: the page links to it,
// the PDF is in dist, and the PDF carries live link annotations (portfolio, email and phone).
const cvPage = existsSync('dist/cv/index.html') ? readFileSync('dist/cv/index.html', 'utf8') : '';
if (!existsSync('dist/Al-Amin-Alif-CV.pdf')) failures.push('dist/Al-Amin-Alif-CV.pdf is missing from the build');
if (!/href="[^"]*Al-Amin-Alif-CV\.pdf"/.test(cvPage)) failures.push('dist/cv/index.html has no link to the CV PDF');
if (/being prepared/i.test(cvPage)) failures.push('dist/cv/index.html still says the PDF is being prepared');
if (existsSync('public/Al-Amin-Alif-CV.pdf')) {
  const pdf = readFileSync('public/Al-Amin-Alif-CV.pdf', 'latin1');
  const uris = [...pdf.matchAll(/\/URI\s*\(([^)]*)\)/g)].map((m) => m[1]);
  if (!uris.some((x) => x.startsWith('mailto:'))) failures.push('CV PDF has no mailto link annotation');
  if (!uris.some((x) => x.startsWith('tel:'))) failures.push('CV PDF has no tel link annotation');
  if (!uris.includes(address)) failures.push(`CV PDF has no link annotation for ${address}`);
}

// 5. Legacy or private material must not be in the published output.
for (const bad of ['dist/legacy', 'dist/private']) if (existsSync(bad)) failures.push(`${bad} must not be published`);

console.log(`Release check for ${address} (${strict ? 'strict: indexable launch' : 'staging: noindex'})`);
if (blockers.length) console.log(`\n${strict ? 'BLOCKERS' : 'Warnings (become blockers at indexable launch)'}:\n  ` + blockers.join('\n  '));
if (failures.length) console.log('\nFAILURES:\n  ' + failures.join('\n  '));
const fail = failures.length > 0 || (strict && blockers.length > 0);
console.log(fail ? '\nRelease check FAILED.' : '\nRelease check passed.');
process.exit(fail ? 1 : 0);
