"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
}

function getOffset(
  direction: NonNullable<SlideInProps["direction"]>,
  isRtl: boolean,
): { x: number; y: number } {
  switch (direction) {
    case "left": {
      const sign = isRtl ? -1 : 1;
      return { x: -80 * sign, y: 0 };
    }
    case "right": {
      const sign = isRtl ? -1 : 1;
      return { x: 80 * sign, y: 0 };
    }
    case "up":
      return { x: 0, y: 80 };
    case "down":
      return { x: 0, y: -80 };
  }
}

export default function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.6,
  className,
}: SlideInProps) {
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    setIsRtl(document.documentElement.dir === "rtl");
  }, []);

  const offset = getOffset(direction, isRtl);

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
