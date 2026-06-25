"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { Lang, Translations } from "@/lib/i18n/types";
import { translations, defaultLang } from "@/lib/i18n";

const LANGUAGE_STORAGE_KEY = "lang";

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: defaultLang,
  t: translations[defaultLang],
  setLang: () => {},
});

function getInitialLang(): Lang {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "en" || stored === "es") return stored;
  }

  return defaultLang;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
    document.documentElement.lang = newLang === "en" ? "en" : "es";
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
