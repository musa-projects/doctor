"use client";

import { useTranslations } from "next-intl";
import { Clock, Car, TrainFront } from "lucide-react";
import FadeIn from "@/components/animation/FadeIn";

export default function OfficeHours() {
  const t = useTranslations("contact");

  const schedule = [
    { day: t("hours.weekday"), time: t("hours.weekdayTime"), active: true },
    { day: t("hours.saturday"), time: t("hours.saturdayTime"), active: false },
    { day: t("hours.sunday"), time: t("hours.sundayTime"), closed: true, active: false },
  ];

  return (
    <div className="space-y-6">
      {/* Office Hours */}
      <FadeIn>
        <div className="bg-background-card border border-border rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-gold" />
            </div>
            <h2 className="text-2xl font-bold font-serif">{t("hours.title")}</h2>
          </div>

          <div className="space-y-0">
            {schedule.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between py-4 border-b border-border last:border-b-0"
              >
                <span
                  className={
                    item.active
                      ? "font-medium text-gold"
                      : "font-medium text-foreground"
                  }
                >
                  {item.day}
                </span>
                <span
                  className={
                    item.closed
                      ? "text-foreground-subtle"
                      : "text-foreground-muted"
                  }
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Directions */}
      <FadeIn delay={0.1}>
        <div className="bg-background-card border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold font-serif mb-6">
            {t("directions.title")}
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <Car className="w-5 h-5 text-gold" />
              </div>
              <p className="text-foreground-muted text-sm leading-relaxed pt-2">
                {t("directions.parking")}
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <TrainFront className="w-5 h-5 text-gold" />
              </div>
              <p className="text-foreground-muted text-sm leading-relaxed pt-2">
                {t("directions.transit")}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
