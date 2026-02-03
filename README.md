# IRISI Fashion

A luxury e-commerce experience inspired by Aimé Leon Dore. Built with Next.js 16, featuring cinematic intro animations, smooth curtain reveals, and immersive audio design. Where timeless elegance meets modern web craft.

---

## Features

- **Cinematic Intro Loader** — Multi-phase entrance with elegant text animations and dual-curtain reveal
- **Immersive Audio Design** — Netflix-style jingle, cinematic sounds, and tactile click feedback
- **Product Catalog** — 100+ curated fashion items across multiple categories
- **Shopping Cart** — Persistent cart with Zustand state management
- **Responsive Design** — Seamless experience across all devices
- **Smooth Animations** — Framer Motion powered transitions throughout

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React framework with App Router |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first styling |
| Zustand | Lightweight state management |
| Framer Motion | Animation library |
| Lucide React | Icon system |

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/irisi-fashion.git

# Navigate to project directory
cd irisi-fashion

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── product/[id]/     # Dynamic product pages
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── IntroLoader.tsx   # Cinematic intro animation
│   ├── Navbar.tsx        # Navigation with scroll effects
│   ├── CartSidebar.tsx   # Shopping cart drawer
│   └── ProductCard.tsx   # Product display card
├── data/                 # Static data
│   └── products.ts       # Product catalog
├── hooks/                # Custom React hooks
│   └── useClickSound.ts  # Audio feedback hook
└── store/                # State management
    └── cartStore.ts      # Cart state with persistence
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Design Inspiration

This project draws inspiration from [Aimé Leon Dore](https://www.aimeleondore.com/), known for its refined aesthetic that blends classic menswear with contemporary streetwear. The design emphasizes minimalism, premium typography, and thoughtful micro-interactions.

---

## License

MIT License

---

## Author

Built with care for the love of beautiful web experiences.
