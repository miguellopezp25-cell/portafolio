import { describe, it, expect, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { LanguageProvider } from "@/components/common/LanguageProvider"
import type { ReactNode } from "react"
import CotizarPage from "./page"

function renderWithProvider(ui: ReactNode) {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe("Cotizar Page", () => {
  beforeEach(() => {
    renderWithProvider(<CotizarPage />)
  })

  it("renders the page title", () => {
    expect(screen.getByText("Cotizador Web")).toBeInTheDocument()
  })

  it("renders all project type options", () => {
    expect(screen.getByText("Landing Page")).toBeInTheDocument()
    expect(screen.getByText("Sitio Institucional")).toBeInTheDocument()
    expect(screen.getByText("E-commerce")).toBeInTheDocument()
    expect(screen.getByText("SaaS / Web App")).toBeInTheDocument()
  })

  it("shows addons and details after selecting a project type", async () => {
    const user = userEvent.setup()

    await user.click(screen.getByText("Landing Page"))

    const heading = await screen.findByText("3. Servicios adicionales")
    expect(heading).toBeInTheDocument()
    expect(await screen.findByText("Resumen de cotización")).toBeInTheDocument()
  })

  it("shows price after selecting a project", async () => {
    const user = userEvent.setup()
    await user.click(screen.getByText("Landing Page"))

    const prices = await screen.findAllByText(/\$3,500 MXN/)
    expect(prices.length).toBeGreaterThan(0)
  })

  it("shows the solicitar cotización button after selection", async () => {
    const user = userEvent.setup()
    await user.click(screen.getByText("Landing Page"))

    expect(await screen.findByText("Solicitar cotización formal")).toBeInTheDocument()
  })
})
