import type { APIRoute } from 'astro';
import en from './locales/en.json';
import es from './locales/es.json';

export type Locale = 'en' | 'es';
export type TranslationKey = string;

const translations = {
  en,
  es,
};

const routeMappings: Record<string, { es: string; en: string }> = {
  '/': { es: '/', en: '/en/' },
  '/contact': { es: '/contact', en: '/en/contact' },
  '/privacidad': { es: '/privacidad', en: '/en/privacy' },
  '/aviso-legal': { es: '/aviso-legal', en: '/en/legal-notice' },
  '/terminos': { es: '/terminos', en: '/en/terms' },
  '/crear-pagina-web-barcelona': { es: '/crear-pagina-web-barcelona', en: '/en/create-website-barcelona' },
  '/desarrollador-web-barcelona': { es: '/desarrollador-web-barcelona', en: '/en/web-developer-barcelona' },
  '/desarrollador-web-espana': { es: '/desarrollador-web-espana', en: '/en/web-developer-spain' },
  '/desarrollador-web-madrid': { es: '/desarrollador-web-madrid', en: '/en/web-developer-madrid' },
  '/desarrollador-web-valencia': { es: '/desarrollador-web-valencia', en: '/en/web-developer-valencia' },
  '/desarrollador-web-sevilla': { es: '/desarrollador-web-sevilla', en: '/en/web-developer-sevilla' },
  '/diseno-web-empresas': { es: '/diseno-web-empresas', en: '/en/web-design-businesses' },
  '/contratar-desarrollador-full-stack': { es: '/contratar-desarrollador-full-stack', en: '/en/hire-full-stack-web-developer' },
};

function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((o, i) => o?.[i], obj);
}

export function getTranslation(locale: Locale, key: TranslationKey): string {
  const translation = translations[locale];
  const value = getNestedValue(translation, key);
  return value || getNestedValue(translations.en, key) || key;
}

export function getLocaleFromPath(path: string): Locale {
  return path.startsWith('/en') ? 'en' : 'es';
}

export function getPathWithoutLocale(path: string): string {
  return path.startsWith('/en') ? path.slice(3) : path;
}

export function getAlternateUrls(path: string): { en: string; es: string } {
  const normalizedPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
  const bySpanishRoute = routeMappings[normalizedPath];

  if (bySpanishRoute) {
    return bySpanishRoute;
  }

  const fromEnglish = Object.values(routeMappings).find((entry) => {
    const normalizedEn = entry.en.endsWith('/') && entry.en !== '/en/' ? entry.en.slice(0, -1) : entry.en;
    return normalizedEn === normalizedPath;
  });

  if (fromEnglish) {
    return fromEnglish;
  }

  // For pages without a translation pair, keep the current page in its language
  // and point the alternate locale to its homepage.
  if (normalizedPath.startsWith('/en/')) {
    return { es: '/', en: normalizedPath };
  }

  return { es: normalizedPath || '/', en: '/en/' };
}

/** Returns a translation function for the given path (used in Astro pages). */
export function useTranslations(path: string): (key: TranslationKey) => string {
  const locale = getLocaleFromPath(path);
  return (key: TranslationKey) => getTranslation(locale, key);
} 
