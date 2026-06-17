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
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
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
