"use client";
import Image from "next/image";
import { Phone, MapPin, GraduationCap, BadgeCheck, Heart, Sparkles, Mail, Calendar, ChevronRight } from "lucide-react";
import { useInView } from "@/lib/use-in-view";

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 space-y-16">

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        <div className="shrink-0">
          <div className="size-56 rounded-2xl border-2 border-border bg-card overflow-hidden">
            <Image
              src="/projects/photoofme.png"
              alt="Foto de Miguel"
              width={224}
              height={224}
              className="size-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-semibold text-foreground">
            Miguel Angel Lopez Puebla
          </h1>
          <p className="text-lg text-purple-400 font-medium">
            Ingeniero de Software Backend — Desarrollo Cloud y APIs
          </p>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Ingeniero de Software con experiencia en desarrollo backend utilizando
              Golang, Python, PostgreSQL y tecnologías cloud. Especializado en desarrollo
              de APIs REST, optimización de bases de datos, arquitecturas modulares,
              testing automatizado y despliegues escalables en la nube. Enfocado en
              mantenibilidad, calidad de software y optimización de rendimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-card text-muted-foreground text-sm transition-all duration-300 hover:scale-[1.03] hover:border-purple-500/50 hover:shadow-md">
              <MapPin size={16} className="text-purple-400 shrink-0" />
              Guadalajara, Jalisco, México
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-card text-muted-foreground text-sm transition-all duration-300 hover:scale-[1.03] hover:border-purple-500/50 hover:shadow-md">
              <GraduationCap size={16} className="text-purple-400 shrink-0" />
              Tecnológico Superior de Jalisco — Ing. Sistemas Computacionales
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-card text-muted-foreground text-sm transition-all duration-300 hover:scale-[1.03] hover:border-purple-500/50 hover:shadow-md">
              <BadgeCheck size={16} className="text-purple-400 shrink-0" />
              Cédula Profesional 15228724
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-card text-muted-foreground text-sm transition-all duration-300 hover:scale-[1.03] hover:border-purple-500/50 hover:shadow-md">
              <Sparkles size={16} className="text-purple-400 shrink-0" />
              Autodidacta, honesto, comprometido, responsable
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-card text-muted-foreground text-sm transition-all duration-300 hover:scale-[1.03] hover:border-purple-500/50 hover:shadow-md sm:col-span-2">
              <Heart size={16} className="text-purple-400 shrink-0" />
              Criador de serpientes y hormigas, tecnología, lectura
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="mailto:Miguel.Lopezp25@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-muted-foreground hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300 text-sm">
              <Mail size={16} />
              Miguel.Lopezp25@gmail.com
            </a>
            <a href="tel:523328359296" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-muted-foreground hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300 text-sm">
              <Phone size={16} />
              +52 33 2835 9296
            </a>
            <a href="https://github.com/miguellopezp25-cell" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-muted-foreground hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300 text-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/miguel-lopezp25/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-muted-foreground hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300 text-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Experiencia Profesional */}
      <FadeInSection>
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold text-foreground">Experiencia Profesional</h2>

        <div className="space-y-8">
          {/* Appointmetly */}
          <div className="border-l-2 border-purple-500/30 pl-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-xl font-semibold text-foreground">Appointmetly — Desarrollador Backend (Golang/Python)</h3>
              <span className="text-sm text-muted-foreground flex items-center gap-1"><Calendar size={14} /> Feb 2024 – Mar 2026</span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-400 shrink-0 mt-0.5" />Lideré el diseño y desarrollo de más de 30 APIs REST utilizando arquitectura backend modular.</li>
              <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-400 shrink-0 mt-0.5" />Desarrollé y mantuve microservicios backend utilizando Golang, Python, SQLC y PostgreSQL.</li>
              <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-400 shrink-0 mt-0.5" />Optimicé consultas SQL complejas y estructuras JSONB para mejorar el rendimiento.</li>
              <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-400 shrink-0 mt-0.5" />Alcancé una cobertura de testing automatizado superior al 95% utilizando Testify y SQLMock.</li>
              <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-400 shrink-0 mt-0.5" />Gestioné despliegues cloud utilizando AWS EC2, S3 y Lambda con Docker y Kubernetes.</li>
              <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-400 shrink-0 mt-0.5" />Integré soluciones de monitoreo y observabilidad utilizando Prometheus y Loki.</li>
            </ul>
          </div>

          {/* Global Gas */}
          <div className="border-l-2 border-purple-500/30 pl-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-xl font-semibold text-foreground">Global Gas — Desarrollador Web</h3>
              <span className="text-sm text-muted-foreground flex items-center gap-1"><Calendar size={14} /> Jun 2023 – Feb 2024</span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-400 shrink-0 mt-0.5" />Colaboré en la migración de un monolito en Java hacia una arquitectura de microservicios en Node.js.</li>
              <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-400 shrink-0 mt-0.5" />Desarrollé middlewares de autenticación y manejo de errores para APIs backend.</li>
              <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-400 shrink-0 mt-0.5" />Mejoré procesos de documentación técnica y onboarding utilizando Postman.</li>
              <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-400 shrink-0 mt-0.5" />Participé en análisis de requerimientos técnicos y mejoras de servicios backend.</li>
              <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-400 shrink-0 mt-0.5" />Trabajé en el mantenimiento y optimización de un sistema monolítico basado en Java antes de su migración a microservicios.</li>
            </ul>
          </div>

          {/* Freelance */}
          <div className="border-l-2 border-purple-500/30 pl-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-xl font-semibold text-foreground">Freelance — Desarrollador Full Stack</h3>
              <span className="text-sm text-muted-foreground flex items-center gap-1"><Calendar size={14} /> 2024 – Presente</span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-400 shrink-0 mt-0.5" />Desarrollé aplicaciones web full stack utilizando React/Next.js y backends en Golang.</li>
              <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-400 shrink-0 mt-0.5" />Implementé APIs REST y lógica de negocio backend utilizando Golang y PostgreSQL.</li>
              <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-400 shrink-0 mt-0.5" />Diseñé arquitecturas escalables por capas utilizando handlers, services y repositories.</li>
              <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-400 shrink-0 mt-0.5" />Optimicé estructuras relacionales en PostgreSQL y rendimiento de consultas SQL.</li>
              <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-400 shrink-0 mt-0.5" />Configuré hosting, certificados SSL y entornos de despliegue.</li>
            </ul>
          </div>
        </div>
      </div>

      </FadeInSection>

      {/* Habilidades Técnicas */}
      <FadeInSection>
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-foreground">Habilidades Técnicas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SkillCategory title="Lenguajes" skills="Golang, TypeScript, Python, Java" />
          <SkillCategory title="Backend" skills="APIs REST, SQLC, Microservicios, Arquitectura Modular" />
          <SkillCategory title="Bases de Datos" skills="SQL, PostgreSQL, JSONB, Optimización de Consultas" />
          <SkillCategory title="Cloud & DevOps" skills="AWS (EC2, S3, Lambda), Docker, Kubernetes, CI/CD" />
          <SkillCategory title="Testing" skills="Testify, SQLMock, Unit Testing, Cobertura +95%" />
          <SkillCategory title="Monitoreo" skills="Prometheus, Loki" />
          <SkillCategory title="Frontend & Web" skills="React, Next.js" />
          <SkillCategory title="Herramientas" skills="Git, GitHub, Postman, Beaver" />
          <SkillCategory title="Idiomas" skills="Español (Nativo), Inglés (B2)" />
          <SkillCategory title="IA y Productividad" skills="Claude Code, Cursor, GitHub Copilot, ChatGPT, debugging asistido por IA" />
        </div>
      </div>

      </FadeInSection>

      {/* Educación */}
      <FadeInSection>
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-foreground">Educación</h2>
        <div className="border-l-2 border-purple-500/30 pl-6 space-y-2">
          <h3 className="text-xl font-semibold text-foreground">Tecnológico Superior de Jalisco</h3>
          <p className="text-muted-foreground">Ingeniería en Sistemas Computacionales — 2019 – 2023</p>
          <p className="text-sm text-muted-foreground flex items-center gap-2"><BadgeCheck size={14} className="text-purple-400" /> Cédula Profesional: 15228724</p>
        </div>
      </div>
      </FadeInSection>

    </section>
  );
}

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

function SkillCategory({ title, skills }: { title: string; skills: string }) {
  return (
    <div className="px-4 py-3 rounded-xl border border-border bg-card transition-all duration-300 hover:border-purple-500/50 hover:shadow-md">
      <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
      <p className="text-sm text-muted-foreground">{skills}</p>
    </div>
  );
}
