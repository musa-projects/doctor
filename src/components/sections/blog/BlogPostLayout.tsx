"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import FadeIn from "@/components/animation/FadeIn";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import type { BlogPostMeta } from "@/types/blog";
import type { ReactNode } from "react";

interface BlogPostLayoutProps {
  meta: BlogPostMeta;
  children: ReactNode;
}

export default function BlogPostLayout({
  meta,
  children,
}: BlogPostLayoutProps) {
  const t = useTranslations("blog.blog");

  return (
    <div className="min-h-screen">
      {/* Hero image */}
      {meta.image && (
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <Image
            src={meta.image}
            alt={meta.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>
      )}

      {/* Header */}
      <section className={meta.image ? "py-12" : "py-24 bg-background-elevated"}>
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
              {t("backToBlog")}
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-gold/10 text-gold border border-gold/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight">
              {meta.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-foreground-muted text-sm">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-gold" />
                {t("by")} {meta.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold" />
                {t("publishedOn")}{" "}
                {new Date(meta.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                {meta.readingTime} {t("minRead")}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn delay={0.2}>
            <div className="blog-content text-foreground-muted leading-relaxed text-lg space-y-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:font-serif [&>h2]:text-foreground [&>h2]:mt-12 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:font-serif [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>blockquote]:border-l-2 [&>blockquote]:border-gold [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-foreground-subtle [&>a]:text-gold [&>a]:underline [&>a]:underline-offset-4 hover:[&>a]:text-gold-light [&>strong]:text-foreground [&>strong]:font-semibold">
              {children}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* Back to blog */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
              {t("backToBlog")}
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
