"use client";

import { useTranslations } from "next-intl";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animation/StaggerContainer";
import FadeIn from "@/components/animation/FadeIn";
import { BadgeCheck, Award } from "lucide-react";

const certificationKeys = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
] as const;

export default function Certifications() {
  const t = useTranslations("about");

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-6">
            <Award className="w-7 h-7 text-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            {t("certifications.title")}
          </h2>
        </FadeIn>

        {/* Certification cards grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificationKeys.map((key) => (
            <StaggerItem key={key}>
              <div className="card-luxury p-6 flex items-start gap-4 h-full">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-gold" />
                </div>
                <p className="text-foreground-muted text-sm leading-relaxed font-medium pt-2">
                  {t(`certifications.${key}`)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
