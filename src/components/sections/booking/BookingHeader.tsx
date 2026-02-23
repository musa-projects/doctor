"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/animation/FadeIn";

export default function BookingHeader() {
  const t = useTranslations("booking");

  return (
    <section className="py-24 bg-background-elevated">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-gradient-gold">
            {t("title")}
          </h1>
          <p className="text-foreground-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
