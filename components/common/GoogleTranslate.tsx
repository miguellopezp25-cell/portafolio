"use client";
import { useEffect } from "react";
import Script from "next/script";

function applyStyle() {
  const el = document.querySelector(
    "#google_translate_element .goog-te-gadget-simple .goog-te-menu-value"
  ) as HTMLElement | null;
  if (el) {
    el.style.setProperty("color", "#fff", "important");
    return true;
  }
  return false;
}

export default function GoogleTranslate() {
  useEffect(() => {
    const el = document.getElementById("google_translate_element");
    if (!el) return;

    const observer = new MutationObserver(() => {
      if (applyStyle()) observer.disconnect();
    });

    observer.observe(el, { childList: true, subtree: true });

    const interval = setInterval(() => {
      if (applyStyle()) clearInterval(interval);
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
      observer.disconnect();
    }, 8000);
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
