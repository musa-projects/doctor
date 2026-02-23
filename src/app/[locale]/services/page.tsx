"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import PageWrapper from "@/components/animation/PageWrapper";
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

export default function ServicesPage() {
  const tServices = useTranslations("services");
  const tCta = useTranslations("cta");

  return (
    <PageWrapper>
      {/* Page header */}
      <section className="py-24 bg-background-elevated">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
              {tServices("title")}
            </h1>
            <p className="text-foreground-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {tServices("pageSubtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
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
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={tServices(service.titleKey)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                      <div className="absolute bottom-4 start-6">
                        <div className="w-12 h-12 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/20">
                          <Icon className="w-6 h-6 text-gold" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-xl font-semibold font-serif mb-3 group-hover:text-gold transition-colors duration-300">
                        {tServices(service.titleKey)}
                      </h2>
                      <p className="text-foreground-muted text-sm leading-relaxed mb-5">
                        {tServices(service.descriptionKey)}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
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
    </PageWrapper>
  );
}
