// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Diese Page soll NICHT statisch gecacht werden.
export const dynamic = "force-dynamic";

/** ---------- Statische Blogkarten ---------- */
type BlogCard = {
  url: string;          // Ziel-URL (intern oder extern)
  title: string;        // Titel
  description: string;  // Kurzbeschreibung
  image: string;        // Bild-URL
};

const CARDS: BlogCard[] = [
  {
    url: "/blog/aufbau-der-haut",
    title: "Wie ist die Haut aufgebaut? Einfach erklärt",
    description: "Ein Überblick über die Hautschichten und ihre wichtigsten Funktionen.",
    image: "/herobild_hautaufbau.jpg",
  },
  {
    url: "/blog/einfluss-ernaehrung-hautgesundheit",
    title: "Einfluss der Ernährung auf die Hautgesundheit – einfach erklärt",
    description: "So wirkt sich deine Ernährung direkt auf die Haut aus.",
    image: "/herobild_ernaehrung_hautgesundheit.jpg",
  },
  {
    url: "/glossar/atopische-dermatitis",
    title: "Atopische Dermatitis (Neurodermitis): Ursachen, Symptome & Behandlung",
    description: "Alles Wichtige rund um Ursachen, Symptome und Therapien bei Neurodermitis.",
    image: "/herobild_atopische_dermatitis.jpg",
  },
  {
    url: "/blog/sonnenlicht-und-hautgesundheit",
    title: "Einfluss von Sonnenlicht auf die Hautgesundheit: Sicher genießen, klug schützen",
    description: "Warum Sonne wichtig ist und wie du deine Haut trotzdem schützt.",
    image: "/herobild_sonnenlicht_hautgesundheit.jpg",
  },
  {
    url: "/blog/neurodermitis-ursachen",
    title: "Ursachen von Neurodermitis – einfach erklärt",
    description: "Die wichtigsten Auslöser und Risikofaktoren verständlich erklärt.",
    image: "/herobild_ursachen.jpg",
  },
  {
    url: "/glossar/exazerbation",
    title: "Exazerbation – wenn sich eine chronische Erkrankung plötzlich verschlechtert",
    description: "Was Exazerbationen bedeuten und wie man mit ihnen umgehen kann.",
    image: "/herobild_exazerbation.jpg",
  },
  {
    url: "/blog/unterschaetzte-lebensmittel-fuer-die-haut",
    title: "3 unterschätzte Lebensmittel für reine Haut – und warum sie sinnvoll sind",
    description: "Diese Lebensmittel können deine Hautgesundheit überraschend unterstützen.",
    image: "/herobild_drei_lebensmittel.jpg",
  },
  {
    url: "/blog/neurodermitis-altersgruppen",
    title: "In welchen Altersgruppen kann Neurodermitis auftreten? Einfach erklärt",
    description: "Von Säuglingen bis Erwachsenen – Neurodermitis kennt kein bestimmtes Alter.",
    image: "/herobild_altersgruppen_neurodermitis.jpg",
  },
  {
    url: "/glossar/pruritus",
    title: "Pruritus (Juckreiz): Definition, Ursachen, Diagnose & was wirklich hilft",
    description: "Warum Juckreiz entsteht und welche Maßnahmen Linderung bringen.",
    image: "/herobild_pruritus.jpg",
  },
];

/** ---------- Hero ---------- */
function HeroBanner() {
  return (
    <section className="w-full">
      <div className="w-full max-w-4xl mx-auto px-6 pt-6">
        <div className="relative min-h-[320px] sm:min-h-[420px] md:min-h-[520px] rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/hautsache_gesund_hero_banner.jpg"
            alt="Gesunde Haut – Hero"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-start pb-6 px-6">
            <div
              className="w-full max-w-xl bg-white/75 backdrop-blur border rounded-2xl shadow-md p-5 sm:p-6"
              style={{ borderColor: "var(--sage,#CDE6DF)" }}
            >
              <h1
                className="font-highlight font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-left"
                style={{
                  color: "var(--graphite,#243236)",
                  fontFamily: "var(--font-montserrat, Montserrat, system-ui, sans-serif)",
                }}
              >
                Gesunde Haut beginnt hier
              </h1>
              <p
                className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-left"
                style={{ color: "var(--graphite,#243236)" }}
              >
                Evidence-based Tipps, Routinen und Produktempfehlungen – verständlich erklärt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** ---------- Grid mit 9 statischen Karten ---------- */
function BlogGrid() {
  return (
    <section className="w-full">
      <div className="w-full max-w-4xl mx-auto px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((item, idx) => (
            <Card
              key={idx}
              className="overflow-hidden border"
              style={{ borderColor: "var(--sage,#CDE6DF)" }}
            >
              {/* Bild in 16:6 */}
              <div className="relative aspect-[16/6] bg-white">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-100" />
                )}
              </div>
              <CardHeader>
                <CardTitle
                  className="font-highlight text-base"
                  style={{
                    color: "var(--graphite,#243236)",
                    fontFamily: "var(--font-montserrat, Montserrat, system-ui, sans-serif)",
                  }}
                >
                  <Link href={item.url}>{item.title}</Link>
                </CardTitle>
                <CardDescription className="text-[13px]" style={{ color: "var(--graphite,#243236)" }}>
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="sm">
                  <Link href={item.url}>Lesen</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/** ---------- Seite ---------- */
export default function Page() {
  return (
    <main className="bg-white">
      <HeroBanner />
      <BlogGrid />
    </main>
  );
}
