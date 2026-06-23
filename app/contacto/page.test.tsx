import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { LanguageProvider } from "@/components/common/LanguageProvider"
import type { ReactNode } from "react"
import ContactoPage from "./page"

const openSpy = vi.spyOn(window, "open").mockImplementation(() => null)

function renderWithProvider(ui: ReactNode) {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe("Contact Page", () => {
  beforeEach(() => {
    renderWithProvider(<ContactoPage />)
  })

  afterEach(() => {
    openSpy.mockClear()
  })

  it("renders the page title", () => {
    expect(screen.getByText("Contacto")).toBeInTheDocument()
  })

  it("renders form fields", () => {
    expect(screen.getByLabelText("Nombre")).toBeInTheDocument()
    expect(screen.getByLabelText("Teléfono")).toBeInTheDocument()
    expect(screen.getByLabelText("Correo electrónico")).toBeInTheDocument()
    expect(screen.getByLabelText("Mensaje")).toBeInTheDocument()
  })

  it("renders subject select with options", () => {
    expect(screen.getByLabelText("Asunto")).toBeInTheDocument()
    expect(screen.getByText("Cotización")).toBeInTheDocument()
    expect(screen.getByText("Asesoría")).toBeInTheDocument()
    expect(screen.getByText("Otro")).toBeInTheDocument()
  })

  it("opens WhatsApp on form submit", async () => {
    const user = userEvent.setup()

    await user.type(screen.getByLabelText("Nombre"), "Test User")
    await user.type(screen.getByLabelText("Teléfono"), "1234567890")
    await user.type(screen.getByLabelText("Correo electrónico"), "test@test.com")
    await user.type(screen.getByLabelText("Mensaje"), "Hello")

    await user.click(screen.getByText("Enviar por WhatsApp"))

    expect(openSpy).toHaveBeenCalled()
    const url = openSpy.mock.calls[0][0] as string
    expect(url).toContain("wa.me")
  })
})
