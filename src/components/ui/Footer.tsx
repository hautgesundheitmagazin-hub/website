export default function Footer() {
  return (
    <footer className="bg-[#28A392] border-t border-white/20 py-8 text-center text-sm text-white">
      <div className="space-x-4">
        <a href="/impressum" className="transition-colors hover:text-white/80">Impressum</a>
        <a href="/agb" className="transition-colors hover:text-white/80">AGB</a>
        <a href="/datenschutz" className="transition-colors hover:text-white/80">Datenschutz</a>
        <a href="/blog" className="transition-colors hover:text-white/80">Blog</a>
        <a href="/sitemap.xml" className="transition-colors hover:text-white/80">Sitemap</a>
      </div>
      <p className="mt-3">© {new Date().getFullYear()} Gesunde Haut leben. Alle Rechte vorbehalten.</p>
    </footer>
  );
}
