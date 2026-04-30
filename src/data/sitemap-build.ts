import { getSitemapRouteEntries } from '../i18n/utils';
import {
  getBlogEntryPathSlug,
  getBlogPostUrl,
  getPublishedBlogEntries,
  getTranslatedBlogEntry,
} from './blog';

const SITE = 'https://www.ignacioamatweb.com';

function escapeXml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** Absolute URL with site origin; keeps trailing slash for `/` and `/en/`. */
export function toAbsUrl(path: string) {
  if (path === '/') return `${SITE}/`;
  if (path === '/en/' || path === '/en') return `${SITE}/en/`;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE}${clean}`;
}

function priorityForPath(path: string): { priority: string; changefreq: string } {
  if (path === '/' || path === '/en/' || path === '/en') {
    return { priority: '1.0', changefreq: 'weekly' };
  }
  if (path === '/blog' || path === '/en/blog') {
    return { priority: '0.85', changefreq: 'weekly' };
  }
  if (path.includes('/blog/')) {
    return { priority: '0.75', changefreq: 'monthly' };
  }
  const lowPriority = new Set([
    '/privacidad',
    '/aviso-legal',
    '/terminos',
    '/thanks',
    '/en/privacy',
    '/en/legal-notice',
    '/en/terms',
    '/en/thanks',
  ]);
  if (lowPriority.has(path)) {
    return { priority: '0.4', changefreq: 'yearly' };
  }
  return { priority: '0.88', changefreq: 'weekly' };
}

function hrefBlock(paths: { es?: string; en?: string }) {
  const lines: string[] = [];
  if (paths.es) {
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="es" href="${escapeXml(toAbsUrl(paths.es))}" />`,
    );
  }
  if (paths.en) {
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(toAbsUrl(paths.en))}" />`,
    );
  }
  const xDefault = paths.es ?? paths.en;
  if (xDefault) {
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(toAbsUrl(xDefault))}" />`,
    );
  }
  return lines.join('\n');
}

function urlEl(loc: string, lastmod: string, priority: string, changefreq: string, hrefPaths: { es?: string; en?: string }) {
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${hrefBlock(hrefPaths)}
  </url>`;
}

export async function buildSitemapEsXml(): Promise<string> {
  const today = new Date().toISOString().split('T')[0];
  const parts: string[] = [];

  for (const route of getSitemapRouteEntries()) {
    if (!route.es) continue;
    const locPath = route.es;
    const { priority, changefreq } = priorityForPath(locPath);
    parts.push(
      urlEl(toAbsUrl(locPath), today, priority, changefreq, {
        es: route.es,
        en: route.en,
      }),
    );
  }

  const esPosts = await getPublishedBlogEntries('es');
  for (const post of esPosts) {
    const pathEs = getBlogPostUrl('es', getBlogEntryPathSlug(post));
    const translated = await getTranslatedBlogEntry(post);
    const pathEn = translated ? getBlogPostUrl('en', getBlogEntryPathSlug(translated)) : undefined;
    const lastmod = (post.data.updatedDate ?? post.data.publishedDate).toISOString().split('T')[0];
    const { priority, changefreq } = priorityForPath(pathEs);
    parts.push(
      urlEl(toAbsUrl(pathEs), lastmod, priority, changefreq, {
        es: pathEs,
        en: pathEn,
      }),
    );
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${parts.join('\n')}
</urlset>`;
}

export async function buildSitemapEnXml(): Promise<string> {
  const today = new Date().toISOString().split('T')[0];
  const parts: string[] = [];

  for (const route of getSitemapRouteEntries()) {
    if (!route.en) continue;
    const locPath = route.en;
    const { priority, changefreq } = priorityForPath(locPath);
    parts.push(
      urlEl(toAbsUrl(locPath), today, priority, changefreq, {
        es: route.es,
        en: route.en,
      }),
    );
  }

  const enPosts = await getPublishedBlogEntries('en');
  for (const post of enPosts) {
    const pathEn = getBlogPostUrl('en', getBlogEntryPathSlug(post));
    const translated = await getTranslatedBlogEntry(post);
    const pathEs = translated ? getBlogPostUrl('es', getBlogEntryPathSlug(translated)) : undefined;
    const lastmod = (post.data.updatedDate ?? post.data.publishedDate).toISOString().split('T')[0];
    const { priority, changefreq } = priorityForPath(pathEn);
    parts.push(
      urlEl(toAbsUrl(pathEn), lastmod, priority, changefreq, {
        es: pathEs,
        en: pathEn,
      }),
    );
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${parts.join('\n')}
</urlset>`;
}
