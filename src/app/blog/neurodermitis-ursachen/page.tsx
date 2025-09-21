// src/app/blog/neurodermitis-ursachen/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Neurodermitis-Ursachen einfach erklärt: Gene, Hautbarriere, Trigger – was wirklich dahintersteckt",
  description:
    "Verstehe in 10 Minuten die Ursachen von Neurodermitis: Genetik (u.a. Filaggrin), Hautbarriere, Immunsystem, Umwelt-Trigger, Mikrobiom & Stress – klar und praxisnah.",
  alternates: {
    canonical: "https://www.hautwissen-kompakt.de/blog/neurodermitis-ursachen",
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: "https://www.hautwissen-kompakt.de/blog/neurodermitis-ursachen",
    title:
      "Neurodermitis-Ursachen einfach erklärt: Gene, Hautbarriere, Trigger – was wirklich dahintersteckt",
    description:
      "Was verursacht Neurodermitis? Einfache Erklärungen zu Genetik, Hautbarriere, Immunsystem, Mikrobiom, Umwelt und Stress – inkl. praktischer Trigger-Checks.",
    images: [
      {
        url: "/herobild_ursachen.jpg",
        width: 1600,
        height: 600,
        alt: "Symbolbild: Trockene Haut mit Juckreiz – Ursachen von Neurodermitis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Neurodermitis-Ursachen einfach erklärt: Gene, Hautbarriere, Trigger – was wirklich dahintersteckt",
    description:
      "Verstehe in 10 Minuten die Ursachen von Neurodermitis: Genetik (Filaggrin), Hautbarriere, Immunsystem, Umwelt-Trigger, Mikrobiom & Stress.",
    images: ["/herobild_ursachen.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

type Author = {
  name: string;
  role: string;
  img: string;
};

const author: Author = {
  name: "Jennifer Krause",
  role: "Expertin für Hautgesundheit",
  img: "/autorenbild_jennifer.jpg",
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
      itemScope
      itemType="https://schema.org/Article"
    >
      {/* Header */}
      <header className="mb-10">
        <h1
          className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight"
          itemProp="headline"
        >
          Ursachen von Neurodermitis – einfach erklärt
        </h1>
        <p className="mt-3 text-lg text-zinc-700" itemProp="description">
          Warum bekommt man Neurodermitis? In diesem Guide verstehst du ohne
          Fachchinesisch, wie Genetik, eine gestörte Hautbarriere, das
          Immunsystem und Alltagstrigger zusammenwirken &ndash; und was du
          daraus für deinen Hautalltag ableiten kannst.
        </p>

        {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am <time dateTime="2025-09-20">20.09</time>
          {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source media="(max-width: 640px)" srcSet="/herobild_ursachen.jpg" />
              <img
                loading="eager"
                fetchPriority="high"
                src="/herobild_ursachen.jpg"
                alt="Trockene, gereizte Haut als Symbolbild für Neurodermitis-Ursachen"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Symbolbild: Trockene Haut steht für gestörte Barrierefunktionen &amp; Trigger
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
            <div className="font-medium text-zinc-900" itemProp="author">
              {author.name}
            </div>
            <div>{author.role}</div>
          </div>
        </div>
      </header>

      {/* TL;DR */}
      <aside className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="text-lg font-semibold mb-3">Das Wichtigste auf einen Blick</h2>
        <ul className="list-disc ml-5 space-y-2 text-zinc-800">
          <li>
            Neurodermitis entsteht aus einem <strong>Mix aus Genetik, Hautbarriere und Immunsystem</strong>. Keiner dieser Faktoren allein erklärt alle Fälle.
          </li>
          <li>
            <strong>Filaggrin-Genvarianten</strong> schwächen die Hautbarriere, sodass Feuchtigkeit entweicht und Reizstoffe leichter eindringen.
          </li>
          <li>
            Ein <strong>überaktives Immunsystem</strong> entzündet die Haut, sobald Trigger wie Allergene, Infekte, Kälte, Schweiß oder Stress dazukommen.
          </li>
          <li>
            <strong>Mikrobiom &amp; Umwelt</strong> machen den Unterschied: Hautkeime, Lufttrockenheit, Textilien, Reinigungs- und Duftstoffe beeinflussen Schübe.
          </li>
          <li>
            Du kannst Ursachen nicht „wegzaubern“, aber <strong>Trigger kontrollieren</strong>: sanfte Pflege, Barriereaufbau, Reizstoffe reduzieren, Frühwarnzeichen erkennen.
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
            <a className={`hover:underline ${accent} font-medium`} href="#was-ist-neurodermitis">
              Was ist Neurodermitis &amp; warum ist die Ursache komplex?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#genetik-hautbarriere">
              Genetik &amp; Hautbarriere: die Basis (u.a. Filaggrin)
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#immunsystem">
              Immunsystem: Warum entzündet sich die Haut so schnell?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#mikrobiom-umwelt">
              Mikrobiom &amp; Umwelt: Was verschiebt das Gleichgewicht?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#trigger">
              Häufige Trigger im Alltag &amp; wie du sie erkennst
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#mythen">
              Mythen-Check: „Ist Neurodermitis ansteckend?“ &amp; Co.
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#praxis">
              Praxis: Von der Ursache zur Strategie &ndash; dein 3-Schritte-Plan
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#faq">
              FAQ
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#zusammenfassung">
              Kurzfazit
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#glossar">
              Mini-Glossar
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#eeat">
              Über die Autorin
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#quellen">
              Quellen &amp; weiterführende Studien
            </a>
          </li>
        </ol>
      </nav>

      {/* Hauptteil */}
      <section id="was-ist-neurodermitis">
        <h2 className="text-2xl font-bold mb-2">Was ist Neurodermitis &amp; warum ist die Ursache komplex?</h2>
        <p>
          Neurodermitis (medizinisch: atopische Dermatitis) ist eine <strong>chronisch-entzündliche</strong> Hauterkrankung
          mit Phasen von Schüben und Ruhe. Sie zeigt sich durch <strong>Trockenheit, Juckreiz</strong> und oft gerötete,
          schuppige Areale. Wichtig ist: <strong>Eine einzelne „Hauptursache“ gibt es nicht</strong>. Stattdessen greifen mehrere
          Puzzleteile ineinander: genetische Veranlagung, eine anfällige Hautbarriere, ein empfindliches Immunsystem sowie
          Einflüsse aus Umwelt, Mikrobiom und Lebensstil. Je nachdem, wie diese Faktoren bei dir zusammenkommen, sehen
          Auslöser und Schweregrad unterschiedlich aus.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-1">Kurz erklärt</h3>
            <p className="text-sm">
              <strong>Polyfaktoriell</strong> heißt: Viele Ursachen wirken zusammen. Das erklärt, warum Therapien häufig
              kombiniert werden und warum Trigger von Person zu Person variieren.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-1">Nicht ansteckend</h3>
            <p className="text-sm">
              Neurodermitis ist <strong>nicht</strong> infektiös. Du kannst sie niemandem übertragen.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-1">Onset</h3>
            <p className="text-sm">
              Meist beginnt die Erkrankung im <strong>frühen Kindesalter</strong>, kann aber auch später auftreten und
              wiederkehren.
            </p>
          </div>
        </div>
      </section>

      <section id="genetik-hautbarriere" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">
          Genetik &amp; Hautbarriere: die Basis (u.a. Filaggrin)
        </h2>
        <p>
          Deine Haut ist wie eine <strong>Ziegelmauer</strong>: Zellen sind die Ziegel, Fette sind der Mörtel. Ein zentraler
          Baustoff ist das <strong>Protein Filaggrin</strong>. Varianten im <em>FLG</em>-Gen können dazu führen, dass weniger
          Filaggrin gebildet wird. Folge: Die Hautbarriere wird <strong>durchlässiger</strong>, Wasser verdunstet schneller
          und Reizstoffe dringen leichter ein. Bei einem Teil der Betroffenen ist genau das der Startpunkt, warum die Haut so
          sensibel reagiert. Genetik bestimmt das Risiko, löst aber nicht automatisch Schübe aus &ndash; dafür braucht es meist
          Trigger (siehe unten).
        </p>

        <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <h3 className="font-semibold mb-2">2&nbsp;zu&nbsp;1 &ndash; Schnellvergleich</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <h4 className="font-medium mb-1">Wenn Filaggrin fehlt</h4>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Barriere wird löchrig</li>
                <li>Wasserverlust &amp; Trockenheit</li>
                <li>Reizstoffe/Allergene dringen leichter ein</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <h4 className="font-medium mb-1">Was du tun kannst</h4>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Konsequent rückfettend pflegen</li>
                <li>Duft-&amp; Farbstoffe meiden</li>
                <li>Sanfte Reinigung, lauwarm, kurz</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <h4 className="font-medium mb-1">Merke</h4>
              <p className="text-sm">
                Genetik lädt die Pistole, <strong>Trigger</strong> drücken den Abzug. Beides gehört zusammen.
              </p>
            </div>
          </div>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Bei vielen Betroffenen ist eine <strong>Barriere-Schwäche</strong> der erste Dominostein. Wer die Barriere
            stabilisiert, nimmt Entzündungen den Nährboden.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            &mdash; Zusammenfassung aktueller Leitlinien und Übersichtsarbeiten (indirektes Zitat)
          </figcaption>
        </figure>
      </section>

      <section id="immunsystem" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">
          Immunsystem: Warum entzündet sich die Haut so schnell?
        </h2>
        <p>
          Bei Neurodermitis reagiert das <strong>Immunsystem</strong> überempfindlich. Gerät die Barriere außer Balance,
          „sieht“ das Immunsystem mehr Fremdstoffe auf der Haut. Es antwortet mit <strong>Entzündung</strong>, die sich als
          Juckreiz, Rötung und teils nässende Stellen zeigt. Dieser Kreislauf verstärkt sich selbst: Juckreiz führt zu
          Kratzen, Kratzen verletzt die Barriere, neue Entzündungsreize folgen. Moderne Medikamente zielen daher auf
          <strong> Entzündungssignale</strong> oder <strong>Juckreizbahnen</strong> ab &ndash; aber die Grundlage bleibt die
          tägliche Barrierepflege.
        </p>

        <aside className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <h3 className="font-semibold mb-1">Infobox: Der Juckreiz-Kreislauf</h3>
          <p className="text-sm">
            Trockenheit &rarr; Juckreiz &rarr; Kratzen &rarr; Mikroverletzungen &rarr; Entzündung &rarr; noch mehr Juckreiz.
            Unterbrechen kannst du ihn mit <strong>routinemäßiger Pflege</strong>, <strong>kurzen Fingernägeln</strong>,
            <strong> kühleren Kompressen</strong> und medizinischer Therapie nach Plan.
          </p>
        </aside>
      </section>

      <section id="mikrobiom-umwelt" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">Mikrobiom &amp; Umwelt: Was verschiebt das Gleichgewicht?</h2>
        <p>
          Auf gesunder Haut leben unzählige Mikroorganismen &ndash; das <strong>Mikrobiom</strong>. Gerät die Barriere ins
          Wanken, verändern sich diese Gemeinschaften. Bestimmte Keime (z.&nbsp;B. <em>Staphylococcus aureus</em>) können
          sich leichter ausbreiten und Entzündungen anfachen. Parallel wirken <strong>Umweltfaktoren</strong> wie trockene
          Heizungsluft, raue Wolle, schweißtreibender Sport, Reinigungs- und Duftstoffe sowie Allergene. All das sind keine
          „Ursachen“ im engeren Sinn, aber <strong>Trigger</strong>, die Schübe lostreten oder verlängern können.
        </p>

        <div className="mt-5 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">Trigger</th>
                <th className="text-left font-semibold p-3">Möglicher Effekt</th>
                <th className="text-left font-semibold p-3">Was hilft im Alltag?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Trockene Luft/Kälte</td>
                <td className="p-3">Mehr Wasserverlust, Juckreiz steigt</td>
                <td className="p-3">Luft befeuchten, rückfettend pflegen, Duschzeiten kurz halten</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Wolle/raue Stoffe</td>
                <td className="p-3">Mechanische Reizung</td>
                <td className="p-3">Baumwolle/Seide, Etiketten abschneiden, lockere Passform</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Schweiß</td>
                <td className="p-3">pH-Verschiebung, Brennen</td>
                <td className="p-3">Kurz abduschen, abtupfen statt reiben</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Duft-/Farbstoffe</td>
                <td className="p-3">Irritation möglich</td>
                <td className="p-3">Duftfrei, wenige Inhaltsstoffe, Test an kleiner Stelle</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Hausstaubmilben/Pollen</td>
                <td className="p-3">Allergische Reaktion als Schubverstärker</td>
                <td className="p-3">Allergiemanagement, Housestaub reduzieren, Filter nutzen</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Stress/Schlafmangel</td>
                <td className="p-3">Hormonelle/neurale Einflusswege</td>
                <td className="p-3">Schlafroutine, Entspannung, Pausen einplanen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="trigger" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">Häufige Trigger im Alltag &amp; wie du sie erkennst</h2>
        <p>
          Nicht jeder Trigger wirkt bei jeder Person gleich stark. Entscheidend ist, <strong>dein Muster</strong> zu
          erkennen. Das gelingt mit einem einfachen Trigger-Logbuch: Datum, Situation, Hautzustand (Skala 0&ndash;10),
          Maßnahmen, Ergebnis. Nach 2&ndash;4 Wochen siehst du Trends.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <h3 className="font-semibold mb-1">Schnell-Check</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Neue Pfleg/Waschprodukte? Zusammensetzung prüfen.</li>
              <li>Mehr Heizungsluft? Luftfeuchte 40&ndash;60&nbsp;% anpeilen.</li>
              <li>Sport/Schweiß? Nach dem Training kurz abduschen.</li>
              <li>Stressphase? Mini-Routinen gegen Abendjuckreiz planen.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <h3 className="font-semibold mb-1">Wann ärztlich abklären?</h3>
            <p className="text-sm">
              Bei starkem Juckreiz, nässenden Ekzemen, Infektzeichen, Schlafstörungen oder wenn Selbstmanagement nicht
              ausreicht. Allergiediagnostik kann sinnvoll sein, wenn die Anamnese dafür spricht.
            </p>
          </div>
        </div>
      </section>

      <section id="mythen" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">
          Mythen-Check: „Ist Neurodermitis ansteckend?“ &amp; Co.
        </h2>
        <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>„Ansteckend?“</strong> Nein. Es handelt sich um eine <em>entzündliche</em> Erkrankung, nicht um
              eine Infektion.
            </li>
            <li>
              <strong>„Nur Kinder betroffen?“</strong> Häufiger Beginn früh, aber auch Erwachsene sind betroffen; Rückfälle sind möglich.
            </li>
            <li>
              <strong>„Nur Allergie?“</strong> Allergien können Schübe verstärken, erklären aber nicht alle Fälle. Barriere
              und Immunsystem spielen mit.
            </li>
            <li>
              <strong>„Ein Wundermittel löst alles?“</strong> Unwahrscheinlich. Meist braucht es <strong>Kombi-Strategien</strong>:
              Pflege, Trigger-Management, ggf. Medikamente.
            </li>
          </ul>
        </div>
      </section>

      <section id="praxis" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">
          Praxis: Von der Ursache zur Strategie &ndash; dein 3-Schritte-Plan
        </h2>
        <ol className="list-decimal ml-5 space-y-3">
          <li>
            <strong>Barriere aufbauen:</strong> Täglich rückfettend pflegen, kurze lauwarme Duschen, milde Reiniger, Kleidung
            aus weichen Stoffen. Ziel: Wasser halten, Reizstoffe fernhalten.
          </li>
          <li>
            <strong>Trigger steuern:</strong> Duft-/Farbstoffe reduzieren, Luftfeuchte optimieren, Schweißmanagement,
            Stress-Schutzrituale. Ein Logbuch zeigt, was bei dir zählt.
          </li>
          <li>
            <strong>Entzündung behandeln:</strong> Nach ärztlichem Plan. Von Basispflege über antientzündliche
            topische Therapien bis hin zu modernen Wirkstoffen &ndash; je nach Schweregrad.
          </li>
        </ol>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">Ist Neurodermitis vererbbar?</h3>
            <p>
              Es gibt eine <strong>genetische Komponente</strong>. Varianten u.&nbsp;a. im <em>FLG</em>-Gen erhöhen das
              Risiko. Ob die Erkrankung ausbricht, hängt zusätzlich von Barrierezustand, Immunsystem und Triggern ab.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Welche Rolle spielt das Mikrobiom?</h3>
            <p>
              Gerät die Barriere aus dem Gleichgewicht, verschiebt sich die Keimzusammensetzung der Haut. Bestimmte Keime
              können Entzündung fördern. Sanfte Pflege und Triggerkontrolle stabilisieren indirekt auch das Mikrobiom.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Kann Stress Schübe auslösen?</h3>
            <p>
              Ja, Stress kann über Nerven- und Hormonwege Juckreiz und Entzündung verstärken. Kleine, regelmäßige
              Entspannungsroutinen sind oft wirksamer als seltene „Großaktionen“.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Sind Allergien die Ursache meiner Neurodermitis?</h3>
            <p>
              Allergien sind <strong>ein</strong> möglicher Verstärker, aber nicht die alleinige Ursache. Eine sinnvolle
              Abklärung richtet sich nach deiner Vorgeschichte und den Symptomen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Warum helfen rückfettende Cremes so gut?</h3>
            <p>
              Sie <strong>dichten</strong> die Barriere besser ab, reduzieren Wasserverlust und damit Juckreiz. Das gibt
              der Haut die Chance, sich zu beruhigen.
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
                  name: "Ist Neurodermitis vererbbar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Es gibt eine genetische Komponente. Varianten u. a. im FLG-Gen erhöhen das Risiko. Ob die Erkrankung ausbricht, hängt zusätzlich von Barrierezustand, Immunsystem und Triggern ab.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Rolle spielt das Mikrobiom?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Gerät die Barriere aus dem Gleichgewicht, verschiebt sich die Keimzusammensetzung der Haut. Bestimmte Keime können Entzündung fördern. Sanfte Pflege und Triggerkontrolle stabilisieren indirekt auch das Mikrobiom.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Kann Stress Schübe auslösen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ja, Stress kann über Nerven- und Hormonwege Juckreiz und Entzündung verstärken. Kleine, regelmäßige Entspannungsroutinen sind oft wirksamer als seltene Großaktionen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Sind Allergien die Ursache meiner Neurodermitis?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Allergien sind ein möglicher Verstärker, aber nicht die alleinige Ursache. Eine sinnvolle Abklärung richtet sich nach der Anamnese und den Symptomen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Warum helfen rückfettende Cremes so gut?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Sie dichten die Barriere besser ab, reduzieren Wasserverlust und Juckreiz. Das unterstützt die Haut, sich zu beruhigen.",
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
          <strong>Ursachen von Neurodermitis &ndash; einfach erklärt:</strong> Genetik (u.&nbsp;a. Filaggrin), eine
          durchlässige Hautbarriere und ein überaktives Immunsystem bilden die Grundlage. Schübe entstehen meist, wenn
          darüber hinaus <strong>Trigger</strong> wie trockene Luft, Schweiß, Reizstoffe, Allergene oder Stress
          dazukommen. Wer Barrierepflege konsequent umsetzt und persönliche Trigger kennt, gewinnt im Alltag spürbar
          Kontrolle.
        </p>
      </section>

      {/* Call to Action Section – exakt wie Vorlage (als Raw-HTML injiziert) */}
      <section
        aria-label="Newsletter"
        className="mt-14"
        dangerouslySetInnerHTML={{
          __html: `
<!-- Begin Brevo Form -->
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
  #sib-container textarea::placeholder { text-align: left; font-family: Helvetica, sans-serif; color: #c0ccda; }
  #sib-container a { text-decoration: underline; color: #2BB2FC; }
</style>
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
<!--  END - We recommend to place the above code in head tag of your website html -->

<!-- START - We recommend to place the below code where you want the form in your website html  -->
<div class="sib-form" style="text-align: center; background-color: #EFF2F7;">
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
  window.translation = { common: { selectedList: '{quantity} Liste ausgewählt', selectedLists: '{quantity} Listen ausgewählt', selectedOption: '{quantity} ausgewählt', selectedOptions: '{quantity} ausgewählt' } };
  var AUTOHIDE = Boolean(0);
</script>
<script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>
<!-- End Brevo Form -->
          `,
        }}
      />

      {/* Mini-Glossar */}
      <section id="glossar" className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar &ndash; Die wichtigsten Begriffe zu Neurodermitis-Ursachen
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
                <td className="p-3 font-medium text-zinc-900">Filaggrin</td>
                <td className="p-3 text-zinc-700">
                  Strukturprotein in der obersten Hautschicht; hilft, die Barriere
                  dicht zu halten. Varianten im <em>FLG</em>-Gen erhöhen das Risiko für Neurodermitis.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Hautbarriere</td>
                <td className="p-3 text-zinc-700">
                  Schutzschicht der Haut aus Zellen und Fetten; verhindert Wasserverlust
                  und das Eindringen von Reizstoffen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Mikrobiom</td>
                <td className="p-3 text-zinc-700">
                  Gesamtheit der Mikroorganismen auf der Haut; im Gleichgewicht schützt es,
                  bei Dysbalance kann es Entzündung fördern.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Trigger</td>
                <td className="p-3 text-zinc-700">
                  Auslöser/Verstärker von Schüben, z.&nbsp;B. trockene Luft, Schweiß, Duftstoffe,
                  Allergene, Stress.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Juckreiz-Kreislauf</td>
                <td className="p-3 text-zinc-700">
                  Teufelskreis aus Trockenheit &rarr; Juckreiz &rarr; Kratzen &rarr; Verletzungen
                  &rarr; Entzündung &rarr; mehr Juckreiz.
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
            alt="Autorin: Jennifer Krause"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-semibold">Jennifer Krause</div>
            <div className="text-sm text-zinc-700">
              Expertin für Hautgesundheit &ndash; Schwerpunkte: Barrierepflege, entzündliche Dermatosen,
              evidenzbasierte Hautroutinen.
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-zinc-700">
            Überprüft von: <strong>Hautsache Gesund Redaktion</strong> &ndash; Medizinjournalismus und
            Qualitätsmanagement.
          </p>
        </div>
      </section>

      {/* Quellenverzeichnis */}
      <section id="quellen" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            S3-Leitlinie „Atopische Dermatitis (Neurodermitis)“ (AWMF-Register 013-027), Version 4.3, Stand:
            16.06.2023, gültig bis 15.06.2028. PDF: https://register.awmf.org/assets/guidelines/013-027l_S3_Atopische-Dermatitis-AD-Neurodermitis-atopisches-Ekzem_2024-01.pdf
          </li>
          <li>
            National Eczema Association: „Atopic Dermatitis &ndash; Causes“. https://nationaleczema.org/types-of-eczema/atopic-dermatitis/
          </li>
          <li>
            National Eczema Association: „Eczema Facts &amp; Statistics“. https://nationaleczema.org/eczema-facts/
          </li>
          <li>
            Mayo Clinic: „Atopic dermatitis (eczema) &ndash; Symptoms and causes“, aktualisiert 15.05.2024.
            https://www.mayoclinic.org/diseases-conditions/atopic-dermatitis-eczema/symptoms-causes/syc-20353273
          </li>
          <li>
            Zakiudin DP et&nbsp;al. „Filaggrin Mutation Status and Prevention of Atopic Dermatitis“, 2024 (Open Access).
            https://pmc.ncbi.nlm.nih.gov/articles/PMC11064679/
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
              "Neurodermitis-Ursachen einfach erklärt: Gene, Hautbarriere, Trigger – was wirklich dahintersteckt",
            description:
              "Verstehe die Ursachen von Neurodermitis: Genetik (Filaggrin), Hautbarriere, Immunsystem, Mikrobiom & Umwelt-Trigger – kompakt und verständlich.",
            inLanguage: "de-DE",
            image: "https://www.hautwissen-kompakt.de/herobild_ursachen.jpg",
            author: {
              "@type": "Person",
              name: author.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Hautsache Gesund",
            },
            dateModified: "2025-09-20",
            datePublished: "2025-09-20",
            mainEntityOfPage:
              "https://www.hautwissen-kompakt.de/blog/neurodermitis-ursachen",
          }),
        }}
      />
    </article>
  );
}
