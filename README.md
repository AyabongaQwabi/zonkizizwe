# Zonkizizwe

One-page website for **Zonkizizwe – Indigenous Traditional Leaders of South Africa (NPO)**.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- next-themes (dark mode)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Features

- 10 full-width sections (Hero, About, Mission, Ploughing, Soup Kitchen, Donate, Partner, Gallery, Contact, Footer)
- Sticky navigation with smooth scrolling
- Dark mode support
- Donation UI with tier cards, recurring toggle, and payment method selection
- SEO metadata + Schema.org NonProfit JSON-LD
- WCAG-focused accessibility (skip link, focus states, reduced motion)
- Responsive mobile-first layout

## Payment Integration

The donation section UI is ready. Connect PayFast, Peach Payments, Ozow, or EFT by adding merchant credentials in `src/components/sections/Donation.tsx` or via API routes.

## Assets

Organisation images are in `public/images/`.
