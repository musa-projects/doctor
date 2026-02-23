import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageWrapper from "@/components/animation/PageWrapper";
import ContactPageHeader from "@/components/sections/contact/ContactPageHeader";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import MapEmbed from "@/components/sections/contact/MapEmbed";
import OfficeHours from "@/components/sections/contact/OfficeHours";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function ContactPage() {
  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="py-24 bg-background-elevated">
        <div className="max-w-6xl mx-auto px-6">
          <ContactPageHeader />
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <ContactInfo />
        </div>
      </section>

      {/* Map + Office Hours */}
      <section className="py-16 bg-background-elevated">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <MapEmbed />
            </div>
            <div className="lg:col-span-1">
              <OfficeHours />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
