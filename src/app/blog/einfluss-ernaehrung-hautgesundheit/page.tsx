// src/app/blog/einfluss-ernaehrung-hautgesundheit/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Ernährung & Hautgesundheit: So wirkt deine Ernährung auf die Haut – einfach erklärt",
  description:
    "Wie beeinflusst Ernährung dein Hautbild? Verständlicher Guide zu Akne, Ekzemen, Falten, Nährstoffen und dem Darm-Haut-Achse-Effekt – mit alltagstauglichen Tipps.",
  alternates: {
    canonical:
      "https://www.hautwissen-kompakt.de/blog/einfluss-ernaehrung-hautgesundheit",
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url:
      "https://www.hautwissen-kompakt.de/blog/einfluss-ernaehrung-hautgesundheit",
    siteName: "Hautwissen Kompakt",
    title:
      "Ernährung & Hautgesundheit: So wirkt deine Ernährung auf die Haut – einfach erklärt",
    description:
      "Die wichtigsten Zusammenhänge zwischen Essen und Hautbild. Evidenzbasiert, verständlich und direkt umsetzbar.",
    images: [
      {
        url: "/herobild_ernaehrung_hautgesundheit.jpg",
        width: 1600,
        height: 600,
        alt:
          "Frische, bunte Lebensmittel auf einem Holztisch, Symbol für Ernährung und gesunde Haut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ernährung & Hautgesundheit: So wirkt deine Ernährung auf die Haut – einfach erklärt",
    description:
      "Von Akne bis Anti-Aging. Was wirklich hilft, was nicht – mit Studien und praktischen Ess-Regeln.",
    images: ["/herobild_ernaehrung_hautgesundheit.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
      itemScope
      itemType="https://schema.org/Article"
    >
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
          Einfluss der Ernährung auf die Hautgesundheit – einfach erklärt
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Du willst ein ruhigeres Hautbild, weniger Entzündungen und einen
          frischen Glow. Hier erfährst du verständlich, wie Ernährung auf Akne,
          Ekzeme, Falten und die Hautbarriere wirkt – inklusive unkomplizierter
          Ess-Regeln für deinen Alltag.
        </p>

        {/* Datum & Lesedauer separat in eigener Zeile */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime="2025-09-20">20.09</time>
          {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/herobild_ernaehrung_hautgesundheit.jpg"
              />
              <img
                loading="eager"
                fetchPriority="high"
                src="/herobild_ernaehrung_hautgesundheit.jpg"
                alt="Frische, bunte Lebensmittel symbolisieren den Zusammenhang von Ernährung und Hautgesundheit"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Nährstoffreiche Ernährung unterstützt die Hautbarriere
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
        <h2 className="text-lg font-semibold mb-3">
          Das Wichtigste auf einen Blick
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-zinc-800">
          <li>
            Hohe Blutzuckerspitzen belasten die Haut.{" "}
            <strong>Low-Glycemic</strong> essen kann Unreinheiten beruhigen und
            Entzündungen dämpfen.
          </li>
          <li>
            <strong>Omega-3</strong> aus fettem Fisch, Walnüssen und Algenöl
            wirkt entzündungshemmend und unterstützt die Hautbarriere.
          </li>
          <li>
            Eine <strong>pflanzenbetonte Ernährung</strong> liefert Antioxidantien,
            Ballaststoffe und Polyphenole – gut für Darmflora und Glow.
          </li>
          <li>
            Milchprodukte und stark verarbeitete Produkte können einzelne
            Hautprobleme triggern. Teste individuell und beobachte dein Hauttagebuch.
          </li>
          <li>
            Hautpflege ist wichtig, aber ohne passende Ernährung bleibt Potenzial
            liegen. Ernährung &amp; Pflege gehören zusammen.
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
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#was-passiert-in-der-haut"
            >
              Was passiert in der Haut und warum spielt Essen eine Rolle?
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#low-gi-gegen-unreinheiten"
            >
              Low-Glycemic essen gegen Unreinheiten
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#omega3-barriere"
            >
              Omega-3 &amp; Hautbarriere bei Ekzemen
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#pflanzenbetont-anti-aging"
            >
              Pflanzenbetont essen &amp; Anti-Aging Effekte
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#milch-ultraverarbeitet"
            >
              Milch, Zucker, ultra-verarbeitete Produkte – was ist dran?
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#praxis-7-regeln"
            >
              Praxis: 7 einfache Ess-Regeln für gesunde Haut
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#faq"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#zusammenfassung"
            >
              Kurzfazit
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#mini-glossar"
            >
              Mini-Glossar
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#eeat"
            >
              Über den Autor
            </a>
          </li>
        </ol>
      </nav>

      {/* Hauptteil */}

      <section id="was-passiert-in-der-haut">
        <h2 className="text-2xl font-bold mb-3">
          Was passiert in der Haut und warum spielt Essen eine Rolle?
        </h2>
        <p className="leading-relaxed">
          Deine Haut ist ein aktives Organ mit eigener Immunabwehr,
          Blutversorgung und Barriere. Ernährung beeinflusst diese Systeme
          täglich. Drei Wege sind für dich entscheidend; erstens der{" "}
          <strong>Blutzucker- und Insulinpfad</strong>, der Entzündungen
          antreiben kann. Zweitens die <strong>Fettsäure-Zusammensetzung</strong>{" "}
          deiner Ernährung, die Entzündungsbotenstoffe moduliert und die
          Hautbarriere mit Lipiden versorgt. Drittens die{" "}
          <strong>Darm-Haut-Achse</strong>; Ballaststoffe und Polyphenole
          nähren deine Darmflora und können systemische Entzündungen
          runterregeln. Das Resultat; ein ruhigeres Hautbild, weniger
          Trockenheit und ein gleichmäßigerer Teint.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Blutzucker &amp; IGF-1</h3>
            <p className="text-zinc-700">
              Hohe glykämische Last erhöht Insulin und IGF-1. Das fördert Talg,
              Keratinozytenwachstum und Entzündung – Faktoren, die zu Pickeln
              beitragen können.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Fettsäuren-Balance</h3>
            <p className="text-zinc-700">
              Mehr Omega-3 und ein gutes Verhältnis zu Omega-6 kann entzündliche
              Signale dämpfen und die Hautbarriere stärken.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Darm-Haut-Achse</h3>
            <p className="text-zinc-700">
              Ballaststoffe, Fermente und Polyphenole fördern ein vielfältiges
              Mikrobiom. Das wirkt sich positiv auf Immunsystem und Haut aus.
            </p>
          </div>
        </div>
      </section>

      <section id="low-gi-gegen-unreinheiten" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Low-Glycemic essen gegen Unreinheiten; was zeigt die Evidenz?
        </h2>
        <p>
          Studien deuten darauf hin, dass eine Ernährung mit niedriger
          glykämischer Last (Low-Glycemic) Entzündungssignale und IGF-1 senken
          kann. Für viele bedeutet das; weniger Papeln und Pusteln. Praktisch
          erreichst du das mit Vollkorn, Hülsenfrüchten, Gemüse, Obst im
          Ganzen und Eiweiß zu jeder Mahlzeit.
        </p>

        <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="m-0">
            <strong>Merke</strong>; Je weniger schnelle Zucker und Weißmehl,
            desto stabiler bleibt dein Blutzucker – gut für dein Hautbild.
          </p>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            Eine dauerhaft niedrigere glykämische Last ist einer der
            alltagstauglichsten Hebel für ein ruhigeres Hautbild.
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Indirektes Resümee aktueller Reviews und randomisierter Studien
          </figcaption>
        </figure>

        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">Besser</th>
                <th className="text-left font-semibold p-3">Eher seltener</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 text-zinc-700">
                  Vollkornbrot, Hafer, Quinoa, Linsen, Kichererbsen
                </td>
                <td className="p-3 text-zinc-700">
                  Weißbrot, süße Frühstücksflakes, Zuckergetränke
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 text-zinc-700">
                  Gemüse, Obst im Ganzen, Nüsse
                </td>
                <td className="p-3 text-zinc-700">
                  Süßwaren, Gebäck, stark verarbeitete Snacks
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 text-zinc-700">
                  Fisch, Eier, Joghurt natur, Tofu
                </td>
                <td className="p-3 text-zinc-700">
                  Zuckerreiche Drinks, XXL-Portionen, Alkohol in großen Mengen
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="omega3-barriere" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Omega-3 &amp; Hautbarriere bei Ekzemen; was ist realistisch?
        </h2>
        <p className="leading-relaxed">
          Bei Neurodermitis ist die Hautbarriere häufig geschwächt. Omega-3
          Fettsäuren können entzündungshemmende Mediatoren fördern. Einige
          Studien berichten über weniger Juckreiz und geringere Schweregrade,
          andere finden keine deutliche Wirkung. Realistisch ist; eine gute
          Grundversorgung mit Omega-3 über Ernährung, ggf. ergänzt nach
          ärztlicher Rücksprache, kann Teil eines multimodalen Managements sein.
        </p>

        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Quellen im Alltag</h3>
            <ul className="list-disc ml-5">
              <li>Fetter Seefisch; Lachs, Makrele, Hering</li>
              <li>
                Pflanzlich; Walnüsse, Leinsamen, Chiasamen, Algenöl
              </li>
              <li>
                Praktisch; 2 bis 3 Fischmahlzeiten pro Woche oder
                Algenöl-Kapseln nach ärztlicher Rücksprache
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Worauf du achten solltest</h3>
            <ul className="list-disc ml-5">
              <li>Gesamternährung zählt mehr als Einzel-Supplements</li>
              <li>
                Bei Allergien oder Erkrankungen bitte ärztlich abklären
              </li>
              <li>
                Erwartungsmanagement; Wirkung kann individuell variieren
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="pflanzenbetont-anti-aging" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Pflanzenbetont essen &amp; Anti-Aging; Antioxidantien, Polyphenole,
          Ballaststoffe
        </h2>
        <p className="leading-relaxed">
          Eine überwiegend pflanzliche, mediterran geprägte Ernährung liefert
          viele Antioxidantien und Polyphenole. Sie schützen Kollagenstrukturen
          vor oxidativem Stress, unterstützen die Durchfeuchtung und wirken
          entzündungshemmend. Gleichzeitig füttern Ballaststoffe dein Mikrobiom
          und stabilisieren die Darm-Haut-Achse. Das Ergebnis ist nicht nur
          gesund, sondern sieht man oft auch am Teint.
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="m-0">
            <strong>Tipp</strong>; Iss bunt nach dem Motto Regenbogen. Je
            mehr Farben auf dem Teller, desto breiter dein Schutz durch
            sekundäre Pflanzenstoffe.
          </p>
        </div>
      </section>

      <section id="milch-ultraverarbeitet" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Milch, Zucker, ultra-verarbeitete Produkte – was ist dran an den
          Mythen&quest;
        </h2>
        <div className="space-y-4">
          <p>
            Milchprodukte können bei manchen Menschen das Hautbild beeinflussen,
            vermutlich über IGF-1 oder bestimmte Proteinfraktionen. Das ist
            individuell. Wenn du einen Verdacht hast, teste für 3 bis 4 Wochen
            einen strukturierten Verzicht mit Ernährungstagebuch und achte auf
            Nährstoffersatz, zum Beispiel kalziumreiche Alternativen.
          </p>
          <p>
            Stark verarbeitete Produkte enthalten oft viel Zucker, raffinierte
            Stärke, gesättigte Fette, Zusatzstoffe und wenig Ballaststoffe. Diese
            Mischung begünstigt Entzündungen, Heißhunger und Nährstofflücken –
            gleich drei schlechte Nachrichten für die Haut.
          </p>
          <div className="overflow-hidden rounded-2xl border border-zinc-200">
            <table className="w-full text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="text-left font-semibold p-3 w-64">
                    Lebensmittelgruppe
                  </th>
                  <th className="text-left font-semibold p-3">
                    Möglicher Haupteffekt auf die Haut
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 text-zinc-700">
                    Süßgetränke, Weißmehl, Süßwaren
                  </td>
                  <td className="p-3 text-zinc-700">
                    Hohe glykämische Last, mehr IGF-1, Entzündungen
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 text-zinc-700">
                    Fetter Seefisch, Walnüsse, Algenöl
                  </td>
                  <td className="p-3 text-zinc-700">
                    Mehr Omega-3, entzündungshemmend, Barriere-Support
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 text-zinc-700">
                    Vollkorn, Hülsenfrüchte, Gemüse, Beeren
                  </td>
                  <td className="p-3 text-zinc-700">
                    Ballaststoffe, Polyphenole, Antioxidantien – Darm-Haut-Achse
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="praxis-7-regeln" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Praxis; 7 einfache Ess-Regeln für gesunde Haut
        </h2>
        <ol className="list-decimal ml-5 space-y-2">
          <li>
            Baue pro Mahlzeit eine eiweißreiche Komponente ein; Joghurt
            natur, Hüttenkäse, Tofu, Fisch, Eier oder Hülsenfrüchte.
          </li>
          <li>
            Wähle komplexe Kohlenhydrate; Vollkorn, Quinoa, Buchweizen,
            Linsen, Kichererbsen.
          </li>
          <li>
            Iss 2 bis 3 Mal pro Woche fetten Fisch oder nutze Algenöl als
            pflanzliche EPA&amp;DHA Quelle.
          </li>
          <li>
            Fülle die Hälfte deines Tellers mit Gemüse und etwas Obst im Ganzen.
          </li>
          <li>
            Reduziere Süßgetränke und Süßwaren deutlich. Trinke Wasser, ungesüßten
            Tee oder infused Water.
          </li>
          <li>
            Achte auf gesunde Fette; Olivenöl, Nüsse, Saaten. Spare bei
            hoch erhitzten, stark verarbeiteten Fetten.
          </li>
          <li>
            Nutze ein hautfreundliches Tagesmuster; regelmäßige Mahlzeiten,
            ausreichend Schlaf, moderater Stress – dein Hormonhaushalt dankt es
            dir.
          </li>
        </ol>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Hilft Low-Glycemic Ernährung wirklich bei Akne&quest;
            </h3>
            <p>
              Viele Menschen berichten über weniger Entzündungen und Pickel,
              wenn sie Blutzuckerspitzen vermeiden. Studien zeigen Verbesserungen
              bei glykämischer Kontrolle und teils auch im Hautbild. Es lohnt
              sich für 8 bis 12 Wochen konsequent zu testen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Soll ich Milch komplett streichen&quest;
            </h3>
            <p>
              Nicht zwingend. Wenn du einen Verdacht hast, probiere einen
              zeitlich begrenzten, strukturierten Verzicht mit Tagebuch. Achte
              dabei auf Kalzium- und Protein-Ersatz. Wenn keine Veränderung
              sichtbar ist, musst du Milch nicht meiden.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Bringt Omega-3 als Supplement etwas bei Neurodermitis&quest;
            </h3>
            <p>
              Die Evidenz ist gemischt. Eine gute Basisversorgung über die
              Ernährung ist sinnvoll. Supplemente können im Einzelfall helfen –
              bitte mit Dermatologin oder Arzt abstimmen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Welche Vitamine sind für die Haut besonders wichtig&quest;
            </h3>
            <p>
              A, C, E, D und B-Vitamine sowie Zink, Selen und Eisen spielen eine
              Rolle. Konzentriere dich auf eine bunte, pflanzenbetonte Kost mit
              hochwertigen Eiweißquellen statt auf Einzelpillen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wie schnell sehe ich Effekte auf der Haut&quest;
            </h3>
            <p>
              Hautzyklen dauern etwa 4 bis 6 Wochen. Rechne in 8 bis 12 Wochen
              mit klareren Trends, wenn du dein Essverhalten wirklich veränderst.
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
                  name: "Hilft Low-Glycemic Ernährung wirklich bei Akne?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Viele Menschen berichten über weniger Entzündungen und Pickel, wenn sie Blutzuckerspitzen vermeiden. Studien zeigen Verbesserungen bei glykämischer Kontrolle und teils auch im Hautbild. Es lohnt sich für 8 bis 12 Wochen konsequent zu testen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Soll ich Milch komplett streichen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Nicht zwingend. Probiere einen strukturierten, zeitlich begrenzten Verzicht mit Tagebuch und sorge für Nährstoff-Ersatz. Wenn nichts passiert, musst du Milch nicht meiden.",
                  },
                },
                {
                  "@type": "Question",
                  name:
                    "Bringt Omega-3 als Supplement etwas bei Neurodermitis?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Die Evidenz ist gemischt. Eine gute Basisversorgung über die Ernährung ist sinnvoll. Supplemente können im Einzelfall helfen – bitte ärztlich abklären.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Vitamine sind für die Haut besonders wichtig?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "A, C, E, D und B-Vitamine sowie Zink, Selen und Eisen. Fokus auf eine bunte, pflanzenbetonte Kost statt Einzelpillen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie schnell sehe ich Effekte auf der Haut?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Hautzyklen dauern 4 bis 6 Wochen. Nach 8 bis 12 Wochen zeigen sich meist klare Trends, wenn du dein Essverhalten wirklich veränderst.",
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
          <strong>
            Wie groß ist der Einfluss der Ernährung auf deine Haut
            wirklich&quest;
          </strong>{" "}
          Spürbar – besonders bei Entzündungen und der Barrierefunktion. Eine
          Low-Glycemic, pflanzenbetonte Ernährung mit ausreichend Omega-3,
          wenig ultra-verarbeiteten Produkten und guter Eiweißversorgung ist
          der pragmatischste Weg zu einem ruhigeren, strahlenderen Hautbild.
        </p>
      </section>

      {/* Call to Action Section – unverändert eingefügt */}
      <section className="mt-14">
        <div
          className="rounded-2xl border border-zinc-200 overflow-hidden"
          aria-label="Newsletter-Anmeldung"
        >
          <iframe
            title="Brevo Form Newsletter"
            srcDoc={`<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1" />
</head>
<body>
<!-- Begin Brevo Form -->
<style>
  @font-face { font-display: block; font-family: Roboto; src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff") }
  @font-face { font-display: fallback; font-family: Roboto; font-weight: 600; src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff") }
  @font-face { font-display: fallback; font-family: Roboto; font-weight: 700; src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff") }
  body { margin: 0; }
</style>
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
<div class="sib-form" style="text-align: center; background-color: #EFF2F7;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:#fff; max-width:540px; border-radius:3px; border-width:1px; border-color:#C0CCD9; border-style:solid; direction:ltr; margin-left:auto; margin-right:auto;">
      <form id="sib-form" method="POST" action="https://58a8e982.sibforms.com/serve/MUIFAAu67dU7m7jHkJHnSYjaQM-Go-LEt6pCHEcflaDv_K8hQQ8emSwcEz4jEEv6iGtpPoUX2wkdM0SHScgPCHivxNEwC_pzg3wni0Rlub0NvwGHjxUEG_icVa5-RMnJcLfkCunQzIVbN6_LC3ITRul-gVn212JWZgJr8uYXi-ecIAaLwdUEZ4yOwHMcjvOQ5zveRzRGkMnD9UIo" data-type="subscription">
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="font-size:20px; text-align:left; font-weight:700; font-family:Helvetica, sans-serif; color:#090a0a;">
            <p>10 sofort umsetzbare Neurodermitis-Tipps.</p>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#3C4858;">
            <div class="sib-text-form-block">
              <p>Unsere Redaktion hat die drei neuesten Studien analysiert und für Dich in einfache Tipps heruntergebrochen.</p>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; font-family:Helvetica, sans-serif; color:#3c4858;" for="EMAIL" data-required="*">Wohin dürfen wir Dir die 10 Tipps schicken&quest;</label>
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
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; font-weight:700; font-family:Helvetica, sans-serif; color:#FFFFFF; background-color:#28a392; border-radius:3px; border-width:0px;" form="sib-form" type="submit">
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
<script>
  window.REQUIRED_CODE_ERROR_MESSAGE = 'Wähle bitte einen Ländervorwahl aus.';
  window.LOCALE = 'de';
  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";
  window.REQUIRED_ERROR_MESSAGE = "Dieses Feld darf nicht leer sein. ";
  window.GENERIC_INVALID_MESSAGE = "Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";
  window.translation = { common: { selectedList: '{quantity} Liste ausgewählt', selectedLists: '{quantity} Listen ausgewählt', selectedOption: '{quantity} ausgewählt', selectedOptions: '{quantity} ausgewählt' } };
  var AUTOHIDE = Boolean(0);
</script>
<script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>
<!-- End Brevo Form -->
</body>
</html>`}
            className="w-full"
            style={{ height: 720, border: "0" }}
          />
        </div>
      </section>

      {/* Mini-Glossar */}
      <section id="mini-glossar" className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar – Die wichtigsten Begriffe zu Ernährung und Haut
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
                <td className="p-3 font-medium text-zinc-900">
                  Glykämischer Index &amp; Last
                </td>
                <td className="p-3 text-zinc-700">
                  Maß dafür, wie stark ein Lebensmittel den Blutzucker anhebt
                  und damit Insulin und IGF-1 beeinflusst.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">IGF-1</td>
                <td className="p-3 text-zinc-700">
                  Insulinähnlicher Wachstumsfaktor 1. Hängt mit Talgproduktion
                  und Zellwachstum zusammen und kann Akne beeinflussen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Omega-3</td>
                <td className="p-3 text-zinc-700">
                  Gruppe mehrfach ungesättigter Fettsäuren mit
                  entzündungshemmenden Eigenschaften, z. B. EPA und DHA.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Polyphenole
                </td>
                <td className="p-3 text-zinc-700">
                  Pflanzliche Schutzstoffe, die freie Radikale neutralisieren
                  und Entzündungen dämpfen können.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Darm-Haut-Achse
                </td>
                <td className="p-3 text-zinc-700">
                  Wechselwirkung zwischen Darmflora und Haut über Immun- und
                  Entzündungswege.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* E-E-A-T */}
      <section id="eeat" className="mt-14">
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
              Expertin für Hautgesundheit. Schwerpunkte; Akne, Ekzem,
              Hautbarriere, Ernährung.
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-zinc-700">
            Überprüft von;{" "}
            <strong>Hautsache Gesund Redaktion</strong> – Medizinisch-wissenschaftliche
            Qualitätssicherung.
          </p>
        </div>
      </section>

      {/* Quellenverzeichnis */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            Ahmed IA et&nbsp;al. Diet and skin health; The good and the bad.
            Nutrition. 2024.{" "}
            <a
              href="https://www.sciencedirect.com/science/article/abs/pii/S0899900723003787"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.sciencedirect.com/science/article/abs/pii/S0899900723003787
            </a>
          </li>
          <li>
            Smith RN et&nbsp;al. A low-glycemic-load diet improves symptoms in
            acne vulgaris patients. Am J Clin Nutr. 2007.{" "}
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/17616769/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pubmed.ncbi.nlm.nih.gov/17616769/
            </a>
          </li>
          <li>
            Assaf S et&nbsp;al. Nutritional Dermatology; Optimizing Dietary
            Choices for Skin Health. 2024.{" "}
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11723311/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pmc.ncbi.nlm.nih.gov/articles/PMC11723311/
            </a>
          </li>
          <li>
            Niseteo T et&nbsp;al. Effect of Omega-3 Polyunsaturated Fatty Acid
            Supplementation on Atopic Dermatitis in Children. 2024.{" "}
            <a
              href="https://www.mdpi.com/2072-6643/16/17/2829"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.mdpi.com/2072-6643/16/17/2829
            </a>
          </li>
          <li>
            Min M et&nbsp;al. The Influence of a Plant-Based Diet on Skin Health.
            2024.{" "}
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11595876/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pmc.ncbi.nlm.nih.gov/articles/PMC11595876/
            </a>
          </li>
          <li>
            Meixiong J et&nbsp;al. Diet and acne; A systematic review. JAAD
            International. 2022.{" "}
            <a
              href="https://www.jaadinternational.org/article/S2666-3287(22)00028-1/fulltext"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.jaadinternational.org/article/S2666-3287(22)00028-1/fulltext
            </a>
          </li>
        </ul>
      </section>

      {/* Article Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Einfluss der Ernährung auf die Hautgesundheit – einfach erklärt",
            inLanguage: "de",
            description:
              "Wie Ernährung Akne, Ekzeme, Falten und die Hautbarriere beeinflusst – verständlich erklärt mit Studien und Ess-Regeln.",
            image: [
              "https://www.hautwissen-kompakt.de/herobild_ernaehrung_hautgesundheit.jpg",
            ],
            datePublished: "2025-09-20",
            dateModified: "2025-09-20",
            author: {
              "@type": "Person",
              name: "Jennifer Krause",
            },
            publisher: {
              "@type": "Organization",
              name: "Hautwissen Kompakt",
            },
            mainEntityOfPage:
              "https://www.hautwissen-kompakt.de/blog/einfluss-ernaehrung-hautgesundheit",
          }),
        }}
      />
    </article>
  );
}
