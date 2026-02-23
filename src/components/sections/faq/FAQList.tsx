"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/animation/FadeIn";
import Accordion from "@/components/ui/Accordion";

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"] as const;

export default function FAQList() {
  const t = useTranslations("faq");

  const items = faqKeys.map((key) => ({
    question: t(`items.${key}.question`),
    answer: t(`items.${key}.answer`),
  }));

  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <Accordion items={items} />
        </FadeIn>
      </div>
    </section>
  );
}
