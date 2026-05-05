import { Reveal } from "@/components/reveal";

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Lead time is 3–5 weeks from order — every rig is built to order. Shipping itself is 5–10 business days within the continental US, longer for international.",
  },
  {
    q: "What kind of foundation do I need?",
    a: "A 4-inch concrete slab is ideal, but we offer a weighted free-stand base for grass, rubber, or pavers. The anchor template ships with every order.",
  },
  {
    q: "Will it survive winter / coastal humidity?",
    a: "Yes. The frame is hot-dip galvanized before it's powder-coated, which is the same finish process used on highway infrastructure.",
  },
  {
    q: "Can I customize it?",
    a: "Mk I is a fixed configuration — that's how we keep the price reasonable and the quality high. Custom commissions are available; reach out for a quote.",
  },
  {
    q: "What's the warranty?",
    a: "10 years on the structural frame, lifetime on welds. Hardware (bolts, ring straps) is covered for 2 years.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Common questions
          </div>
          <h2 className="mt-3 text-balance text-4xl md:text-5xl font-semibold tracking-tight">
            Everything you&apos;d ask before clicking buy.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-background overflow-hidden">
            {faqs.map((f, i) => (
              <details key={i} className="group">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-medium tracking-tight">{f.q}</span>
                  <span className="text-muted-foreground transition-transform group-open:rotate-45 text-xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
