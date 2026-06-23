"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="grow flex items-center justify-center px-6">
      <div className="max-w-lg mx-auto text-center space-y-6 py-20">
        <div className="text-8xl font-bold text-red-500/30 select-none">
          !
        </div>
        <h1 className="text-3xl font-semibold text-foreground">
          Algo salió mal
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Ocurrió un error inesperado. Puedes intentar recargar la página o
          volver al inicio.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-purple-600 hover:bg-purple-700 text-white gap-2"
          >
            <RefreshCw size={16} /> Intentar de nuevo
          </Button>
          <Link href="/">
            <Button
              variant="outline"
              className="border-border text-muted-foreground gap-2"
            >
              <Home size={16} /> Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
