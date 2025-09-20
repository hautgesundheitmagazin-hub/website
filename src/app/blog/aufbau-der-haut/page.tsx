// src/app/blog/aufbau-der-haut/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hautaufbau einfach erklärt: Schichten, Aufgaben & Pflege-Tipps – verständlich für Dich",
  description:
    "Wie ist die Haut aufgebaut? Lerne Epidermis, Dermis & Unterhaut kennen, warum die Hautbarriere wichtig ist und welche Pflege wirklich hilft.",
  alternates: {
    canonical: "https://www.hautwissen-kompakt.de/blog/aufbau-der-haut",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: "https://www.hautwissen-kompakt.de/blog/aufbau-der-haut",
    title:
      "Hautaufbau einfach erklärt: Schichten, Aufgaben & Pflege-Tipps – verständlich für Dich",
    description:
      "Die Haut besteht aus Epidermis, Dermis und Unterhaut. Verstehe die Hautbarriere, TEWL & pH – plus praktische Pflege-Tipps.",
    images: [
      {
        url: "/herobild_hautaufbau.jpg",
        width: 1600,
        height: 600,
        alt: "Illustration des Hautaufbaus mit Oberhaut, Lederhaut und Unterhaut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Hautaufbau einfach erklärt: Schichten, Aufgaben & Pflege-Tipps – verständlich für Dich",
    description:
      "Epidermis, Dermis & Unterhaut verstehen: So schützt Dich die Hautbarriere und so pflegst Du sie richtig.",
    images: ["/herobild_hautaufbau.jpg"],
  },
};

export default function Page() {
  const accent = "text-emerald-700";

  const author = {
    name: "Jennifer Krause",
    role: "Expertin für Hautgesundheit",
    image: "/autorenbild_jennifer.jpg",
  };

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
          Wie ist die Haut aufgebaut? Einfach erklärt
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          In diesem Guide lernst Du die drei Hautschichten kennen
          &ndash;&nbsp;Epidermis, Dermis und Unterhaut. Du verstehst, wie Deine
          Hautbarriere funktioniert, warum pH und Feuchtigkeit entscheidend
          sind und welche Pflege im Alltag wirklich hilft.
        </p>

        {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime="2025-09-20">20.09.2025</time>
          {" · "}Lesedauer:{" "}
          <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet="/herobild_hautaufbau.jpg" />
              <img
                src="/herobild_hautaufbau.jpg"
                alt="Grafik des Hautaufbaus: Oberhaut (Epidermis), Lederhaut (Dermis) und Unterhaut"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Die Haut besteht aus drei Schichten: Epidermis, Dermis, Unterhaut.
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
            Deine Haut besteht aus drei Schichten: <strong>Epidermis</strong>{" "}
            (Schutzschicht), <strong>Dermis</strong> („Polster“ mit Blutgefäßen,
            Nerven, Kollagen) und <strong>Unterhaut</strong> (Fettgewebe als
            Energiespeicher und Wärmeschutz). 
          </li>
          <li>
            Die <strong>Hautbarriere</strong> sitzt vor allem in der
            Hornschicht der Epidermis. Sie verhindert übermäßigen
            Wasserverlust&nbsp;(TEWL) und hält Reizstoffe &amp; Keime draußen. 
          </li>
          <li>
            Ein leicht <strong>saurer pH</strong> an der Oberfläche (ca. 4,5&ndash;5,5)
            unterstützt Barriere, Enzyme und das Hautmikrobiom. 
          </li>
          <li>
            <strong>Mikrobiom</strong>: gute Hautbakterien schützen Dich und
            interagieren eng mit Immunzellen der Haut. 
          </li>
          <li>
            Pflege-Quickwins: mild reinigen (pH-nah), regelmäßig sanft
            rückfetten und mit Feuchthaltemitteln (z.&nbsp;B. Glycerin) pflegen;
            UV-Schutz täglich. 
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
            <a className={`hover:underline ${accent} font-medium`} href="#was-ist-die-haut">
              Was ist die Haut &ndash; und wofür brauchen wir sie?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#schichten-im-ueberblick">
              Die drei Hautschichten im Überblick
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#epidermis-einfach-erklaert">
              Epidermis: Deine Schutzschicht &amp; Hautbarriere
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#dermis-federung-und-versorgung">
              Dermis: Federung, Durchblutung &amp; Nerven
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#unterhaut-energiespeicher">
              Unterhaut: Energiespeicher &amp; Wärmeschutz
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#barriere-tewl-ph">
              Hautbarriere, TEWL &amp; pH: Warum das Gleichgewicht zählt
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#mikrobiom-und-immunsystem">
              Mikrobiom &amp; Immunsystem der Haut
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#pflege-checkliste">
              Pflege-Checkliste: Was Deiner Haut gut tut
            </a>
          </li>
        </ol>
      </nav>

      {/* Hauptteil */}
      <section id="was-ist-die-haut">
        <h2 className="text-2xl font-bold mb-2">Was ist die Haut &ndash; und wofür brauchen wir sie?</h2>
        <p className="leading-relaxed">
          Deine Haut ist das größte Organ Deines Körpers. Sie schützt Dich vor
          Verletzungen, Keimen und UV-Strahlung, reguliert Temperatur, speichert
          Wasser und ermöglicht Dir Berührung, Druck, Wärme und Kälte zu fühlen.
          Sie ist außerdem an der Bildung von Vitamin&nbsp;D beteiligt. 
        </p>
      </section>

      <section id="schichten-im-ueberblick" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Die drei Hautschichten im Überblick</h2>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">1) Epidermis (Oberhaut)</h3>
            <p className="m-0">
              Dünne, aber hochaktive Schicht aus Hornzellen&nbsp;(Keratinozyten)
              mit mehreren Lagen. Ganz außen liegt die <em>Hornschicht</em>
              (Stratum corneum) als zentrale Barriere. 
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">2) Dermis (Lederhaut)</h3>
            <p className="m-0">
              Reißfestes Bindegewebe mit Kollagen- und Elastinfasern, reich an
              Blutgefäßen und Nerven. Versorgt die Epidermis und gibt Stabilität
              und Elastizität. 
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5 md:col-span-2">
            <h3 className="text-lg font-semibold mb-2">3) Unterhaut (Subkutis)</h3>
            <p className="m-0">
              Vor allem Fettgewebe als Energiespeicher und Wärmedämmung, schützt
              vor Stößen und verbindet die Haut locker mit darunterliegenden
              Strukturen. 
            </p>
          </div>
        </div>
      </section>

      <section id="epidermis-einfach-erklaert" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Epidermis: Deine Schutzschicht &amp; Hautbarriere</h2>
        <p>
          Die Epidermis besteht aus mehreren Zelllagen. Von innen nach außen
          reifen Keratinozyten heran, verhornen und werden zu einer flachen,
          dichten Hornschicht. Diese wirkt wie eine Mauer: „Ziegel“ sind die
          Hornzellen, „Mörtel“ sind Lipide (Fette) wie Ceramide. Zusammen
          bilden sie die Barriere. 
        </p>

        <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
          <strong className="block mb-2">Merke</strong>
          <ul className="list-disc ml-5 m-0">
            <li>Je intakter die Hornschicht, desto stabiler die Barriere.</li>
            <li>Zu aggressive Reinigung oder sehr trockene Luft stören das Gleichgewicht.</li>
          </ul>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Eine gesunde Hautbarriere ist wie eine gute Haustür: Sie lässt das
            Richtige hinein (Feuchtigkeit) und hält das Falsche draußen
            (Reizstoffe).“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Jennifer Krause, indirektes Zitat aus der Praxis
          </figcaption>
        </figure>
      </section>

      <section id="dermis-federung-und-versorgung" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Dermis: Federung, Durchblutung &amp; Nerven</h2>
        <p className="leading-relaxed">
          Die Dermis besteht aus einer <em>papillären</em> (feinfasrigen) und
          einer <em>retikulären</em> (derberen) Schicht. Kollagen sorgt für
          Zugfestigkeit, Elastin für Rückstellkraft. Blutgefäße versorgen die
          Haut, Nerven machen Berührung, Schmerz und Temperatur fühlbar. 
        </p>

        <div className="mt-4 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">
                  Struktur
                </th>
                <th className="text-left font-semibold p-3">
                  Aufgabe im Alltag
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Kollagen</td>
                <td className="p-3 text-zinc-700">
                  Stabilität, „Spanngurt“ der Haut
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Elastin</td>
                <td className="p-3 text-zinc-700">Elastizität, Rückfederung</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Blutgefäße</td>
                <td className="p-3 text-zinc-700">
                  Versorgung mit Nährstoffen, Thermoregulation
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Nervenenden</td>
                <td className="p-3 text-zinc-700">
                  Fühlen von Druck, Schmerz, Temperatur
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="unterhaut-energiespeicher" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Unterhaut: Energiespeicher &amp; Wärmeschutz</h2>
        <p>
          Die Unterhaut besteht überwiegend aus Fettzellen. Sie speichert
          Energie, isoliert gegen Kälte und polstert Knochen und Muskeln gegen
          Stöße ab. Außerdem erleichtert sie die Verschieblichkeit der darüber
          liegenden Hautschichten. 
        </p>
      </section>

      <section id="barriere-tewl-ph" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">
          Hautbarriere, TEWL &amp; pH: Warum das Gleichgewicht zählt
        </h2>

        <div className="grid md:grid-cols-[2fr_1fr] gap-5">
          <div>
            <p>
              <strong>Transepidermaler Wasserverlust (TEWL)</strong> beschreibt,
              wie viel Wasser passiv über die Hornschicht verdunstet. Ein
              erhöhter TEWL weist oft auf eine gestörte Barriere hin; ein
              niedriger TEWL auf eine intakte Barriere. 
            </p>
            <p>
              Der <strong>pH-Wert</strong> der Hautoberfläche ist leicht sauer
              (häufig etwa 4,5&ndash;5,5). Dieses „Säureschutzmantel“-Milieu
              unterstützt Barriere-Enzyme und hält das Mikrobiom im Gleichgewicht. 
            </p>
          </div>

          <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <h3 className="font-semibold mb-2">Praxis-Tipp</h3>
            <ul className="list-disc ml-5 m-0 text-sm">
              <li>Milde, pH-nahe Reiniger verwenden.</li>
              <li>
                Nach dem Waschen zügig mit Feuchtigkeit &amp; Lipiden pflegen.
              </li>
              <li>Raue Heizungsluft ausgleichen (Raumluft befeuchten).</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="mikrobiom-und-immunsystem" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Mikrobiom &amp; Immunsystem der Haut</h2>
        <p className="leading-relaxed">
          Auf Deiner Haut leben Billionen Mikroorganismen. Viele davon sind
          nützlich: Sie konkurrieren mit Krankheitserregern, trainieren das
          Immunsystem und helfen, die Barriere stabil zu halten. Veränderungen
          im Mikrobiom gehen mit Hautzuständen wie Neurodermitis und Rosazea
          einher. 
        </p>
        <p className="leading-relaxed">
          Das Hautimmunsystem sitzt nicht nur „darunter“, sondern mitten in der
          Haut: In der Epidermis patrouillieren Langerhans-Zellen, in der Dermis
          finden sich weitere Immunzellen sowie Blut- und Lymphgefäße. 
        </p>
      </section>

      <section id="pflege-checkliste" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Pflege-Checkliste: Was Deiner Haut gut tut</h2>

        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="grid md:grid-cols-[1fr_2fr] gap-5 items-start">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <h3 className="font-semibold mb-2">Morgens</h3>
              <ul className="list-disc ml-5 m-0 text-sm">
                <li>Sanfte Reinigung, pH-nah.</li>
                <li>Leichtes Feuchtigkeitsserum (z.&nbsp;B. Glycerin).</li>
                <li>UV-Schutz (täglich, ganzjährig).</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <h3 className="font-semibold mb-2">Abends</h3>
              <ul className="list-disc ml-5 m-0 text-sm">
                <li>Make-up &amp; Schmutz gründlich, aber mild entfernen.</li>
                <li>
                  Rückfetten mit Ceramiden &amp; pflanzlichen Ölen zur
                  Barrierepflege.
                </li>
                <li>Optional: sanfte Wirkstoffe nach Hautziel.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Wie dick ist die Haut an verschiedenen Körperstellen?
            </h3>
            <p>
              Die Epidermis ist je nach Region unterschiedlich dick. Handflächen
              und Fußsohlen haben eine besonders dicke Hornschicht, Gesicht und
              Augenlider sind deutlich dünner. 
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Was bedeutet TEWL genau?</h3>
            <p>
              TEWL steht für transepidermalen Wasserverlust. Er misst, wie viel
              Wasser über die Hornschicht verdunstet und ist ein objektiver
              Hinweis auf die Barrierefunktion. 
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Welcher pH-Wert ist für die Hautoberfläche typisch?
            </h3>
            <p>
              Meist liegt der pH zwischen etwa 4,5 und 5,5. Dieses saure Milieu
              unterstützt Enzyme der Barriere und das Gleichgewicht des
              Mikrobioms. 
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Was ist der Unterschied zwischen Dermis und Epidermis?
            </h3>
            <p>
              Die Epidermis ist die äußere Schutzschicht ohne Blutgefäße; die
              Dermis darunter ist gut durchblutet, enthält Kollagen, Elastin,
              Nerven und versorgt die Epidermis. 
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wie beeinflusst das Mikrobiom die Hautgesundheit?
            </h3>
            <p>
              Nützliche Bakterien stärken die Barriere, konkurrieren mit
              Erregern und interagieren eng mit Immunzellen. Dysbiosen werden
              bei z.&nbsp;B. Neurodermitis beobachtet. 
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
                  name: "Wie dick ist die Haut an verschiedenen Körperstellen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Die Epidermis ist je nach Region unterschiedlich dick. Handflächen und Fußsohlen haben eine besonders dicke Hornschicht, Gesicht und Augenlider sind deutlich dünner.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was bedeutet TEWL genau?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "TEWL steht für transepidermalen Wasserverlust. Er misst, wie viel Wasser über die Hornschicht verdunstet und ist ein objektiver Hinweis auf die Barrierefunktion.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welcher pH-Wert ist für die Hautoberfläche typisch?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Meist liegt der pH zwischen etwa 4,5 und 5,5. Dieses saure Milieu unterstützt Enzyme der Barriere und das Gleichgewicht des Mikrobioms.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was ist der Unterschied zwischen Dermis und Epidermis?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Die Epidermis ist die äußere Schutzschicht ohne Blutgefäße; die Dermis darunter ist gut durchblutet, enthält Kollagen, Elastin, Nerven und versorgt die Epidermis.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie beeinflusst das Mikrobiom die Hautgesundheit?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Nützliche Bakterien stärken die Barriere, konkurrieren mit Erregern und interagieren eng mit Immunzellen. Dysbiosen werden bei z.&nbsp;B. Neurodermitis beobachtet.",
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
          <strong>Wie ist die Haut aufgebaut?</strong> Aus drei Schichten:
          Epidermis, Dermis und Unterhaut arbeiten wie ein Team. Eine stabile
          Hornschicht reduziert TEWL, ein leicht saurer pH unterstützt Enzyme
          und Mikrobiom. Mit milder Reinigung, Feuchtigkeit, Lipiden und
          täglichem UV-Schutz hilfst Du Deiner Haut, stark zu bleiben.
        </p>
      </section>

      {/* Call to Action Section – exakt wie Vorlage, per dangerouslySetInnerHTML eingebunden */}
      <div
        className="mt-14"
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


  #sib-container textarea::placeholder {
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
<!--  END - We recommend to place the above code in head tag of your website html -->


<!-- START - We recommend to place the below code where you want the form in your website html  -->
<div class="sib-form" style="text-align: center;
         background-color: #EFF2F7;                                 ">
  <div id="sib-form-container" class="sib-form-container">
    <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
        </svg>
        <span class="sib-form-message-panel__inner-text">
                          Deine Anmeldung konnte nicht gespeichert werden. Bitte versuche es erneut.
                      </span>
      </div>
    </div>
    <div></div>
    <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66;max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
        </svg>
        <span class="sib-form-message-panel__inner-text">
                          Deine Anmeldung war erfolgreich.
                      </span>
      </div>
    </div>
    <div></div>
    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:3px; border-width:1px; border-color:#C0CCD9; border-style:solid; direction:ltr">
      <form id="sib-form" method="POST" action="https://58a8e982.sibforms.com/serve/MUIFAAu67dU7m7jHkJHnSYjaQM-Go-LEt6pCHEcflaDv_K8hQQ8emSwcEz4jEEv6iGtpPoUX2wkdM0SHScgPCHivxNEwC_pzg3wni0Rlub0NvwGHjxUEG_icVa5-RMnJcLfkCunQzIVbN6_LC3ITRul-gVn212JWZgJr8uYXi-ecIAaLwdUEZ4yOwHMcjvOQ5zveRzRGkMnD9UIo" data-type="subscription">
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="font-size:20px; text-align:left; font-weight:700; font-family:Helvetica, sans-serif; color:#090a0a; background-color:transparent; text-align:left">
            <p>10 studienbasierte Tipps bei Neurodermitis direkt in deinem Postfach.</p>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#3C4858; background-color:transparent; text-align:left">
            <div class="sib-text-form-block">
              <p>Der neueste Report unserer Redaktion, kostenlos für Dich.</p>
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
      </form>
    </div>
  </div>
</div>
<!-- END - We recommend to place the above code where you want the form in your website html  -->


<!-- START - We recommend to place the below code in footer or bottom of your website html  -->
<script>
  window.REQUIRED_CODE_ERROR_MESSAGE = 'Wähle bitte einen Ländervorwahl aus.';
  window.LOCALE = 'de';
  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";


  window.REQUIRED_ERROR_MESSAGE = "Dieses Feld darf nicht leer sein. ";


  window.GENERIC_INVALID_MESSAGE = "Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";


  window.translation = {
    common: {
      selectedList: '{quantity} Liste ausgewählt',
      selectedLists: '{quantity} Listen ausgewählt',
      selectedOption: '{quantity} ausgewählt',
      selectedOptions: '{quantity} ausgewählt',
    }
  };


  var AUTOHIDE = Boolean(0);
</script>


<script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>



<!-- END - We recommend to place the above code in footer or bottom of your website html  -->
<!-- End Brevo Form -->`,
        }}
      />

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar - Die wichtigsten Begriffe zu Hautaufbau
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
                <td className="p-3 font-medium text-zinc-900">Epidermis</td>
                <td className="p-3 text-zinc-700">
                  Äußerste Hautschicht; bildet die Barriere gegen Umwelt und
                  Wasserverlust.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Dermis</td>
                <td className="p-3 text-zinc-700">
                  Bindegewebige Schicht mit Kollagen, Elastin, Gefäßen und
                  Nerven; gibt Stabilität und Gefühl.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Unterhaut</td>
                <td className="p-3 text-zinc-700">
                  Fettgewebe als Puffer, Wärmeschutz und Energiespeicher.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Hautbarriere</td>
                <td className="p-3 text-zinc-700">
                  Schutzfunktion der Hornschicht aus Hornzellen und Lipiden.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">TEWL</td>
                <td className="p-3 text-zinc-700">
                  Transepidermaler Wasserverlust; Verdunstung von Wasser über
                  die Haut.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Säureschutzmantel</td>
                <td className="p-3 text-zinc-700">
                  Leicht saurer pH der Hautoberfläche, wichtig für Barriere und
                  Mikrobiom.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Mikrobiom</td>
                <td className="p-3 text-zinc-700">
                  Gesamtheit der Mikroorganismen auf der Haut, die uns
                  schützen.
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
            alt="Autorin"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-semibold">Jennifer Krause</div>
            <div className="text-sm text-zinc-700">
              Expertin für Hautgesundheit &ndash; Schwerpunkte: Hautbarriere,
              Mikrobiom, neurodermitische Haut
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-zinc-700">
            Überprüft von: <strong>Hautsache Gesund Redaktion</strong> – Medizinisch-wissenschaftliche Redaktion.
          </p>
        </div>
      </section>

      {/* Quellenverzeichnis */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            DermNet NZ: The structure of normal skin &ndash; https://dermnetnz.org/topics/the-structure-of-normal-skin
          </li>
          <li>
            StatPearls/NCBI Bookshelf: Anatomy, Skin (Integument), Epidermis &ndash; https://www.ncbi.nlm.nih.gov/books/NBK470464/
          </li>
          <li>
            Green M. et&nbsp;al. Transepidermal water loss: environment and measurement. &ndash; https://pmc.ncbi.nlm.nih.gov/articles/PMC9168018/
          </li>
          <li>
            Brooks S.G. et&nbsp;al. The Skin Acid Mantle: An Update on Skin pH. &ndash; https://pubmed.ncbi.nlm.nih.gov/39243251/
          </li>
          <li>
            Scharschmidt T.C. et&nbsp;al. Skin microbiome and dermatologic disorders. &ndash; https://www.jci.org/articles/view/184315
          </li>
          <li>
            DermNet NZ: Skin immune system &ndash; https://dermnetnz.org/topics/skin-immune-system
          </li>
          <li>
            Verywell Health: The Anatomy of the Skin &ndash; https://www.verywellhealth.com/skin-anatomy-4774706
          </li>
        </ul>
      </section>

      {/* Article Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            inLanguage: "de",
            headline:
              "Hautaufbau einfach erklärt: Schichten, Aufgaben & Pflege-Tipps",
            description:
              "Wie ist die Haut aufgebaut? Lerne Epidermis, Dermis & Unterhaut kennen, warum die Hautbarriere wichtig ist und welche Pflege hilft.",
            image: [
              {
                "@type": "ImageObject",
                url: "https://www.hautwissen-kompakt.de/herobild_hautaufbau.jpg",
                width: 1600,
                height: 600,
              },
            ],
            author: {
              "@type": "Person",
              name: "Jennifer Krause",
            },
            publisher: {
              "@type": "Organization",
              name: "Hautwissen Kompakt",
            },
            datePublished: "2025-09-20",
            dateModified: "2025-09-20",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.hautwissen-kompakt.de/blog/aufbau-der-haut",
            },
          }),
        }}
      />
    </article>
  );
}
