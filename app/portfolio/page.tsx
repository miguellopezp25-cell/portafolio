"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useInView } from "@/lib/use-in-view";
import { useLanguage } from "@/components/common/LanguageProvider";
import { ExternalLink } from "lucide-react";

interface ProjectLink {
  label: string;
  url: string;
  icon: "demo" | "github";
}

interface Project {
  title: string;
  desc: string;
  tags: string[];
  links?: ProjectLink[];
  image?: string;
  colors?: [string, string];
}

const repoLink = { label: "Código fuente", url: "https://github.com/miguellopezp25-cell/portafolio", icon: "github" as const };

const projectMeta: (Pick<Project, "links" | "image" | "colors">)[] = [
  { links: [{ label: "Código fuente", url: "https://github.com/miguellopezp25-cell", icon: "github" }], colors: ["rgb(147,51,234)", "rgb(0,255,255)"] },
  { colors: ["rgb(0,255,100)", "rgb(0,100,255)"] },
  { colors: ["rgb(255,100,0)", "rgb(255,0,200)"] },
  { links: [{ label: "Demo", url: "https://tattosale1.netlify.app", icon: "demo" }], image: "/projects/tatuajes-1.webp" },
  { image: "/projects/tatuajes-2.webp" },
  { image: "/projects/consultorio-medico.webp" },
  { image: "/projects/semillas.webp" },
  { image: "/projects/restaurant.webp" },
  { links: [repoLink], image: "/projects/portfolio.webp" },
  { links: [{ label: "Código fuente", url: "https://github.com/miguellopezp25-cell/crypto-tracker-go-react", icon: "github" }], colors: ["rgb(255, 200, 0)", "rgb(0, 200, 255)"] },
];

function FadeInCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        translate: inView ? "0 0" : "0 40px",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function PortfolioPage() {
  const { t } = useLanguage();
  const projects: Project[] = t.portfolio.projects.map((p, i) => ({
    ...p,
    ...projectMeta[i],
  }));

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 space-y-8">
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

      <h1 className="text-4xl font-bold text-foreground">{t.portfolio.title}</h1>
      <p className="text-muted-foreground max-w-2xl">{t.portfolio.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <FadeInCard key={i} delay={i * 100}>
          <div className="group relative block rounded-xl overflow-hidden border border-border bg-card transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_25px_-8px_rgba(168,85,247,0.4)] flex flex-col">
            <div className="relative overflow-hidden aspect-video">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className="size-full animate-gradient-custom transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${project.colors![0]}, ${project.colors![1]}, ${project.colors![0]})`,
                  }}
                />
              )}
            </div>

            <div className="p-5 space-y-3 flex flex-col flex-1">
              <h2 className="font-semibold text-foreground group-hover:text-purple-400 transition-colors">{project.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
              {project.links && project.links.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-1.5 text-xs border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
                        {link.icon === "demo" ? <ExternalLink size={14} /> : (
                          <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/></svg>
                        )}
                        {link.label}
                      </Button>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
          </FadeInCard>
        ))}
      </div>
    </section>
  );
}
