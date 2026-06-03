"use client";
import Script from "next/script";

export default function GoogleTranslate() {
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
