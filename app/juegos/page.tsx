const games = [
  { name: "Slither.io", src: "https://slither.io" },
  { name: "Diep.io", src: "https://diep.io" },
  { name: "Wings.io", src: "https://wings.io" },
  { name: "Zombs.io", src: "https://zombs.io" },
];

export default function JuegosPage() {
  return (
    <section className="grow flex flex-col p-4">
      <div className="w-full max-w-5xl mx-auto space-y-8 py-8">
        {games.map((game) => (
          <div
            key={game.name}
            className="rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-900/20"
          >
            <div className="bg-purple-500/10 px-4 py-2 border-b border-purple-500/20">
              <h2 className="text-sm font-mono text-purple-400">{game.name}</h2>
            </div>
            <iframe
              src={game.src}
              title={game.name}
              className="w-full"
              style={{ height: "70vh" }}
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  );
}
