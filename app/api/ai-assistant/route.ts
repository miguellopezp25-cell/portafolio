import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { prompt } = await req.json()

  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: "La API key de Anthropic no está configurada." },
      { status: 500 }
    )
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250506",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }],
      }),
    })

    if (!res.ok) {
      const error = await res.text()
      console.error("Anthropic API error:", res.status, error)
      const error = await res.text()
      console.error("Anthropic API error:", res.status, error)
      return NextResponse.json(
        { error: `Error de la API de Anthropic: ${res.status} — ${error}` },
        { status: res.status }
      )
    }

    const data = await res.json()
    return NextResponse.json({ content: data.content })
  } catch {
    return NextResponse.json(
      { error: "No se pudo conectar con la API de Anthropic." },
      { status: 500 }
    )
  }
}
