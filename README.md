# Amine Portfolio

Personal portfolio of **Mohamed Amine Bouzidi**, a full-stack engineer specialised in
React, Node.js and React Native. The site is a single-page React application with
English and French content, a single blue/cyan palette in light and dark mode,
project case studies, a small field-notes blog and an accessible contact form.

**Live site:** <https://mohamedaminebz.github.io/amine-portfolio/>

## AURA

The current interface is built around **AURA**: a soft-futuristic, glassy bento
layout. Aurora gradients sit behind frosted surfaces, the hero centres on a glowing
portrait orb, project cards use gradient covers, and field notes read like tilted
sticky notes. On desktop the navigation is a floating pill that reacts to scroll; on
mobile it becomes a bottom dock.

The design deliberately keeps one palette — a blue primary (`brand`) with a cyan
accent (`accent`) — and only switches between light and dark. All colours are
semantic tokens (`canvas`, `surface`, `ink`, `muted`, `brand`, `accent`, `line`) so
the two modes stay consistent.

Typography: **Sora** for display, **Manrope** for body copy and **JetBrains Mono**
for micro labels.

## Tech stack

- **React 18** + **TypeScript** (strict mode)
- **Vite 6** for development and production builds
- **Tailwind CSS 3** with CSS-variable based theming
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
  components/v3/    AURA sections, overlays and shared UI pieces
  context/          Light/dark theme provider and hook
  data/             Localised portfolio content and field notes (EN/FR)
  hooks/            Hash routing, scroll spy, data, metadata and clock helpers
  i18n/             i18next setup and translation bundles
  lib/              Asset URL, date/period parsing and shared helpers
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

Field notes live in `src/data/notes.en.ts` and `src/data/notes.fr.ts`. Each note is
a short first-person entry tied to a real project through `projectId`; the reader
links back to the matching case study. Notes are sorted newest first.

UI strings live in `src/i18n/locales/en.json` and `fr.json`. A test verifies that
both bundles expose exactly the same keys. Language is stored in `localStorage`
and falls back to the browser language, normalising regional tags such as
`en-US` to `en`.

## Reading views

The site keeps normal section anchors (`#work`, `#notes`, `#contact`, …) and adds
two hash routes for overlays:

- `#case=<project-id>` opens a project case study.
- `#note=<slug>` opens a field note.

Both views use a shared dialog shell with a focus trap, `Escape` to close, focus
restoration, scroll locking and previous/next navigation. Closing a view returns to
its parent section.

## Themes

There is one palette with a light and a dark mode. The mode is stored in
`localStorage` under `theme` and applied by the pre-paint script in `index.html`, so
the page does not flash before React mounts. `ThemeContext` keeps open tabs in sync
through the `storage` event, and the header exposes a single sun/moon toggle.

Palette tokens are defined in `src/index.css`; components never hard-code a second
colour system.

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
- Keyboard support for project cards, field notes and both reading overlays
  (focus trap, `Escape`, previous/next navigation, focus restoration).
- Labelled form fields, inline validation messages and `aria-live` status output.
- `prefers-reduced-motion` support, including a reduced-motion path that skips the
  reveal animations.
- A pre-paint theme script avoids a flash of the wrong mode.
