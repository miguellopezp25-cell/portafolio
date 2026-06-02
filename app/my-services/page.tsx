"use client";
import { Code, Terminal, FileCode, CodeXml, Globe, Smartphone, Laptop, Wrench, Settings, Database, Cable, Brain, Bot, Cpu, Container } from "lucide-react";
import { useInView } from "@/lib/use-in-view";

const technologies = [
  { name: "Golang", icon: Code },
  { name: "Python", icon: Terminal },
  { name: "JavaScript", icon: FileCode },
  { name: "React", icon: CodeXml },
];

interface ServiceItem {
  title: string;
  desc: string;
  icon: typeof Globe;
}

interface ServiceCategory {
  title: string;
  description: string;
  services: ServiceItem[];
}

const categories: ServiceCategory[] = [
  {
    title: "Frontend",
    description: "Interfaces modernas, responsivas y de alto rendimiento.",
    services: [
      {
        title: "Desarrollo Web",
        desc: "Aplicaciones web con React, Next.js y Tailwind CSS. Interfaces rápidas, accesibles y atractivas.",
        icon: Globe,
      },
      {
        title: "Diseño UI/UX",
        desc: "Diseño de interfaces centradas en el usuario, responsivas y optimizadas para cualquier dispositivo.",
        icon: Smartphone,
      },
    ],
  },
  {
    title: "Backend",
    description: "APIs robustas, microservicios y gestión de datos escalables.",
    services: [
      {
        title: "APIs y Microservicios",
        desc: "Desarrollo de APIs REST y microservicios escalables en Go, Python y Node.js.",
        icon: Code,
      },
      {
        title: "Bases de Datos",
        desc: "Diseño, implementación y optimización de bases de datos relacionales y NoSQL.",
        icon: Database,
      },
      {
        title: "Contenedores y Orquestación",
        desc: "Containerización con Docker y orquestación con Kubernetes para despliegues escalables, portables y eficientes.",
        icon: Container,
      },
    ],
  },
  {
    title: "Infraestructura",
    description: "Instalación, cableado y mantenimiento de servidores y equipos de cómputo.",
    services: [
      {
        title: "Instalación y Cableado de Servidores",
        desc: "Montaje de racks, cableado estructurado, configuración de redes y puesta en marcha de servidores físicos.",
        icon: Cable,
      },
      {
        title: "Mantenimiento de Equipos",
        desc: "Optimización, limpieza, formateo y actualización de equipos de cómputo para garantizar su rendimiento.",
        icon: Laptop,
      },
      {
        title: "Instalación de Software",
        desc: "Instalación y configuración de software de desarrollo, servidores, bases de datos y herramientas profesionales.",
        icon: Settings,
      },
      {
        title: "Soporte Técnico",
        desc: "Asistencia remota y presencial en infraestructura TI: redes, despliegue de software, administración de sistemas y resolución de incidencias técnicas.",
        icon: Wrench,
      },
    ],
  },
  {
    title: "Inteligencia Artificial",
    description: "Integración de servicios de IA y automatización inteligente.",
    services: [
      {
        title: "Integración de APIs de IA",
        desc: "Conexión con OpenAI, Google AI, Claude y otras plataformas para potenciar tus aplicaciones con inteligencia artificial.",
        icon: Brain,
      },
      {
        title: "Automatización Inteligente",
        desc: "Procesos automatizados con IA: análisis de datos, generación de contenido y toma de decisiones.",
        icon: Bot,
      },
      {
        title: "Chatbots y Asistentes",
        desc: "Desarrollo de chatbots y asistentes virtuales con procesamiento de lenguaje natural.",
        icon: Cpu,
      },
    ],
  },
];

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        translate: inView ? "0 0" : "0 30px",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 space-y-20">
      {/* Tecnologías */}
      <div className="space-y-8">
        <h1 className="text-4xl font-semibold text-foreground">Tecnologías</h1>
        <p className="text-muted-foreground max-w-2xl">
          Estas son algunas de las tecnologías con las que trabajo para
          construir soluciones robustas y escalables.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <FadeInSection key={tech.name} delay={i * 100}>
                <div className="animated-border-wrapper rounded-xl">
                  <div className="animated-border-content rounded-xl flex flex-col items-center gap-3 p-6">
                    <div className="size-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                      <Icon size={24} />
                    </div>
                    <span className="font-semibold text-foreground">{tech.name}</span>
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>

      {/* Servicios por categorías */}
      <div className="space-y-8">
        <h2 className="text-4xl font-semibold text-foreground">Servicios</h2>
        <p className="text-muted-foreground max-w-2xl">
          Ofrezco soluciones completas para llevar tus ideas al siguiente nivel,
          desde el frontend hasta la infraestructura y la inteligencia artificial.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category.title} className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
            <p className="text-muted-foreground text-sm">{category.description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.services.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeInSection key={service.title} delay={i * 100}>
                  <div className="animated-border-wrapper rounded-xl">
                    <div className="animated-border-content rounded-xl p-6 bg-card space-y-4">
                      <div className="size-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                        <Icon size={20} />
                      </div>
                      <h4 className="font-semibold text-foreground">{service.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
