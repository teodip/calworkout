# Wolf's Fabrications Gym

Marketing + commerce site for the Wolf's Fabrications prefabricated calisthenics rig.

Stack: **Next.js 16** (App Router, Turbopack) · **Tailwind v4** · **Supabase** · **TypeScript**.
Deployed on Vercel; data on Supabase; payments to be added (Stripe).

## Getting started

```bash
# 1. Install deps
npm install

# 2. Copy env template and fill in real values
cp .env.example .env.local
# then edit .env.local — Supabase URL/anon key from your Supabase project's API settings

# 3. Dev server
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  app/                # Next.js App Router (layout, page, globals.css)
  components/
    site-header.tsx   # Sticky nav
    site-footer.tsx
    sections/         # Homepage sections (hero, features, product, specs, install, faq, cta)
  lib/
    utils.ts          # cn() Tailwind class merger
    supabase/
      client.ts       # Browser Supabase client
      server.ts       # Server-side Supabase client (cookies-aware)
```

## Environment variables

See `.env.example`. Production values live in Vercel → Project → Settings → Environment Variables.

| Variable | Where it's used |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Both clients |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Both clients |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only admin operations |
| `STRIPE_*` / `NEXT_PUBLIC_STRIPE_*` | Checkout (later) |
| `RESEND_API_KEY` | Transactional email (later) |
| `NEXT_PUBLIC_SITE_URL` | OG metadata, absolute URLs |

## Roadmap

- [x] Landing page (hero, features, product, specs, install, FAQ, CTA, footer)
- [ ] Product photography swap-in (placeholders currently)
- [ ] Stripe checkout
- [ ] Order confirmation email (Resend)
- [ ] Customer dashboard (order history, install support)
- [ ] CMS-backed content (Sanity or Supabase)

## Deploy

Pushing to `main` auto-deploys to Vercel. Add the `NEXT_PUBLIC_SUPABASE_*` env vars in Vercel before the next push or the live site will 500 on any Supabase call.
