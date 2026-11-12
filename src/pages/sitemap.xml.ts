import { getCollection } from 'astro:content';
import { absolute } from '../lib/url';

export async function GET() {
  const work = await getCollection('work', (e) => e.data.hasPage && !e.data.draft);
  const projects = await getCollection('projects', (e) => e.data.hasPage && !e.data.draft);
  const paths = ['', 'work/', 'projects/', 'about/', 'cv/', 'contact/', ...work.map((e) => `work/${e.id}/`), ...projects.map((e) => `projects/${e.id}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${absolute(p)}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
