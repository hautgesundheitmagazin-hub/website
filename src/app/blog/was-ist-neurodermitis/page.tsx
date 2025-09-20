// src/app/blog/was-ist-neurodermitis/page.tsx
import type { Metadata } from "next";

const canonical = "https://www.hautwissen-kompakt.de/blog/was-ist-neurodermitis";

export const metadata: Metadata = {
  title:
    "Was ist Neurodermitis? Symptome, Ursachen & Behandlung einfach erklärt",
  description:
    "Neurodermitis verständlich erklärt: typische Symptome, Auslöser, Diagnose und aktuelle Therapien – mit praktischen Alltagstipps und Checkliste.",
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: canonical,
    title:
      "Was ist Neurodermitis? Symptome, Ursachen & Behandlung einfach erklärt",
    description:
      "Ein umfassender, leicht verständlicher Leitfaden zu Neurodermitis: von Symptomen &gt; Therapie &gt; Alltagstipps.",
    images: [
      {
        url: "/herobild_was_ist_neurodermitis.jpg",
        width: 1600,
        height: 600,
        alt: "Neurodermitis einfach erklärt – Haut mit trockenen Ekzemen in Nahaufnahme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Was ist Neurodermitis? Symptome, Ursachen & Behandlung einfach erklärt",
    description:
      "Neurodermitis verstehen – von Auslösern bis Therapie, mit Checkliste für den Alltag.",
    images: ["/herobild_was_ist_neurodermitis.jpg"],
  },
};

const accent = "text-emerald-700";
const author = {
  name: "Jennifer Krause",
  role: "Expertin für Hautgesundheit",
  avatar: "/autorenbild_jennifer.jpg",
};

export default function Page() {
  const faq = [
    {
      q: "Was ist Neurodermitis in einfachen Worten?",
      a: "Neurodermitis (atopische Dermatitis) ist eine chronische, schubweise verlaufende Hauterkrankung. Typisch sind trockene, juckende Ekzeme. Sie ist nicht ansteckend.",
    },
    {
      q: "Welche typischen Symptome hat Neurodermitis?",
      a: "Starker Juckreiz, trockene Haut, Rötungen, nässende oder schuppende Ekzeme und verdickte Hautareale bei längerem Kratzen. Häufig an Beugen, Hals und Händen.",
    },
    {
      q: "Wie wird Neurodermitis behandelt?",
      a: "Basis ist tägliches Eincremen (Emollienzien). In Schüben: entzündungshemmende Cremes wie Kortikosteroide oder Calcineurin-Inhibitoren. Bei schwerem Verlauf kommen Phototherapie, Biologika oder JAK-Inhibitoren in Frage – immer ärztlich begleitet.",
    },
    {
      q: "Sind Neurodermitis und Allergien dasselbe?",
      a: "Nein. Viele Betroffene haben Allergien, aber nicht alle. Allergien können Schübe verstärken, sind jedoch nicht die Ursache der Erkrankung.",
    },
    {
      q: "Hilft eine spezielle Diät?",
      a: "Nur bei nachgewiesenen Unverträglichkeiten. Pauschale Verbote (z. B. Milch, Gluten) ohne Diagnose bringen selten Nutzen und können schaden.",
    },
    {
      q: "Ist Neurodermitis heilbar?",
      a: "Heilbar nicht, aber sehr gut behandelbar. Viele Kinder verbessern sich mit dem Alter deutlich. Ziel ist Kontrolle: wenige Schübe, wenig Juckreiz, gute Hautbarriere.",
    },
  ];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Was ist Neurodermitis? Symptome, Ursachen & Behandlung einfach erklärt",
    description:
      "Leicht verständlicher Leitfaden: Symptome, Ursachen, Diagnose, Therapie und Alltagstipps zu Neurodermitis (atopischer Dermatitis).",
    inLanguage: "de",
    image: `${canonical}/herobild_was_ist_neurodermitis.jpg`.replace(
      canonical,
      ""
    ),
    datePublished: "2025-08-20",
    dateModified: "2025-08-20",
    author: {
      "@type": "Person",
      name: author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Hautsache Gesund",
    },
    mainEntityOfPage: canonical,
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
          Was ist Neurodermitis? Einfach erklärt – Symptome, Ursachen &amp;
          Behandlung
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Du willst endlich verstehen, was hinter trockener, juckender Haut
          steckt – und was wirklich hilft? Hier findest du eine klare,
          wissenschaftlich fundierte Erklärung zu Neurodermitis – plus
          alltagstaugliche Tipps, die sofort Entlastung bringen.
        </p>

        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am <time dateTime="2025-09-20">20.09</time>
          {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
        </div>

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
                alt="Neurodermitis: trockene, gerötete Haut in Nahaufnahme – Symbolbild für juckende Ekzeme"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Symbolbild für Neurodermitis: gerötete, trockene Haut
          </figcaption>
        </figure>

        <div className="mt-6 flex items-center gap-3 text-sm text-zinc-700">
          <img
            src="/autorenbild_jennifer.jpg"
            alt="Autorin: Jennifer Krause, Expertin für Hautgesundheit"
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
            <strong>Neurodermitis</strong> ist eine nicht ansteckende,
            chronisch-entzündliche Hauterkrankung mit Schüben. Ziel der Therapie
            ist Kontrolle statt „Heilung“.
          </li>
          <li>
            <strong>Typisch</strong>: trockene Haut, starker Juckreiz, rote bis
            nässende Ekzeme. Kratzen verschlimmert die Entzündung &amp; führt
            zu Verdickungen.
          </li>
          <li>
            <strong>Ursachenmix</strong>: gestörte Hautbarriere, fehlgeleitete
            Immunreaktionen, Veranlagung; Trigger wie Kälte, Schwitzen, Stress
            oder Duftstoffe können Schübe auslösen.
          </li>
          <li>
            <strong>Behandlung</strong>: tägliche Basispflege (Emollienzien),
            in Schüben entzündungshemmende Cremes; bei schwerem Verlauf
            Phototherapie, Biologika oder JAK-Inhibitoren – ärztlich begleitet.
          </li>
          <li>
            <strong>Alltag</strong>: clevere Dusch- und Cremeroutinen, weiche
            Kleidung, kühle Schlafumgebung, Stressmanagement &amp; Fingernägel
            kurz halten. Ernährung nur anpassen, wenn echte Unverträglichkeiten
            gesichert sind.
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
            <a className={`hover:underline ${accent} font-medium`} href="#was">
              Was ist Neurodermitis?
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#symptome"
            >
              Symptome &amp; wie sich ein Schub anfühlt
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#ursache">
              Ursachen: Hautbarriere &amp; Immunsystem
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#trigger">
              Häufige Trigger im Alltag
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#diagnose">
              Diagnose &amp; wann zum Arzt
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#therapie">
              Therapie: Schritt für Schritt
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#medikamente">
              Medikamente verständlich erklärt
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#alltag">
              Alltag: Pflegeroutinen, Kleidung, Schlaf
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#ernaehrung">
              Ernährung &amp; Neurodermitis
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#kinder">
              Kinder &amp; Babys: Besonderheiten
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#faq">
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
      <section id="was" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">Was ist Neurodermitis?</h2>
        <p className="leading-relaxed">
          Neurodermitis – auch <em>atopische Dermatitis</em> oder{" "}
          <em>atopisches Ekzem</em> – ist eine entzündliche Hauterkrankung, die
          in Schüben verläuft. Typisch sind trockene, juckende Hautstellen, die
          sich röten, schuppen, manchmal nässen und bei längerem Kratzen
          verdicken. Die Erkrankung ist <strong>nicht ansteckend</strong>. Sie
          kann in jedem Alter auftreten, beginnt aber häufig im Kindesalter.
          Viele Betroffene erleben Phasen mit sehr wenigen Beschwerden, gefolgt
          von Schüben – mit der richtigen Pflege und Therapie lässt sich das
          gut kontrollieren.
        </p>

        <div className="mt-6 rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
          <p className="m-0">
            <strong>Kurzdefinition:</strong> Chronisch-entzündliche
            Hauterkrankung mit gestörter Hautbarriere und starkem Juckreiz;
            ausgelöst bzw. verschlimmert durch individuelle Trigger; verläuft in
            Schüben; sehr gut behandelbar.
          </p>
        </div>
      </section>

      <section id="symptome" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">
          Symptome &amp; wie sich ein Schub anfühlt
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-3">
            <p>
              Häufige Zeichen sind starker Juckreiz (oft nachts), trockene
              Haut, Rötungen und schuppende Ekzeme. Kratzen bringt kurzfristig
              Erleichterung, verstärkt aber die Entzündung und kann die Haut
              verdicken (sogenannte Lichenifikation).
            </p>
            <ul className="list-disc ml-5">
              <li>
                <strong>Typische Stellen</strong>: Armbeugen, Kniekehlen, Hals,
                Handrücken, Augenlider; bei Babys oft Wangen &amp; Streckseiten.
              </li>
              <li>
                <strong>Begleiter</strong>: Rissige Haut, Nässen, kleine
                Bläschen; krustige Stellen durch Kratzen.
              </li>
              <li>
                <strong>Infektionen</strong>: Durch aufgekratzte Haut leichter –
                z. B. Bakterien (gelbliche Krusten) oder Herpes (schmerzhafte
                Bläschen) – ärztlich abklären.
              </li>
            </ul>
          </div>
          <aside className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Mini-Check: Ist es ein Schub?</h3>
            <ol className="list-decimal ml-5 space-y-1">
              <li>Plötzlich mehr Juckreiz (&gt; abends/nachts)?</li>
              <li>Neue gerötete, raue oder nässende Stellen?</li>
              <li>Gewohnte Pflege lindert schlechter?</li>
            </ol>
            <p className="mt-2 text-sm text-zinc-600">
              Wenn ja: kurzzeitig intensivere Therapie nach deinem Hautplan
              erwägen und ärztlichen Rat einholen.
            </p>
          </aside>
        </div>
      </section>

      <section id="ursache" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">
          Ursachen: Hautbarriere &amp; Immunsystem – was genau passiert?
        </h2>
        <p>
          Bei Neurodermitis ist die äußere Schutzschicht der Haut – die
          <em> Hautbarriere</em> – gestört. Wasser geht schneller verloren, die
          Haut trocknet aus und Reizstoffe dringen leichter ein. Gleichzeitig
          reagiert das Immunsystem überempfindlich. Beides zusammen führt zu
          Entzündungen und Juckreiz. Die Veranlagung spielt eine Rolle; oft
          finden sich in Familien auch Heuschnupfen oder Asthma (atopische
          Trias).
        </p>
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Die beste Therapie beginnt mit einer starken Hautbarriere: Wer
            konsequent pflegt, braucht oft deutlich weniger entzündungshemmende
            Cremes.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Jennifer Krause, indirektes Zitat aus der Beratungspraxis
          </figcaption>
        </figure>
      </section>

      <section id="trigger" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">Häufige Trigger im Alltag</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-1">Physikalisch</h3>
            <p className="m-0">
              Kälte, trockene Heizungsluft, Schwitzen, Wolle auf der Haut,
              häufiges Händewaschen, lange heiße Duschen.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-1">Chemisch</h3>
            <p className="m-0">
              Duftstoffe, aggressive Reinigungsmittel, schäumende
              Tensid-Shampoos, manche Desinfektionsmittel.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-1">Psychosozial</h3>
            <p className="m-0">
              Stress, Schlafmangel, starkes Kratzverlangen in Ruhephasen.
            </p>
          </div>
        </div>
      </section>

      <section id="diagnose" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">Diagnose &amp; wann zum Arzt</h2>
        <p>
          Die Diagnose stellt die Dermatologie anhand von Krankengeschichte,
          typischem Erscheinungsbild und Verteilung auf dem Körper.
          Allergietests können sinnvoll sein, wenn der Verdacht besteht, dass
          bestimmte Allergene Schübe auslösen. Suchtests „ins Blaue hinein“
          sind jedoch selten hilfreich.
        </p>
        <div className="mt-4 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3">Situation</th>
                <th className="text-left font-semibold p-3">
                  Empfehlung &amp; nächster Schritt
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Erste Ekzeme, starker Juckreiz</td>
                <td className="p-3">
                  Hausarzt/Hautarzt: Diagnose, Pflegeplan, ggf. Rezeptcremes.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Häufige Schübe trotz Pflege</td>
                <td className="p-3">
                  Therapie anpassen, Schulung, Phototherapie oder Systemtherapie
                  prüfen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Gelbliche Krusten, Fieber, Herpesverdacht</td>
                <td className="p-3">
                  Sofort ärztlich abklären – mögliche Infektion behandeln.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="therapie" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">Therapie: Schritt für Schritt</h2>
        <p>
          Die Behandlung folgt dem Prinzip „Basis plus Bedarf“: tägliche
          Barrierepflege für alle, entzündungshemmende Therapie in Schüben – und
          bei Bedarf weitere Bausteine.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-1">1) Basispflege</h3>
            <p className="m-0">
              Emollienzien 1–2× täglich (mehr bei Trockenheit). Ziel: Feuchtig­
              keit binden, Barriere stärken, Schübe reduzieren.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-1">2) Akuttherapie</h3>
            <p className="m-0">
              Inflammationshemmer lokal: Kortikosteroide oder
              Calcineurin-Inhibitoren nach ärztlichem Plan, „proaktiv“ 2–3×/W
              an Problemstellen kann Rückfälle verhindern.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-1">3) Zusatzbausteine</h3>
            <p className="m-0">
              Phototherapie, Biologika oder JAK-Inhibitoren bei mittelschwerem
              bis schwerem Verlauf; Schulungsprogramme &amp; Kratzmanagement.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="m-0">
            <strong>Pro-Tipp:</strong> „Wet-Wraps“ (feuchte Umschläge) können
            bei starken Schüben beruhigen – nur mit Anleitung anwenden.
          </p>
        </div>
      </section>

      <section id="medikamente" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">Medikamente verständlich erklärt</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-1">Kortikosteroid-Cremes</h3>
            <p className="m-0">
              Wirken rasch gegen Entzündung und Juckreiz. Stärke und Dauer
              auf das Areal abstimmen (Gesicht schwächer als Körper). Richtig
              angewandt sicher; „Fingertip-Unit“ hilft bei der Dosierung.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-1">Calcineurin-Inhibitoren</h3>
            <p className="m-0">
              Tacrolimus/Pimecrolimus – steroidfrei, besonders für Gesicht,
              Hals &amp; Falten geeignet. Anfangs mögliches Brennen klingt meist
              ab.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-1">PDE-4 &amp; topische JAK</h3>
            <p className="m-0">
              Cremes wie PDE-4-Hemmer oder topische JAK-Inhibitoren zielen auf
              Entzündungssignale; Option bei inadäquater Wirkung klassischer
              Therapien.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-1">Systemtherapien</h3>
            <p className="m-0">
              Bei schwerer AD: Biologika (z. B. Anti-IL-4/13) oder JAK-Inhibitoren
              als Tablette. Wirksam, aber kontrollbedürftig – ärztliche Führung
              ist Pflicht.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-56">
                  Maßnahme
                </th>
                <th className="text-left font-semibold p-3">Nutzen</th>
                <th className="text-left font-semibold p-3">Hinweise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Basiscremes (Emollienzien)</td>
                <td className="p-3">
                  Barriere stärken, Trockenheit &amp; Schubrisiko senken
                </td>
                <td className="p-3">Täglich, ausreichend Menge, saisonal anpassen</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Kortikosteroid-Cremes</td>
                <td className="p-3">Schnell entzündungshemmend</td>
                <td className="p-3">
                  Stärke/Dauer begrenzen; Kinder &amp; Gesicht extra vorsichtig
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Calcineurin-Inhibitoren</td>
                <td className="p-3">Steroidfreie Option</td>
                <td className="p-3">Anfangs Brennen möglich</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Phototherapie</td>
                <td className="p-3">Gute Option bei flächiger AD</td>
                <td className="p-3">Serienweise, nicht in jeder Praxis</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Biologika/JAK-Inhibitoren</td>
                <td className="p-3">Wirksam bei schwerer AD</td>
                <td className="p-3">Regelmäßige Kontrollen nötig</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="alltag" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">Alltag: Pflegeroutinen, Kleidung, Schlaf</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-3">
            <p>
              <strong>Duschen &amp; Baden:</strong> Kurz, lauwarm, milde
              Reinigungsprodukte, direkt danach in 3 Min. eincremen
              („3-Minuten-Regel“). Hände oft rückfetten.
            </p>
            <p>
              <strong>Kleidung:</strong> Weiche, atmungsaktive Stoffe (Baumwolle,
              Viskose). Wolle direkt auf der Haut meiden. Neue Kleidung vor dem
              Tragen waschen, parfümfreie Waschmittel bevorzugen.
            </p>
            <p>
              <strong>Schlaf:</strong> Kühl, leichtes Bettzeug, Fingernägel
              kurz; Baumwollhandschuhe können nachts Kratzschäden vermindern.
            </p>
          </div>
          <aside className="rounded-2xl border border-zinc-200 p-4 bg-white">
            <h3 className="font-semibold mb-2">Dein 5-Punkte-Schnellplan</h3>
            <ul className="list-disc ml-5">
              <li>Täglich cremen</li>
              <li>Schub-Plan griffbereit</li>
              <li>Dusche kurz &amp; lauwarm</li>
              <li>Weiche Kleidung</li>
              <li>Stressabbau &amp; Schlaf</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="ernaehrung" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">Ernährung &amp; Neurodermitis</h2>
        <p>
          Eine allgemeine „Neurodermitis-Diät“ gibt es nicht. Entscheidend ist,
          ob echte Allergien oder Unverträglichkeiten vorliegen. Wer ohne
          Diagnose ganze Lebensmittelgruppen meidet, riskiert Mangelernährung –
          besonders bei Kindern. Sinnvoll: ausgewogen essen, ausreichend Trinken
          und ein Ernährungstagebuch, wenn der Verdacht auf Auslöser besteht.
        </p>
      </section>

      <section id="kinder" className="mt-12">
        <h2 className="text-2xl font-bold mb-2">
          Kinder &amp; Babys: Was ist besonders wichtig?
        </h2>
        <p>
          Bei Babys beginnt AD oft im Gesicht (Wangen, Stirn) und an
          Streckseiten. Die Pflege sollte besonders mild sein; Kortikosteroide
          nur in passender Stärke und Dauer nach ärztlicher Anleitung.
          Eltern-Kind-Schulungen helfen im Alltag enorm, inklusive Kratzalternativen
          und spielerischer Pflegeroutine.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          {faq.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </section>

      {/* Summary */}
      <section id="zusammenfassung" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
        <p className="leading-relaxed">
          <strong>Was ist Neurodermitis – und was hilft wirklich?</strong>{" "}
          Neurodermitis ist eine chronisch-entzündliche, nicht ansteckende
          Hauterkrankung. Mit täglicher Barrierepflege, kluger Akuttherapie und
          dem Vermeiden persönlicher Trigger lässt sich der Verlauf in den
          meisten Fällen sehr gut kontrollieren – für spürbar weniger Juckreiz
          und mehr Lebensqualität.
        </p>
      </section>

      {/* Call to Action – exakt wie Vorlage, ohne zusätzlichen Container */}
      <section
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
<div class="sib-form" style="text-align: center; background-color: #EFF2F7;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon"><path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"/></svg>
        <span class="sib-form-message-panel__inner-text">Deine Anmeldung konnte nicht gespeichert werden. Bitte versuche es erneut.</span>
      </div>
    </div>
    <div></div>
    <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66;max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon"><path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"/></svg>
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
              <div class="form__label-row ">
                <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:Helvetica, sans-serif; color:#3c4858;" for="EMAIL" data-required="*">Wohin dürfen wir Dir die 10 Tipps schicken?</label>
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
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512" style=""><path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"/></svg>
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
          `,
        }}
      />

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
                <td className="p-3 font-medium text-zinc-900">
                  Atopische Dermatitis
                </td>
                <td className="p-3 text-zinc-700">
                  Medizinischer Begriff für Neurodermitis – eine chronische,
                  juckende Entzündung der Haut mit Schüben.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Emollienzien</td>
                <td className="p-3 text-zinc-700">
                  Rückfettende Pflegeprodukte, die Wasser in der Haut halten und
                  die Barriere stärken.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Calcineurin-Inhibitoren
                </td>
                <td className="p-3 text-zinc-700">
                  Rezeptpflichtige, steroidfreie Cremes (z. B. Tacrolimus), die
                  die Entzündung lokal bremsen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Biologika</td>
                <td className="p-3 text-zinc-700">
                  Hochspezifische Medikamente, die Entzündungssignale des
                  Immunsystems blockieren und so schwere Verläufe kontrollieren.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Wet-Wrap</td>
                <td className="p-3 text-zinc-700">
                  Feuchte Umschlagtechnik über Creme; reduziert Juckreiz in
                  Schüben – bitte mit Anleitung nutzen.
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
            <div className="font-semibold">{author.name}</div>
            <div className="text-sm text-zinc-700">
              {author.role} – Schwerpunkte: Barrierepflege, Patientenschulung,
              alltagsnahe Therapie.
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className={`${accent}`} aria-hidden="true">
            →
          </span>
          <p className="text-sm text-zinc-700">
            Überprüft von: <strong>Hautsache Gesund Redaktion</strong> – Medizin
            &amp; Qualitätssicherung.
          </p>
        </div>
      </section>

      {/* Quellenverzeichnis */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            S3-Leitlinie Atopische Dermatitis (AD) – AWMF (2023/2024). PDF:
            https://register.awmf.org/assets/guidelines/013-027l_S3_Atopische-Dermatitis-AD-Neurodermitis-atopisches-Ekzem_2024-01.pdf
          </li>
          <li>
            AAD – Atopic dermatitis clinical guideline (Updates 2023–2024):
            https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis
          </li>
          <li>
            AAAAI/ACAAI Joint Task Force Guideline (2023): PDF:
            https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/JTF-Atopic-Dermatitis-Guideline-2023-07-31-2026.pdf
          </li>
          <li>
            NICE – Atopic eczema in under 12s (überarbeitet 2023):
            https://www.nice.org.uk/guidance/cg57
          </li>
          <li>
            Cochrane Review (2024): Educational and psychological interventions
            for managing atopic dermatitis:
            https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD014932.pub2/abstract
          </li>
        </ul>
      </section>

      {/* JSON-LD for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
    </article>
  );
}
