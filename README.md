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

The static site is generated in `out/`. The GitHub Actions workflow deploys it to GitHub Pages on pushes to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. Selecting **Deploy from a branch** runs GitHub's Jekyll workflow against the repository source and can publish this README instead of the Next.js export. This user site lives at the domain root, so no `basePath` is needed.

The design direction is recorded in `design-system/john-mark-bodegas-portfolio/MASTER.md`.
The implementation plan is in `docs/portfolio-plan.md`.

## Visitor analytics

The portfolio supports [Umami Cloud](https://cloud.umami.is/) analytics with a private dashboard. It records page views, anonymous visitor estimates, traffic sources, devices, approximate locations, and selected link clicks. It does not enable identity collection, session recordings, or a public visitor counter.

### Dashboard configuration

The tracker uses the Umami Cloud website ID `995debbe-1b8f-409b-b821-b2987a8fa36e`, registered for `jmbodz.github.io`. This is a public identifier, not an API key; no credentials or GitHub Actions variables are required. Sign in to the owning [Umami account](https://cloud.umami.is/) to view reports, and keep the website's Share URL disabled so reports remain private.

The script is loaded once using `next/script` in `app/layout.tsx`. Its `data-domains` attribute restricts tracking to `jmbodz.github.io`, so localhost and preview domains do not record activity. No local environment configuration is needed.

### Events and verification

| Event | Links | Properties |
| --- | --- | --- |
| `contact_email` | Email buttons | `placement`: `hero`, `contact`, or `footer` |
| `visit_linkedin` | LinkedIn | — |
| `visit_github` | GitHub | — |
| `visit_project` | N-LITE project links | `project`: the link label |

After deployment, visit the published portfolio and confirm the visit appears in your Umami dashboard. Click each tracked link, check the **Events** page and its properties, and confirm each action appears once. Confirm localhost visits do not appear. A click on an email link measures contact intent; it does not prove an email was sent.

The script loads after the page becomes interactive. Links remain ordinary links if analytics is unavailable or blocked. Verify this by blocking `cloud.umami.is/script.js` in browser developer tools and checking the links still open normally.

Analytics starts after activation and cannot recover earlier traffic. Ad blockers can reduce counts; locations are approximate and do not identify a visitor by name or GitHub account. Check [Umami's current plan limits](https://umami.is/pricing) for retention and usage allowances. To disable analytics, remove the Umami `Script` component from the layout and redeploy; to change accounts, replace its `data-website-id` and redeploy. Update `data-domains` and the registered Umami domain if moving the portfolio to a custom domain.

Implementation follows Umami's [Next.js integration guidance](https://docs.umami.is/docs/collect-data), [domain restriction](https://docs.umami.is/docs/tracker-configuration), and [event attributes](https://docs.umami.is/docs/track-events).
