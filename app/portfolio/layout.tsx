import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portafolio | Miguel Angel Lopez",
  description:
    "Proyectos de desarrollo backend y full stack: Appointmetly, Global Gas, sistemas educativos, tiendas en línea y más. Golang, Python, React, Next.js.",
  openGraph: {
    title: "Portafolio | Miguel Angel Lopez",
    description:
      "Proyectos de desarrollo backend y full stack con Golang, Python, React y Next.js.",
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
