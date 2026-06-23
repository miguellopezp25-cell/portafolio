import { describe, it, expect, vi, beforeEach } from "vitest"
import { screen } from "@testing-library/react"
import { renderWithProviders } from "@/test-utils"
import HomePage from "./page"

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}))

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) =>
    <a href={href} {...props}>{children}</a>,
}))

describe("Home Page", () => {
  beforeEach(() => {
    renderWithProviders(<HomePage />)
  })

  it("renders hero name", () => {
    expect(screen.getByText("Miguel Angel Lopez Puebla")).toBeInTheDocument()
  })

  it("renders hero title", () => {
    expect(screen.getByText(/Ingeniero de Software Backend/)).toBeInTheDocument()
  })

  it("renders CTA buttons", () => {
    expect(screen.getByText("Ver Portafolio")).toBeInTheDocument()
    expect(screen.getByText("Sobre Mí")).toBeInTheDocument()
  })

  it("renders stats", () => {
    expect(screen.getByText("3+")).toBeInTheDocument()
    expect(screen.getByText("30+")).toBeInTheDocument()
    expect(screen.getByText("95%+")).toBeInTheDocument()
  })

  it("renders contact info", () => {
    expect(screen.getByText("Miguel.Lopezp25@gmail.com")).toBeInTheDocument()
    expect(screen.getByText("+52 33 2835 9296")).toBeInTheDocument()
  })

  it("renders social links", () => {
    expect(screen.getByText("miguellopezp25-cell")).toBeInTheDocument()
    expect(screen.getByText("miguel-lopezp25")).toBeInTheDocument()
  })
})
