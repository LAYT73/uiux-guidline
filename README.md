# UI/UX Guideline

Interactive rules for interfaces that make sense — not a gallery of screenshots, but live Do / Don't sandboxes with the *why* behind every decision.

## Stack

React 19 · TypeScript · Vite · Feature-Sliced Design · CSS Modules · Zustand · Motion · i18next · Storybook · Vitest

## Scripts

```bash
pnpm install
pnpm dev          # app at http://localhost:5173
pnpm storybook    # UI kit at http://localhost:6006
pnpm test
pnpm lint
pnpm lint:fsd
pnpm typecheck
pnpm build
```

## Architecture

Layers flow downward: `app → pages → widgets → features → entities → shared`.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for how to add a rule, and [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for gitflow.

## License

MIT
