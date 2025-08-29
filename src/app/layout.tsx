import "./globals.css";
import type { Metadata } from "next";
import CookieBanner from "@/components/ui/CookieBanner";
import AnalyticsProvider from "@/components/ui/AnalyticsProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Fraunces, Montserrat } from "next/font/google";

// CI-Fonts (display swap für bessere UX). Variablen optional für Tailwind-Mapping.
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "findbar – KI-optimierte Blog-Artikel",
  description: "Skaliere Dein Unternehmen mit KI-optimierten Blog-Artikeln.",
  icons: {
    icon: "/icon.png", // liegt in /public
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png", // optional – falls vorhanden, hier ersetzen
  },
  themeColor: "#F5EDE6", // CI Sand
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${montserrat.variable}`}>
      <body
        className={`${montserrat.className} bg-[var(--sand,#F5EDE6)] text-[var(--graphite,#243236)] antialiased min-h-screen`}
      >
        {/* Layout-Frame */}
        <div className="flex min-h-screen flex-col">
          <Header />

          {/* Analytics wird nur nach Consent geladen (vom Provider/Cookie-Event gesteuert) */}
          <AnalyticsProvider />

          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        <CookieBanner />
      </body>
    </html>
  );
}
