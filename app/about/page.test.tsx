import { describe, it, expect, vi, beforeEach } from "vitest"
import { screen, waitFor } from "@testing-library/react"
import { renderWithProviders } from "@/test-utils"
import AboutPage from "./page"

vi.mock("next/navigation", () => ({
  usePathname: () => "/about",
}))

vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string }) =>
    <img src={src} alt={alt} {...props} />,
}))

describe("About Page", () => {
  beforeEach(() => {
    renderWithProviders(<AboutPage />)
  })

  it("renders the about title", () => {
    expect(screen.getByText("Miguel Angel Lopez Puebla")).toBeInTheDocument()
  })

  it("renders the role", () => {
    expect(screen.getByText(/Ingeniero de Software Backend/)).toBeInTheDocument()
  })

  it("renders the bio", () => {
    expect(screen.getAllByText(/Golang/).length).toBeGreaterThan(0)
  })

  it("renders contact cards", () => {
    expect(screen.getByText("Miguel.Lopezp25@gmail.com")).toBeInTheDocument()
    expect(screen.getByText("+52 33 2835 9296")).toBeInTheDocument()
  })

  it("renders experience section heading", async () => {
    await waitFor(() => {
      expect(screen.getByText("Experiencia Profesional")).toBeInTheDocument()
    })
  })

  it("renders skills section heading", async () => {
    await waitFor(() => {
      expect(screen.getByText("Habilidades Técnicas")).toBeInTheDocument()
    })
  })

  it("renders education section", () => {
    expect(screen.getByText("Educación")).toBeInTheDocument()
  })
})
