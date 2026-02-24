"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useTheme } from "@/components/layout/ThemeProvider";
import FadeIn from "@/components/animation/FadeIn";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animation/StaggerContainer";
import { services } from "@/data/services";
import {
  Bone,
  Activity,
  Spline,
  Microscope,
  Shield,
  HeartPulse,
  ArrowRight,
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

export default function ServicesOverview() {
  const tHome = useTranslations("home.services");
  const tServices = useTranslations("services");
  const tCta = useTranslations("cta");
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isLight
            ? "radial-gradient(ellipse at 80% 50%, rgba(13,115,119,0.03) 0%, transparent 50%)"
            : "radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.02) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <p className={`text-sm tracking-[0.2em] uppercase mb-3 ${isLight ? "text-[#0D7377]" : "text-gold"}`}>
            {tHome("subtitle")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            {tHome("title")}
          </h2>
          <div className={`w-16 h-px bg-gradient-to-r from-transparent ${isLight ? "via-[#0D7377]/50" : "via-gold/50"} to-transparent mx-auto mt-6`} />
        </FadeIn>

        {/* Service cards grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Bone;
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="card-luxury block group h-full overflow-hidden"
                >
                  {/* Service image */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={tServices(service.titleKey)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${isLight ? "from-white/95 via-white/40 to-transparent" : "from-background/90 via-background/30 to-transparent"}`} />
                    {/* Icon overlay */}
                    <div className="absolute bottom-4 start-6">
                      <div className={`w-10 h-10 rounded-lg backdrop-blur-sm flex items-center justify-center border ${isLight ? "bg-[#0D7377]/15 border-[#0D7377]/20" : "bg-gold/20 border-gold/20"}`}>
                        <Icon className={`w-5 h-5 ${isLight ? "text-[#0D7377]" : "text-gold"}`} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-4">

                  {/* Title */}
                  <h3 className={`text-xl font-semibold font-serif mb-3 transition-colors duration-300 ${isLight ? "group-hover:text-[#0D7377]" : "group-hover:text-gold"}`}>
                    {tServices(service.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground-muted text-sm leading-relaxed mb-5">
                    {tServices(service.descriptionKey)}
                  </p>

                  {/* CTA */}
                  <span className={`inline-flex items-center gap-1.5 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ${isLight ? "text-[#0D7377]" : "text-gold"}`}>
                    {tCta("learnMore")}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
