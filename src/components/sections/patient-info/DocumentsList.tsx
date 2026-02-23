"use client";

import { useTranslations } from "next-intl";
import { FileText } from "lucide-react";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animation/StaggerContainer";

const documentKeys = ["item1", "item2", "item3", "item4", "item5"] as const;

export default function DocumentsList() {
  const t = useTranslations("patientInfo");

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            {t("documents.title")}
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentKeys.map((key) => (
            <StaggerItem key={key}>
              <div className="card-luxury p-8 h-full">
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-semibold font-serif mb-2">
                  {t(`documents.items.${key}.name`)}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {t(`documents.items.${key}.description`)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
