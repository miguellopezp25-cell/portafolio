import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grow flex items-center justify-center px-6">
      <div className="max-w-lg mx-auto text-center space-y-6 py-20">
        <div className="text-8xl font-bold text-purple-500/30 select-none">
          404
        </div>
        <h1 className="text-3xl font-semibold text-foreground">
          Página no encontrada
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          La ruta que buscas no existe o fue movida. Mejor vuelve al inicio.
        </p>
        <Link href="/">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
            <Home size={16} />
            Volver al inicio
          </Button>
        </Link>
      </div>
    </section>
  );
}
