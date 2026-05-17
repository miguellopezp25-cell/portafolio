"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { fetchQuote } from "@/lib/api"
import type { ProjectType, APIType } from "@/lib/api"
import { Calculator, Check, X, Loader2, DollarSign } from "lucide-react"

type BoolKey = "interactive" | "panel_admin" | "payments" | "with_domain" | "with_server" | "seo" | "copywriting" | "responsive_premium" | "maintenance" | "deployment"

const projectTypes: { value: ProjectType; label: string; desc: string; price: number; includedPages: number }[] = [
  { value: "Visual Basic", label: "Visual Basic", desc: "Sitio sencillo, pocas páginas", price: 5000, includedPages: 3 },
  { value: "Visual Professional", label: "Visual Professional", desc: "Sitio profesional con diseño personalizado", price: 12000, includedPages: 6 },
  { value: "Ecommerce", label: "Ecommerce", desc: "Tienda en línea con carrito y pagos", price: 25000, includedPages: 10 },
  { value: "Dashboard", label: "Dashboard", desc: "Panel administrativo con datos dinámicos", price: 30000, includedPages: 8 },
]

const apiOptions: { value: APIType; label: string; price: number }[] = [
  { value: "OpenAI", label: "OpenAI", price: 4000 },
  { value: "WhatsApp", label: "WhatsApp", price: 3500 },
  { value: "Telegram", label: "Telegram", price: 1500 },
  { value: "Google Maps", label: "Google Maps", price: 1500 },
  { value: "Stripe", label: "Stripe", price: 5000 },
]

const toggles: { key: BoolKey; label: string; group: string; price: number }[] = [
  // Funcionalidad
  { key: "interactive", label: "Interactividad", group: "Funcionalidad", price: 1500 },
  { key: "panel_admin", label: "Panel Administrativo", group: "Funcionalidad", price: 15000 },
  { key: "payments", label: "Pagos", group: "Funcionalidad", price: 5000 },
  // Contenido y Marketing
  { key: "seo", label: "SEO", group: "Marketing", price: 2000 },
  { key: "copywriting", label: "Copywriting", group: "Marketing", price: 1500 },
  { key: "responsive_premium", label: "Responsive Premium", group: "Diseño", price: 2000 },
  // Infraestructura
  { key: "with_domain", label: "Dominio", group: "Infraestructura", price: 500 },
  { key: "with_server", label: "Servidor", group: "Infraestructura", price: 2000 },
  { key: "maintenance", label: "Mantenimiento", group: "Infraestructura", price: 2000 },
  { key: "deployment", label: "Despliegue", group: "Infraestructura", price: 2000 },
]

const breakdownLabels: Record<string, string> = {
  type_of_project: "Tipo de proyecto",
  pages_or_modules: "Páginas / Módulos",
  interactive: "Interactividad",
  panel_admin: "Panel Administrativo",
  payments: "Pagos",
  with_domain: "Dominio",
  with_server: "Servidor",
  seo: "SEO",
  copywriting: "Copywriting",
  responsive_premium: "Responsive Premium",
  maintenance: "Mantenimiento",
  deployment: "Despliegue",
  apis: "APIs",
}

const toggleGroups = [...new Set(toggles.map((t) => t.group))]

export default function CotizarPage() {
  const [form, setForm] = useState({
    type_of_project: "Visual Basic" as ProjectType,
    pages_or_modules: 0,
    interactive: false,
    panel_admin: false,
    payments: false,
    with_domain: false,
    with_server: false,
    seo: false,
    copywriting: false,
    responsive_premium: false,
    maintenance: false,
    deployment: false,
    apis: [] as APIType[],
  })
  const [result, setResult] = useState<{
    breakdown: Record<string, number>
    estimated_cost: number
    currency: string
    notes?: Record<string, string>
  } | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    setResult(null)
    try {
      const data = await fetchQuote(form)
      setResult(data)
    } catch {
      setError("Error al calcular cotización. Verifica que el servidor esté corriendo.")
    } finally {
      setLoading(false)
    }
  }

  function toggleBool(key: BoolKey) {
    setForm((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  function toggleApi(api: APIType) {
    setForm((prev) => ({
      ...prev,
      apis: prev.apis.includes(api)
        ? prev.apis.filter((a) => a !== api)
        : [...prev.apis, api],
    }))
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold text-foreground">Cotizador</h1>
        <p className="text-muted-foreground">
          Calcula el costo estimado de tu proyecto web.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Tipo de proyecto */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Tipo de proyecto</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projectTypes.map((pt) => (
              <button
                key={pt.value}
                type="button"
                onClick={() => setForm({ ...form, type_of_project: pt.value })}
                className={`text-left rounded-xl border px-4 py-3 transition-all ${
                  form.type_of_project === pt.value
                    ? "border-purple-500/50 bg-purple-500/10 text-purple-400"
                    : "border-border bg-card text-muted-foreground hover:border-purple-500/30"
                }`}
              >
                <span className="block text-sm font-medium">{pt.label}</span>
                <span className="block text-xs text-muted-foreground mt-0.5">{pt.desc}</span>
                <span className="block text-[11px] text-muted-foreground/70 mt-0.5">{pt.includedPages} páginas incluidas</span>
                <span className="block text-xs text-purple-400 mt-1 font-medium">$ {pt.price.toLocaleString()}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Páginas */}
        <div className="space-y-2">
          <label htmlFor="pages" className="text-sm font-medium text-foreground">
            Número de páginas / módulos
          </label>
          <input
            id="pages"
            type="number"
            min={0}
            value={form.pages_or_modules}
            onChange={(e) =>
              setForm({ ...form, pages_or_modules: Math.max(0, Number(e.target.value)) })
            }
            className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
          />
          {(() => {
            const pt = projectTypes.find(p => p.value === form.type_of_project)
            const included = pt?.includedPages ?? 0
            const extra = Math.max(0, form.pages_or_modules - included)
            return (
              <p className="text-xs text-muted-foreground">
                {included} incluidas en {pt?.label}.{extra > 0 ? ` ${extra} extra${extra > 1 ? 's' : ''} a $500 c/u.` : ''}
              </p>
            )
          })()}
        </div>

        {/* Toggles agrupados */}
        {toggleGroups.map((group) => (
          <div key={group} className="space-y-3">
            <p className="text-sm font-medium text-foreground">{group}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {toggles
                .filter((t) => t.group === group)
                .map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => toggleBool(t.key)}
                    className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                      form[t.key]
                        ? "border-purple-500/50 bg-purple-500/10 text-purple-400"
                        : "border-border bg-card text-muted-foreground hover:border-purple-500/30"
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <span>{t.label}</span>
                      <span className="text-purple-400 text-xs">+${t.price.toLocaleString()}</span>
                    </span>
                    {form[t.key] ? <Check size={16} /> : <X size={16} />}
                  </button>
                ))}
            </div>
          </div>
        ))}

        {/* APIs */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">APIs</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {apiOptions.map((api) => (
              <button
                key={api.value}
                type="button"
                onClick={() => toggleApi(api.value)}
                className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                  form.apis.includes(api.value)
                    ? "border-purple-500/50 bg-purple-500/10 text-purple-400"
                    : "border-border bg-card text-muted-foreground hover:border-purple-500/30"
                }`}
              >
                <span className="flex items-center gap-1">
                  <span>{api.label}</span>
                  <span className="text-purple-400 text-xs">+${api.price.toLocaleString()}</span>
                </span>
                {form.apis.includes(api.value) ? <Check size={16} /> : <X size={16} />}
              </button>
            ))}
          </div>
        </div>

        <div className="text-xs text-muted-foreground space-y-1 border border-border rounded-lg px-4 py-3 bg-card">
          <p>* El precio de <strong>Dominio</strong> y <strong>Servidor</strong> es por 1 año.</p>
          <p>* El precio de <strong>Mantenimiento/Soporte</strong> es por 2 meses.</p>
          <p>* Servicio de cotización creado con <strong>Python / FastAPI</strong>.</p>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 text-white gap-2"
        >
          {loading ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Calculator size={16} />
          )}
          {loading ? "Calculando..." : "Calcular cotización"}
        </Button>
      </form>

      {error && (
        <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      {result && (
        <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-6 space-y-4">
          <div className="flex items-center gap-3">
            <DollarSign size={24} className="text-purple-400" />
            <span className="text-3xl font-bold text-foreground">
              {result.estimated_cost.toLocaleString()}{" "}
              <span className="text-lg font-normal text-muted-foreground">{result.currency}</span>
            </span>
          </div>

          {result.breakdown && Object.keys(result.breakdown).length > 0 && (
            <div className="border-t border-purple-500/20 pt-4 space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Desglose:</p>
              {Object.entries(result.breakdown).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm py-1">
                  <span className="text-muted-foreground">
                    {breakdownLabels[key] ?? key}
                    {result.notes?.[key] && (
                      <span className="block text-[11px] text-purple-400/70">{result.notes[key]}</span>
                    )}
                  </span>
                  <span className="text-foreground font-medium">
                    ${value.toLocaleString()} {result.currency}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
