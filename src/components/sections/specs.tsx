const rows: { label: string; value: string }[] = [
  { label: "Footprint", value: "3.2m × 1.8m (10'6\" × 5'11\")" },
  { label: "Height", value: "2.6m (8'6\")" },
  { label: "Weight", value: "215 kg / 474 lb" },
  { label: "Frame", value: "3mm wall mild steel + 304 stainless bars" },
  { label: "Bar diameter", value: "32 mm grip / 50 mm structural" },
  { label: "Static load", value: "Tested to 500 kg / 1,100 lb" },
  { label: "Finish", value: "Hot-dip galvanized + textured powder coat" },
  { label: "Anchoring", value: "8× M12 concrete anchors (kit included)" },
  { label: "Lead time", value: "3–5 weeks from order" },
  { label: "Warranty", value: "10 years structural" },
];

export function Specs() {
  return (
    <section id="specs" className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Engineering
            </div>
            <h2 className="mt-3 text-balance text-4xl md:text-5xl font-semibold tracking-tight">
              Specs that don&apos;t flex.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Every measurement is published. Every weld is logged. Download the
              full engineering pack with stress-test data and CAD files.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-sm text-accent hover:underline"
            >
              Download spec sheet (PDF)
              <span aria-hidden>↓</span>
            </a>
          </div>

          <div className="lg:col-span-2">
            <dl className="divide-y divide-border rounded-2xl border border-border bg-background overflow-hidden">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-3 gap-4 px-6 py-5"
                >
                  <dt className="col-span-1 text-xs uppercase tracking-widest text-muted-foreground self-center">
                    {row.label}
                  </dt>
                  <dd className="col-span-2 font-medium tracking-tight">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
