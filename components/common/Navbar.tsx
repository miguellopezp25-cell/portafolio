"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";
import GoogleTranslate from "@/components/common/GoogleTranslate";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Mí", href: "/about" },
  { name: "Servicios", href: "/my-services" },
  { name: "Portafolio", href: "/portfolio" },
  { name: "Cotizar", href: "/cotizar" },
  { name: "Juegos", href: "/juegos" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-purple-500">
          MIGUEL<span className="text-foreground/60">.dev</span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-purple-500"
                    : "text-muted-foreground hover:text-purple-400"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <ThemeToggle />
          <div className="flex items-center gap-1">
            <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-md border border-purple-500/20 bg-purple-500/5 text-[10px] font-mono text-purple-400/80">
              <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              IDIOMA
            </div>
            <GoogleTranslate />
          </div>
        </div>
      </div>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border md:hidden z-50">
            <div className="flex flex-col px-6 py-4 gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? "text-purple-500 bg-purple-500/10"
                      : "text-muted-foreground hover:text-purple-400 hover:bg-purple-500/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
