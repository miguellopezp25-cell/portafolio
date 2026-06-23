import { describe, it, expect, vi, beforeEach } from "vitest"
import { screen } from "@testing-library/react"
import { renderWithProviders } from "@/test-utils"
import PortfolioPage from "./page"

vi.mock("next/navigation", () => ({
  usePathname: () => "/portfolio",
}))

vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string }) =>
    <img src={src} alt={alt} {...props} />,
}))

describe("Portfolio Page", () => {
  beforeEach(() => {
    renderWithProviders(<PortfolioPage />)
  })

  it("renders portfolio title", () => {
    expect(screen.getByText("Portafolio")).toBeInTheDocument()
  })

  it("renders project cards", () => {
    expect(screen.getByText("Appointmetly - Gestión de Citas empresariales")).toBeInTheDocument()
    expect(screen.getByText("Semillera - Catálogo y Carrito de Compras")).toBeInTheDocument()
    expect(screen.getByText("Portafolio Personal")).toBeInTheDocument()
  })

  it("renders project images with alt text", () => {
    const images = screen.getAllByRole("img")
    expect(images.length).toBeGreaterThan(0)
  })
})
