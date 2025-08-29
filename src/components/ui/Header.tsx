"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="w-full max-w-4xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
        {/* Linker Menüpunkt */}
        <nav className="justify-self-start text-sm text-slate-700">
          <a href="/blog" className="transition-colors hover:text-slate-900">
            Blog
          </a>
        </nav>

        {/* Mittiges, minimal kleineres Logo */}
        <a
          href="/"
          aria-label="Gesunde Haut leben – Startseite"
          className="justify-self-center inline-flex items-center"
          title="Gesunde Haut leben"
        >
          <Image
            src="/Logo Gesunde Haut leben.png"
            alt="Gesunde Haut leben – Logo"
            width={480}
            height={480}
            priority
            className="h-8 w-auto md:h-10"  /* vorher h-10/md:h-12 */
            sizes="(min-width: 768px) 160px, 120px"
          />
        </a>

        {/* Rechter Menüpunkt */}
        <nav className="justify-self-end text-sm text-slate-700">
          <a href="/glossar" className="transition-colors hover:text-slate-900">
            Glossar
          </a>
        </nav>
      </div>
    </header>
  );
}
