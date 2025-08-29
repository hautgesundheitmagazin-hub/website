import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const revalidate = 60; // ISR – Seite alle 60s erneuern

// --- Types ---
export type Post = {
  slug: string; // z.B. "was-ist-der-haut-pH"
  title: string;
  excerpt?: string;
  date?: string; // ISO
  cover?: string; // /images/... optional
  tags?: string[];
  featured?: boolean;
};

// --- Data loader ---
// Lädt die letzten Posts über eine API. Fallback: leeres Array.
async function getLatestPosts(limit = 9): Promise<Post[]> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

  if (!baseUrl) return [];

  try {
    const res = await fetch(`${baseUrl}/api/posts?limit=${limit}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as Post[];
    return (data || [])
      .filter((p) => p && p.slug && p.title)
      .slice(0, limit);
  } catch (e) {
    return [];
  }
}

function formatDate(d?: string) {
  if (!d) return "";
  try {
    return new Intl.DateTimeFormat("de-DE", { dateStyle: "medium" }).format(new Date(d));
  } catch {
    return d || "";
  }
}

export default async function HomePage() {
  const posts = await getLatestPosts(9);
  const featured = posts.find((p) => p.featured) || posts[0];
  const rest = posts.filter((p) => p !== featured);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Hintergrundbild */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-picture-gesunde-haut.jpg"
            alt="Gesunde Haut – Magazin Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* CI-Hero-Overlay mit leichter Transparenz */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "var(--hero-gradient, linear-gradient(135deg, #F5EDE6 0%, #CDE6DF 60%, #2FB7A2 100%))",
              opacity: 0.65,
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-24 sm:py-28 md:py-32">
          <h1
            className="font-highlight mb-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
            style={{ color: "var(--graphite,#243236)" }}
          >
            Wir machen Hautgesundheit verständlich.
          </h1>
          <p className="max-w-2xl text-base sm:text-lg" style={{ color: "var(--graphite,#243236)" }}>
            Evidenzbasiert, empathisch und alltagstauglich – für alle, die ihre Haut langfristig pflegen
            und verstehen wollen.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild>
              <Link href="/blog">Zum Magazin</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#willkommen">Mehr erfahren</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Danke & Willkommen */}
      <section id="willkommen" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <div className="rounded-2xl border bg-white p-6 sm:p-8" style={{ borderColor: "var(--sage,#CDE6DF)" }}>
          <h2
            className="font-highlight text-2xl sm:text-3xl font-semibold"
            style={{ color: "var(--graphite,#243236)" }}
          >
            Danke & willkommen!
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--graphite,#243236)" }}>
            Schön, dass du hier bist. Dieses Magazin will dir Orientierung geben – ohne Hype, ohne Druck.
            Nimm dir Zeit, stöbere durch unsere Artikel und finde deine persönliche Pflegeroutine.
          </p>
        </div>
      </section>

      {/* Highlighted Artikel */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3
              className="font-highlight text-xl sm:text-2xl font-semibold"
              style={{ color: "var(--graphite,#243236)" }}
            >
              Highlight des Monats
            </h3>
            {featured ? (
              <>
                <h4
                  className="font-highlight mt-3 text-2xl sm:text-3xl font-semibold"
                  style={{ color: "var(--graphite,#243236)" }}
                >
                  {featured.title}
                </h4>
                {featured.excerpt ? (
                  <p className="mt-2 text-[15px]" style={{ color: "var(--graphite,#243236)" }}>
                    {featured.excerpt}
                  </p>
                ) : null}
                <div className="mt-4 flex items-center gap-4 text-sm" style={{ color: "var(--fog,#9AA7AE)" }}>
                  <span>{formatDate(featured.date)}</span>
                  {featured.tags?.length ? <span>• {featured.tags.slice(0, 3).join(", ")}</span> : null}
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link href={`/blog/${featured.slug}`}>Jetzt lesen</Link>
                  </Button>
                </div>
              </>
            ) : (
              <p className="mt-3 text-[15px]" style={{ color: "var(--graphite,#243236)" }}>
                Noch kein Highlight gesetzt. Markiere einen Artikel als <code>featured</code> oder füge einen
                neuen hinzu.
              </p>
            )}
          </div>

          <Card className="overflow-hidden border" style={{ borderColor: "var(--sage,#CDE6DF)" }}>
            {featured?.cover ? (
              <div className="relative h-64 sm:h-80">
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center bg-[var(--sand,#F5EDE6)]">
                <span className="text-sm" style={{ color: "var(--fog,#9AA7AE)" }}>
                  Kein Coverbild vorhanden
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle
                className="font-highlight text-lg"
                style={{
                  color: "var(--graphite,#243236)",
                  fontFamily: 'var(--font-highlight), "Kirang Haerang", cursive',
                }}
              >
                {featured ? featured.title : "Highlight Artikel"}
              </CardTitle>
              {featured?.excerpt ? (
                <CardDescription className="text-[15px]" style={{ color: "var(--graphite,#243236)" }}>
                  {featured.excerpt}
                </CardDescription>
              ) : null}
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href={featured ? `/blog/${featured.slug}` : "/blog"}>Zum Artikel</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Letzte 9 Artikel */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="mb-6 flex items-end justify-between">
          <h3
            className="font-highlight text-xl sm:text-2xl font-semibold"
            style={{ color: "var(--graphite,#243236)" }}
          >
            Neu im Magazin
          </h3>
          <Button variant="ghost" asChild>
            <Link href="/blog">Alle Artikel</Link>
          </Button>
        </div>

        {rest.length === 0 ? (
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "var(--sage,#CDE6DF)" }}>
            <p className="text-[15px]" style={{ color: "var(--graphite,#243236)" }}>
              Noch keine Artikel gefunden. Lege welche in deinem CMS an – oder stelle eine API unter
              <code className="ml-1">/api/posts</code> bereit.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Card key={post.slug} className="overflow-hidden border" style={{ borderColor: "var(--sage,#CDE6DF)" }}>
                {post.cover ? (
                  <div className="relative h-40">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
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
                      fontFamily: 'var(--font-highlight), "Kirang Haerang", cursive',
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
                  <div className="mb-3 text-xs" style={{ color: "var(--fog,#9AA7AE)" }}>
                    {formatDate(post.date)}
                  </div>
                  <Button asChild size="sm">
                    <Link href={`/blog/${post.slug}`}>Lesen</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
