"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import PageWrapper from "@/components/animation/PageWrapper";
import FadeIn from "@/components/animation/FadeIn";
import type { Service } from "@/data/services";
import {
  Bone,
  Activity,
  Spline,
  Microscope,
  Shield,
  HeartPulse,
  Stethoscope,
  ClipboardList,
  Clock,
  CalendarCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bone,
  Activity,
  Spline,
  Microscope,
  Shield,
  HeartPulse,
};

interface ServiceDetailContentProps {
  service: Service;
}

export default function ServiceDetailContent({
  service,
}: ServiceDetailContentProps) {
  const t = useTranslations("services");
  const tCta = useTranslations("cta");
  const Icon = iconMap[service.icon] || Bone;

  const detailKey = `${service.titleKey}Detail` as Parameters<typeof t>[0];
  const conditionsKey = `${service.titleKey}Conditions` as Parameters<typeof t>[0];
  const expectationsKey = `${service.titleKey}Expectations` as Parameters<typeof t>[0];
  const recoveryKey = `${service.titleKey}Recovery` as Parameters<typeof t>[0];

  const conditionsText = t(conditionsKey);
  const conditionsList = conditionsText.split(";").map((c) => c.trim()).filter(Boolean);

  return (
    <PageWrapper>
      {/* Hero image banner */}
      <div className="relative h-[35vh] md:h-[45vh] overflow-hidden">
        <Image
          src={service.image}
          alt={t(service.titleKey)}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      </div>

      {/* Hero header */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center">
            <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <Icon className="w-8 h-8 text-gold" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
              {t(service.titleKey)}
            </h1>
            <p className="text-foreground-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {t(service.descriptionKey)}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overview section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <Stethoscope className="w-6 h-6 text-gold" />
              <h2 className="text-2xl md:text-3xl font-bold font-serif">
                {t("detailSections.overview")}
              </h2>
            </div>
            <p className="text-foreground-muted text-base md:text-lg leading-relaxed">
              {t(detailKey)}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Conditions section */}
      <section className="py-20 bg-background-elevated">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <ClipboardList className="w-6 h-6 text-gold" />
              <h2 className="text-2xl md:text-3xl font-bold font-serif">
                {t("detailSections.conditions")}
              </h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {conditionsList.map((condition, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-foreground-muted"
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gold shrink-0" />
                  <span className="text-base leading-relaxed">{condition}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* What to Expect section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-gold" />
              <h2 className="text-2xl md:text-3xl font-bold font-serif">
                {t("detailSections.expectations")}
              </h2>
            </div>
            <p className="text-foreground-muted text-base md:text-lg leading-relaxed">
              {t(expectationsKey)}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Recovery section */}
      <section className="py-20 bg-background-elevated">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <CalendarCheck className="w-6 h-6 text-gold" />
              <h2 className="text-2xl md:text-3xl font-bold font-serif">
                {t("detailSections.recovery")}
              </h2>
            </div>
            <p className="text-foreground-muted text-base md:text-lg leading-relaxed">
              {t(recoveryKey)}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold font-serif mb-6">
              {t("detailSections.bookCta")}
            </h2>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-gold text-background px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors duration-300"
            >
              {tCta("bookNow")}
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
