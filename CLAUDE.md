# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Jared Chen built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm lint       # Run ESLint
pnpm prettier   # Format code with Prettier
```

## Architecture

### Directory Structure

- `src/app/` - Next.js App Router pages, API routes, and providers
  - Each page has `page.tsx` (route entry) and `*.view-controller.tsx` (the page component)
  - `src/app/snippets/` pages also have async `*.view-model.ts` files for server-side MDX data fetching
  - `src/app/providers/` - TanStack Query and Theme providers
- `src/domain/` - Domain layer (business logic boundary)
  - `integrations/` - External API integrations (Spotify, GitHub, Unsplash) built on `defineEndpoint()`; `core/` holds the `defineEndpoint`/`integrationRoute` machinery
  - `services/` - MDX content service
  - `constants/` - Domain constants (routes, contact info, projects)
  - `index.ts` - Unified barrel export for the domain layer
- `src/components/` - Shared React components (includes shadcn/ui in `/ui`)
- `src/hooks/` - Custom React hooks
  - `queries/` - Centralized TanStack Query hooks (use-github-queries, use-spotify-queries, use-unsplash-queries)
- `src/lib/` - Infrastructure utilities
  - `fetcher.ts` - Thin JSON fetch wrapper used by query hooks
  - `react-query/` - Query keys and React Query configuration
  - `utils.ts` - General utilities (`cn()` for class merging)
- `src/helpers/` - Utility functions (MDX parsing, etc.)
- `src/types/` - TypeScript type definitions
- `content/snippets/` - MDX content files for code snippets

### Key Patterns

- **Integrations as deep modules** - Each external API endpoint is declared once with `defineEndpoint({ request, transform, fallback })` in `src/domain/integrations/`. Auth (including Spotify's OAuth refresh flow), status handling (204/>=400 → fallback), error swallowing, and response transforms live inside; env vars are read lazily per-call. API routes are one-liners: `export const GET = integrationRoute(endpoint)`. Endpoints accept an optional `{ fetch, env }` override so tests can inject fakes without mocking globals.
- **Adding an integration** - One file in `src/domain/integrations/`, one barrel export line, one 4-line route file under `src/app/api/`, one query key + hook on the client.
- **Server Components by default** - Use `'use client'` directive only when needed
- **shadcn/ui components** - Located in `src/components/ui/`, use Radix UI primitives
- **Styling** - Tailwind CSS with `cn()` utility from `src/lib/utils.ts` for class merging
- **Data fetching** - TanStack Query with centralized hooks in `src/hooks/queries/`, API routes proxy external services (secrets stay server-side)
- **State management** - TanStack Query for server state; no global client store
- **Animation** - Motion library (`motion/react`)
- **Theming** - `next-themes` with CSS custom properties for dark/light modes
- **Imports** - Use `@/domain` for domain layer exports rather than importing from `@/lib` directly

### Path Aliases

```typescript
@/*         → ./src/*
@/public/*  → ./public/*
@/contents/* → ./contents/*
```

## Code Style

- **Prettier**: 4-space tabs, 90 char line width, single quotes (JS), double quotes (JSX)
- **Pre-commit hooks**: Husky runs lint-staged with ESLint auto-fix

## Environment Variables

Required for API integrations (see `.env.example`):
- `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN`
- `GITHUB_READ_USER_TOKEN`
- `UNSPLASH_ACCESS_KEY`
