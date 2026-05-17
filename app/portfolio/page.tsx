"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Appointmetly - Gestión de Citas empresariales y negocios",
    desc: "Backend modular en Go/Python. +30 APIs REST con 95% de cobertura de pruebas y despliegue en AWS (EC2/S3).",
    tags: ["Privado", "Go", "Python", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
    colors: ["rgb(147,51,234)", "rgb(0,255,255)"],
  },
  {
    title: "Migración Java a Microservicios",
    desc: "Transición de monolito Java a microservicios Node.js. Seguridad con middlewares y optimización de incorporación.",
    tags: ["Privado", "Java", "Node.js", "Express", "Postman"],
    colors: ["rgb(0,255,100)", "rgb(0,100,255)"],
  },
  {
    title: "Sistema Control Educativo",
    desc: "Arquitectura por capas en Go y React. Optimización de consultas PostgreSQL mejorando carga en 20%.",
    tags: ["Privado", "Go", "React", "PostgreSQL", "Docker"],
    colors: ["rgb(255,100,0)", "rgb(255,0,200)"],
  },
  {
    title: "Estudio de Tatuajes - Reservas",
    desc: "Plataforma frontend para la gestión de reservas y portafolio. Interfaz responsiva y gestión de certificados SSL/Dominios.",
    tags: ["TypeScript", "Next.js", "React"],
    image: "/projects/tatuajes-1.png",
  },
  {
    title: "Módulo de Administración y Galería",
    desc: "Módulo administrativo para gestión de contenido dinámico y flujo de trabajo en Git/GitHub.",
    tags: ["TypeScript", "Next.js", "React"],
    image: "/projects/tatuajes-2.png",
  },
  {
    title: "Sistema de Gestión Médica",
    desc: "Sistema de gestión para consultorios. Optimización de experiencia de usuario y despliegue escalable en hosting.",
    tags: ["TypeScript", "Next.js", "React"],
    image: "/projects/consultorio-medico.png",
  },
  {
    title: "Restaurante - Menú Digital",
    desc: "Menú interactivo orientado a rendimiento. Integración de frontend moderno con arquitectura robusta.",
    tags: ["React", "Node.js", "TypeScript"],
    image: "/projects/restaurant.png",
  },
];

export default function PortfolioPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 space-y-8">
      {/* Estilos para la animación sin usar tailwind.config.js */}
      <style jsx>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-custom {
          background-size: 200% 200%;
          animation: gradient-move 6s ease infinite;
        }
      `}</style>

      <h1 className="text-4xl font-bold text-foreground">Portafolio</h1>
      <p className="text-muted-foreground max-w-2xl">
        Algunos de los proyectos en los que he trabajado como desarrollador privado y freelance.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative block rounded-xl overflow-hidden border border-border bg-card transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_25px_-8px_rgba(168,85,247,0.4)]"
          >
            <div className="relative overflow-hidden aspect-video">
              {(project as any).image ? (
                <Image
                  src={(project as any).image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="eager"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className="size-full animate-gradient-custom transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${(project as any).colors[0]}, ${(project as any).colors[1]}, ${(project as any).colors[0]})`,
                  }}
                />
              )}
            </div>

            <div className="p-5 space-y-3">
              <h2 className="font-semibold text-foreground group-hover:text-purple-400 transition-colors">
                {project.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}