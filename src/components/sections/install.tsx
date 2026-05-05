const steps = [
  {
    n: "01",
    title: "Pour or prep",
    body:
      "We ship an anchor template with your order. Drop it on a fresh slab or use existing concrete.",
  },
  {
    n: "02",
    title: "Stand the uprights",
    body:
      "Two people, four bolts each. The frame self-aligns thanks to laser-cut connector tabs.",
  },
  {
    n: "03",
    title: "Hang the bars",
    body:
      "Drop-in pull-up bar, dip bar, ladder rungs, ring straps. No threading, no pinch points.",
  },
  {
    n: "04",
    title: "Train",
    body:
      "Total install time: 90 minutes. The next 30 years are up to you.",
  },
];

export function Install() {
  return (
    <section id="install" className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Install
          </div>
          <h2 className="mt-3 text-balance text-4xl md:text-5xl font-semibold tracking-tight">
            From pallet to first pull-up in an afternoon.
          </h2>
        </div>

        <ol className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-border p-8 transition-colors hover:border-accent/40"
            >
              <div className="text-xs font-mono text-accent">{s.n}</div>
              <h3 className="mt-6 text-lg font-medium tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
