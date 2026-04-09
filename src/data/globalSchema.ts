import type { Locale } from '../i18n/utils';
import { siteContent } from './siteContent';

const BASE = 'https://www.ignacioamatweb.com';

/** Person, ProfessionalService with AggregateRating, and Review nodes from homepage testimonials. */
export function getGlobalJsonLdSchemas(lang: Locale): Record<string, unknown>[] {
  const page = siteContent[lang];
  const testimonials = page.testimonials.items;
  const personId = `${BASE}#person`;
  const businessId = `${BASE}#professional-service`;

  const person: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: 'Ignacio Amat',
    url: BASE,
    jobTitle: lang === 'es' ? 'Desarrollador web freelance' : 'Freelance web developer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Barcelona',
      addressCountry: 'ES',
    },
    sameAs: [
      'https://www.linkedin.com/in/ignacio-amat-urbina-789244223/',
      'https://github.com/ignaaaam',
      'https://x.com/ignathedev',
    ],
  };

  const ratings = testimonials.map((t) => t.schemaRating ?? 5);
  const avgRating =
    ratings.reduce((a, b) => a + b, 0) / (ratings.length || 1);

  const professionalService: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': businessId,
    name: 'Ignacio Amat Web Development',
    url: BASE,
    image: `${BASE}/brand-mark.svg`,
    priceRange: lang === 'es' ? '800 EUR - 6000+ EUR' : 'EUR 800 - 6000+',
    description:
      lang === 'es'
        ? 'Desarrollo web freelance en Barcelona y en remoto: landing pages, webs corporativas, MVPs y Laravel con foco en conversión y rendimiento.'
        : 'Freelance web development in Barcelona and remotely: landing pages, business websites, MVPs and Laravel with a focus on conversion and performance.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Barcelona',
      addressRegion: 'Catalonia',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.3874,
      longitude: 2.1686,
    },
    areaServed: [{ '@type': 'City', name: 'Barcelona' }, { '@type': 'Country', name: 'Spain' }],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: Math.round(avgRating * 10) / 10,
      bestRating: 5,
      worstRating: 1,
      ratingCount: testimonials.length,
      reviewCount: testimonials.length,
    },
    founder: { '@id': personId },
    sameAs: person.sameAs,
  };

  const reviews: Record<string, unknown>[] = testimonials.map((item, i) => {
    const authorLabel = [item.name, item.company].filter(Boolean).join(', ');
    const rating = item.schemaRating ?? 5;
    return {
      '@context': 'https://schema.org',
      '@type': 'Review',
      '@id': `${BASE}#review-${lang}-${i + 1}`,
      author: {
        '@type': 'Person',
        name: authorLabel || (lang === 'es' ? 'Cliente' : 'Client'),
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: rating,
        bestRating: 5,
      },
      reviewBody: item.quote,
      itemReviewed: { '@id': businessId },
    };
  });

  return [person, professionalService, ...reviews];
}
