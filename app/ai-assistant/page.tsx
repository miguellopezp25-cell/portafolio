"use client"
import { useState } from "react"
import { Sparkles, Wand2, RefreshCw, Plus, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

const DEFAULT_SKILLS = [
  "Go", "Python", "TypeScript", "React", "Next.js",
  "PostgreSQL", "Docker", "AWS", "Kubernetes", "Rust", "Java", "Redis",
]

const LEVELS = [
  { value: "junior", label: "Junior" },
  { value: "mid", label: "Mid-level" },
  { value: "senior", label: "Senior" },
  { value: "lead", label: "Tech Lead" },
]

const GOALS = [
  { value: "fullstack", label: "Full Stack moderno", desc: "Dominar frontend + backend end-to-end" },
  { value: "devops", label: "Cloud / DevOps", desc: "Infraestructura, CI/CD, observabilidad" },
  { value: "ai", label: "IA & LLM Apps", desc: "Construir productos con IA generativa" },
  { value: "sistemas", label: "Sistemas distribuidos", desc: "Microservicios, event-driven, alta escala" },
]

const LEVEL_LABELS: Record<string, string> = {
  junior: "Junior (0-1 años)",
  mid: "Mid-level (2-4 años)",
  senior: "Senior (5+ años)",
  lead: "Tech Lead",
}

const GOAL_LABELS: Record<string, string> = {
  fullstack: "Full Stack moderno (frontend + backend end-to-end)",
  devops: "Cloud / DevOps (infraestructura, CI/CD, observabilidad)",
  ai: "IA & LLM Apps (productos con IA generativa)",
  sistemas: "Sistemas distribuidos (microservicios, event-driven, alta escala)",
}

export default function AIAssistantPage() {
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(
    new Set(["Go", "Python", "PostgreSQL", "Docker"])
  )
  const [customSkillInput, setCustomSkillInput] = useState("")
  const [allSkills, setAllSkills] = useState<string[]>(DEFAULT_SKILLS)
  const [level, setLevel] = useState("mid")
  const [goal, setGoal] = useState("fullstack")
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function toggleSkill(skill: string) {
    setSelectedSkills((prev) => {
      const next = new Set(prev)
      if (next.has(skill)) next.delete(skill)
      else next.add(skill)
      return next
    })
  }

  function addCustomSkill() {
    const val = customSkillInput.trim()
    if (!val || allSkills.includes(val)) return
    setAllSkills((prev) => [...prev, val])
    setSelectedSkills((prev) => new Set([...prev, val]))
    setCustomSkillInput("")
  }

  async function generateRoadmap() {
    if (selectedSkills.size === 0) return
    setLoading(true)
    setResponse(null)
    setError(null)

    const prompt = `Eres un mentor de desarrollo de software experto. El usuario tiene el siguiente perfil:

- Nivel: ${LEVEL_LABELS[level]}
- Tecnologías que ya domina: ${[...selectedSkills].join(", ")}
- Objetivo principal: ${GOAL_LABELS[goal]}

Genera un roadmap de aprendizaje personalizado y específico. Incluye:

1. **Diagnóstico de gaps** (2-3 puntos: qué le falta según su objetivo)
2. **Roadmap en 3 etapas** (cada etapa con duración estimada y tecnologías/conceptos concretos a aprender)
3. **3 proyectos específicos para construir** (nombre, descripción corta, stack recomendado, por qué lo ayudará)
4. **Recursos clave** (2-3 recursos muy específicos: libros, cursos, repos, no genéricos)

Sé concreto, directo y práctico. Evita consejos genéricos. Usa el stack que ya conoce como base. Responde en español.`

    try {
      const res = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || `HTTP ${res.status}`)
      }
      const data = await res.json()
      const text: string = data.content?.map((b: { text?: string }) => b.text || "").join("") || ""
      setResponse(text)
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo conectar con la IA.")
    } finally {
      setLoading(false)
    }
  }

  function reset() {
    setResponse(null)
    setError(null)
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono">
          <Sparkles size={12} />
          IA integrada · Claude
        </div>
        <h1 className="text-4xl font-semibold text-foreground">Asistente de carrera IA</h1>
        <p className="text-muted-foreground">
          Selecciona tus tecnologías actuales y tu objetivo. Recibirás un roadmap personalizado con
          proyectos concretos para construir y cerrar los gaps de tu perfil.
        </p>
      </div>

      {!response && !loading && (
        <div className="space-y-6">
          {/* Skills */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Tecnologías que ya dominas
            </p>
            <div className="flex flex-wrap gap-2">
              {allSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition-all ${
                    selectedSkills.has(skill)
                      ? "border-purple-500/50 bg-purple-500/10 text-purple-400"
                      : "border-border text-muted-foreground hover:border-purple-500/30"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={customSkillInput}
                onChange={(e) => setCustomSkillInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addCustomSkill()}
                placeholder="Otra tecnología..."
                className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={addCustomSkill}
                className="border-border text-muted-foreground gap-1"
              >
                <Plus size={14} /> Agregar
              </Button>
            </div>
          </div>

          {/* Level */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Tu nivel actual
            </p>
            <div className="grid grid-cols-4 gap-2">
              {LEVELS.map((l) => (
                <button
                  key={l.value}
                  onClick={() => setLevel(l.value)}
                  className={`py-2 rounded-lg text-sm border transition-all ${
                    level === l.value
                      ? "border-purple-500/50 bg-purple-500/10 text-purple-400"
                      : "border-border text-muted-foreground hover:border-purple-500/30"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Goal */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              ¿Qué quieres lograr?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {GOALS.map((g) => (
                <button
                  key={g.value}
                  onClick={() => setGoal(g.value)}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    goal === g.value
                      ? "border-purple-500/50 bg-purple-500/10"
                      : "border-border hover:border-purple-500/30"
                  }`}
                >
                  <p className={`text-sm font-medium ${goal === g.value ? "text-purple-400" : "text-foreground"}`}>
                    {g.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{g.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={generateRoadmap}
            disabled={selectedSkills.size === 0}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white gap-2"
          >
            <Wand2 size={16} />
            Generar roadmap personalizado
          </Button>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="rounded-xl border border-border bg-card p-6 flex items-center gap-4">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">Analizando tu perfil y generando roadmap...</p>
        </div>
      )}

      {/* Response */}
      {(response || error) && !loading && (
        <div className="space-y-4">
          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
              {error}
            </div>
          )}
          {response && (
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
                <div className="size-7 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Bot size={14} className="text-purple-400" />
                </div>
                <span className="text-sm font-medium text-foreground">Asistente IA · Claude</span>
              </div>
              <div className="p-5">
                <pre className="text-sm text-foreground leading-relaxed whitespace-pre-wrap font-sans">
                  {response}
                </pre>
              </div>
            </div>
          )}
          <Button
            variant="outline"
            onClick={reset}
            className="w-full border-border text-muted-foreground gap-2"
          >
            <RefreshCw size={14} /> Nuevo análisis
          </Button>
        </div>
      )}
    </section>
  )
}
