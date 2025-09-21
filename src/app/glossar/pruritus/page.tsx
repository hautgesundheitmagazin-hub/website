// src/app/glossar/pruritus/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pruritus (Juckreiz) einfach erklärt: Ursachen, Diagnose & Behandlung – mit Selbsthilfe-Tipps",
  description:
    "Pruritus, der medizinische Begriff für Juckreiz: verständliche Definition, häufige Ursachen, Diagnose, Therapien (topisch & systemisch) und praktische Sofortmaßnahmen.",
  alternates: {
    canonical: "https://www.hautwissen-kompakt.de/glossar/pruritus",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "article",
    title:
      "Pruritus (Juckreiz): Ursachen, Diagnose & Behandlung – verständlich erklärt",
    description:
      "Alles Wichtige zu Pruritus für Laien: Warum juckt die Haut, was steckt dahinter und was hilft wirklich?",
    url: "https://www.hautwissen-kompakt.de/glossar/pruritus",
    images: [
      {
        url: "/herobild_pruritus.jpg",
        width: 1600,
        height: 600,
        alt: "Symbolbild: Hand berührt juckende Haut – Thema Pruritus (Juckreiz)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pruritus (Juckreiz): Ursachen, Diagnose & Behandlung – verständlich erklärt",
    description:
      "Definition, häufige Ursachen, Diagnostik, Therapien und Selbsthilfe bei Pruritus.",
    images: ["/herobild_pruritus.jpg"],
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
    >
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
          Pruritus (Juckreiz): Definition, Ursachen, Diagnose &amp; was wirklich
          hilft
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Pruritus ist der medizinische Name für Juckreiz. Hier erfährst Du
          kurz&amp;knapp, was dahintersteckt, wie Du die wichtigsten Ursachen
          erkennst und welche Behandlung – von einfachen Hausmitteln bis zu
          modernen Therapien – sinnvoll ist.
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
              <source media="(max-width: 640px)" srcSet="/herobild_pruritus.jpg" />
              <img
                loading="eager"
                fetchPriority="high"
                src="/herobild_pruritus.jpg"
                alt="Symbolbild: juckende Haut bei Pruritus"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Symbolbild zum Thema Pruritus (Juckreiz)
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
            <strong>Pruritus = Juckreiz:</strong> ein Hautempfinden, das den
            Drang zum Kratzen auslöst – lokal (z.&nbsp;B. am Arm) oder
            generalisiert (am ganzen Körper).
          </li>
          <li>
            <strong>Typische Auslöser:</strong> trockene Haut, Ekzeme/atopische
            Dermatitis, Allergien, Infektionen (z.&nbsp;B. Krätze), aber auch
            innere Ursachen wie Leber-, Nieren-, Blut- oder Schilddrüsenerkrankungen.
          </li>
          <li>
            <strong>Warnzeichen:</strong> starker Juckreiz ohne sichtbare
            Hautveränderungen, nächtlicher Juckreiz, Begleitsymptome (Fieber,
            Gewichtsverlust) – das gehört ärztlich abgeklärt.
          </li>
          <li>
            <strong>Therapie ist stufenweise:</strong> Basis ist
            Rückfettung/Feuchtigkeit, dann gezielte Wirkstoffe (z.&nbsp;B.
            Kortison-haltige Cremes, Antihistaminika) bis hin zu modernen
            Systemtherapien (z.&nbsp;B. Biologika) je nach Ursache.
          </li>
          <li>
            <strong>Sofort-Hilfe:</strong> kühle Umschläge, pH-milde Pflege,
            sanfte Kleidung, kurze Nägel, Stressabbau – und nicht aufkratzen,
            um Entzündungen zu vermeiden.
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
            <a className={`hover:underline ${accent} font-medium`} href="#was-ist-pruritus">
              Was ist Pruritus?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#ursachen">
              Häufige Ursachen &amp; Risikofaktoren
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#symptome">
              Symptome: Wie fühlt sich Pruritus an?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#diagnose">
              Diagnose: Welche Tests sind sinnvoll?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#behandlung">
              Behandlung: Von Pflege bis Biologika
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#selbsthilfe">
              Selbsthilfe &amp; Alltagstipps
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#arzt">
              Wann zum Arzt?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#besonderheiten">
              Besonderheiten: Schwangerschaft, Kinder, Ältere
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#praevention">
              Vorbeugung &amp; Hautpflege
            </a>
          </li>
        </ol>
      </nav>

      {/* Hauptteil */}
      <section id="was-ist-pruritus">
        <h2 className="text-2xl font-bold mb-2">Was ist Pruritus?</h2>
        <p className="leading-relaxed">
          Pruritus ist der medizinische Begriff für Juckreiz – ein unangenehmes
          Hautempfinden, das den Impuls zum Kratzen auslöst. Der Juckreiz kann
          kurzzeitig auftreten (akuter Pruritus) oder länger als sechs Wochen
          bestehen (chronischer Pruritus). Wichtig: Pruritus ist ein Symptom,
          keine eigene Krankheit. Dahinter können harmlose Auslöser wie trockene
          Haut stecken, aber auch behandlungsbedürftige Haut- oder
          Systemerkrankungen.
        </p>

        <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="m-0 text-sm">
            <strong>Gut zu wissen:</strong> Es gibt histaminvermittelte
            Juckreize (z.&nbsp;B. bei Allergie) und nicht-histaminvermittelte
            Formen (z.&nbsp;B. bei chronischer Nieren- oder Lebererkrankung).
            Das erklärt, warum Antihistaminika nicht immer helfen.
          </p>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Chronischer Pruritus braucht eine gezielte, stufenweise Therapie –
            Grundlage ist konsequente Pflege, ergänzt um je nach Ursache
            topische, systemische und manchmal neuartige zielgerichtete
            Behandlungen.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — sinngemäß nach aktuellen europäischen Leitlinien (indirektes
            Zitat)
          </figcaption>
        </figure>
      </section>

      <section id="ursachen" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Häufige Ursachen &amp; Risikofaktoren</h2>
        <p className="leading-relaxed">
          Die Ursache entscheidet über die richtige Behandlung. Häufig sind:
        </p>

        <div className="mt-5 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">Ursache</th>
                <th className="text-left font-semibold p-3">Typische Hinweise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Trockene Haut (Xerose)
                </td>
                <td className="p-3 text-zinc-700">
                  Feine Schuppen, Spannungsgefühl, Winter/Heizungsluft, häufig
                  bei Senior:innen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Atopische Dermatitis/Ekzem
                </td>
                <td className="p-3 text-zinc-700">
                  Entzündete, gerötete Plaques, starker Juckreiz, oft in den
                  Armbeugen/ Kniekehlen; familiäre Allergieneigung.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Allergie/Urtikaria</td>
                <td className="p-3 text-zinc-700">
                  Quaddeln, rascher Beginn nach Auslöser (Nahrung, Medikamente,
                  Insektenstich).
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Infektionen</td>
                <td className="p-3 text-zinc-700">
                  z.&nbsp;B. Krätze (starker nächtlicher Juckreiz, kleine
                  Gänge), Pilzinfektionen, Kopfläuse.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Systemerkrankungen
                </td>
                <td className="p-3 text-zinc-700">
                  Leber-/Gallestau (cholestatischer Juckreiz), Niereninsuffizienz
                  (urämischer Juckreiz), Eisenmangel, Schilddrüsenstörungen,
                  Blutkrankheiten.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Neuropathischer/psychogener Pruritus
                </td>
                <td className="p-3 text-zinc-700">
                  Juckreiz ohne klare Hautveränderung, Trigger durch Nerven- oder
                  psychische Faktoren (Stress, Angst).
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Medikamente</td>
                <td className="p-3 text-zinc-700">
                  z.&nbsp;B. Opiate, einige Krebs- oder Immuntherapien,
                  Hormonpräparate.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Warum juckt es biologisch?</h3>
            <p className="m-0 text-sm">
              Reizstoffe (z.&nbsp;B. Histamin, Zytokine wie IL-31) aktivieren
              Nervenfasern in der Haut. Signale laufen über das Rückenmark ins
              Gehirn und lösen den Kratzimpuls aus.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Chronischer Juckreiz</h3>
            <p className="m-0 text-sm">
              Dauert das Ganze &gt; 6 Wochen, sprechen Fachleute von chronischem
              Pruritus. Häufig steckt eine Grunderkrankung oder ein persistierender
              Entzündungsreiz dahinter.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Prurigo nodularis</h3>
            <p className="m-0 text-sm">
              Durch ständiges Kratzen entstehen harte Knoten – das nennt sich
              chronische Prurigo. Sie gilt als schwere Form im Pruritus-Spektrum.
            </p>
          </div>
        </div>
      </section>

      <section id="symptome" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Symptome: Wie fühlt sich Pruritus an?</h2>
        <p className="leading-relaxed">
          Betroffene beschreiben Brennen, Kribbeln oder Stechen. Die Haut kann
          normal aussehen oder gerötet, schuppig und aufgekratzt sein. Kratzen
          lindert kurzfristig, verstärkt aber Entzündung, Hautbarriereschäden
          und Infektionsrisiko. Häufig juckt es abends und nachts stärker.
        </p>
      </section>

      <section id="diagnose" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Diagnose: Welche Tests sind sinnvoll?</h2>
        <p className="leading-relaxed">
          Zuerst zählt das Gespräch (Dauer, Auslöser, Medikamente, Vorerkrankungen)
          und die Hautinspektion. Je nach Befund folgen Laborwerte oder weitere
          Abklärungen:
        </p>
        <div className="mt-4 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">Fragestellung</th>
                <th className="text-left font-semibold p-3">Mögliche Untersuchungen</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Allergie?</td>
                <td className="p-3 text-zinc-700">
                  Prick-/Epikutantest, IgE, Auslassversuche.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Leber/Galle?</td>
                <td className="p-3 text-zinc-700">
                  Leberwerte, Bilirubin, Gallensäuren; ggf. Sonografie.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Nieren?</td>
                <td className="p-3 text-zinc-700">Kreatinin, eGFR, Harnstoff.</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Blut/Endokrin?</td>
                <td className="p-3 text-zinc-700">
                  Blutbild, Ferritin/Eisen, TSH f.&nbsp;Schilddrüse.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Infektion?</td>
                <td className="p-3 text-zinc-700">
                  Hautabstrich, Mikroskopie, Pilzkultur; bei Krätze: Dermatoskopie.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-700">
          Tipp: Wenn die Haut unauffällig ist, der Juckreiz aber stark und
          generalisiert, sollten systemische Ursachen gezielt gesucht werden.
        </p>
      </section>

      <section id="behandlung" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Behandlung: Von Pflege bis Biologika</h2>
        <p className="leading-relaxed">
          Die Therapie richtet sich nach der Ursache und folgt meist einem
          Stufenplan – von Basismaßnahmen bis zu spezialisierten Medikamenten:
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">1) Basis</h3>
            <ul className="m-0 list-disc ml-5 text-sm space-y-1">
              <li>Konsequente Feuchtigkeits- &amp; Rückfettungspflege</li>
              <li>pH-milde, duftfreie Reinigung, lauwarm duschen</li>
              <li>Kühlen statt kratzen; kurze Nägel</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">2) Zielgerichtet lokal</h3>
            <ul className="m-0 list-disc ml-5 text-sm space-y-1">
              <li>Kortikosteroid-Cremes zeitlich begrenzt</li>
              <li>Calcineurin-Inhibitoren (Tacrolimus/Pimecrolimus)</li>
              <li>Gerbstoffe, Menthol, Polidocanol zur Linderung</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">3) Systemisch</h3>
            <ul className="m-0 list-disc ml-5 text-sm space-y-1">
              <li>Antihistaminika (v. a. bei Urtikaria/Allergie)</li>
              <li>
                Gabapentinoide/Antidepressiva bei neuropathischem Pruritus
              </li>
              <li>
                Moderne Therapien: z.&nbsp;B. Biologika/JAK-Inhibitoren bei
                atopischer Dermatitis; spezielle Optionen bei cholestatischem
                oder urämischem Pruritus (ärztlich abklären).
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <p className="m-0 text-sm">
            Hinweis: Medikamente immer ärztlich absprechen. Bei unklarer Ursache
            steht die Behandlung der Grunderkrankung (z.&nbsp;B. Leber, Niere,
            Blut, Schilddrüse) im Vordergrund.
          </p>
        </div>
      </section>

      <section id="selbsthilfe" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Selbsthilfe &amp; Alltagstipps</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Sofort</h3>
            <ul className="m-0 list-disc ml-5 text-sm space-y-1">
              <li>Kühle Umschläge, Gel-Kühlpads (in Tuch wickeln)</li>
              <li>Kurz duschen, lauwarm; selten baden</li>
              <li>Baumwolle/Leinen tragen, tagsüber cremen</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Nachts</h3>
            <ul className="m-0 list-disc ml-5 text-sm space-y-1">
              <li>Schlafzimmer kühler halten, Luft befeuchten</li>
              <li>Baumwollhandschuhe, kurze Nägel, Bettwäsche glatt</li>
              <li>Abendritual: rückfettende Pflege 30 – 60 Min. vor dem Schlaf</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Stress</h3>
            <ul className="m-0 list-disc ml-5 text-sm space-y-1">
              <li>Entspannung: Atemübungen, Progressive Muskelrelaxation</li>
              <li>Trigger-Tagebuch (Essen, Kleidung, Situationen)</li>
              <li>
                Bei psychogenem Juckreiz: psychologische Unterstützung erwägen
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="arzt" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Wann zum Arzt?</h2>
        <ul className="list-disc ml-5">
          <li>Juckreiz &gt; 6 Wochen oder sehr stark</li>
          <li>Juckreiz ohne sichtbare Hautveränderungen</li>
          <li>Begleitsymptome: Fieber, Nachtschweiß, Gewichtsverlust</li>
          <li>Gelbliche Haut/Skleren, dunkler Urin (Leber/Cholestase-Verdacht)</li>
          <li>Nieren- oder Schilddrüsenerkrankungen bekannt</li>
          <li>Schwangere mit generalisiertem Juckreiz</li>
        </ul>
      </section>

      <section id="besonderheiten" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">
          Besonderheiten: Schwangerschaft, Kinder, Ältere
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Schwangerschaft</h3>
            <p className="m-0 text-sm">
              Juckreiz kann harmlos sein (Hautdehnung, Trockenheit), sollte aber
              bei Ausbreitung und besonders bei nächtlichem Ganzkörperjuckreiz
              ärztlich abgeklärt werden (intrahepatische Cholestase).
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <h3 className="font-semibold mb-2">Kinder &amp; Ältere</h3>
            <p className="m-0 text-sm">
              Kinder jucken oft bei atopischer Dermatitis. Ältere sind
              anfälliger für trockene Haut und Arzneimittel-Nebenwirkungen.
            </p>
          </div>
        </div>
      </section>

      <section id="praevention" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Vorbeugung &amp; Hautpflege</h2>
        <ul className="list-disc ml-5">
          <li>Regelmäßig rückfettende Pflege, besonders nach dem Duschen</li>
          <li>Duft- &amp; alkoholarme Produkte, pH-mild</li>
          <li>Kurze, lauwarme Duschen; Reibung vermeiden</li>
          <li>Weiche, atmungsaktive Kleidung; Wollkontakt mindern</li>
          <li>Ausreichend trinken, Wohnraum nicht überheizen</li>
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">Was ist der Unterschied zwischen Juckreiz und Pruritus?</h3>
            <p>
              Keiner – Pruritus ist der medizinische Fachbegriff für Juckreiz.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Hilft bei jedem Juckreiz ein Antihistaminikum?</h3>
            <p>
              Nein. Antihistaminika wirken vor allem bei histaminvermitteltem
              Juckreiz (z.&nbsp;B. Urtikaria/Allergie). Bei Leber-, Nieren- oder
              neuropathischem Pruritus sind andere Ansätze nötig.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Was tun bei Juckreiz ohne sichtbaren Ausschlag?</h3>
            <p>
              Zuerst Basismaßnahmen (Pflege, Kühlen). Bleibt der Juckreiz oder
              ist er stark/generalisiert, ärztlich abklären lassen (Blutwerte,
              Leber, Niere, Schilddrüse).
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Warum juckt es nachts stärker?</h3>
            <p>
              Durch Temperatur- und Hormonrhythmus ist die Hautbarriere nachts
              oft durchlässiger; außerdem lenkt tagsüber mehr ab. Gute
              Schlafhygiene und Abendpflege helfen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Ist Kratzen wirklich so schlimm?</h3>
            <p>
              Kratzen verletzt die Hautbarriere, fördert Entzündungen und
              Infektionen und kann einen Teufelskreis mit Knotenbildung
              (Prurigo) auslösen. Besser: kühlen, klopfen, eincremen.
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
                  name: "Was ist der Unterschied zwischen Juckreiz und Pruritus?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Keiner – Pruritus ist der medizinische Fachbegriff für Juckreiz.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Hilft bei jedem Juckreiz ein Antihistaminikum?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Nein. Antihistaminika wirken vor allem bei histaminvermitteltem Juckreiz (z. B. Urtikaria/Allergie). Bei Leber-, Nieren- oder neuropathischem Pruritus sind andere Ansätze nötig.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was tun bei Juckreiz ohne sichtbaren Ausschlag?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Zuerst Basismaßnahmen (Pflege, Kühlen). Bleibt der Juckreiz oder ist er stark/generalisiert, ärztlich abklären lassen (Blutwerte, Leber, Niere, Schilddrüse).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Warum juckt es nachts stärker?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Durch Temperatur- und Hormonrhythmus ist die Hautbarriere nachts oft durchlässiger; außerdem lenkt tagsüber mehr ab. Gute Schlafhygiene und Abendpflege helfen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Ist Kratzen wirklich so schlimm?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Kratzen verletzt die Hautbarriere, fördert Entzündungen und Infektionen und kann einen Teufelskreis mit Knotenbildung (Prurigo) auslösen. Besser: kühlen, klopfen, eincremen.",
                  },
                },
              ],
            }),
          }}
        ></script>
      </section>

      {/* Summary */}
      <section id="zusammenfassung" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
        <p className="leading-relaxed">
          <strong>Worum geht&apos;s bei Pruritus?</strong> Juckreiz ist ein
          Symptom – die Bandbreite reicht von trockener Haut bis zu
          Systemerkrankungen. Mit strukturierter Diagnostik und einem
          stufenweisen Therapiekonzept lässt sich die Mehrheit der Fälle gut
          lindern. Pflege, Auslöser-Management und bei Bedarf moderne
          Medikationen bilden die wirksamste Kombination.
        </p>
      </section>

      {/* Call to Action – unverändert einbinden */}
      <section className="mt-14">
        <div className="rounded-2xl border border-zinc-200">
          <div className="p-5">
            <div
              dangerouslySetInnerHTML={{
                __html: `
<!-- Begin Brevo Form -->
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
<div class="sib-form" style="text-align: center;background-color: #EFF2F7;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:3px; border-width:1px; border-color:#C0CCD9; border-style:solid;">
      <form id="sib-form" method="POST" action="https://58a8e982.sibforms.com/serve/MUIFAM6AurHq03QEL-OAw6zYgw-Kxf5qhjK6OTFUFXRNTHxkpmLA4zD6fMcFgwYkzuEuZeR21235aJ6qTBg4SoTt57dyRrBvECSWxNMsXx0RZwio5-Cij443EEVjMQnLOCYo7Xyuv1mvLgZRUqHidNHg4ysq9qHb2x1yLAsEKJFs3ONd5o0vAxY-CDezgZbVVNFPhm8yeV9YECA-">
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="font-size:20px; font-weight:700; font-family:Helvetica, sans-serif; color:#090a0a; text-align:left">
            <p>10 sofort umsetzbare Neurodermitis-Tipps.</p>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="font-size:16px; font-family:Helvetica, sans-serif; color:#3C4858; text-align:left">
            <div class="sib-text-form-block">
              <p>Unsere Redaktion hat die drei neuesten Studien analysiert und für Dich in einfache Tipps heruntergebrochen.</p>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" style="font-weight: 700; font-size:16px; font-family:Helvetica, sans-serif; color:#3c4858; text-align:left" for="EMAIL" data-required="*">Wohin dürfen wir Dir die 10 Tipps schicken?</label>
                <div class="entry__field">
                  <input class="input " type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required />
                </div>
              </div>
              <label class="entry__error entry__error--primary" style="font-size:16px; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949; text-align:left;"></label>
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
              <label class="entry__error entry__error--primary" style="font-size:16px; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949; text-align:left;"></label>
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
        <input type="hidden" name="html_type" value="simple">
      </form>
    </div>
  </div>
</div>
<!-- End Brevo Form -->
`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar - Die wichtigsten Begriffe zu Pruritus
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
                <td className="p-3 font-medium text-zinc-900">Pruritus</td>
                <td className="p-3 text-zinc-700">
                  Medizinischer Begriff für Juckreiz; kann lokal oder
                  generalisiert auftreten.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Xerose</td>
                <td className="p-3 text-zinc-700">
                  Fachbegriff für trockene Haut – sehr häufiger Auslöser für
                  Juckreiz.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Cholestase</td>
                <td className="p-3 text-zinc-700">
                  Gallestau; kann generalisierten, oft nächtlichen Juckreiz
                  verursachen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Neuropathischer Pruritus
                </td>
                <td className="p-3 text-zinc-700">
                  Juckreiz durch Nervenstörung, oft ohne deutliche
                  Hautveränderungen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">IL-31</td>
                <td className="p-3 text-zinc-700">
                  Entzündungsbotenstoff (Zytokin), der Juckreizbahnen
                  mitsteuern kann.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Prurigo nodularis</td>
                <td className="p-3 text-zinc-700">
                  Knoten durch chronisches Kratzen; Teil des Pruritus-Spektrums.
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
              Expertin für Hautgesundheit; spezialisiert auf patientenfreundliche
              Aufbereitung dermatologischer Themen.
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-zinc-700">
            Überprüft von: <strong>Hautsache Gesund Redaktion</strong> – Medizinische
            Redaktion &amp; Qualitätssicherung.
          </p>
        </div>
      </section>

      {/* Quellenverzeichnis */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            Cleveland Clinic: Pruritus – Causes &amp; Treatments.{" "}
            <a href="https://my.clevelandclinic.org/health/diseases/11879-pruritus">
              https://my.clevelandclinic.org/health/diseases/11879-pruritus
            </a>
          </li>
          <li>
            European Guideline on Chronic Pruritus (2025, S2k).{" "}
            <a href="https://medicaljournalssweden.se/actadv/article/view/44220">
              https://medicaljournalssweden.se/actadv/article/view/44220
            </a>
          </li>
          <li>
            J Allergy Clin Immunol (2023): Basic mechanisms of itch.{" "}
            <a href="https://www.jacionline.org/article/S0091-6749%2823%2900602-4/fulltext">
              https://www.jacionline.org/article/S0091-6749(23)00602-4/fulltext
            </a>
          </li>
          <li>
            Mayo Clinic (2024): Itchy skin (pruritus) – overview.{" "}
            <a href="https://www.mayoclinic.org/diseases-conditions/itchy-skin/symptoms-causes/syc-20355006">
              https://www.mayoclinic.org/diseases-conditions/itchy-skin/symptoms-causes/syc-20355006
            </a>
          </li>
          <li>
            EADV Clinical Guidelines – Übersicht.{" "}
            <a href="https://eadv.org/publications/clinical-guidelines/">
              https://eadv.org/publications/clinical-guidelines/
            </a>
          </li>
          <li>
            IL-31 und Pruritus: Übersichtsarbeit (2023).{" "}
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10532079/">
              https://pmc.ncbi.nlm.nih.gov/articles/PMC10532079/
            </a>
          </li>
          <li>
            Type-2-Zytokine sensibilisieren menschliche Nervenzellen (2023).{" "}
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10586051/">
              https://pmc.ncbi.nlm.nih.gov/articles/PMC10586051/
            </a>
          </li>
          <li>
            JAMA Dermatology (2024): Chronic Pruritus – Review.{" "}
            <a href="https://jamanetwork.com/journals/jama/article-abstract/2819296%20">
              https://jamanetwork.com/journals/jama/article-abstract/2819296
            </a>
          </li>
          <li>
            Medscape (2025): Pruritus and Systemic Disease.{" "}
            <a href="https://emedicine.medscape.com/article/1098029-overview">
              https://emedicine.medscape.com/article/1098029-overview
            </a>
          </li>
          <li>
            Narrative Review (2025): Chronic pruritus.{" "}
            <a href="https://www.sciencedirect.com/science/article/pii/S036505962500042X">
              https://www.sciencedirect.com/science/article/pii/S036505962500042X
            </a>
          </li>
          <li>
            Systemische Ursachen &amp; Eisenmangel (Review).{" "}
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4512616/">
              https://pmc.ncbi.nlm.nih.gov/articles/PMC4512616/
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
            "@type": "BlogPosting",
            headline:
              "Pruritus (Juckreiz): Definition, Ursachen, Diagnose & was wirklich hilft",
            description:
              "Pruritus (Juckreiz) verständlich erklärt: Ursachen, Diagnostik, Therapien und Selbsthilfe-Tipps.",
            inLanguage: "de",
            image: "https://www.hautwissen-kompakt.de/herobild_pruritus.jpg",
            author: {
              "@type": "Person",
              name: "Jennifer Krause",
            },
            publisher: {
              "@type": "Organization",
              name: "Hautsache Gesund",
            },
            dateModified: "2025-09-21",
            mainEntityOfPage:
              "https://www.hautwissen-kompakt.de/glossar/pruritus",
          }),
        }}
      ></script>
    </article>
  );
}
