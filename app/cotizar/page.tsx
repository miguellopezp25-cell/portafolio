"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Calculator, DollarSign, Info } from "lucide-react"

type ProjectType = "landing" | "institucional" | "blog" | "ecommerce" | "saas" | "dashboard"
type AddonKey =
  | "panel_admin" | "auth" | "payments" | "newsletter"
  | "multilenguaje" | "blog_integrado" | "diseno_personalizado"
  | "animaciones" | "copywriting" | "seo_avanzado"
  | "dominio" | "hosting_basico" | "hosting_premium" | "ssl" | "email_profesional"
  | "mantenimiento_basico" | "mantenimiento_premium"
  | "analytics" | "api_rest"

interface Addon {
  key: AddonKey
  label: string
  desc: string
  group: "funcionalidad" | "diseno_contenido" | "infraestructura" | "postlanzamiento"
  price: number
  recurring: boolean
}

const projectTypes: {
  value: ProjectType
  label: string
  desc: string
  ideal: string
  pages: number
  price: number
  features: string[]
}[] = [
  {
    value: "landing",
    label: "Landing Page",
    desc: "Página única para campañas o lanzamientos",
    ideal: "Emprendedores, productos digitales, eventos",
    pages: 1,
    price: 3500,
    features: [
      "1 página con diseño responsivo",
      "Formulario de contacto",
      "Optimización de velocidad básica",
    ],
  },
  {
    value: "institucional",
    label: "Sitio Institucional",
    desc: "Presencia web profesional con varias secciones",
    ideal: "Negocios locales, restaurantes, consultorios",
    pages: 5,
    price: 8500,
    features: [
      "Hasta 5 páginas",
      "Galería de imágenes / portafolio",
      "Formulario de contacto avanzado",
      "Mapa interactivo (Google Maps)",
    ],
  },
  {
    value: "blog",
    label: "Blog / Magazine",
    desc: "Plataforma de contenido con CMS",
    ideal: "Creadores de contenido, medios, educadores",
    pages: 6,
    price: 12000,
    features: [
      "CMS headless o WordPress headless",
      "Categorías, etiquetas y búsqueda",
      "Editor rich-text con imágenes",
      "Comentarios moderados",
    ],
  },
  {
    value: "ecommerce",
    label: "E-commerce",
    desc: "Tienda en línea completa con carrito y pagos",
    ideal: "Tiendas físicas, marcas, dropshipping",
    pages: 10,
    price: 35000,
    features: [
      "Catálogo de productos ilimitado",
      "Carrito de compras con Ajax",
      "Pasarela de pago (Stripe / PayPal)",
      "Panel de administración de pedidos",
      "Notificaciones por correo",
    ],
  },
  {
    value: "saas",
    label: "SaaS / Web App",
    desc: "Aplicación web con suscripciones y dashboard",
    ideal: "Startups, herramientas digitales, plataformas",
    pages: 8,
    price: 65000,
    features: [
      "Autenticación de usuarios (registro/login)",
      "Panel de usuario con métricas",
      "Sistema de suscripciones (Stripe)",
      "Base de datos PostgreSQL",
      "API RESTful documentada",
    ],
  },
  {
    value: "dashboard",
    label: "Dashboard Administrativo",
    desc: "Panel interno con reportes y gestión de datos",
    ideal: "Empresas, equipos internos, logística",
    pages: 6,
    price: 55000,
    features: [
      "Autenticación con roles (admin/editor/viewer)",
      "Tablero con gráficas y reportes",
      "CRUD completo de entidades",
      "Exportación a CSV/PDF",
      "Base de datos PostgreSQL",
    ],
  },
]

const addons: Addon[] = [
  // Funcionalidad
  { key: "panel_admin", label: "Panel Administrativo", desc: "CMS para gestionar contenido sin código", group: "funcionalidad", price: 18000, recurring: false },
  { key: "auth", label: "Autenticación de Usuarios", desc: "Registro, login, recuperación de contraseña y 2FA", group: "funcionalidad", price: 8000, recurring: false },
  { key: "payments", label: "Pasarela de Pago", desc: "Stripe, PayPal o Mercado Pago para cobrar", group: "funcionalidad", price: 10000, recurring: false },
  { key: "newsletter", label: "Newsletter / Email Marketing", desc: "Suscripción por correo y envío de campañas", group: "funcionalidad", price: 5000, recurring: false },
  { key: "multilenguaje", label: "Multilenguaje (i18n)", desc: "Soporte para 2+ idiomas con selector", group: "funcionalidad", price: 6000, recurring: false },
  { key: "blog_integrado", label: "Blog Integrado", desc: "Sección de blog con CMS y editor rich-text", group: "funcionalidad", price: 8000, recurring: false },
  { key: "api_rest", label: "API REST Personalizada", desc: "Endpoints documentados para integraciones externas", group: "funcionalidad", price: 12000, recurring: false },
  // Diseño y Contenido
  { key: "diseno_personalizado", label: "Diseño UI/UX Personalizado", desc: "Diseño desde cero en Figma, no plantilla", group: "diseno_contenido", price: 8000, recurring: false },
  { key: "animaciones", label: "Animaciones y Transiciones", desc: "Microinteracciones, scroll animado, parallax", group: "diseno_contenido", price: 4000, recurring: false },
  { key: "copywriting", label: "Copywriting Profesional", desc: "Redacción de textos persuasivos y SEO", group: "diseno_contenido", price: 3000, recurring: false },
  { key: "seo_avanzado", label: "SEO Avanzado", desc: "Auditoría técnica, schema markup, sitemap, métricas", group: "diseno_contenido", price: 5000, recurring: false },
  // Infraestructura
  { key: "dominio", label: "Dominio .com (.mx .net)", desc: "Registro por 1 año con configuración DNS", group: "infraestructura", price: 400, recurring: true },
  { key: "hosting_basico", label: "Hosting Básico", desc: "Hosting compartido, 10GB SSD, 1 sitio web", group: "infraestructura", price: 2000, recurring: true },
  { key: "hosting_premium", label: "Hosting Premium", desc: "VPS optimizado, CDN, backups semanales, SSL", group: "infraestructura", price: 4000, recurring: true },
  { key: "ssl", label: "Certificado SSL", desc: "HTTPS con Let's Encrypt o SSL comercial", group: "infraestructura", price: 0, recurring: false },
  { key: "email_profesional", label: "Correo Profesional", desc: "2 cuentas de correo con tu dominio", group: "infraestructura", price: 1200, recurring: true },
  // Post-lanzamiento
  { key: "analytics", label: "Analytics y Tracking", desc: "Google Analytics 4, eventos personalizados, dashboard", group: "postlanzamiento", price: 2500, recurring: false },
  { key: "mantenimiento_basico", label: "Mantenimiento Básico (3 meses)", desc: "Actualizaciones de seguridad, backups, uptime monitoring", group: "postlanzamiento", price: 3500, recurring: false },
  { key: "mantenimiento_premium", label: "Mantenimiento Premium (6 meses)", desc: "Todo lo básico + contenido nuevo, soporte prioritario 24/7", group: "postlanzamiento", price: 8000, recurring: false },
]

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "523328359296"

const addonGroups: { key: string; label: string }[] = [
  { key: "funcionalidad", label: "Funcionalidad" },
  { key: "diseno_contenido", label: "Diseño y Contenido" },
  { key: "infraestructura", label: "Infraestructura" },
  { key: "postlanzamiento", label: "Post-lanzamiento" },
]

export default function CotizarPage() {
  const [projectType, setProjectType] = useState<ProjectType | null>(null)
  const [extraPages, setExtraPages] = useState(0)
  const [selectedAddons, setSelectedAddons] = useState<Set<AddonKey>>(new Set())

  function toggleAddon(key: AddonKey) {
    setSelectedAddons((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const project = projectTypes.find((p) => p.value === projectType)

  const addonTotal = addons.reduce((sum, a) => {
    if (selectedAddons.has(a.key)) return sum + a.price
    return sum
  }, 0)

  const extraPagesTotal = project ? Math.max(0, extraPages) * 500 : 0

  const total = project
    ? project.price + addonTotal + extraPagesTotal
    : 0

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold text-foreground">Cotizador Web</h1>
        <p className="text-muted-foreground">
          Selecciona el tipo de proyecto y los servicios adicionales para obtener un presupuesto detallado.
        </p>
      </div>

      {/* Tipo de proyecto */}
      <div className="space-y-4">
        <h2 className="text-sm font-medium text-foreground">1. Elige el tipo de proyecto</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectTypes.map((pt) => {
            const isSelected = projectType === pt.value
            return (
              <button
                key={pt.value}
                type="button"
                onClick={() => setProjectType(pt.value)}
                className={`text-left rounded-xl border-2 px-5 py-4 transition-all ${
                  isSelected
                    ? "border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-900/20"
                    : "border-border bg-card hover:border-purple-500/30 hover:shadow-md"
                }`}
              >
                <span className={`block text-base font-semibold ${isSelected ? "text-purple-400" : "text-foreground"}`}>
                  {pt.label}
                </span>
                <span className="block text-xs text-muted-foreground mt-1 leading-relaxed">{pt.desc}</span>
                <span className="block text-[11px] text-muted-foreground/70 mt-1">{pt.ideal}</span>
                <ul className="mt-3 space-y-1">
                  {pt.features.map((f) => (
                    <li key={f} className="text-[11px] text-muted-foreground/80 flex items-start gap-1">
                      <Check size={10} className="text-purple-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="block text-lg font-bold text-purple-400 mt-3">
                  ${pt.price.toLocaleString()} MX
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {project && (
        <>
          {/* Páginas extra */}
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-foreground">2. Páginas / secciones adicionales</h2>
            <p className="text-xs text-muted-foreground">
              {project.pages} páginas incluidas en <strong>{project.label}</strong>. Páginas extra: <strong>$500 MXN</strong> c/u.
            </p>
            <input
              type="number"
              min={0}
              value={extraPages}
              onChange={(e) => setExtraPages(Math.max(0, Number(e.target.value)))}
              className="w-32 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            />
          </div>

          {/* Addons */}
          <div className="space-y-6">
            <h2 className="text-sm font-medium text-foreground">3. Servicios adicionales</h2>
            {addonGroups.map((group) => (
              <div key={group.key} className="space-y-3">
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{group.label}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {addons
                    .filter((a) => a.group === group.key)
                    .map((addon) => {
                      const isSelected = selectedAddons.has(addon.key)
                      return (
                        <button
                          key={addon.key}
                          type="button"
                          onClick={() => toggleAddon(addon.key)}
                          className={`text-left rounded-xl border px-4 py-3 transition-all ${
                            isSelected
                              ? "border-purple-500/50 bg-purple-500/10"
                              : "border-border bg-card hover:border-purple-500/30"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className={`text-sm font-medium ${isSelected ? "text-purple-400" : "text-foreground"}`}>
                              {addon.label}
                            </span>
                            <span className={`text-xs font-medium ${isSelected ? "text-purple-400" : "text-muted-foreground"}`}>
                              +${addon.price.toLocaleString()}{addon.recurring ? "/año" : ""}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{addon.desc}</p>
                        </button>
                      )
                    })}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Resumen */}
      {project && (
        <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-6 space-y-5">
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <DollarSign size={18} className="text-purple-400" />
            Resumen de cotización
          </h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{project.label} ({project.pages} páginas)</span>
              <span className="text-foreground font-medium">${project.price.toLocaleString()} MXN</span>
            </div>
            {extraPages > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">{extraPages} página(s) extra</span>
                <span className="text-foreground font-medium">${extraPagesTotal.toLocaleString()} MXN</span>
              </div>
            )}
            {addonTotal > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Servicios adicionales ({selectedAddons.size})</span>
                <span className="text-foreground font-medium">${addonTotal.toLocaleString()} MXN</span>
              </div>
            )}
            <div className="border-t border-purple-500/20 pt-2 flex justify-between text-base">
              <span className="font-bold text-foreground">Total estimado</span>
              <span className="font-bold text-purple-400">${total.toLocaleString()} MXN</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 space-y-2 text-xs text-muted-foreground">
            <p className="flex items-start gap-1.5">
              <Info size={12} className="text-purple-400 mt-0.5 shrink-0" />
              Los precios son en pesos mexicanos (MXN) e incluyen impuestos.
            </p>
            <p className="flex items-start gap-1.5">
              <Info size={12} className="text-purple-400 mt-0.5 shrink-0" />
              El tiempo de entrega estimado es de 2 a 8 semanas dependiendo de la complejidad.
            </p>
            <p className="flex items-start gap-1.5">
              <Info size={12} className="text-purple-400 mt-0.5 shrink-0" />
              Incluye 2 rondas de revisión y cambios. Revisiones adicionales tienen costo extra.
            </p>
          </div>

          <Button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white gap-2"
            onClick={() => {
              const project = projectTypes.find((p) => p.value === projectType)
              if (!project) return
              const addonList = addons
                .filter((a) => selectedAddons.has(a.key))
                .map((a) => `• ${a.label}: +$${a.price.toLocaleString()} MXN`)
                .join("\n")
              const text = `*Solicitud de Cotización - Portafolio*

*Tipo de Proyecto:* ${project.label}
*Precio Base:* $${project.price.toLocaleString()} MXN
*Páginas Extra:* ${extraPages} ($${extraPagesTotal.toLocaleString()} MXN)
${addonList ? `*Servicios Adicionales:*\n${addonList}` : ""}
*Total Estimado:* $${total.toLocaleString()} MXN`
              const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
              window.open(url, "_blank")
            }}
          >
            <Calculator size={16} />
            Solicitar cotización formal
          </Button>
        </div>
      )}
    </section>
  )
}
