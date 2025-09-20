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
      <p className="mt-3">© {new Date().getFullYear()} Hautwissen Kompakt. Alle Rechte vorbehalten.</p>
      <p className="mt-2 text-xs opacity-70 max-w-2xl mx-auto">
        Hinweis / Disclaimer: Die Inhalte auf diesem Blog dienen ausschließlich allgemeinen
        Informationszwecken und spiegeln persönliche Erfahrungen und Recherchen wider. Sie stellen
        keine medizinische Beratung dar und ersetzen keine professionelle Diagnose oder Behandlung
        durch Ärztinnen und Ärzte. Bei gesundheitlichen Fragen oder Hautproblemen solltest du dich
        stets an eine qualifizierte Fachperson wenden.
      </p>
    </footer>
  );
}
