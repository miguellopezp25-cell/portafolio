"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function GoogleTranslate() {
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    done.current = true;

    const interval = setInterval(() => {
      const el = document.getElementById("google_translate_element");
      if (el && el.childNodes.length > 0) {
        el.childNodes[0].childNodes[0].childNodes[0]?.addEventListener("click", (e) => {
          e.stopPropagation();
        });
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Script id="gt-init" strategy="beforeInteractive">
        {`function googleTranslateElementInit(){
          new google.translate.TranslateElement({
            pageLanguage:"es",
            includedLanguages:"es,en,fr,de,pt,it,ja,ko,zh-CN",
            layout:google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay:false
          },"google_translate_element");
        }`}
      </Script>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <div id="google_translate_element" />
    </>
  );
}
