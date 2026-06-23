import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Asistente de Carrera IA | Miguel Angel Lopez",
  description:
    "Genera un roadmap de aprendizaje personalizado con IA. Selecciona tus tecnologías y objetivo para recibir un plan de desarrollo profesional.",
  openGraph: {
    title: "Asistente de Carrera IA | Miguel Angel Lopez",
    description:
      "Roadmap de aprendizaje personalizado generado con IA.",
  },
}

export default function AIAssistantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
