"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  // Mobile "Mehr"-Menü
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const items = [
    { href: "/blog", label: "Blog" },
    { href: "/glossar", label: "Glossar" },
    { href: "/neurodermitis", label: "Neurodermitis" },
    { href: "/rosacea", label: "Rosacea" },
    { href: "/akne", label: "Akne" },
  ];

 const contact = { href: "mailto:info@hautwissen-kompakt.de", label: "Kontakt" };
  const primary = items.slice(0, 2);
  const more = items.slice(2);

  // Schema.org JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Hautwissen Kompakt",
        "url": "https://www.hautwissen-kompakt.de",
        "logo": "https://www.hautwissen-kompakt.de/hautwissen_kompakt_logo.jpg",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "info@hautwissen-kompakt.de",
          "contactType": "customer service"
        }
      },
      {
        "@type": "Blog",
        "name": "Hautwissen Kompakt Blog",
        "url": "https://www.hautwissen-kompakt.de/blog",
        "publisher": {
          "@type": "Organization",
          "name": "Hautwissen Kompakt"
        }
      }
    ]
  };

  return (
    <header className="w-full text-white">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Obere Leiste */}
      <div className="bg-[#1c8e7e]">
        <div className="mx-auto flex max-w-4xl items-center px-4 py-3">
          <a
            href="/"
            aria-label="Hautwissen Kompakt – Startseite"
            className="inline-flex items-center"
            title="Hautwissen Kompakt - Dein Blog zu Hautgesundheit"
          >
            <Image
              src="/hautwissen_kompakt_logo.jpg"
              alt="Hautwissen Kompakt – Logo"
              width={480}
              height={480}
              priority
              className="h-8 w-auto md:h-10"
              sizes="(min-width: 768px) 300px, 180px"
            />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-[#28A392]">
        <div className="relative mx-auto max-w-4xl px-4">
          <div className="hidden md:flex items-center justify-between py-3">
            <nav aria-label="Hauptnavigation" className="flex items-center gap-6">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold uppercase tracking-wide opacity-95 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href={contact.href}
              className="inline-flex items-center rounded-md border-2 border-white/80 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide opacity-95 transition-[background,opacity] hover:opacity-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              {contact.label}
            </a>
          </div>

          <div className="flex items-center justify-between py-3 md:hidden" ref={menuRef}>
            <nav aria-label="Hauptnavigation (reduziert)" className="flex items-center gap-5">
              {primary.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold uppercase tracking-wide opacity-95 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="relative">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={open}
                aria-controls="mobile-more-menu"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <span className="sr-only">Weitere Menüpunkte öffnen</span>
                <svg width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path
                    d="M3 6h18M3 12h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {open && (
                <div
                  id="mobile-more-menu"
                  role="menu"
                  className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-lg bg-[#1c8e7e] shadow-lg ring-1 ring-black/10"
                >
                  {more.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2 text-sm uppercase tracking-wide hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    key={contact.label}
                    href={contact.href}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 text-sm uppercase tracking-wide hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                  >
                    {contact.label}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
