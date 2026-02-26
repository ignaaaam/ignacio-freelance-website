# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build to ./dist/ (minifies with terser, drops console/debugger)
pnpm preview      # Preview production build locally
pnpm check:seo    # Run SEO audit script (check-seo.js)
pnpm astro check  # TypeScript type checking
```

Use **pnpm** (not npm). The lock file is `pnpm-lock.yaml`.

## Architecture

**Astro + Vercel SSR** site (`output: 'server'`). Deployed to [ignacioamatweb.com](https://ignacioamatweb.com).

### i18n

- Default locale: `es` (no URL prefix) — e.g. `/`, `/desarrollador-web-barcelona`
- English: `/en/` prefix — e.g. `/en/`, `/en/web-developer-barcelona`
- Translations live in `src/i18n/locales/en.json` and `es.json`
- Route mappings (ES ↔ EN URL pairs) are explicitly defined in `src/i18n/utils.ts`
- Use `useTranslations(Astro.url.pathname)` in page frontmatter to get a `t(key)` function
- When adding a new bilingual page, add its route pair to the `routeMappings` object in `src/i18n/utils.ts`

### Layout

`src/layouts/Layout.astro` is the single shared layout. It handles:
- All SEO meta tags (Open Graph, Twitter Card, hreflang, canonical)
- JSON-LD structured data (WebSite/Article + Organization + Breadcrumb)
- GA4 tracking (G-3ZDBF6HWZX) with scroll depth and outbound link events
- Light/dark theme toggle via `data-theme` on `<html>` (persisted in `localStorage`)
- Scroll reveal animations: add `data-sr` attribute to any element

Props: `title` (required), `description`, `lang`, `canonicalUrl`, `image`, `keywords`, `type`, `publishedDate`, `additionalSchemas`, `alternateUrls`.

### Contact API

`src/pages/api/contact.ts` — POST endpoint using [Resend](https://resend.com).
- Requires `RESEND_API_KEY` in `.env.local`
- Honeypot field: `website` (hidden field; if filled, silently succeeds)
- Sends to `ignasiamat10@gmail.com`

### Pages structure

- `src/pages/index.astro` — Spanish homepage (one-page portfolio)
- `src/pages/en/index.astro` — English homepage
- `src/pages/[slug].astro` — Spanish SEO landing pages (Barcelona-specific, industry-specific)
- `src/pages/en/[slug].astro` — English counterparts
- `src/pages/blog/` — Blog index + articles

### Styling

TailwindCSS v4 via `@tailwindcss/vite` (no `tailwind.config.js` — configured purely through CSS). Global styles in `src/styles/global.css`. Theme variables use `data-theme="light"` / `data-theme="dark"` on the `<html>` element.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Contact form email delivery |
