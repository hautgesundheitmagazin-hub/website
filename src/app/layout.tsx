// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import CookieBanner from "@/components/ui/CookieBanner";
import AnalyticsProvider from "@/components/ui/AnalyticsProvider";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

import { Kirang_Haerang, Montserrat } from "next/font/google";

// Highlight-Font + Standardschrift (Montserrat)
const highlight = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["600"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gesunde Haut leben - Dein Ratgeber",
  description:
    "Entdecke fundiertes Wissen zu Neurodermitis, Hautgesundheit und all den Themen, die damit zusammenhängen.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${highlight.variable} ${montserrat.variable}`}>
      <body
        className={`${montserrat.className} bg-[var(--sand,#F5EDE6)] text-[var(--graphite,#243236)] antialiased min-h-screen`}
      >
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
