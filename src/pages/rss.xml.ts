import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getBlogEntryPathSlug, getPublishedBlogEntries } from '../data/blog';

export async function GET(context: APIContext) {
  const posts = await getPublishedBlogEntries('es');

  const site = context.site ?? new URL('https://www.ignacioamatweb.com/');

  return rss({
    title: 'Blog | Ignacio Amat — Desarrollador Web Freelance',
    description:
      'Guías prácticas sobre tecnología web, decisiones de producto, SEO, conversión y lo que necesitas saber antes de contratar desarrollo web.',
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      description: post.data.description,
      link: new URL(`/blog/${getBlogEntryPathSlug(post)}`, site).href,
      categories: [...new Set([post.data.category, ...post.data.tags])],
    })),
    customData: `<language>es-es</language>`,
    stylesheet: false,
  });
}
