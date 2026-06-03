"use client";
import { useState, useRef, useEffect } from "react";
import { Languages, ChevronDown, Check } from "lucide-react";

const languages = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "pt", label: "Português" },
  { code: "it", label: "Italiano" },
  { code: "ja", label: "日本語" },
];

export default function GoogleTranslate() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("es");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const siteUrl = typeof window !== "undefined"
    ? window.location.href
    : "https://mlopezdev.netlify.app";

  function handleSelect(code: string) {
    setCurrent(code);
    setOpen(false);
    if (code === "es") {
      window.location.href = siteUrl;
    } else {
      window.location.href =
        `https://translate.google.com/translate?sl=es&tl=${code}&u=${encodeURIComponent(siteUrl)}`;
    }
  }

  const selected = languages.find((l) => l.code === current);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-muted-foreground hover:text-purple-400 transition-colors text-sm"
      >
        <Languages size={16} />
        <span className="hidden sm:inline">{selected?.label}</span>
        <ChevronDown size={12} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-36 bg-card border border-border rounded-lg shadow-xl z-50 py-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-purple-400 hover:bg-purple-500/5 flex items-center justify-between"
            >
              {lang.label}
              {current === lang.code && <Check size={14} className="text-purple-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
