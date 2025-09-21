// src/app/blog/unterschaetzte-lebensmittel-fuer-die-haut/page.tsx
import type { Metadata } from "next";

const title =
  "3 unterschätzte Lebensmittel für reine Haut – wissenschaftlich erklärt";
const description =
  "Leinsamen, Tomatenmark und Sauerkraut: Warum diese 3 Alltagslebensmittel Deiner Haut helfen – mit einfacher Praxisanleitung, Dosierungen und Studienlage.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical:
      "https://www.hautwissen-kompakt.de/blog/unterschaetzte-lebensmittel-fuer-die-haut",
  },
  openGraph: {
    type: "article",
    title,
    description,
    url:
      "https://www.hautwissen-kompakt.de/blog/unterschaetzte-lebensmittel-fuer-die-haut",
    images: [
      {
        url: "/herobild_drei_lebensmittel.jpg",
        width: 1600,
        height: 600,
        alt:
          "Drei unterschätzte Lebensmittel, die der Haut guttun: Leinsamen, Tomatenmark, Sauerkraut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/herobild_drei_lebensmittel.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const author = {
  name: "Jennifer Krause",
  role: "Expertin für Hautgesundheit",
  image: "/autorenbild_jennifer.jpg",
};

const accent = "text-emerald-700";

export default function Page() {
  return (
    <>
      {/* Article Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            inLanguage: "de",
            image: "https://www.hautwissen-kompakt.de/herobild_drei_lebensmittel.jpg",
            author: {
              "@type": "Person",
              name: author.name,
            },
            datePublished: "2025-09-20",
            dateModified: "2025-09-20",
            publisher: {
              "@type": "Organization",
              name: "Hautsache Gesund",
            },
            mainEntityOfPage:
              "https://www.hautwissen-kompakt.de/blog/unterschaetzte-lebensmittel-fuer-die-haut",
          }),
        }}
      />

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
            3 unterschätzte Lebensmittel für reine Haut &ndash; und warum sie
            sinnvoll sind
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Du willst Unreinheiten reduzieren, Rötungen beruhigen und Deine
            Hautbarriere stärken&thinsp;&ndash;&thinsp;ohne komplizierte
            Routinen&quest; Hier sind drei Alltagslebensmittel, die oft
            übersehen werden; Leinsamen, Tomatenmark und Sauerkraut.
            Erfahre, wie sie wirken, wie viel Sinn macht &amp; wie Du sie
            lecker in Deinen Tag integrierst.
          </p>

          {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
          <div className="mt-2 text-sm text-zinc-600">
            Zuletzt aktualisiert am{" "}
            <time dateTime="2025-09-20">20.09</time>
            {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
          </div>

          {/* Hero 16:6 */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
            <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
              <picture>
                <source media="(max-width: 640px)" srcSet="/herobild_drei_lebensmittel.jpg" />
                <img
                  loading="eager"
                  fetchPriority="high"
                  src="/herobild_drei_lebensmittel.jpg"
                  alt="Leinsamen, Tomatenmark und Sauerkraut als einfache Helfer für reine Haut"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="sr-only">
              Drei alltagstaugliche Lebensmittel für gesunde Haut; Leinsamen, Tomatenmark und Sauerkraut.
            </figcaption>
          </figure>

          {/* Meta row – Autor */}
          <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
            <img
              src={author.image}
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
              <strong>Leinsamen</strong>; reich an ALA;Omega&ndash;3; und
              Lignanen; unterstützen eine ruhige, weniger entzündliche Haut und
              eine stabile Hautbarriere. 1&ndash;2 EL geschrotet täglich sind
              praxisnah.
            </li>
            <li>
              <strong>Tomatenmark</strong>; konzentriertes Lycopin wirkt als
              innerer UV&ndash;Co&ndash;Schutz ;kein Ersatz für Sonnencreme; und kann
              Rötungen nach UV mindern; 1&ndash;2 EL in Soßen oder aufs Brot genügen
              für den Start.
            </li>
            <li>
              <strong>Sauerkraut</strong>; milchsauer fermentiert, liefert
              probiotische Kulturen und Vitamin&nbsp;C; unterstützt den Darm&ndash;Haut&ndash;Axis
              und kann Unreinheiten positiv beeinflussen.
            </li>
            <li>
              <strong>Ernährungs&ndash;Realität</strong>; Regelmäßigkeit schlägt
              Perfektion; baue die drei in Mahlzeiten ein ;Rezeptideen unten;,
              trinke ausreichend Wasser und kombiniere mit einer sanften Routine.
            </li>
            <li>
              <strong>Sicherheit</strong>; Allergien, Medikamente &amp; Unverträglichkeiten
              beachten; Tomatenmark und fermentierte Produkte sind Ergänzungen,
              keine Therapien; bei Hauterkrankungen bitte ärztlich begleiten lassen.
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
                href="#warum-ernaehrung-haut"
              >
                Warum Ernährung Deine Haut sichtbar beeinflusst
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#lebensmittel-ueberblick"
              >
                Die 3 unterschätzten Haut&ndash;Lebensmittel im Überblick
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#leinsamen"
              >
                Leinsamen; Pflanzliche Omega&ndash;3 &amp; Lignane für weniger
                Entzündung
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#tomatenmark"
              >
                Tomatenmark; Lycopin als innerer Anti&ndash;Rötungs&ndash;Support
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#sauerkraut"
              >
                Sauerkraut; Fermente für den Darm&ndash;Haut&ndash;Axis
              </a>
            </li>
            <li>
              <a
                className={`hover:underline ${accent} font-medium`}
                href="#alltag"
              >
                Von der Theorie in den Alltag; Portionsgrößen &amp; Rezepte
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
          </ol>
        </nav>

        {/* Hauptteil */}
        <section id="warum-ernaehrung-haut">
          <h2 className="text-2xl font-bold mb-2">
            Warum beeinflusst Ernährung Deine Haut so stark&quest;
          </h2>
          <p className="leading-relaxed">
            Deine Haut ist ein Stoffwechsel&ndash;Powerhouse; Sie erneuert sich
            ständig, braucht Baustoffe &amp; Signalmoleküle und reagiert sensibel
            auf Entzündungen. Drei Mechanismen machen Ernährung für die Haut
            so wichtig; ;1; <em>Antioxidativer Schutz</em> gegen
            UV&ndash;Stress; ;2; <em>Entzündungsbalance</em> über Fettsäuren
            und sekundäre Pflanzenstoffe; ;3; die <em>Darm&ndash;Haut&ndash;Verbindung</em>,
            bei der Mikroben Metabolite bilden, die bis in Deine Haut wirken.
          </p>

          <div className="mt-5 rounded-2xl border border-zinc-200 p-5 bg-white">
            <h3 className="text-lg font-semibold mb-2">
              Mini&ndash;Checkliste; Woran sehe ich, dass Essen meine Haut triggert&quest;
            </h3>
            <ul className="list-disc ml-5">
              <li>häufige Rötungen nach Sonne oder Stress</li>
              <li>trockene, gespannte Haut trotz Pflege</li>
              <li>pickeliger Schub nach sehr süßen oder fettigen Mahlzeiten</li>
              <li>Blähbauch;Unwohlsein &amp; zeitgleich mehr Unreinheiten</li>
            </ul>
          </div>
        </section>

        <section id="lebensmittel-ueberblick" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Die drei unterschätzten Lebensmittel im Überblick
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="text-base font-semibold mb-1">
                Leinsamen ;geschrotet;
              </h3>
              <p className="text-sm">
                Quelle für ALA;Omega&ndash;3; und Lignane; unterstützen
                Entzündungsbalance und Hautbarriere.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="text-base font-semibold mb-1">Tomatenmark</h3>
              <p className="text-sm">
                Lycopin&ndash;Konzentration hoch; Studien zeigen milde
                Photoprotektion von innen ;ergänzend zu SPF;.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="text-base font-semibold mb-1">Sauerkraut</h3>
              <p className="text-sm">
                Fermentiert; liefert lebende Kulturen &amp; Vitamin&nbsp;C und
                füttert den Darm&ndash;Haut&ndash;Axis.
              </p>
            </div>
          </div>

          {/* Expertenzitat */}
          <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <blockquote className="text-lg font-medium">
              „Kleine, regelmäßige Ernährungsimpulse wie Leinsamen,
              Tomatenmark und Fermente sind realistische Hebel; Sie beeinflussen
              Entzündung, Antioxidantienstatus und das Mikrobiom&thinsp;&ndash;&thinsp;alles
              Faktoren, die sich in der Haut zeigen.“
            </blockquote>
            <figcaption className="mt-2 text-sm text-zinc-600">
              &mdash; Redaktion Hautsache Gesund, indirektes Zitat aus der
              Studienlage
            </figcaption>
          </figure>
        </section>

        <section id="leinsamen" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Leinsamen; Pflanzliche Omega&ndash;3 &amp; Lignane für eine ruhige, klare
            Haut
          </h2>
          <p>
            Leinsamen liefern Alpha&ndash;Linolensäure ;ALA;, eine Omega&ndash;3&ndash;Fettsäure,
            sowie Lignane. ALA kann im Körper zu EPA&amp;DHA umgewandelt werden
            ;begrenzte Quote, dennoch physiologisch relevant; und wirkt als
            Gegenspieler proentzündlicher Mediatoren. In Beobachtungs&ndash; und
            Interventionsstudien sind niedrige Omega&ndash;3&ndash;Spiegel mit stärkerer
            Akne&ndash;Aktivität assoziiert; eine deutsche Kohorte fand bei vielen
            Betroffenen einen messbaren Omega&ndash;3&ndash;Mangel. Diese Daten sprechen
            dafür, die Omega&ndash;3&ndash;Zufuhr über die Ernährung zu sichern.
          </p>

          <div className="mt-5 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="text-base font-semibold mb-1">Benefit</h3>
              <p className="text-sm">
                Unterstützt Entzündungsbalance, kann Unreinheiten abdämpfen und
                die Barrierefunktion verbessern.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="text-base font-semibold mb-1">So viel</h3>
              <p className="text-sm">
                1&ndash;2 EL <strong>geschrotet</strong> täglich ;z.&nbsp;B. im Porridge,
                Joghurt, Salat;. Immer mit Flüssigkeit und besser frisch
                schroten.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="text-base font-semibold mb-1">Praxis</h3>
              <p className="text-sm">
                Mit Eiweiß&plus;Obst kombinieren ;stabiler Blutzucker;; bei
                empfindlichem Darm Menge langsam steigern.
              </p>
            </div>
          </div>

          <aside className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <strong>Hinweis</strong>; ALA ist nicht identisch mit marinem
            Omega&ndash;3; Wirkung erfolgt primär über Entzündungsmodulation und
            Barriere&ndash;Lipide. Bei bestehenden Hauterkrankungen stets ärztlich
            begleiten lassen.
          </aside>
        </section>

        <section id="tomatenmark" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Tomatenmark; Lycopin als innerer Anti&ndash;Rötungs&ndash; und
            Photoprotektions&ndash;Support
          </h2>
          <p>
            Tomatenmark ist eine der konzentriertesten Lycopin&ndash;Quellen. Mehrere
            Humanstudien zeigen; Eine regelmäßige Aufnahme lycopinreicher
            Tomatenprodukte erhöht den Erythem&ndash;Schwellenwert und kann UV&ndash;bedingte
            Rötungen mildern. Berühmt ist die Intervention mit rund 40&nbsp;g
            Tomatenmark täglich ;≈16&nbsp;mg Lycopin;, die nach etwa 10 Wochen
            einen <em>milden</em> inneren Schutz ;entspricht grob SPF&nbsp;2–3;
            zeigte. Wichtig; Das ersetzt keine Sonnencreme; es ist ein
            additiver Basisschutz.
          </p>

          <div className="mt-5 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="text-base font-semibold mb-1">So nutzt Du es</h3>
              <ul className="text-sm list-disc ml-5">
                <li>1–2 EL täglich in Soßen, Suppen, Dips oder aufs Brot</li>
                <li>
                  Fettquelle ;Olivenöl; erhöht Lycopin&ndash;Aufnahme spürbar
                </li>
                <li>Langfristig denken; Effekt baut sich über Wochen auf</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="text-base font-semibold mb-1">Extra</h3>
              <p className="text-sm">
                Gekochte Tomatenprodukte haben bioverfügbareres Lycopin als rohe
                Tomaten; Tomatenmark ist daher besonders effizient im Alltag.
              </p>
            </div>
          </div>
        </section>

        <section id="sauerkraut" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Sauerkraut; Fermente, die den Darm&ndash;Haut&ndash;Axis füttern
          </h2>
          <p>
            Fermentierte Lebensmittel wie <strong>nicht erhitztes</strong>{" "}
            Sauerkraut liefern Milchsäurebakterien und organische Säuren, die das
            Darmmikrobiom diverser machen können. Über den sogenannten
            Darm&ndash;Haut&ndash;Axis beeinflussen diese Metabolite das Immunsystem und
            entzündliche Prozesse in der Haut. Aktuelle Reviews und klinische
            Studien zeigen; Oral oder topisch eingesetzte Probiotika können
            Akne&ndash;Schwere, Läsionszahlen und Hautfeuchte verbessern. Bei
            Lebensmitteln gilt; Sie sind kein Medikament, aber ein sinnvoller,
            risikoarmer Baustein.
          </p>

          <div className="mt-5 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="text-base font-semibold mb-1">Benefit</h3>
              <p className="text-sm">
                Unterstützt Darmbarriere &amp; Immunbalance; kann reaktive Haut
                beruhigen und die Talgbalance positiv beeinflussen.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="text-base font-semibold mb-1">So viel</h3>
              <p className="text-sm">
                2–4 EL zu warmen Speisen ;nicht mitkochen; oder als Beilage zu
                Bowls;Brot; auf <strong>roh, unpasteurisiert</strong> achten.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="text-base font-semibold mb-1">Praxis</h3>
              <p className="text-sm">
                Langsam steigern ;Gasbildung normal;; bei Histamin&ndash;Themen
                Verträglichkeit testen und ggf. Alternativen wie Joghurt oder
                Kefir wählen.
              </p>
            </div>
          </div>
        </section>

        <section id="alltag" className="mt-10">
          <h2 className="text-2xl font-bold mb-2">
            Von der Theorie in den Alltag; Portionsgrößen, Timing &amp; simple
            Rezepte
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="text-base font-semibold mb-1">
                Frühstück ;5&nbsp;Min.;
              </h3>
              <p className="text-sm">
                Skyr;Joghurt mit 1 EL frisch geschroteten Leinsamen, 1 TL
                Honig, Beeren &amp; etwas Zimt. Dazu Wasser oder ungesüßter Tee.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="text-base font-semibold mb-1">
                Lunch ;10&nbsp;Min.;
              </h3>
              <p className="text-sm">
                Vollkornbrot mit Tomatenmark&plus;Olivenöl, Mozzarella, Pfeffer;Salz,
                Rucola. Beilage; 3 EL Sauerkraut, nicht erhitzt.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <h3 className="text-base font-semibold mb-1">
                Abendessen ;15&nbsp;Min.;
              </h3>
              <p className="text-sm">
                Schnelle Gemüsesuppe; Zwiebel&plus;Knoblauch anschwitzen,
                Tomatenmark kurz mitrösten, Gemüsebrühe und TK&ndash;Gemüse, 8&nbsp;Min.
                köcheln; mit 1 EL Leinsamenöl ;nicht mitkochen; servieren.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-zinc-200 p-5 bg-white">
            <h3 className="text-lg font-semibold mb-2">
              2&ndash;zu&ndash;1 Gegenüberstellung; Start vs. Optimierung
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="md:col-span-2 rounded-2xl border border-zinc-200 p-4">
                <strong>Einfach starten</strong>
                <ul className="list-disc ml-5">
                  <li>1 EL Leinsamen pro Tag</li>
                  <li>1 EL Tomatenmark in einer Mahlzeit</li>
                  <li>2–3 EL rohes Sauerkraut als Beilage</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-4">
                <strong>Sanft optimieren</strong>
                <ul className="list-disc ml-5">
                  <li>auf 2 EL Leinsamen steigern</li>
                  <li>täglich 1–2 EL Tomatenmark</li>
                  <li>Fermente variieren ;Kimchi, Kefir, Joghurt;</li>
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
                Ersetzt Tomatenmark meine Sonnencreme&quest;
              </h3>
              <p>
                Nein; Lycopin kann einen milden Grundschutz von innen
                unterstützen ;über Wochen;, aber Sonnencreme mit passendem SPF,
                Schatten &amp; Kleidung bleiben Pflicht.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Ganze, geschrotete oder gequollene Leinsamen&quest;
              </h3>
              <p>
                Für die Hautziele sind <strong>geschrotete</strong> Leinsamen
                sinnvoll, da ALA und Lignane besser verfügbar sind. Immer mit
                ausreichend Flüssigkeit und frisch geschrotet verwenden.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Reicht Joghurt statt Sauerkraut&quest;
              </h3>
              <p>
                Joghurt liefert ebenfalls lebende Kulturen ;je nach Produkt;.
                Sauerkraut bringt zusätzliche pflanzliche Ballaststoffe und
                organische Säuren mit. Abwechslung ist ideal.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Wie lange dauert es, bis ich Effekte sehe&quest;
              </h3>
              <p>
                Bei Lycopin werden Effekte typischerweise nach 4–10 Wochen
                sichtbar; beim Darm&ndash;Haut&ndash;Axis kann es ebenfalls einige Wochen
                dauern. Wichtig ist Konstanz.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Gibt es Situationen, in denen ich vorsichtig sein sollte&quest;
              </h3>
              <p>
                Ja; Bei Allergien;Unverträglichkeiten, Histamin&ndash;Themen
                ;Fermente;, Gerinnungshemmern ;hohe Omega&ndash;3&ndash;Zufuhr; oder
                Reflux ;Tomatenprodukte; bitte individuell prüfen und medizinisch
                begleiten.
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
                    name: "Ersetzt Tomatenmark meine Sonnencreme&quest;",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Nein: Lycopin kann einen milden Grundschutz von innen unterstützen (über Wochen), aber Sonnencreme mit passendem SPF, Schatten & Kleidung bleiben Pflicht.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Ganze, geschrotete oder gequollene Leinsamen&quest;",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Für die Hautziele sind geschrotete Leinsamen sinnvoll, da ALA und Lignane besser verfügbar sind. Immer mit ausreichend Flüssigkeit und frisch geschrotet verwenden.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Reicht Joghurt statt Sauerkraut&quest;",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Joghurt liefert ebenfalls lebende Kulturen (je nach Produkt). Sauerkraut bringt zusätzliche pflanzliche Ballaststoffe und organische Säuren mit. Abwechslung ist ideal.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Wie lange dauert es, bis ich Effekte sehe&quest;",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Bei Lycopin werden Effekte typischerweise nach 4–10 Wochen sichtbar; beim Darm–Haut–Axis kann es ebenfalls einige Wochen dauern. Wichtig ist Konstanz.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Gibt es Situationen, in denen ich vorsichtig sein sollte&quest;",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Ja: Bei Allergien/Unverträglichkeiten, Histamin-Themen (Fermente), Gerinnungshemmern (hohe Omega-3-Zufuhr) oder Reflux (Tomatenprodukte) bitte individuell prüfen und medizinisch begleiten.",
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
              Welche drei unterschätzten Lebensmittel helfen Deiner Haut
              besonders&quest;
            </strong>{" "}
            Regelmäßige <em>Leinsamen</em> stabilisieren die Entzündungsbalance,
            <em> Tomatenmark</em> liefert bioverfügbares Lycopin als inneren
            Anti&ndash;Rötungs&ndash;Support und <em>Sauerkraut</em> stärkt über den
            Darm&ndash;Haut&ndash;Axis die Resilienz Deiner Haut. Klein anfangen, dranbleiben,
            Effekte nach einigen Wochen bewerten.
          </p>
        </section>

        {/* Call to Action Section (unverändert integriert) */}
        <section className="mt-14">
          <div
            dangerouslySetInnerHTML={{
              __html: `<!-- Begin Brevo Form -->
<style>
  @font-face { font-display: block; font-family: Roboto; src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff") }
  @font-face { font-display: fallback; font-family: Roboto; font-weight: 600; src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff") }
  @font-face { font-display: fallback; font-family: Roboto; font-weight: 700; src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff") }
  #sib-container input:-ms-input-placeholder { text-align: left; font-family: Helvetica, sans-serif; color: #c0ccda; }
  #sib-container input::placeholder { text-align: left; font-family: Helvetica, sans-serif; color: #c0ccda; }
  #sib-container textarea::placeholder { text-align: left; font-family: Helvetica, sans-serif; color: #c0ccda; }
  #sib-container a { text-decoration: underline; color: #2BB2FC; }
</style>
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
<div class="sib-form" style="text-align: center; background-color: #EFF2F7;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
        </svg>
        <span class="sib-form-message-panel__inner-text">Deine Anmeldung konnte nicht gespeichert werden. Bitte versuche es erneut.</span>
      </div>
    </div>
    <div></div>
    <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66;max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
        </svg>
        <span class="sib-form-message-panel__inner-text">Deine Anmeldung war erfolgreich.</span>
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
            <div class="sib-text-form-block"><p>Der neueste Report unserer Redaktion, kostenlos für Dich.</p></div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row "><label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:Helvetica, sans-serif; color:#3c4858;" for="EMAIL" data-required="*">Wohin dürfen wir Dir die 10 Tipps schicken&quest;</label>
                <div class="entry__field"><input class="input " type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required /></div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <div class="entry__field"><input class="input " maxlength="200" type="text" id="VORNAME" name="VORNAME" autocomplete="off" placeholder="VORNAME" data-required="true" required /></div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;"></label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="text-align: left">
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:left; font-weight:700; font-family:Helvetica, sans-serif; color:#FFFFFF; background-color:#28a392; border-radius:3px; border-width:0px;" form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512" style=""><path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" /></svg>
              JETZT 10 TIPPS SICHERN
            </button>
          </div>
        </div>
        <input type="text" name="email_address_check" value="" class="input--hidden"><input type="hidden" name="locale" value="de">
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
<!-- End Brevo Form -->`,
            }}
          />
        </section>

        {/* Mini-Glossar */}
        <section className="mt-14 mb-20">
          <h2 className="text-2xl font-bold mb-3">
            Mini-Glossar &ndash; Die wichtigsten Begriffe zu Ernährung &amp; reine Haut
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
                  <td className="p-3 font-medium text-zinc-900">ALA</td>
                  <td className="p-3 text-zinc-700">
                    Alpha&ndash;Linolensäure; pflanzliche Omega&ndash;3&ndash;Fettsäure aus
                    z.&nbsp;B. Leinsamen, die entzündungsmodulierend wirkt.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Lycopin</td>
                  <td className="p-3 text-zinc-700">
                    Rotes Carotinoid aus Tomaten; antioxidativ, unterstützt milden
                    UV&ndash;Schutz von innen bei regelmäßiger Aufnahme.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Darm&ndash;Haut&ndash;Axis</td>
                  <td className="p-3 text-zinc-700">
                    Wechselseitige Kommunikation zwischen Darmmikrobiom und Haut
                    über Immun&ndash;, Nerven&ndash; und Stoffwechselwege.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Fermentation</td>
                  <td className="p-3 text-zinc-700">
                    Verarbeitung durch Mikroorganismen; erzeugt lebende Kulturen,
                    organische Säuren und teils mehr Bioverfügbarkeit.
                  </td>
                </tr>
                <tr className="border-t border-zinc-200">
                  <td className="p-3 font-medium text-zinc-900">Photoprotektion</td>
                  <td className="p-3 text-zinc-700">
                    Schutz vor UV&ndash;bedingter Hautschädigung; basiert außen auf SPF
                    &amp; Kleidung und innen z.&nbsp;B. auf Antioxidantien.
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
                Expertin für Hautgesundheit; Schwerpunkte; Barriere, Ernährung,
                Mikrobiom.
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <span className={`w-2 h-2 rounded-full ${accent}`} aria-hidden="true" />
            <p className="text-sm text-zinc-700">
              Überprüft von;{" "}
              <strong>Hautsache Gesund Redaktion</strong> &ndash; Medizin&ndash; und
              Ernährungsrecherche.
            </p>
          </div>
        </section>

        {/* Quellenverzeichnis */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-3">
            Quellen &amp; weiterführende Studien
          </h2>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li>
              Zhang X. et&nbsp;al.; The effect of tomato and lycopene on skin
              photodamage &amp; photoaging ;Review;. PubMed;{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/36606553/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pubmed.ncbi.nlm.nih.gov/36606553/
              </a>
            </li>
            <li>
              Stahl W. et&nbsp;al.; Dietary Tomato Paste Protects Against
              Ultraviolet Light&ndash;Induced Erythema in Humans. Journal of
              Nutrition ;2001;. PDF;{" "}
              <a
                href="https://jn.nutrition.org/article/S0022-3166%2822%2913819-8/pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://jn.nutrition.org/article/S0022-3166%2822%2913819-8/pdf
              </a>
            </li>
            <li>
              Grether&ndash;Beck S. et&nbsp;al.; Molecular evidence that oral
              supplementation with lycopene protects human skin. BJD ;2017;;{" "}
              <a
                href="https://academic.oup.com/bjd/article/176/5/1231/6661085"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://academic.oup.com/bjd/article/176/5/1231/6661085
              </a>
            </li>
            <li>
              Gürtler A. et&nbsp;al.; Deficit of Omega&ndash;3 Fatty Acids in Acne
              Patients ;Pilot;. PubMed;{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/38672789/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pubmed.ncbi.nlm.nih.gov/38672789/
              </a>{" "}
              &ndash; Überblicksarbeit LMU;{" "}
              <a
                href="https://edoc.ub.uni-muenchen.de/34295/2/Guertler_Anne.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://edoc.ub.uni-muenchen.de/34295/2/Guertler_Anne.pdf
              </a>
            </li>
            <li>
              Pullar JM. et&nbsp;al.; The Roles of Vitamin C in Skin Health
              ;Review;. Nutrients ;2017;;{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5579659/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC5579659/
              </a>
            </li>
            <li>
              Atefi N. et&nbsp;al.; Effectiveness of Probiotic Supplementation in
              Acne ;2024 Meta&ndash;Analyse;;{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11743379/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC11743379/
              </a>
            </li>
            <li>
              Jimenez&ndash;Sanchez M. et&nbsp;al.; The gut&ndash;skin axis ;2025
              Review;;{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11901370/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pmc.ncbi.nlm.nih.gov/articles/PMC11901370/
              </a>
            </li>
            <li>
              Eguren C. et&nbsp;al.; Randomized clinical trial; Oral probiotic
              mixture in acne vulgaris ;2024;;{" "}
              <a
                href="https://medicaljournalssweden.se/actadv/article/view/33206/46265"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://medicaljournalssweden.se/actadv/article/view/33206/46265
              </a>
            </li>
            <li>
              Thieme; Sonnenbrand vorbeugen ;Hinweis zur inneren
              Photoprotektion durch Lycopin;;{" "}
              <a
                href="https://natuerlich.thieme.de/therapieverfahren/praevention/detail/sonnenbrand-vorbeugen-7-tipps-4213"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://natuerlich.thieme.de/therapieverfahren/praevention/detail/sonnenbrand-vorbeugen-7-tipps-4213
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
