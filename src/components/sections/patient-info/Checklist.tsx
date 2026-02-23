"use client";

import { useTranslations } from "next-intl";
import { CheckCircle } from "lucide-react";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animation/StaggerContainer";

const checklistKeys = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
] as const;

export default function Checklist() {
  const t = useTranslations("patientInfo");

  return (
    <section className="py-24 bg-background-elevated">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            {t("checklist.title")}
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {checklistKeys.map((key) => (
            <StaggerItem key={key}>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-background-card border border-border">
                <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <span className="text-foreground-muted leading-relaxed">
                  {t(`checklist.items.${key}`)}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
