# Project Context for Cursor AI Agent

## Project Overview

[AI will fill this based on what you build]

Example: SaaS dashboard for user analytics with Next.js and ShadCN/UI

## Tech Stack

### Frontend
- Next.js 15 (App Router)
- React 19 Server Components
- TypeScript (strict mode)
- ShadCN/UI components
- Tailwind CSS
- Framer Motion
- Lucide React icons

### Forms & Validation
- React Hook Form
- Zod schemas

### Backend
- Next.js API Routes
- Server Actions
- Prisma ORM (if using database)

### Deployment
- Vercel (auto-deploy on push)

## Commands

```bash
npm run dev          # Dev server (localhost:3000)
npm run build        # Production build
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

## Structure

```
app/
├── (routes)/       # Route groups
├── api/            # API routes
├── layout.tsx      
└── page.tsx        

components/
├── ui/             # ShadCN (don't modify)
└── shared/         # Custom components

lib/
├── utils.ts        # Helpers
├── db.ts           # Database (if Prisma)
└── auth.ts         # Auth (if using)

types/
└── index.ts        # TypeScript types
```

## Environment Variables

`.env.local`:
```
DATABASE_URL="..."              # If database
NEXTAUTH_SECRET="..."           # If NextAuth
NEXTAUTH_URL="http://localhost:3000"
```

## Code Style

- ShadCN/UI only
- Tailwind CSS only
- Server Components default
- TypeScript strict
- No `any` types
- No CSS files

## Don'ts

❌ Custom CSS files
❌ Inline styles
❌ Other UI libraries
❌ `any` types
❌ console.log in production
❌ Hardcoded URLs

## Current Focus

[Update as you build]

Example:
- Building auth flow
- Creating dashboard
- Setting up database

## Known Issues

[Track bugs here]

None currently.

## Next Steps

[Planned features]

- [ ] User profile page
- [ ] Settings page
- [ ] Email notifications
