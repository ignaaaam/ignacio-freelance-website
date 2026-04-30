import en from './locales/en.json';
import es from './locales/es.json';

export type Locale = 'en' | 'es';
export type TranslationKey = string;

const translations = {
  en,
  es,
};

const routeMappings: Record<string, { es?: string; en?: string }> = {
  '/': { es: '/', en: '/en/' },
  '/blog': { es: '/blog', en: '/en/blog' },
  '/thanks': { es: '/thanks', en: '/en/thanks' },
  '/contact': { es: '/contact', en: '/en/contact' },
  '/privacidad': { es: '/privacidad', en: '/en/privacy' },
  '/aviso-legal': { es: '/aviso-legal', en: '/en/legal-notice' },
  '/terminos': { es: '/terminos', en: '/en/terms' },
  '/crear-pagina-web-barcelona': { es: '/crear-pagina-web-barcelona', en: '/en/create-website-barcelona' },
  '/crear-pagina-web-madrid': { es: '/crear-pagina-web-madrid', en: '/en/create-website-madrid' },
  '/crear-pagina-web-valencia': { es: '/crear-pagina-web-valencia', en: '/en/create-website-valencia' },
  '/crear-pagina-web-malaga': { es: '/crear-pagina-web-malaga', en: '/en/create-website-malaga' },
  '/crear-pagina-web-bilbao': { es: '/crear-pagina-web-bilbao', en: '/en/create-website-bilbao' },
  '/crear-pagina-web-sevilla': { es: '/crear-pagina-web-sevilla', en: '/en/create-website-sevilla' },
  '/crear-pagina-web-alicante': { es: '/crear-pagina-web-alicante', en: '/en/create-website-alicante' },
  '/desarrollador-web-barcelona': { es: '/desarrollador-web-barcelona', en: '/en/web-developer-barcelona' },
  '/desarrollador-web-espana': { es: '/desarrollador-web-espana', en: '/en/web-developer-spain' },
  '/desarrollador-web-madrid': { es: '/desarrollador-web-madrid', en: '/en/web-developer-madrid' },
  '/desarrollador-web-valencia': { es: '/desarrollador-web-valencia', en: '/en/web-developer-valencia' },
  '/desarrollador-web-sevilla': { es: '/desarrollador-web-sevilla', en: '/en/web-developer-sevilla' },
  '/diseno-web-empresas': { es: '/diseno-web-empresas', en: '/en/web-design-businesses' },
  '/desarrollo-web-pymes': { es: '/desarrollo-web-pymes', en: '/en/web-development-small-businesses' },
  '/contratar-desarrollador-full-stack': { es: '/contratar-desarrollador-full-stack', en: '/en/hire-full-stack-web-developer' },
  '/servicios': { es: '/servicios', en: '/en/services' },
  // Phase 2 — Service pages
  '/desarrollador-laravel-freelance': { es: '/desarrollador-laravel-freelance', en: '/en/freelance-laravel-developer' },
  '/rediseno-web-mejoras': { es: '/rediseno-web-mejoras', en: '/en/website-redesign-improvements' },
  '/desarrollo-aplicacion-web-saas': { es: '/desarrollo-aplicacion-web-saas', en: '/en/web-application-saas-development' },
  '/crear-landing-page-profesional': { es: '/crear-landing-page-profesional', en: '/en/professional-landing-page-development' },
  '/mantenimiento-web': { es: '/mantenimiento-web', en: '/en/website-maintenance' },
  // Phase 3 — AEO pages
  '/preguntas-frecuentes': { es: '/preguntas-frecuentes', en: '/en/frequently-asked-questions' },
  '/cuanto-cuesta-pagina-web': { es: '/cuanto-cuesta-pagina-web', en: '/en/how-much-does-website-cost' },
  '/como-elegir-desarrollador-web': { es: '/como-elegir-desarrollador-web', en: '/en/how-to-choose-web-developer' },
  // Phase 4 — New city landings (SEO expansion)
  '/desarrollador-web-malaga': { es: '/desarrollador-web-malaga', en: '/en/web-developer-malaga' },
  '/desarrollador-web-bilbao': { es: '/desarrollador-web-bilbao', en: '/en/web-developer-bilbao' },
  '/desarrollador-web-zaragoza': { es: '/desarrollador-web-zaragoza', en: '/en/web-developer-zaragoza' },
  '/desarrollador-web-murcia': { es: '/desarrollador-web-murcia', en: '/en/web-developer-murcia' },
  '/desarrollador-web-palma-mallorca': { es: '/desarrollador-web-palma-mallorca', en: '/en/web-developer-palma-mallorca' },
  '/desarrollador-web-remoto-espana': { es: '/desarrollador-web-remoto-espana', en: '/en/remote-web-developer-spain' },
  '/remote-web-developer-europe-spain': { es: '/desarrollador-web-remoto-espana', en: '/en/remote-web-developer-europe-spain' },
  '/react-nextjs-expert-spain': { es: '/contratar-desarrollador-full-stack', en: '/en/react-nextjs-expert-spain' },
  '/hire-web-developer-europe': { es: '/desarrollador-web-remoto-espana', en: '/en/hire-web-developer-europe' },
  // Barcelona sectoral landings (ES + EN counterparts)
  '/desarrollador-web-eixample-barcelona': { es: '/desarrollador-web-eixample-barcelona', en: '/en/web-developer-eixample-barcelona' },
  '/pagina-web-restaurantes-barcelona': { es: '/pagina-web-restaurantes-barcelona', en: '/en/restaurant-website-barcelona' },
  '/pagina-web-clinicas-dentistas-barcelona': { es: '/pagina-web-clinicas-dentistas-barcelona', en: '/en/dental-clinic-website-barcelona' },
  '/pagina-web-abogados-despachos-barcelona': { es: '/pagina-web-abogados-despachos-barcelona', en: '/en/law-firm-website-barcelona' },
  '/pagina-web-startups-barcelona': { es: '/pagina-web-startups-barcelona', en: '/en/startup-website-barcelona' },
  '/pagina-web-tiendas-comercios-barcelona': { es: '/pagina-web-tiendas-comercios-barcelona', en: '/en/shop-website-barcelona' },
  '/web-developer-alicante': { en: '/en/web-developer-alicante' },
};

function normalizePath(path: string): string {
  if (!path) return '/';
  const cleaned = path !== '/' ? path.replace(/\/+$/, '') : path;
  return cleaned || '/';
}

function findRoutePair(path: string): { es?: string; en?: string } | null {
  const normalizedPath = normalizePath(path);
  const bySpanishRoute = routeMappings[normalizedPath];
  if (bySpanishRoute) {
    return bySpanishRoute;
  }

  const fromEnglish = Object.values(routeMappings).find((entry) => {
    return entry.en !== undefined && normalizePath(entry.en) === normalizedPath;
  });

  return fromEnglish ?? null;
}

function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((o, i) => o?.[i], obj);
}

export function getTranslation(locale: Locale, key: TranslationKey): string {
  const translation = translations[locale];
  const value = getNestedValue(translation, key);
  return value || getNestedValue(translations.en, key) || key;
}

export function getLocaleFromPath(path: string): Locale {
  return normalizePath(path).startsWith('/en') ? 'en' : 'es';
}

export function getPathWithoutLocale(path: string): string {
  const normalized = normalizePath(path);
  return normalized.startsWith('/en') ? normalized.slice(3) || '/' : normalized;
}

export function getAlternateUrls(path: string): { en?: string; es?: string } {
  const normalizedPath = normalizePath(path);
  const routePair = findRoutePair(normalizedPath);

  if (routePair) {
    return routePair;
  }

  if (normalizedPath === '/en') {
    return { es: '/', en: '/en/' };
  }

  // For pages without a translation pair, keep only the current locale URL.
  if (normalizedPath.startsWith('/en/')) {
    return { en: normalizedPath };
  }

  return { es: normalizedPath || '/' };
}

export function getLanguageSwitchUrls(url: URL): { en: string; es: string } {
  const path = normalizePath(url.pathname);
  const routePair = findRoutePair(path);
  if (routePair) {
    return { es: routePair.es ?? '/', en: routePair.en ?? '/en/' };
  }

  const from = url.searchParams.get('from');

  if (path === '/en/' && from && !from.startsWith('/en')) {
    return { es: from, en: '/en/' };
  }

  if (path === '/' && from && from.startsWith('/en')) {
    return { es: '/', en: from };
  }

  if (path.startsWith('/en/')) {
    return { es: `/?from=${encodeURIComponent(path)}`, en: path };
  }

  return { es: path, en: `/en/?from=${encodeURIComponent(path)}` };
}

/** Returns a translation function for the given path (used in Astro pages). */
export function useTranslations(path: string): (key: TranslationKey) => string {
  const locale = getLocaleFromPath(path);
  return (key: TranslationKey) => getTranslation(locale, key);
}

export type SitemapRouteEntry = { es?: string; en?: string };

/** Unique marketing URLs for sitemap generation (Spanish canonical paths as keys). */
export function getSitemapRouteEntries(): SitemapRouteEntry[] {
  return Object.values(routeMappings).map((pair) => ({
    es: pair.es,
    en: pair.en,
  }));
}
