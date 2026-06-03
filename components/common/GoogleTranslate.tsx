"use client";
import { Globe } from "lucide-react";
import Script from "next/script";

export default function GoogleTranslate() {
  return (
    <div className="relative flex items-center gap-1.5 text-sm text-muted-foreground cursor-pointer select-none">
      <Globe size={16} />
      <span>Idioma</span>
      <div className="absolute inset-0 opacity-0 overflow-hidden">
        <div id="google_translate_element" />
      </div>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}
