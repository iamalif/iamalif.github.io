import { defineConfig } from 'astro/config';

// Origin and base path live here only; everything else builds URLs from them (src/lib/url.ts).
// Defaults suit a GitHub Pages user site at https://iamalif.github.io/ (repository named iamalif.github.io).
// Switching host later (Vercel, a custom domain, a project-path site) is a change of these two values,
// set as environment variables at build time, not a code change:
//   PUBLIC_SITE=https://example.com  PUBLIC_BASE=/  npm run build
const site = process.env.PUBLIC_SITE || 'https://iamalif.github.io';
const base = process.env.PUBLIC_BASE || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
