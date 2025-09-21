// src/app/glossar/exazerbation/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Exazerbation: Was bedeutet das – und was tun im Akutfall? | Hautwissen Kompakt",
  description:
    "Exazerbation einfach erklärt: Definition, typische Auslöser, Symptome, Diagnose & Behandlung – plus Alltagstipps, FAQs und seriöse Quellen.",
  alternates: {
    canonical: "https://www.hautwissen-kompakt.de/glossar/exazerbation",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "article",
    title:
      "Exazerbation: Was bedeutet das – und was tun im Akutfall? | Hautwissen Kompakt",
    description:
      "Exazerbation einfach erklärt: Definition, Auslöser, Symptome & Behandlung – fundiert und verständlich.",
    url: "https://www.hautwissen-kompakt.de/glossar/exazerbation",
    images: [
      {
        url: "/herobild_exazerbation.jpg",
        width: 1600,
        height: 600,
        alt: "Symbolbild Exazerbation; plötzliche Verschlechterung einer chronischen Erkrankung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Exazerbation: Was bedeutet das – und was tun im Akutfall? | Hautwissen Kompakt",
    description:
      "Exazerbation einfach erklärt – mit klaren Handlungsschritten im Akutfall.",
    images: ["/herobild_exazerbation.jpg"],
  },
};

const author = {
  name: "Jennifer Krause",
  role: "Expertin für Hautgesundheit",
};

const accent = "text-emerald-700";

export default function Page() {
  return (
    <article
      className="
    prose prose-zinc mx-auto max-w-4xl px-4 sm:px-6 lg:px-8
    mt-12 md:mt-16 mb-0
    relative after:block after:h-12 md:after:h-16 after:content-['']
  "
    >
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
          Exazerbation – wenn sich eine chronische Erkrankung plötzlich
          verschlechtert
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          In diesem Glossareintrag erfährst Du, was eine Exazerbation ist,
          welche typischen Auslöser es gibt, wie Du Anzeichen früh erkennst und
          welche Schritte im Akutfall sinnvoll sind. Dazu bekommst Du konkrete
          Alltagstipps, um zukünftige Schübe zu vermeiden.
        </p>

        {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime="2025-09-21">21.09</time>
          {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/herobild_exazerbation.jpg"
              />
              <img
                loading="eager"
                fetchPriority="high"
                src="/herobild_exazerbation.jpg"
                alt="Symbolbild Exazerbation; plötzliche Verschlechterung einer chronischen Erkrankung"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Exazerbation bezeichnet eine akute oder deutliche Verschlechterung
            eines bestehenden Leidens.
          </figcaption>
        </figure>

        {/* Meta row – Autor */}
        <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
          <img
            src="/autorenbild_jennifer.jpg"
            alt="Autorin; Jennifer Krause"
            className="w-10 h-10 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-medium text-zinc-900">{author.name}</div>
            <div>{author.role}</div>
          </div>
        </div>
      </header>

      {/* TL;DR */}
      <aside className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="text-lg font-semibold mb-3">
          Das Wichtigste auf einen Blick
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-zinc-800">
          <li>
            <strong>Exazerbation</strong> bedeutet eine deutliche oder plötzliche
            Verschlechterung einer bereits bestehenden, meist chronischen
            Erkrankung; z. B. COPD-Schub, Asthma-Anfall oder entzündlicher
            Hautschub.
          </li>
          <li>
            Typische <strong>Auslöser</strong> sind Infektionen, Umweltreize
            ;Kälte, Rauch;, Stress, Allergene, Medikamente oder
            Therapiefehler ;z. B. falsche Inhalationstechnik;.
          </li>
          <li>
            <strong>Warnzeichen</strong>; schnelle Symptomzunahme, neue
            Beschwerden, keine Besserung trotz gewohnter Maßnahmen&semi; bei Atemnot
            oder starken Schmerzen immer ärztlich abklären.
          </li>
          <li>
            <strong>Behandlung</strong>; je nach Erkrankung Akut-Plan befolgen
            ;z. B. Inhalator, topische Therapie, Notfallmedikamente; und
            Auslöser konsequent managen.
          </li>
          <li>
            <strong>Vorbeugung</strong>; regelmäßige Kontrollen, Impfungen,
            korrekte Dauermedikation, Haut- und Atemwegs-Pflege, Rauchstopp und
            ein persönlicher Aktionsplan.
          </li>
        </ul>
      </aside>

      {/* ToC */}
      <nav
        aria-label="Inhaltsverzeichnis"
        className="mb-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
      >
        <h2 className="text-base font-semibold mb-3">Inhaltsverzeichnis</h2>
        <ol className="list-decimal ml-5 space-y-2">
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#was-ist-exazerbation">
              Was bedeutet Exazerbation; eine einfache Definition
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#ausloeser">
              Häufige Auslöser &amp; Risikofaktoren
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#symptome">
              Woran erkennst Du eine Exazerbation&quest;
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#diagnose-therapie">
              Diagnose &amp; Behandlung im Überblick
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#praevention">
              Vorbeugen; Was Du im Alltag tun kannst
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#expertenstimme">
              Expertenstimme
            </a>
          </li>
        </ol>
      </nav>

      {/* Hauptteil */}
      <section id="was-ist-exazerbation">
        <h2 className="text-2xl font-bold mb-3">Was bedeutet Exazerbation; eine einfache Definition</h2>
        <p className="leading-relaxed">
          Eine <strong>Exazerbation</strong> ist die deutliche, oft akute
          Verschlechterung einer bereits bestehenden ;meist
          chronischen; Erkrankung. Sie ist so ausgeprägt, dass zusätzliche
          Maßnahmen nötig werden – etwa stärkere oder häufigere Medikamente,
          eine ärztliche Kontrolle oder sogar eine Krankenhausbehandlung.
          Gegenbegriff ist die <em>Remission</em>; eine Phase der
          Besserung. Im Alltag spricht man auch von <em>Schub</em> oder
          <em> Flare-up</em>.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Beispiele</h3>
            <ul className="list-disc ml-5">
              <li>Akuter COPD-Schub mit verstärkter Atemnot</li>
              <li>Asthma-Exazerbation nach Infekt oder Allergen</li>
              <li>Hautschub bei Neurodermitis oder Psoriasis</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Typische Dauer</h3>
            <p>
              Von Stunden bis Tage&semi; bei manchen Erkrankungen können Folgen
              länger anhalten, wenn nicht früh gegengesteuert wird.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Warum wichtig&quest;</h3>
            <p>
              Jeder Schub kann die Lebensqualität senken und Folgeschäden
              fördern. Gute Prävention und ein persönlicher Aktionsplan helfen,
              Risiken zu mindern.
            </p>
          </div>
        </div>
      </section>

      <section id="ausloeser" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Häufige Auslöser &amp; Risikofaktoren</h2>
        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Infektionen</h3>
              <p>
                Atemwegsinfekte sind ein Haupttreiber für COPD- und
                Asthma-Schübe. Auch Hautinfektionen können Ekzem-Flare-ups
                befeuern.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Umwelt &amp; Lebensstil</h3>
              <p>
                Kälte, trockene Luft, Tabakrauch, Luftschadstoffe, starke
                körperliche Belastung oder Schwitzen können Symptome
                anheizen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Allergene &amp; Irritantien</h3>
              <p>
                Pollen, Hausstaubmilben, Tierhaare, Duftstoffe, aggressive
                Reinigungsmittel oder Wollematerial können Reaktionen auslösen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Stress &amp; Hormone</h3>
              <p>
                Psychischer Stress und hormonelle Veränderungen gelten bei
                vielen Hauterkrankungen als relevante Trigger.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Medikamente</h3>
              <p>
                Einzelne Wirkstoffe ;z. B. Betablocker bei Asthma, einige
                Biologika bei AD in seltenen Fällen; können unter Umständen
                Einfluss nehmen – ärztlich klären lassen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Therapiefehler</h3>
              <p>
                Falsche Inhalationstechnik, unregelmäßige Anwendung von
                Dauermedikamenten oder zu wenig Hautpflege erhöhen das Risiko.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="symptome" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Woran erkennst Du eine Exazerbation&quest;</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Typische Zeichen</h3>
            <ul className="list-disc ml-5">
              <li>Deutlich stärkere Beschwerden als üblich</li>
              <li>Neue Symptome ;z. B. Fieber, verändertes Sputum, nässende Ekzeme;</li>
              <li>Gewohnte Maßnahmen helfen nicht mehr ausreichend</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="font-semibold mb-2">Warnsignale ;sofort handeln;</h3>
            <ul className="list-disc ml-5">
              <li>Ausgeprägte Atemnot, Pfeifen, Sprechen nur in kurzen Sätzen</li>
              <li>Bläuliche Lippen/Finger, Bewusstseinsstörung</li>
              <li>Starke, rasch zunehmende Schmerzen oder großflächige Hautbeteiligung</li>
            </ul>
            <p className="mt-2">
              In diesen Fällen gilt; Notruf wählen oder direkt ärztliche Hilfe suchen.
            </p>
          </div>
        </div>
      </section>

      <section id="diagnose-therapie" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Diagnose &amp; Behandlung im Überblick</h2>
        <p>
          Die konkrete Therapie richtet sich immer nach der Grunderkrankung.
          Drei Beispiele, stark vereinfacht;
        </p>

        <div className="mt-5 rounded-2xl overflow-hidden border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-44">Erkrankung</th>
                <th className="text-left font-semibold p-3">Typische Akut-Maßnahmen</th>
                <th className="text-left font-semibold p-3 w-48">Nachsorge/Prävention</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">COPD</td>
                <td className="p-3">
                  Kurz wirksame Bronchodilatatoren häufiger einsetzen&semi; ggf.
                  systemische Steroide und Antibiotika nach ärztlicher Beurteilung&semi;
                  Sauerstoff bei Bedarf.
                </td>
                <td className="p-3">
                  Impfungen ;Influenza, Pneumokokken;&semi; Rauchstopp&semi; Schulung&semi;
                  richtige Inhalationstechnik.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Asthma</td>
                <td className="p-3">
                  Gemäß persönlichem Aktionsplan; z. B. Reliever einsetzen,
                  Controller kurzfristig anpassen&semi; bei fehlender Besserung
                  ärztliche Hilfe.
                </td>
                <td className="p-3">
                  Triggerkontrolle&semi; regelmäßige Kontrollen&semi; korrekte
                  Inhalation&semi; Schulung und schriftlicher Plan.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium">Neurodermitis &amp; Psoriasis</td>
                <td className="p-3">
                  Entzündung zügig mit ärztlich empfohlenen topischen
                  Therapien behandeln&semi; Hautbarriere pflegen&semi; Infekte und
                  Irritationen adressieren.
                </td>
                <td className="p-3">
                  Tägliche Basispflege&semi; Trigger meiden ;z. B. Duftstoffe,
                  Kratzen, Wolle;&semi; ggf. proaktive Therapie.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <section id="expertenstimme">
          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              Bei Exazerbationen gilt; früh reagieren, strukturiert vorgehen und
              Auslöser konsequent angehen. Ein persönlicher Aktionsplan spart Zeit
              und reduziert Komplikationen.
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              — Dr. med. K. Beispiel, Pneumologie &amp; Dermatologie ;indirektes
              Zitat;
            </figcaption>
          </figure>
        </section>
      </section>

      <section id="praevention" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Vorbeugen; Was Du im Alltag tun kannst</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Sofort-Checkliste</h3>
            <ul className="list-disc ml-5">
              <li>Aktionsplan parat halten ;z. B. Asthma- oder Haut-Plan;</li>
              <li>Inhalations- oder Anwendungstechnik regelmäßig prüfen</li>
              <li>Impfstatus checken ;ärztlich beraten lassen;</li>
              <li>Rauchstopp und Rauchvermeidung</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Trigger-Management</h3>
            <ul className="list-disc ml-5">
              <li>Duftstoffarme Pflege, milde Reinigungsprodukte</li>
              <li>Innenraumluft optimieren ;Lüften, Befeuchtung bei trockener Luft;</li>
              <li>Stress reduzieren ;Schlaf, Entspannung, Bewegung nach Maß;</li>
              <li>Bei Allergien Exposition mindern ;z. B. Pollenzeiten im Blick</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h3 className="font-semibold mb-2">Hinweis</h3>
          <p>
            Diese Informationen ersetzen keine ärztliche Diagnose. Hol Dir bei
            unklaren oder schweren Beschwerden medizinische Hilfe.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">Was ist der Unterschied zwischen Exazerbation und Remission&quest;</h3>
            <p>
              Exazerbation bedeutet Verschlechterung, Remission Besserung oder
              Ruhe der Symptome. Beide sind typische Phasen vieler chronischer
              Erkrankungen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Wann sollte ich bei einem Schub zum Arzt&quest;</h3>
            <p>
              Immer bei starker Atemnot, bläulichen Lippen, hohem Fieber,
              rascher Verschlechterung, großflächigen Hautveränderungen oder
              wenn Dein Aktionsplan keine Besserung bringt.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Kann Stress eine Exazerbation auslösen&quest;</h3>
            <p>
              Ja, Stress zählt bei vielen Hauterkrankungen zu den relevanten
              Triggern und kann auch Atemwegserkrankungen negativ beeinflussen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Hilft eine Impfung gegen Schübe bei COPD&quest;</h3>
            <p>
              Impfungen gegen Atemwegsinfekte ;Influenza, Pneumokokken; sind
              bei COPD ein wichtiger Baustein, um Exazerbationen zu vermeiden –
              ärztlich beraten lassen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Was gehört in einen Asthma-Aktionsplan&quest;</h3>
            <p>
              Konkrete Schritte für grüne/gelbe/rote Zone, Dosierungen für
              Reliever/Controller, Peak-Flow-Grenzwerte und Notfallkontakte. Den
              Plan legst Du mit Deiner Ärztin/Deinem Arzt fest.
            </p>
          </div>
        </div>

        {/* FAQ Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Was ist der Unterschied zwischen Exazerbation und Remission?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Exazerbation bedeutet Verschlechterung, Remission Besserung oder Ruhe der Symptome. Beide sind typische Phasen vieler chronischer Erkrankungen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wann sollte ich bei einem Schub zum Arzt?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Bei starker Atemnot, bläulichen Lippen, hohem Fieber, rascher Verschlechterung, großflächigen Hautveränderungen oder fehlender Besserung trotz Aktionsplan.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Kann Stress eine Exazerbation auslösen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ja, Stress zählt bei vielen Hauterkrankungen zu den relevanten Triggern und kann auch Atemwegserkrankungen negativ beeinflussen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Hilft eine Impfung gegen Schübe bei COPD?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Impfungen gegen Atemwegsinfekte (Influenza, Pneumokokken) sind bei COPD ein wichtiger Baustein, um Exazerbationen zu vermeiden – ärztlich beraten lassen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was gehört in einen Asthma-Aktionsplan?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Konkrete Schritte für Zonen, Dosierungen für Reliever/Controller, Peak-Flow-Grenzwerte und Notfallkontakte – individuell mit dem Behandlungsteam festlegen.",
                  },
                },
              ],
            }),
          }}
        />
      </section>

      {/* Summary */}
      <section id="zusammenfassung" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
        <p className="leading-relaxed">
          <strong>Was tun bei Exazerbation&quest;</strong> Reagiere früh,
          orientiere Dich an Deinem individuellen Aktionsplan und suche bei
          Warnzeichen ärztliche Hilfe. Langfristig reduzierst Du das Risiko für
          weitere Schübe durch konsequente Basistherapie, gute Technik und
          gezieltes Trigger-Management.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="mt-14">
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-bold mb-3">Praktische Tipps auf einen Blick</h2>
          <p className="mb-4">
            Hol Dir unsere Checkliste; 10 sofort umsetzbare Neurodermitis-Tipps – verständlich, kompakt und kostenlos per E-Mail.
          </p>
          <div className="not-prose">
            {/* Embeddetes Formular (Brevo) */}
            <div dangerouslySetInnerHTML={{ __html: `<!-- Begin Brevo Form -->
<!-- START - We recommend to place the below code in head tag of your website html  -->
<style>
  @font-face {
    font-display: block;
    font-family: Roboto;
    src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
  }
  @font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 600;
    src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
  }
  @font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 700;
    src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
  }
  #sib-container input:-ms-input-placeholder { text-align: left; font-family: Helvetica, sans-serif; color: #c0ccda; }
  #sib-container input::placeholder { text-align: left; font-family: Helvetica, sans-serif; color: #c0ccda; }
  #sib-container a { text-decoration: underline; color: #2BB2FC; }
</style>
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
<div class="sib-form" style="text-align: center; background-color: #EFF2F7;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:3px; border-width:1px; border-color:#C0CCD9; border-style:solid;">
      <form id="sib-form" method="POST" action="https://58a8e982.sibforms.com/serve/MUIFAM6AurHq03QEL-OAw6zYgw-Kxf5qhjK6OTFUFXRNTHxkpmLA4zD6fMcFgwYkzuEuZeR21235aJ6qTBg4SoTt57dyRrBvECSWxNMsXx0RZwio5-Cij443EEVjMQnLOCYo7Xyuv1mvLgZRUqHidNHg4ysq9qHb2x1yLAsEKJFs3ONd5o0vAxY-CDezgZbVVNFPhm8yeV9YECA-">
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="font-size:20px; text-align:left; font-weight:700; font-family:Helvetica, sans-serif; color:#090a0a; background-color:transparent; text-align:left">
            <p>10 sofort umsetzbare Neurodermitis-Tipps.</p>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#3C4858; background-color:transparent; text-align:left">
            <div class="sib-text-form-block">
              <p>Unsere Redaktion hat die drei neuesten Studien analysiert und für Dich in einfache Tipps heruntergebrochen.</p>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:Helvetica, sans-serif; color:#3c4858;" for="EMAIL" data-required="*">Wohin dürfen wir Dir die 10 Tipps schicken?</label>
                <div class="entry__field">
                  <input class="input " type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required />
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <div class="entry__field">
                  <input class="input " maxlength="200" type="text" id="VORNAME" name="VORNAME" autocomplete="off" placeholder="VORNAME" data-required="true" required />
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="text-align: left">
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:left; font-weight:700; font-family:Helvetica, sans-serif; color:#FFFFFF; background-color:#28a392; border-radius:3px; border-width:0px;" form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512" style="">
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
              </svg>
              JETZT 10 TIPPS SICHERN
            </button>
          </div>
        </div>
        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="de">
        <input type="hidden" name="html_type" value="simple">
      </form>
    </div>
  </div>
</div>
<!-- End Brevo Form -->` }} />
          </div>
        </div>
      </section>

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar - Die wichtigsten Begriffe zu Exazerbation
        </h2>
        <div className="rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">Begriff</th>
                <th className="text-left font-semibold p-3">Erklärung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Exazerbation</td>
                <td className="p-3 text-zinc-700">
                  Plötzliche oder deutliche Verschlechterung einer bestehenden
                  Erkrankung, die zusätzliche Behandlung erfordert.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Remission</td>
                <td className="p-3 text-zinc-700">
                  Phase der Besserung;Beruhigung von Krankheitssymptomen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Trigger</td>
                <td className="p-3 text-zinc-700">
                  Auslöser, die einen Schub anstoßen können ;z. B. Infekte,
                  Stress, Allergene;.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Aktionsplan</td>
                <td className="p-3 text-zinc-700">
                  Schriftliche Anleitung mit klaren Schritten für den Akutfall
                  und die Anpassung der Therapie.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Proaktive Therapie</td>
                <td className="p-3 text-zinc-700">
                  Vorbeugende Anwendung milder antientzündlicher Maßnahmen, um
                  neue Schübe zu verhindern.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* E-E-A-T */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Über den Autor</h2>
        <div className="flex items-center gap-4">
          <img
            src="/autorenbild_jennifer.jpg"
            alt="Autorin; Jennifer Krause"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-semibold">Jennifer Krause</div>
            <div className="text-sm text-zinc-700">
              Expertin für Hautgesundheit mit Fokus auf Ekzeme, Psoriasis und
              patientenverständliche Gesundheitskommunikation.
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-zinc-700">
          Überprüft von; <strong>Hautwissen Kompakt Redaktion</strong> – Medizinisch-wissenschaftliche Redaktion.
        </div>
      </section>

      {/* Quellenverzeichnis */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            DocCheck Flexikon; Exazerbation – https://flexikon.doccheck.com/de/Exazerbation
          </li>
          <li>
            AWMF Nationale VersorgungsLeitlinie COPD ;Version 2.0, gültig bis
            24.06.2026; – https://register.awmf.org/de/leitlinien/detail/nvl-003
          </li>
          <li>
            GOLD/ars medici; COPD-Definition der Exazerbation ;de; – https://www.rosenfluh.ch/media/arsmedici/2023/14-16/COPD-Revision-des-GOLD-Reports-2023.pdf
          </li>
          <li>
            GINA 2023 Pocket Guide – https://ginasthma.org/wp-content/uploads/2023/07/GINA-2023-Pocket-Guide-WMS.pdf
          </li>
          <li>
            GINA 2023 Main Report – https://ginasthma.org/2023-gina-main-report/
          </li>
          <li>
            AWMF S3-Leitlinie Atopische Dermatitis 2024 – https://register.awmf.org/assets/guidelines/013-027l_S3_Atopische-Dermatitis-AD-Neurodermitis-atopisches-Ekzem_2024-01.pdf
          </li>
          <li>
            EuroGuiDerm Guideline Atopic Eczema ;2022, Vollversion; – https://www.guidelines.edf.one/uploads/attachments/clbm6nh6x07tw0d3qtyb1ukrt-0-atopic-eczema-gl-full-version-dec-2022.pdf
          </li>
          <li>
            Wollenberg A. et al.; Consensus-based European guidelines for treatment of atopic eczema ;2018; – https://pubmed.ncbi.nlm.nih.gov/29676534/
          </li>
          <li>
            Atemwegsliga; Informationen zu COPD-Exazerbationen – https://www.atemwegsliga.de/copd.html
          </li>
          <li>
            Psoriasis-Initiative; Auslöser &amp; Trigger – https://www.psoriasis-initiative-ich.de/psoriasis-ursachen-ausloeser-trigger
          </li>
          <li>
            Wikipedia; Exazerbation ;DE; – https://de.wikipedia.org/wiki/Exazerbation
          </li>
        </ul>
      </section>

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "Exazerbation – wenn sich eine chronische Erkrankung plötzlich verschlechtert",
            description:
              "Exazerbation einfach erklärt: Definition, Auslöser, Symptome, Diagnose, Behandlung und Prävention – inklusive Alltagstipps.",
            inLanguage: "de",
            image: "https://www.hautwissen-kompakt.de/herobild_exazerbation.jpg",
            author: {
              "@type": "Person",
              name: "Jennifer Krause",
            },
            publisher: {
              "@type": "Organization",
              name: "Hautsache Gesund",
            },
            datePublished: "2025-09-21",
            dateModified: "2025-09-21",
            mainEntityOfPage:
              "https://www.hautwissen-kompakt.de/glossar/exazerbation",
          }),
        }}
      />
    </article>
  );
}
