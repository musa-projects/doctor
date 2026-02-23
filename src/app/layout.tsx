import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dr. Alexander Mitchell | Orthopedic Surgeon",
    template: "%s | Dr. Alexander Mitchell",
  },
  description:
    "Board-certified orthopedic surgeon specializing in joint replacement, sports medicine, and minimally invasive procedures.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
