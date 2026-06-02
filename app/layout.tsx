import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

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
    url: "https://mlopezdev.netlify.app/",
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
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
          <div className="fixed top-[-10%] left-[-10%] w-[40%] aspect-square rounded-full bg-purple-900/20 blur-[120px] -z-10" />
          <div className="fixed bottom-[-10%] right-[-10%] w-[30%] aspect-square rounded-full bg-blue-900/10 blur-[120px] -z-10" />
        </ThemeProvider>
      </body>
    </html>
  );
}