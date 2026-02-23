"use client";

import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import { motion } from "motion/react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={cn(
        "relative inline-flex items-center justify-center font-medium rounded-[var(--radius-button)] overflow-hidden",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
        "transition-all duration-300",
        // Variants
        variant === "primary" && [
          "bg-gradient-to-r from-gold via-gold-light to-gold text-background font-semibold",
          "shadow-lg shadow-gold/25",
          "hover:shadow-xl hover:shadow-gold/30",
          "shimmer",
        ],
        variant === "secondary" && [
          "bg-background-card text-foreground border border-border",
          "hover:border-gold/30 hover:bg-background-card-hover",
        ],
        variant === "outline" && [
          "bg-transparent text-gold border border-gold/30",
          "hover:bg-gold/10 hover:border-gold hover:shadow-lg hover:shadow-gold/10",
        ],
        variant === "ghost" && [
          "bg-transparent text-foreground-muted",
          "hover:text-foreground hover:bg-background-card",
        ],
        // Sizes
        size === "sm" && "px-4 py-2 text-sm gap-1.5",
        size === "md" && "px-6 py-3 text-base gap-2",
        size === "lg" && "px-8 py-4 text-lg gap-2.5",
        className
      )}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {/* Shimmer overlay for primary */}
      {variant === "primary" && (
        <span
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          aria-hidden="true"
        >
          <span
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
              animation: "shimmer-sweep 2.5s ease-in-out infinite",
            }}
          />
        </span>
      )}
      <span className="relative z-10 flex items-center gap-inherit">{children}</span>
    </motion.button>
  );
}
