"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { createVisitor } from "@/lib/api-backend"
import { Send, User, Mail, Globe, MapPin, CheckCircle, Loader2 } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setStatus("loading")
    setMessage("")
    try {
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        country: formData.get("country") as string,
        city: formData.get("city") as string,
      }
      await createVisitor(data)
      setStatus("success")
      setMessage("¡Registrado correctamente!")
    } catch (err) {
      setStatus("error")
      setMessage(err instanceof Error ? err.message : "Error al registrar")
    }
  }

  if (status === "success") {
    return (
      <section className="max-w-lg mx-auto px-6 py-20 space-y-6 text-center">
        <CheckCircle size={48} className="text-green-400 mx-auto" />
        <h1 className="text-3xl font-semibold text-foreground">¡Registrado!</h1>
        <p className="text-muted-foreground">{message}</p>
        <Link href="/">
          <Button variant="outline">Volver al inicio</Button>
        </Link>
      </section>
    )
  }

  return (
    <section className="max-w-lg mx-auto px-6 py-20 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold text-foreground">Registrar Visitante</h1>
        <p className="text-muted-foreground">
          Déjame saber que pasaste por aquí.
        </p>
      </div>

      <form action={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
            <User size={14} className="text-purple-400" />
            Nombre
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-border px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            placeholder="Tu nombre"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
            <Mail size={14} className="text-purple-400" />
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-border px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            placeholder="tu@correo.com"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="country" className="text-sm font-medium text-foreground flex items-center gap-2">
              <Globe size={14} className="text-purple-400" />
              País
            </label>
            <input
              id="country"
              name="country"
              required
              className="w-full rounded-lg border border-border px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              placeholder="México"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="city" className="text-sm font-medium text-foreground flex items-center gap-2">
              <MapPin size={14} className="text-purple-400" />
              Ciudad
            </label>
            <input
              id="city"
              name="city"
              required
              className="w-full rounded-lg border border-border px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              placeholder="Guadalajara"
            />
          </div>
        </div>

        {status === "error" && (
          <p className="text-sm text-red-400">{message}</p>
        )}

        <Button
          type="submit"
          disabled={status === "loading"}
          className="bg-purple-600 hover:bg-purple-700 text-white gap-2 w-full sm:w-auto"
        >
          {status === "loading" ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Send size={16} />
          )}
          {status === "loading" ? "Registrando..." : "Registrar"}
        </Button>
      </form>
    </section>
  )
}
