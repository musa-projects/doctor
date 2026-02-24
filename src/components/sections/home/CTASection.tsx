"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useTheme } from "@/components/layout/ThemeProvider";
import FadeIn from "@/components/animation/FadeIn";
import MagneticButton from "@/components/animation/MagneticButton";
import GoldSparkles from "@/components/animation/GoldSparkles";
import { Link } from "@/i18n/navigation";
import { Calendar, ArrowRight } from "lucide-react";

export default function CTASection() {
  const t = useTranslations("home.cta");
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/cta-bg.png"
        alt=""
        fill
        className={`object-cover ${isLight ? "opacity-50" : "opacity-30"}`}
        sizes="100vw"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${isLight ? "bg-gradient-to-b from-white/5 via-transparent to-white/5" : "bg-gradient-to-b from-background/70 via-background/50 to-background/80"}`} />

      {/* Sparkles */}
      <GoldSparkles count={20} speed={0.15} className="opacity-40" />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 start-1/6 w-2 h-2 rounded-full float-animation bg-gold/20" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-1/3 end-1/5 w-1.5 h-1.5 rounded-full float-animation bg-gold/15" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 end-1/3 w-1 h-1 rounded-full float-animation bg-gold/25" style={{ animationDelay: "4s" }} />

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
              className="group relative inline-flex items-center gap-2.5 px-10 py-5 text-lg font-semibold rounded-[var(--radius-button)] shadow-xl transition-all duration-500 overflow-hidden glow-gold bg-gradient-to-r from-gold via-gold-light to-gold text-background shadow-gold/25 hover:shadow-2xl hover:shadow-gold/35"
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
