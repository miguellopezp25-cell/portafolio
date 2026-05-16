"use client"
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { sendContact } from "@/lib/api"
import { Send, CheckCircle, AlertCircle, Mail, Phone, User, MessageSquare } from "lucide-react"

const subjects = [
  { value: "cotizacion", label: "Cotización" },
  { value: "asesoria", label: "Asesoría" },
  { value: "producto", label: "Producto" },
  { value: "pedido", label: "Pedido" },
  { value: "otro", label: "Otro" },
]

export default function ContactoPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "cotizacion",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")
    try {
      await sendContact(form)
      setStatus("success")
      setForm({ name: "", phone: "", email: "", subject: "cotizacion", message: "" })
    } catch {
      setStatus("error")
      setErrorMsg("No se pudo enviar el mensaje. Intenta de nuevo.")
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-20 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold text-foreground">Contacto</h1>
        <p className="text-muted-foreground">
          Déjame un mensaje y te responderé a la brevedad.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
              <User size={14} className="text-purple-400" />
              Nombre
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              placeholder="Tu nombre"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-2">
              <Phone size={14} className="text-purple-400" />
              Teléfono
            </label>
            <input
              id="phone"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              placeholder="33 1234 5678"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
            <Mail size={14} className="text-purple-400" />
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            placeholder="tu@correo.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-foreground">
            Asunto
          </label>
          <select
            id="subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
          >
            {subjects.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
            <MessageSquare size={14} className="text-purple-400" />
            Mensaje
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
            placeholder="Escribe tu mensaje aquí..."
          />
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
            <AlertCircle size={16} />
            {errorMsg}
          </div>
        )}

        {status === "success" && (
          <div className="flex items-center gap-2 text-sm text-green-400 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-3">
            <CheckCircle size={16} />
            Mensaje enviado correctamente. Te contactaré pronto.
          </div>
        )}

        <Button
          type="submit"
          disabled={status === "loading"}
          className="bg-purple-600 hover:bg-purple-700 text-white gap-2 w-full sm:w-auto"
        >
          {status === "loading" ? (
            "Enviando..."
          ) : (
            <>
              Enviar mensaje
              <Send size={16} />
            </>
          )}
        </Button>
      </form>
    </section>
  )
}
