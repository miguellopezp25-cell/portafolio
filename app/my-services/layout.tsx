import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios | Miguel Angel Lopez",
  description:
    "Tecnologías y servicios de desarrollo web: frontend, backend, infraestructura cloud e integración de IA. Golang, Python, React, Docker, AWS.",
  openGraph: {
    title: "Servicios | Miguel Angel Lopez",
    description:
      "Desarrollo web, APIs, microservicios, infraestructura cloud e integración de IA.",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
