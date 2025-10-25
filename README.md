# Ilyasse Taame — Portfolio

Modern, production-ready portfolio for Ilyasse Taame showcasing spacecraft operations, telemetry engineering projects, and publications. Built with React, Vite, Tailwind CSS, and TypeScript with content sourced from editable JSON files.

## Highlights

- ⚡️ Blazing fast Vite build with per-route code splitting and hover prefetching
- 🎨 Accessible design system using Tailwind, reusable UI primitives, dark/light theme with persistence
- 📡 Mission-focused storytelling for projects, experience timeline, and publications with BibTeX copy support
- 📨 Netlify-ready contact form with optional Formspree fallback (configure `VITE_FORMSPREE_FORM_ID`), honeypot field, and mailto shortcut
- 📈 Optional Plausible analytics hook controlled via `VITE_PLAUSIBLE_DOMAIN`
- 🗺️ SEO-friendly metadata, Open Graph/Twitter tags, sitemap, robots, RSS feed, and manifest
- ✅ Automated CI for type checks, builds, and tests via GitHub Actions

## Structure

- `public/` → favicons, sitemap, robots, manifest, RSS, and media assets
- `src/data/` → JSON content for profile, projects, experience, publications, skills, socials
- `src/components/` → shared UI building blocks (cards, timeline, forms, copy button)
- `src/routes/` → lazily loaded pages (Home, Projects, Project details, Experience, Publications, Contact, Not Found)
- `src/lib/` → utilities for SEO, RSS generation, analytics integration, helpers
- `src/tests/` → Vitest + Testing Library smoke tests and setup

## Content Editing

Update the JSON files in `src/data/` to refresh projects, experience, publications, socials, and skills. Changes hot-reload instantly during development. Project slugs are stored explicitly to ensure stable URLs—keep them unique when adding new entries.

To refresh the publications RSS feed, run a small script in a Node REPL or build step calling `generateRss` from `src/lib/rss.ts` with the updated JSON data, then write the output to `public/rss.xml`.

## Analytics

Set `VITE_PLAUSIBLE_DOMAIN` in a `.env` file (not committed) or deployment environment to enable Plausible analytics. When unset, no analytics script is injected.

## Testing

- `pnpm test` runs Vitest with Testing Library (JS DOM environment)
- `pnpm typecheck` ensures TypeScript safety

## Deployment Notes

### Netlify

- Use the provided `netlify.toml`
- Build command: `pnpm build`
- Publish directory: `dist`
- Forms work automatically thanks to the Netlify attributes on the contact form

### Vercel

- Use `vercel.json`
- Framework preset: **Other** (custom Vite)
- Build command: `pnpm build`
- Output directory: `dist`

## Accessibility & Performance

- Semantic HTML structure with skip link, focus-visible styles, and keyboard-friendly nav
- Lazy-loaded routes and hover prefetching for fast navigation
- Images optimized with `loading="lazy"` and `decoding="async"`
- High-contrast theming across light and dark modes

## Setup & Deploy

```bash
pnpm create vite@latest portfolio -- --template react-ts
pnpm add -D tailwindcss postcss autoprefixer @types/react-helmet
pnpm add react-router-dom react-helmet-async
pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom
pnpm dlx tailwindcss init -p
pnpm dev
pnpm build
```

- For Netlify: connect repository, set build command to `pnpm build`, publish directory `dist`, enable forms.
- For Vercel: import project, set build command to `pnpm build`, output directory `dist`.
- Update JSON in `src/data/` to adjust site content; redeploy to publish changes.
