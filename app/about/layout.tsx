import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Mí | Miguel Angel Lopez",
  description:
    "Ingeniero de Software Backend con experiencia en Golang, Python, PostgreSQL, AWS y microservicios. Conoce mi trayectoria profesional, habilidades y educación.",
  openGraph: {
    title: "Sobre Mí | Miguel Angel Lopez",
    description:
      "Ingeniero de Software Backend — Desarrollo Cloud y APIs. Experiencia en Appointmetly, Global Gas y proyectos freelance.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
