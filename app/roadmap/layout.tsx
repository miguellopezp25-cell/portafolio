import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Roadmap | Miguel Angel Lopez",
  description:
    "Progreso del portafolio: features implementadas, en desarrollo, pendientes y mejoras planificadas.",
  openGraph: {
    title: "Roadmap | Miguel Angel Lopez",
    description: "Roadmap de desarrollo del portafolio profesional.",
  },
}

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
