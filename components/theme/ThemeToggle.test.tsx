import { describe, it, expect, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ThemeToggle from "../theme/ThemeToggle"
import { ThemeProvider } from "../theme/ThemeProvider"

function renderWithProvider() {
  return render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  )
}

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove("light")
  })

  it("renders theme toggle button", () => {
    renderWithProvider()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  it("shows sun icon in dark mode (default)", () => {
    renderWithProvider()
    const btn = screen.getByRole("button")
    expect(btn.innerHTML).toContain("lucide-sun")
  })

  it("toggles theme when clicked", async () => {
    const user = userEvent.setup()
    renderWithProvider()
    const btn = screen.getByRole("button")

    await user.click(btn)
    expect(localStorage.getItem("theme")).toBe("light")
    expect(document.documentElement.classList.contains("light")).toBe(true)

    await user.click(btn)
    expect(localStorage.getItem("theme")).toBe("dark")
    expect(document.documentElement.classList.contains("light")).toBe(false)
  })
})
