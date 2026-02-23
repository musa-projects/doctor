"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/animation/FadeIn";

export default function MapEmbed() {
  const t = useTranslations("contact");

  return (
    <FadeIn>
      <div className="bg-background-card border border-border rounded-2xl p-8">
        <h2 className="text-2xl font-bold font-serif mb-6">{t("map.title")}</h2>
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343003!2d-73.98823082416077!3d40.74844097138995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
            className="absolute inset-0"
          />
        </div>
      </div>
    </FadeIn>
  );
}
