"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import LocaleSwitcher from "./LocaleSwitcher";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "booking", href: "/booking" },
  { key: "testimonials", href: "/testimonials" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
  { key: "blog", href: "/blog" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 start-0 end-0 z-50 h-20 transition-all duration-700",
          isScrolled
            ? "bg-background/60 backdrop-blur-2xl border-b border-border shadow-lg shadow-black/10"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-baseline gap-1 font-serif text-xl tracking-wide"
          >
            <span className={cn(
              "transition-all duration-500",
              isScrolled ? "text-glow-gold text-gold" : "text-gold"
            )}>
              Dr.
            </span>
            <span className="text-foreground">Reem</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm transition-colors duration-300 rounded-md",
                    isActive
                      ? "text-gold"
                      : "text-foreground-muted hover:text-foreground"
                  )}
                >
                  {t(item.key)}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-gradient-to-r from-gold/0 via-gold to-gold/0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <LocaleSwitcher />
            </div>

            <ThemeToggle />

            <motion.button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "lg:hidden rounded-full p-2.5 transition-all duration-300",
                "text-foreground-muted hover:text-foreground",
                "glass hover:glass-gold",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
              )}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        {/* Bottom glow line when scrolled */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-px transition-opacity duration-700",
            isScrolled ? "opacity-100" : "opacity-0"
          )}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)",
          }}
        />
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
