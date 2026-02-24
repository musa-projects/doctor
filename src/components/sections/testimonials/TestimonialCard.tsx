"use client";

import { useTranslations } from "next-intl";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const t = useTranslations("testimonials");

  const name = t(testimonial.nameKey);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="card-luxury p-10 h-full flex flex-col">
      {/* Quote icon */}
      <Quote className="w-10 h-10 text-gold/30 mb-6" />

      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#D4A017] text-[#D4A017]" />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground-muted leading-relaxed flex-1 mb-8">
        &ldquo;{t(testimonial.contentKey)}&rdquo;
      </p>

      {/* Author */}
      <div className="border-t border-border pt-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
            <span className="text-gold font-semibold">{initials}</span>
          </div>
          <div>
            <p className="font-semibold font-serif">{name}</p>
            <p className="text-foreground-subtle text-sm">
              {t(testimonial.roleKey)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
