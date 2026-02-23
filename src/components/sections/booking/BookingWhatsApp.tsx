"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/animation/FadeIn";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function BookingWhatsApp() {
  const t = useTranslations("booking");

  return (
    <section className="py-16 bg-background-elevated">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center">
          <div className="bg-background-card border border-border rounded-2xl p-10 md:p-14 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
              {t("whatsapp.title")}
            </h2>
            <p className="text-foreground-muted text-lg mb-8 leading-relaxed">
              {t("whatsapp.description")}
            </p>
            <WhatsAppButton label={t("whatsapp.button")} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
