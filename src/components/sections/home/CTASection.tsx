"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/animation/FadeIn";
import MagneticButton from "@/components/animation/MagneticButton";
import GoldSparkles from "@/components/animation/GoldSparkles";
import { Link } from "@/i18n/navigation";
import { Calendar, ArrowRight } from "lucide-react";

export default function CTASection() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 20% 80%, rgba(4,120,87,0.03) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.03) 0%, transparent 40%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Sparkles */}
      <GoldSparkles count={20} speed={0.15} className="opacity-40" />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 start-1/6 w-2 h-2 rounded-full bg-gold/20 float-animation" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-1/3 end-1/5 w-1.5 h-1.5 rounded-full bg-gold/15 float-animation" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 end-1/3 w-1 h-1 rounded-full bg-gold/25 float-animation" style={{ animationDelay: "4s" }} />

      {/* Border accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-glow-gold">
            {t("title")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-foreground-muted text-lg md:text-xl max-w-2xl mx-auto mb-12">
            {t("subtitle")}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <MagneticButton strength={0.15}>
            <Link
              href="/booking"
              className="group relative inline-flex items-center gap-2.5 px-10 py-5 text-lg font-semibold bg-gradient-to-r from-gold via-gold-light to-gold text-background rounded-[var(--radius-button)] shadow-xl shadow-gold/25 hover:shadow-2xl hover:shadow-gold/35 transition-all duration-500 overflow-hidden glow-gold"
            >
              {/* Shimmer */}
              <span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                  animation: "shimmer-sweep 3s ease-in-out infinite",
                }}
                aria-hidden="true"
              />
              <Calendar className="w-5 h-5 relative z-10" />
              <span className="relative z-10">{t("button")}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  );
}
