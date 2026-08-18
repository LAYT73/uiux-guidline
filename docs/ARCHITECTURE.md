# Architecture

The app follows [Feature-Sliced Design](https://feature-sliced.design/). Imports only go down:

`app → pages → widgets → features → entities → shared`

Each slice exposes a public API through `index.ts`. Do not deep-import another slice's internals.

## Layers

- `app` — providers, router, design tokens
- `pages` — home, topic, 404
- `widgets` — app shell, rule card (Do / Don't playground)
- `features` — theme toggle, locale toggle, interactive demo registry
- `entities/guideline` — catalog of sections, topics, and rules
- `shared` — UI kit, `cx`, i18n, storage keys

## Adding a rule

1. Append the rule to the matching file in `src/entities/guideline/model/rules/`.
2. Add `title`, `description`, `goodHint`, and `badHint` under `rules.<id>` in both `en.json` and `ru.json`.
3. Create a demo file in `src/features/rule-demos/ui/<section>/<topic>/` with `Good` and `Bad` interactive examples.
4. Register the pair in that section's demo registry module.

A rule is incomplete if any of those four pieces is missing. CI tests the catalog against i18n keys and the demo registry.
