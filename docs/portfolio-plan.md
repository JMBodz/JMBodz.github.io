# JMBodz profile and portfolio plan

## Goal

Use the workspace CV at `files/John Mark Bodegas CV.pdf` and the user's RapidSignal Electronics details as sources for the GitHub profile and a Next.js portfolio at `https://jmbodz.github.io/`. Publish email, LinkedIn, and GitHub links. Keep the phone number and CV PDF private.

## Work

1. Verify public copy against the CV and user-provided RapidSignal details. Present all five roles as selected experience, with documented achievements and technologies. Do not invent projects or results.
2. Refine the portfolio's existing hero, experience, approach, and contact sections with the locally installed UI UX Pro Max skill and `design-system/john-mark-bodegas-portfolio/MASTER.md`.
3. Keep the App Router site statically exported with `output: "export"`, `images.unoptimized`, and `trailingSlash`. The `JMBodz.github.io` user site uses the domain root and needs no project `basePath`.
4. Keep the pnpm GitHub Actions workflow that checks types, builds `out/`, uploads it, and deploys it through GitHub Pages. Configure Pages to use GitHub Actions.
5. Publish and verify the portfolio first. Then publish the updated `JMBodz/README.md` with its working portfolio link.

## Verification

- `pnpm typecheck` and `pnpm build` succeed, and `out/index.html` exists.
- The exported page has working links and no server-only dependency.
- Review at 375, 768, 1024, and 1440 px for overflow, readable text, keyboard focus, contrast, and reduced motion.
- Confirm the Pages workflow succeeds and the live portfolio and profile links work.

## Publishing status

The portfolio source was published to `JMBodz/JMBodz.github.io`, and its Pages build and deployment succeeded. The GitHub profile README is also on `JMBodz/JMBodz`. GitHub CLI authentication in this workspace remains invalid, so future command-line pushes will require renewed authentication.
