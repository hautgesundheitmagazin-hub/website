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

          {/* Text-Overlay: zentriert unten */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-6 px-6">
            <div
              className="w-full max-w-xl bg-white/75 backdrop-blur border rounded-2xl shadow-md p-5 sm:p-6"
              style={{ borderColor: "var(--sage,#CDE6DF)" }}
            >
              <h1
                className="font-highlight font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-center"
                style={{
                  color: "var(--graphite,#243236)",
                  fontFamily: "var(--font-montserrat, Montserrat, system-ui, sans-serif)",
                }}
              >
                Gesunde Haut beginnt hier
              </h1>

              <p
                className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-center"
                style={{ color: "var(--graphite,#243236)" }}
              >
                Evidence-based Tipps, Routinen und Produktempfehlungen – verständlich erklärt.
              </p>

              <div className="mt-6 flex justify-center">
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
function BlogGrid({ posts }: { posts: BlogPost[] }) {
  // bis zu 9 Karten, fehlende mit Platzhaltern füllen
  const items = posts.slice(0, 9);
  const placeholdersCount = Math.max(0, 9 - items.length);

  return (
    <section className="w-full">
      <div className="w-full max-w-4xl mx-auto px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Reale Beiträge */}
          {items.map((post) => (
            <Card key={post.slug} className="overflow-hidden border" style={{ borderColor: "var(--sage,#CDE6DF)" }}>
              {/* Bild */}
              <div className="relative aspect-[16/9] bg-white">
                {post.cover ? (
                  <Image
                    src={post.cover}
                    alt={post.title}
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
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>

                {post.excerpt ? (
                  <CardDescription className="text-[13px]" style={{ color: "var(--graphite,#243236)" }}>
                    {post.excerpt}
                  </CardDescription>
                ) : null}
              </CardHeader>

              <CardContent>
                <Button asChild size="sm">
                  <Link href={`/blog/${post.slug}`}>Lesen</Link>
                </Button>
              </CardContent>
            </Card>
          ))}

          {/* Platzhalter-Karten */}
          {Array.from({ length: placeholdersCount }).map((_, i) => (
            <Card
              key={`placeholder-${i}`}
              className="overflow-hidden border"
              style={{ borderColor: "var(--sage,#CDE6DF)" }}
            >
              <div className="relative aspect-[16/9] bg-slate-100" />
              <CardHeader>
                <CardTitle
                  className="font-highlight text-base"
                  style={{
                    color: "var(--graphite,#243236)",
                    fontFamily: "var(--font-montserrat, Montserrat, system-ui, sans-serif)",
                  }}
                >
                  Blog-Titel (Platzhalter)
                </CardTitle>
                <CardDescription className="text-[13px]" style={{ color: "var(--graphite,#243236)" }}>
                  Kurzer Teaser-Satz als Platzhalter für die Beschreibung.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="sm" variant="outline">
                  <Link href="#">Lesen</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogLanding({ featured, rest }: BlogLandingProps) {
  // Für das Grid nehmen wir alle vorhandenen Posts (inkl. featured),
  // damit maximal 9 Karten gefüllt werden.
  const all = [featured, ...rest].filter(Boolean) as BlogPost[];

  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroBanner />

      {/* 3x3 Blog Grid */}
      <BlogGrid posts={all} />
    </main>
  );
}

// --- Datenbeschaffung ---
async function getPosts(): Promise<BlogPost[]> {
  try {
    const base = process.env.NEXT_PUBLIC_SITE_URL;
    const url = base ? new URL("/api/posts", base).toString() : "/api/posts";

    const res = await fetch(url, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      console.error("[getPosts] HTTP Error:", res.status, res.statusText);
      return [];
    }

    const raw = (await res.json()) as unknown;

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
