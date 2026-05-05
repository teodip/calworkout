import Link from "next/link";

const links = [
  { href: "#product", label: "The Rig" },
  { href: "#specs", label: "Specs" },
  { href: "#install", label: "Install" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span
            className="inline-block h-2 w-2 rounded-full bg-accent"
            aria-hidden
          />
          <span>Wolf&apos;s Fabrications</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#product"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Order
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
