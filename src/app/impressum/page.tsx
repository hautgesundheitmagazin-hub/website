// app/impressum/page.tsx
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Impressum | Hautwissen Kompakt",
  description:
    "Impressum gemäß § 5 TMG für hautwissen-kompakt.de – Lennart Niehausmeier, Am Rabenecksiek 5, 32139 Spenge, Deutschland.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Impressum",
    description:
      "Rechtliche Angaben gemäß § 5 TMG",
    url: "/impressum",
    type: "website",
  },
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 prose prose-neutral">
      <h1><b>Impressum</b></h1>

      <section aria-labelledby="tmg">
        <h2 id="tmg">Angaben gemäß § 5 TMG</h2>
        <p>
          Lennart Niehausmeier
          <br />
          Am Rabenecksiek 5
          <br />
          32139 Spenge
          <br />
          Deutschland
        </p>
        <p>Vertreten durch: Lennart Niehausmeier</p>
      </section>

      <section aria-labelledby="kontakt" className="mt-8">
        <h2 id="kontakt">Kontakt</h2>
        <ul className="list-none pl-0 space-y-1">
          <li>
            <b>Telefon:</b> <a href="tel:+4915170084420">+49 (0) 151 70084420</a>
          </li>
          <li>
            <b>E-Mail:</b> <a href="mailto:lennart@findbar.info">info@hautwissen-kompakt.de</a>
          </li>
          <li>
            Website: {" "}
            <a href="https://www.findbar.info" target="_blank" rel="noopener noreferrer">
             www.hautwissen-kompakt.de
            </a>
          </li>
        </ul>
      </section>

      <section aria-labelledby="verantwortlich" className="mt-8">
        <h2 id="verantwortlich">Verantwortlich für den Inhalt</h2>
        <address className="not-italic">
          Lennart Niehausmeier
          <br />
          Am Rabenecksiek 5
          <br />
          32139 Spenge
        </address>
      </section>

      <section aria-labelledby="steuer" className="mt-8">
        <h2 id="steuer">Umsatzsteuer-ID</h2>
        <p>DE326540742</p>
      </section>
    </main>
  );
}
