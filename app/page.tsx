"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, MapPin, Mail, Phone, Code, CheckCircle, Building2, Cloud, FolderOpen } from "lucide-react";
import { useLanguage } from "@/components/common/LanguageProvider";
import GoLink from "@/components/common/GoLink";

const stats = [
  { icon: Code, value: "3+", labelKey: "Años experiencia", labelKeyEn: "Years exp." },
  { icon: CheckCircle, value: "30+", labelKey: "APIs REST", labelKeyEn: "REST APIs" },
  { icon: Building2, value: "2", labelKey: "Empresas", labelKeyEn: "Companies" },
  { icon: Cloud, value: "95%+", labelKey: "Cobertura tests", labelKeyEn: "Test coverage" },
  { icon: FolderOpen, value: "6+", labelKey: "Proyectos freelance", labelKeyEn: "Freelance projects" },
];

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <section className="grow flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8 py-20">
        <div className="flex justify-center gap-3">
          <span className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono tracking-wide">
            <Code size={14} className="inline mr-1" />
            {t.hero.badge}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold text-foreground leading-tight">
          {t.hero.name}
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-medium">
          <GoLink text={t.hero.title} /> —{" "}
          <span className="text-purple-400">{t.hero.titleAccent}</span>
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><MapPin size={14} className="text-purple-400" /> {t.hero.location}</span>
          <a href="mailto:Miguel.Lopezp25@gmail.com" className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"><Mail size={14} className="text-purple-400" /> Miguel.Lopezp25@gmail.com</a>
          <a href="tel:523328359296" className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"><Phone size={14} className="text-purple-400" /> +52 33 2835 9296</a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link href="/portfolio">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
              {t.hero.ctaPortfolio}
              <ArrowRight size={16} />
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" className="gap-2 border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
              <Terminal size={16} />
              {t.hero.ctaAbout}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.value} className="px-4 py-4 rounded-xl border border-border bg-card/50 transition-all duration-300 hover:border-purple-500/30 hover:bg-card">
                <Icon size={20} className="text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{lang === "en" ? stat.labelKeyEn : stat.labelKey}</div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a href="https://github.com/miguellopezp25-cell" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/></svg>
miguellopezp25-cell
          </a>
          <a href="https://www.linkedin.com/in/miguel-lopezp25/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            miguel-lopezp25
          </a>
        </div>
      </div>
    </section>
  );
}
