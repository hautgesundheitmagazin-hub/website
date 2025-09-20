// src/app/was-ist-neurodermitis/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Was ist Neurodermitis? Einfach erklärt – Ursachen, Symptome & Behandlung (2025)",
  description:
    "Neurodermitis (atopische Dermatitis) leicht verständlich: Ursachen, typische Symptome, Auslöser, Diagnose, Behandlung & Pflege. Mit praxisnahen Tipps für den Alltag.",
  alternates: {
    canonical: "https://www.hautsache-gesund.de/blog/was-ist-neurodermitis",
  },
  openGraph: {
    type: "article",
    title:
      "Was ist Neurodermitis? Einfach erklärt – Ursachen, Symptome & Behandlung",
    description:
      "Ein klarer Leitfaden zu Neurodermitis: Von den Ursachen bis zur Therapie – wissenschaftlich fundiert, verständlich erklärt.",
    url: "https://www.hautsache-gesund.de/blog/was-ist-neurodermitis",
    images: [
      {
        url: "/herobild_was_ist_neurodermitis.jpg",
        width: 1600,
        height: 600,
        alt: "Juckende Hautstelle am Arm – Symbolbild für Neurodermitis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Was ist Neurodermitis? Einfach erklärt – Ursachen, Symptome & Behandlung",
    description:
      "Die wichtigsten Fakten, Symptome, Trigger und Behandlungsoptionen bei Neurodermitis – kompakt & verständlich.",
    images: ["/herobild_was_ist_neurodermitis.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const accent =
  "text-emerald-700 hover:text-emerald-800 focus:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded";

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
          Was ist Neurodermitis? Einfach erklärt
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Du willst endlich verstehen, was hinter Neurodermitis steckt, welche
          Auslöser (Trigger) Schübe begünstigen und wie moderne Behandlungen
          helfen können? Hier bekommst Du alles Wichtige – klar, kompakt und
          alltagsnah.
        </p>

        {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
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
                srcSet="/herobild_was_ist_neurodermitis.jpg"
              />
              <img
                loading="eager"
                fetchPriority="high"
                src="/herobild_was_ist_neurodermitis.jpg"
                alt="Nahaufnahme einer trockenen, geröteten Hautstelle – Symbolbild für Neurodermitis"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Neurodermitis sichtbar als trockene, gerötete Haut mit Kratzspuren
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
            <strong>Neurodermitis</strong> (atopische Dermatitis) ist eine
            <strong> chronisch-entzündliche, nicht ansteckende</strong>{" "}
            Hauterkrankung mit <strong>starkem Juckreiz</strong> und trockener
            Haut.
          </li>
          <li>
            <strong>Typische Auslöser</strong> sind z.B. trockene Luft,
            Schwitzen, Reizstoffe, Stress, Infekte und individuelle Allergene.
          </li>
          <li>
            <strong>Diagnose</strong>: Blickdiagnose durch Ärzt:innen, unterstützt
            durch Verlauf, Juckreiz-Score und ggf. Allergietests.
          </li>
          <li>
            <strong>Therapie</strong>: Basis ist{" "}
            <strong>konsequente Pflege</strong> (Rückfetter/Emollienzien),
            bei Schub <strong>anti-entzündliche</strong> Cremes (z.B. milde
            Steroide, Calcineurin-Inhibitoren); bei stärkerer Ausprägung{" "}
            <strong>Systemtherapien</strong> (z.B. Biologika, JAK-Inhibitoren)
            durch Fachärzt:innen.
          </li>
          <li>
            <strong>Alltag</strong>: Trigger kennen, Hautbarriere schützen,
            Kratzalternativen nutzen, Schlaf und Stress im Blick behalten.
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
              Was ist Neurodermitis?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#symptome">
              Typische Symptome &amp; Schweregrade
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#ursachen">
              Ursachen &amp; Trigger: Warum flammt die Haut auf?
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#diagnose">
              Diagnose: So gehen Ärzt:innen vor
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#behandlung">
              Behandlung: Von Pflege bis Systemtherapie
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#alltagstipps">
              Alltagstipps: Pflege-Routine &amp; Trigger-Management
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#vergleich">
              Vergleich: Neurodermitis vs. trockene Haut
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
        </ol>
      </nav>

      {/* Hauptteil */}
      <section id="was-ist-neurodermitis" className="mt-8">
        <h2 className="text-2xl font-bold mb-3">
          Was ist Neurodermitis?
        </h2>
        <p className="leading-relaxed">
          Neurodermitis – in der Fachsprache <strong>atopische Dermatitis</strong> – ist eine
          <strong> chronische</strong> (länger andauernde) und oft{" "}
          <strong>schubweise</strong> verlaufende Entzündung der Haut. Typisch
          sind <strong>trockene, gerötete</strong> Hautstellen und{" "}
          <strong>starker Juckreiz</strong>. Die Erkrankung ist{" "}
          <strong>nicht ansteckend</strong>. Häufig beginnt sie im
          <strong> Kindesalter</strong>, kann aber in jedem Alter auftreten und
          wiederkehren.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Kurzdefinition</h3>
            <p className="text-zinc-700">
              Entzündliche Hauterkrankung mit Juckreiz, trockener Haut und
              Schüben; Teil des atopischen Formenkreises (z.B. Heuschnupfen,
              Asthma).
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Häufigkeit</h3>
            <p className="text-zinc-700">
              Häufigste chronisch-entzündliche Hauterkrankung; viele Kinder, aber
              auch Erwachsene betroffen.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Prognose</h3>
            <p className="text-zinc-700">
              Verläuft in Wellen. Mit guter Pflege &amp; Behandlung lassen sich
              Schübe meist deutlich reduzieren.
            </p>
          </div>
        </div>
      </section>

      <section id="symptome" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Typische Symptome &amp; Schweregrade
        </h2>
        <p className="leading-relaxed">
          Die Beschwerden variieren mit dem Alter und der Aktivität der
          Erkrankung. Zu den <strong>Kernsymptomen</strong> zählen:{" "}
          trockene Haut (Xerose), Juckreiz, Rötung, raue Plaques, ggf. Nässen
          und Krusten bei akuten Schüben. Durch Kratzen entstehen oft{" "}
          <em>Schürfungen</em> und später <em>Verdickungen</em> der Haut
          (Lichenifikation).
        </p>

        <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <h3 className="font-semibold mb-2">
            Häufig betroffene Körperstellen nach Alter
          </h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              <strong>Säuglinge</strong>: Wangen, Stirn, streckseitige Arme/Beine.
            </li>
            <li>
              <strong>Kinder</strong>: Beugen (Ellenbeugen, Kniekehlen), Hals,
              Handgelenke.
            </li>
            <li>
              <strong>Jugendliche/Erwachsene</strong>: Beugen, Hände, Augenlider,
              Hals/Nacken; oft chronisch-trockene Haut.
            </li>
          </ul>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Wie wird die Schwere eingeschätzt?</h3>
            <p className="text-zinc-700">
              In der Praxis nutzen Dermatolog:innen Scores wie{" "}
              <strong>SCORAD</strong> oder <strong>EASI</strong>, die Ausmaß,
              Rötung, Krusten/Nässen und Juckreiz berücksichtigen. Für Dich als
              Betroffene:r ist hilfreich, in 3 Stufen zu denken:{" "}
              <strong>mild</strong> (lokal begrenzt, eher trocken),{" "}
              <strong>moderat</strong> (häufigere Schübe, größere Areale),{" "}
              <strong>schwer</strong> (weit ausgedehnt, stark beeinträchtigender
              Juckreiz, Schlafstörung).
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Zeichen für einen akuten Schub</h3>
            <ul className="list-disc ml-5 space-y-1 text-zinc-700">
              <li>Plötzlich stärkerer Juckreiz</li>
              <li>Mehr Rötung, Wärme, eventuell Nässen</li>
              <li>Neue Kratzspuren, schlechter Schlaf</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="ursachen" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Ursachen &amp; Trigger: Warum flammt die Haut auf?
        </h2>
        <p className="leading-relaxed">
          Neurodermitis entsteht durch ein <strong>Zusammenspiel</strong> aus{" "}
          <strong>genetischer Veranlagung</strong> (z.B. Barrierestörung der
          Haut) und <strong>äußeren Faktoren</strong>. Die Hautbarriere lässt
          leichter Feuchtigkeit entweichen, Reizstoffe und Keime gelangen
          einfacher hinein – die Haut entzündet sich schneller.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-1">Innere Faktoren</h3>
            <ul className="list-disc ml-5 text-zinc-700 space-y-1">
              <li>Genetik (z.B. Filaggrin-Mutationen)</li>
              <li>Immunsystem (überaktive Entzündungswege)</li>
              <li>Atopie: familiäre Neigung zu Allergien</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-1">Äußere Trigger</h3>
            <ul className="list-disc ml-5 text-zinc-700 space-y-1">
              <li>Trockene Luft, Kälte/Hitze, Schwitzen</li>
              <li>Wolle/kratzige Kleidung, Duftstoffe/Reinigungsmittel</li>
              <li>Stress, Schlafmangel, Infekte</li>
              <li>Individuelle Allergene (z.B. Hausstaub, Pollen)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-1">Mikrobiom der Haut</h3>
            <p className="text-zinc-700">
              Bei Schüben findet sich häufig mehr <em>Staphylococcus aureus</em>.
              Gute Pflege und Anti-Entzündung helfen, das Gleichgewicht
              wiederherzustellen.
            </p>
          </div>
        </div>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Bei Neurodermitis ist die Hautbarriere wie eine Mauer mit
            Lücken&colon; Feuchtigkeit entweicht, Reizstoffe dringen leichter
            ein. Eine konsequente Pflege plus entzündungshemmende Therapie
            schließt diese Lücken – und die Haut kann sich beruhigen.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Jennifer Krause (indirektes Zitat aus der Beratungspraxis)
          </figcaption>
        </figure>
      </section>

      <section id="diagnose" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Diagnose: So gehen Ärzt:innen vor
        </h2>
        <p className="leading-relaxed">
          Die Diagnose ist in erster Linie eine <strong>Klinische Diagnose</strong> – also
          anhand von <strong>Hautbild, Verlauf und Juckreiz</strong>. Bei
          unklaren Fällen werden Differenzialdiagnosen ausgeschlossen
          (z.B. Psoriasis, Kontaktekzem, Krätze).
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Typische Schritte</h3>
            <ul className="list-disc ml-5 text-zinc-700 space-y-1">
              <li>Anamnese (wann, wo, wie oft, familiäre Atopie?)</li>
              <li>Inspektion der Haut (typische Lokalisationen)</li>
              <li>Juckreiz-/Schmerz-Skala, Schlafqualität</li>
              <li>
                Bei Bedarf: Allergietests, Abstriche, selten Hautbiopsie
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
            <h3 className="font-semibold mb-2">Wann zur Dermatologie?</h3>
            <p className="text-zinc-700">
              Bei <strong>häufigen Schüben</strong>, <strong>großen Arealen</strong>,
              <strong> starkem Juckreiz</strong>, <strong>Schlafstörungen</strong> oder
              wenn Hausmittel nicht helfen. Auch wenn <strong>Hände/Gesicht</strong> stark
              betroffen sind, ist fachärztliche Begleitung sinnvoll.
            </p>
          </div>
        </div>
      </section>

      <section id="behandlung" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Behandlung: Von Pflege bis Systemtherapie
        </h2>
        <p className="leading-relaxed">
          Die Therapie richtet sich nach der <strong>Schwere</strong>,
          den <strong>betroffenen Arealen</strong> und Deinen{" "}
          <strong>Vorlieben</strong>. Ziel ist es, die Hautbarriere zu stärken,
          Entzündung zu stoppen und Juckreiz zu lindern.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">1) Basispflege (täglich)</h3>
            <ul className="list-disc ml-5 text-zinc-700 space-y-1">
              <li>
                <strong>Emollienzien</strong> (Rückfetter) 1–2×/Tag, mehr bei
                Trockenheit
              </li>
              <li>Lauwarme, kurze Duschen/Bad, milde Reinigungsprodukte</li>
              <li>Nach dem Waschen innerhalb 3 Min. eincremen</li>
              <li>Baumwolle/Seide nah an der Haut, keine Wolle</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">2) Schubtherapie (lokal)</h3>
            <ul className="list-disc ml-5 text-zinc-700 space-y-1">
              <li>
                <strong>Topische Steroide</strong> (kurzzeitig, passende Stärke)
              </li>
              <li>
                <strong>Calcineurin-Inhibitoren</strong> (Tacrolimus/Pimecrolimus),
                besonders für Gesicht/Beugen
              </li>
              <li>
                <strong>Proaktive Therapie</strong>: 2–3×/Woche dünn auf
                Problemstellen, um Rückfälle zu verhindern
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">3) Bei moderat bis schwer</h3>
            <ul className="list-disc ml-5 text-zinc-700 space-y-1">
              <li>UV-Therapie (fachärztlich)</li>
              <li>
                <strong>Systemtherapien</strong>: z.B. Biologika (IL-4/IL-13-Hemmung)
                oder <strong>JAK-Inhibitoren</strong> – individuell durch
                Dermatolog:innen
              </li>
              <li>Begleitend: Juckreizmanagement, Schlaf, Stress</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="font-semibold mb-2">
            Wichtig zu wissen
          </h3>
          <p className="text-zinc-700">
            Moderne Leitlinien empfehlen eine <strong>Stufentherapie</strong>:
            Erst die Basis stabilisieren, dann bei Bedarf anti-entzündlich
            auffangen und nur bei anhaltenden, ausgeprägten Beschwerden
            systemisch behandeln – immer ärztlich begleitet.
          </p>
        </div>
      </section>

      <section id="alltagstipps" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Alltagstipps: Pflege-Routine &amp; Trigger-Management
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">Deine tägliche Routine</h3>
            <ol className="list-decimal ml-5 space-y-1 text-zinc-700">
              <li>Sanft reinigen (max. 5–10 Min., lauwarm)</li>
              <li>Abtupfen, nicht rubbeln</li>
              <li>Innerhalb von 3 Min. reichhaltig eincremen</li>
              <li>Bei Juckreiz: kühlende Umschläge, Kratzalternativen</li>
            </ol>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
            <h3 className="font-semibold mb-2">Trigger im Blick</h3>
            <ul className="list-disc ml-5 space-y-1 text-zinc-700">
              <li>Schwitzen → atmungsaktive Kleidung, Pausen beim Sport</li>
              <li>Kälte/Heizungsluft → Luft befeuchten, Pflege anpassen</li>
              <li>Duft-/Farb-/Konservierungsstoffe meiden</li>
              <li>Stressmanagement: Atmung, Bewegung, Schlafroutine</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="font-semibold mb-2">2&nbsp;zu&nbsp;1 – Schnellvergleich</h3>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="col-span-2">
                <div className="rounded border border-zinc-200 p-3">
                  <strong>Do</strong>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Regelmäßig rückfetten</li>
                    <li>Kratzalternativen (Knetball, Druck)</li>
                    <li>Baumwolle/Seide, Schichtenprinzip</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="rounded border border-zinc-200 p-3">
                  <strong>Don&apos;t</strong>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li>Heiß duschen</li>
                    <li>Duftstoffmix</li>
                    <li>Wolle direkt auf der Haut</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vergleich" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Vergleich: Neurodermitis vs. trockene Haut
        </h2>
        <div className="rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">
                  Merkmal
                </th>
                <th className="text-left font-semibold p-3">
                  Trockene Haut
                </th>
                <th className="text-left font-semibold p-3">
                  Neurodermitis
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Juckreiz</td>
                <td className="p-3 text-zinc-700">Meist mild, situativ</td>
                <td className="p-3 text-zinc-700">Oft stark, störend</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Rötung/Entzündung</td>
                <td className="p-3 text-zinc-700">Gering</td>
                <td className="p-3 text-zinc-700">Deutlich, schubweise</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Typische Areale</td>
                <td className="p-3 text-zinc-700">Beliebig, eher diffus</td>
                <td className="p-3 text-zinc-700">Beugen, Hände, Gesicht u.a.</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Therapie</td>
                <td className="p-3 text-zinc-700">Pflege</td>
                <td className="p-3 text-zinc-700">Pflege + anti-entzündlich</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Ist Neurodermitis ansteckend?
            </h3>
            <p>
              Nein. Neurodermitis ist eine <strong>nicht ansteckende</strong>
              Entzündung der Haut. Nähe, Umarmungen oder gemeinsames Benutzen
              von Gegenständen übertragen die Erkrankung nicht.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Geht Neurodermitis wieder weg?
            </h3>
            <p>
              Sie kann sich <strong>zurückbilden</strong>, besonders bei
              Kindern. Grundsätzlich ist sie jedoch <strong>chronisch</strong>{" "}
              und verläuft <strong>in Schüben</strong>. Mit der richtigen
              Pflege und Therapie lassen sich Schübe deutlich reduzieren.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Welche Creme hilft bei Neurodermitis?
            </h3>
            <p>
              Täglich <strong>Emollienzien</strong> (Rückfetter) für die
              Barriere. Bei Schub helfen <strong>entzündungshemmende</strong>{" "}
              Cremes wie geeignete <strong>topische Steroide</strong> oder{" "}
              <strong>Calcineurin-Inhibitoren</strong> – ärztlich anleiten
              lassen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Welche Rolle spielen Allergien?
            </h3>
            <p>
              Allergien können <strong>Trigger</strong> sein, sind aber nicht
              die Ursache. Ob Tests sinnvoll sind, entscheidet die Ärztin/der
              Arzt anhand Deiner Beschwerden und Deines Verlaufs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Was tun gegen nächtlichen Juckreiz?
            </h3>
            <p>
              Raum kühl halten, Baumwollbettwäsche, kurze Nägel, rückfetten vor
              dem Schlafen, Ablenkung/Entspannung. Bei hartnäckigem Juckreiz
              Therapie überprüfen lassen.
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
                  name: "Ist Neurodermitis ansteckend?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Nein. Neurodermitis ist nicht ansteckend. Nähe, Umarmungen oder gemeinsames Benutzen von Gegenständen übertragen die Erkrankung nicht.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Geht Neurodermitis wieder weg?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Neurodermitis ist chronisch und verläuft in Schüben, kann sich aber gerade im Kindesalter zurückbilden. Mit der passenden Therapie lassen sich Schübe deutlich reduzieren.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Creme hilft bei Neurodermitis?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Basis sind rückfettende Emollienzien. Bei Schub helfen anti-entzündliche Cremes wie geeignete topische Steroide oder Calcineurin-Inhibitoren – nach ärztlicher Anleitung.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Rolle spielen Allergien?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Allergien können Schübe triggern, sind aber nicht die alleinige Ursache. Ob Tests sinnvoll sind, entscheidet die Ärztin/der Arzt individuell.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was tun gegen nächtlichen Juckreiz?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Kühles Schlafzimmer, Baumwollbettwäsche, kurze Nägel, rückfetten vor dem Schlafen, Entspannung. Bei anhaltendem Juckreiz die Therapie überprüfen lassen.",
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
          <strong>Was ist Neurodermitis?</strong> Eine häufige,
          nicht ansteckende Entzündung der Haut mit starkem Juckreiz und
          Schüben. <strong>Was hilft?</strong> Tägliche Basispflege,
          rechtzeitig entzündungshemmend behandeln und persönliche Trigger
          managen. So lassen sich Beschwerden in vielen Fällen gut kontrollieren.
        </p>
      </section>

      {/* Call to Action */}
      <section className="mt-14">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-2xl font-bold mb-2">
            10 studienbasierte Tipps bei Neurodermitis – kostenlos als E-Mail
          </h2>
          <p className="text-zinc-700 mb-4">
            Unser neuester Report bündelt evidenzbasierte Maßnahmen, die
            Deiner Haut spürbar guttun.
          </p>
          <div className="not-prose">
            {/* Begin Brevo Form */}
            <style>
              {`@font-face{font-display:block;font-family:Roboto;src:url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"),url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")}
              @font-face{font-display:fallback;font-family:Roboto;font-weight:600;src:url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"),url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")}
              @font-face{font-display:fallback;font-family:Roboto;font-weight:700;src:url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"),url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")}
              #sib-container input::placeholder{text-align:left;font-family:Helvetica,sans-serif;color:#c0ccda}
              #sib-container textarea::placeholder{text-align:left;font-family:Helvetica,sans-serif;color:#c0ccda}
              #sib-container a{text-decoration:underline;color:#2BB2FC}`}
            </style>
            <link
              rel="stylesheet"
              href="https://sibforms.com/forms/end-form/build/sib-styles.css"
            />
            <div
              className="sib-form"
              style={{ textAlign: "center", backgroundColor: "#EFF2F7" }}
            >
              <div id="sib-form-container" className="sib-form-container">
                <div
                  id="error-message"
                  className="sib-form-message-panel"
                  style={{
                    fontSize: 16,
                    textAlign: "left",
                    fontFamily: "Helvetica, sans-serif",
                    color: "#661d1d",
                    backgroundColor: "#ffeded",
                    borderRadius: 3,
                    borderColor: "#ff4949",
                    maxWidth: 540,
                  }}
                >
                  <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                    <span className="sib-form-message-panel__inner-text">
                      Deine Anmeldung konnte nicht gespeichert werden. Bitte
                      versuche es erneut.
                    </span>
                  </div>
                </div>
                <div></div>
                <div
                  id="success-message"
                  className="sib-form-message-panel"
                  style={{
                    fontSize: 16,
                    textAlign: "left",
                    fontFamily: "Helvetica, sans-serif",
                    color: "#085229",
                    backgroundColor: "#e7faf0",
                    borderRadius: 3,
                    borderColor: "#13ce66",
                    maxWidth: 540,
                  }}
                >
                  <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
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
                    maxWidth: 540,
                    borderRadius: 3,
                    borderWidth: 1,
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
                          fontSize: 20,
                          textAlign: "left",
                          fontWeight: 700,
                          fontFamily: "Helvetica, sans-serif",
                          color: "#090a0a",
                          backgroundColor: "transparent",
                          textAlignLast: "left",
                        }}
                      >
                        <p>
                          10 studienbasierte Tipps bei Neurodermitis direkt in
                          deinem Postfach.
                        </p>
                      </div>
                    </div>
                    <div style={{ padding: "8px 0" }}>
                      <div
                        className="sib-form-block"
                        style={{
                          fontSize: 16,
                          textAlign: "left",
                          fontFamily: "Helvetica, sans-serif",
                          color: "#3C4858",
                          backgroundColor: "transparent",
                          textAlignLast: "left",
                        }}
                      >
                        <div className="sib-text-form-block">
                          <p>Der neueste Report unserer Redaktion.</p>
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
                                fontSize: 16,
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
                              fontSize: 16,
                              textAlign: "left",
                              fontFamily: "Helvetica, sans-serif",
                              color: "#661d1d",
                              backgroundColor: "#ffeded",
                              borderRadius: 3,
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
                              fontSize: 16,
                              textAlign: "left",
                              fontFamily: "Helvetica, sans-serif",
                              color: "#661d1d",
                              backgroundColor: "#ffeded",
                              borderRadius: 3,
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
                            fontSize: 16,
                            textAlign: "left",
                            fontWeight: 700,
                            fontFamily: "Helvetica, sans-serif",
                            color: "#FFFFFF",
                            backgroundColor: "#28a392",
                            borderRadius: 3,
                            borderWidth: 0,
                          }}
                          form="sib-form"
                          type="submit"
                        >
                          JETZT 10 TIPPS SICHERN
                        </button>
                      </div>
                    </div>
                    <input
                      type="text"
                      name="email_address_check"
                      value=""
                      className="input--hidden"
                    />
                    <input type="hidden" name="locale" value="de" />
                  </form>
                </div>
              </div>
            </div>
            <script>
              {`window.REQUIRED_CODE_ERROR_MESSAGE='Wähle bitte einen Ländervorwahl aus.';window.LOCALE='de';window.EMAIL_INVALID_MESSAGE=window.SMS_INVALID_MESSAGE="Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";window.REQUIRED_ERROR_MESSAGE="Dieses Feld darf nicht leer sein. ";window.GENERIC_INVALID_MESSAGE="Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";window.translation={common:{selectedList:'{quantity} Liste ausgewählt',selectedLists:'{quantity} Listen ausgewählt',selectedOption:'{quantity} ausgewählt',selectedOptions:'{quantity} ausgewählt',}};var AUTOHIDE=Boolean(0);`}
            </script>
            <script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>
            {/* End Brevo Form */}
          </div>
        </div>
      </section>

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar - Die wichtigsten Begriffe zu Neurodermitis
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
                <td className="p-3 font-medium text-zinc-900">Atopische Dermatitis</td>
                <td className="p-3 text-zinc-700">
                  Fachbegriff für Neurodermitis&colon; chronische, nicht
                  ansteckende Entzündung der Haut mit Juckreiz.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Emollienzien</td>
                <td className="p-3 text-zinc-700">
                  Rückfettende Pflege, die die Hautbarriere stärkt und
                  Feuchtigkeit bindet.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Calcineurin-Inhibitoren</td>
                <td className="p-3 text-zinc-700">
                  Entzündungshemmende Wirkstoffe für die Haut (z.B. Tacrolimus),
                  steroidfrei, besonders an empfindlichen Arealen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Biologika</td>
                <td className="p-3 text-zinc-700">
                  Moderne Antikörpertherapien, die gezielt Entzündungssignale
                  blockieren.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">JAK-Inhibitoren</td>
                <td className="p-3 text-zinc-700">
                  Medikamente, die bestimmte Entzündungswege (JAK-Signalwege)
                  hemmen – als Creme oder Tablette verfügbar.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* EEAT Section */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Über die Autorin &amp; Qualitätssicherung</h2>
        <div className="rounded-2xl border border-zinc-200 p-5">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/autorenbild_jennifer.jpg"
              alt="Autorin: Jennifer Krause"
              className="w-14 h-14 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-semibold text-zinc-900">{author.name}</div>
              <div className="text-sm text-zinc-600">
                {author.role} – Schwerpunkt Neurodermitis &amp; Hautbarriere
              </div>
            </div>
          </div>
          <p className="text-zinc-700">
            Dieser Artikel wurde redaktionell geprüft (Reviewer&colon;{" "}
            <em>Hautsache Gesund Redaktion</em>) und anhand aktueller
            Leitlinien/Behörden- und Klinikseiten erstellt. Er ersetzt keine
            individuelle ärztliche Beratung.
          </p>
        </div>
      </section>

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Was ist Neurodermitis? Einfach erklärt – Ursachen, Symptome & Behandlung",
            description:
              "Neurodermitis verständlich erklärt: Ursachen, Symptome, Diagnose, Behandlung und Alltagstipps – wissenschaftlich fundiert.",
            inLanguage: "de",
            image: "https://www.hautsache-gesund.de/herobild_was_ist_neurodermitis.jpg",
            dateModified: "2025-09-20",
            author: {
              "@type": "Person",
              name: author.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Hautsache Gesund",
            },
            mainEntityOfPage:
              "https://www.hautsache-gesund.de/blog/was-ist-neurodermitis",
          }),
        }}
      />

      {/* Quellenverzeichnis */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">
          Quellen &amp; weiterführende Studien
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            S3-Leitlinie Atopische Dermatitis (Deutschland, 2023/2024). AWMF
            Register, Version 4.3.{" "}
            <a
              href="https://register.awmf.org/de/leitlinien/detail/013-027"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://register.awmf.org/de/leitlinien/detail/013-027
            </a>{" "}
            &amp; PDF{" "}
            <a
              href="https://register.awmf.org/assets/guidelines/013-027l_S3_Atopische-Dermatitis-AD-Neurodermitis-atopisches-Ekzem_2024-01.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              (Stand 2024-01)
            </a>
          </li>
          <li>
            American Academy of Dermatology – Atopic dermatitis clinical
            guideline (Updates).{" "}
            <a
              href="https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis
            </a>
          </li>
          <li>
            NHS – Atopic eczema&colon; Übersicht, Symptome, Behandlung.{" "}
            <a
              href="https://www.nhs.uk/conditions/atopic-eczema/"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://www.nhs.uk/conditions/atopic-eczema/
            </a>
          </li>
          <li>
            Mayo Clinic – Atopic dermatitis (eczema)&colon; Symptoms &amp;
            causes (15.05.2024).{" "}
            <a
              href="https://www.mayoclinic.org/diseases-conditions/atopic-dermatitis-eczema/symptoms-causes/syc-20353273"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://www.mayoclinic.org/…/syc-20353273
            </a>
          </li>
          <li>
            Reuters – FDA erweitert Zulassung für topischen JAK-Inhibitor
            (Opzelura) auf Kinder 2–11 Jahre (19.09.2025).{" "}
            <a
              href="https://www.reuters.com/business/healthcare-pharmaceuticals/us-fda-approves-incytes-eczema-treatment-pediatric-patients-2025-09-18/"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://www.reuters.com/…/us-fda-approves-incytes-eczema-treatment…
            </a>
          </li>
          <li>
            StatPearls – Atopic Dermatitis&colon; Überblick zu Pathophysiologie,
            Klinik, Management.{" "}
            <a
              href="https://www.ncbi.nlm.nih.gov/books/NBK448071/"
              target="_blank"
              rel="noopener noreferrer"
              className={accent}
            >
              https://www.ncbi.nlm.nih.gov/books/NBK448071/
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
