"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import FadeIn from "@/components/animation/FadeIn";

const quickLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "booking", href: "/booking" },
  { key: "testimonials", href: "/testimonials" },
  { key: "contact", href: "/contact" },
] as const;

const legalLinks = [
  { key: "privacy", href: "/privacy" },
  { key: "terms", href: "/terms" },
  { key: "disclaimer", href: "/disclaimer" },
  { key: "accessibility", href: "/accessibility" },
] as const;

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-background-elevated">
      {/* Animated top border */}
      <div className="relative h-px w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.5) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "gradient-shift 4s ease infinite",
          }}
        />
      </div>

      {/* Subtle mesh gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.02) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* Main footer content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Doctor info */}
          <FadeIn direction="up" className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block font-serif text-xl tracking-wide"
            >
              <span className="text-gradient-gold">Dr.</span>{" "}
              <span className="text-foreground">Reem Didaan</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
              {t("footer.description")}
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {["Facebook", "Instagram", "LinkedIn", "Twitter"].map(
                (platform) => (
                  <motion.a
                    key={platform}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full",
                      "glass text-foreground-subtle text-xs",
                      "transition-all duration-300",
                      "hover:glass-gold hover:text-gold hover:shadow-lg hover:shadow-gold/10"
                    )}
                    aria-label={platform}
                  >
                    {platform[0]}
                  </motion.a>
                )
              )}
            </div>
          </FadeIn>

          {/* Column 2: Quick Links */}
          <FadeIn direction="up" delay={0.1}>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              <span className="w-6 h-px bg-gold/40" aria-hidden="true" />
              {t("footer.quickLinks")}
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-foreground-muted transition-all duration-200",
                      "hover:text-gold hover:ps-2"
                    )}
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Column 3: Legal */}
          <FadeIn direction="up" delay={0.2}>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              <span className="w-6 h-px bg-gold/40" aria-hidden="true" />
              {t("footer.legal")}
            </h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-foreground-muted transition-all duration-200",
                      "hover:text-gold hover:ps-2"
                    )}
                  >
                    {t(`footer.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Column 4: Contact Info */}
          <FadeIn direction="up" delay={0.3}>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              <span className="w-6 h-px bg-gold/40" aria-hidden="true" />
              {t("footer.contactInfo")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground-muted">
              <li>
                <span className="block text-foreground-subtle text-xs uppercase tracking-wider mb-1">Address</span>
                Rom Medical Center
                <br />
                18 Alonim St., Ramat Yishai
              </li>
              <li>
                <span className="block text-foreground-subtle text-xs uppercase tracking-wider mb-1">Phone</span>
                <a
                  href="tel:+1234567890"
                  className="transition-colors duration-200 hover:text-gold"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <span className="block text-foreground-subtle text-xs uppercase tracking-wider mb-1">Email</span>
                <a
                  href="mailto:contact@drreem.com"
                  className="transition-colors duration-200 hover:text-gold"
                >
                  contact@drreem.com
                </a>
              </li>
            </ul>
          </FadeIn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-6">
          <p className="text-sm text-foreground-subtle">
            &copy; {currentYear} Dr. Reem Salim Didaan. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
