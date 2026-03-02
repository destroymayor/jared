[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdestroymayor%2Fjared)

# jared-chen.me

Personal portfolio website for Jared Chen.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Animation**: [Motion](https://motion.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## Architecture

Clean Architecture with MVVM pattern:

- `src/app/` — Next.js pages, API routes, providers
- `src/domain/` — Business logic (repositories, services, constants)
- `src/components/` — Shared React components
- `src/hooks/queries/` — Centralized TanStack Query hooks
- `src/store/` — Zustand global state

## Running Locally

```bash
git clone https://github.com/destroymayor/jared.git
cd jared
pnpm install
pnpm dev
```

Create a `.env` file based on `.env.example`:

```
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
GITHUB_READ_USER_TOKEN=
UNSPLASH_ACCESS_KEY=
```

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm lint       # Run ESLint
pnpm prettier   # Format code
```
