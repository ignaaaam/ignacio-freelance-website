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
  const response = await next();

  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Add caching headers
  const pathname = new URL(request.url).pathname;

  // Cache static assets
  if (
    pathname.match(/\.(jpg|jpeg|png|gif|ico|css|js|svg|webp)$/) ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/assets/')
  ) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // Cache HTML pages
  else if (pathname.endsWith('.html') || pathname === '/') {
    response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
  }
  // Don't cache API routes
  else if (pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
  }
  // Default caching for other routes
  else {
    response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
  }

  return response;
}); 