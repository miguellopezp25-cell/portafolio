"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function GoogleTranslate() {
  useEffect(() => {
    const t = setTimeout(() => {
      const el = document.querySelector(".goog-te-menu-value") as HTMLElement | null;
      if (el) {
        const isLight = document.documentElement.classList.contains("light");
        el.style.setProperty("color", isLight ? "#374151" : "#fff", "important");
      }
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-purple-500/30 bg-purple-500/[0.08] px-3 py-1.5 cursor-pointer transition-all hover:border-purple-500/60 hover:bg-purple-500/[0.15]">
      <div id="google_translate_element" />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}
