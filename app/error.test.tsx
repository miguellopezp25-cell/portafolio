import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ErrorPage from "./error"

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) =>
    <a href={href} {...props}>{children}</a>,
}))

const mockReset = vi.fn()

describe("Error Page", () => {
  beforeEach(() => {
    mockReset.mockClear()
    render(
      <ErrorPage error={new Error("Test error")} reset={mockReset} />
    )
  })

  it("renders error message", () => {
    expect(screen.getByText("Algo salió mal")).toBeInTheDocument()
  })

  it("renders reset button that calls reset()", async () => {
    const user = userEvent.setup()
    const btn = screen.getByText("Intentar de nuevo")
    await user.click(btn)
    expect(mockReset).toHaveBeenCalledOnce()
  })

  it("renders home link", () => {
    expect(screen.getByText("Volver al inicio")).toBeInTheDocument()
  })
})
