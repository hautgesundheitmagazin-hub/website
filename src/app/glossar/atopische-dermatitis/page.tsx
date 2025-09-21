// src/app/glossar/atopische-dermatitis/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atopische Dermatitis (Neurodermitis) einfach erklärt – Symptome, Auslöser & Behandlung",
  description:
    "Atopische Dermatitis (Neurodermitis): Ursachen, typische Symptome, Auslöser, Pflege, Medikamente & Alltagstipps – kompakt, verständlich und nach Leitlinie.",
  alternates: {
    canonical: "https://www.hautwissen-kompakt.de/glossar/atopische-dermatitis",
  },
  openGraph: {
    type: "article",
    url: "https://www.hautwissen-kompakt.de/glossar/atopische-dermatitis",
    title:
      "Atopische Dermatitis (Neurodermitis) – Symptome, Auslöser & Behandlung",
    description:
      "Alles Wichtige zu Neurodermitis: Erkennen, behandeln, Schübe vermeiden. Evidenzbasiert und leicht verständlich.",
    images: [
      {
        url: "/herobild_atopische_dermatitis.jpg",
        width: 1600,
        height: 600,
        alt: "Nahaufnahme einer trockenen Hautstelle bei atopischer Dermatitis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Atopische Dermatitis – Ursachen, Symptome & Therapie auf einen Blick",
    description:
      "Der kompakte Neurodermitis-Guide: Pflege, Trigger-Management, Medikamente & Alltagstipps.",
    images: ["/herobild_atopische_dermatitis.jpg"],
  },
  robots: { index: true, follow: true },
};

const accent = "text-emerald-700";
const author = {
  name: "Jennifer Krause",
  role: "Expertin für Hautgesundheit",
};

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
          Atopische Dermatitis (Neurodermitis): Ursachen, Symptome &amp; Behandlung
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Du kämpfst mit trockener, juckender Haut und wiederkehrenden Schüben? Hier erfährst Du
          kompakt, was hinter der atopischen Dermatitis steckt, wie Du Auslöser erkennst und welche
          Therapien Dir wirklich helfen.
        </p>

        {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am <time dateTime="2025-09-21">21.09</time>
          {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet="/herobild_atopische_dermatitis.jpg" />
              <img
                loading="eager"
                fetchPriority="high"
                src="/herobild_atopische_dermatitis.jpg"
                alt="Trockene, gerötete Hautstelle bei atopischer Dermatitis"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Atopische Dermatitis zeigt sich häufig als trockene, gerötete, stark juckende Hautareale.
          </figcaption>
        </figure>

        {/* Meta row – Autor */}
        <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
          <img
            src="/autorenbild_jennifer.jpg"
            alt="Autorin: Jennifer Krause"
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
        <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
        <ul className="list-disc ml-5 space-y-2 text-zinc-800">
          <li>
            <strong>Was es ist:</strong> Atopische Dermatitis (Neurodermitis) ist eine chronisch-entzündliche, nicht ansteckende Hauterkrankung mit starkem Juckreiz und trockener Haut.
          </li>
          <li>
            <strong>Warum sie entsteht:</strong> Eine gestörte Hautbarriere und ein überaktives Immunsystem begünstigen Entzündungen; Gene und Umweltfaktoren spielen zusammen.
          </li>
          <li>
            <strong>Typische Auslöser:</strong> Trockenheit, Schwitzen, Stress, Infekte, Allergene, Reizstoffe und klimatische Faktoren können Schübe triggern.
          </li>
          <li>
            <strong>Behandlung in Stufen:</strong> Tägliche Basispflege &rarr; antientzündliche Cremes/Salben &rarr; Phototherapie &rarr; Systemtherapien (Biologika, JAK-Inhibitoren) je nach Schwere.
          </li>
          <li>
            <strong>Alltag:</strong> Clevere Pflegeroutinen, Trigger-Management und Hautschutz im Beruf/Haushalt senken die Schubhäufigkeit.
          </li>
          <li>
            <strong>Profi-Hilfe:</strong> Bei häufigen Schüben, großflächigen Ekzemen oder Schlafstörungen sollte eine dermatologische Abklärung erfolgen.
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
            <a className={`hover:underline ${accent} font-medium`} href="#was-ist-ad">
              Was ist atopische Dermatitis?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#ursachen-symptome">
              Ursachen &amp; typische Symptome
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#diagnose">
              Wie wird AD diagnostiziert?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#behandlung">
              Behandlung nach Stufenplan
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#alltag">
              Alltag, Pflege &amp; Trigger-Management
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#kinder-familie">
              Besonderheiten bei Kindern &amp; in der Familie
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#faq">
              FAQ
            </a>
          </li>
        </ol>
      </nav>

      {/* Hauptteil */}
      <section id="was-ist-ad" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Was ist atopische Dermatitis?</h2>
        <p className="leading-relaxed">
          Atopische Dermatitis (auch Neurodermitis oder atopisches Ekzem) ist eine{" "}
          chronisch-entzündliche, schubweise verlaufende Hauterkrankung. Sie ist{" "}
          <strong>nicht ansteckend</strong>. Typisch sind trockene, gerötete, teils nässende
          Hautareale, intensiver Juckreiz und Schlafstörungen. Die Erkrankung beginnt oft im
          Kindesalter, kann aber in jedem Lebensalter auftreten. Ziel der Behandlung ist, die
          Hautbarriere zu stärken, Entzündung zu kontrollieren und Schübe zu vermeiden.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="text-lg font-semibold mb-2">Kurz erklärt</h3>
            <p className="m-0">
              AD entsteht, wenn die Hautbarriere (der natürliche Schutzfilm) zu durchlässig wird
              und das Immunsystem überreagiert. Reize von außen gelangen leichter in die Haut, die
              sich entzündet &amp; juckt.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-zinc-50">
            <h3 className="text-lg font-semibold mb-2">Zahlen &amp; Häufigkeit</h3>
            <p className="m-0">
              AD gehört weltweit zu den häufigsten Hauterkrankungen. Kinder sind besonders oft
              betroffen; viele bessern sich bis zum Erwachsenenalter, manche bleiben chronisch.
            </p>
          </div>
        </div>
      </section>

      <section id="ursachen-symptome" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Ursachen &amp; typische Symptome</h2>
        <p className="leading-relaxed">
          Es wirken mehrere Faktoren zusammen: genetische Veranlagung (z. B. Filaggrin-Varianten),
          eine gestörte Hautbarriere, sowie ein fehlgesteuertes Immunsystem. Häufige Auslöser
          (Trigger) von Schüben sind Trockenheit, Reibung, Schwitzen, Stress, Infekte, Reizstoffe
          (z. B. Duftstoffe), Klimafaktoren und bei einigen Betroffenen Allergene.
        </p>

        <div className="mt-6 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">Symptom</th>
                <th className="text-left font-semibold p-3">So fühlt es sich an</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Juckreiz</td>
                <td className="p-3 text-zinc-700">Ständig kribbelnd, teils brennend, oft nachts schlimmer.</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Trockene Haut</td>
                <td className="p-3 text-zinc-700">Rau, schuppig, spannt schnell nach dem Waschen.</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Ekzemherde</td>
                <td className="p-3 text-zinc-700">Gerötet, teils nässend, später verdickt (Lichenifikation).</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Infektionen</td>
                <td className="p-3 text-zinc-700">
                  Bakterien, Viren oder Pilze können leichter eindringen; ärztlich abklären lassen.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="diagnose" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Wie wird AD diagnostiziert?</h2>
        <p className="leading-relaxed">
          Die Diagnose stellt die Dermatologin/der Dermatologe anhand von{" "}
          <strong>klinischem Bild</strong>, typischer <strong>Anamnese</strong> (Familienneigung zu
          Allergien) und Ausschluss anderer Hautkrankheiten. Hilfreich sind standardisierte{" "}
          <strong>Scores</strong> wie <em>EASI</em> oder <em>SCORAD</em>, die das Ausmaß bewerten.
          Allergietests werden individuell erwogen, wenn z. B. Nahrungsmittel eine Rolle spielen
          könnten.
        </p>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Der größte Hebel ist konsequente Basispflege: Wer die Hautbarriere täglich stärkt,
            braucht seltener starke Medikamente.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Jennifer Krause, indirektes Zitat aus klinischer Praxis
          </figcaption>
        </figure>
      </section>

      <section id="behandlung" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Behandlung nach Stufenplan</h2>
        <p className="leading-relaxed">
          Moderne Leitlinien empfehlen ein <strong>Stufenmodell</strong>, angepasst an Schweregrad
          und Verlauf. Du beginnst immer mit der täglichen Hautpflege und steigerst nur bei Bedarf.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="text-lg font-semibold mb-2">1) Basistherapie</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Rückfettende Cremes/Salben (Emollients) 1–2× täglich</li>
              <li>Sanfte, parfumfreie Reinigung; lauwarm duschen</li>
              <li>Weichmacher auch in beschwerdefreien Phasen</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="text-lg font-semibold mb-2">2) Antientzündlich lokal</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Topische Glukokortikoide („Kortison“) kurzzeitig schubweise</li>
              <li>Calcineurin-Inhibitoren (Tacrolimus/Pimecrolimus) steroidfrei</li>
              <li>Proaktives Intervall-Regime zur Schubprävention</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="text-lg font-semibold mb-2">3) Phototherapie &amp; Systemtherapie</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>UVB/UVAB als ärztliche Option bei moderater AD</li>
              <li>Biologika (z. B. Dupilumab, Tralokinumab) bei schwerer AD</li>
              <li>JAK-Inhibitoren (z. B. Upadacitinib, Abrocitinib) bei geeigneten Fällen</li>
            </ul>
          </div>
        </div>

        <aside className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <strong>Wichtig:</strong> Auswahl, Dosierung und Kontrolle gehören in ärztliche Hand –
          insbesondere bei Kindern, in Schwangerschaft/Stillzeit oder bei Begleiterkrankungen.
        </aside>
      </section>

      <section id="alltag" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Alltag, Pflege &amp; Trigger-Management</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="md:col-span-2">
            <p className="leading-relaxed">
              Kleinere Alltagsanpassungen haben großen Effekt: Luftige Kleidung aus Baumwolle,
              regelmäßiges Eincremen direkt nach dem Duschen („within 3 minutes“), kurze Fingernägel
              und kratzfreie Ablenkungsstrategien bei Juckreiz. Im Beruf/Hausarbeit: Handschuhe mit
              Baumwollfutter, milde Reinigungsmittel, Pausen für die Haut.
            </p>
          </div>
          <aside className="rounded-2xl border border-zinc-200 p-4 bg-zinc-50">
            <h3 className="text-lg font-semibold mb-2">Schnellhilfe bei Schub</h3>
            <ol className="list-decimal ml-5 space-y-1">
              <li>Kühlende, feuchte Umschläge</li>
              <li>Schubplan befolgen (z. B. verordnete Creme)</li>
              <li>Nach 3–5 Tagen ohne Besserung ärztlich melden</li>
            </ol>
          </aside>
        </div>
      </section>

      <section id="kinder-familie" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Besonderheiten bei Kindern &amp; in der Familie</h2>
        <p className="leading-relaxed">
          Bei Babys und Kindern sind Gesicht und Beugen häufig betroffen. Schlaf und Alltag der
          Familie leiden oft stark. Wichtig sind klare Pflegeroutinen, juckreizarme Schlafumgebung
          und realistische Erwartungen: Schübe lassen sich reduzieren, aber nicht immer komplett
          verhindern. Sprich mit Eurer Kinderärztin/Eurem Kinderarzt über individuelle Pläne.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">Ist atopische Dermatitis ansteckend?</h3>
            <p>Nein. Neurodermitis ist eine entzündliche, aber nicht ansteckende Hauterkrankung.</p>
          </div>
          <div>
            <h3 className="font-semibold">Hilft „nur“ Eincremen wirklich?</h3>
            <p>
              Ja, konsequente Basispflege stärkt die Hautbarriere und senkt die Schubhäufigkeit. Sie
              ist die Grundlage jeder Therapie.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Wann brauche ich stärkere Medikamente?</h3>
            <p>
              Wenn Juckreiz, Schlafverlust oder ausgedehnte Ekzeme trotz guter Pflege bleiben,
              solltest Du über ärztlich verordnete Cremes, Phototherapie oder Systemtherapien
              sprechen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Spielt Ernährung eine Rolle?</h3>
            <p>
              Nur bei nachgewiesenen Unverträglichkeiten oder Allergien. Eigenmächtige Diäten sind
              oft nutzlos und können schaden&thinsp;&ndash; sprich mit Fachleuten.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Gibt es Heilung?</h3>
            <p>
              AD verläuft chronisch-schubweise. Viele erfahren aber lange beschwerdearme Phasen,
              wenn Pflege, Trigger-Management und Therapie zusammenpassen.
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
                  name: "Ist atopische Dermatitis ansteckend?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Nein. Neurodermitis ist eine entzündliche, aber nicht ansteckende Hauterkrankung.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Hilft „nur“ Eincremen wirklich?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ja, konsequente Basispflege stärkt die Hautbarriere und senkt die Schubhäufigkeit. Sie ist die Grundlage jeder Therapie.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wann brauche ich stärkere Medikamente?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Wenn Juckreiz, Schlafverlust oder ausgedehnte Ekzeme trotz guter Pflege bleiben, solltest Du über ärztlich verordnete Cremes, Phototherapie oder Systemtherapien sprechen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Spielt Ernährung eine Rolle?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Nur bei nachgewiesenen Unverträglichkeiten oder Allergien. Eigenmächtige Diäten sind oft nutzlos und können schaden – sprich mit Fachleuten.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Gibt es Heilung?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "AD verläuft chronisch-schubweise. Viele erfahren aber lange beschwerdearme Phasen, wenn Pflege, Trigger-Management und Therapie zusammenpassen.",
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
          <strong>Wie bekomme ich meine Neurodermitis langfristig in den Griff?</strong> Mit
          täglicher Basispflege, einem klaren Schubplan und individueller, leitlinienbasierter
          Therapie. So reduzierst Du Juckreiz, beugst neuen Schüben vor und gewinnst Lebensqualität
          zurück.
        </p>
      </section>

      {/* Call to Action Section */}
      <section aria-label="CTA Newsletter" className="mt-14">
        <div
          dangerouslySetInnerHTML={{
            __html: `<!-- Begin Brevo Form -->
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

  #sib-container input:-ms-input-placeholder {
    text-align: left;
    font-family: Helvetica, sans-serif;
    color: #c0ccda;
  }

  #sib-container input::placeholder {
    text-align: left;
    font-family: Helvetica, sans-serif;
    color: #c0ccda;
  }

  #sib-container a {
    text-decoration: underline;
    color: #2BB2FC;
  }
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
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
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
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
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
<!-- End Brevo Form -->`,
          }}
        />
      </section>

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar - Die wichtigsten Begriffe zu Atopische Dermatitis
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
                <td className="p-3 font-medium text-zinc-900">Emollients</td>
                <td className="p-3 text-zinc-700">
                  Rückfettende Pflegeprodukte, die Feuchtigkeit einschließen und die Hautbarriere
                  glätten.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Topische Glukokortikoide</td>
                <td className="p-3 text-zinc-700">
                  Entzündungshemmende Cremes/Salben („Kortison“) zur schnellen Schubkontrolle.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Calcineurin-Inhibitoren</td>
                <td className="p-3 text-zinc-700">
                  Steroidfreie Wirkstoffe (Tacrolimus/Pimecrolimus), die Entzündungen lokal hemmen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Biologika</td>
                <td className="p-3 text-zinc-700">
                  Antikörper-Therapien (z. B. Dupilumab, Tralokinumab), die gezielt Entzündungssignale blockieren.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">JAK-Inhibitoren</td>
                <td className="p-3 text-zinc-700">
                  Tabletten (z. B. Upadacitinib, Abrocitinib), die bestimmte Entzündungswege in der Zelle bremsen.
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
            alt="Autorin: Jennifer Krause"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-semibold">Jennifer Krause</div>
            <div className="text-sm text-zinc-700">
              Expertin für Hautgesundheit. Fokus: entzündliche Dermatosen, Patientenaufklärung,
              evidenzbasierte Hautpflege.
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-zinc-700">
            Überprüft von: <strong>Hautsache Gesund Redaktion</strong> – Medizinisch-wissenschaftliche
            Redaktion.
          </p>
        </div>

        {/* Article Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline:
                "Atopische Dermatitis (Neurodermitis): Ursachen, Symptome & Behandlung",
              description:
                "Atopische Dermatitis (Neurodermitis) verständlich erklärt: Symptome, Auslöser, Pflege und leitlinienbasierte Therapien.",
              inLanguage: "de",
              author: { "@type": "Person", name: "Jennifer Krause" },
              publisher: {
                "@type": "Organization",
                name: "Hautwissen Kompakt",
              },
              dateModified: "2025-09-21",
              image: "https://www.hautwissen-kompakt.de/herobild_atopische_dermatitis.jpg",
              mainEntityOfPage:
                "https://www.hautwissen-kompakt.de/glossar/atopische-dermatitis",
            }),
          }}
        />
      </section>

      {/* Quellenverzeichnis */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            AWMF S3-Leitlinie Atopische Dermatitis (Version 4.3, 16.06.2023).{" "}
            <a
              href="https://register.awmf.org/de/leitlinien/detail/013-027"
              target="_blank"
              rel="nofollow noopener"
            >
              https://register.awmf.org/de/leitlinien/detail/013-027
            </a>
          </li>
          <li>
            AWMF-Register, Leitlinienreport/Download (07/2023).{" "}
            <a
              href="https://register.awmf.org/assets/guidelines/013-027e_S3_Atopische-Dermatitis-AD-Neurodermitis-atopisches-Ekzem_2023-07.pdf"
              target="_blank"
              rel="nofollow noopener"
            >
              PDF: 013-027e_S3_Atopische-Dermatitis_2023-07
            </a>
          </li>
          <li>
            AAAAI/ACAAI Joint Task Force Practice Parameter: Atopic Dermatitis Guidelines (2023).{" "}
            <a
              href="https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/JTF-Atopic-Dermatitis-Guideline-2023-07-31-2026.pdf"
              target="_blank"
              rel="nofollow noopener"
            >
              PDF
            </a>
          </li>
          <li>
            American Academy of Dermatology: Atopic dermatitis clinical guideline (Topical/Systemic
            Therapy, 2023–2024).{" "}
            <a
              href="https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis"
              target="_blank"
              rel="nofollow noopener"
            >
              https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis
            </a>
          </li>
          <li>
            EuroGuiDerm/EADV Living Guideline on Atopic Eczema (2025).{" "}
            <a
              href="https://onlinelibrary.wiley.com/doi/10.1111/jdv.20639"
              target="_blank"
              rel="nofollow noopener"
            >
              https://onlinelibrary.wiley.com/doi/10.1111/jdv.20639
            </a>
          </li>
          <li>
            National Eczema Association: Patient Fact Sheets.{" "}
            <a
              href="https://nationaleczema.org/eczema/patient-fact-sheets/"
              target="_blank"
              rel="nofollow noopener"
            >
              https://nationaleczema.org/eczema/patient-fact-sheets/
            </a>
          </li>
          <li>
            AAD Patienteninfos: Eczema types – Atopic dermatitis overview (10/2023).{" "}
            <a
              href="https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis"
              target="_blank"
              rel="nofollow noopener"
            >
              https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis
            </a>
          </li>
          <li>
            ASCIA Fast Facts: Eczema (Atopic Dermatitis) (2023).{" "}
            <a
              href="https://www.allergy.org.au/patients/fast-facts/eczema-atopic-dermatitis"
              target="_blank"
              rel="nofollow noopener"
            >
              https://www.allergy.org.au/patients/fast-facts/eczema-atopic-dermatitis
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
