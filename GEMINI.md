# GEMINI.md

## Project Overview
**Ignacio Amat — Freelance Web Development Portfolio**
A high-performance, SEO-optimized portfolio and lead generation platform built with **Astro (SSR)**, **React**, and **Tailwind CSS v4**. The site is designed to capture leads via custom landing pages for specific locations (e.g., Barcelona) and industries (e.g., law firms, restaurants).

- **Primary Technologies:** Astro 5+, React 19, Tailwind CSS v4, TypeScript, Nodemailer (Gmail SMTP), Vercel.
- **Architecture:** SSR (Server-Side Rendering) on Vercel (`output: 'server'`).
- **Domain:** [ignacioamatweb.com](https://www.ignacioamatweb.com)

## Core Workflows

### 1. Internationalization (i18n)
The project uses a custom i18n system managed via `src/i18n/utils.ts`.
- **Default Locale:** Spanish (`es`) — URLs have no prefix (e.g., `/`).
- **Secondary Locale:** English (`en`) — URLs prefixed with `/en/`.
- **Translation Files:** `src/i18n/locales/en.json` and `es.json`.
- **Route Mappings:** Explicitly defined in `src/i18n/utils.ts` to link Spanish URLs to their English counterparts.
- **Usage:** 
  - Use `useTranslations(Astro.url.pathname)` in page frontmatter for a `t(key)` function.
  - When adding a new bilingual page, **MUST** update `routeMappings` in `src/i18n/utils.ts`.

### 2. SEO & Metadata
SEO is a first-class citizen. `src/layouts/Layout.astro` centralizes all metadata.
- **Metadata Props:** `title`, `description`, `canonicalUrl`, `image`, `keywords`, `type` (website/article), etc.
- **Structured Data:** Automatically generates JSON-LD for WebSite/WebPage and Breadcrumbs. Blog posts use `BlogPosting` schema.
- **Language Tags:** Handles `hreflang` and `canonical` tags automatically based on the current path and `routeMappings`.
- **Analytics:** Integrated GA4 tracking with custom event depth and outbound link tracking.

### 3. Content Strategy (Blog)
Articles live in `src/content/blog/`.
- **Strict Frontmatter:** Missing fields will break the Vercel build.
- **Required Fields:** `title`, `description`, `locale`, `group` (shared ID for translations), `author`, `publishedDate` (YYYY-MM-DD), `category`, `readTime`, `keywords` (array), `heroImage`, `heroImageAlt`.
- **Image Sourcing:** Prefer Unsplash IDs or official brand logos.

### 4. Lead Generation & Contact API
- **Endpoint:** `src/pages/api/contact.ts`
- **Transport:** Gmail SMTP via `nodemailer`.
- **Security:** Includes a honeypot field (`website`) and requires `.env.local` secrets.
- **Conversion Tracking:** Custom `site:lead-submitted` event triggers GA4 `generate_lead`.

## Development Commands

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts local development server at `localhost:4321` |
| `pnpm build` | Builds for production (drops console/debugger via Terser) |
| `pnpm preview` | Previews the production build locally |
| `pnpm check:seo` | Runs the custom SEO audit script (`check-seo.js`) |
| `pnpm astro check` | Runs TypeScript type checking |
| `pnpm generate:blog-image` | Generates SVG-based social share images for blog posts |

## Environment Variables (Required in `.env.local`)
- `GMAIL_USER`: SMTP sender address.
- `GMAIL_APP_PASSWORD`: Gmail App Password.
- `CONTACT_TO_EMAIL`: Recipient of lead emails.
- `RESEND_API_KEY`: (Legacy/Optional) for alternative email handling.

## Directory Structure Highlights
- `src/components/`: Modular Astro/React components.
- `src/data/`: Static content (`siteContent.ts`), config (`siteConfig.ts`), and global schemas.
- `src/pages/`: Route structure. Spanish roots, `/en/` subfolder for English.
- `scripts/`: Utility scripts for image generation and SEO checks.
- `docs/`: Strategic planning, design specs, and SEO action plans.
