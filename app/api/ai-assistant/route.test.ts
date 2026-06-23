import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { NextRequest } from "next/server"

describe("AI Assistant API Route", () => {
  const mockFetch = vi.fn()

  beforeEach(() => {
    vi.stubGlobal("fetch", mockFetch)
    process.env.ANTHROPIC_API_KEY = "sk-test-key"
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    delete process.env.ANTHROPIC_API_KEY
  })

  it("returns error when ANTHROPIC_API_KEY is missing", async () => {
    delete process.env.ANTHROPIC_API_KEY
    const { POST } = await import("./route")
    const req = new NextRequest("http://localhost/api/ai-assistant", {
      method: "POST",
      body: JSON.stringify({ prompt: "test" }),
    })
    const res = await POST(req)
    const data = await res.json()
    expect(res.status).toBe(500)
    expect(data.error).toContain("no está configurada")
  })

  it("calls Anthropic API and returns response", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        content: [{ text: "Roadmap completo" }],
      }),
    } as Response)

    const { POST } = await import("./route")
    const req = new NextRequest("http://localhost/api/ai-assistant", {
      method: "POST",
      body: JSON.stringify({ prompt: "test prompt" }),
    })
    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data.content).toEqual([{ text: "Roadmap completo" }])
    expect(mockFetch).toHaveBeenCalledWith(
      "https://api.anthropic.com/v1/messages",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "x-api-key": "sk-test-key",
          "anthropic-version": "2023-06-01",
        }),
      })
    )
  })

  it("handles Anthropic API errors gracefully", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 401,
      text: async () => "Unauthorized",
    } as Response)

    const { POST } = await import("./route")
    const req = new NextRequest("http://localhost/api/ai-assistant", {
      method: "POST",
      body: JSON.stringify({ prompt: "test" }),
    })
    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(401)
    expect(data.error).toContain("401")
  })

  it("handles network errors", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network error"))

    const { POST } = await import("./route")
    const req = new NextRequest("http://localhost/api/ai-assistant", {
      method: "POST",
      body: JSON.stringify({ prompt: "test" }),
    })
    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(500)
    expect(data.error).toContain("No se pudo conectar")
  })
})
