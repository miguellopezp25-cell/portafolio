"use client";
import Script from "next/script";

export default function GoogleTranslate() {
  return (
    <>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <div id="google_translate_element" />
    </>
  );
}
