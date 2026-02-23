"use client";

import { useEffect } from "react";

interface HtmlAttributesProps {
  lang: string;
  dir: "ltr" | "rtl";
  className: string;
}

export default function HtmlAttributes({ lang, dir, className }: HtmlAttributesProps) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    // Merge font variable classes
    className.split(" ").forEach((cls) => {
      if (cls) document.documentElement.classList.add(cls);
    });

    return () => {
      className.split(" ").forEach((cls) => {
        if (cls) document.documentElement.classList.remove(cls);
      });
    };
  }, [lang, dir, className]);

  return null;
}
