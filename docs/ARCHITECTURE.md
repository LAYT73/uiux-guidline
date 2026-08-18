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
- `shared` — UI kit, `cx`, motion presets, `useMediaQuery`, i18n, storage keys

## UI kit

Every primitive lives in its own slice under `src/shared/ui/` with a CSS module, an `index.ts`, and a Storybook story. Slices never import each other.

`badge` · `button` · `callout` · `card` · `checkbox` · `code` · `demo-kit` · `icon-button` · `input` · `kbd` · `modal` · `segmented-control` · `select` · `skeleton` · `skip-link` · `spinner` · `switch` · `tag` · `tooltip`

Two of them exist for the examples specifically: `code` shows the minimal markup behind a rule where the difference is semantic rather than visual, and `demo-kit`'s `DemoFocus` starts the focus inside an example and names the focused element live, so tab order can be checked without leaving the demo.

Motion is centralised in `src/shared/lib/motion.ts` (`fadeUp`, `stagger`, `pagePresence`, `panelPresence`, `overlayPresence`, `dialogPresence`). Every animated component reads `useReducedMotion()` and falls back to a static state.

## Adding a rule

1. Append the rule to the matching file in `src/entities/guideline/model/rules/`.
2. Add `title`, `description`, `goodHint`, and `badHint` under `rules.<id>` in both `en.json` and `ru.json`.
3. Create a demo file in `src/features/rule-demos/ui/<section>/<topic>/` with `Good` and `Bad` interactive examples.
4. Register the pair in that section's demo registry module. Pass `layout: 'stacked'` when the rule is about width or measure and the two examples need the full card instead of a narrow column.

The `Good` example must stay correct at every slider position — constrain the range instead of trusting the reader. The `Bad` example must stay usable: the reader should feel the mistake, not a crash.

Control labels are written for someone who does not know the vocabulary yet: "Gap between columns", not "Gutter". When the rule is about semantics or focus order, add a `Code` fragment and wrap the interactive part in `DemoFocus` — a visual diff alone does not teach it.

A rule is incomplete if any of those four pieces is missing. CI tests the catalog against i18n keys and the demo registry.
