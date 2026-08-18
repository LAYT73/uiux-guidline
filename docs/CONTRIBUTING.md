# Contributing

## Gitflow

- `main` — stable, portfolio-ready
- `dev` — integration branch
- Feature work branches **from `dev`**: `feat/<topic>`, `chore/<task>`, `fix/<issue>`
- Open pull requests **into `dev`**
- When a release is ready, open `dev` → `main`

## Conventions

- pnpm only
- CSS Modules next to the component
- No default exports except Storybook meta
- Copy lives in i18n files, not in components
- Interactive Don't examples must still be usable — the point is to *feel* the mistake
