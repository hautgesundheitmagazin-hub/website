// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FlaskConical, ShieldCheck, Sun, Sparkles, BookOpenText, ListChecks } from "lucide-react";

// Diese Page soll NICHT statisch gecacht werden.
export const dynamic = "force-dynamic";

// --- Lokale Typen ---
type BlogPost = {
  slug: string;
  title: string;
  excerpt?: string;
  cover?: string;
  date: string;
};

type BlogLandingProps = {
  featured: BlogPost | null;
  rest: BlogPost[];
};

// --- Helpers ---
function isValidDateString(d?: string) {
  if (!d) return false;
  const t = new Date(d).getTime();
  return Number.isFinite(t);
}

function formatDate(d: string) {
  const date = new Date(d);
  return isNaN(date.getTime())
    ? d
    : date.toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });
}

function sortByDateDesc(posts: BlogPost[]) {
  return [...posts].sort((a, b) => {
    const ta = new Date(a.date).getTime();
    const tb = new Date(b.date).getTime();
    return (Number.isFinite(tb) ? tb : 0) - (Number.isFinite(ta) ? ta : 0);
  });
}

function SectionHeading({ title, kicker, description }: { title: string; kicker?: string; description?: string }) {
  return (
    <div className="max-w-4xl mx-auto px-6">
      {kicker ? (
        <p className="text-xs uppercase tracking-wide" style={{ color: "var(--fog,#9AA7AE)" }}>
          {kicker}
        </p>
      ) : null}
      <h2
        className="mt-2 font-highlight text-2xl sm:text-3xl"
        style={{ color: "var(--graphite,#243236)", fontFamily: "var(--font-montserrat, Montserrat, system-ui, sans-serif)" }}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-[15px] sm:text-base" style={{ color: "var(--graphite,#243236)" }}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function HeroBanner() {
return (
<section className="w-full">
<div className="w-full max-w-4xl mx-auto px-6 pt-6">
<div className="relative min-h-[320px] sm:min-h-[420px] md:min-h-[520px] rounded-2xl overflow-hidden shadow-sm">
{/* Bild */}
<Image
src="/hero-picture-gesunde-haut.jpg"
alt="Gesunde Haut – Hero"
fill
priority
unoptimized
sizes="100vw"
className="object-cover"
/>

{/* Text-Overlay */}
<div className="absolute inset-0 flex items-center">
<div className="w-full px-6 sm:px-10 py-8">
{/* Weiße Box vor dem Bild */}
<div
className="max-w-xl bg-white/95 border rounded-2xl shadow-md p-5 sm:p-6"
style={{ borderColor: "var(--sage,#CDE6DF)" }}
>
<h1
className="font-highlight font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight"
style={{
color: "var(--graphite,#243236)",
fontFamily: "var(--font-montserrat, Montserrat, system-ui, sans-serif)",
}}
>
Gesunde Haut beginnt hier
</h1>

<p
className="mt-3 max-w-2xl text-base sm:text-lg"
style={{ color: "var(--graphite,#243236)" }}
>
Evidence-based Tipps, Routinen und Produktempfehlungen – verständlich erklärt.
</p>

<div className="mt-6">
<Button asChild>
<Link href="/blog">Zum Magazin</Link>
</Button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
);
}

/**
 * SECTION 1 — Trust & Kompetenz
 * Brandige, luftige Section mit Stats/Badges & Links zu Richtlinien/Quellen.
 */
function TrustSection() {
  return (
    <section
      className="w-full"
      style={{ background: "radial-gradient(1200px 300px at 50% -100px, var(--sage,#CDE6DF)/35%, white 60%)" }}
    >
      <div className="max-w-4xl mx-auto py-10 sm:py-14">
        <SectionHeading
          kicker="Kompetenz"
          title="Wissen, dem du vertrauen kannst"
          description="Wir verbinden dermatologisches Know-how mit verständlichen Erklärungen. Transparent, sorgfältig recherchiert und verantwortungsvoll vermittelt."
        />

        {/* Stat/Badge-Grid */}
        <div className="mt-6 px-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="rounded-2xl border" style={{ borderColor: "var(--sage,#CDE6DF)" }}>
            <CardContent className="p-5 flex items-start gap-3">
              <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl border bg-white" style={{ borderColor: "var(--sage,#CDE6DF)" }}>
                <FlaskConical className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium" style={{ color: "var(--graphite,#243236)" }}>Evidenz-basiert</div>
                <p className="text-sm mt-1" style={{ color: "var(--graphite,#243236)" }}>Wir verlinken Quellen und erklären Studien klar verständlich.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border" style={{ borderColor: "var(--sage,#CDE6DF)" }}>
            <CardContent className="p-5 flex items-start gap-3">
              <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl border bg-white" style={{ borderColor: "var(--sage,#CDE6DF)" }}>
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium" style={{ color: "var(--graphite,#243236)" }}>Praxisnah & verantwortungsvoll</div>
                <p className="text-sm mt-1" style={{ color: "var(--graphite,#243236)" }}>Tipps, die im Alltag funktionieren – ohne Hype oder Angstmacherei.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border" style={{ borderColor: "var(--sage,#CDE6DF)" }}>
            <CardContent className="p-5 flex items-start gap-3">
              <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl border bg-white" style={{ borderColor: "var(--sage,#CDE6DF)" }}>
                <ListChecks className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium" style={{ color: "var(--graphite,#243236)" }}>Transparente Empfehlungen</div>
                <p className="text-sm mt-1" style={{ color: "var(--graphite,#243236)" }}>Klare Kriterien, warum wir Produkte empfehlen – nachvollziehbar erklärt.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Richtlinien/Quellenlinks */}
        <div className="mt-6 px-6 flex flex-wrap items-center gap-3">
          <Link href="/richtlinien" className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline" style={{ color: "var(--graphite,#243236)" }}>
            <BookOpenText className="w-4 h-4" /> Redaktionsrichtlinien
          </Link>
          <span className="hidden sm:inline" style={{ color: "var(--fog,#9AA7AE)" }}>|</span>
          <Link href="/quellen" className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline" style={{ color: "var(--graphite,#243236)" }}>
            <FlaskConical className="w-4 h-4" /> Quellenangaben
          </Link>
         
        </div>
      </div>
    </section>
  );
}

/**
 * SECTION 2 — Themen/Guides Navigator
 * Große Kacheln, die direkt in die wichtigsten Bereiche führen.
 */
function TopicsSection() {
  const tiles = [
    {
      title: "Sonnenschutz 101",
      href: "/magazin/sonnenschutz",
      icon: <Sun className="w-5 h-5" />,
      desc: "Warum SPF das wichtigste Skincare-Tool ist – inklusive Praxis-Tipps.",
    },
    {
      title: "Akne & Unreinheiten",
      href: "/magazin/akne",
      icon: <Sparkles className="w-5 h-5" />,
      desc: "Ursachen verstehen, Trigger vermeiden und Pflegeroutinen aufbauen.",
    },
    {
      title: "Hautbarriere stärken",
      href: "/magazin/hautbarriere",
      icon: <ShieldCheck className="w-5 h-5" />,
      desc: "Rötungen, Trockenheit & Irritationen nachhaltig in den Griff bekommen.",
    },
    {
      title: "Inhaltsstoffe-Lexikon",
      href: "/magazin/inhaltsstoffe",
      icon: <FlaskConical className="w-5 h-5" />,
      desc: "Retinol, Niacinamid & Co. – was sie können und wie du sie kombinierst.",
    },
  ];

  return (
    <section className="w-full">
      <div className="max-w-4xl mx-auto py-10 sm:py-14 px-6">
        <SectionHeading
          kicker="Dein Einstieg"
          title="Starte hier: Leitfäden & Themen"
          description="Unsere meistgelesenen Ressourcen – kompakt, klar und direkt anwendbar."
        />

        {/* Wrapper mit leicht grauem Hintergrund in Content-Breite */}
        <div className="mt-6 rounded-2xl border bg-slate-50" style={{ borderColor: "var(--sage,#CDE6DF)" }}>
          <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tiles.map((t) => (
              <Link key={t.title} href={t.href} className="group">
                <div
                  className="relative overflow-hidden rounded-2xl border p-5 h-full transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-sm"
                  style={{ borderColor: "var(--sage,#CDE6DF)", background: "linear-gradient(180deg, rgba(205,230,223,0.18), rgba(255,255,255,0.9))" }}
                >
                  {/* Accent */}
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-40" style={{ background: "radial-gradient(closest-side, var(--sage,#CDE6DF), transparent)" }} />

                  <div className="relative z-10 flex items-start gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border bg-white" style={{ borderColor: "var(--sage,#CDE6DF)" }}>
                      {t.icon}
                    </div>
                    <div>
                      <h3 className="font-medium" style={{ color: "var(--graphite,#243236)" }}>{t.title}</h3>
                      <p className="text-sm mt-1" style={{ color: "var(--graphite,#243236)" }}>{t.desc}</p>
                      <div className="mt-3">
                        <Button size="sm" variant="outline" asChild>
                          <span>Öffnen</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- UI ---
function BlogLanding({ featured, rest }: BlogLandingProps) {
  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroBanner />

      {/* NEW: Trust & Kompetenz */}
      <TrustSection />

      {/* NEW: Themen/Guides Navigator */}
      <TopicsSection />

      {/* Highlight-Artikel */}
      <section className="w-full">
        <div className="w-full max-w-4xl mx-auto px-6 py-8 sm:py-10">
          {featured ? (
            <Card
              className="relative overflow-hidden border rounded-2xl min-h-[280px] sm:min-h-[360px]"
              style={{ borderColor: "var(--sage,#CDE6DF)" }}
            >
              {/* Hintergrundbild */}
              {featured.cover ? (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={featured.cover}
                    alt={featured.title}
                    fill
                    priority
                    // Entferne 'unoptimized', falls du die Domain in next.config freigibst
                    unoptimized
                    sizes="100vw"
                    className="object-cover opacity-60"
                  />
                </div>
              ) : null}

              {/* Overlay für Lesbarkeit */}
              <div className="absolute inset-0 z-10 bg-white/20" />

              {/* Inhalt */}
              <div className="relative z-20 p-6 sm:p-10">
                <CardHeader className="p-0 space-y-3">
                  {isValidDateString(featured.date) && (
                    <div className="mb-2 text-xs" style={{ color: "var(--fog,#9AA7AE)" }}>
                      {formatDate(featured.date)}
                    </div>
                  )}

                  <CardTitle
                    className="font-highlight text-2xl sm:text-3xl"
                    style={{
                      color: "var(--graphite,#243236)",
                      fontFamily: "var(--font-montserrat, Montserrat, system-ui, sans-serif)",
                    }}
                  >
                    <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                  </CardTitle>

                  {featured.excerpt ? (
                    <CardDescription className="text-[15px]" style={{ color: "var(--graphite,#243236)" }}>
                      {featured.excerpt}
                    </CardDescription>
                  ) : null}
                </CardHeader>

                <CardContent className="p-0 mt-6">
                  <Button asChild>
                    <Link href={`/blog/${featured.slug}`}>Zum Artikel</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ) : (
            <div
              className="rounded-xl border bg-white p-6"
              style={{ borderColor: "var(--sage,#CDE6DF)" }}
            >
              <p className="text-[15px]" style={{ color: "var(--graphite,#243236)" }}>
                Keine Artikel gefunden. Lege welche in deinem CMS an – oder stelle eine API unter
                <code className="ml-1">/api/posts</code> bereit.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Kopfzeile */}
      <div className="w-full max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <h3 className="font-highlight text-xl sm:text-2xl" style={{ color: "var(--graphite,#243236)" }}>
          Neu im Magazin
        </h3>
        <Button variant="ghost" asChild>
          <Link href="/blog">Alle Artikel</Link>
        </Button>
      </div>

      {/* Letzte 9 Artikel */}
      <section className="w-full">
        <div className="w-full max-w-4xl mx-auto px-6 py-12 sm:py-16">
          {rest.length === 0 ? (
            <div
              className="rounded-xl border bg-white p-6"
              style={{ borderColor: "var(--sage,#CDE6DF)" }}
            >
              <p className="text-[15px]" style={{ color: "var(--graphite,#243236)" }}>
                Noch keine weiteren Artikel vorhanden.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.slice(0, 9).map((post) => (
                <Card
                  key={post.slug}
                  className="overflow-hidden border"
                  style={{ borderColor: "var(--sage,#CDE6DF)" }}
                >
                  {post.cover ? (
                    <div className="relative h-40">
                      <Image
                        src={post.cover}
                        alt={post.title}
                        fill
                        unoptimized
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}

                  <CardHeader>
                    <CardTitle
                      className="font-highlight text-base"
                      style={{
                        color: "var(--graphite,#243236)",
                        fontFamily: "var(--font-montserrat, Montserrat, system-ui, sans-serif)",
                      }}
                    >
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>

                    {post.excerpt ? (
                      <CardDescription className="text-[13px]" style={{ color: "var(--graphite,#243236)" }}>
                        {post.excerpt}
                      </CardDescription>
                    ) : null}
                  </CardHeader>

                  <CardContent>
                    {isValidDateString(post.date) && (
                      <div className="mb-3 text-xs" style={{ color: "var(--fog,#9AA7AE)" }}>
                        {formatDate(post.date)}
                      </div>
                    )}
                    <Button asChild size="sm">
                      <Link href={`/blog/${post.slug}`}>Lesen</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

// --- Datenbeschaffung ---
async function getPosts(): Promise<BlogPost[]> {
  try {
    // Absolute URL, wenn NEXT_PUBLIC_SITE_URL gesetzt ist, sonst relative.
    const base = process.env.NEXT_PUBLIC_SITE_URL;
    const url = base ? new URL("/api/posts", base).toString() : "/api/posts";

    const res = await fetch(url, {
      // Keine Response-Caches – immer frische Daten.
      cache: "no-store",
      // next.revalidate wird hier explizit auf 0 gesetzt, falls Next intern noch ISR aktiv hätte.
      next: { revalidate: 0 },
      // Falls du Auth brauchst, hier Header ergänzen.
      // headers: { Authorization: `Bearer ${process.env.CMS_TOKEN}` }
    });

    if (!res.ok) {
      console.error("[getPosts] HTTP Error:", res.status, res.statusText);
      return [];
    }

    const raw = (await res.json()) as unknown;

    // Vorsichtige Normalisierung des Ergebnisses
    const arr = Array.isArray(raw) ? raw : (Array.isArray((raw as any)?.posts) ? (raw as any).posts : []);
    const normalized: BlogPost[] = arr
      .map((p: any): BlogPost | null => {
        if (!p) return null;
        const slug = String(p.slug ?? p.id ?? "").trim();
        const title = String(p.title ?? "").trim();
        const date = String(p.date ?? p.publishedAt ?? p.createdAt ?? "");
        if (!slug || !title) return null;
        return {
          slug,
          title,
          excerpt: p.excerpt ?? p.summary ?? p.description ?? "",
          cover: p.cover ?? p.image ?? p.thumbnail ?? "",
          date,
        };
      })
      .filter(Boolean) as BlogPost[];

    return sortByDateDesc(normalized);
  } catch (e) {
    console.error("[getPosts] Fehler:", e);
    return [];
  }
}

// --- Default Page ---
export default async function Page() {
  const posts = await getPosts();

  const featured = posts[0] ?? null;
  const rest = posts.slice(1);

  return <BlogLanding featured={featured} rest={rest} />;
}
