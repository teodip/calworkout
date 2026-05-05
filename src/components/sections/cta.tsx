import { Reveal } from "@/components/reveal";

export function Cta() {
  return (
    <section className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/30 p-10 md:p-16">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(50% 60% at 100% 0%, rgba(212,255,58,0.18), transparent 60%), radial-gradient(40% 50% at 0% 100%, rgba(212,255,58,0.10), transparent 60%)",
              }}
            />
            <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-balance text-4xl md:text-6xl font-semibold tracking-tight">
                  Stop renting a gym.
                  <br />
                  <span className="text-accent">
                    Build one that outlives you.
                  </span>
                </h2>
                <p className="mt-6 text-muted-foreground max-w-lg">
                  Limited production. Each rig is hand-welded in our shop and
                  inspected before it ships. Reserve a slot in this
                  quarter&apos;s build.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Reserve yours
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted"
                >
                  Book a call
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
