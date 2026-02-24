"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "@/components/layout/ThemeProvider";
import CountUp from "@/components/animation/CountUp";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animation/StaggerContainer";
import { motion } from "motion/react";
import { Award, Users, Star, HeartPulse } from "lucide-react";

const stats = [
  { key: "experience", value: 15, suffix: "+", icon: Award, ringColor: "#c9a84c" },
  { key: "patients", value: 10000, suffix: "+", icon: Users, ringColor: "#d4af37" },
  { key: "rating", value: 4.9, suffix: "", icon: Star, isDecimal: true, ringColor: "#e8c84a" },
  { key: "surgeries", value: 5000, suffix: "+", icon: HeartPulse, ringColor: "#c9a84c" },
];

function ProgressRing({ delay = 0, color, isLight = false }: { delay?: number; color: string; isLight?: boolean }) {
  return (
    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 64 64">
      {/* Background ring */}
      <circle
        cx="32" cy="32" r="28"
        fill="none"
        stroke={isLight ? "rgba(13,115,119,0.10)" : "rgba(201,168,76,0.08)"}
        strokeWidth="1"
      />
      {/* Animated ring */}
      <motion.circle
        cx="32" cy="32" r="28"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="176"
        initial={{ strokeDashoffset: 176, opacity: 0 }}
        whileInView={{ strokeDashoffset: 30, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function TrustIndicators() {
  const t = useTranslations("home.trust");
  const { theme } = useTheme();
  const isLight = theme === "light";

  const lightRingColors = ["#0D7377", "#14919B", "#1A5276", "#0D7377"];

  return (
    <section className="py-24 relative overflow-hidden bg-mesh">
      {/* Decorative elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isLight
            ? "radial-gradient(ellipse at 50% 0%, rgba(13,115,119,0.04) 0%, transparent 60%)"
            : "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.03) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StaggerItem key={stat.key}>
              <div className="card-luxury p-6 md:p-8 text-center group">
                {/* Icon with progress ring */}
                <div className="relative w-16 h-16 mx-auto mb-5">
                  <ProgressRing
                    delay={index * 0.2}
                    color={isLight ? lightRingColors[index] : stat.ringColor}
                    isLight={isLight}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${isLight ? "bg-[#0D7377]/10 group-hover:bg-[#0D7377]/20" : "bg-gold/10 group-hover:bg-gold/20"}`}>
                      <stat.icon className={`w-5 h-5 ${isLight ? "text-[#0D7377]" : "text-gold"}`} />
                    </div>
                  </div>
                </div>

                {/* Number */}
                <div className="text-4xl md:text-5xl font-bold font-serif animated-gradient-text mb-2">
                  {stat.isDecimal ? (
                    <span>4.9</span>
                  ) : (
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  )}
                </div>

                {/* Label */}
                <p className="text-foreground-muted text-sm md:text-base">
                  {t(stat.key)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
