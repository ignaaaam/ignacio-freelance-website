import { defineCollection, z } from 'astro:content';

const faqItem = z.object({
  question: z.string(),
  answer: z.string(),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(['es', 'en']),
    group: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    readTime: z.string(),
    keywords: z.array(z.string()).default([]),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    heroImagePrompt: z.string().optional(),
    heroImageCredit: z.string().optional(),
    draft: z.boolean().default(false),
    relatedServices: z.array(z.string()).default([]),
    faq: z.array(faqItem).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
