"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animation/StaggerContainer";

const planKeys = [
  "plan1",
  "plan2",
  "plan3",
  "plan4",
  "plan5",
  "plan6",
] as const;

export default function InsuranceInfo() {
  const t = useTranslations("patientInfo");

  return (
    <section className="py-24 bg-background-elevated">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            {t("insurance.title")}
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            {t("insurance.description")}
          </p>
        </FadeIn>

        {/* Accepted plans */}
        <FadeIn className="mb-16">
          <h3 className="text-xl font-semibold font-serif mb-6 text-center">
            {t("insurance.accepted")}
          </h3>
          <StaggerContainer className="flex flex-wrap justify-center gap-3">
            {planKeys.map((key) => (
              <StaggerItem key={key}>
                <span className="inline-block px-5 py-2.5 rounded-full bg-gold/10 text-gold font-medium text-sm border border-gold/20">
                  {t(`insurance.plans.${key}`)}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>

        {/* Self-pay */}
        <FadeIn>
          <div className="card-luxury p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold font-serif mb-3">
              {t("insurance.selfPay")}
            </h3>
            <p className="text-foreground-muted leading-relaxed">
              {t("insurance.selfPayDesc")}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
