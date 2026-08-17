# Els Design Core

Portfolio site for **Elza Xudiyeva** — Senior UX/UI & Motion Designer.

Built with Next.js 16, React 19, Tailwind CSS v4, Framer Motion & Lenis.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — run ESLint

## Structure

```
src/
├── app/                    # Next.js App Router (layout, page, globals)
├── components/
│   ├── sections/           # Page sections (Hero, About, Projects, ...)
│   └── shared/             # Reusable UI (Container, Panel, motion, nav)
├── constants/              # Static content (services, tools, testimonials, ...)
└── lib/                    # Motion variants, config
```
