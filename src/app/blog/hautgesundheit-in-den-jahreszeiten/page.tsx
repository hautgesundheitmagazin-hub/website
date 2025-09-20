// src/app/blog/hautgesundheit-in-den-jahreszeiten/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hautgesundheit im Wechsel der Jahreszeiten – einfache Pflege-Strategien für Winter, Frühling, Sommer & Herbst",
  description:
    "Wie sich Temperatur, UV-Index & Luftfeuchtigkeit auf deine Haut auswirken – und wie du deine Routine pro Jahreszeit anpasst. Mit Studien, Tipps & Checklisten.",
  alternates: {
    canonical:
      "https://www.hautwissen-kompakt.de/blog/hautgesundheit-in-den-jahreszeiten",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "article",
    url:
      "https://www.hautwissen-kompakt.de/blog/hautgesundheit-in-den-jahreszeiten",
    title:
      "Hautgesundheit im Wechsel der Jahreszeiten – einfache Pflege-Strategien für Winter, Frühling, Sommer & Herbst",
    description:
      "Verstehe saisonale Hautbedürfnisse und passe deine Pflege mit klaren, alltagstauglichen Schritten an. Evidenzbasiert & leicht umsetzbar.",
    images: [
      {
        url: "/herobild_jahreszeiten_hautgesundheit.jpg",
        width: 1600,
        height: 600,
        alt:
          "Hautgesundheit über die Jahreszeiten – Illustration von Winter, Frühling, Sommer und Herbst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Hautgesundheit im Wechsel der Jahreszeiten – dein Leitfaden durchs Jahr",
    description:
      "So reagiert die Haut auf Wetter, UV & Luftfeuchtigkeit – mit konkreten Pflegeplänen für jede Saison.",
    images: ["/herobild_jahreszeiten_hautgesundheit.jpg"],
  },
};

const accent = "text-emerald-700";

const author = {
  name: "Jennifer Krause",
  role: "Expertin für Hautgesundheit",
  image: "/autorenbild_jennifer.jpg",
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
          Hautgesundheit im Wechsel der Jahreszeiten: So passt du deine Pflege
          klug an
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Winter, Frühling, Sommer, Herbst – deine Haut reagiert messbar auf
          Temperatur, UV-Index und Luftfeuchtigkeit. In diesem Leitfaden
          erfährst du, wie du mit ein paar gezielten Anpassungen die
          Hautbarriere stärkst, Irritationen vermeidest und ganzjährig ein
          gesundes Hautgefühl erreichst.
        </p>

        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime="2025-09-20">20.09.2025</time>
          {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/herobild_jahreszeiten_hautgesundheit.jpg"
              />
              <img
                loading="eager"
                fetchPriority="high"
                src="/herobild_jahreszeiten_hautgesundheit.jpg"
                alt="Illustration: Vier Jahreszeiten treffen auf Haut – Schnee, Blüten, Sonne, Laub"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Jahreszeiten beeinflussen die Haut – UV, Temperatur und
            Luftfeuchtigkeit verändern die Bedürfnisse.
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
            Wetter &amp; Jahreszeiten beeinflussen die Hautbarriere messbar:
            Kälte &amp; trockene Heizungsluft fördern Feuchtigkeitsverlust,
            Wärme &amp; höhere Luftfeuchtigkeit stabilisieren sie – passe
            Texturen und Wirkstoffe entsprechend an.
          </li>
          <li>
            UV-Schutz ist nicht nur im Sommer Pflicht: Ab UV-Index&nbsp;3 (in
            Deutschland oft schon ab März) gehört Sonnencreme täglich in die
            Routine.
          </li>
          <li>
            Setze auf eine stabile Basis: milde Reinigung, konsequente
            Feuchtigkeit, kluge Okklusion im Winter, leichte Formulierungen im
            Sommer – dazu situativ Antioxidantien und Barrierestärker.
          </li>
          <li>
            Achte auf Trigger: Pollen im Frühling, heißes Wasser im Winter,
            Salz-/Chlorwasser im Sommer – schütze die Haut, spüle Rückstände ab
            und creme rechtzeitig nach.
          </li>
          <li>
            Höre auf deine Haut &amp; tracke Veränderungen (Spannungsgefühl,
            Schuppung, Glanz, Rötungen): Kleine Anpassungen wirken oft größer
            als komplette Produktwechsel.
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
              href="#warum-jahreszeiten-die-haut-veraendern"
            >
              Warum verändern Jahreszeiten die Haut?
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#winter"
            >
              Winter: Schutz vor Kälte &amp; Heizungsluft
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#fruehling"
            >
              Frühling: sanfter Neustart &amp; Pollen-Schutz
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#sommer"
            >
              Sommer: UV-Strategie &amp; leichte Texturen
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#herbst"
            >
              Herbst: Reparatur &amp; Barriere-Boost
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#jahreszeiten-checklisten"
            >
              4 praxisnahe Checklisten (Winter bis Herbst)
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#haeufige-fehler"
            >
              Häufige Fehler &amp; schnelle Fixes
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
        </ol>
      </nav>

      {/* Hauptteil */}
      <section id="warum-jahreszeiten-die-haut-veraendern">
        <h2 className="text-2xl font-bold mb-2">
          Warum verändern Jahreszeiten die Haut?
        </h2>
        <p className="leading-relaxed">
          Deine Haut ist ein aktives Organ und passt sich an Umweltbedingungen
          an. Drei Faktoren machen dabei den größten Unterschied:{" "}
          <strong>Temperatur</strong>, <strong>Luftfeuchtigkeit</strong> und{" "}
          <strong>UV-Strahlung</strong>. Studien zeigen, dass im Verlauf des
          Jahres die Hautbarriere, messbar über den transepidermalen
          Wasserverlust (TEWL), sowie Textur und Mikrobiom variieren. So nimmt
          TEWL von Winter zu Sommer ab und die Haut wirkt glatter; zugleich
          verändert sich die Zusammensetzung des Hautmikrobioms saisonal, bleibt
          aber individuell charakteristisch. Auch der UV-Index steigt
          jahreszeitlich an – in Deutschland oft bereits im März auf Werte ab
          3, bei denen Schutz empfohlen ist.
        </p>

        <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-5">
          <h3 className="text-lg font-semibold mb-2">
            Die drei Haupthebel – kurz erklärt
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 p-4">
              <strong>Temperatur</strong>
              <p className="mt-2 text-sm text-zinc-700">
                Kälte kann die Hautbarriere stressen und Barrierelipide
                beeinträchtigen; Wärme fördert die Durchblutung – beides ändert
                den Feuchtigkeitsbedarf.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <strong>Luftfeuchtigkeit</strong>
              <p className="mt-2 text-sm text-zinc-700">
                Trockene Heizungsluft entzieht Wasser – humektante
                Feuchtigkeitsspender plus leichte Okklusion helfen. Höhere
                Feuchte im Sommer stabilisiert oft die Barriere.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <strong>UV-Index</strong>
              <p className="mt-2 text-sm text-zinc-700">
                UVA/UVB belasten DNA und Kollagen. Ab UV-Index&nbsp;3 gilt:
                vermeiden, bedecken, Sonnencreme – ganzjährig denken.
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            (Faktenbasis: peer-reviewte Studien und Behördeninformationen –
            Details im Quellenblock am Ende.)
          </p>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Die beste Jahreszeiten-Pflege ist keine völlig neue Routine pro
            Quartal, sondern eine stabile Basis plus gezielte Stellschrauben:
            Textur, Wirkstoffdichte und Schutzfaktoren an die Umwelt anpassen.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Jennifer Krause, indirektes Zitat aus der Beratungspraxis
          </figcaption>
        </figure>
      </section>

      <section id="winter" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">
          Winter: Was braucht die Haut bei Kälte &amp; Heizungsluft?
        </h2>
        <p>
          Kalte Außenluft kombiniert mit trockener Innenluft erhöht den
          Wasserverlust über die Haut und kann zu Spannungsgefühl, Schuppung und
          Rötungen führen. Sanfte Reinigung, reichhaltigere Texturen und
          Schutzschichten sind jetzt dein Team.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">
              Winter-Grundlagen (2:1-Infobox)
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                <strong>Milde Reinigung</strong>: pH-hautneutral, keine
                austrocknenden Sulfate.
              </li>
              <li>
                <strong>Feuchtigkeit + Okklusion</strong>: erst Humektantien
                (z.&nbsp;B. Glycerin, Hyaluron), dann Ceramide/Sheabutter als
                „Mantel“.
              </li>
              <li>
                <strong>Duschen</strong>: kurz &amp; lauwarm – heißes Wasser
                schwächt die Barriere.
              </li>
              <li>
                <strong>Innenraum-Luft</strong>: 40–50% relative Feuchte
                anstreben (Lüften, ggf. Luftbefeuchter).
              </li>
              <li>
                <strong>Hand- &amp; Lippenpflege</strong>: kleine,
                wiederholte Anwendungen sind wirksamer als seltene „dicke
                Schichten“.
              </li>
            </ul>
          </div>
          <aside className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <h4 className="font-semibold mb-2">Gut zu wissen</h4>
            <p className="text-sm text-zinc-700">
              In Untersuchungen korrelieren niedrigere Temperaturen und
              trockene Innenraumluft mit höherem TEWL und trockenerem
              Hautgefühl – sprich: im Winter braucht die Barriere konsequent
              Nachschub an Feuchte und Lipiden.
            </p>
          </aside>
        </div>
      </section>

      <section id="fruehling" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">
          Frühling: Neustart, sanfte Exfoliation &amp; Pollen-Management
        </h2>
        <p>
          Wenn es milder wird, kann die Haut wieder leichter atmen. Jetzt ist
          der Moment für sanfte Exfoliation, Reparatur von Winterspuren und –
          für Allergiker:innen wichtig – Pollenprävention an Haut und
          Augenpartie.
        </p>

        <div className="mt-4 rounded-2xl border border-zinc-200 p-5">
          <h3 className="text-lg font-semibold mb-2">
            Frühjahrstaktik in 5 Schritten
          </h3>
          <ol className="list-decimal ml-5 space-y-1">
            <li>
              <strong>Peeling light</strong>: 1–2×/Woche mit milden Säuren
              oder PHA – nie schubbern.
            </li>
            <li>
              <strong>Fleckenkorrektur</strong>: Pigmentpflege gezielt abends
              starten (z.&nbsp;B. Niacinamid).
            </li>
            <li>
              <strong>Allergie-Schutz</strong>: Pollenbarriere-Balm um
              Nase/Augen, Brille tragen, Haare abends ausspülen.
            </li>
            <li>
              <strong>UV-Bewusstsein</strong>: Ab UV-Index&nbsp;3 täglich SPF.
            </li>
            <li>
              <strong>Routine entschlacken</strong>: reichhaltige Wintercremes
              langsam gegen leichtere Formulierungen tauschen.
            </li>
          </ol>
        </div>
      </section>

      <section id="sommer" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">
          Sommer: UV-Strategie, Schweiß &amp; leichte Texturen
        </h2>
        <p>
          Höherer UV-Index, mehr Outdoor, Schweiß und Badeausflüge – der Sommer
          fordert vor allem klugen Sonnenschutz und leichte, nicht-okklusive
          Pflege.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">UV-Strategie</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                <strong>Regel 1</strong>: vermeiden, bedecken, Sonnencreme.
              </li>
              <li>
                <strong>Menge</strong>: Gesichtsmenge ≈ 2 Fingerlängen.
              </li>
              <li>
                <strong>Nachlegen</strong>: alle 2–3 Stunden, nach Baden/Schwitzen.
              </li>
              <li>
                <strong>Uhrzeit</strong>: Mittagsspitzen möglichst meiden.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">Leichte Texturen</h3>
            <p className="text-sm text-zinc-700">
              Gel-Cremes, Emulsionen und hydratisierende Seren fühlen sich
              angenehmer an als schwere Balms. Nach Salz- oder Chlorwasser
              kurz abspülen, dann Feuchtigkeit + SPF erneuern.
            </p>
          </div>
        </div>
      </section>

      <section id="herbst" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">
          Herbst: Reparieren, auffüllen, auf den Winter vorbereiten
        </h2>
        <p>
          Nach Sonne, Schweiß und Outdoor-Saison darf die Haut reparieren.
          Herzstück: Barriere stärken, Mikroschäden pflegen, Feuchtigkeitsdepot
          auffüllen – und Schritt für Schritt „winterfest“ werden.
        </p>

        <div className="mt-4 rounded-2xl border border-zinc-200 p-5">
          <h3 className="text-lg font-semibold mb-2">Herbst-Bausteine</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              <strong>Antioxidantien</strong>: gegen UV-Folgeoxidation.
            </li>
            <li>
              <strong>Barrierestärker</strong>: Ceramide, Squalan, Cholesterol.
            </li>
            <li>
              <strong>Sanfte Exfoliation</strong>: Struktur glätten, aber
              Reizschwelle beachten.
            </li>
            <li>
              <strong>Langsam anreichern</strong>: Texturen peu à peu
              „wärmer“ wählen.
            </li>
          </ul>
        </div>
      </section>

      <section id="jahreszeiten-checklisten" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">Checklisten je Jahreszeit</h2>

        <div className="rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-40">
                  Saison/Goal
                </th>
                <th className="text-left font-semibold p-3">
                  Kernschritte (täglich)
                </th>
                <th className="text-left font-semibold p-3">
                  Extras (2–3×/Woche)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200 align-top">
                <td className="p-3 font-medium">Winter</td>
                <td className="p-3">
                  Milde Reinigung → Serum (Humektantien) → reichhaltige Creme
                  → SPF (heller Tag) → Hände/Lippen separat pflegen
                </td>
                <td className="p-3">Peeling light, Masken mit Ceramiden</td>
              </tr>
              <tr className="border-t border-zinc-200 align-top">
                <td className="p-3 font-medium">Frühling</td>
                <td className="p-3">
                  Reinigung → Feuchtigkeit → leichte Creme → SPF (ab UVI&nbsp;3
                  täglich)
                </td>
                <td className="p-3">
                  Pigmentpflege abends, Pollen-Schutzbalm um Nase/Augen
                </td>
              </tr>
              <tr className="border-t border-zinc-200 align-top">
                <td className="p-3 font-medium">Sommer</td>
                <td className="p-3">
                  Reinigung → Antioxidans → leichte Feuchtigkeit → SPF (nachlegen)
                </td>
                <td className="p-3">After-Sun-Feuchtigkeit, Kopfhaut-Schutz</td>
              </tr>
              <tr className="border-t border-zinc-200 align-top">
                <td className="p-3 font-medium">Herbst</td>
                <td className="p-3">
                  Reinigung → Feuchtigkeit → mittlere Creme → SPF → abends
                  Barrierestärker
                </td>
                <td className="p-3">Sanftes Peeling, Reparatur-Seren</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-zinc-700">
          Keyword-Guide (für dich kurz &amp; knapp): „Hautpflege im Winter“,
          „Sonnenschutz im Frühling“, „Sommer Pflege leichte Textur“,
          „Herbst Hautbarriere stärken“, „TEWL reduzieren“, „UV-Index
          Deutschland“. Long-Tails: „beste Feuchtigkeit bei Heizungsluft“,
          „UV-Index&nbsp;3 was tun“, „Pollenallergie Haut schützen“, „Routine
          an Jahreszeiten anpassen“.
        </p>
      </section>

      <section id="haeufige-fehler" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">
          Häufige Fehler – und schnelle Fixes
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">
              Fehler-Box (typisch &amp; lösbar)
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                <strong>Ganzjahres-„One-size“-Routine</strong>: Passe
                Texturen &amp; SPF an UVI &amp; Luftfeuchte an.
              </li>
              <li>
                <strong>Zu heißes Wasser</strong>: lieber lauwarm &amp; kürzer
                duschen.
              </li>
              <li>
                <strong>Peeling-Overkill</strong>: saisonal reduzieren,
                insbesondere im Winter.
              </li>
              <li>
                <strong>SPF nur im Sommer</strong>: ab März oft schon UVI ≥ 3.
              </li>
              <li>
                <strong>Nach dem Schwimmen vergessen</strong>: abspülen,
                Feuchtigkeit + SPF erneuern.
              </li>
            </ul>
          </div>
          <aside className="rounded-2xl border border-zinc-200 bg-emerald-50 p-5">
            <h4 className="font-semibold mb-2">Mini-Check</h4>
            <p className="text-sm text-zinc-700">
              Fühlt sich die Haut plötzlich gespannt oder fettig an? Prüfe:
              Wetterumschwung, Heizperiode, UVI, Pollenflug. Kleine Drehungen an
              Reinigung, Textur, Frequenz und Schutz genügen oft.
            </p>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Brauche ich im Frühling wirklich schon Sonnencreme?
            </h3>
            <p>
              Ja – in Deutschland erreicht der UV-Index ab März häufig Werte
              von 3 und mehr. Ab UVI&nbsp;3 empfiehlt sich täglicher Schutz.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Was hilft gegen Wintertrockenheit sofort?
            </h3>
            <p>
              Duschtemperatur senken, Feuchtigkeitsserum auf feuchte Haut,
              anschließend eine ceramidreiche Creme – und Innenraumfeuchte auf
              40–50% bringen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Reicht es, die Tagescreme saisonal zu tauschen?
            </h3>
            <p>
              Meist ja: Textur und Wirkstoffdichte anpassen, ansonsten Basis
              stabil lassen (mild reinigen, konsequent befeuchten, UV-Schutz).
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Können Pollen die Gesichtshaut reizen?
            </h3>
            <p>
              Ja, vor allem bei empfindlicher Haut: schützende Balms an
              Kontaktstellen, Brille tragen und abends Rückstände abspülen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wie merke ich, dass ich zu viel exfoliiere?
            </h3>
            <p>
              Typisch: Brennen, Rötungen, vermehrte Trockenheit. Reduziere
              Frequenz, setze Barrierestärker ein und pausiere aktive Säuren.
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
                  name:
                    "Brauche ich im Frühling wirklich schon Sonnencreme?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ja – in Deutschland erreicht der UV-Index ab März häufig Werte von 3 und mehr. Ab UVI 3 empfiehlt sich täglicher Schutz.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was hilft gegen Wintertrockenheit sofort?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Duschtemperatur senken, Feuchtigkeitsserum auf feuchte Haut, anschließend eine ceramidreiche Creme – und Innenraumfeuchte auf 40–50% bringen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Reicht es, die Tagescreme saisonal zu tauschen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Meist ja: Textur und Wirkstoffdichte anpassen, ansonsten Basis stabil lassen (mild reinigen, konsequent befeuchten, UV-Schutz).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Können Pollen die Gesichtshaut reizen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ja, vor allem bei empfindlicher Haut: schützende Balms an Kontaktstellen, Brille tragen und abends Rückstände abspülen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie merke ich, dass ich zu viel exfoliiere?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Typisch: Brennen, Rötungen, vermehrte Trockenheit. Reduziere Frequenz, setze Barrierestärker ein und pausiere aktive Säuren.",
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
            Wie bleibt die Haut trotz Wetter, UV &amp; Luftfeuchtigkeit stabil?
          </strong>{" "}
          Mit einer soliden Basisroutine und wenigen gezielten Anpassungen pro
          Saison: Im Winter okklusiver, im Sommer leichter, im Frühling
          pollenbewusst und im Herbst reparierend – plus konsequenter UV-Schutz,
          sobald der UVI&nbsp;3 erreicht.
        </p>
      </section>

      {/* Call to Action Section – aus Vorlage (JSX-kompatibel) */}
      {/* Begin Brevo Form */}
      {/* START - We recommend to place the below code in head tag of your website html  */}
      <style>{`
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
      `}</style>
      <link
        rel="stylesheet"
        href="https://sibforms.com/forms/end-form/build/sib-styles.css"
      />

      <div
        className="sib-form"
        style={{
          textAlign: "center",
          backgroundColor: "#EFF2F7",
        }}
      >
        <div id="sib-form-container" className="sib-form-container">
          <div
            id="error-message"
            className="sib-form-message-panel"
            style={{
              fontSize: "16px",
              textAlign: "left",
              fontFamily: "Helvetica, sans-serif",
              color: "#661d1d",
              backgroundColor: "#ffeded",
              borderRadius: "3px",
              borderColor: "#ff4949",
              maxWidth: "540px",
            }}
          >
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
              </svg>
              <span className="sib-form-message-panel__inner-text">
                Deine Anmeldung konnte nicht gespeichert werden. Bitte versuche
                es erneut.
              </span>
            </div>
          </div>
          <div></div>
          <div
            id="success-message"
            className="sib-form-message-panel"
            style={{
              fontSize: "16px",
              textAlign: "left",
              fontFamily: "Helvetica, sans-serif",
              color: "#085229",
              backgroundColor: "#e7faf0",
              borderRadius: "3px",
              borderColor: "#13ce66",
              maxWidth: "540px",
            }}
          >
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
              </svg>
              <span className="sib-form-message-panel__inner-text">
                Deine Anmeldung war erfolgreich.
              </span>
            </div>
          </div>
          <div></div>
          <div
            id="sib-container"
            className="sib-container--large sib-container--vertical"
            style={{
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,1)",
              maxWidth: "540px",
              borderRadius: "3px",
              borderWidth: "1px",
              borderColor: "#C0CCD9",
              borderStyle: "solid",
              direction: "ltr",
            }}
          >
            <form
              id="sib-form"
              method="POST"
              action="https://58a8e982.sibforms.com/serve/MUIFAAu67dU7m7jHkJHnSYjaQM-Go-LEt6pCHEcflaDv_K8hQQ8emSwcEz4jEEv6iGtpPoUX2wkdM0SHScgPCHivxNEwC_pzg3wni0Rlub0NvwGHjxUEG_icVa5-RMnJcLfkCunQzIVbN6_LC3ITRul-gVn212JWZgJr8uYXi-ecIAaLwdUEZ4yOwHMcjvOQ5zveRzRGkMnD9UIo"
              data-type="subscription"
            >
              <div style={{ padding: "8px 0" }}>
                <div
                  className="sib-form-block"
                  style={{
                    fontSize: "20px",
                    textAlign: "left",
                    fontWeight: 700,
                    fontFamily: "Helvetica, sans-serif",
                    color: "#090a0a",
                    backgroundColor: "transparent",
                  }}
                >
                  <p>
                    10 studienbasierte Tipps bei Neurodermitis direkt in deinem
                    Postfach.
                  </p>
                </div>
              </div>
              <div style={{ padding: "8px 0" }}>
                <div
                  className="sib-form-block"
                  style={{
                    fontSize: "16px",
                    textAlign: "left",
                    fontFamily: "Helvetica, sans-serif",
                    color: "#3C4858",
                    backgroundColor: "transparent",
                  }}
                >
                  <div className="sib-text-form-block">
                    <p>Der neueste Report unserer Redaktion, kostenlos für Dich.</p>
                  </div>
                </div>
              </div>
              <div style={{ padding: "8px 0" }}>
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row ">
                      <label
                        className="entry__label"
                        style={{
                          fontWeight: 700,
                          textAlign: "left",
                          fontSize: "16px",
                          fontFamily: "Helvetica, sans-serif",
                          color: "#3c4858",
                        }}
                        htmlFor="EMAIL"
                        data-required="*"
                      >
                        Wohin dürfen wir Dir die 10 Tipps schicken?
                      </label>

                      <div className="entry__field">
                        <input
                          className="input "
                          type="text"
                          id="EMAIL"
                          name="EMAIL"
                          autoComplete="off"
                          placeholder="EMAIL"
                          data-required="true"
                          required
                        />
                      </div>
                    </div>

                    <label
                      className="entry__error entry__error--primary"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        fontFamily: "Helvetica, sans-serif",
                        color: "#661d1d",
                        backgroundColor: "#ffeded",
                        borderRadius: "3px",
                        borderColor: "#ff4949",
                      }}
                    ></label>
                  </div>
                </div>
              </div>
              <div style={{ padding: "8px 0" }}>
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row ">
                      <div className="entry__field">
                        <input
                          className="input "
                          maxLength={200}
                          type="text"
                          id="VORNAME"
                          name="VORNAME"
                          autoComplete="off"
                          placeholder="VORNAME"
                          data-required="true"
                          required
                        />
                      </div>
                    </div>

                    <label
                      className="entry__error entry__error--primary"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        fontFamily: "Helvetica, sans-serif",
                        color: "#661d1d",
                        backgroundColor: "#ffeded",
                        borderRadius: "3px",
                        borderColor: "#ff4949",
                      }}
                    ></label>
                  </div>
                </div>
              </div>
              <div style={{ padding: "8px 0" }}>
                <div className="sib-form-block" style={{ textAlign: "left" }}>
                  <button
                    className="sib-form-block__button sib-form-block__button-with-loader"
                    style={{
                      fontSize: "16px",
                      textAlign: "left",
                      fontWeight: 700,
                      fontFamily: "Helvetica, sans-serif",
                      color: "#FFFFFF",
                      backgroundColor: "#28a392",
                      borderRadius: "3px",
                      borderWidth: 0,
                    }}
                    form="sib-form"
                    type="submit"
                  >
                    <svg
                      className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                      viewBox="0 0 512 512"
                    >
                      <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                    </svg>
                    JETZT 10 TIPPS SICHERN
                  </button>
                </div>
              </div>

              <input
                type="text"
                name="email_address_check"
                defaultValue=""
                className="input--hidden"
              />
              <input type="hidden" name="locale" defaultValue="de" />
            </form>
          </div>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
  window.REQUIRED_CODE_ERROR_MESSAGE = 'Wähle bitte einen Ländervorwahl aus.';
  window.LOCALE = 'de';
  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";
  window.REQUIRED_ERROR_MESSAGE = "Dieses Feld darf nicht leer sein. ";
  window.GENERIC_INVALID_MESSAGE = "Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";
  window.translation = { common: { selectedList: '{quantity} Liste ausgewählt', selectedLists: '{quantity} Listen ausgewählt', selectedOption: '{quantity} ausgewählt', selectedOptions: '{quantity} ausgewählt' } };
  var AUTOHIDE = Boolean(0);
        `,
        }}
      />
      <script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>
      {/* End Brevo Form */}

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar - Die wichtigsten Begriffe zu Hautgesundheit im Wechsel
          der Jahreszeiten
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
                <td className="p-3 font-medium text-zinc-900">TEWL</td>
                <td className="p-3 text-zinc-700">
                  Transepidermaler Wasserverlust – Maß dafür, wie viel
                  Feuchtigkeit über die Haut „verdunstet“.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Hautbarriere</td>
                <td className="p-3 text-zinc-700">
                  Schutzschicht aus Zellen und Lipiden, die Wasser in der Haut
                  hält und Reizstoffe abhält.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">UV-Index (UVI)</td>
                <td className="p-3 text-zinc-700">
                  Skala für die Stärke der UV-Strahlung – ab UVI&nbsp;3 ist
                  Sonnenschutz empfohlen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium
