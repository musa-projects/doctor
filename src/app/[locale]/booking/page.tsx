import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageWrapper from "@/components/animation/PageWrapper";
import ContactForm from "@/components/sections/booking/ContactForm";
import BookingInfo from "@/components/sections/booking/BookingInfo";
import BookingWhatsApp from "@/components/sections/booking/BookingWhatsApp";
import BookingHeader from "@/components/sections/booking/BookingHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "booking" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function BookingPage() {
  return (
    <PageWrapper>
      <BookingHeader />

      {/* Two-column layout */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form - takes 2 cols */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-1">
              <BookingInfo />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp section */}
      <BookingWhatsApp />
    </PageWrapper>
  );
}
