import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";

const includes = [
  "Multi-grip pull-up bar (straight + neutral)",
  "Dip station (parallel bars)",
  "Vertical climbing ladder",
  "Adjustable Swedish-ladder face",
  "Olympic gymnastic rings + straps",
  "Resistance band anchor points",
  "Hardware kit + anchor template",
  "Install guide + lifetime support",
];

export function Product() {
  return (
    <section id="product" className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Visual */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src="/product/dusk.png"
              alt="Wolf's Fabrications rig at golden hour with mountain backdrop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent"
            />
            <div className="absolute left-6 bottom-6 right-6 flex items-end justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Model
                </div>
                <div className="text-2xl font-semibold tracking-tight">
                  Wolf · Mk I
                </div>
              </div>
              <div className="text-xs text-muted-foreground text-right">
                Ø 50mm
                <br />
                304 stainless / mild steel
              </div>
            </div>
          </div>
        </Reveal>

        {/* Detail */}
        <div>
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Wolf&apos;s Fabrications · Mk I
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-balance text-4xl md:text-5xl font-semibold tracking-tight">
              The only home gym
              <br />
              you&apos;ll ever need.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-muted-foreground max-w-lg">
              Designed around the full bodyweight skill tree — from your first
              pull-up to one-arm levers. Every grip, every angle, every height
              you&apos;ll grow into.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check
                    className="mt-0.5 h-4 w-4 flex-none text-accent"
                    strokeWidth={2.5}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex items-end justify-between gap-6 rounded-2xl border border-border p-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Starting at
                </div>
                <div className="mt-1 text-3xl font-semibold tracking-tight">
                  $2,490
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Free shipping in continental US
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Reserve yours
                <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
