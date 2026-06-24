import { describe, it, expect, vi, beforeEach } from "vitest"
import { screen } from "@testing-library/react"
import { renderWithProviders } from "@/test-utils"
import NotFound from "./not-found"

vi.mock("next/navigation", () => ({
  usePathname: () => "/nonexistent",
}))

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) =>
    <a href={href} {...props}>{children}</a>,
}))

describe("Not Found Page", () => {
  beforeEach(() => {
    renderWithProviders(<NotFound />)
  })

  it("renders 404 heading", () => {
    expect(screen.getByText("404")).toBeInTheDocument()
  })

  it("renders not-found message from translations", () => {
    expect(screen.getByText("La ruta que buscas no existe o fue movida. Mejor vuelve al inicio.")).toBeInTheDocument()
  })

  it("renders the home button", () => {
    expect(screen.getByText("Volver al inicio")).toBeInTheDocument()
  })
})
