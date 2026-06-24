"use client"

import { CheckCircle2, Clock, ArrowUpCircle, Wrench, AlertCircle, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/common/LanguageProvider"

interface TodoItem {
  text: string
  priority: "high" | "medium" | "low"
}

const todos: Record<string, { items: TodoItem[]; icon: typeof CheckCircle2; color: string; bg: string; border: string }> = {
  done: {
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    items: [
      { text: "Home, About, Portfolio, Services, Cotizar, Contacto, 404, Loading", priority: "high" },
      { text: "Navbar, Footer, FloatingOrbs, ThemeToggle, LanguageToggle, UI (Button, Card, Badge)", priority: "high" },
      { text: "i18n Español/Inglés con typescript tipado", priority: "high" },
      { text: "Modo oscuro/claro con persistencia en localStorage", priority: "high" },
      { text: "Sitemap, robots.txt, metadata en layout raíz", priority: "medium" },
      { text: "Cotizador interactivo con envío a WhatsApp", priority: "medium" },
      { text: "Formulario de contacto vía WhatsApp", priority: "medium" },
      { text: "Portafolio con 9 proyectos y tags", priority: "medium" },
      { text: "Animaciones (orbs, fade-in, bordes gradiente)", priority: "low" },

      { text: "Metadata por página (SEO: titles, OG tags)", priority: "high" },
      { text: "Error boundary global (error.tsx)", priority: "high" },
      { text: "Open Graph image + Twitter Card", priority: "high" },
      { text: "JSON-LD structured data (Person + WebSite schema)", priority: "high" },
      { text: "Sitemap actualizado con /roadmap", priority: "high" },
    ],
  },
  inProgress: {
    icon: Clock,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    items: [
      { text: "Asistente IA con Claude (carrera/roadmap) — recién agregado", priority: "high" },
    ],
  },
  pending: {
    icon: ArrowUpCircle,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    items: [
      { text: "Persistencia de idioma en localStorage", priority: "medium" },
      { text: "Skip-to-content link (accesibilidad teclado)", priority: "medium" },
      { text: "Honeypot o CAPTCHA en formulario de contacto", priority: "medium" },
    ],
  },
  improve: {
    icon: Wrench,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    items: [
      { text: "Convertir imágenes PNG a WebP/AVIF para rendimiento", priority: "medium" },
      { text: "Analíticas (Plausible/Umami o Vercel Analytics)", priority: "medium" },
      { text: "Blog o artículos técnicos", priority: "medium" },
      { text: "Páginas de detalle de proyectos (case studies)", priority: "medium" },
      { text: "Dockerfile para contenerización", priority: "low" },
      { text: "CI pipeline (GitHub Actions: lint, type-check, build)", priority: "low" },
      { text: "PWA (manifest.json + service worker)", priority: "low" },
      { text: "Breadcrumbs / Back-to-top button", priority: "low" },
      { text: "Focus trapping en menú móvil (accesibilidad)", priority: "low" },
    ],
  },
}

const sectionMeta: Record<string, { label: string; desc: string }> = {
  done: { label: "Hecho", desc: "Funcionalidades ya implementadas y en producción" },
  inProgress: { label: "En Progreso", desc: "Lo que se está trabajando actualmente" },
  pending: { label: "Pendiente", desc: "Por hacer — prioridad media-alta" },
  improve: { label: "Mejoras", desc: "Optimizaciones y features deseables" },
}

const priorityBadge: Record<string, { label: string; class: string }> = {
  high: { label: "Alta", class: "bg-red-500/15 text-red-400 border-red-500/30" },
  medium: { label: "Media", class: "bg-amber-500/15 text-amber-400 border-amber-500/30" },
  low: { label: "Baja", class: "bg-slate-500/15 text-slate-400 border-slate-500/30" },
}

export default function RoadmapPage() {
  const { t } = useLanguage()

  const totalDone = todos.done.items.length
  const totalAll = Object.values(todos).reduce((sum, s) => sum + s.items.length, 0)
  const progress = Math.round((totalDone / totalAll) * 100)

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono">
          <Sparkles size={12} />
          {t.nav.roadmap} · {progress}% completo
        </div>
        <h1 className="text-4xl font-semibold text-foreground">Roadmap del Portafolio</h1>
        <p className="text-muted-foreground">
          Progreso general del proyecto: {totalDone} de {totalAll} tareas completadas.
        </p>
      </div>

      <div className="w-full bg-card rounded-full h-3 overflow-hidden border border-border">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-emerald-500 rounded-full transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(todos).map(([key, section]) => {
          const meta = sectionMeta[key]
          const Icon = section.icon
          return (
            <div
              key={key}
              className={`rounded-xl border ${section.border} ${section.bg} overflow-hidden`}
            >
              <div className={`px-5 py-4 border-b ${section.border} flex items-center gap-3`}>
                <Icon size={18} className={section.color} />
                <div>
                  <h2 className="font-semibold text-foreground text-sm">{meta.label}</h2>
                  <p className="text-xs text-muted-foreground">{meta.desc}</p>
                </div>
                <span className={`ml-auto text-xs font-medium px-2 py-0.5 rounded-full border ${section.border} ${section.color}`}>
                  {section.items.length}
                </span>
              </div>
              <div className="divide-y divide-border/50">
                {section.items.map((item) => {
                  const badge = priorityBadge[item.priority]
                  return (
                    <div key={item.text} className="px-5 py-3 flex items-start gap-3">
                      {key === "done" ? (
                        <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                      ) : (
                        <AlertCircle size={14} className={`${section.color} mt-0.5 shrink-0`} />
                      )}
                      <p className="text-sm text-foreground/90 leading-relaxed flex-1">{item.text}</p>
                      <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full border shrink-0 mt-0.5 ${badge.class}`}>
                        {badge.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
