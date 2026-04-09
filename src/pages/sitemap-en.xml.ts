import type { APIRoute } from 'astro';
import { buildSitemapEnXml } from '../data/sitemap-build';

export const GET: APIRoute = async () => {
  const body = await buildSitemapEnXml();
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
