"use client";
import { Code, Terminal, FileCode, CodeXml, Globe, Smartphone, Laptop, Wrench, Settings, Database, Cable, Brain, Bot, Cpu, Container } from "lucide-react";
import { useInView } from "@/lib/use-in-view";
import { useLanguage } from "@/components/common/LanguageProvider";

const iconMap: Record<string, typeof Code> = {
  Golang: Code,
  Python: Terminal,
  JavaScript: FileCode,
  React: CodeXml,
  Globe, Smartphone, Laptop, Wrench, Settings, Database, Cable, Brain, Bot, Cpu, Container,
};

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
  const { t } = useLanguage();

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 space-y-20">
      <div className="space-y-8">
        <h1 className="text-4xl font-semibold text-foreground">{t.services.title}</h1>
        <p className="text-muted-foreground max-w-2xl">{t.services.description}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.services.technologies.map((tech, i) => {
            const Icon = iconMap[tech.name] || Code;
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

      <div className="space-y-8">
        <h2 className="text-4xl font-semibold text-foreground">{t.services.subTitle}</h2>
        <p className="text-muted-foreground max-w-2xl">{t.services.subDescription}</p>
      </div>

      {t.services.categories.map((category) => (
        <div key={category.title} className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
            <p className="text-muted-foreground text-sm">{category.description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.services.map((service, i) => {
              const Icon = iconMap[service.title] || Globe;
              return (
                <FadeInSection key={service.title} delay={i * 100}>
                  <div className="animated-border-wrapper rounded-xl">
                    <div className="animated-border-content rounded-xl p-6 bg-card space-y-4">
                      <div className="size-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                        <Icon size={20} />
                      </div>
                      <h4 className="font-semibold text-foreground">{service.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
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
