"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const shapes = [
  { type: "circle", x: "10%", y: "20%", size: 60, speed: 0.2, opacity: 0.06, rotation: 0 },
  { type: "hexagon", x: "85%", y: "15%", size: 80, speed: 0.3, opacity: 0.05, rotation: 30 },
  { type: "line", x: "70%", y: "60%", size: 100, speed: 0.15, opacity: 0.08, rotation: 45 },
  { type: "diamond", x: "15%", y: "70%", size: 40, speed: 0.25, opacity: 0.07, rotation: 0 },
  { type: "circle", x: "90%", y: "75%", size: 30, speed: 0.35, opacity: 0.05, rotation: 0 },
  { type: "hexagon", x: "50%", y: "85%", size: 50, speed: 0.1, opacity: 0.04, rotation: 60 },
  { type: "line", x: "30%", y: "40%", size: 70, speed: 0.2, opacity: 0.06, rotation: -30 },
  { type: "diamond", x: "60%", y: "30%", size: 25, speed: 0.3, opacity: 0.08, rotation: 45 },
];

function ShapeSVG({ type, size }: { type: string; size: number }) {
  const halfSize = size / 2;

  switch (type) {
    case "circle":
      return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle cx={halfSize} cy={halfSize} r={halfSize - 2} fill="none" stroke="rgba(201,168,76,1)" strokeWidth="1" />
        </svg>
      );
    case "hexagon": {
      const r = halfSize - 2;
      const points = Array.from({ length: 6 }, (_, i) => {
        const angle = (Math.PI / 3) * i - Math.PI / 2;
        return `${halfSize + r * Math.cos(angle)},${halfSize + r * Math.sin(angle)}`;
      }).join(" ");
      return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <polygon points={points} fill="none" stroke="rgba(201,168,76,1)" strokeWidth="1" />
        </svg>
      );
    }
    case "line":
      return (
        <svg width={size} height={2} viewBox={`0 0 ${size} 2`}>
          <line x1="0" y1="1" x2={size} y2="1" stroke="rgba(201,168,76,1)" strokeWidth="1" />
        </svg>
      );
    case "diamond":
      return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <polygon
            points={`${halfSize},2 ${size - 2},${halfSize} ${halfSize},${size - 2} 2,${halfSize}`}
            fill="none"
            stroke="rgba(201,168,76,1)"
            strokeWidth="1"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function FloatingShapes({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {shapes.map((shape, i) => (
        <FloatingShape key={i} shape={shape} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}

function FloatingShape({
  shape,
  scrollYProgress,
}: {
  shape: (typeof shapes)[number];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * shape.speed]);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: shape.x,
        top: shape.y,
        opacity: shape.opacity,
        rotate: shape.rotation,
        y,
      }}
    >
      <ShapeSVG type={shape.type} size={shape.size} />
    </motion.div>
  );
}
