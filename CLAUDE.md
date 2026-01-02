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

- `src/app/` - Next.js App Router pages and API routes
- `src/components/` - React components (includes shadcn/ui in `/ui`)
- `src/lib/` - Utilities, API integrations (Spotify, GitHub, Unsplash), and providers
- `src/hooks/` - Custom React hooks
- `src/helpers/` - Utility functions (MDX parsing, etc.)
- `src/constants/` - Configuration constants (routes, contact info, projects)
- `src/types/` - TypeScript type definitions
- `content/snippets/` - MDX content files for code snippets

### Key Patterns

- **Server Components by default** - Use `'use client'` directive only when needed
- **shadcn/ui components** - Located in `src/components/ui/`, use Radix UI primitives
- **Styling** - Tailwind CSS with `cn()` utility from `src/lib/utils.ts` for class merging
- **Data fetching** - TanStack Query for server state, API routes proxy external services
- **Animation** - Motion library (`motion/react`)
- **Theming** - `next-themes` with CSS custom properties for dark/light modes

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
