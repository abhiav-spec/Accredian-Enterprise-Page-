# Accredian Enterprise Page

A modern, responsive landing page built with Next.js, React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Functional components with React Hooks

## Project Structure

```
accredian-enterprise-page/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Navbar + Footer wrapper)
│   ├── page.tsx                  # Landing page
│   ├── globals.css               # Global styles
│   │
│   ├── api/                      # Backend routes (MANDATORY)
│   │   └── leads/
│   │       └── route.ts          # POST API for form submission
│   │
│   └── components/               # Reusable UI components
│       ├── layout/
│       │   ├── Navbar.tsx
│       │   └── Footer.tsx
│       │
│       ├── sections/             # Page sections
│       │   ├── Hero.tsx
│       │   ├── Logos.tsx
│       │   ├── Features.tsx
│       │   ├── Stats.tsx
│       │   ├── Programs.tsx
│       │   ├── Benefits.tsx
│       │   └── CTA.tsx
│       │
│       ├── ui/                   # Small reusable components
│       │   ├── Button.tsx
│       │   ├── Card.tsx
│       │   └── Container.tsx
│       │
│       └── forms/
│           └── LeadForm.tsx      # Lead form component
│
├── lib/                          # Logic & helpers
│   ├── constants.ts              # Static content (texts, headings)
│   ├── data.ts                   # Features, stats, etc.
│   └── utils.ts                  # Helper functions
│
├── hooks/                        # Custom hooks
│   └── useScroll.ts
│
├── public/                       # Static assets
│   ├── images/
│   │   ├── logos/
│   │   ├── icons/
│   │   └── hero/
│   └── favicon.ico
│
├── styles/                       # Additional styling
│   └── tailwind.css
│
├── types/                        # TypeScript types
│   └── index.ts
│
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in the browser.

### Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Key Features

- ⚡ Next.js App Router
- 🎨 Tailwind CSS for styling
- 🔷 TypeScript for type safety
- ⚙️ Functional components with React Hooks
- 📱 Responsive design
- 🔌 API routes for form submissions
- 🎯 SEO optimized
- ♻️ Reusable component architecture

## Development Guidelines

### Component Structure
- Place reusable UI components in `app/components/ui/`
- Place page sections in `app/components/sections/`
- Place layout components in `app/components/layout/`
- Use TypeScript interfaces for component props

### Styling
- Use Tailwind CSS utility classes
- Avoid inline styles
- Use CSS modules if needed for complex styling

### Custom Hooks
- Store reusable logic in `hooks/`
- Name hooks with `use` prefix

### Types
- Define shared TypeScript types in `types/index.ts`

## API Routes

### Lead Submission
- **Endpoint**: `/api/leads`
- **Method**: `POST`
- **Purpose**: Handle lead form submissions

## Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Add your environment variables here
```

## License

[Add license information]
