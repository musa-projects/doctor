"use client";

import { useTheme } from "@/components/layout/ThemeProvider";

export default function AnimatedGrid({ className = "" }: { className?: string }) {
  const { theme } = useTheme();
  const gridColor = theme === "light" ? "rgba(37, 99, 235, 0.06)" : "rgba(201, 168, 76, 0.03)";
  const glowColor = theme === "light" ? "rgba(37, 99, 235, 0.05)" : "rgba(201, 168, 76, 0.04)";

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 30%, transparent 70%)",
          transform: "perspective(500px) rotateX(60deg) scale(2.5)",
          transformOrigin: "center top",
        }}
      />
      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}
