"use client";

import { testimonials } from "@/data/testimonials";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animation/StaggerContainer";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
