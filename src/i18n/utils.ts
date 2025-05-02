import type { APIRoute } from 'astro';
import en from './locales/en.json';
import es from './locales/es.json';

export type Locale = 'en' | 'es';
export type TranslationKey = string;

const translations = {
  en,
  es,
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
  const pathWithoutLocale = getPathWithoutLocale(path);
  return {
    en: pathWithoutLocale === '/' ? '/en' : `/en${pathWithoutLocale}`,
    es: pathWithoutLocale === '/' ? '/' : pathWithoutLocale,
  };
}

// Language detection utilities
export function detectPreferredLanguage(request: Request): Locale {
  // 1. Check Accept-Language header from the browser
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    // Parse the Accept-Language header
    // Example: "es-ES,es;q=0.9,en;q=0.8,en-US;q=0.7"
    const languages = acceptLanguage.split(',')
      .map(lang => {
        const [language, quality = 'q=1.0'] = lang.trim().split(';');
        return {
          language: language.split('-')[0].toLowerCase(), // Get the base language code
          quality: parseFloat(quality.split('=')[1])
        };
      })
      .sort((a, b) => b.quality - a.quality);

    // Check if Spanish is one of the preferred languages
    const isSpanishPreferred = languages.some(lang => 
      ['es', 'ca', 'gl'].includes(lang.language) || 
      // Common Spanish-speaking countries in South America
      ['ar', 'bo', 'cl', 'co', 'cr', 'cu', 'do', 'ec', 
       'sv', 'gt', 'hn', 'mx', 'ni', 'pa', 'py', 'pe', 
       'pr', 'uy', 've'].includes(lang.language)
    );

    if (isSpanishPreferred) {
      return 'es';
    }

    // If the top preferred language is Spanish, return 'es'
    if (languages.length > 0 && languages[0].language === 'es') {
      return 'es';
    }
  }

  // Default to English if we can't determine the language
  return 'en';
}

// Use this in middleware to check if we should redirect based on detected language
export function shouldRedirect(request: Request, currentPath: string): { redirect: boolean; url: string } | null {
  // Don't redirect if already on a localized path
  if (currentPath.startsWith('/en/') || currentPath === '/en' || 
      currentPath === '/' || (!currentPath.startsWith('/en') && currentPath !== '/')) {
    return null;
  }

  const detectedLocale = detectPreferredLanguage(request);
  const alternateUrls = getAlternateUrls(currentPath);
  
  // If detected locale is English and we're not on English path, redirect
  if (detectedLocale === 'en' && !currentPath.startsWith('/en')) {
    return { redirect: true, url: alternateUrls.en };
  }
  
  // No need to redirect
  return null;
} 