"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

// CI-Farben (Fallbacks, falls :root-Variablen noch nicht gesetzt sind)
const COLORS = {
  graphite: "var(--graphite, #243236)",
  fog: "var(--fog, #9AA7AE)",
  sand: "var(--sand, #F5EDE6)",
  teal500: "var(--teal-500, #2FB7A2)",
  teal700: "var(--teal-700, #1F8C7F)",
  sage: "var(--sage, #CDE6DF)",
};

const CTA_GRADIENT = "var(--cta-gradient, linear-gradient(90deg, #2FB7A2 0%, #1F8C7F 100%))";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = typeof window !== "undefined" ? localStorage.getItem("cookie-consent") : "accepted";
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    // Event auslösen → RootLayout hört darauf
    window.dispatchEvent(new Event("cookie-consent-accepted"));
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed bottom-4 left-1/2 z-50 w-[95%] max-w-3xl -translate-x-1/2 rounded-2xl border bg-white shadow-xl"
      style={{ borderColor: COLORS.sage }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5">
        {/* Text */}
        <div className="text-sm md:pr-4" style={{ color: COLORS.graphite }}>
          <p
            id="cookie-title"
            className="font-semibold tracking-tight"
            style={{
              fontFamily: 'Fraunces, serif',
              color: COLORS.graphite,
            }}
          >
            Auch wir benutzen diese Cookies
          </p>
          <p id="cookie-desc" className="mt-1" style={{ color: COLORS.graphite }}>
            Diese Website verwendet Cookies, um dein Erlebnis zu verbessern. Weitere Infos findest du in unserer{" "}
            <a
              href="/datenschutz"
              className="underline underline-offset-2 transition-colors"
              style={{
                textDecorationColor: COLORS.teal700,
                color: COLORS.graphite,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.teal700)}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.graphite)}
            >
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>

        {/* Buttons */}
        <div className="flex shrink-0 items-center gap-2">
          <Button
            onClick={decline}
            variant="outline"
            className="flex items-center gap-1 bg-white transition-colors"
            style={{
              borderColor: COLORS.sage,
              color: COLORS.graphite,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.sand)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
          >
            <X className="h-4 w-4" />
            Ablehnen
          </Button>

          <Button
            onClick={accept}
            className="flex items-center gap-1 text-white shadow-sm transition-all hover:brightness-95"
            style={{
              // CI-Gradient
              backgroundImage: CTA_GRADIENT,
              border: "none",
            }}
          >
            <Check className="h-4 w-4" />
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
}
