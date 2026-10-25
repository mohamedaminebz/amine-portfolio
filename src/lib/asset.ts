/**
 * Prefix a path from `public/` with Vite's configured base URL.
 * Screenshot URLs are stored as "/images/projects/...", which would 404 on
 * GitHub Pages where the site is served from "/amine-portfolio/".
 */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
