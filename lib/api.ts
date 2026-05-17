const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"

export type ProjectType = "Visual Professional" | "Ecommerce" | "Visual Basic" | "Dashboard"
export type APIType = "OpenAI" | "WhatsApp" | "Telegram" | "Google Maps" | "Stripe"

export interface QuoteRequestPayload {
  type_of_project: ProjectType
  pages_or_modules: number
  interactive: boolean
  auth: boolean
  payments: boolean
  with_domain: boolean
  with_server: boolean
  seo: boolean
  copywriting: boolean
  responsive_premium: boolean
  database: boolean
  admin_panel: boolean
  maintenance: boolean
  deployment: boolean
  apis: APIType[]
}

export interface QuoteResponse {
  breakdown: Record<string, number>
  estimated_cost: number
  currency: string
  notes?: Record<string, string>
}

export async function fetchQuote(data: QuoteRequestPayload) {
  const res = await fetch(`${API_BASE}/quote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error("Error al calcular cotización")
  return res.json() as Promise<QuoteResponse>
}
