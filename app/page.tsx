import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Terminal } from "lucide-react";

export default function Home() {
  return (
    <section className="grow flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8 py-20">
        <div className="flex justify-center gap-3">
          <span className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono tracking-wide">
            <Code size={14} className="inline mr-1" />
            Disponible para proyectos
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold text-foreground leading-tight">
          Hola, soy{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-600">
            Miguel Lopez
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-medium">
          Ingeniero en Sistemas &amp;{" "}
          <span className="text-purple-400">Desarrollador Backend</span>
        </p>

        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Especializado en sistemas escalables con Go, Python y microservicios.
          Construyo soluciones robustas desde el backend hasta el despliegue.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link href="/portfolio">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
              Ver Portafolio
              <ArrowRight size={16} />
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" className="gap-2 border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
              <Terminal size={16} />
              Sobre Mí
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
