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