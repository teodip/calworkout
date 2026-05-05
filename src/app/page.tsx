import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Product } from "@/components/sections/product";
import { Specs } from "@/components/sections/specs";
import { Install } from "@/components/sections/install";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <Product />
        <Specs />
        <Install />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
