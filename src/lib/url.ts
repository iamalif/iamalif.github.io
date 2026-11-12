// Builds URLs under the configured base path (/ on a user site or Vercel; set PUBLIC_BASE for a project path).
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export const u = (path = ''): string => `${base}/${path.replace(/^\/+/, '')}`;

export const absolute = (path = ''): string =>
  new URL(u(path), import.meta.env.SITE ?? 'https://iamalif.github.io').toString();
