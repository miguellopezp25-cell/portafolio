"use client";
import { useLanguage } from "@/components/common/LanguageProvider";
import GoLink from "@/components/common/GoLink";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border bg-background transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} &mdash; Miguel |{" "}
          <span className="text-purple-500 font-mono"><GoLink text={t.footer.tagline} /></span>
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/miguellopezp25-cell"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/miguel-lopezp25/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/Miguel_Lopez_Professional_CV_en.pdf"
            download
            className="text-muted-foreground hover:text-purple-400 transition-colors"
          >
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}
