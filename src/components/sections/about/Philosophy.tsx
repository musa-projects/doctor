"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/animation/FadeIn";
import { Quote } from "lucide-react";

export default function Philosophy() {
  const t = useTranslations("about");

  return (
    <section className="py-24 bg-background-elevated relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-gold opacity-20" />
      <div className="absolute top-10 end-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-10 start-10 w-96 h-96 rounded-full bg-gold/3 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center">
            {/* Section title */}
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-12">
              {t("philosophy.title")}
            </h2>

            {/* Quote block */}
            <div className="relative">
              {/* Quote icon */}
              <Quote className="w-12 h-12 text-gold/30 mx-auto mb-6" />

              {/* Gold accent lines */}
              <div className="flex justify-center mb-8">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              </div>

              {/* Quote text */}
              <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground-muted italic font-serif mb-8">
                &ldquo;{t("philosophy.quote")}&rdquo;
              </blockquote>

              {/* Bottom accent */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              </div>

              {/* Author */}
              <p className="text-gold font-semibold text-lg">
                {t("philosophy.author")}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
