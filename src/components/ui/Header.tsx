"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="w-full max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Linke Seite: Logo + Navigation */}
        <div className="flex items-center gap-8">
          {/* Nur Logo (ohne Text) */}
          <a
            href="/"
            aria-label="Gesunde Haut leben – Startseite"
            className="inline-flex items-center"
            title="Gesunde Haut leben"
          >
            <Image
              src="/Logo Gesunde Haut leben.png"
              alt="Gesunde Haut leben – Logo"
              width={480}
              height={480}
              priority
              className="h-10 w-auto md:h-12"
              sizes="(min-width: 768px) 480px, 400px"
            />
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-8 text-sm text-slate-700">
            <a href="/blog" className="transition-colors hover:text-slate-900">
              Blog
            </a>
            <a href="/glossar" className="transition-colors hover:text-slate-900">
              Glossar
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
