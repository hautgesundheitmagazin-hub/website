// app/(magazin)/BlogLanding.tsx
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  cover?: string;
  date: string;
};

interface Props {
  featured?: Post | null;
  rest: Post[];
}

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return d;
  }
}

export default function BlogLanding({ featured, rest }: Props) {
  return (
    <>
      {/* Highlight-Artikel – volle Breite */}
      <section className="w-full">
        <div className="w-full max-w-4xl mx-auto px-6 py-4">
          {featured ? (
            <Card
              className="relative overflow-hidden border rounded-2xl"
              style={{ borderColor: "var(--sage,#CDE6DF)" }}
            >
              {/* Hero-Bild mit mehr Transparenz für bessere Lesbarkeit */}
              {featured.cover ? (
                <div className="absolute inset-0">
                  <Image
                    src={featured.cover}
                    alt={featured.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-50"
                  />
                </div>
              ) : null}

              {/* Leichte Aufhellung, damit dunkler Text immer gut lesbar bleibt */}
              <div className="absolute inset-0 bg-white/20" />

              <div className="relative p-6 sm:p-10">
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

      {/* Kopfzeile „Neu im Magazin“ – exakt auf gewünschte Breite */}
      <div className="w-full max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <h3 className="font-highlight text-xl sm:text-2xl" style={{ color: "var(--graphite,#243236)" }}>
          Neu im Magazin
        </h3>
        <Button variant="ghost" asChild>
          <Link href="/blog">Alle Artikel</Link>
        </Button>
      </div>

      {/* Letzte 9 Artikel – Raster bleibt, Container auf max-w-4xl */}
      <section className="w-full">
        <div className="w-full max-w-4xl mx-auto px-6 py-12 sm:py-16">
          {(!rest || rest.length === 0) ? (
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
