// app/agb/page.tsx
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "AGB | Hautwissen-kompakt.de",
  description:
    "Allgemeine Geschäftsbedingungen (AGB) für die Nutzung der Webseite Hautwissen-kompakt.de und die Durchführung von Verträgen über angebotene Leistungen.",
  alternates: { canonical: "/agb" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "AGB | Hautwissen-kompakt.de",
    description:
      "Allgemeine Geschäftsbedingungen (AGB) von Hautwissen-kompakt.de – Nutzung der Website und Vertragsbedingungen.",
    url: "/agb",
    type: "website",
  },
};

export default function AgbPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 prose prose-neutral">
      <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>

      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Nutzung der Webseite <strong>Hautwissen-kompakt.de</strong> sowie – soweit angeboten – das Zustandekommen und die Durchführung von Verträgen über von uns bereitgestellte Leistungen.
      </p>

      <section className="mt-12">
        <h2>1. Anbieter</h2>
        <p>
          Lennart Niehausmeier<br />
          Am Rabenecksiek 5<br />
          32139 Spenge, Deutschland
        </p>
        <p>
          Telefon: <a href="tel:+4915170084420">+49 (0)151 70084420</a><br />
          E-Mail: <a href="mailto:info@hautwissen-kompakt.de">info@hautwissen-kompakt.de</a><br />
          Website: <a href="https://www.hautwissen-kompakt.de">https://www.hautwissen-kompakt.de</a>
        </p>
        <p>Hinweis: Die Anbieterkennzeichnung im Impressum richtet sich nach § 5 DDG.</p>
      </section>

      <section className="mt-12">
        <h2>2. Geltungsbereich &amp; Begriffe</h2>
        <p>
          Diese AGB gelten für die Nutzung von Hautwissen-kompakt.de und für sämtliche von uns angebotenen Leistungen ausschließlich gegenüber Unternehmern (§ 14 BGB), juristischen Personen des öffentlichen Rechts oder öffentlich-rechtlichen Sondervermögen.
        </p>
        <p>
          Verbraucher (§ 13 BGB) sind von unserem Leistungsangebot ausgeschlossen; über die Website werden keine Verträge mit Verbrauchern geschlossen.
        </p>
        <p>
          Im Zweifel hat der Nutzer uns auf Verlangen seine Unternehmereigenschaft nachzuweisen (z. B. USt-ID, Handelsregisterangaben).
        </p>
      </section>

      <section className="mt-12">
        <h2>3. Leistungen von Hautwissen-kompakt.de</h2>
        <ul>
          <li>Website-Inhalte: allgemeine Informationszwecke.</li>
          <li>Kennenlerngespräch (unverbindlich): Vereinbarung über die Website möglich, jedoch kein Vertrag über entgeltliche Leistungen.</li>
          <li>Vertragsleistungen nur individuell: Entgeltliche Leistungen ausschließlich per individuellem Angebot und gesonderter Annahme.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2>4. Vertragsschluss – kein Online-Vertragsschluss</h2>
        <p>
          Die Darstellung von Leistungen auf der Website ist unverbindlich. Ein Vertrag über entgeltliche Leistungen kommt nur zustande, wenn wir außerhalb der Website ein Angebot unterbreiten und der Kunde dieses annimmt oder wir mit der Leistungserbringung beginnen.
        </p>
        <p>Umfang, Laufzeit, Vergütung und Konditionen ergeben sich aus dem jeweiligen Angebot/Vertrag.</p>
      </section>

      <section className="mt-12">
        <h2>5. Preise, Zahlungsbedingungen</h2>
        <p>
          Preise und Zahlungsmodalitäten ergeben sich aus dem individuellen Angebot/Vertrag. Preise verstehen sich – sofern nicht anders ausgewiesen – zuzüglich gesetzlicher Umsatzsteuer.
        </p>
        <p>
          Zulässige Zahlungsarten und Fälligkeiten werden im Angebot/Vertrag festgelegt. Bei Zahlungsverzug gelten die gesetzlichen Regelungen.
        </p>
      </section>

      <section className="mt-12">
        <h2>6. Leistungserbringung, Termine &amp; Mitwirkung</h2>
        <p>
          Leistungsfristen sind nur verbindlich, wenn sie schriftlich zugesagt wurden. Der Kunde hat erforderliche Informationen und Mitwirkungshandlungen rechtzeitig bereitzustellen. Verzögerungen verlängern Fristen angemessen.
        </p>
        <p>Wir behalten uns technisch bedingte Wartungsfenster und Updates vor.</p>
      </section>

      <section className="mt-12">
        <h2>7. Nutzungsrechte an Inhalten</h2>
        <p>
          Alle Inhalte unterliegen dem Urheber-/Leistungsschutzrecht. Soweit vereinbart, räumen wir einfache, nicht übertragbare Nutzungsrechte im erforderlichen Umfang ein.
        </p>
        <p>
          Weitergabe, Unterlizenzierung oder Bearbeitung bedürfen unserer Zustimmung. Nutzung unserer Marken/Logos nur mit schriftlicher Zustimmung.
        </p>
      </section>

      <section className="mt-12">
        <h2>8. Pflichten des Nutzers / Verbotene Handlungen</h2>
        <p>
          Verboten sind u. a.: Umgehung von Sicherheitsmechanismen, automatisierte Abfragen ohne Zustimmung, rechtswidrige Inhalte, Verletzung von Rechten Dritter.
        </p>
        <p>
          Bei Verstößen behalten wir uns Sperrungen, Löschungen und rechtliche Schritte vor.
        </p>
      </section>

      <section className="mt-12">
        <h2>9. Gewährleistung</h2>
        <p>
          Es gelten die gesetzlichen Gewährleistungsrechte. Für unentgeltliche Dienste/Informationen übernehmen wir keine Gewähr, außer bei Vorsatz, grober Fahrlässigkeit oder Verletzung von Leben, Körper oder Gesundheit.
        </p>
      </section>

      <section className="mt-12">
        <h2>10. Haftung</h2>
        <p>
          Wir haften unbeschränkt bei Vorsatz, grober Fahrlässigkeit, für Schäden an Leben, Körper, Gesundheit sowie nach Produkthaftungsgesetz.
        </p>
        <p>
          Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten, beschränkt auf den vorhersehbaren, typischen Schaden.
        </p>
        <p>Darüber hinaus ist die Haftung ausgeschlossen.</p>
      </section>

      <section className="mt-12">
        <h2>11. Datenschutz</h2>
        <p>
          Es gilt unsere Datenschutzerklärung in der jeweils aktuellen Fassung: <a href="/datenschutz">https://www.hautwissen-kompakt.de/datenschutz</a>
        </p>
      </section>

      <section className="mt-12">
        <h2>12. Streitbeilegung</h2>
        <p>
          Das VSBG findet keine Anwendung, da wir ausschließlich Verträge mit Unternehmern schließen. Eine Teilnahme an Streitbeilegungsverfahren erfolgt nicht.
        </p>
      </section>

      <section className="mt-12">
        <h2>13. Anwendbares Recht, Vertragssprache, Gerichtsstand</h2>
        <p>
          Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Vertragssprache ist Deutsch.
        </p>
        <p>
          Gerichtsstand für Unternehmer ist unser Sitz in Spenge.
        </p>
      </section>

      <section className="mt-12">
        <h2>14. Änderungen dieser AGB</h2>
        <p>
          Für einmalige Verträge gelten die bei Vertragsschluss aktuellen AGB. Bei Dauerschuldverhältnissen können Änderungen erfolgen, wenn sie notwendig und zumutbar sind. Kunden werden 6 Wochen vorher informiert und haben Widerspruchsrecht.
        </p>
      </section>

      <section className="mt-12">
        <h2>15. Schlussbestimmungen</h2>
        <p>
          Sollte eine Bestimmung unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Nebenabreden bedürfen der Textform.
        </p>
      </section>

      <hr className="my-12" />
     
    </main>
  );
}
