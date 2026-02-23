"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLocaleChange(newLocale: Locale) {
    setIsOpen(false);
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "flex items-center gap-2 rounded-full px-3 py-2",
          "text-sm text-foreground-muted transition-colors duration-200",
          "hover:text-foreground hover:bg-background-card",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
        )}
        aria-label="Switch language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{localeNames[locale]}</span>
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Select language"
          className={cn(
            "absolute end-0 top-full mt-2 min-w-[160px]",
            "rounded-lg border border-border bg-background-elevated",
            "py-1 shadow-xl shadow-black/20",
            "animate-in fade-in slide-in-from-top-2 duration-200"
          )}
        >
          {locales.map((loc) => (
            <button
              key={loc}
              type="button"
              role="option"
              aria-selected={locale === loc}
              onClick={() => handleLocaleChange(loc)}
              className={cn(
                "flex w-full items-center px-4 py-2.5 text-sm transition-colors duration-150",
                locale === loc
                  ? "bg-gold/10 text-gold"
                  : "text-foreground-muted hover:bg-background-card hover:text-foreground"
              )}
            >
              <span className="flex-1 text-start">{localeNames[loc]}</span>
              {locale === loc && (
                <span className="ms-2 text-gold" aria-hidden="true">
                  &#10003;
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
