import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "./button"

describe("Button", () => {
  it("renders with text", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument()
  })

  it("renders with default variant and size", () => {
    render(<Button>Default</Button>)
    const btn = screen.getByRole("button")
    expect(btn).toHaveAttribute("data-variant", "default")
    expect(btn).toHaveAttribute("data-size", "default")
  })

  it("renders with specified variant", () => {
    render(<Button variant="destructive">Delete</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("data-variant", "destructive")
  })

  it("renders with specified size", () => {
    render(<Button size="lg">Large</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("data-size", "lg")
  })

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup()
    let clicked = false
    render(<Button onClick={() => { clicked = true }}>Click</Button>)
    await user.click(screen.getByRole("button"))
    expect(clicked).toBe(true)
  })

  it("is disabled when disabled prop is set", () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole("button")).toBeDisabled()
  })

  it("applies custom className", () => {
    render(<Button className="custom-class">Styled</Button>)
    expect(screen.getByRole("button").className).toContain("custom-class")
  })

  it("renders as child when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    const link = screen.getByRole("link", { name: /link button/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/test")
  })
})
