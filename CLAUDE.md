# CLAUDE.md

How to write code in this repository: conventions, patterns and constraints. Setup and scripts for people are in [README.md](README.md). This file is the single source of guidance for every agent; `AGENTS.md` points here.

## Constraints

- **Read the bundled Next.js docs first.** This is Next.js 16, whose APIs and conventions differ from older versions and from most training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing code, and heed deprecation notices. `next.config.ts` sets `agentRules: false`, so `next dev` leaves `AGENTS.md` alone.
- **pnpm only.** Node 24 or newer, pnpm 12 or newer. Never use npm or yarn. Run one-off CLIs with `pnpm dlx`. `packageManager` in `package.json` pins the exact pnpm that CI, Vercel and other hosts install; raise it together with `engines`.
- **TypeScript 7**, strict. `any` is a lint error. Use `import type` for type-only imports (enforced). `next build` type-checks every file `tsconfig.json` includes, through the `tsc` CLI.
- **Oxlint and oxfmt.** Lint with Oxlint and [`@shadcn/lint`](https://github.com/shadcn-ui/lint), format with oxfmt. Do not add ESLint, Prettier or typescript-eslint: TypeScript 7 has no JavaScript compiler API, so typescript-eslint and `eslint-config-next` cannot run.
- **Fresh releases wait a day.** pnpm refuses versions published in the last 24 hours. Pick an older version or wait. Never add `minimumReleaseAgeExclude`.
- **Check dependency security before upgrading.** Audit direct and transitive dependencies, including development tooling, with `pnpm audit`. Do not accept an upgrade with known vulnerabilities or suppress advisories to pass the check. The maintainer has chosen to retain the shadcn CLI at exactly 4.21.3 despite its existing unpatched `braces` advisory; Renovate updates for it are disabled. Keep that hold until an upstream fix is available and verified. Use `pnpm exec shadcn` so commands respect the installed pin.
- **Renovate keeps dependencies current** (`renovate.json`). Updates are eligible every morning before 06:00 UTC. Stable minor and patch updates arrive in one grouped PR that merges itself once CI passes; majors and 0.x packages get their own PRs to review. It leaves the Node and pnpm versions in `engines`, `packageManager` and CI alone, and caps `@types/node` at the Node major; raise those by hand.

## Code conventions

- **kebab-case filenames**, such as `site-header.tsx`. Next's file conventions, like `page.tsx`, `not-found.tsx`, `opengraph-image.tsx`, `[slug]/` and `(group)/`, are the only exception.
- **Always import through the `@/` alias**, which maps to `src/*`. No relative imports.
- **Formatting** is oxfmt: 2-space indent, single quotes, trailing commas, 100-character lines, no semicolons. CSS keeps double quotes, the way the shadcn CLI writes it, so `shadcn apply` finds the imports it added before instead of adding them again. The pre-commit hook formats staged files; `pnpm format` does the whole repo.
- **Comments only when really necessary**, one line at most, and never a ticket or issue reference. Prefer a clearer name over an explanation.
- **No em dashes anywhere**: code, comments, UI copy, docs, commits and PRs. Use a plain hyphen or rephrase. The only exception is vendored third-party content, the installed skills in `.claude/skills/` and `.agents/skills/`, which we never hand-edit.
- **English only, in sentence case**, the way the Consultia template writes: a capital first letter, then lower case, for headings, buttons, links, navigation, eyebrows and labels alike, such as "Book a strategy call". Proper nouns and the three service names keep their capitals. FAQ questions are asked the way a visitor would ask them, and end with a question mark. Write the case in the source, never with a CSS transform, so the text people and screen readers get matches the screen.
- **Docs are for humans.** The README and other docs are written for people using, supporting or deploying the project: plain language, concise, easy to follow. Guidance for whoever writes code belongs in this file.
- **Commits** follow Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `test:`). No `Co-Authored-By` lines in commits or PRs. Never bypass the hooks with `--no-verify`.

## Architecture

### Pages and content

- **The site began as a replica of the Consultia Framer template** (a free template by Yohann Varillon Design) rebuilt on this stack, and keeps its measures, radii, tints and rhythm: one page of seven sections, hero, use cases, services, how it works, about, FAQ and contact, plus a legal notice page. The content is the firm's own: AI consulting for mechanical, electrical and civil engineering departments in the Sacramento area, in person, on the tools a client already has.
- `src/app/layout.tsx` renders the skip link, `SiteHeader`, `<main id="main">` and `SiteFooter` around every page. `src/app/page.tsx` only lists the sections, in order.
- **Copy lives in `src/content/`**: one typed file per section, `navigation.ts` for the header and footer, `legal-notice.ts` for the legal page and `not-found.ts` for the 404. Sections render what they are given and never hard-code words; only a control's own label, like `Open Menu`, sits beside the control. Site-wide details, like the name, description and links, live in `src/config/site.ts`. The copy never invents: no made-up people, signatures or testimonials. Claims about experience and savings are the firm's own and carry their qualifier, such as "across prior roles". The use cases and the services are each one content file with six items, and the about section carries the proof strip.
- **No photographs.** The only picture is the hero's static SVG illustration, `hero-visual.tsx`, drawn in the tokens with Tailwind fill and stroke classes: a process running on dotted paper, with the approval at the end of the lit route. It is decorative, `aria-hidden` and `data-nosnippet`, and nothing in it moves. If a photograph is ever added, it lives in `src/content/images/`, imported statically by the content file that uses it, sized by `next/image` with a `sizes` hint, and it is never stock people.
- Backticks in a content string render as inline code through `withInlineCode` from `src/lib/inline-code.tsx`, and `stripInlineCode` gives the plain text for JSON-LD, so one string feeds both.
- **Every component lives flat in `src/components/`**, one kebab-case file each, sections and their parts included, such as `features.tsx` and `feature-visuals.tsx`. `src/components/ui/` is the only folder, and it holds what the shadcn CLI writes. Hooks live in `src/hooks/`, where the shadcn CLI puts them.
- **Build a section on `Section`** from `src/components/section.tsx`. It sets the shared padding, the `id` for in-page links and `aria-labelledby` for its `<h2>`, and `tone="muted"` puts it on the dotted paper. `Eyebrow` is the small pill above a heading, on the page's other tint; `SectionHeading` renders eyebrow, `<h2>` and description, centred or at the start. `IconTile` is the grey tile with a white glyph, in three sizes. `CtaLink` is the dark pill button, with a `text` variant for the quiet link beside it.
- Every page has one `<h1>` and never skips a heading level; card, step and question titles are `<h3>`.
- **The FAQ is native `<details>`.** It opens without JavaScript and every answer is in the HTML. `summary` hides its own marker in `globals.css`, and the page draws the plus instead. The use cases and the services are plain card grids, six each, with an `IconTile` on every card.
- **The site URL is never hard-coded.** Read it with `getSiteUrl()` from `src/lib/site-url.ts`: `SITE_URL`, then Vercel's production domain, then localhost. Both `SITE_URL` and `SITE_ENV` are read at build time, and an indexed build with no public URL fails instead of pointing its canonicals at localhost.
- The chips floating over the hero illustration are decoration: `aria-hidden` and `data-nosnippet`, so they stay out of screen readers and search snippets.

### SEO

- **Every page's head comes from `createMetadata`** in `src/lib/metadata.ts`: title, description, canonical, Open Graph, Twitter and robots. Give every page but the home page a `title`, and always its `path`. The root layout sets only the defaults, with no canonical, so a page that skips `createMetadata` never claims to be the home page. The home page's title is `siteConfig.title`, kept near 60 characters, with the description near 155.
- **Only production is indexed.** `isIndexable()` in `src/lib/site-url.ts` lets in Vercel's production deploys and any host with `SITE_ENV=production`. Everything else gets noindex in the meta tag and in the `X-Robots-Tag` header; `robots.txt` always allows crawling.
- **Headers come from `responseHeaders`** in `src/lib/headers.ts`, which `next.config.ts` sends on every route: the security headers, a static CSP and, off production, `X-Robots-Tag`. Never a nonce CSP, because a nonce makes every page dynamic. The file imports nothing, since the config loader only resolves the `@/` alias in `next.config.ts` itself.
- `export const dynamic = 'error'` in the root layout makes a Request-time API anywhere fail the build, so every route stays prerendered.
- **Structured data is built from the content.** `src/lib/structured-data.ts` holds Organization, with the area the firm serves from `siteConfig.area`, WebSite and FAQPage, and FAQPage reads the same items the FAQ renders. Render it with `JsonLd` from `src/components/json-ld.tsx`, which escapes `<` so no string can close the tag. The FAQ section renders its own FAQPage, so the markup goes wherever the questions go.
- The icons are `src/app/icon.svg`, `apple-icon.png` and `favicon.ico`. The brand mark the Open Graph image uses sits in `public/brand/natomas-mark.svg`; the mark and the icons are the initials on a dark rounded square, and `src/lib/og.tsx` sets the wordmark from `siteConfig.name`.
- `src/lib/og.tsx` draws the Open Graph image at build time. Satori reads no CSS variables, so `src/lib/theme-tokens.ts` turns the light theme's tokens in `src/app/globals.css` into hex, and a preset restyles the card with the page. Its typefaces are the `FONT` and `HEADING_FONT` constants there, the same pair `src/app/layout.tsx` loads. `.oxlintrc.json` exempts the file from `no-inline-styles` and `no-raw-colors`.

### Server first

- **Server Components by default.** The only client islands are the mobile menu's button, which imports its sheet on first use, or on a phone or tablet at the first scroll or touch, and holds it in state rather than behind Suspense, which would keep a freshly loaded sheet back for about 300 ms, the contact form, which has no backend and opens the message as a mail draft, and the logo's `HomeLink`, which scrolls back to the top on the home page, where a link to the current page would keep the scroll. Add `'use client'` only where a component needs state, effects or browser APIs, and keep that island as small as the interaction.
- **Everything a crawler needs is in the server HTML.** The FAQ is native disclosures, so every answer is in the markup, closed or open, and the FAQPage JSON-LD reads the same items.
- **No dark theme.** The template has one look, so the site has one set of tokens, no theme toggle and no `next-themes`.
- **Testimonials, if you add them, stay plain quotes.** Never turn them into `Review` or `AggregateRating` markup; reviews a site publishes about itself do not qualify.
- **Links go through `SiteLink`** from `src/components/site-link.tsx`, which opens another site in a new tab and uses Next's `Link` for a page here. Style a link as a button with `CtaLink` from `src/components/cta-link.tsx`, the template's pill; the shadcn `Button` stays for real buttons, like the menu trigger.

### Motion

- **Motion never gates content.** Entrances and scroll reveals are CSS only (`animate-rise`, `animate-rise-fade` and `reveal` in `src/app/globals.css`), so the server HTML, the first client render and a page without JavaScript all match. Never start content at `opacity: 0` from JavaScript, and never branch rendered output on the reduced-motion setting.
- The headline uses `animate-rise`, which moves without fading, because the largest paint skips transparent elements.
- Put `motion-reduce:animate-none` beside every animation class. `reveal` needs nothing extra: it only runs where scroll timelines exist and motion is not reduced.
- `reveal` only moves content into place and never fades it, so a heading that straddles the fold is never left half transparent. Keep it off the first screen anyway, where it would start mid-move.
- **No decorative loops.** Nothing on the site animates on its own after the entrance, so there is no pause control. Hover is the only other motion: a tint change on cards and disclosures, with `transition-colors`. Keep `filter` and `blur()` out of every animation: the browser repaints them on each frame instead of compositing them.
- **Links jump, they never scroll smoothly.** An in-page link lands on its section at once, and `scroll-padding-top` keeps the heading clear of the sticky header. Do not add `scroll-behavior: smooth`, `data-scroll-behavior` or a smooth `scrollTo`; a Playwright check counts the scroll positions after a click.

## Design system

`@shadcn/lint` checks Tailwind usage against the design system. All six rules are errors and gate CI: `no-restyle`, `no-raw-colors`, `no-arbitrary-values`, `no-unknown-classes`, `require-static-classes` and `no-inline-styles`. Keep the codebase at zero findings rather than downgrading a rule.

- **Theme tokens only, and only shadcn's own.** Every colour, radius and font comes from the tokens `shadcn init` writes into `src/app/globals.css`, so `pnpm exec shadcn apply <code>` restyles the whole site at once. A preset rewrites exactly those tokens, so never add a token of your own: it would keep its old value after a restyle. Derive a shade from an existing token instead, such as `bg-primary/10`. Shadows stay on Tailwind's default scale, like `shadow-sm`. Motion and effects are the exception, defined once in `src/app/globals.css` as keyframes and `@utility` rules.
- **Keep `src/components/ui/` as the CLI writes it.** `shadcn apply` overwrites those files when it applies a preset, so a variant added there would be lost. The linter ignores the folder, because those files define the variants the rules enforce.
- **The template's layout, with its own type.** `src/app/layout.tsx` loads Instrument Serif as `--font-heading` for every heading and the wordmark, and its sibling Instrument Sans as `--font-sans` for everything else. The serif has one weight, so headings are `font-heading tracking-tight` at regular weight with `leading-none`, a step larger than the template's grotesk; body text is `tracking-tight`. The tokens are white, near-black ink, the warm grey `muted` for tinted sections, cards and pills, the mid grey `secondary` for icon tiles and the open services card, and `--radius` at 0.55rem so `rounded-2xl` is the template's 16px pill. Never name a custom utility `bg-something`: the class merger reads it as a background colour and drops the real one, which is why the dotted paper is `paper-dots`.
- Shared interaction rules in `globals.css` provide mobile 44px targets, explicit transitions and safe areas without editing primitives. Button-shaped links carry `data-slot="button"`.
- After `shadcn apply`, run `pnpm format`. When the preset changes a font, the CLI adds the new one to `src/app/layout.tsx` and keeps the old one, so remove the font it replaced: its import, its `const` and its classes on `<html>`. Change `FONT` and `HEADING_FONT` in `src/lib/og.tsx` to match.
- Blocks installed from the 7Ovr registry land in `src/components/blocks/`, the one folder `.oxlintrc.json` relaxes the design-system rules for, because registry code arrives with its own classes. Keep your own components out of it.
- **`no-restyle` runs with no allowlist**: a shadcn component accepts no `className` from outside, not even layout or margin. Pick one of the variants it already has, and put layout classes on a plain wrapper element around it.
- The wordmark in `src/components/logo.tsx` is the site name set in the heading face, as the template sets its own.
- Base UI takes `render`, not `asChild`.
- Add shadcn components with `pnpm exec shadcn add <name>`, then run `pnpm format`, because the CLI writes double quotes.

## Tests

- **Test logic, not rendering.** Unit tests cover code that decides something: the site URL resolver, the metadata and response headers, the theme token converter, the JSON-LD escape, the inline-code parser, the content rules, the copy button's clipboard handling and how `SiteLink` treats a URL. Do not write a test that a component renders its copy, its links or its markup; the page's structure belongs to the Playwright checks in `e2e/`.
- **Tests come first** for that logic. Before writing it, write the test that describes it and watch it fail. A bug fix starts with a test that reproduces the bug.
- **Colocate tests** with the file they cover: `copy-command.test.tsx` sits next to `copy-command.tsx`.
- **Do not test shadcn/ui or Base UI primitives.** They are vendored and tested upstream.
- Vitest with Testing Library in jsdom. When a test needs the DOM, query by role and label, the way people use the page.
- `src/test/setup.ts` mocks `next/font/google`, which only runs inside the Next compiler, and stubs the browser APIs jsdom lacks. Add to it when a component needs another one.
- `src/content/content.test.ts` enforces the copy rules: no em or en dashes, labels that start with a capital, the hero headline as one sentence, FAQ questions asked as sentences, and header links that point at a section or a page.
- **Playwright checks the built site** from `e2e/`. `playwright.config.ts` builds the site and serves it as a production deploy for `pnpm test:e2e`, or as a preview for `pnpm test:e2e:preview`, and the specs read which from `E2E_PREVIEW`. They cover what a visitor and a crawler get: the head, the JSON-LD against the page, headings, landmarks and the skip link, the page with JavaScript off, the crawler files, the headers, hydration with and without reduced motion, the header's fit from a tablet up, the menu and the FAQ disclosures. A new page or section adds its checks there, and a new header link must still fit beside the logo and the action at `lg`, where the links appear.
- **Lighthouse budgets** live in `lighthouserc.json`: the desktop preset, the median of three runs, at least 90 for performance, 95 for accessibility and best practices and 100 for SEO, with LCP under 2.5 s, CLS under 0.1 and TBT under 200 ms. When a budget fails, fix the page rather than the budget.

## Skills

Skills for agents working here live in two identical folders: `.claude/skills/` for Claude Code and `.agents/skills/` for every other agent. They are `vercel-react-best-practices`, `vercel-composition-patterns`, `shadcn` and `improve`, the same set as the 7Ovr Vite Starter, pinned in `skills-lock.json`.

- Add or update a vendored skill for both folders at once, as real files: `pnpm dlx skills add <repo> --skill <name> --agent claude-code universal --copy`. Never hand-edit vendored skills.

## Before you finish

Run `pnpm lint`, `pnpm format:check`, `pnpm typecheck`, `pnpm test` and `pnpm build`, and `pnpm test:e2e` when a change touches what a page renders or sends. `pnpm lint` fails on any warning, so the codebase stays at zero findings. CI runs all of them on every pull request and every push to `master`, with `pnpm test:e2e:preview` and `pnpm lighthouse` beside them.
