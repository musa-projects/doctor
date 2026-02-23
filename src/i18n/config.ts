export const locales = ["en", "ar", "he"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const rtlLocales: Locale[] = ["ar", "he"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  he: "עברית",
};

export function isRtl(locale: string): boolean {
  return rtlLocales.includes(locale as Locale);
}

export function getDirection(locale: string): "ltr" | "rtl" {
  return isRtl(locale) ? "rtl" : "ltr";
}
