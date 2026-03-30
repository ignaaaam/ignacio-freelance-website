import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedBlogEntries } from '../../data/blog';

export async function GET(context: APIContext) {
  const posts = await getPublishedBlogEntries('en');

  return rss({
    title: 'Blog | Ignacio Amat — Freelance Web Developer',
    description:
      'Practical guides on web technology, product decisions, SEO, conversion, and everything you need to know before hiring web development.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      description: post.data.description,
      link: `/en/blog/${post.slug}/`,
      categories: [post.data.category],
    })),
    customData: `<language>en-us</language>`,
    stylesheet: false,
  });
}
