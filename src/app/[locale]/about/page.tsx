import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageWrapper from "@/components/animation/PageWrapper";
import DoctorBio from "@/components/sections/about/DoctorBio";
import Education from "@/components/sections/about/Education";
import Certifications from "@/components/sections/about/Certifications";
import Philosophy from "@/components/sections/about/Philosophy";
import PersonalMessage from "@/components/sections/about/PersonalMessage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function AboutPage() {
  return (
    <PageWrapper>
      <DoctorBio />
      <Education />
      <Certifications />
      <Philosophy />
      <PersonalMessage />
    </PageWrapper>
  );
}
