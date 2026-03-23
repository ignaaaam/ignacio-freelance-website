import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedBlogEntries } from '../data/blog';

export async function GET(context: APIContext) {
  const posts = await getPublishedBlogEntries('es');

  return rss({
    title: 'Blog | Ignacio Amat — Desarrollador Web Freelance',
    description:
      'Guías prácticas sobre tecnología web, decisiones de producto, SEO, conversión y lo que necesitas saber antes de contratar desarrollo web.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: [post.data.category],
    })),
    customData: `<language>es-es</language>`,
    stylesheet: false,
  });
}
