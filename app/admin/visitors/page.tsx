"use client"
import { useEffect, useState } from "react"
import { listVisitors, type Visitor } from "@/lib/api-backend"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, RefreshCw, MapPin, Globe, Mail, Loader2 } from "lucide-react"

export default function AdminVisitorsPage() {
  const [visitors, setVisitors] = useState<Visitor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  async function fetchVisitors() {
    setLoading(true)
    setError("")
    try {
      const res = await listVisitors()
      setVisitors(res.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar visitantes")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchVisitors()
  }, [])

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-4xl font-semibold text-foreground">Visitantes</h1>
          <p className="text-muted-foreground">
            {visitors.length} visitante{visitors.length !== 1 ? "s" : ""} registrado{visitors.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={fetchVisitors}
          disabled={loading}
          className="gap-2"
        >
          <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          Actualizar
        </Button>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-16">
          <Loader2 size={32} className="animate-spin text-purple-400" />
        </div>
      )}

      {error && (
        <Card className="border-red-500/30">
          <CardContent className="p-6 text-center text-red-400">
            {error}
          </CardContent>
        </Card>
      )}

      {!loading && !error && visitors.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center space-y-3">
            <Users size={40} className="text-muted-foreground mx-auto" />
            <p className="text-muted-foreground">No hay visitantes registrados aún.</p>
          </CardContent>
        </Card>
      )}

      {!loading && visitors.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {visitors.map((v) => (
            <Card key={v.id} className="hover:border-purple-500/30 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users size={16} className="text-purple-400" />
                  {v.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-purple-400" />
                  {v.email}
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={14} className="text-purple-400" />
                  {v.country}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-purple-400" />
                  {v.city}
                </div>
                <Badge variant="secondary" className="text-xs font-mono mt-2">
                  {v.id.slice(0, 8)}...
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  )
}
