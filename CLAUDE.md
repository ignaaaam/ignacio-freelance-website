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

`src/pages/api/contact.ts` — POST endpoint using Gmail SMTP via nodemailer.
- Requires `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `CONTACT_TO_EMAIL` in `.env.local`
- Honeypot field: `website` (hidden field; if filled, silently succeeds)
- Sends to the address in `CONTACT_TO_EMAIL` (falls back to `GMAIL_USER`)

### Pages structure

- `src/pages/index.astro` — Spanish homepage (one-page portfolio)
- `src/pages/en/index.astro` — English homepage
- `src/pages/[slug].astro` — Spanish SEO landing pages (Barcelona-specific, industry-specific)
- `src/pages/en/[slug].astro` — English counterparts
- `src/pages/blog/` — Blog index + articles

### Blog articles — required frontmatter fields

Every new blog article (`.md` in `src/content/blog/es/` or `src/content/blog/en/`) **must** include ALL of the following frontmatter fields. Missing any of them causes a build failure on Vercel.

```yaml
title: "..."
description: "..."
locale: "es" # or "en"
group: "slug-shared-between-es-and-en-pair"
author: "Ignacio Amat"
publishedDate: YYYY-MM-DD        # NOT pubDate — must be publishedDate
category: "AI"                   # or "Tools", "Web", etc.
readTime: "7 min read"
keywords:                        # NOT tags — must be keywords
  - "keyword one"
  - "keyword two"
heroImage: "https://images.unsplash.com/photo-{PHOTO_ID}?auto=format&fit=crop&w=1200&q=80"
heroImageAlt: "Descriptive alt text for the image"
heroImageCredit: "Photo by {Photographer name} on Unsplash"
```

**Common mistakes that break the build:**
- Using `pubDate` instead of `publishedDate`
- Using `tags` instead of `keywords`
- Omitting `locale`, `group`, `category`, or `readTime`

**Content images** (images inside the article body) are optional but recommended for engagement.

**heroImage rules:**
- **For articles about specific brands/tools/companies**: search Google or the product's official site/GitHub for their logo or og:image. Use the direct public URL. Credit the brand in `heroImageCredit`.
- **For general topic articles**: search Unsplash (unsplash.com) for a relevant keyword, pick a high-quality photo, copy its ID from the URL (e.g. `unsplash.com/photos/abc123` → ID is `abc123`). Use format `https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w=1200&q=80`.

Always include `heroImageAlt` with a meaningful description (for SEO and accessibility) and `heroImageCredit` crediting the source.

### Blog / news (editorial workflow)

When adding **news-style** or topical articles:

1. **Anti-duplicados:** Before writing, scan existing posts under `src/content/blog/es/` and `src/content/blog/en/` (titles, topics, and shared `group` values). Do not publish the same story twice under a different slug.
2. **Research (internal only):** Use recent reporting from major tech news aggregators and trade press (e.g. general tech news wires, cloud and developer outlets, programming-focused coverage, community tech discussion). **Do not mention or link to any fixed internal source list** inside public article copy; articles should stand alone with neutral framing.
3. **Originalidad:** Do not copy-paste third-party wording. State verifiable facts briefly and add original analysis (impact on SMEs, digital products, web stacks, cost, compliance, or risk).
4. **`publishedDate`:** Set to the date the **main news event** became public (announcement, filing, regulatory milestone), not necessarily the day the file is committed. Two posts may share a date if two distinct events occurred the same day.
5. **Commercial mix:** Balance news/trend pieces with **high-intent** articles (pricing, mistakes that cost leads, redesign decisions, local/service pages). Link them to `/servicios`, `/cuanto-cuesta-pagina-web`, city landings, etc. Use `relatedServices` in frontmatter and contextual internal links in the body.
6. **Distribution (off-page):** Shipping content is not distribution. After publishing strong URLs: short LinkedIn/post summary + link, optional newsletter, pursue **quality backlinks** where relevant, and use Search Console to fix low-CTR titles/descriptions. Technical SEO on-site does not replace outreach.

**Blog conversion UI (repo):** Copy and URLs for the mid-article CTA (injected after the 3rd paragraph via `src/plugins/rehype-blog-mid-cta.mjs`), the commercial strip on posts and `/blog`, and blog-specific sticky CTA copy live in **`src/data/blog-commercial-nav.json`** (keys `es` / `en`). Update that file when changing links or wording.

### Styling

TailwindCSS v4 via `@tailwindcss/vite` (no `tailwind.config.js` — configured purely through CSS). Global styles in `src/styles/global.css`. Theme variables use `data-theme="light"` / `data-theme="dark"` on the `<html>` element.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `GMAIL_USER` | Gmail address used as SMTP sender |
| `GMAIL_APP_PASSWORD` | Gmail app password for SMTP authentication |
| `CONTACT_TO_EMAIL` | Recipient address for lead emails (defaults to `GMAIL_USER`) |
