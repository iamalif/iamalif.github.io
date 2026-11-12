// Build-time content checks for published copy. They cannot prove a claim is true, so human review stays.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const roots = ['src/content', 'src/pages', 'src/components', 'src/layouts', 'src/data'];
const rules = [
  { name: 'em dash', test: /—/ },
  { name: 'DAP case-study link', test: /digitalauthority\.me\/case-studies/i },
  { name: 'unsupported phrase', test: /(60[- ]days?|99\.9%|uptime|EU work (permit|authori[sz]ation))/i },
  { name: 'private path', test: /\/Users\/|private\/evidence/i },
];
const files = [];
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(md|astro|ts|css|mjs)$/.test(f)) files.push(p);
  }
};
roots.forEach(walk);
let failures = 0;
for (const f of files) {
  const lines = readFileSync(f, 'utf8').split('\n');
  lines.forEach((l, i) => rules.forEach((r) => { if (r.test.test(l)) { console.log(`${f}:${i + 1}  ${r.name}: ${l.trim().slice(0, 90)}`); failures++; } }));
}
const placeholders = files.filter((f) => /placeholder: true|draft: true/.test(readFileSync(f, 'utf8')));
if (placeholders.length) console.log(`Note: ${placeholders.length} file(s) still contain placeholder or draft flags (fine locally, must be resolved before launch):\n  ` + placeholders.join('\n  '));
console.log(failures ? `\n${failures} content problem(s).` : '\nNo content rule violations.');
process.exit(failures ? 1 : 0);
