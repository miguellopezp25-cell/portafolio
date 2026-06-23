import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import LanguageToggle from "./LanguageToggle"
import { LanguageProvider } from "./LanguageProvider"

function renderWithProvider() {
  return render(
    <LanguageProvider>
      <LanguageToggle />
    </LanguageProvider>
  )
}

describe("LanguageToggle", () => {
  it("renders language toggle button", () => {
    renderWithProvider()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  it("shows EN text initially (since default is es)", () => {
    renderWithProvider()
    const enSpans = screen.getAllByText("EN")
    expect(enSpans.length).toBe(2)
  })

  it("toggles to ES when clicked", async () => {
    const user = userEvent.setup()
    renderWithProvider()
    await user.click(screen.getByRole("button"))
    const esSpans = screen.getAllByText("ES")
    expect(esSpans.length).toBe(2)
  })
})
