import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Badge } from "./badge"

describe("Badge", () => {
  it("renders with text", () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText("New")).toBeInTheDocument()
  })

  it("renders with default variant", () => {
    render(<Badge>Default</Badge>)
    expect(screen.getByText("Default")).toHaveAttribute("data-variant", "default")
  })

  it("renders with secondary variant", () => {
    render(<Badge variant="secondary">Secondary</Badge>)
    expect(screen.getByText("Secondary")).toHaveAttribute("data-variant", "secondary")
  })

  it("renders with destructive variant", () => {
    render(<Badge variant="destructive">Destructive</Badge>)
    expect(screen.getByText("Destructive")).toHaveAttribute("data-variant", "destructive")
  })

  it("applies custom className", () => {
    render(<Badge className="custom">Custom</Badge>)
    expect(screen.getByText("Custom").className).toContain("custom")
  })
})
