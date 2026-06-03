"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function GoogleTranslate() {
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current) return;
    injected.current = true;

    const style = document.createElement("style");
    style.textContent = `
      #google_translate_element .goog-te-gadget { color: #fff !important; }
      #google_translate_element .goog-te-gadget-simple { border: none !important; background: transparent !important; padding: 6px 12px !important; border-radius: 8px !important; }
      #google_translate_element .goog-te-gadget-simple:hover { background: rgba(168,85,247,0.1) !important; }
      #google_translate_element .goog-te-menu-value { color: #fff !important; text-decoration: none !important; font-size: 13px !important; }
      #google_translate_element .goog-te-menu-value:hover { color: #a855f7 !important; }
      #google_translate_element .goog-te-gadget-icon { display: none !important; }
      #google_translate_element img { display: none !important; }
      .light #google_translate_element .goog-te-gadget { color: #374151 !important; }
      .light #google_translate_element .goog-te-menu-value { color: #374151 !important; }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <>
      <div id="google_translate_element" />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
