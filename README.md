# Valencia Agents site

The website for Valencia Agents, an AI consultancy for engineering departments
in the Sacramento area.

The design began as a replica of the Consultia template for Framer, a free
template by Yohann Varillon Design, rebuilt as a Next.js site so the code, the
tests and the deploy stay ours. The content is the firm's own.

Live at https://valencia-agents-site-pj6uhtqcuq-uc.a.run.app. The site is
not indexed yet: it serves a noindex header until launch.

All copy lives in `src/content/` and `src/config/site.ts`. See `CLAUDE.md`
for the working rules: pnpm only, theme tokens only, no em dashes, sentence
case, and checks green before anything ships.

## Run it

```sh
pnpm install
pnpm dev
```

## Check it

```sh
pnpm lint
pnpm format:check
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

## Deploy it

Pushing to `master` runs CI (lint, format, typecheck, unit tests, build,
e2e, Lighthouse). When CI passes, the Deploy workflow builds the Docker
image and deploys it to Cloud Run (service `valencia-agents-site`,
project `consultancy-website-512906`, region `us-central1`).

Manual deploys still work: `gcloud builds submit --config cloudbuild.yaml .`
followed by `gcloud run deploy` with the built image.
