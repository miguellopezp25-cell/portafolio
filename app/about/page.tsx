import { Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        <div className="shrink-0">
          <div className="size-56 rounded-2xl border-2 border-border bg-muted flex items-center justify-center overflow-hidden">
            <div className="size-24 text-muted-foreground/40">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-semibold text-foreground">
            Sobre Mí
          </h1>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Ingeniero en Sistemas Computacionales con más de 3 años de
              experiencia especializado en el desarrollo de sistemas backend
              escalables y de alto rendimiento. Experto en Golang, Python y
              arquitecturas de microservicios, con un fuerte enfoque en la
              construcción modular de APIs y calidad de código, manteniendo
              coberturas de testing superiores al 95%.
            </p>
            <p>
              Cuento con experiencia sólida en infraestructura Cloud (AWS) y
              orquestación con Docker y Kubernetes para garantizar despliegues
              robustos y monitoreados.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Contacto
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/miguellopezp25-cell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-muted-foreground hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300 text-sm"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/miguel-lopezp25/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-muted-foreground hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300 text-sm"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11。452zM22。225 0H1。771C。792 0 0 .774 0 1。729v20。542C0 23。227 .79２ ２４ １。７７１ ２４h２０。４５１C２３。２ ２４ ２４ ２３。２２７ ２４ ２２。２７１V１。７２９C２４ .774 ２３。２ ０ ２２。２２２ ０h。００３z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="tel:3328359296"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-muted-foreground hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300 text-sm"
              >
                <Phone size={18} />
                33 2835 9296
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
