# AGENT.MD — Web Development Agent Guide

This document defines the instructions the Cursor AI agent must follow when performing web development work in this project.

> **Initial setup complete** (2026-06-13): Next.js 16, Prisma 7 + SQLite, build verified. Design is selected per task from [getdesign.md](https://getdesign.md/).

> **Global rule**: Registered in `.cursor/rules/web-development.mdc` with `alwaysApply: true`.

---

## 1. Tech Stack (required)

All web development instructions must use the stack below.

| Area | Choice | Notes |
|------|--------|-------|
| Framework | **Next.js** (App Router) | TypeScript, `src/` directory |
| Styling | **Tailwind CSS** | Integrated with `DESIGN.md` tokens |
| Local DB | **SQLite** | File-based, dev/local environments only |
| ORM | **Prisma** | Schema managed in `prisma/schema.prisma` |

### Agent behavior rules

- Use the **Next.js App Router** pattern for new pages, features, and APIs (`app/` or `src/app/`).
- Use **Prisma + SQLite** when data persistence is needed. Do not switch to other databases (PostgreSQL, MySQL, etc.).
- Access the database only through **Prisma Client** (`@/lib/prisma`). Use raw SQL only when unavoidable.
- Default to **Server Components**; split interactive parts into `"use client"` only when needed.
- Organize API routes under `src/app/api/` in a RESTful manner.

---

## 2. Design System — Selected Per Task (not fixed)

The design is **not locked to one system**. For each development topic or service type, pick and install the appropriate `DESIGN.md` from [getdesign.md](https://getdesign.md/) on demand.

### Agent behavior rules

1. Before starting web UI work, analyze the user's request and select the best-matching design.
2. If the user **explicitly specifies** a design, use that slug first. (e.g. "Stripe style", "use `linear`")
3. If unspecified, pick from the reference table below and explain the choice in one line before proceeding.
4. After selection, install `DESIGN.md` at the project root and update `globals.css`, Tailwind tokens, and existing UI to match.
5. When building UI, follow only the **currently installed `DESIGN.md`** for colors, typography, spacing, and components. No arbitrary colors or fonts.
6. To switch designs: `npx getdesign@latest add <slug> --force`

### getdesign.md design selection reference

| Development topic / service type | Suggested slug | Character |
|--------------------------------|----------------|-----------|
| AI agents, dev tools, terminal UI | `voltagent`, `cursor`, `warp` | Dark, code/terminal-native |
| SaaS dashboard, project management | `linear`, `notion`, `airtable` | Minimal, structured data UI |
| Payments, fintech | `stripe`, `wise`, `revolut` | Trust, gradients, card UI |
| E-commerce, shopping | `shopify`, `nike` | Product-first, bold typography |
| Docs, blog, content | `mintlify`, `wired`, `claude` | Reading-optimized, editorial |
| Booking, scheduling | `cal.com` | Clean neutral UI |
| Design, creative | `figma`, `framer`, `clay` | Colorful, motion-forward |
| Startup landing, marketing | `vercel`, `lovable`, `webflow` | Marketing pages, CTA-focused |

Full catalog: [getdesign.md/design-md](https://getdesign.md/design-md) · CLI list: `npx getdesign@latest list`

### Install DESIGN.md

```bash
# Replace <slug> with the selected design (e.g. stripe, linear, notion)
npx getdesign@latest add <slug> --force
```

After install, read `DESIGN.md` and map core tokens to CSS variables or Tailwind `@theme` in `globals.css`.

### Common UI rules

1. Always read the current `DESIGN.md` **before** creating or editing UI.
2. Map DESIGN.md tokens to Tailwind `theme.extend` or CSS variables.
3. Reference DESIGN.md `components` presets for buttons, cards, inputs, etc.
4. Do **not** automatically reuse design tokens from a previous task. Apply the current `DESIGN.md` each time.

---

## 3. Project Structure

```
7장_에이전트/
├── AGENT.MD          ← This document (agent instructions)
├── DESIGN.md         ← Design selected and installed per task from getdesign.md
├── .cursor/rules/
│   └── web-development.mdc  ← Global Cursor rule (alwaysApply)
├── prisma/
│   ├── schema.prisma ← DB schema
│   ├── migrations/   ← Migration history
│   └── dev.db        ← SQLite file (gitignore)
├── prisma.config.ts  ← Prisma 7 config (DATABASE_URL)
├── src/
│   ├── app/          ← Next.js App Router pages & API
│   ├── components/   ← Reusable UI components
│   └── lib/
│       └── prisma.ts ← Prisma Client singleton
├── .env              ← DATABASE_URL, etc.
└── package.json
```

---

## 4. Initial Setup (skip if already done)

### 4-1. Create Next.js project

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

### 4-2. Prisma + SQLite setup

```bash
npm install prisma @prisma/client @prisma/adapter-better-sqlite3 better-sqlite3 dotenv
npm install -D @types/better-sqlite3
npx prisma init --datasource-provider sqlite
```

`.env` file:

```env
DATABASE_URL="file:./dev.db"
```

Example `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "sqlite"
}

model Note {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

`prisma.config.ts` (Prisma 7) loads `DATABASE_URL`.

`src/lib/prisma.ts` (Prisma 7 — adapter required):

```typescript
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

function createPrismaClient() {
  const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL ?? "file:./dev.db",
  });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

Migrations:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 4-3. Install DESIGN.md (at task start)

Select a slug matching the development topic, then install:

```bash
npx getdesign@latest add <slug> --force
```

Examples:

```bash
npx getdesign@latest add stripe --force    # payment service
npx getdesign@latest add notion --force    # workspace app
npx getdesign@latest add voltagent --force # AI agent tool
```

### 4-4. Run dev server

```bash
npm run dev
```

Open `http://localhost:3000` in the browser.

---

## 5. Development Conventions

### Code style

- Keep TypeScript strict mode enabled
- Components: PascalCase (`AgentCard.tsx`)
- Utils/hooks: camelCase (`useAgent.ts`)
- API handlers: export `GET`, `POST`, `PUT`, `DELETE` from `route.ts`

### Prisma pattern

```typescript
// In Server Components / API Routes
import { prisma } from "@/lib/prisma";

const items = await prisma.example.findMany();
```

- Run `npx prisma migrate dev` after every schema change
- Add `prisma/seed.ts` when seed data is needed

### Tailwind + DESIGN.md integration

Map `colors`, `typography`, and `spacing` from the currently installed `DESIGN.md` to `@theme` or CSS variables in `globals.css`. Update hardcoded colors whenever `DESIGN.md` is replaced.

```css
/* Example — read actual values from the current DESIGN.md */
@theme inline {
  --color-primary: var(--primary);
  --color-canvas: var(--canvas);
  --color-ink: var(--ink);
}
```

---

## 6. Agent Task Checklist

When receiving a web development instruction, proceed in this order:

- [ ] Review `AGENT.MD` and the global rule
- [ ] Select and install matching `DESIGN.md` (or apply user-specified slug)
- [ ] Read `DESIGN.md` and map Tailwind/CSS tokens
- [ ] Follow Next.js App Router structure
- [ ] Add Prisma schema/migrations if DB is needed
- [ ] Split Server/Client components appropriately
- [ ] Verify no build errors with `npm run build`

---

## 7. Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server |
| `npm run build` | Production build verification |
| `npx prisma studio` | DB GUI |
| `npx prisma migrate dev` | Schema migration |
| `npx prisma generate` | Regenerate client |
| `npx getdesign add <slug> --force` | Install/replace DESIGN.md |
| `npx getdesign list` | List available designs |

---

*Last updated: 2026-06-13*
