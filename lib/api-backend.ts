
const API_BASE = process.env.NODE_ENV === "production" 
  ? "https://backend-go-portfolio-production.up.railway.app" 
  : "http://localhost:8080"
export interface Visitor {
  id: string
  name: string
  email: string
  country: string
  city: string
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  error?: string
  message?: string
}

export async function createVisitor(data: Omit<Visitor, "id">) {
  const res = await fetch(`${API_BASE}/api/v1/visitors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.message ?? "Error al registrar visitante")
  }
  return res.json() as Promise<ApiResponse<{ id: string; message: string }>>
}

export async function listVisitors() {
  const res = await fetch(`${API_BASE}/api/v1/visitors`)
  if (!res.ok) {
    throw new Error("Error al obtener visitantes")
  }
  return res.json() as Promise<ApiResponse<Visitor[]>>
}

export async function getVisitor(id: string) {
  const res = await fetch(`${API_BASE}/api/v1/visitors/${id}`)
  if (!res.ok) {
    throw new Error("Visitante no encontrado")
  }
  return res.json() as Promise<ApiResponse<Visitor>>
}
