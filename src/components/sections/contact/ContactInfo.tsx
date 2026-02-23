"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";
import FadeIn from "@/components/animation/FadeIn";

export default function ContactInfo() {
  const t = useTranslations("contact");

  const cards = [
    {
      icon: MapPin,
      title: t("address.title"),
      lines: [t("address.street"), t("address.city"), t("address.country")],
    },
    {
      icon: Phone,
      title: t("phone.title"),
      lines: [t("phone.main"), t("phone.fax")],
      links: [
        { href: `tel:${t("phone.main").replace(/\s/g, "")}`, label: t("phone.main") },
        null,
      ],
    },
    {
      icon: Mail,
      title: t("email.title"),
      lines: [t("email.general"), t("email.appointments")],
      links: [
        { href: `mailto:${t("email.general")}`, label: t("email.general") },
        {
          href: `mailto:${t("email.appointments")}`,
          label: t("email.appointments"),
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <FadeIn key={card.title} delay={index * 0.1}>
          <div className="bg-background-card border border-border rounded-2xl p-8 h-full hover:border-gold/30 transition-colors duration-300">
            <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
              <card.icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-lg font-semibold font-serif mb-4">
              {card.title}
            </h3>
            <div className="space-y-2">
              {card.lines.map((line, i) => {
                const link = card.links?.[i];
                if (link) {
                  return (
                    <a
                      key={i}
                      href={link.href}
                      className="block text-foreground-muted text-sm hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  );
                }
                return (
                  <p key={i} className="text-foreground-muted text-sm">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
