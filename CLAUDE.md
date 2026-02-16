# Clawback Site — Claude Code Rules

## Goal
Build and ship the Clawback marketing site safely. Prefer small, incremental changes that always keep the site deployable.

## Non-negotiables
- Never commit secrets (tokens, API keys). `.env.local` must stay untracked.
- Do not change `/api/publish` auth logic unless explicitly asked.
- Always run `npm run build` before pushing.

## Content & Pages
- Pages are data-driven JSON in `content/pages/*.json`.
- Do not create custom React pages per slug.
- To create or update a page, edit or add `content/pages/<slug>.json` and keep slugs lowercase with dashes only.

## Rendering
- Only add new section types by extending `app/_components/PageClient.tsx`.
- Keep section rendering deterministic (no random/time-based values).

## Git workflow
- Always work on a branch: `feat/<short-name>` or `fix/<short-name>`.
- Commit messages: `feat: ...` or `fix: ...`
- Push branch and open a PR. Do not push directly to `main` unless told.

## Deployment
- Vercel deploys from GitHub automatically.
- Any change must keep `npm run build` passing.
