import { describe, it, expect, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import { LanguageProvider, useLanguage } from "./LanguageProvider"
import { type ReactNode } from "react"

function TestConsumer() {
  const { lang, setLang } = useLanguage()
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <button onClick={() => setLang("en")}>Set EN</button>
      <button onClick={() => setLang("es")}>Set ES</button>
    </div>
  )
}

function renderWithProvider(ui: ReactNode) {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe("LanguageProvider", () => {
  beforeEach(() => {
    document.documentElement.lang = ""
  })

  it("defaults to Spanish", () => {
    renderWithProvider(<TestConsumer />)
    expect(screen.getByTestId("lang").textContent).toBe("es")
  })

  it("changes language to English", async () => {
    const userEvent = (await import("@testing-library/user-event")).default
    renderWithProvider(<TestConsumer />)
    await userEvent.click(screen.getByText("Set EN"))
    expect(screen.getByTestId("lang").textContent).toBe("en")
    expect(document.documentElement.lang).toBe("en")
  })

  it("changes language to Spanish", async () => {
    const userEvent = (await import("@testing-library/user-event")).default
    renderWithProvider(<TestConsumer />)
    await userEvent.click(screen.getByText("Set ES"))
    expect(screen.getByTestId("lang").textContent).toBe("es")
    expect(document.documentElement.lang).toBe("es")
  })
})
