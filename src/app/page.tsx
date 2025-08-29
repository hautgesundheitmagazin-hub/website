import Image from "next/image";
</CardTitle>
{featured?.excerpt ? (
<CardDescription className="text-[15px]" style={{ color: 'var(--graphite,#243236)' }}>
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
<h3 className="font-highlight text-xl sm:text-2xl" style={{ color: 'var(--graphite,#243236)' }}>
Neu im Magazin
</h3>
<Button variant="ghost" asChild>
<Link href="/blog">Alle Artikel</Link>
</Button>
</div>

{rest.length === 0 ? (
<div className="rounded-xl border bg-white p-6" style={{ borderColor: 'var(--sage,#CDE6DF)' }}>
<p className="text-[15px]" style={{ color: 'var(--graphite,#243236)' }}>
Noch keine Artikel gefunden. Lege welche in deinem CMS an – oder stelle eine API unter
<code className="ml-1">/api/posts</code> bereit.
</p>
</div>
) : (
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
{rest.map((post) => (
<Card key={post.slug} className="overflow-hidden border" style={{ borderColor: 'var(--sage,#CDE6DF)' }}>
{post.cover ? (
<div className="relative h-40">
<Image src={post.cover} alt={post.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
</div>
) : null}
<CardHeader>
<CardTitle
className="font-highlight text-base"
style={{ color: 'var(--graphite,#243236)', fontFamily: 'var(--font-montserrat, Montserrat, system-ui, sans-serif)' }}
>
<Link href={`/blog/${post.slug}`}>{post.title}</Link>
</CardTitle>
{post.excerpt ? (
<CardDescription className="text-[13px]" style={{ color: 'var(--graphite,#243236)' }}>
{post.excerpt}
</CardDescription>
) : null}
</CardHeader>
<CardContent>
<div className="mb-3 text-xs" style={{ color: 'var(--fog,#9AA7AE)' }}>
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
