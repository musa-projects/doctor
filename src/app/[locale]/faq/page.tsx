import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageWrapper from "@/components/animation/PageWrapper";
import FadeIn from "@/components/animation/FadeIn";
import FAQList from "@/components/sections/faq/FAQList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });

  return (
    <PageWrapper>
      {/* Page header */}
      <section className="py-24 bg-background-elevated">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
              {t("title")}
            </h1>
            <p className="text-foreground-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      <FAQList />
    </PageWrapper>
  );
}
