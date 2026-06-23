import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { LanguageProvider } from "@/components/common/LanguageProvider"
import type { ReactNode } from "react"
import AIAssistantPage from "./page"

vi.mock("next/navigation", () => ({
  usePathname: () => "/ai-assistant",
}))

function renderWithProvider(ui: ReactNode) {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe("AI Assistant Page", () => {
  beforeEach(() => {
    renderWithProvider(<AIAssistantPage />)
  })

  it("renders the page title", () => {
    expect(screen.getByText("Asistente de carrera IA")).toBeInTheDocument()
  })

  it("renders skill selector", () => {
    expect(screen.getByText("Tecnologías que ya dominas")).toBeInTheDocument()
    expect(screen.getByText("Go")).toBeInTheDocument()
    expect(screen.getByText("Python")).toBeInTheDocument()
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument()
  })

  it("renders level selector", () => {
    expect(screen.getByText("Tu nivel actual")).toBeInTheDocument()
    expect(screen.getByText("Junior")).toBeInTheDocument()
    expect(screen.getByText("Senior")).toBeInTheDocument()
  })

  it("renders goal selector", () => {
    expect(screen.getByText("¿Qué quieres lograr?")).toBeInTheDocument()
    expect(screen.getByText("Full Stack moderno")).toBeInTheDocument()
    expect(screen.getByText("Cloud / DevOps")).toBeInTheDocument()
  })

  it("renders generate button", () => {
    expect(screen.getByText("Generar roadmap personalizado")).toBeInTheDocument()
  })

  it("allows adding custom skills", async () => {
    const user = userEvent.setup()
    const input = screen.getByPlaceholderText("Otra tecnología...")

    await user.type(input, "Rust")
    await user.click(screen.getByText("Agregar"))

    expect(screen.getByText("Rust")).toBeInTheDocument()
  })

  it("allows toggling skills", async () => {
    const user = userEvent.setup()

    const goBtn = screen.getByText("Go")
    await user.click(goBtn)
    expect(goBtn.className).not.toContain("bg-purple-500/10")

    await user.click(goBtn)
    expect(goBtn.className).toContain("bg-purple-500/10")
  })

  it("disables generate button when no skills selected", async () => {
    const user = userEvent.setup()
    const goBtn = screen.getByText("Go")
    await user.click(goBtn)
    await user.click(screen.getByText("Python"))
    await user.click(screen.getByText("PostgreSQL"))
    await user.click(screen.getByText("Docker"))

    expect(screen.getByText("Generar roadmap personalizado")).toBeDisabled()
  })
})
