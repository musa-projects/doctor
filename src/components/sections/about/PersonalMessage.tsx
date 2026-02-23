"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/animation/FadeIn";
import { Heart } from "lucide-react";

export default function PersonalMessage() {
  const t = useTranslations("about");

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-6">
              <Heart className="w-7 h-7 text-gold" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif">
              {t("message.title")}
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          {/* Message card with gold border */}
          <div className="relative rounded-2xl border border-gold/30 bg-background-elevated p-8 md:p-12">
            {/* Corner accents */}
            <div className="absolute top-0 start-0 w-8 h-8 border-t-2 border-s-2 border-gold/50 rounded-tl-2xl" />
            <div className="absolute top-0 end-0 w-8 h-8 border-t-2 border-e-2 border-gold/50 rounded-tr-2xl" />
            <div className="absolute bottom-0 start-0 w-8 h-8 border-b-2 border-s-2 border-gold/50 rounded-bl-2xl" />
            <div className="absolute bottom-0 end-0 w-8 h-8 border-b-2 border-e-2 border-gold/50 rounded-br-2xl" />

            <p className="text-foreground-muted text-lg leading-relaxed mb-8">
              {t("message.content")}
            </p>

            {/* Signature */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
              <p className="text-gold font-serif font-semibold italic text-lg shrink-0">
                {t("message.signature")}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
