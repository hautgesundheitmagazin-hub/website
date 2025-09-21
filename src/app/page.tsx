// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import fs from "node:fs/promises";
import path from "node:path";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Diese Page soll NICHT statisch gecacht werden.
export const dynamic = "force-dynamic";
// Wichtig: Node.js-Runtime für fs()
export const runtime = "nodejs";

// --- Lokale Typen ---
type BlogPost = {
  slug: string;
  title: string;
  excerpt?: string;
  cover?: string;
  date: string;
  kind: "blog" | "glossar";
};

type BlogLandingProps = {
  featured: BlogPost | null;
  rest: BlogPost[];
};

// --- Helpers ---
const prettify = (s: string) =>
  s.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

function sortByDateDesc<T extends { date: string }>(posts: T[]) {
  return [...posts].sort((a, b) => {
    const ta = new Date(a.date).getTime();
    const tb = new Date(b.date).getTime();
    return (Number.isFinite(tb) ? tb : 0) - (Number.isFinite(ta) ? ta : 0);
  });
}

// ---- Blog: 6 neueste ----
async function getLatestBlog(): Promise<BlogPost[]> {
  const blogDir = path.join(process.cwd(), "src", "app", "blog");
  const entries = await fs.readdir(blogDir, { withFileTypes: true }).catch(() => []);
  const slugs = entries.filter(e => e.isDirectory()).map(e => e.name);

  const metas = await Promise.all(
    slugs.map(async (slug) => {
      let title = prettify(slug);
      let excerpt = "";
      let date: string | null = null;
      let image: string | undefined;

      try {
        // KEIN variables Prefix – statischer Kontext ist wichtig!
        // @ts-ignore
        const maybeMeta = await import(/* webpackMode: "lazy" */ `./blog/${slug}/meta`).catch(() => null);
        // @ts-ignore
        const mod = maybeMeta ?? (await import(/* webpackMode: "lazy" */ `./blog/${slug}/page`).catch(() => null));

        // @ts-ignore
        const pm = mod?.postMeta ?? {};
        // @ts-ignore
        const md = mod?.metadata ?? {};
        title = pm.title ?? md.title ?? title;
        excerpt = pm.excerpt ?? pm.description ?? md.description ?? "";
        date = pm.date ?? pm.published ?? md?.openGraph?.publishedTime ?? null;

        const ogImages = (md?.openGraph?.images ?? []) as any;
        if (!image) {
          if (pm.image) image = pm.image;
          else if (typeof ogImages === "string") image = ogImages;
          else if (Array.isArray(ogImages) && ogImages.length > 0) {
            const first = ogImages[0];
            image = typeof first === "string" ? first : first?.url;
          }
        }
      } catch {
        // ignore – wir fallen auf Ordner-mtime zurück
      }

      if (!date) {
        try {
          const st = await fs.stat(path.join(blogDir, slug));
          date = st.mtime.toISOString();
        } catch {
          date = new Date(0).toISOString();
        }
      }

      return {
        slug,
        title,
        excerpt,
        date: date!,
        cover: image,
        kind: "blog" as const,
      };
    })
  );

  return sortByDateDesc(metas).slice(0, 6);
}

// ---- Glossar: 3 neueste ----
async function getLatestGlossar(): Promise<BlogPost[]> {
  const glossarDir = path.join(process.cwd(), "src", "app", "glossar");
  const entries = await fs.readdir(glossarDir, { withFileTypes: true }).catch(() => []);
  const slugs = entries.filter(e => e.isDirectory()).map(e => e.name);

  const metas = await Promise.all(
    slugs.map(async (slug) => {
      let title = prettify(slug);
      let excerpt = "";
      let date: string | null = null;
      let image: string | undefined;

      try {
        // KEIN variables Prefix – statischer Kontext ist wichtig!
        // @ts-ignore
        const maybeMeta = await import(/* webpackMode: "lazy" */ `./glossar/${slug}/meta`).catch(() => null);
        // @ts-ignore
        const mod = maybeMeta ?? (await import(/* webpackMode: "lazy" */ `./glossar/${slug}/page`).catch(() => null));

        // @ts-ignore
        const pm = mod?.postMeta ?? {};
        // @ts-ignore
        const md = mod?.metadata ?? {};
        title = pm.title ?? md.title ?? title;
        excerpt = pm.excerpt ?? pm.description ?? md.description ?? "";
        date = pm.date ?? pm.published ?? md?.openGraph?.publishedTime ?? null;

        const ogImages = (md?.openGraph?.images ?? []) as any;
        if (!image) {
          if (pm.image) image = pm.image;
          else if (typeof ogImages === "string") image = ogImages;
          else if (Array.isArray(ogImages) && ogImages.length > 0) {
            const first = ogImages[0];
            image = typeof first === "string" ? first : first?.url;
          }
        }
      } catch {
        // ignore – wir fallen auf Ordner-mtime zurück
      }

      if (!date) {
        try {
          const st = await fs.stat(path.join(glossarDir, slug));
          date = st.mtime.toISOString();
        } catch {
          date = new Date(0).toISOString();
        }
      }

      return {
        slug,
        title,
        excerpt,
        date: date!,
        cover: image,
        kind: "glossar" as const,
      };
    })
  );

  return sortByDateDesc(metas).slice(0, 3);
}

function HeroBanner() {
  return (
    <section className="w-full">
      <div className="w-full max-w-4xl mx:auto px-6 pt-6">
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

// --- UI ---
function BlogGrid({ posts }: { posts: BlogPost[] }) {
  // exakt 9 Slots: 6 Blog + 3 Glossar, fehlende mit Platzhaltern füllen
  const items = posts.slice(0, 9);
  const placeholdersCount = Math.max(0, 9 - items.length);

  const hrefFor = (p: BlogPost) => (p.kind === "glossar" ? `/glossar/${p.slug}` : `/blog/${p.slug}`);

  return (
    <section className="w-full">
      <div className="w-full max-w-4xl mx-auto px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((post) => (
            <Card key={`${post.kind}-${post.slug}`} className="overflow-hidden border" style={{ borderColor: "var(--sage,#CDE6DF)" }}>
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
                  <Link href={hrefFor(post)}>{post.title}</Link>
                </CardTitle>
                {post.excerpt ? (
                  <CardDescription className="text-[13px]" style={{ color: "var(--graphite,#243236)" }}>
                    {post.excerpt}
                  </CardDescription>
                ) : null}
              </CardHeader>

              <CardContent className="flex items-center gap-2">
                <Button asChild size="sm">
                  <Link href={hrefFor(post)}>Lesen</Link>
                </Button>
                <span className="text-xs text-slate-500">
                  {post.kind === "glossar" ? "Glossar" : "Blog"}
                </span>
              </CardContent>
            </Card>
          ))}

          {Array.from({ length: placeholdersCount }).map((_, i) => (
            <Card key={`placeholder-${i}`} className="overflow-hidden border" style={{ borderColor: "var(--sage,#CDE6DF)" }}>
              <div className="relative aspect-[16/9] bg-slate-100" />
              <CardHeader>
                <CardTitle
                  className="font-highlight text-base"
                  style={{
                    color: "var(--graphite,#243236)",
                    fontFamily: "var(--font-montserrat, Montserrat, system-ui, sans-serif)",
                  }}
                >
                  Beitragstitel (Platzhalter)
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
  const all = [featured, ...rest].filter(Boolean) as BlogPost[];
  return (
    <main className="bg-white">
      <HeroBanner />
      <BlogGrid posts={all} />
    </main>
  );
}

// --- Datenbeschaffung ---
async function getPosts(): Promise<BlogPost[]> {
  try {
    const [blog6, glossar3] = await Promise.all([getLatestBlog(), getLatestGlossar()]);
    return [...blog6, ...glossar3];
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
