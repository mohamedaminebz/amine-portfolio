# Amine Portfolio

Personal portfolio of **Mohamed Amine Bouzidi**, a full-stack engineer specialised in
React, Node.js and React Native. The site is a single-page React application with
English and French content, a six-palette theme system, project case studies and
an accessible contact form.

**Live site:** <https://mohamedaminebz.github.io/amine-portfolio/>

## Tech stack

- **React 18** + **TypeScript** (strict mode)
- **Vite 6** for development and production builds
- **Tailwind CSS 3** with CSS-variable based theming
- **Framer Motion** for animations
- **i18next** / **react-i18next** for localisation (EN / FR)
- **React Hook Form** + **Zod** for contact-form validation
- **Vitest**, **Testing Library** and **jsdom** for tests
- **ESLint 9** (flat config) and **Prettier**

## Getting started

Requirements: **Node.js 18.18+** (20 recommended) and **pnpm 8**.

```bash
pnpm install
pnpm dev
```

The development server runs on <http://localhost:5173/amine-portfolio/> because the
site is built for GitHub Pages.

## Scripts

| Script                 | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `pnpm dev`             | Start the Vite dev server                           |
| `pnpm build`           | Typecheck and create a production build in `dist/`  |
| `pnpm preview`         | Preview the production build locally                |
| `pnpm typecheck`       | Run `tsc -b`                                        |
| `pnpm lint`            | Run ESLint                                          |
| `pnpm format`          | Format the repository with Prettier                 |
| `pnpm format:check`    | Verify formatting without writing files             |
| `pnpm test`            | Run the unit test suite once                        |
| `pnpm test:watch`      | Run tests in watch mode                             |
| `pnpm optimize:images` | Generate optimised WebP versions of the screenshots |

## Project structure

```
src/
  components/       UI sections and the project detail dialog
  context/          Theme provider and hook
  data/             Localised portfolio content (EN/FR)
  hooks/            Data, document metadata and responsive helpers
  i18n/             i18next setup and translation bundles
  lib/              Asset URL, theme catalogue, date parsing and shared helpers
  test/             Vitest setup
  types/            Shared TypeScript types
public/
  images/           Project screenshots and icons
scripts/
  optimize-images.mjs
```

## Content and internationalisation

Portfolio content lives in `src/data/portfolioData.en.ts` and
`src/data/portfolioData.fr.ts`. Both files must keep the same project ids and
shape; this is enforced by `src/data/index.test.ts`.

UI strings live in `src/i18n/locales/en.json` and `fr.json`. A test verifies that
both bundles expose exactly the same keys. Language is stored in `localStorage`
and falls back to the browser language, normalising regional tags such as
`en-US` to `en`.

## Themes

Six palettes ship in `src/lib/themes.ts`: three light (Fog, Paper, Sage) and three
dark (Ink, Carbon, Marine). The active palette is stored in `localStorage` under
`theme`; the pre-v2.2 `light` / `dark` values migrate to Fog / Ink on first load.
Each palette declares a base mode so Tailwind's `dark:` utilities keep working,
while `[data-theme="…"]` blocks in `src/index.css` swap the RGB token channels.

The pre-paint script in `index.html` applies the saved palette before React
mounts, and the provider keeps open tabs in sync through the `storage` event.
Visitors can switch from the header picker, the mobile menu or the command
palette (`Ctrl/⌘ K`).

## Contact form

The form validates name, email, subject and message with Zod. There is no backend
in this repository:

- If `VITE_CONTACT_ENDPOINT` is **not** set, submitting opens the visitor's email
  client with a pre-filled message (mailto fallback).
- If `VITE_CONTACT_ENDPOINT` **is** set, the form sends a `POST` request with a
  JSON body to that endpoint and displays success or error feedback.

Copy `.env.example` to `.env.local` to configure a custom endpoint.

## Images

Original screenshots are kept in `public/images`. `pnpm optimize:images` generates
WebP versions (max width 1600 px, quality 82) next to the originals; the data files
reference the `.webp` files. Social preview images keep their JPEG versions for
maximum compatibility.

Referenced images go through `src/lib/asset.ts`, which prefixes them with Vite's
`BASE_URL` so they resolve correctly under `/amine-portfolio/`.

## Deployment

The Vite `base` is set to `/amine-portfolio/` in `vite.config.ts`. If you fork the
project into a repository with a different name, update that value (and the
canonical/Open Graph URLs in `index.html`) accordingly.

Two workflows are included:

- `.github/workflows/ci.yml` runs typecheck, lint, formatting, tests and the build
  on pushes and pull requests.
- `.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages.

Enable **Settings → Pages → Build and deployment → GitHub Actions** once.

`public/.nojekyll` is included so files and folders beginning with an underscore
are served by GitHub Pages.

## Accessibility

- Skip link, semantic landmarks and visible focus styles.
- Keyboard support for project cards, screenshot thumbnails and the project dialog
  (focus trap, `Escape`, arrow-key lightbox navigation, focus restoration).
- Labelled form fields, inline validation messages and `aria-live` status output.
- `prefers-reduced-motion` support and a pre-paint theme script to avoid flashing.
- A labelled theme picker with live palette previews, `Escape` to close, focus
  restoration and reduced-motion-aware transitions.
