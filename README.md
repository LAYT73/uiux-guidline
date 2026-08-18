# UI/UX Guideline

Interactive rules for interfaces that make sense.

Not a gallery of screenshots — a living guideline. Each rule has a **name**, a **why**, and two interactive examples: one that works, and one that hurts.

**[Live intent](https://github.com/LAYT73/uiux-guidline)** · English / Русский · Dark / Light · Mobile-ready

## Stack

React 19 · TypeScript · Vite 8 · Feature-Sliced Design · CSS Modules · Zustand · Motion · i18next · Storybook 10 · Vitest · pnpm

## Scripts

```bash
pnpm install
pnpm dev           # http://localhost:5173
pnpm storybook     # UI kit at http://localhost:6006
pnpm test
pnpm lint
pnpm lint:fsd
pnpm typecheck
pnpm build
```

## What is inside

Four layers, 27 topics, 64 interactive rules:

1. **Foundations** — spacing, radius, type, color, shadow, icons, motion
2. **Components** — buttons, inputs, cards, modals, dropdowns, tables, navigation
3. **Composition** — layout, hierarchy, density, alignment, grouping, whitespace, responsive
4. **UX principles** — feedback, affordance, error prevention, loading, empty states, accessibility

Every Don't example is still usable. The point is to _feel_ the mistake.

Each rule ships with a reset, a keyboard path, and hints that say what to look at. Sliders inside a Do example are constrained so the correct answer stays correct.

## Architecture

Imports only go down:

`app → pages → widgets → features → entities → shared`

How to add a rule: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)  
Gitflow: [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)  
Topic index: [docs/GUIDELINES.md](docs/GUIDELINES.md)

## License

MIT
