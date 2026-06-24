"use client";

export default function GoLink({ text }: { text: string }) {
  const parts = text.split(/(\bGo\b)/g);
  return (
    <>
      {parts.map((part, i) =>
        part === "Go" ? (
          <a
            key={i}
            href="https://go.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-purple-500/50 underline-offset-2 hover:decoration-purple-400 transition-colors"
          >
            Go
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}
