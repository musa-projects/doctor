import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageWrapper from "@/components/animation/PageWrapper";
import FadeIn from "@/components/animation/FadeIn";

interface AccessibilityPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AccessibilityPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "legal.legal.accessibility",
  });

  return {
    title: t("title"),
  };
}

export default async function AccessibilityPage({
  params,
}: AccessibilityPageProps) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "legal.legal.accessibility",
  });

  return (
    <PageWrapper>
      <section className="py-24 bg-background-elevated">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
              {t("title")}
            </h1>
            <p className="text-foreground-subtle text-sm">
              {t("lastUpdated")}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn delay={0.2}>
            <div className="text-foreground-muted leading-relaxed text-lg whitespace-pre-line">
              {t("content")}
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
