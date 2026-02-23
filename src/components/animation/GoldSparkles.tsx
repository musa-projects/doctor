"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/layout/ThemeProvider";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacitySpeed: number;
  color: string;
}

interface GoldSparklesProps {
  count?: number;
  speed?: number;
  className?: string;
}

const GOLD_COLORS = [
  "rgba(201, 168, 76,",
  "rgba(212, 175, 55,",
  "rgba(232, 200, 74,",
  "rgba(240, 208, 96,",
];

const BLUE_COLORS = [
  "rgba(37, 99, 235,",
  "rgba(59, 130, 246,",
  "rgba(96, 165, 250,",
  "rgba(29, 78, 216,",
];

export default function GoldSparkles({ count = 40, speed = 0.3, className = "" }: GoldSparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const { theme } = useTheme();
  const colors = theme === "light" ? BLUE_COLORS : GOLD_COLORS;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * speed,
      speedY: -(Math.random() * speed + 0.1),
      opacity: Math.random(),
      opacitySpeed: Math.random() * 0.02 + 0.005,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      particlesRef.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.opacitySpeed;

        if (p.opacity >= 1 || p.opacity <= 0) {
          p.opacitySpeed *= -1;
        }

        // Wrap around
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${Math.max(0, Math.min(1, p.opacity))})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [count, speed, colors]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
