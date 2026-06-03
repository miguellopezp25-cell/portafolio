"use client";
import { useEffect } from "react";
import { Languages } from "lucide-react";

export default function GoogleTranslate() {
  useEffect(() => {
    const addScript = () => {
      if (document.getElementById("gt_script")) return;
      const script = document.createElement("script");
      script.id = "gt_script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "es",
          includedLanguages: "es,en,fr,de,it,pt,ja,ko,zh-CN",
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    if (!document.getElementById("gt_script")) {
      addScript();
    }
  }, []);

  return (
    <div className="flex items-center">
      <div id="google_translate_element" className="[&_.goog-te-gadget-simple]:!bg-transparent [&_.goog-te-gadget-simple]:!border-none [&_.goog-te-gadget-simple]:!text-sm [&_.goog-te-gadget-simple]:!text-muted-foreground [&_.goog-te-gadget-simple]:!p-0 [&_.goog-te-gadget-simple_img]:!hidden [&_.goog-te-gadget-simple_.goog-te-menu-value]:!text-muted-foreground [&_.goog-te-gadget-simple_.goog-te-menu-value:hover]:!text-purple-400" />
    </div>
  );
}
