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

The portfolio source was published to `JMBodz/JMBodz.github.io`, and its Pages build and deployment succeeded. The GitHub profile README is also on `JMBodz/JMBodz`. The GitHub connector is available for publishing; SSH pushes from this workspace currently fail because of the system SSH configuration.

## Readability update — 2026-10-31

- Speak to hiring teams and potential clients equally. Lead with understanding client requests, project management, system architecture, full-stack engineering, building an MVP, and taking it to production.
- Make the experience section easier to scan with a context sentence and short contribution bullets for each of the five roles. Keep technologies separate from the work itself and use at least 16px for body copy.
- Give the N-LITE public website (`https://nlitesports.com/`) and enterprise platform (`https://enterprise.n-lite.us/`) equally visible, clearly labeled links. The enterprise URL is user-provided and was not independently accessible from this workspace.
- Remove the unexplained `01 / 03` label over the portrait. Check mobile wrapping, keyboard focus, both links, type checking, the static export, and the GitHub Pages deployment.

## Clarity update — 2026-10-31

- Keep the hero portrait free of text and gradient overlays. Use the same photo and review its crop across screen sizes.
- Replace the hero's location label with `Discovery · Planning · Development · Delivery`. Match it with four process cards that describe understanding requirements, planning scope and architecture, full-stack MVP development, and reliable production delivery.
- Replace the dense inline Core tools list with a separate Tools and technologies section. Group the existing tools into frontend, backend, and data/platforms; show local SVG icons beside visible text labels. Use the .NET mark for ASP.NET Core and a Microsoft mark for Dynamics. Devicon assets are included under their MIT license in `public/tech/DEVICON-LICENSE.txt`.
- Open both N-LITE links in new tabs with `noopener noreferrer` and an accessible new-tab cue.
- Verify type checking, static export, responsive layout at 375/768/1024/1440 px, keyboard accessibility, and live GitHub Pages deployment.
