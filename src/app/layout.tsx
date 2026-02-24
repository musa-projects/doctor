import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dr. Reem Salim Didaan | Orthopedics & Pediatric Orthopedics",
    template: "%s | Dr. Reem Salim Didaan",
  },
  description:
    "Specialist in orthopedics and pediatric orthopedics. Director of Pediatric Orthopedic Services at Zefat Hospital.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
