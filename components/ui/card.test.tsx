import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from "./card"

describe("Card", () => {
  it("renders card with content", () => {
    render(<Card>Content</Card>)
    expect(screen.getByText("Content")).toBeInTheDocument()
    expect(screen.getByText("Content")).toHaveAttribute("data-slot", "card")
  })

  it("renders with sm size", () => {
    render(<Card size="sm">Small</Card>)
    expect(screen.getByText("Small")).toHaveAttribute("data-size", "sm")
  })

  it("renders all sub-components together", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Body</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    )
    expect(screen.getByText("Title")).toBeInTheDocument()
    expect(screen.getByText("Description")).toBeInTheDocument()
    expect(screen.getByText("Body")).toBeInTheDocument()
    expect(screen.getByText("Footer")).toBeInTheDocument()
  })

  it("renders CardAction", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardAction>
            <button>Action</button>
          </CardAction>
        </CardHeader>
      </Card>
    )
    expect(screen.getByRole("button", { name: /action/i })).toBeInTheDocument()
  })

  it("applies custom className to Card", () => {
    render(<Card className="custom-card">Content</Card>)
    expect(screen.getByText("Content").className).toContain("custom-card")
  })
})
