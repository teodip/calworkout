import { Hammer, Truck, ShieldCheck, Wrench } from "lucide-react";

const features = [
  {
    icon: Hammer,
    title: "Welded, not bolted-into-shape",
    body:
      "Every joint is TIG-welded by hand in our shop. No flimsy clamp connectors, no rattle, no flex.",
  },
  {
    icon: Truck,
    title: "Ships flat — assembles fast",
    body:
      "Modular uprights and beams arrive on a single pallet. Two people. One afternoon. One rig for life.",
  },
  {
    icon: ShieldCheck,
    title: "Outdoor-rated finish",
    body:
      "Hot-dip galvanized base + textured powder coat. Engineered for sun, snow, salt and sweat.",
  },
  {
    icon: Wrench,
    title: "Anchor or free-stand",
    body:
      "Concrete-anchor or weighted base configurations. Drop it on a slab or set it in your yard.",
  },
];

export function Features() {
  return (
    <section className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-balance text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            One purchase. A lifetime of training.
          </h2>
          <p className="max-w-md text-muted-foreground">
            We build one product, and we build it the way it should be built. No
            seasonal SKUs, no plastic, no compromise.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-background p-8 transition-colors hover:bg-muted/40"
            >
              <f.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <h3 className="mt-6 text-lg font-medium tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
