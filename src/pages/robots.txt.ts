import { absolute } from '../lib/url';

// Only effective at a domain root. On a GitHub Pages project path crawlers ignore it,
// so noindex meta tags carry the indexing decision until a custom domain is used.
export async function GET() {
  const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true';
  const body = indexable ? `User-agent: *\nAllow: /\n\nSitemap: ${absolute('sitemap.xml')}\n` : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
