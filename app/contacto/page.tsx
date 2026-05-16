"use client"
import { Button } from "@/components/ui/button"
import { Send, Mail, Phone, User, MessageSquare } from "lucide-react"

const subjects = [
  { value: "Cotización", label: "Cotización" },
  { value: "Asesoría", label: "Asesoría" },
  { value: "Producto", label: "Producto" },
  { value: "Pedido", label: "Pedido" },
  { value: "Otro", label: "Otro" },
]

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "523328359296"

export default function ContactoPage() {
  function handleSubmit(formData: FormData) {
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    const text = `*Nuevo mensaje desde portafolio*

*Nombre:* ${name}
*Teléfono:* ${phone}
*Correo:* ${email}
*Asunto:* ${subject}
*Mensaje:* ${message}`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-20 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold text-foreground">Contacto</h1>
        <p className="text-muted-foreground">
          Envíame un mensaje directo por WhatsApp.
        </p>
      </div>

      <form action={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
              <User size={14} className="text-purple-400" />
              Nombre
            </label>
            <input
              id="name"
              name="name"
              required
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
              name="phone"
              required
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
            name="email"
            type="email"
            required
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
            name="subject"
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
            name="message"
            required
            rows={5}
            className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
            placeholder="Escribe tu mensaje aquí..."
          />
        </div>

        <Button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white gap-2 w-full sm:w-auto"
        >
          Enviar por WhatsApp
          <Send size={16} />
        </Button>
      </form>
    </section>
  )
}
