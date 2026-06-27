import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import FloatingOrbs from "@/components/common/FloatingOrbs";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { LanguageProvider } from "@/components/common/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miguel Angel Lopez | Ingeniero de Software Backend",
  description:
    "Ingeniero de Software Backend especializado en Golang, Python, APIs REST, microservicios y cloud (AWS). Portafolio profesional con experiencia en Appointmetly, Global Gas y proyectos freelance.",
  openGraph: {
    title: "Miguel Angel Lopez | Ingeniero de Software Backend",
    description:
      "Ingeniero de Software Backend especializado en Golang, Python, APIs REST, microservicios y cloud (AWS).",
    siteName: "Miguel Angel Lopez",
    locale: "es_MX",
    type: "website",
    images: [{ url: "https://miguellopez.dev/projects/photoofme.webp", width: 224, height: 224 }],
  },
  twitter: {
    card: "summary",
    title: "Miguel Angel Lopez | Ingeniero de Software Backend",
    description:
      "Ingeniero de Software Backend especializado en Golang, Python, APIs REST, microservicios y cloud (AWS).",
    images: ["https://miguellopez.dev/projects/photoofme.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Miguel Angel Lopez Puebla",
        givenName: "Miguel Angel",
        familyName: "Lopez Puebla",
        jobTitle: "Backend Software Engineer",
        description:
          "Ingeniero de Software Backend especializado en Golang, Python, APIs REST, microservicios y cloud (AWS).",
        url: "https://miguellopez.dev",
        email: "Miguel.Lopezp25@gmail.com",
        telephone: "+523328359296",
        image: "https://miguellopez.dev/projects/photoofme.webp",
        sameAs: [
          "https://github.com/miguellopezp25-cell",
          "https://www.linkedin.com/in/miguel-lopezp25/",
        ],
        knowsAbout: [
          "Golang",
          "Python",
          "TypeScript",
          "PostgreSQL",
          "AWS",
          "Docker",
          "Kubernetes",
          "APIs REST",
          "Microservicios",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Guadalajara",
          addressRegion: "Jalisco",
          addressCountry: "MX",
        },
      },
      {
        "@type": "WebSite",
        url: "https://miguellopez.dev",
        name: "Miguel Angel Lopez | Ingeniero de Software Backend",
        description:
          "Portafolio profesional de Miguel Angel Lopez, Ingeniero de Software Backend especializado en Golang, Python y cloud.",
        inLanguage: ["es", "en"],
      },
    ],
  }

  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                var t = localStorage.getItem("theme");
                if (t === "light") document.documentElement.classList.add("light");
              } catch(e) {}
            })()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
            <FloatingOrbs />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
