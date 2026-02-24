"use client";

import { useTheme } from "@/components/layout/ThemeProvider";

export default function AnimatedGrid({ className = "" }: { className?: string }) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${isLight ? "rgba(13, 115, 119, 0.04)" : "rgba(201, 168, 76, 0.03)"} 1px, transparent 1px),
            linear-gradient(90deg, ${isLight ? "rgba(13, 115, 119, 0.04)" : "rgba(201, 168, 76, 0.03)"} 1px, transparent 1px)
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
          background: `radial-gradient(circle, ${isLight ? "rgba(13, 115, 119, 0.05)" : "rgba(201, 168, 76, 0.04)"} 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}
