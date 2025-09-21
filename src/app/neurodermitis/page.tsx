// app/page.tsx (Next.js 13+ mit App Router)
// oder pages/index.tsx (bei älteren Projekten)

"use client"; // falls du den App Router verwendest und clientseitig rendern willst

import React from "react";

export default function ComingSoonPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-3xl font-bold mb-4">
        Hier entsteht gerade etwas wunderbares :)
      </h1>
      <p className="text-lg mb-8">Komm bald wieder</p>

      <p className="text-lg font-medium mb-4">
        In der Zwischenzeit hier unser neuester Report:
      </p>

      {/* Brevo Embed */}
      <div
        className="w-full max-w-xl"
        dangerouslySetInnerHTML={{
          __html: `
          <!-- Begin Brevo Form -->
          <style>
            @font-face {
              font-display: block;
              font-family: Roboto;
              src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff");
            }
            @font-face {
              font-display: fallback;
              font-family: Roboto;
              font-weight: 600;
              src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff");
            }
            @font-face {
              font-display: fallback;
              font-family: Roboto;
              font-weight: 700;
              src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff");
            }
            #sib-container input::placeholder {
              text-align: left;
              font-family: Helvetica, sans-serif;
              color: #c0ccda;
            }
            #sib-container a {
              text-decoration: underline;
              color: #2BB2FC;
            }
          </style>
          <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
          <div class="sib-form" style="text-align: center; background-color: #EFF2F7;">
            <div id="sib-form-container" class="sib-form-container">
              <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:#fff; max-width:540px; border-radius:3px; border:1px solid #C0CCD9;">
                <!-- Hier dein Brevo Formular -->
                <form id="sib-form" method="POST" action="https://58a8e982.sibforms.com/serve/MUIFAM6AurHq03QEL-OAw6zYgw-Kxf5qhjK6OTFUFXRNTHxkpmLA4zD6fMcFgwYkzuEuZeR21235aJ6qTBg4SoTt57dyRrBvECSWxNMsXx0RZwio5-Cij443EEVjMQnLOCYo7Xyuv1mvLgZRUqHidNHg4ysq9qHb2x1yLAsEKJFs3ONd5o0vAxY-CDezgZbVVNFPhm8yeV9YECA-">
                  <!-- ... dein ganzer Brevo HTML Code ... -->
                </form>
              </div>
            </div>
          </div>
          <!-- End Brevo Form -->
        `,
        }}
      />
    </main>
  );
}
