export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden />
            Wolf&apos;s Fabrications
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Hand-welded calisthenics rigs, shipped flat-pack and built to outlast
            the warranty by decades.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Product</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#product" className="hover:text-accent">The Rig</a></li>
            <li><a href="#specs" className="hover:text-accent">Specs</a></li>
            <li><a href="#install" className="hover:text-accent">Install</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:text-accent">Contact</a></li>
            <li><a href="#" className="hover:text-accent">Shipping</a></li>
            <li><a href="#" className="hover:text-accent">Warranty</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Wolf&apos;s Fabrications. All rights reserved.</span>
          <span>Built to last. Made by hand.</span>
        </div>
      </div>
    </footer>
  );
}
