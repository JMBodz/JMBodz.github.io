# JMBodz profile and portfolio plan

## Goal

Use `../files/John Mark Bodegas CV.pdf` as the source for the GitHub profile and a Next.js portfolio at `https://jmbodz.github.io/`. Publish email, LinkedIn, and GitHub links. Keep the phone number and CV PDF private.

## Work

1. Verify all public copy against the CV. Present the four listed roles as selected experience, with their documented achievements and technologies. Do not invent projects or results.
2. Refine the portfolio's existing hero, experience, approach, and contact sections with the locally installed UI UX Pro Max skill and `design-system/john-mark-bodegas-portfolio/MASTER.md`.
3. Keep the App Router site statically exported with `output: "export"`, `images.unoptimized`, and `trailingSlash`. The `JMBodz.github.io` user site uses the domain root and needs no project `basePath`.
4. Keep the pnpm GitHub Actions workflow that checks types, builds `out/`, uploads it, and deploys it through GitHub Pages. Configure Pages to use GitHub Actions.
5. Publish and verify the portfolio first. Then publish the updated `JMBodz/README.md` with its working portfolio link.

## Verification

- `pnpm typecheck` and `pnpm build` succeed, and `out/index.html` exists.
- The exported page has working links and no server-only dependency.
- Review at 375, 768, 1024, and 1440 px for overflow, readable text, keyboard focus, contrast, and reduced motion.
- Confirm the Pages workflow succeeds and the live portfolio and profile links work.

## Publishing prerequisites

The local portfolio repository has no commits or remote yet. GitHub CLI authentication currently reports an invalid token. Restore authentication and create or connect the remote before pushing.
