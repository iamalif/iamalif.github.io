# Portfolio site (local only, not yet published)

Astro static site, Option B (technical bento) design. Work in progress: not deployed, not pushed.

## Run locally

```bash
npm install
npm run dev        # http://127.0.0.1:4321/
npm run build      # static output in dist/
npm run check:content
```

The site builds for the root of a host (default `https://iamalif.github.io/`, from a repository named `iamalif.github.io`). The origin and base path come from `PUBLIC_SITE` and `PUBLIC_BASE` (defaults in `astro.config.mjs`), so moving to Vercel, a custom domain or a project path is an environment-variable change, not a code change. Links are built with `src/lib/url.ts`.

## Rules

- `git push` is disabled on this clone until launch is approved. No hosted previews, no deployment.
- Local and preview builds are `noindex`. Set `PUBLIC_INDEXABLE=true` only at launch.
- Only approved public fields live in `src/content`. Private evidence stays outside this repository.
- `legacy/` holds the previous live site files for reference and rollback. They are not part of the build.
- Placeholders are flagged in content (`draft: true`, `placeholder: true`) and must be resolved before launch.

## Checks and release
- `npm run verify`: content rules, build, link and metadata checks (every build you intend to ship).
- `npm run check:release`: run after a build. Staging (default) lists warnings such as visible placeholders. With `PUBLIC_INDEXABLE=true` it is strict and fails on any unresolved placeholder, a wrong address, a noindex mismatch or a CV PDF built for a different address.
- `npm run cv:pdf`: regenerates the CV PDF for the configured address (needs Google Chrome). An environment variable alone does not rewrite the existing PDF.
- `deploy/`: an inactive GitHub Pages workflow template and a clean-copy script for the new repository. See the launch checklist in the planning folder.
