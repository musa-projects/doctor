import HeroSection from "@/components/sections/home/HeroSection";
import TrustIndicators from "@/components/sections/home/TrustIndicators";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import TestimonialsPreview from "@/components/sections/home/TestimonialsPreview";
import CTASection from "@/components/sections/home/CTASection";
import SectionDivider from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionDivider variant="wave" />
      <TrustIndicators />
      <SectionDivider variant="dots" />
      <ServicesOverview />
      <SectionDivider variant="curve" />
      <TestimonialsPreview />
      <SectionDivider variant="dots" />
      <CTASection />
    </>
  );
}
