"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/reveal";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 0%, rgba(212,255,58,0.10) 0%, rgba(212,255,58,0) 60%), linear-gradient(180deg, #0a0a0b 0%, #0a0a0b 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left — copy */}
        <div className="flex flex-col items-start gap-6 max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/40 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Hand-welded · Ships worldwide
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-balance text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
              A backyard gym
              <br />
              <span className="text-muted-foreground">built like</span>{" "}
              <span className="text-accent">infrastructure.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-pretty max-w-xl text-lg text-muted-foreground">
              One rig. Pull-ups, dips, muscle-ups, levers, rings, parallettes.
              Engineered to outlast the slab it&apos;s anchored to.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#product"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                See the rig
                <span aria-hidden>→</span>
              </a>
              <a
                href="#specs"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Specs &amp; dimensions
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-2xl">
              <Stat label="Steel gauge" value="3mm" />
              <Stat label="Load tested" value="500kg" />
              <Stat label="Coatings" value="Powder + Zn" />
              <Stat label="Warranty" value="10 yr" />
            </div>
          </Reveal>
        </div>

        {/* Right — photo with parallax */}
        <Reveal delay={0.1} className="relative">
          <motion.div
            style={{ y, scale }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-muted"
          >
            <Image
              src="/product/hero.png"
              alt="Wolf's Fabrications calisthenics rig in a backyard, daytime"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-semibold tracking-tight">
        {value}
      </div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
