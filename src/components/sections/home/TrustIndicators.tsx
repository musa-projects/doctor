"use client";

import { useTranslations } from "next-intl";
import CountUp from "@/components/animation/CountUp";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animation/StaggerContainer";
import { motion } from "motion/react";
import { useTheme } from "@/components/layout/ThemeProvider";
import { Award, Users, Star, HeartPulse } from "lucide-react";

const stats = [
  { key: "experience", value: 15, suffix: "+", icon: Award, ringColor: "#c9a84c", ringColorLight: "#2563eb" },
  { key: "patients", value: 10000, suffix: "+", icon: Users, ringColor: "#d4af37", ringColorLight: "#3b82f6" },
  { key: "rating", value: 4.9, suffix: "", icon: Star, isDecimal: true, ringColor: "#e8c84a", ringColorLight: "#2563eb" },
  { key: "surgeries", value: 5000, suffix: "+", icon: HeartPulse, ringColor: "#c9a84c", ringColorLight: "#1d4ed8" },
];

function ProgressRing({ delay = 0, color, bgRingColor }: { delay?: number; color: string; bgRingColor: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 64 64">
      {/* Background ring */}
      <circle
        cx="32" cy="32" r="28"
        fill="none"
        stroke={bgRingColor}
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

  return (
    <section className="py-24 relative overflow-hidden bg-mesh">
      {/* Decorative elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isLight
            ? "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.04) 0%, transparent 60%)"
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
                    color={isLight ? stat.ringColorLight : stat.ringColor}
                    bgRingColor={isLight ? "rgba(37,99,235,0.1)" : "rgba(201,168,76,0.08)"}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${isLight ? "bg-blue/10 group-hover:bg-blue/20" : "bg-gold/10 group-hover:bg-gold/20"}`}>
                      <stat.icon className={`w-5 h-5 ${isLight ? "text-blue" : "text-gold"}`} />
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
