"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { fetchQuote } from "@/lib/api"
import { Calculator, Check, X, Loader2, DollarSign } from "lucide-react"

export default function CotizarPage() {
  const [form, setForm] = useState({
    pages_or_modules: 1,
    interactive: false,
    forms: 0,
    auth: false,
    payments: false,
  })
  const [result, setResult] = useState<{
    breakdown: Record<string, number>
    estimated_cost: number
    currency: string
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

  const breakdownLabels: Record<string, string> = {
    pages_or_modules: "Páginas / Módulos",
    interactive: "Interactividad",
    forms: "Formularios",
    auth: "Autenticación",
    payments: "Pagos",
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold text-foreground">Cotizador</h1>
        <p className="text-muted-foreground">
          Calcula el costo estimado de tu proyecto web.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="pages" className="text-sm font-medium text-foreground">
            Número de páginas / módulos
          </label>
          <input
            id="pages"
            type="number"
            min={1}
            required
            value={form.pages_or_modules}
            onChange={(e) =>
              setForm({ ...form, pages_or_modules: Math.max(1, Number(e.target.value)) })
            }
            className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="forms" className="text-sm font-medium text-foreground">
            Número de formularios
          </label>
          <input
            id="forms"
            type="number"
            min={0}
            value={form.forms}
            onChange={(e) =>
              setForm({ ...form, forms: Math.max(0, Number(e.target.value)) })
            }
            className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(["interactive", "auth", "payments"] as const).map((field) => (
            <button
              key={field}
              type="button"
              onClick={() => setForm({ ...form, [field]: !form[field] })}
              className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                form[field]
                  ? "border-purple-500/50 bg-purple-500/10 text-purple-400"
                  : "border-border bg-card text-muted-foreground hover:border-purple-500/30"
              }`}
            >
              <span className="capitalize">{field === "auth" ? "Autenticación" : field === "payments" ? "Pagos" : "Interactividad"}</span>
              {form[field] ? <Check size={16} /> : <X size={16} />}
            </button>
          ))}
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

          <div className="border-t border-purple-500/20 pt-4 space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Desglose:</p>
            {Object.entries(result.breakdown).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between text-sm py-1"
              >
                <span className="text-muted-foreground">
                  {breakdownLabels[key] ?? key}
                </span>
                <span className="text-foreground font-medium">
                  ${value.toLocaleString()} {result.currency}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
