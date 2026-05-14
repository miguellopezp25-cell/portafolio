import { Code, Terminal, FileCode, CodeXml, Globe, Smartphone, Laptop, Wrench, Settings } from "lucide-react";

const technologies = [
  { name: "Golang", icon: Code },
  { name: "Python", icon: Terminal },
  { name: "JavaScript", icon: FileCode },
  { name: "React", icon: CodeXml },
];

const services = [
  {
    title: "Páginas Web",
    desc: "Desarrollo de aplicaciones web completas con frontend moderno y backend robusto en Go, Python o Node.js.",
    icon: Globe,
  },
  {
    title: "Mantenimiento",
    desc: "Optimización, limpieza, formateo y actualización de equipos de cómputo para garantizar su rendimiento.",
    icon: Laptop,
  },
  {
    title: "Instalación de Apps",
    desc: "Instalación y configuración de software de desarrollo, servidores, bases de datos y herramientas profesionales.",
    icon: Settings,
  },
  {
    title: "Soporte Técnico",
    desc: "Asistencia remota y presencial en infraestructura TI: servidores, redes, despliegue de software, administración de sistemas y resolución de incidencias técnicas.",
    icon: Wrench,
  },
];

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
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div key={tech.name} className="animated-border-wrapper rounded-xl">
                <div className="animated-border-content rounded-xl flex flex-col items-center gap-3 p-6">
                  <div className="size-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <Icon size={24} />
                  </div>
                  <span className="font-semibold text-foreground">{tech.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Servicios */}
      <div className="space-y-8">
        <h2 className="text-4xl font-semibold text-foreground">Servicios</h2>
        <p className="text-muted-foreground max-w-2xl">
          Ofrezco soluciones completas para llevar tus ideas al siguiente nivel.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="animated-border-wrapper rounded-xl">
                <div className="animated-border-content rounded-xl p-6 bg-card space-y-4">
                  <div className="size-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
