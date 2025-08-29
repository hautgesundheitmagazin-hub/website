// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

          {/* Weißes Overlay für höhere Durchsichtigkeit */}
          <div className="absolute inset-0 bg-white/60" />

          {/* Text-Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-6 sm:px-10 py-8">
              <h1
  className="font-highlight font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-white"
  style={{
    fontFamily: "var(--font-montserrat, Montserrat, system-ui, sans-serif)",
    textShadow: "0 2px 12px rgba(0,0,0,0.35)",
  }}
>
                Gesunde Haut beginnt hier
              </h1>

              <p
                className="mt-3 max-w-2xl text-base sm:text-lg text-white"
                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.30)" }}
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
    </section>
  );
}



// --- UI ---
function BlogLanding({ featured, rest }: BlogLandingProps) {
  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroBanner />

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
