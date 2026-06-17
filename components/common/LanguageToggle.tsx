"use client";

import { useLanguage } from "./LanguageProvider";
import { Languages } from "lucide-react";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-purple-400 transition-colors"
      aria-label="Toggle language"
    >
      <Languages size={14} />
      <span className="hidden sm:inline">{lang === "es" ? "EN" : "ES"}</span>
      <span className="sm:hidden">{lang === "es" ? "EN" : "ES"}</span>
    </button>
  );
}
