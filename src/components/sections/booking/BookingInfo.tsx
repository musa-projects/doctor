"use client";

import { useTranslations } from "next-intl";
import { Clock, Phone, Mail, MapPin, AlertTriangle } from "lucide-react";
import FadeIn from "@/components/animation/FadeIn";

export default function BookingInfo() {
  const t = useTranslations("booking");

  return (
    <FadeIn direction="right">
      <div className="space-y-6">
        {/* Clinic Info Card */}
        <div className="bg-background-card border border-border rounded-2xl p-8 space-y-6">
          <h2 className="text-xl font-semibold font-serif text-gold">
            {t("info.title")}
          </h2>

          {/* Office Hours */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-foreground">
              <Clock className="w-5 h-5 text-gold" />
              <h3 className="font-medium">{t("info.hours")}</h3>
            </div>
            <div className="space-y-1.5 ps-7">
              <p className="text-foreground-muted text-sm">
                {t("info.hoursWeekday")}
              </p>
              <p className="text-foreground-muted text-sm">
                {t("info.hoursSaturday")}
              </p>
              <p className="text-foreground-muted text-sm">
                {t("info.hoursSunday")}
              </p>
            </div>
          </div>

          {/* Gold divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-gold" />
            </div>
            <div>
              <a
                href={`tel:${t("info.phone").replace(/\s/g, "")}`}
                className="text-foreground hover:text-gold transition-colors"
              >
                {t("info.phone")}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-gold" />
            </div>
            <div>
              <a
                href={`mailto:${t("info.email")}`}
                className="text-foreground hover:text-gold transition-colors"
              >
                {t("info.email")}
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <p className="text-foreground-muted text-sm whitespace-pre-line">
              {t("info.address")}
            </p>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
            <p className="text-red-400/90 text-sm leading-relaxed">
              {t("info.emergency")}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
