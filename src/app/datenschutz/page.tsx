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
    <main className="mx-auto max-w-4xl px-6 py-12 prose prose-neutral">
      <h1>Datenschutzerklärung</h1>

      <p>
        Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zwecke
        der Verarbeitung personenbezogener Daten (nachfolgend kurz „Daten“)
        innerhalb unseres Onlineangebots{" "}
        <strong>Hautwissen-kompakt.de</strong> (nachfolgend „Webseite“) sowie
        der mit ihm verbundenen Funktionen und Inhalte.
      </p>

      <section className="mt-12">
        <h2>1. Verantwortlicher</h2>
        <p>
          Lennart Niehausmeier
          <br />
          Am Rabenecksiek 5
          <br />
          32139 Spenge
          <br />
          Deutschland
        </p>
        <p>
          E-Mail:{" "}
          <a href="mailto:info@hautwissen-kompakt.de">
            info@hautwissen-kompakt.de
          </a>
          <br />
          Telefon: <a href="tel:+4915170084420">+49 (0)151 70084420</a>
          <br />
          Website:{" "}
          <a
            href="https://www.hautwissen-kompakt.de"
            rel="noopener noreferrer"
          >
            https://www.hautwissen-kompakt.de
          </a>
        </p>
        <p>
          Hinweis zum Impressum: Seit 14.05.2024 gilt das
          Digitale-Dienste-Gesetz (DDG). Die Anbieterkennzeichnung erfolgt daher
          nach § 5 DDG (nicht mehr § 5 TMG).
        </p>
      </section>

      <section className="mt-12">
        <h2>2. Begriffe &amp; Rechtsgrundlagen (Kurzüberblick)</h2>
        <ul>
          <li>
            <strong>DSGVO</strong>: Verordnung (EU) 2016/679.
          </li>
          <li>
            <strong>TDDDG</strong>: Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz
            (§ 25 TDDDG: Speichern/Zugriff auf Informationen in Endeinrichtungen
            – „Cookies/Tracking“).
          </li>
          <li>
            <strong>Rechtsgrundlagen</strong>: Art. 6 Abs. 1 lit. a
            (Einwilligung), lit. b (Vertrag/Anbahnung), lit. c (rechtliche
            Pflicht), lit. f (berechtigte Interessen), Art. 49
            (Drittlandübermittlungen in Sonderfällen).
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2>3. Kategorien verarbeiteter Daten</h2>
        <ul>
          <li>
            Nutzungsdaten (z. B. besuchte Seiten, Zugriffsdaten, Zeitstempel,
            Referrer-URL)
          </li>
          <li>
            Meta-/Kommunikationsdaten (z. B. IP-Adresse, User-Agent; bei GA4 ohne
            dauerhafte IP-Speicherung)
          </li>
          <li>
            Kontakt-/Inhaltsdaten (z. B. E-Mails, Telefonanfragen)
          </li>
          <li>
            Cookie-/Consent-Informationen (Consent-Status, Zeitpunkt,
            Geräte-/Browser-Kontext)
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2>4. Zwecke der Verarbeitung</h2>
        <ul>
          <li>
            Bereitstellung und Sicherbetrieb der Webseite (IT-Sicherheit,
            Fehleranalyse, Missbrauchsprävention)
          </li>
          <li>
            Reichweitenmessung/Statistik (Google Analytics) – nur mit
            Einwilligung
          </li>
          <li>
            Marketing/Conversion-Messung (Meta Pixel/Facebook, LinkedIn Insight
            Tag) – nur mit Einwilligung
          </li>
          <li>Kommunikation und Beantwortung von Anfragen</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2>5. Hosting &amp; Auftragsverarbeitung</h2>
        <p>
          Unser Onlineangebot wird bei <strong>Vercel Inc.</strong>, 340 S Lemon
          Ave #4133, Walnut, CA 91789, USA, gehostet. Vercel verarbeitet
          Server-Logdaten (siehe Ziff. 6) in unserem Auftrag.
        </p>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
          (betriebsnotwendiger Betrieb, Sicherheit) sowie eines
          Auftragsverarbeitungsvertrags nach Art. 28 DSGVO.
        </p>
      </section>

      <section className="mt-12">
        <h2>6. Server-Logfiles</h2>
        <p>
          Bei jedem Zugriff auf die Webseite werden automatisiert folgende Daten
          protokolliert: aufgerufene URL, Datum/Uhrzeit, übertragene Datenmenge,
          HTTP-Statuscode, Referrer, Browser/Version, Betriebssystem,
          IP-Adresse.
        </p>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (technischer Betrieb,
          IT-Sicherheit).
        </p>
        <p>
          Speicherdauer: Logdaten werden aus Sicherheitsgründen kurzfristig
          gespeichert und anschließend gelöscht oder anonymisiert. Üblich sind
          7–30 Tage.
        </p>
      </section>

      <section className="mt-12">
        <h2>7. Cookies, lokale Speicherung &amp; Einwilligungen (§ 25 TDDDG)</h2>
        <p>
          Wir nutzen ein Consent-Management-Tool (CMP). Nicht technisch
          notwendige Technologien (z. B. Analytics/Marketing-Cookies,
          Web-Storage, Pixel) werden erst nach Ihrer Einwilligung
          gesetzt/ausgeführt.
        </p>
        <p>
          <strong>Technisch notwendige Technologien:</strong> für die
          Bereitstellung des ausdrücklich gewünschten digitalen Dienstes
          erforderlich (z. B. Consent-Speichercookie, Sicherheits-Cookies).
        </p>
        <p>
          <strong>Nicht notwendige Technologien:</strong> z. B. Google
          Analytics, Meta Pixel, LinkedIn Insight Tag – nur mit Einwilligung.
        </p>
        <p>
          Sie können Ihre Einwilligungen jederzeit über den Link
          „Cookie-Einstellungen“ auf jeder Seite ändern oder widerrufen.
        </p>
        <p>
          Rechtsgrundlagen: § 25 Abs. 1 TDDDG i. V. m. Art. 6 Abs. 1 lit. a
          DSGVO. Für notwendige Technologien ggf. § 25 Abs. 2 TDDDG.
        </p>
      </section>

      <section className="mt-12">
        <h2>8. Google Analytics (GA4)</h2>
        <p>
          Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin
          4, Irland; Muttergesellschaft: Google LLC, USA.
        </p>
        <p>
          Zwecke: Reichweitenmessung, Nutzungsanalyse, Verbesserung unseres
          Onlineangebots.
        </p>
        <p>
          Datenkategorien: Nutzungsdaten, Ereignisdaten, pseudonyme Kennungen;
          IP-Adressen werden bei GA4 nicht dauerhaft gespeichert.
        </p>
        <p>
          Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO; § 25 Abs. 1
          TDDDG).
        </p>
        <p>
          Auftragsverarbeitung: Vertrag mit Google (Art. 28 DSGVO).
          Übermittlungen in die USA nach DPF oder SCC.
        </p>
        <p>
          Speicherdauer: je nach Konfiguration (2 oder 14 Monate). Widerruf über
          CMP.
        </p>
      </section>

      <section className="mt-12">
        <h2>9. Meta Pixel (Facebook)</h2>
        <p>
          Anbieter: Meta Platforms Ireland Limited, Dublin, Irland;
          Muttergesellschaft: Meta Platforms, Inc., USA.
        </p>
        <p>
          Zwecke: Conversion-Messung, Reichweitenanalyse, ggf. Remarketing.
        </p>
        <p>
          Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO; § 25 Abs. 1
          TDDDG).
        </p>
        <p>
          Übermittlungen in die USA nach DPF oder SCC. Widerruf jederzeit über
          CMP.
        </p>
      </section>

      <section className="mt-12">
        <h2>10. LinkedIn Insight Tag</h2>
        <p>
          Anbieter: LinkedIn Ireland Unlimited Company, Dublin, Irland;
          Muttergesellschaft: LinkedIn Corporation, USA.
        </p>
        <p>
          Zwecke: Conversion-Tracking, Kampagnen-Auswertung, ggf. Retargeting.
        </p>
        <p>
          Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO; § 25 Abs. 1
          TDDDG).
        </p>
        <p>
          Übermittlungen in die USA nach DPF oder SCC. Widerruf über CMP.
        </p>
      </section>

      <section className="mt-12">
        <h2>11. Terminbuchung über Calendly</h2>
        <p>Anbieter: Calendly, LLC, USA.</p>
        <p>
          Zwecke: Online-Terminvereinbarung, Terminbestätigungen, Erinnerungen.
        </p>
        <p>
          Datenkategorien: eingegebene Daten (Name, E-Mail, Telefonnummer),
          technische Metadaten, Nutzungsdaten.
        </p>
        <p>
          Rechtsgrundlagen: Art. 6 Abs. 1 lit. b DSGVO (Terminbuchung), ggf.
          Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 TDDDG (Cookies/Widget).
        </p>
        <p>Übermittlungen in die USA nach DPF oder SCC. AVV abgeschlossen.</p>
        <p>Widerruf: über Cookie-Einstellungen.</p>
      </section>

      <section className="mt-12">
        <h2>12. E-Mail-Versand und Newsletter mit Brevo</h2>
        <p>Anbieter: Brevo SAS, Paris, Frankreich.</p>
        <p>
          Zwecke: Versand von E-Mails, Verwaltung von Listen, ggf. Newsletter
          &amp; Marketing.
        </p>
        <p>
          Rechtsgrundlagen: Art. 6 Abs. 1 lit. b DSGVO (transaktional), Art. 6
          Abs. 1 lit. a DSGVO i. V. m. § 7 UWG (Newsletter).
        </p>
        <p>AVV besteht, Datenzentren in der EU. Drittlandübermittlungen über SCC.</p>
        <p>Widerruf: jederzeit über Abmeldelink.</p>
      </section>

      <section className="mt-12">
        <h2>13. Kommunikation (E-Mail/Telefon)</h2>
        <p>
          Wenn Sie uns kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung
          der Anfrage.
        </p>
        <p>
          Rechtsgrundlagen: Art. 6 Abs. 1 lit. b DSGVO (Vertrag) bzw. lit. f
          DSGVO (Anfragen).
        </p>
      </section>

      <section className="mt-12">
        <h2>14. Empfänger</h2>
        <ul>
          <li>IT-Dienstleister/Hoster</li>
          <li>Tool-Anbieter: Google, Meta, LinkedIn</li>
          <li>Behörden bei rechtlicher Verpflichtung</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2>15. Drittlandübermittlungen</h2>
        <p>
          Datenübermittlungen (insb. USA) erfolgen je nach Anbieter über DPF oder
          SCC mit Zusatzmaßnahmen.
        </p>
      </section>

      <section className="mt-12">
        <h2>16. Speicherdauer</h2>
        <p>
          Daten werden gelöscht oder anonymisiert, sobald der Zweck entfällt und
          keine Aufbewahrungspflichten bestehen.
        </p>
      </section>

      <section className="mt-12">
        <h2>17. Sicherheit</h2>
        <p>
          Wir treffen technische und organisatorische Maßnahmen (TOMs) nach Stand
          der Technik.
        </p>
      </section>

      <section className="mt-12">
        <h2>18. Ihre Rechte</h2>
        <p>
          Rechte: Auskunft, Berichtigung, Löschung, Einschränkung,
          Datenübertragbarkeit, Widerspruch, Widerruf.
        </p>
      </section>

      <section className="mt-12">
        <h2>19. Beschwerderecht</h2>
        <p>
          Zuständig ist u. a. die LDI NRW, Kavalleriestraße 2-4, 40213 Düsseldorf,{" "}
          <a
            href="https://www.ldi.nrw.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.ldi.nrw.de/
          </a>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2>20. Pflicht zur Bereitstellung von Daten</h2>
        <p>
          Technisch erforderliche Daten sind notwendig für den Betrieb. Für
          Analytics/Marketing besteht keine Pflicht.
        </p>
      </section>

      <section className="mt-12">
        <h2>21. Automatisierte Entscheidungen</h2>
        <p>
          Keine automatisierte Entscheidungsfindung nach Art. 22 DSGVO. Profiling
          durch Drittanbieter nur mit Einwilligung.
        </p>
      </section>

      <section className="mt-12">
        <h2>22. Änderungen</h2>
        <p>
          Wir passen diese Datenschutzerklärung bei Bedarf an. Aktuelle Version:{" "}
          <a href="https://www.hautwissen-kompakt.de/datenschutz">
            https://www.hautwissen-kompakt.de/datenschutz
          </a>
          .
        </p>
      </section>

      <hr className="my-12" />
    </main>
  );
}
