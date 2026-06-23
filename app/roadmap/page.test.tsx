import { describe, it, expect, vi, beforeEach } from "vitest"
import { screen } from "@testing-library/react"
import { renderWithProviders } from "@/test-utils"
import RoadmapPage from "./page"

vi.mock("next/navigation", () => ({
  usePathname: () => "/roadmap",
}))

describe("Roadmap Page", () => {
  beforeEach(() => {
    renderWithProviders(<RoadmapPage />)
  })

  it("renders the roadmap title", () => {
    expect(screen.getByText("Roadmap del Portafolio")).toBeInTheDocument()
  })

  it("renders all four sections", () => {
    expect(screen.getByText("Hecho")).toBeInTheDocument()
    expect(screen.getByText("En Progreso")).toBeInTheDocument()
    expect(screen.getByText("Pendiente")).toBeInTheDocument()
    expect(screen.getByText("Mejoras")).toBeInTheDocument()
  })

  it("shows progress percentage", () => {
    expect(screen.getByText(/% completo/)).toBeInTheDocument()
  })

  it("renders task items", () => {
    expect(screen.getByText(/Asistente IA con Claude/)).toBeInTheDocument()
  })
})
