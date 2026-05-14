"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Appointmetly - Sistema de Gestión de Citas",
    desc: "Plataforma de reservas en línea con backend en Go-Python y PostgreSQL.",
    tags: ["Go", "Python", "PostgreSQL", "Docker", "Kubernetes"],
    colors: ["rgb(147,51,234)", "rgb(0,255,255)"],
  },
  {
    title: "Migración Java a Node.js",
    desc: "Migración de monolito Java a microservicios Node.js con MySQL.",
    tags: ["Java", "Node.js", "MySQL"],
    colors: ["rgb(0,255,100)", "rgb(0,100,255)"],
  },
  {
    title: "Sistema de control de instituto educativo",
    desc: "Desarrollo de sistema de control de instituto educativo con Go, react, Docker.",
    tags: ["Go", "React", "Docker", "Infraestructura"],
    colors: ["rgb(255,100,0)", "rgb(255,0,200)"],
  },
  {
    title: "Tatuajes - Sistema de portafolio y reservas",
    desc: "Plataforma de portafolio y reservas para estudio de tatuajes con backend en Next.js.",
    tags: ["TypeScript", "Next.js", "React"],
    image: "/projects/tatuajes-1.png",
  },
  {
    title: "Tatuajes - Galería y administración",
    desc: "Módulo de galería y administración de contenido para estudio de tatuajes.",
    tags: ["TypeScript", "Next.js", "React"],
    image: "/projects/tatuajes-2.png",
  },
  {
    title: "Consultorio - Sistema de gestión de consultorio médico",
    desc: "Sistema de gestión de consultorio médico frontend en React.",
    tags: ["TypeScript", "Next.js", "React"],
    image: "/projects/consultorio-medico.png",
  },
  {
    title: "Restaurant - Menú digital",
    desc: "Menú digital interactivo para restaurante con React y Node.js.",
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