"use client";

import { useTranslations } from "next-intl";
import FadeIn from "@/components/animation/FadeIn";
import { motion } from "motion/react";
import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

export default function TestimonialsPreview() {
  const tHome = useTranslations("home.testimonials");
  const tTestimonials = useTranslations("testimonials");

  return (
    <section className="py-24 relative overflow-hidden bg-mesh">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase mb-3 text-gold">
            {tHome("subtitle")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            {tHome("title")}
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-6" />
        </FadeIn>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeIn
              key={testimonial.id}
              delay={index * 0.15}
              direction="up"
            >
              <div className="card-luxury p-8 h-full flex flex-col group">
                {/* Quote icon — large decorative */}
                <div className="relative mb-4">
                  <Quote className="w-10 h-10 transition-all duration-500 group-hover:scale-110 text-gold/20 group-hover:text-gold/30" />
                  <div className="absolute top-0 left-0 w-10 h-10 blur-xl transition-all duration-500 bg-gold/5 group-hover:bg-gold/10" />
                </div>

                {/* Rating with sparkle effect */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + i * 0.08 + index * 0.15,
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <Star className="w-4 h-4 fill-gold text-gold" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground-muted text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{tTestimonials(testimonial.contentKey)}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-border pt-5">
                  <div className="flex items-center gap-3">
                    {/* Avatar with animated ring */}
                    <div className="relative">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center relative z-10 bg-gold/10">
                        <span className="font-semibold text-sm text-gold">
                          {tTestimonials(testimonial.nameKey)
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </span>
                      </div>
                      {/* Rotating border */}
                      <div
                        className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            "conic-gradient(from var(--border-angle, 0deg), transparent 60%, rgba(201,168,76,0.4) 80%, transparent 100%)",
                          animation: "border-rotate 3s linear infinite",
                        }}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm">
                        {tTestimonials(testimonial.nameKey)}
                      </p>
                      <p className="text-foreground-subtle text-xs">
                        {tTestimonials(testimonial.roleKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
