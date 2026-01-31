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

The project follows **Clean Architecture** with **MVVM (Model-View-ViewModel)** pattern.

### Directory Structure

- `src/app/` - Next.js App Router pages, API routes, and providers
  - Each page has `page.tsx` (view), `*.view-controller.tsx` (UI logic), and `*.view-model.ts` (state/business logic)
  - `src/app/providers/` - TanStack Query and Theme providers
- `src/domain/` - Domain layer (business logic boundary)
  - `repositories/` - Data access layer (GitHub, Spotify, Unsplash API clients)
  - `services/` - Business logic services (github, spotify, unsplash, mdx)
  - `constants/` - Domain constants (routes, contact info, projects)
  - `index.ts` - Unified barrel export for the domain layer
- `src/components/` - Shared React components (includes shadcn/ui in `/ui`)
- `src/hooks/` - Custom React hooks
  - `queries/` - Centralized TanStack Query hooks (use-github-queries, use-spotify-queries, use-unsplash-queries)
- `src/store/` - Zustand global state management
  - `slices/` - State slices (ui.slice.ts)
- `src/lib/` - Infrastructure utilities
  - `http-client/` - HTTP client abstraction
  - `react-query/` - Query keys and React Query configuration
  - `utils.ts` - General utilities (`cn()` for class merging)
- `src/utils/` - Framework utilities (`bind.tsx` for MVVM binding)
- `src/helpers/` - Utility functions (MDX parsing, etc.)
- `src/types/` - TypeScript type definitions
- `content/snippets/` - MDX content files for code snippets

### Key Patterns

- **Clean Architecture** - Domain layer (`src/domain/`) separates business logic from UI; repositories handle data access, services orchestrate logic
- **MVVM** - Pages use view-controllers for UI logic and view-models for state; connected via `bind()` utility
- **Server Components by default** - Use `'use client'` directive only when needed
- **shadcn/ui components** - Located in `src/components/ui/`, use Radix UI primitives
- **Styling** - Tailwind CSS with `cn()` utility from `src/lib/utils.ts` for class merging
- **Data fetching** - TanStack Query with centralized hooks in `src/hooks/queries/`, API routes proxy external services
- **State management** - Zustand for global UI state, TanStack Query for server state
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
