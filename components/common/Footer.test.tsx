import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Footer from "./Footer"
import { LanguageProvider } from "./LanguageProvider"
import type { ReactNode } from "react"

function renderWithProvider(ui: ReactNode) {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe("Footer", () => {
  it("renders tagline from translations", () => {
    renderWithProvider(<Footer />)
    expect(screen.getByText("Desarrollador Backend & Cloud")).toBeInTheDocument()
  })

  it("renders social links", () => {
    renderWithProvider(<Footer />)
    expect(screen.getByText("GitHub")).toBeInTheDocument()
    expect(screen.getByText("LinkedIn")).toBeInTheDocument()
    expect(screen.getByText("CV")).toBeInTheDocument()
  })

  it("renders the current year", () => {
    renderWithProvider(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
