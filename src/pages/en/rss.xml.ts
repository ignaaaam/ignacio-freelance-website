import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getBlogEntryPathSlug, getPublishedBlogEntries } from '../../data/blog';

export async function GET(context: APIContext) {
  const posts = await getPublishedBlogEntries('en');

  const site = context.site ?? new URL('https://www.ignacioamatweb.com/');

  return rss({
    title: 'Blog | Ignacio Amat — Freelance Web Developer',
    description:
      'Practical guides on web technology, product decisions, SEO, conversion, and everything you need to know before hiring web development.',
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      description: post.data.description,
      link: new URL(`/en/blog/${getBlogEntryPathSlug(post)}/`, site).href,
      categories: [...new Set([post.data.category, ...post.data.tags])],
    })),
    customData: `<language>en-us</language>`,
    stylesheet: false,
  });
}
