const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"

export async function fetchQuote(data: {
  pages_or_modules: number
  interactive: boolean
  forms: number
  auth: boolean
  payments: boolean
}) {
  const res = await fetch(`${API_BASE}/quote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error("Error al calcular cotización")
  return res.json() as Promise<{
    breakdown: {
      pages_or_modules: number
      interactive: number
      forms: number
      auth: number
      payments: number
    }
    estimated_cost: number
    currency: string
  }>
}


