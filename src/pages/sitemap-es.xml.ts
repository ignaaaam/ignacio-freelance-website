import type { APIRoute } from 'astro';
import { buildSitemapEsXml } from '../data/sitemap-build';

export const GET: APIRoute = async () => {
  const body = await buildSitemapEsXml();
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
