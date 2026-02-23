"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import FadeIn from "@/components/animation/FadeIn";

export default function DoctorBio() {
  const t = useTranslations("about");

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <p className="text-gold text-lg md:text-xl mb-4 tracking-wide uppercase font-medium">
            {t("bio.greeting")}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-gradient-gold">
            {t("title")}
          </h1>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </FadeIn>

        {/* Bio content: image left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Doctor portrait */}
          <FadeIn direction="left">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
              <Image
                src="/images/about/doctor-portrait.png"
                alt="Dr. Alexander Mitchell"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              {/* Gold border accent */}
              <div className="absolute inset-0 rounded-2xl border border-gold/20" />
              {/* Bottom gold line */}
              <div className="absolute bottom-6 start-6 end-6">
                <div className="h-px bg-gradient-to-r from-gold/50 via-gold to-gold/50" />
              </div>
            </div>
          </FadeIn>

          {/* Text content */}
          <FadeIn direction="right">
            <div className="space-y-6">
              <p className="text-foreground-muted text-lg leading-relaxed">
                {t("bio.description")}
              </p>

              {/* Gold accent divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
                <div className="w-2 h-2 rotate-45 bg-gold" />
                <div className="h-px flex-1 bg-gradient-to-l from-gold/50 to-transparent" />
              </div>

              <p className="text-foreground-muted text-lg leading-relaxed">
                {t("bio.description2")}
              </p>

              {/* Languages */}
              <div className="pt-4">
                <h3 className="text-sm uppercase tracking-wider text-gold font-medium mb-3">
                  {t("languages.title")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(["item1", "item2", "item3", "item4"] as const).map(
                    (key) => (
                      <span
                        key={key}
                        className="px-4 py-1.5 text-sm rounded-full border border-gold/30 text-foreground-muted bg-gold/5"
                      >
                        {t(`languages.${key}`)}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
