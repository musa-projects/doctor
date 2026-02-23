"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import TextReveal from "@/components/animation/TextReveal";
import FadeIn from "@/components/animation/FadeIn";
import GoldSparkles from "@/components/animation/GoldSparkles";
import FloatingShapes from "@/components/animation/FloatingShapes";
import AnimatedGrid from "@/components/animation/AnimatedGrid";
import MagneticButton from "@/components/animation/MagneticButton";
import { useTheme } from "@/components/layout/ThemeProvider";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Calendar, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("home.hero");
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layer 0: Background image */}
      <Image
        src="/images/hero/hero-bg.png"
        alt=""
        fill
        className="object-cover opacity-50"
        sizes="100vw"
        priority
      />

      {/* Layer 1: Animated perspective grid */}
      <AnimatedGrid />

      {/* Layer 2: Gradient overlay */}
      <div className={`absolute inset-0 ${isLight ? "bg-gradient-to-b from-white/20 via-transparent to-white/40" : "bg-gradient-to-b from-background/60 via-background/40 to-background/80"}`} />

      {/* Layer 3: Gold sparkle particles */}
      <GoldSparkles count={35} speed={0.25} className="opacity-60" />

      {/* Layer 4: Floating geometric shapes */}
      <FloatingShapes />

      {/* Layer 5: Ambient glow orbs */}
      <motion.div
        className="absolute top-1/4 end-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 start-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(4,120,87,0.04) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Accent lines */}
      <div className="absolute start-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      <div className="absolute end-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Greeting */}
        <FadeIn delay={0.1}>
          <p className="text-foreground-muted text-base md:text-lg mb-6 tracking-[0.25em] uppercase">
            {t("greeting")}
          </p>
        </FadeIn>

        {/* Main headline with animated gradient */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-8 leading-[1.1]">
          <TextReveal
            text={t("title")}
            className="animated-gradient-text"
            delay={0.3}
          />
        </h1>

        {/* Subtitle with blur-to-clear effect */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <p className="text-foreground-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* CTA Buttons with magnetic effect */}
        <FadeIn delay={1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <MagneticButton strength={0.2}>
              <Link
                href="/booking"
                className="group relative inline-flex items-center gap-2.5 px-8 py-4 text-lg font-semibold rounded-[var(--radius-button)] shadow-lg transition-all duration-500 overflow-hidden bg-gradient-to-r from-gold via-gold-light to-gold text-background shadow-gold/25 hover:shadow-xl hover:shadow-gold/35"
              >
                {/* Shimmer sweep */}
                <span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                    animation: "shimmer-sweep 3s ease-in-out infinite",
                  }}
                  aria-hidden="true"
                />
                <Calendar className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{t("cta")}</span>
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.15}>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 px-8 py-4 text-lg font-medium rounded-[var(--radius-button)] transition-all duration-500 text-gold border border-gold/30 hover:bg-gold/10 hover:border-gold hover:shadow-lg hover:shadow-gold/10"
              >
                {t("ctaSecondary")}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-8 h-12 rounded-full border flex justify-center pt-2 glow-gold border-gold/20">
          <motion.div
            className="w-1 h-2.5 rounded-full bg-gold"
            animate={{ opacity: [1, 0.2, 1], y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <ChevronDown className="w-4 h-4 text-gold/30" />
      </motion.div>

      {/* Bottom fade */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 pointer-events-none ${isLight ? "bg-gradient-to-t from-[#fafafa] to-transparent" : "bg-gradient-to-t from-background to-transparent"}`} />
    </section>
  );
}
