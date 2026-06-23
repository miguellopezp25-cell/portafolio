import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | Miguel Angel Lopez",
  description:
    "Contáctame para cotizaciones, asesoría o colaboraciones. Envíame un mensaje directo por WhatsApp.",
  openGraph: {
    title: "Contacto | Miguel Angel Lopez",
    description:
      "Contáctame para cotizaciones, asesoría o colaboraciones.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
