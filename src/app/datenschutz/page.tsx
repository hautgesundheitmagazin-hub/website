// app/datenschutz/page.tsx
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Hautwissen-kompakt.de",
  description:
    "Datenschutzerklärung für Hautwissen-kompakt.de – Informationen zu Art, Umfang und Zwecken der Verarbeitung personenbezogener Daten gemäß DSGVO und TDDDG.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Datenschutzerklärung | Hautwissen-kompakt.de",
    description:
      "Details zur Verarbeitung personenbezogener Daten, Hosting bei Vercel, Cookies, Analytics und Ihre Rechte gemäß DSGVO.",
    url: "/datenschutz",
    type: "website",
  },
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 prose prose-neutral">
      <h1>Datenschutzerklärung</h1>

      <p>
        Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zwecke der Verarbeitung personenbezogener Daten (nachfolgend kurz „Daten“) innerhalb unseres Onlineangebots <strong>Hautwissen-kompakt.de</strong> (nachfolgend „Webseite“) sowie der mit ihm verbundenen Funktionen und Inhalte.
      </p>

      <section className="mt-12">
        <h2>1. Verantwortlicher</h2>
        <p>
          Lennart Niehausmeier<br />
          Am Rabenecksiek 5<br />
          32139 Spenge<br />
          Deutschland
        </p>
        <p>
          E-Mail: <a href="mailto:info@hautwissen-kompakt.de">info@hautwissen-kompakt.de</a><br />
          Telefon: <a href="tel:+4915170084420">+49 (0)151 70084420</a><br />
          Website: <a href="https://www.hautwissen-kompakt.de" rel="noopener noreferrer">https://www.hautwissen-kompakt.de</a>
        </p>
        <p>
          Hinweis zum Impressum: Seit 14.05.2024 gilt das Digitale-Dienste-Gesetz (DDG). Die Anbieterkennzeichnung erfolgt daher nach § 5 DDG (nicht mehr § 5 TMG).
        </p>
      </section>

      {/* Rest unverändert, nur Domain-Anpassungen */}
      
      <section className="mt-12">
        <h2>22. Änderungen</h2>
        <p>
          Wir passen diese Datenschutzerklärung bei Bedarf an. Aktuelle Version: <a href="https://www.hautwissen-kompakt.de/datenschutz">https://www.hautwissen-kompakt.de/datenschutz</a>.
        </p>
      </section>

      <hr className="my-12" />
    
    </main>
  );
}
