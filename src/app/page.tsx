// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- Lokale Typen ---
type BlogPost = {
  slug: string;
  title: string;
  excerpt?: string;
  cover?: string;
  date: string;
};

type BlogLandingProps = {
  featured?: BlogPost | null;
  rest: BlogPost[];
};

// --- Helpers ---
function formatDate(d: string) {
  const date = new Date(d);
  return isNaN(date.getTime())
    ? d
    : date.toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });
}

// --- UI ---
function BlogLanding({ featured = null, rest = [] }: BlogLandingProps) {
  return (
    <>
      {/* Highlight-Artikel */}
      <section className="w-full">
        <div className="w-full max-w-4xl mx-auto px-6 py-4">
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
                  <div className="mb-2 text-xs" style={{ color: "var(--fog,#9AA7AE)" }}>
                    {formatDate(featured.date)}
                  </div>

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
          ) : null}
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
                Noch keine Artikel gefunden. Lege welche in deinem CMS an – oder stelle eine API unter
                <code className="ml-1">/api/posts</code> bereit.
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
        </div>
      </section>
    </>
  );
}

// --- Daten (Stub) ---
async function getPosts(): Promise<BlogPost[]> {
  return [];
}

// --- Default Page ---
export default async function Page() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;
  return <BlogLanding featured={featured ?? null} rest={rest} />;
}
