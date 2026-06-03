"use client";
import { useEffect } from "react";
import Script from "next/script";

function isLight() {
  return typeof document !== "undefined" && document.documentElement.classList.contains("light");
}

function styleWidget() {
  const root = document.getElementById("google_translate_element");
  if (!root) return false;

  const gadget = root.querySelector(".goog-te-gadget") as HTMLElement | null;
  if (!gadget) return false;

  const textColor = isLight() ? "#374151" : "#fff";

  root.style.setProperty("display", "inline-flex", "important");
  root.style.setProperty("align-items", "center", "important");

  gadget.style.setProperty("display", "inline-flex", "important");
  gadget.style.setProperty("align-items", "center", "important");

  const simple = gadget.querySelector(".goog-te-gadget-simple") as HTMLElement | null;
  if (simple) {
    simple.style.setProperty("display", "inline-flex", "important");
    simple.style.setProperty("align-items", "center", "important");
    simple.style.setProperty("gap", "4px", "important");
    simple.style.setProperty("padding", "6px 12px", "important");
    simple.style.setProperty("border", "1px solid rgba(168,85,247,0.3)", "important");
    simple.style.setProperty("border-radius", "8px", "important");
    simple.style.setProperty("background", "rgba(168,85,247,0.08)", "important");
    simple.style.setProperty("cursor", "pointer", "important");
    simple.style.setProperty("transition", "all 0.2s", "important");
    simple.style.setProperty("white-space", "nowrap", "important");

    simple.onmouseenter = () => {
      simple.style.setProperty("border-color", "rgba(168,85,247,0.6)", "important");
      simple.style.setProperty("background", "rgba(168,85,247,0.15)", "important");
    };
    simple.onmouseleave = () => {
      simple.style.setProperty("border-color", "rgba(168,85,247,0.3)", "important");
      simple.style.setProperty("background", "rgba(168,85,247,0.08)", "important");
    };

    const text = simple.querySelector(".goog-te-menu-value") as HTMLElement | null;
    if (text) {
      text.style.setProperty("color", textColor, "important");
      text.style.setProperty("text-decoration", "none", "important");
      text.style.setProperty("font-size", "13px", "important");
      text.style.setProperty("font-weight", "500", "important");
    }

    simple.querySelectorAll("img").forEach((img) => img.remove());

    simple.querySelectorAll("span").forEach((s) => {
      if (s.textContent === "\u200B" || (s.textContent?.trim() === "" && !s.classList.contains("goog-te-menu-value"))) {
        s.style.setProperty("display", "none", "important");
      }
    });
  }

  return true;
}

export default function GoogleTranslate() {
  useEffect(() => {
    const el = document.getElementById("google_translate_element");
    const observer = new MutationObserver(() => {
      if (styleWidget()) observer.disconnect();
    });

    if (el) observer.observe(el, { childList: true, subtree: true });

    const interval = setInterval(() => {
      if (styleWidget()) clearInterval(interval);
    }, 200);

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
