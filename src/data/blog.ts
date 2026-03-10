import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;
export type BlogLocale = 'es' | 'en';

type ServiceLink = {
  label: string;
  href: string;
};

const serviceLinkMap: Record<string, Record<BlogLocale, ServiceLink>> = {
  'landing-pages': {
    es: { label: 'Landing pages', href: '/crear-landing-page-profesional' },
    en: { label: 'Landing pages', href: '/en/professional-landing-page-development' },
  },
  'business-websites': {
    es: { label: 'Webs de empresa', href: '/diseno-web-empresas' },
    en: { label: 'Business websites', href: '/en/web-design-businesses' },
  },
  redesigns: {
    es: { label: 'Redisenos web', href: '/rediseno-web-mejoras' },
    en: { label: 'Website redesigns', href: '/en/website-redesign-improvements' },
  },
  maintenance: {
    es: { label: 'Mantenimiento web', href: '/mantenimiento-web' },
    en: { label: 'Website maintenance', href: '/en/website-maintenance' },
  },
  'saas-mvp': {
    es: { label: 'SaaS y MVPs', href: '/desarrollo-aplicacion-web-saas' },
    en: { label: 'SaaS and MVPs', href: '/en/web-application-saas-development' },
  },
  laravel: {
    es: { label: 'Laravel freelance', href: '/desarrollador-laravel-freelance' },
    en: { label: 'Freelance Laravel developer', href: '/en/freelance-laravel-developer' },
  },
  pricing: {
    es: { label: 'Guia de precios', href: '/cuanto-cuesta-pagina-web' },
    en: { label: 'Pricing guide', href: '/en/how-much-does-website-cost' },
  },
};

function sortBlogEntries(entries: BlogEntry[]) {
  return [...entries].sort((a, b) => {
    return b.data.publishedDate.getTime() - a.data.publishedDate.getTime();
  });
}

export async function getPublishedBlogEntries(locale?: BlogLocale) {
  const entries = await getCollection('blog', ({ data }) => {
    if (data.draft) return false;
    return locale ? data.locale === locale : true;
  });

  return sortBlogEntries(entries);
}

export async function getTranslatedBlogEntry(entry: BlogEntry) {
  const siblings = await getCollection('blog', ({ data }) => {
    return !data.draft && data.group === entry.data.group && data.locale !== entry.data.locale;
  });

  return siblings[0] ?? null;
}

export async function getRelatedBlogEntries(entry: BlogEntry, limit = 2) {
  const localeEntries = await getPublishedBlogEntries(entry.data.locale);
  const sameCategory = localeEntries.filter((candidate) => {
    return candidate.id !== entry.id && candidate.data.category === entry.data.category;
  });

  const fallback = localeEntries.filter((candidate) => candidate.id !== entry.id);
  const merged = [...sameCategory];

  for (const candidate of fallback) {
    if (!merged.some((item) => item.id === candidate.id)) {
      merged.push(candidate);
    }
  }

  return merged.slice(0, limit);
}

export function getBlogPostUrl(locale: BlogLocale, slug: string) {
  return locale === 'en' ? `/en/blog/${slug}` : `/blog/${slug}`;
}

export function getBlogIndexUrl(locale: BlogLocale) {
  return locale === 'en' ? '/en/blog' : '/blog';
}

export function formatBlogDate(date: Date, locale: BlogLocale) {
  return date.toLocaleDateString(locale === 'en' ? 'en-US' : 'es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getLocalizedServiceLinks(keys: string[], locale: BlogLocale) {
  return keys
    .map((key) => serviceLinkMap[key]?.[locale])
    .filter((value): value is ServiceLink => Boolean(value));
}
