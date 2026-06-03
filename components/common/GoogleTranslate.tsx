"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function GoogleTranslate() {
  const styled = useRef(false);

  useEffect(() => {
    if (styled.current) return;
    const css = `
      #google_translate_element .goog-te-gadget-simple {
        display: inline-flex !important; align-items: center !important; gap: 4px !important;
        padding: 6px 12px !important; border: 1px solid rgba(168,85,247,0.3) !important;
        border-radius: 8px !important; background: rgba(168,85,247,0.08) !important;
        cursor: pointer !important; transition: all 0.2s !important; white-space: nowrap !important;
      }
      #google_translate_element .goog-te-gadget-simple:hover {
        border-color: rgba(168,85,247,0.6) !important;
        background: rgba(168,85,247,0.15) !important;
      }
      #google_translate_element .goog-te-menu-value {
        color: #fff !important; font: 500 13px/1 sans-serif !important; text-decoration: none !important;
      }
      .light #google_translate_element .goog-te-menu-value { color: #374151 !important; }
      #google_translate_element img { display: none !important; }
    `;
    const interval = setInterval(() => {
      if (document.querySelector("#google_translate_element .goog-te-gadget")) {
        const s = document.createElement("style");
        s.textContent = css;
        document.head.appendChild(s);
        styled.current = true;
        clearInterval(interval);
      }
    }, 100);
    setTimeout(() => clearInterval(interval), 6000);
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
