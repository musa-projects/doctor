import { Playfair_Display, Inter, Noto_Sans_Arabic, Noto_Sans_Hebrew } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-sans-arabic",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  variable: "--font-noto-sans-hebrew",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const fontVariables = [
  playfair.variable,
  inter.variable,
  notoSansArabic.variable,
  notoSansHebrew.variable,
].join(" ");
