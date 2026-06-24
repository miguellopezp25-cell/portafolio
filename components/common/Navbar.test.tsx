import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import Navbar from "./Navbar"
import { LanguageProvider } from "./LanguageProvider"
import { ThemeProvider } from "../theme/ThemeProvider"
import type { ReactNode } from "react"

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}))

function renderWithProviders(ui: ReactNode) {
  return render(
    <ThemeProvider>
      <LanguageProvider>{ui}</LanguageProvider>
    </ThemeProvider>
  )
}

describe("Navbar", () => {
  it("renders all navigation links", () => {
    renderWithProviders(<Navbar />)
    expect(screen.getByText("MIGUEL")).toBeInTheDocument()
    expect(screen.getByText("Inicio")).toBeInTheDocument()
    expect(screen.getByText("Sobre Mí")).toBeInTheDocument()
    expect(screen.getByText("Servicios")).toBeInTheDocument()
    expect(screen.getByText("Portafolio")).toBeInTheDocument()
    expect(screen.getByText("Cotizar")).toBeInTheDocument()
    expect(screen.getByText("Contacto")).toBeInTheDocument()
    expect(screen.getByText("Registrar")).toBeInTheDocument()
    expect(screen.getByText("Visitantes")).toBeInTheDocument()
  })

  it("renders theme and language toggles", () => {
    renderWithProviders(<Navbar />)
    expect(screen.getByLabelText("Toggle language")).toBeInTheDocument()
    expect(screen.getByLabelText("Cambiar tema")).toBeInTheDocument()
  })

  it("has active link style for current path", () => {
    renderWithProviders(<Navbar />)
    const homeLink = screen.getByText("Inicio").closest("a")
    expect(homeLink?.className).toContain("text-purple-500")
  })
})
