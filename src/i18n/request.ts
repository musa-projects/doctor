import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { hasLocale } from "next-intl";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messageModules = await Promise.all([
    import(`../messages/${locale}/common.json`),
    import(`../messages/${locale}/home.json`),
    import(`../messages/${locale}/about.json`),
    import(`../messages/${locale}/services.json`),
    import(`../messages/${locale}/booking.json`),
    import(`../messages/${locale}/patient-info.json`),
    import(`../messages/${locale}/testimonials.json`),
    import(`../messages/${locale}/faq.json`),
    import(`../messages/${locale}/contact.json`),
    import(`../messages/${locale}/blog.json`),
    import(`../messages/${locale}/legal.json`),
  ]);

  const messages = Object.assign({}, ...messageModules.map((m) => m.default));

  return {
    locale,
    messages,
  };
});
