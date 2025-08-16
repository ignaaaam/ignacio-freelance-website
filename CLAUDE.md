# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses pnpm as the package manager. Key commands:

- `pnpm dev` - Start development server at localhost:4321
- `pnpm build` - Build production site to ./dist/
- `pnpm preview` - Preview production build locally
- `pnpm astro` - Run Astro CLI commands

## Technology Stack

- **Framework**: Astro v5 with server-side rendering (SSR)
- **Styling**: TailwindCSS
- **UI Components**: React components for interactive features
- **Email**: Resend API for contact form
- **Deployment**: Vercel adapter configured
- **Languages**: TypeScript, with bilingual support (Spanish/English)

## Architecture Overview

### Internationalization (i18n)
The site implements a sophisticated bilingual system:

- **Default language**: Spanish (served from `/`)
- **English version**: Served from `/en/` paths
- **Language detection**: Automatic browser language detection on first visit via middleware (`src/middleware.ts:18`)
- **Translation system**: JSON-based translations in `src/i18n/locales/`
- **Language switching**: Manual toggle available in header

Key i18n files:
- `src/i18n/utils.ts` - Core translation utilities and language detection logic
- `src/middleware.ts` - Handles automatic language redirection on first visit
- `src/components/LanguageSwitcher.astro` - Language toggle component

### Project Structure

```
src/
├── components/        # Astro components for each page section
├── i18n/             # Internationalization system
│   ├── locales/      # Translation files (en.json, es.json)
│   └── utils.ts      # Translation utilities
├── layouts/          # Page layouts
├── pages/            # File-based routing
│   ├── api/          # API endpoints
│   ├── en/           # English pages
│   └── index.astro   # Spanish homepage
├── middleware.ts     # Language detection middleware
└── styles/           # CSS files
```

### Email Integration
Contact form uses Resend API:
- API endpoint: `src/pages/api/contact.ts`
- Sends to: `ignasiamat10@gmail.com`
- Requires `RESEND_API_KEY` environment variable
- Supports bilingual form validation and email templates

### Component Architecture
- Each page section is a separate Astro component
- React components used for interactive features (Toaster.tsx)
- ScrollReveal library integrated for animations
- Dark theme implemented throughout

## Environment Setup

Required environment variables:
- `RESEND_API_KEY` - Resend API key for email functionality

## Important Notes

- The site uses SSR mode with Vercel adapter
- Language detection only triggers on root path (`/`) to avoid redirect loops
- Translation fallback: Missing translations fall back to English, then to the key itself
- All email communications are sent to the hardcoded email address in the contact API