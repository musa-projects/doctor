import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageWrapper from "@/components/animation/PageWrapper";
import FadeIn from "@/components/animation/FadeIn";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import { getAllPosts } from "@/lib/blog";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog.blog" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog.blog" });
  const posts = getAllPosts(locale);

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

      <BlogGrid posts={posts} />
    </PageWrapper>
  );
}
