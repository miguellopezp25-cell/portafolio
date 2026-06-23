import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cotizador Web | Miguel Angel Lopez",
  description:
    "Cotiza tu proyecto web: landing pages, sitios institucionales, e-commerce, SaaS, dashboards administrativos. Presupuesto personalizado.",
  openGraph: {
    title: "Cotizador Web | Miguel Angel Lopez",
    description:
      "Cotiza tu proyecto web con presupuesto personalizado.",
  },
}

export default function CotizarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
