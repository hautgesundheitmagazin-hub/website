// src/app/blog/neurodermitis-altersgruppen/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const title =
  "Neurodermitis & Altersgruppen: Von Baby bis Senior – einfach erklärt";
const description =
  "Ab wann tritt Neurodermitis auf, wie zeigt sie sich in jedem Alter – und was hilft? Der verständliche Guide für Eltern, Teens, Erwachsene & Senioren.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.hautwissen-kompakt.de/blog/neurodermitis-altersgruppen",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: "https://www.hautwissen-kompakt.de/blog/neurodermitis-altersgruppen",
    title,
    description,
    siteName: "Hautwissen Kompakt",
    images: [
      {
        url: "/herobild_altersgruppen_neurodermitis.jpg",
        width: 1600,
        height: 600,
        alt: "Neurodermitis in verschiedenen Altersgruppen – Illustration von Baby bis Senior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/herobild_altersgruppen_neurodermitis.jpg"],
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
          In welchen Altersgruppen kann Neurodermitis auftreten? Einfach erklärt
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Neurodermitis (atopische Dermatitis) kann in jedem Lebensabschnitt
          beginnen – vom Baby bis ins hohe Alter. Hier erfährst du kurz &amp;
          klar, wann sie typischerweise startet, wie sich Symptome je Alter
          unterscheiden und welche Schritte dir in jeder Lebensphase wirklich
          helfen.
        </p>

        {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am <time dateTime="2025-08-20">20.08</time>
          {" · "}Lesedauer: <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/herobild_altersgruppen_neurodermitis.jpg"
              />
              <img
                fetchPriority="high"
                src="/herobild_altersgruppen_neurodermitis.jpg"
                alt="Schematische Darstellung der Neurodermitis über die Lebensspanne: Baby, Kind, Teenager, Erwachsener, Senior"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Neurodermitis kann in jedem Alter auftreten – von früher Kindheit
            bis ins Seniorenalter.
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
            Häufiger Start im Säuglings- und Kleinkindalter (3–6 Monate); ein
            Teil wächst heraus, aber Rückfälle sind möglich.
          </li>
          <li>
            In der Kindheit und Jugend wechseln sich Schübe und ruhigere Phasen
            ab; Beugenekzeme (Ellenbeugen/Kniekehlen) sind typisch.
          </li>
          <li>
            Auch Erwachsene können erstmals Neurodermitis entwickeln
            (Spätmanifestation); Stress, Hautbarrierestörungen und Allergien
            spielen mit hinein.
          </li>
          <li>
            Im höheren Alter treten trockene, rissige Ekzeme häufiger auf; gute
            Basispflege, Triggerkontrolle und ärztliche Abklärung sind zentral.
          </li>
          <li>
            In jedem Alter gilt: sanfte tägliche Pflege, Auslöser meiden,
            Schübe rechtzeitig behandeln – dadurch sinken Juckreiz und
            Entzündungen spürbar.
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
              href="#was-ist-neurodermitis"
            >
              Was ist Neurodermitis – kurz erklärt?
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#altersgruppen-ueberblick"
            >
              In welchen Altersgruppen tritt Neurodermitis auf?
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#saeuglinge"
            >
              Säuglinge: Woran erkennst du frühe Anzeichen?
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#kinder"
            >
              Kinder: Beugenekzem, Juckreiz &amp; Alltagshelfer
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#jugendliche"
            >
              Jugendliche: Pubertät, Hormone &amp; Trigger
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#erwachsene"
            >
              Erwachsene: Spätmanifestation &amp; Therapieoptionen
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#senioren"
            >
              Senioren: Trockene Haut &amp; spezielle Herausforderungen
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#vergleich"
            >
              Vergleich: Typische Symptome &amp; Fokus je Altersphase
            </a>
          </li>
          <li>
            <a
              className={`hover:underline ${accent} font-medium`}
              href="#praxis"
            >
              Praxis: Pflege, Triggermanagement &amp; Arztbesuch
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
      <section id="was-ist-neurodermitis">
        <h2 className="text-2xl font-bold mb-3">
          Was ist Neurodermitis – kurz erklärt?
        </h2>
        <p className="leading-relaxed">
          Neurodermitis, medizinisch „atopische Dermatitis“, ist eine
          chronisch-entzündliche Hauterkrankung. Typisch sind trockene,
          empfindliche Haut, starker Juckreiz und schubweiser Verlauf. Die
          Hautbarriere ist gestört, wodurch Feuchtigkeit leichter entweicht und
          Reizstoffe sowie Keime leichter eindringen. Genetik, Umwelt und das
          Immunsystem spielen zusammen – die Auslöser variieren von Mensch zu
          Mensch. Wichtig: Neurodermitis ist nicht ansteckend.
        </p>
      </section>

      <section id="altersgruppen-ueberblick" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">
          In welchen Altersgruppen tritt Neurodermitis auf?
        </h2>
        <p className="leading-relaxed">
          Die Erkrankung kann grundsätzlich in jedem Alter beginnen. Häufig ist
          der Start im Säuglings- und Kleinkindalter (oft zwischen 3–6
          Monaten). Viele Kinder erleben mit der Zeit eine deutliche Besserung,
          manche entwickeln später andere atopische Beschwerden (z.&nbsp;B.
          Heuschnupfen). Es gibt aber auch Ersterkrankungen im Erwachsenenalter
          – und bei Seniorinnen und Senioren treten ekzemartige Bilder häufig
          im Zusammenspiel mit sehr trockener Haut auf.
        </p>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Neurodermitis hat verschiedene Altersgipfel. Wer seine
            Hautbarriere konsequent stärkt und Schübe früh behandelt, kann die
            Belastung in jeder Lebensphase deutlich senken.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Jennifer Krause, direktes Zitat
          </figcaption>
        </figure>
      </section>

      <section id="saeuglinge" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">
          Säuglinge: Woran erkennst du frühe Anzeichen?
        </h2>
        <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
          <div className="grid md:grid-cols-3 gap-4 items-start">
            <div className="md:col-span-2 space-y-3">
              <h3 className="text-lg font-semibold">Typisch in den ersten Monaten</h3>
              <p className="leading-relaxed">
                Erste Zeichen zeigen sich oft ab dem 3.–6. Lebensmonat.
                Häufig betroffen sind Wangen, Kopfhaut und Rumpf. Eine frühe
                Form kann als „Milchschorf“ erscheinen (gelblich-weiße Krusten
                auf gerötetem Grund). Der Juckreiz stört Babys Schlaf und
                Trinken – hier hilft konsequente Basispflege und ärztliche
                Abklärung bei starken Schüben.
              </p>
              <ul className="list-disc ml-5">
                <li>Rau, schuppig, gerötet; teils nässend</li>
                <li>Juckreiz, Unruhe, Kratzen</li>
                <li>Sanfte, parfümfreie Pflege; Kratzschutz</li>
              </ul>
            </div>
            <aside className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm">
              <strong>Eltern-Tipp:&nbsp;</strong>
              Lauwarmes, kurzes Baden und direkt danach reichhaltig
              rückfetten. Kleidung aus Baumwolle; Waschmittel ohne Duftstoffe.
            </aside>
          </div>
        </div>
      </section>

      <section id="kinder" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">
          Kinder: Beugenekzem, Juckreiz &amp; Alltagshelfer
        </h2>
        <p className="leading-relaxed">
          Mit dem Älterwerden wandern die Ekzemstellen oft in die Beugen:
          Ellenbeugen, Kniekehlen, Nacken/Hals. Typisch sind schubweise
          Verläufe – Phasen mit ruhiger Haut wechseln mit Schüben, etwa nach
          Infekten, starkem Schwitzen oder Kontakt mit Reizstoffen.
        </p>

        <div className="mt-4 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3">Herausforderung</th>
                <th className="text-left font-semibold p-3">Was hilft im Alltag?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Juckreiz in der Nacht</td>
                <td className="p-3">Kühlende Pflege, kurzes Duschen abends, Raumluft befeuchten</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Schule &amp; Sport</td>
                <td className="p-3">
                  Baumwolle, Schweiß zeitnah abduschen, Pflege wiederholen
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Trigger erkennen</td>
                <td className="p-3">
                  Tagebuch: Was war neu? Wetter, Stress, Pflege, Kontaktstoffe
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="jugendliche" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">
          Jugendliche: Pubertät, Hormone &amp; Trigger
        </h2>
        <p className="leading-relaxed">
          In der Pubertät mischen Hormone, Stress und neue Routinen mit:
          längere Schultage, Sport, Kosmetikprodukte, Make-up, Rasur. Das kann
          die Hautbarriere belasten. Viele Teens erleben aber auch deutlich
          ruhigere Phasen – bei konsequenter Pflege und passender
          Auslöserkontrolle.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="md:col-span-2 rounded-2xl border border-zinc-200 p-4">
            <h3 className="text-lg font-semibold mb-2">
              2-zu-1-Quick-Check: Pflege &amp; Produkte
            </h3>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="col-span-2">
                <ul className="list-disc ml-5 leading-relaxed">
                  <li>Parfümfreie Basics bevorzugen</li>
                  <li>Sanfte Reinigung statt „scharfer“ Peelings</li>
                  <li>Rasur: milde Klingen, danach rückfetten</li>
                </ul>
              </div>
              <div className="col-span-1">
                <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3">
                  <strong>Merke:&nbsp;</strong> Neue Produkte erst an kleiner
                  Stelle testen.
                </div>
              </div>
            </div>
          </div>
          <aside className="rounded-2xl border border-zinc-200 p-4 text-sm">
            <strong>Stress-Management:&nbsp;</strong>
            Ausreichend Schlaf, Pausen, Bewegung – Stress kann Schübe
            verstärken.
          </aside>
        </div>
      </section>

      <section id="erwachsene" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">
          Erwachsene: Spätmanifestation &amp; Therapieoptionen
        </h2>
        <p className="leading-relaxed">
          Auch im Erwachsenenalter kann Neurodermitis erstmals auftreten. Oft
          betroffen sind Hände, Hals, Gesicht oder Oberkörper. Neben der
          Basistherapie (tägliche Pflege) kommen je nach Schweregrad topische
          Entzündungshemmer, Phototherapie und systemische Optionen in Frage –
          individuell mit der Dermatologie abgestimmt.
        </p>

        <div className="mt-4 rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3">Thema</th>
                <th className="text-left font-semibold p-3">Kurz erklärt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Beruf &amp; Hände</td>
                <td className="p-3">
                  Häufiges Waschen/Desinfizieren trocknet aus – Schutzcremes,
                  Pausen, Handschuhe sinnvoll.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Stigmatisierung</td>
                <td className="p-3">
                  Offene Kommunikation und ärztliche Bestätigung helfen im Job
                  und privat.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Therapiepfade</td>
                <td className="p-3">
                  Von topischen Steroiden/Calcineurinhemmern bis zu
                  Biologika&nbsp;&amp; JAK-Inhibitoren – abgestuft nach
                  Schwere.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="senioren" className="mt-10">
        <h2 className="text-2xl font-bold mb-2">
          Senioren: Trockene Haut &amp; spezielle Herausforderungen
        </h2>
        <p className="leading-relaxed">
          Mit zunehmendem Alter wird die Haut dünner und trockener; Ekzeme
          können leichter aufbrechen und jucken stark. Häufig sind Unterschenkel
          und Hände betroffen. Wichtig sind reichhaltige Pflege (Urea, lipidhaltige
          Cremes), vorsichtiges Duschen/Baden und das Abklären möglicher
          Begleiterkrankungen oder Medikamenteneinflüsse.
        </p>
        <aside className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm">
          <strong>Hinweis:&nbsp;</strong>
          Bei älteren Menschen mit neu aufgetretenem, starkem Juckreiz sollten
          zusätzlich internistische Ursachen ausgeschlossen werden.
        </aside>
      </section>

      <section id="vergleich" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">
          Vergleich: Typische Symptome &amp; Fokus je Altersphase
        </h2>
        <div className="rounded-2xl border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="text-left font-semibold p-3 w-40">Alter</th>
                <th className="text-left font-semibold p-3">Typische Stellen</th>
                <th className="text-left font-semibold p-3">Fokus im Alltag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Säuglinge</td>
                <td className="p-3">Wangen, Kopfhaut, Rumpf</td>
                <td className="p-3">Basispflege, Kratzschutz, Schlaf</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Kinder</td>
                <td className="p-3">Ellenbeugen, Kniekehlen, Hals</td>
                <td className="p-3">Trigger finden, Sport/Schule managen</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Jugendliche</td>
                <td className="p-3">Gesicht, Hals, Beugen</td>
                <td className="p-3">Kosmetik prüfen, Stressreduktion</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Erwachsene</td>
                <td className="p-3">Hände, Hals, Oberkörper</td>
                <td className="p-3">Arbeitsrisiken, abgestufte Therapie</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">Senioren</td>
                <td className="p-3">Unterschenkel, Hände</td>
                <td className="p-3">Reichhaltige Pflege, Sturz-/Schürfprophylaxe</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="praxis" className="mt-10">
        <h2 className="text-2xl font-bold mb-3">
          Praxis: Pflege, Triggermanagement &amp; Arztbesuch
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">
              Basis &amp; Schub – was du täglich tun kannst
            </h3>
            <ul className="list-disc ml-5 leading-relaxed">
              <li>
                <strong>Basispflege:</strong> Täglich, parfümfrei, rückfettend.
              </li>
              <li>
                <strong>Schubbehandlung:</strong> Ärztlich empfohlene
                Entzündungshemmer anwenden – rechtzeitig beginnen.
              </li>
              <li>
                <strong>Hautfreundliche Routinen:</strong> Lauwarm, kurz
                duschen; sanft abtrocknen; sofort cremen.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5">
            <h3 className="text-lg font-semibold mb-2">
              Trigger gezielt erkennen
            </h3>
            <ul className="list-disc ml-5 leading-relaxed">
              <li>Wetterumschwung, trockene Heizungsluft</li>
              <li>Schwitzen, Reibung (Sport, enge Kleidung)</li>
              <li>Bestimmte Kosmetika, Reinigungsmittel, Duftstoffe</li>
              <li>Stress, wenig Schlaf</li>
            </ul>
          </div>
        </div>
        <aside className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm">
          <strong>Zum Arzt &gt;&nbsp;</strong>
          wenn nässende, großflächige Ekzeme, Infektzeichen (eitrig, Fieber),
          starker Schlafmangel oder Alltagsbeeinträchtigung bestehen.
        </aside>
      </section>

      {/* Summary */}
      <section id="zusammenfassung" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
        <p className="leading-relaxed">
          <strong>
            In welchen Altersgruppen kann Neurodermitis auftreten?
          </strong>{" "}
          In jedem Alter – mit Häufung im frühen Kindesalter und möglichen
          Spätmanifestationen bei Erwachsenen sowie besonderen Herausforderungen
          im Alter. Entscheidend sind eine konsequente Basispflege, das
          frühzeitige Managen von Schüben und das Meiden persönlicher Trigger –
          so lässt sich die Erkrankung in jeder Lebensphase gut kontrollieren.
        </p>
      </section>

      {/* Call to Action Section – unverändert via dangerouslySetInnerHTML */}
      <section
        className="mt-14"
        aria-label="Newsletter-Anmeldung Neurodermitis Tipps"
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

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Ab welchem Alter tritt Neurodermitis typischerweise auf?
            </h3>
            <p>
              Häufig ab dem 3.–6. Lebensmonat. Sie kann aber in jedem Alter
              starten – auch erstmals im Erwachsenen- oder Seniorenalter.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wächst sich Neurodermitis im Kindesalter aus?
            </h3>
            <p>
              Viele Kinder erleben eine deutliche Besserung, teils bis zur
              Symptomfreiheit. Rückfälle sind möglich; konsequente Pflege bleibt
              sinnvoll.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Welche Körperstellen sind je Alter typisch?
            </h3>
            <p>
              Säuglinge: Wangen/Kopfhaut; Kinder: Beugen; Jugendliche:
              Gesicht/Hals; Erwachsene: Hände/Hals; Senioren: Unterschenkel/Hände.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Ist Neurodermitis ansteckend oder durch Ernährung verursacht?
            </h3>
            <p>
              Sie ist nicht ansteckend. Ernährung kann individuell Trigger sein,
              ist aber nicht die alleinige Ursache.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Wann sollte ich ärztlichen Rat einholen?
            </h3>
            <p>
              Bei starken, ausgedehnten Schüben, Infektzeichen, erheblicher
              Alltagsbeeinträchtigung oder unklaren Auslösern – frühzeitig
              abklären lassen.
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
                  name: "Ab welchem Alter tritt Neurodermitis typischerweise auf?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Häufig ab dem 3.–6. Lebensmonat. Sie kann aber in jedem Alter starten – auch erstmals im Erwachsenen- oder Seniorenalter.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wächst sich Neurodermitis im Kindesalter aus?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Viele Kinder erleben eine deutliche Besserung, teils bis zur Symptomfreiheit. Rückfälle sind möglich; konsequente Pflege bleibt sinnvoll.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Welche Körperstellen sind je Alter typisch?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Säuglinge: Wangen/Kopfhaut; Kinder: Beugen; Jugendliche: Gesicht/Hals; Erwachsene: Hände/Hals; Senioren: Unterschenkel/Hände.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Ist Neurodermitis ansteckend oder durch Ernährung verursacht?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Neurodermitis ist nicht ansteckend. Ernährung kann individuell Trigger sein, ist aber nicht die alleinige Ursache.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wann sollte ich ärztlichen Rat einholen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Bei starken Schüben, Infektzeichen, erheblicher Alltagsbeeinträchtigung oder unklaren Auslösern – frühzeitig abklären lassen.",
                  },
                },
              ],
            }),
          }}
        />
      </section>

      {/* Mini-Glossar */}
      <section className="mt-14 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Mini-Glossar - Die wichtigsten Begriffe zu Neurodermitis &amp; Alter
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
                <td className="p-3 font-medium text-zinc-900">Milchschorf</td>
                <td className="p-3 text-zinc-700">
                  Frühform von Neurodermitis bei Säuglingen mit schuppigen,
                  gelblich-weißen Krusten auf gerötetem Grund.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Beugenekzem</td>
                <td className="p-3 text-zinc-700">
                  Typische Ekzemlokalisation in Ellenbeugen und Kniekehlen bei
                  Kindern und Jugendlichen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Spätmanifestation</td>
                <td className="p-3 text-zinc-700">
                  Erstes Auftreten einer atopischen Dermatitis im
                  Erwachsenenalter.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Basistherapie</td>
                <td className="p-3 text-zinc-700">
                  Tägliche Pflege zur Stärkung der Hautbarriere; Grundlage jeder
                  Behandlung.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">
                  Trigger/Provokationsfaktoren
                </td>
                <td className="p-3 text-zinc-700">
                  Reize wie trockene Luft, Schweiß, Kosmetika oder Stress, die
                  Schübe auslösen oder verstärken können.
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
              Expertin für Hautgesundheit – praxisnahe Aufklärung zu
              Neurodermitis, Akne &amp; Rosazea
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <ArrowRight className={`w-4 h-4 ${accent}`} aria-hidden="true" />
          <p className="text-sm text-zinc-700">
            Überprüft von:{" "}
            <strong>Hautwissen Kontakt Redaktion</strong> – Medizinisch
            redaktioneller Review.
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
            AWMF S3-Leitlinie Atopische Dermatitis (AD) [Neurodermitis],
            Version 4.3, gültig bis 15.06.2028 –{" "}
            <a
              href="https://register.awmf.org/de/leitlinien/detail/013-027"
              target="_blank"
              rel="noopener"
            >
              https://register.awmf.org/de/leitlinien/detail/013-027
            </a>
          </li>
          <li>
            AWMF S3-Leitlinie Atopische Dermatitis – Langfassung (PDF) –{" "}
            <a
              href="https://register.awmf.org/assets/guidelines/013-027l_S3_Atopische-Dermatitis-AD-Neurodermitis-atopisches-Ekzem_2024-01.pdf"
              target="_blank"
              rel="noopener"
            >
              https://register.awmf.org/assets/guidelines/013-027l_S3_Atopische-Dermatitis-AD-Neurodermitis-atopisches-Ekzem_2024-01.pdf
            </a>
          </li>
          <li>
            Gesundheitsinformation.de (IQWiG): Neurodermitis bei Babys,
            Kleinkindern und Erwachsenen –{" "}
            <a
              href="https://www.gesundheitsinformation.de/neurodermitis-bei-babys-kleinkindern-und-erwachsenen.html"
              target="_blank"
              rel="noopener"
            >
              https://www.gesundheitsinformation.de/neurodermitis-bei-babys-kleinkindern-und-erwachsenen.html
            </a>
          </li>
          <li>
            Allergieinformationsdienst (Helmholtz Zentrum München): Ist
            Neurodermitis eine häufige Erkrankung? –{" "}
            <a
              href="https://www.allergieinformationsdienst.de/krankheitsbilder/neurodermitis/verbreitung"
              target="_blank"
              rel="noopener"
            >
              https://www.allergieinformationsdienst.de/krankheitsbilder/neurodermitis/verbreitung
            </a>
          </li>
          <li>
            Hadi HA et&nbsp;al. The Epidemiology and Global Burden of Atopic
            Dermatitis. Curr Dermatol Rep. 2021. –{" "}
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8470589/"
              target="_blank"
              rel="noopener"
            >
              https://pmc.ncbi.nlm.nih.gov/articles/PMC8470589/
            </a>
          </li>
          <li>
            Kindergesundheit-info.de: Neurodermitis bei Kindern –{" "}
            <a
              href="https://www.kindergesundheit-info.de/themen/krankes-kind/erkrankungen/allergien/neurodermitis/"
              target="_blank"
              rel="noopener"
            >
              https://www.kindergesundheit-info.de/themen/krankes-kind/erkrankungen/allergien/neurodermitis/
            </a>
          </li>
          <li>
            UniversitätsSpital Zürich (USZ): Neurodermitis –{" "}
            <a
              href="https://www.usz.ch/krankheit/neurodermitis/"
              target="_blank"
              rel="noopener"
            >
              https://www.usz.ch/krankheit/neurodermitis/
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
              "Neurodermitis & Altersgruppen: Von Baby bis Senior – einfach erklärt",
            description:
              "Ab wann tritt Neurodermitis auf, wie zeigt sie sich in jedem Alter – und was hilft? Der verständliche Guide für Eltern, Teens, Erwachsene & Senioren.",
            inLanguage: "de",
            image:
              "https://www.hautwissen-kompakt.de/herobild_altersgruppen_neurodermitis.jpg",
            author: {
              "@type": "Person",
              name: "Jennifer Krause",
            },
            publisher: {
              "@type": "Organization",
              name: "Hautwissen Kompakt",
            },
            datePublished: "2025-08-20",
            dateModified: "2025-08-20",
            mainEntityOfPage:
              "https://www.hautwissen-kompakt.de/blog/neurodermitis-altersgruppen",
          }),
        }}
      />
    </article>
  );
}
