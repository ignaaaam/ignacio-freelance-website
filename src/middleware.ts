import { defineMiddleware } from 'astro:middleware';
import { shouldRedirect } from './i18n/utils';
import type { Locale } from './i18n/utils';

// Extend Astro's Locals type to include 'locale'
declare module "astro" {
  interface Locals {
    locale?: string;
  }
}

export const onRequest = defineMiddleware(async ({ request, locals, url }, next) => {
  // Only apply middleware for page (HTML) requests, not for assets, API calls, etc.
  const accepts = request.headers.get('accept') || '';
  if (!accepts.includes('text/html')) {
    return next();
  }

  // Get the current locale based on URL
  const currentLocale: Locale = url.pathname.startsWith('/en') ? 'en' : 'es';
  locals.locale = currentLocale;
  
  // Only perform automatic detection on the root path
  // This ensures we only redirect on the initial visit
  if (url.pathname === '/') {
    // Check if we should redirect based on language
    const redirectInfo = shouldRedirect(request, url.pathname);
    if (redirectInfo && redirectInfo.redirect) {
      return new Response(null, {
        status: 302,
        headers: {
          'Location': redirectInfo.url
        },
      });
    }
  }

  // Continue to the page
  return await next();
}); 