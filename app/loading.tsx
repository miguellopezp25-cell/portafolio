export default function Loading() {
  return (
    <section className="grow flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-4">
        <div className="size-8 rounded-full border-2 border-purple-500/30 border-t-purple-500 animate-spin" />
        <p className="text-sm text-muted-foreground">Cargando...</p>
      </div>
    </section>
  );
}
