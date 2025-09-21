// src/app/blog/sonnenlicht-und-hautgesundheit/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sonnenlicht und Hautgesundheit: Wie Du Deine Haut schützt &amp; gleichzeitig von der Sonne profitierst",
  description:
    "Was UV-Strahlung mit Deiner Haut macht, wie viel Sonne sinnvoll ist, was der UV-Index bedeutet &amp; wie Du Dich mit SPF, Kleidung &amp; Timing optimal schützt.",
  alternates: {
    canonical: "https://www.hautwissen-kompakt.de/blog/sonnenlicht-und-hautgesundheit",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: "https://www.hautwissen-kompakt.de/blog/sonnenlicht-und-hautgesundheit",
    siteName: "Hautwissen Kompakt",
    title:
      "Sonnenlicht und Hautgesundheit: Schutz, Nutzen, Vitamin D &amp; UV-Index einfach erklärt",
    description:
      "Ein praxisnaher Guide zu UV-Strahlung, Vitamin D, UV-Index, Photoaging, SPF &amp; sicheren Sonnengewohnheiten.",
    images: [
      {
        url: "/herobild_sonnenlicht_hautgesundheit.jpg",
        width: 1600,
        height: 600,
        alt: "Sonnenlicht auf der Haut: Schutz und Nutzen im Gleichgewicht",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sonnenlicht &amp; Hautgesundheit: Alles, was Du über UV, Vitamin D und Schutz wissen musst",
    description:
      "Lerne, wie viel Sonne sinnvoll ist, wie der UV-Index funktioniert und wie Du SPF richtig einsetzt.",
    images: ["/herobild_sonnenlicht_hautgesundheit.jpg"],
  },
};

const author = {
  name: "Jennifer Krause",
  role: "Expertin für Hautgesundheit",
  image: "/autorenbild_jennifer.jpg",
};

const accent = "text-emerald-700";

const CTA_HTML = `<!-- Begin Brevo Form -->
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
<!-- End Brevo Form -->`;

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
          Einfluss von Sonnenlicht auf die Hautgesundheit: Sicher genießen, klug
          schützen
        </h1>
        <p className="mt-3 text-lg text-zinc-700">
          Du willst wissen, wie viel Sonne gut für Dich ist, ab wann UV-Strahlung
          problematisch wird und wie Du Deine Haut konkret schützt&quest; Hier
          bekommst Du klare Antworten, alltagstaugliche Tipps und die wichtigsten
          Fakten zu UV-Index, Vitamin D, Photoaging und Sonnenschutz.
        </p>

        {/* Datum & Lesedauer separat in eigener Zeile (statisch) */}
        <div className="mt-2 text-sm text-zinc-600">
          Zuletzt aktualisiert am{" "}
          <time dateTime="2025-09-20">20.09</time>
          {" · "}Lesedauer:{" "}
          <span className="tabular-nums">10 Minuten</span>
        </div>

        {/* Hero 16:6 */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <div className="relative w-full" style={{ aspectRatio: "16 / 6" }}>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/herobild_sonnenlicht_hautgesundheit.jpg"
              />
              <img
                loading="eager"
                fetchPriority="high"
                src="/herobild_sonnenlicht_hautgesundheit.jpg"
                alt="Sonnenlicht trifft auf Haut: Balance zwischen Schutz und Nutzen"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
          <figcaption className="sr-only">
            Sonnenlicht ist wichtig, aber die richtige Dosis und guter Schutz
            entscheiden über Nutzen und Risiko.
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
            UV-Strahlung wirkt auf Deine Haut doppelt: kurzfristig als Sonnenbrand,
            langfristig als Photoaging und erhöhtes Hautkrebsrisiko. Der UV-Index
            hilft Dir, die Tagesgefahr einzuschätzen.
          </li>
          <li>
            Schon ab UV-Index 3 gilt; Schatten suchen, Kleidung und
            Sonnenbrille nutzen, unbedeckte Haut mit breitbandiger Sonnencreme
            (mind. SPF 30) schützen.
          </li>
          <li>
            Vitamin D entsteht v. a. durch UVB auf der Haut. Kurze, regelmäßige
            Sonnenfenster genügen oft. Längere Aufenthalte&quest; Dann bitte mit
            Schutz.
          </li>
          <li>
            Sonnencreme wirkt nur ausreichend, wenn Du genug nimmst; etwa 2&nbsp;mg
            pro cm². Für den Körper eines Erwachsenen entspricht das ca. 3
            Esslöffeln pro Anwendung.
          </li>
          <li>
            Morgen- und Spät­nachmittags­sonne ist oft hautfreundlicher, weil der
            UV-Index niedriger ist. Entscheidend ist das Tagesmaximum vermeiden.
          </li>
          <li>
            Sensible Gruppen wie Kinder, sehr helle Hauttypen oder Menschen mit
            photosensibilisierenden Medikamenten brauchen besonders konsequenten
            Schutz.
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
            <a className={`hover:underline ${accent} font-medium`} href="#was-ist-uv">
              Was ist UV-Strahlung&quest; UVA, UVB, UVC in einfach
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#uv-index">
              UV-Index verstehen; Ab wann wird es kritisch&quest;
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#nutzen">
              Positive Effekte; Vitamin D, Stimmung &amp; mehr
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#risiken">
              Risiken; Sonnenbrand, Photoaging, Hautkrebs
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#schutz">
              Sonnenschutz in der Praxis; Die 3-Säulen-Strategie
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#mengen">
              Wie viel Sonnencreme&quest; Realistische Mengen &amp; Timing
            </a>
          </li>
          <li>
            <a className={`hover:underline ${accent} font-medium`} href="#alltag">
              Alltagstipps; Hauttyp, Tageszeit, Jahreszeit
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
      <section id="was-ist-uv" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Was ist UV-Strahlung&quest; UVA, UVB, UVC in einfach</h2>
        <p className="leading-relaxed">
          Sonnenlicht besteht aus sichtbarem Licht, Infrarot und ultravioletter
          Strahlung &lpar;UV&rpar;. Für die Haut sind UVA und UVB relevant; UVA
          dringt tiefer in die Haut ein und beschleunigt Alterungsprozesse, UVB
          ist energiereicher, verursacht Sonnenbrand und ist gleichzeitig für die
          körpereigene Vitamin-D-Bildung nötig. UVC wird von der Atmosphäre
          abgefangen. Kurz; UVB brennt, UVA altert &ndash; beides wollen wir
          dosieren und uns schützen.
        </p>

        <div className="mt-5 rounded-2xl border border-zinc-200 p-5 bg-white">
          <h3 className="text-xl font-semibold mb-2">
            Kurzvergleich; UVA vs. UVB
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl border border-zinc-200 p-4">
              <div className="font-medium mb-1">Wellenlänge</div>
              <p>UVA; ca. 320&ndash;400&nbsp;nm &nbsp;&middot;&nbsp; UVB; ca. 280&ndash;320&nbsp;nm</p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <div className="font-medium mb-1">Wirkung</div>
              <p>UVA; Photoaging &amp; indirekter DNA-Schaden &nbsp;&middot;&nbsp; UVB; Sonnenbrand &amp; direkter DNA-Schaden</p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <div className="font-medium mb-1">Schutz</div>
              <p>Breitbandiger SPF &lpar;UVA+UVB&rpar;, Kleidung, Schatten, Sonnenbrille</p>
            </div>
          </div>
        </div>
      </section>

      <section id="uv-index" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">UV-Index verstehen; Ab wann wird es kritisch&quest;</h2>
        <p className="leading-relaxed">
          Der UV-Index &lpar;UVI&rpar; zeigt Dir, wie stark die sonnenbrandwirksame
          UV-Strahlung heute im Tagesmaximum ist. Faustregel; Ab UVI&nbsp;3
          sind Schutzmaßnahmen sinnvoll. Je höher der Index, desto schneller
          entsteht ohne Schutz ein Sonnenbrand. In Deutschland steigt der UVI im
          Sommer zur Mittagszeit am stärksten an und ist in höheren Lagen oder
          am Wasser zusätzlich verstärkt.
        </p>

        <div className="mt-5 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="p-3 text-left font-semibold w-40">UV-Index</th>
                <th className="p-3 text-left font-semibold">Bedeutung</th>
                <th className="p-3 text-left font-semibold">Empfehlung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200">
                <td className="p-3">1&ndash;2</td>
                <td className="p-3">niedrig</td>
                <td className="p-3">meist keine Maßnahmen nötig*</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">3&ndash;5</td>
                <td className="p-3">mittel</td>
                <td className="p-3">
                  Mittags Schatten, Kleidung, Sonnenbrille, SPF auf unbedeckter Haut
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">6&ndash;7</td>
                <td className="p-3">hoch</td>
                <td className="p-3">Schutz konsequent, Mittagssonne meiden</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">8&ndash;10</td>
                <td className="p-3">sehr hoch</td>
                <td className="p-3">Schutz absolut notwendig</td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3">11+</td>
                <td className="p-3">extrem</td>
                <td className="p-3">möglichst drinnen bleiben</td>
              </tr>
            </tbody>
          </table>
          <p className="px-3 pb-3 text-xs text-zinc-600">
            *Auch bei UVI 2 kann langer Aufenthalt ohne Schutz zu Sonnenbrand führen,
            insbesondere bei sehr heller Haut.
          </p>
        </div>
      </section>

      <section id="nutzen" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Positive Effekte; Vitamin D, Stimmung &amp; mehr</h2>
        <p className="leading-relaxed">
          Sonnenlicht ist nicht nur Risiko; Kurze, regelmäßige Aufenthalte im
          Freien unterstützen die Vitamin-D-Bildung &lpar;über UVB&rpar; und wirken sich
          positiv auf Wohlbefinden und Tagesrhythmus aus. Zudem wird erforscht,
          dass Sonnenlicht auch vitamin-D-unabhängige Wirkmechanismen hat, z. B.
          über Stickstoffmonoxid &lpar;NO&rpar; aus der Haut, das Blutgefäße erweitert und
          so den Blutdruck leicht senken kann. Diese Effekte sind klein, aber
          interessant &ndash; Schutz bleibt trotzdem Pflicht.
        </p>

        {/* Expertenzitat */}
        <figure className="mt-6 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5">
          <blockquote className="text-lg font-medium">
            „Kluge Sonnenroutine heißt; kurze, gut getimte Dosen für die Vorteile,
            konsequenter Schutz gegen die Risiken.“
          </blockquote>
          <figcaption className="mt-2 text-sm text-zinc-600">
            — Jennifer Krause, indirektes Zitat
          </figcaption>
        </figure>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
            <h3 className="text-xl font-semibold mb-2">Vitamin D in Kürze</h3>
            <ul className="list-disc ml-5 space-y-2 text-sm">
              <li>
                UVB-Strahlung auf der Haut setzt die körpereigene Vitamin-D-Produktion
                in Gang.
              </li>
              <li>
                Kurze Sonnenfenster &lpar;je nach Hauttyp, Standort, Jahreszeit&rpar; reichen
                oft, längere Aufenthalte nur mit Schutz.
              </li>
              <li>
                In Herbst/Winter kann die Sonne in Deutschland für Vitamin D häufig
                nicht stark genug sein &lpar;tiefer Sonnenstand&rpar;.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
            <h3 className="text-xl font-semibold mb-2">Weitere positive Effekte</h3>
            <ul className="list-disc ml-5 space-y-2 text-sm">
              <li>
                Besserer Tagesrhythmus; Tageslicht stabilisiert innere Uhr und kann
                Schlafqualität unterstützen.
              </li>
              <li>
                Stimmung; Tageslicht hebt bei vielen Menschen die Laune.
              </li>
              <li>
                Forschung; NO-Freisetzung aus der Haut unter UVA kann Blutgefäße
                erweitern und den Blutdruck minimal senken &lpar;kein Ersatz für
                Therapie&rpar;.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="risiken" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Risiken; Sonnenbrand, Photoaging, Hautkrebs</h2>
        <p className="leading-relaxed">
          UV-Strahlen verursachen akute und langfristige Hautschäden. Akut drohen
          Sonnenbrand, phototoxische oder photoallergische Reaktionen. Langfristig
          fördern sie Faltenbildung &lpar;Photoaging&rpar; und verschiedene Hautkrebsarten.
          Das Risiko steigt mit Lebensdosis und wiederholten Sonnenbränden.
          Besonders tückisch sind intensive, intermittierende Expositionen in der
          Mittagssonne und im Urlaub.
        </p>

        <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 p-5">
          <h3 className="text-xl font-semibold mb-2">Achtung; Risikogruppen</h3>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li>Sehr helle Hauttypen &lpar;I&ndash;II&rpar;, Sommersprossen, viele Muttermale</li>
            <li>Kinder und Jugendliche</li>
            <li>Menschen mit geschwächtem Immunsystem</li>
            <li>Berufsgruppen mit viel Außenarbeit</li>
            <li>
              Einnahme photosensibilisierender Medikamente &lpar;Beipackzettel beachten&rpar;
            </li>
          </ul>
        </div>
      </section>

      <section id="schutz" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Sonnenschutz in der Praxis; Die 3-Säulen-Strategie</h2>
        <p className="leading-relaxed">
          Verlässlicher Schutz kombiniert drei Bausteine; Meiden, Bedecken,
          Eincremen. Reihenfolge ist wichtig; Zuerst Schatten bzw. Zeitplanung,
          dann Kleidung und Brille, erst danach Sonnencreme als Ergänzung auf
          unbedeckten Flächen. Breitbandiger Schutz bedeutet; UVA und UVB werden
          reduziert.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
            <h3 className="text-lg font-semibold mb-2">1. Meiden</h3>
            <p className="text-sm">
              Um die Mittagszeit ist der UVI am höchsten. Plane Outdoor-Aktivitäten
              auf den Vormittag oder späten Nachmittag.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
            <h3 className="text-lg font-semibold mb-2">2. Bedecken</h3>
            <p className="text-sm">
              Dicht gewebte, lange Kleidung, breitkrempiger Hut, Sonnenbrille mit
              UV-Schutz. Optional UPF-Kleidung bei hoher Belastung.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
            <h3 className="text-lg font-semibold mb-2">3. Eincremen</h3>
            <p className="text-sm">
              Breitbandig, wasserfest, mindestens SPF&nbsp;30 für Erwachsene und
              Kinder. Großzügig auftragen und regelmäßig nachlegen.
            </p>
          </div>
        </div>
      </section>

      <section id="mengen" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Wie viel Sonnencreme&quest; Realistische Mengen &amp; Timing</h2>
        <p className="leading-relaxed">
          Der angegebene Lichtschutzfaktor wird nur erreicht, wenn ausreichend
          Produkt aufgetragen wird. In Prüfverfahren gelten rund 2&nbsp;mg pro cm²
          Haut. Praxistauglich sind Merkhilfen; Für den ganzen Körper eines
          Erwachsenen etwa eine Shotglas-Füllung &lpar;~30&nbsp;ml&rpar; oder ca. 3
          Esslöffel. Fürs Gesicht empfiehlt sich etwa 1&nbsp;Teelöffel oder die
          Zwei-Finger-Regel. Nachcremen ca. alle 2&nbsp;Stunden sowie nach Schwitzen,
          Schwimmen und Abtrocknen.
        </p>

        <div className="mt-5 rounded-2xl border border-zinc-200 p-5 bg-white">
          <h3 className="text-xl font-semibold mb-2">Auf einen Blick</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-zinc-200 p-4">
              <div className="font-medium mb-1">Körper</div>
              <p>~30&nbsp;ml pro Anwendung &lpar;≈ ein Shotglas&rpar;</p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <div className="font-medium mb-1">Gesicht</div>
              <p>~1&nbsp;TL oder zwei Fingerlängen</p>
            </div>
          </div>
        </div>
      </section>

      <section id="alltag" className="mt-12">
        <h2 className="text-2xl font-bold mb-3">Alltagstipps; Hauttyp, Tageszeit, Jahreszeit</h2>
        <div className="grid md:grid-cols-[2fr_1fr] gap-6">
          <div>
            <p className="leading-relaxed">
              Deine persönliche Sonnenzeit hängt von Hauttyp, Bewölkung, Höhe,
              Breitengrad, UVI und Reflexionen &lpar;Wasser, Schnee&rpar; ab. Hellere
              Hauttypen verbrennen schneller. In Deutschland erreicht der UVI im
              Sommer oft zwischen 11 und 15 Uhr sein Maximum. Im Frühjahr kann die
              Haut noch „sonnenentwöhnt“ sein; insbesondere langsam steigern
              und Sonnenbrand strikt vermeiden.
            </p>

            <div className="mt-5 rounded-2xl border border-zinc-200 p-5 bg-emerald-50">
              <h3 className="text-xl font-semibold mb-2">Schnell-Check für den Tag</h3>
              <ol className="list-decimal ml-5 space-y-2 text-sm">
                <li>UVI prüfen &lpar;ab 3 Schutz einplanen&rpar;</li>
                <li>Timing wählen &lpar;Vormittag/Spätnachmittag bevorzugen&rpar;</li>
                <li>Kleidung, Brille, Hut vorbereiten</li>
                <li>SPF&nbsp;30+ großzügig, wasserfest, breitbandig</li>
                <li>Alle 2&nbsp;Stunden nachcremen</li>
              </ol>
            </div>
          </div>

          <aside className="rounded-2xl border border-zinc-200 p-5 bg-white">
            <h3 className="text-lg font-semibold mb-2">Kinder &amp; empfindliche Haut</h3>
            <ul className="list-disc ml-5 space-y-2 text-sm">
              <li>Konsequent Schatten und Kleidung priorisieren</li>
              <li>SPF&nbsp;30 oder höher, sanfte Formulierungen &lpar;z. B. mineralisch&rpar;</li>
              <li>Nie Mittagssonne&semi; Sonnenbrand strikt vermeiden</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Summary */}
      <section id="zusammenfassung" className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Kurzfazit</h2>
        <p className="leading-relaxed">
          <strong>Wie findest Du die richtige Balance zwischen Sonnenlicht und
            Hautschutz&quest;</strong>{" "}
          Nutze die Sonne bewusst; kurze, gut getimte Dosen für Vitamin D und
          Wohlbefinden, konsequenter Schutz gegen Sonnenbrand, Photoaging und
          Hautkrebsrisiko. Orientiere Dich am UV-Index, priorisiere Kleidung und
          Schatten, setze Sonnenschutzmittel großzügig und regelmäßig ein.
        </p>
      </section>

      {/* Call to Action Section */}
      <section
        id="newsletter"
        className="mt-14"
        dangerouslySetInnerHTML={{ __html: CTA_HTML }}
      />

      {/* FAQ */}
      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-6 text-zinc-700">
          <div>
            <h3 className="font-semibold">
              Wie viel Sonne pro Tag ist gesund&quest;
            </h3>
            <p>
              Das hängt von Hauttyp, UVI, Jahreszeit und Standort ab. Für viele
              Menschen reichen kurze, regelmäßige Sonnenfenster außerhalb des
              Mittagsmaximums. Bei UVI&nbsp;3 oder höher immer Schutz einplanen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Reicht SPF&nbsp;30 wirklich aus&quest;
            </h3>
            <p>
              Ja, wenn Du genug und breitbandig aufträgst und regelmäßig
              nachcremst. SPF&nbsp;30 filtert den Großteil der UVB-Strahlung, kein
              Produkt blockt 100 &percnt;. Kleidung und Schatten bleiben wichtig.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Ist Sonnencreme sicher&quest;
            </h3>
            <p>
              Nach heutigem Wissensstand gelten zugelassene Produkte als sicher.
              Entscheidend ist die korrekte Anwendung; genug Menge, rechtzeitiges
              Auftragen, regelmäßiges Nachcremen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Muss ich auch im Winter Sonnenschutz tragen&quest;
            </h3>
            <p>
              Bei niedrigem UVI und kurzer Aufenthaltsdauer oft nicht nötig. In den
              Bergen, auf Schnee oder bei hoher Reflexion &lpar;z. B. Wasser&rpar; sowie an
              sonnigen Tagen mit UVI&nbsp;3 und höher solltest Du schützen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Schützt „Tagescreme mit SPF 15“ im Alltag genug&quest;
            </h3>
            <p>
              Für kurze Wege bei niedrigem UVI kann das passen. Für längere
              Outdoor-Zeiten ist SPF&nbsp;30+ sinnvoller. Wichtig ist die Menge; fürs
              Gesicht etwa 1&nbsp;TL.
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
                  name: "Wie viel Sonne pro Tag ist gesund?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Das hängt von Hauttyp, UV-Index, Jahreszeit und Standort ab. Für viele Menschen reichen kurze, regelmäßige Sonnenfenster außerhalb des Mittagsmaximums. Bei UV-Index 3 oder höher immer Schutz einplanen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Reicht SPF 30 wirklich aus?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Ja, wenn ausreichend und breitbandig aufgetragen und regelmäßig nachgecremt wird. Kein Produkt blockt 100 %. Kleidung und Schatten bleiben wichtig.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Ist Sonnencreme sicher?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Zugelassene Produkte gelten nach heutigem Wissensstand als sicher. Entscheidend ist korrekte Anwendung: ausreichende Menge, rechtzeitiges Auftragen, regelmäßiges Nachcremen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Muss ich auch im Winter Sonnenschutz tragen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Bei niedrigem UV-Index und kurzer Aufenthaltsdauer oft nicht nötig. In den Bergen, auf Schnee oder bei hoher Reflexion sowie an sonnigen Tagen mit UV-Index 3 und höher ist Schutz sinnvoll.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Schützt Tagescreme mit SPF 15 im Alltag genug?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Für kurze Wege bei niedrigem UV-Index kann das passen. Für längere Outdoor-Zeiten ist SPF 30+ sinnvoller. Wichtig ist die Menge: fürs Gesicht etwa 1 Teelöffel.",
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
          Mini-Glossar - Die wichtigsten Begriffe zu Sonnenlicht und Hautgesundheit
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
                <td className="p-3 font-medium text-zinc-900">UV-Index &lpar;UVI&rpar;</td>
                <td className="p-3 text-zinc-700">
                  Maß für die tageszeitliche Spitzenstärke der sonnenbrandwirksamen
                  UV-Strahlung. Ab UVI&nbsp;3 Schutz empfohlen.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">SPF &lpar;Lichtschutzfaktor&rpar;</td>
                <td className="p-3 text-zinc-700">
                  Kennzeichnet, wie stark ein Produkt UVB reduziert. Breitbandige
                  Produkte schützen zusätzlich vor UVA.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Photoaging</td>
                <td className="p-3 text-zinc-700">
                  Vorzeitige Hautalterung durch UV, sichtbar als Falten, Elastizitätsverlust,
                  Pigmentflecken.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Breitbandig</td>
                <td className="p-3 text-zinc-700">
                  Schutz sowohl gegen UVA als auch UVB. Achte auf die Kennzeichnung.
                </td>
              </tr>
              <tr className="border-t border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">UPF</td>
                <td className="p-3 text-zinc-700">
                  Ultraviolet Protection Factor für Textilien; beschreibt, wie gut ein
                  Stoff UV-Strahlen abhält.
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
              Expertin für Hautgesundheit, Schwerpunkte; Photodermatologie, sensible Haut,
              Hautpflege bei aktiver Lebensweise.
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <p className="text-sm text-zinc-700">
            Überprüft von; <strong>Hautwissen Kontakt Redaktion</strong> – Redaktion
            Medizin &amp; Prävention.
          </p>
        </div>
      </section>

      {/* Artikel Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "Einfluss von Sonnenlicht auf die Hautgesundheit: Sicher genießen, klug schützen",
            description:
              "UV-Index, Vitamin D, Photoaging, SPF &amp; praxisnahe Schutzstrategien einfach erklärt.",
            inLanguage: "de",
            image: [
              "https://www.hautwissen-kompakt.de/herobild_sonnenlicht_hautgesundheit.jpg",
            ],
            author: {
              "@type": "Person",
              name: "Jennifer Krause",
            },
            publisher: {
              "@type": "Organization",
              name: "Hautwissen Kompakt",
            },
            mainEntityOfPage:
              "https://www.hautwissen-kompakt.de/blog/sonnenlicht-und-hautgesundheit",
            datePublished: "2025-09-20",
            dateModified: "2025-09-20",
          }),
        }}
      />

      {/* Quellenverzeichnis */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold mb-3">Quellen &amp; weiterführende Studien</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>
            WHO; Radiation &ndash; The known health effects of ultraviolet radiation
            &ndash; https://www.who.int/news-room/questions-and-answers/item/radiation-the-known-health-effects-of-ultraviolet-radiation
          </li>
          <li>
            Bundesamt für Strahlenschutz &lpar;BfS&rpar;; UV-Index &amp; Schutzempfehlungen
            &ndash; https://www.bfs.de/DE/themen/opt/uv/uv-index/einfuehrung/einfuehrung_node.html
          </li>
          <li>
            BVL; Sonnenschutzmittel – Mengen &amp; Anwendung &ndash; https://www.bvl.bund.de/DE/Arbeitsbereiche/03_Verbraucherprodukte/02_Verbraucher/03_Kosmetik/06_Sonnenschutzmittel/bgs_kosmetik_sonnenschutzmittel_node.html
          </li>
          <li>
            American Academy of Dermatology &lpar;AAD&rpar;; How to apply/select sunscreen
            &ndash; https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/how-to-apply-sunscreen &amp; https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/understand-sunscreen-labels
          </li>
          <li>
            Weller RB et&nbsp;al.; Incident solar UV radiation and blood pressure &ndash;
            Journal of the American Heart Association &lpar;2020&rpar; – https://www.ahajournals.org/doi/10.1161/JAHA.119.013837
          </li>
          <li>
            Weller RB; Sunlight; Time for a Rethink&quest; &ndash; Journal of Investigative Dermatology &lpar;2024&rpar; – https://pubmed.ncbi.nlm.nih.gov/38661623/
          </li>
          <li>
            BfR/BfS; Sonnencreme und Co.; Gibt es gesundheitliche Risiken&quest; – FAQ
            &amp; Hintergrund &lpar;2024&rpar; – https://www.bfr.bund.de/fragen-und-antworten/thema/sonnencreme-und-co-gibt-es-gesundheitliche-risiken/
          </li>
        </ul>
      </section>
    </article>
  );
}
