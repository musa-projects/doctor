"use client";

import { motion } from "motion/react";

interface SectionDividerProps {
  variant?: "wave" | "angle" | "curve" | "dots";
  className?: string;
  flip?: boolean;
}

const paths: Record<string, string> = {
  wave: "M0,50 C200,20 400,80 600,50 C800,20 1000,80 1200,50",
  angle: "M0,80 L600,20 L1200,80",
  curve: "M0,80 Q600,0 1200,80",
  dots: "",
};

export default function SectionDivider({ variant = "wave", className = "", flip = false }: SectionDividerProps) {
  if (variant === "dots") {
    return (
      <div className={`relative py-8 flex justify-center ${className}`}>
        <motion.div
          className="flex gap-3 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-1 h-1 rounded-full bg-gold/30" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-gold/50 glow-gold" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="w-1 h-1 rounded-full bg-gold/30" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden ${flip ? "rotate-180" : ""} ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 100"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
      >
        <motion.path
          d={paths[variant]}
          stroke="url(#gold-gradient)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(201, 168, 76, 0)" />
            <stop offset="30%" stopColor="rgba(201, 168, 76, 0.4)" />
            <stop offset="50%" stopColor="rgba(212, 175, 55, 0.6)" />
            <stop offset="70%" stopColor="rgba(201, 168, 76, 0.4)" />
            <stop offset="100%" stopColor="rgba(201, 168, 76, 0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
