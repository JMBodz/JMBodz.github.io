# John Mark Bodegas — Portfolio

A static Next.js App Router portfolio for the [JMBodz.github.io user site](https://jmbodz.github.io/). Content comes from John Mark Bodegas's CV; the phone number and CV PDF are not published.

## Local development

Requires Node.js 22 and pnpm 12.16.1.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`.

## Build and deployment

```bash
pnpm typecheck
pnpm build
```

The static site is generated in `out/`. The GitHub Actions workflow deploys it to GitHub Pages on pushes to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. This user site lives at the domain root, so no `basePath` is needed.

The design direction is recorded in `design-system/john-mark-bodegas-portfolio/MASTER.md`.
The implementation plan is in `docs/portfolio-plan.md`.
