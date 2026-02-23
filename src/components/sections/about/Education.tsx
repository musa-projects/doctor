"use client";

import { useTranslations } from "next-intl";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animation/StaggerContainer";
import FadeIn from "@/components/animation/FadeIn";
import { GraduationCap } from "lucide-react";

const educationKeys = ["item1", "item2", "item3", "item4"] as const;

export default function Education() {
  const t = useTranslations("about");

  return (
    <section className="py-24 bg-background-elevated relative">
      {/* Decorative side line */}
      <div className="absolute start-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-6">
            <GraduationCap className="w-7 h-7 text-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            {t("education.title")}
          </h2>
        </FadeIn>

        {/* Timeline */}
        <StaggerContainer className="relative max-w-3xl mx-auto">
          {/* Vertical gold connecting line */}
          <div className="absolute start-[1.6rem] md:start-[2.1rem] top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/30 to-transparent" />

          {educationKeys.map((key) => (
            <StaggerItem key={key} className="relative ps-16 md:ps-20 pb-12 last:pb-0">
              {/* Year badge on the timeline */}
              <div className="absolute start-0 top-0 w-[3.2rem] md:w-[4.2rem] h-[3.2rem] md:h-[4.2rem] rounded-full bg-background border-2 border-gold/40 flex items-center justify-center">
                <span className="text-gold text-xs md:text-sm font-bold">
                  {t(`education.${key}.year`)}
                </span>
              </div>

              {/* Content card */}
              <div className="card-luxury p-6">
                <h3 className="text-xl font-semibold font-serif mb-1">
                  {t(`education.${key}.title`)}
                </h3>
                <p className="text-gold text-sm font-medium mb-3">
                  {t(`education.${key}.institution`)}
                </p>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {t(`education.${key}.description`)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
