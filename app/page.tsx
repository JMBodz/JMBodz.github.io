import Image from "next/image";

type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  context: string;
  featured?: { project: string; outcome: string; detail: string };
  highlights: string[];
  tags: string[];
  links?: { label: string; href: string }[];
};

const experience: Experience[] = [
  {
    id: "nlite-sports",
    role: "Senior Software Engineer",
    company: "N-LITE Sports",
    period: "Dec 2021 – Nov 2026",
    context: "Helped take a sports analytics platform from initial architecture to production and coordinated feature delivery.",
    featured: {
      project: "Subscription billing and AI player reports",
      outcome: "15 sports organizations",
      detail: "used the Stripe seat-based subscription billing I implemented, including academies, professional clubs, and amateur clubs.",
    },
    highlights: [
      "Built AI-powered player performance reports for single and multiple assessment events with DigitalOcean Agent Platform.",
      "Added organization-wide controls for generating and regenerating reports, development plan validation, and optional human-review flags.",
      "Built recurring practice scheduling and multi-sport support for clubs and teams.",
    ],
    tags: ["Next.js", "NestJS", "MongoDB", "Stripe", "DigitalOcean Agent Platform"],
    links: [
      { label: "N-LITE public website", href: "https://nlitesports.com/" },
      { label: "N-LITE enterprise platform", href: "https://enterprise.n-lite.us/" },
    ],
  },
  {
    id: "assembled-systems",
    role: "Senior Full-Stack Developer",
    company: "Assembled Systems",
    period: "Dec 2025 – Sep 2026",
    context: "Led architecture and full-stack development of a multi-tenant platform for reviewing and coaching customer support agents.",
    featured: {
      project: "Customer support quality assurance",
      outcome: "50 files per batch",
      detail: "could be analyzed through the Redis-backed BullMQ queue I built, which also handled individual files.",
    },
    highlights: [
      "Integrated AssemblyAI into a FastAPI service to transcribe and analyze recordings from Zendesk, Gorgias, and Intercom. Built transcript parsing and redaction.",
      "Delivered exportable QA reports with configurable weighted scores and prioritized coaching recommendations.",
      "Automated tenant subdomain provisioning and welcome emails for an AI mentor platform. Refined Jira tickets with product owners and project managers and clarified requirements through client demos.",
    ],
    tags: ["TypeScript", "Next.js", "NestJS", "MongoDB", "FastAPI", "AssemblyAI", "Redis", "BullMQ"],
  },
  {
    id: "icti",
    role: "Backend Engineer",
    company: "ICTI",
    period: "Dec 2025 – Feb 2026",
    context: "Asset tokenization on the Internet Computer.",
    highlights: [
      "Evaluated existing tokenization and ledger code and implemented initial asset tokenization in Rust on Internet Computer (ICP) canisters.",
      "Added CI smoke tests for canisters and ledgers, monitored staging cycle balances and consumption, and automated top-ups.",
    ],
    tags: ["Rust", "ICP", "CI/CD"],
  },
  {
    id: "trade-imperial",
    role: "DevOps Engineer",
    company: "Trade Imperial",
    period: "Jul 2025 – Aug 2025",
    context: "Deployment and integrations for a trading application.",
    highlights: [
      "Deployed the application to DigitalOcean and automated releases with CI/CD.",
      "Integrated Twilio notifications and real-time market data webhooks.",
    ],
    tags: ["DigitalOcean", "PostgreSQL", "Twilio"],
  },
  {
    id: "rapidsignal-electronics",
    role: "Software Engineer",
    company: "RapidSignal Electronics",
    period: "May 2021 – Dec 2022",
    context: "Enterprise systems for batching plants and manufacturing management.",
    highlights: [
      "Built batching plant software with ASP.NET Core, Blazor, Microsoft Dynamics, and SQL Server.",
      "Contributed to a point-of-sale system for a donut shop built with ERPNext and Vue.js.",
    ],
    tags: ["ASP.NET Core", "Blazor", "Microsoft Dynamics", "SQL Server", "ERPNext", "Vue.js"],
  },
];

const capabilities = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Analyze business and startup ideas, understand client needs, and turn them into clear goals and requirements.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Manage scope and delivery, design the system architecture, and plan a practical MVP.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Build the MVP through full-stack engineering: interfaces, APIs, data, and integrations.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "Deploy, improve, and scale the product into reliable production software.",
  },
];

const technologyGroups = [
  {
    title: "Frontend",
    tools: [
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Blazor", icon: "blazor" },
    ],
  },
  {
    title: "Backend & APIs",
    tools: [
      { name: "Node.js", icon: "nodejs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "BullMQ" },
      { name: "C#", icon: "csharp" },
      { name: ".NET", icon: "dotnet" },
      { name: "ASP.NET Core", icon: "dotnet" },
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
    ],
  },
  {
    title: "Data & enterprise",
    tools: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis" },
      { name: "SQL Server", icon: "sqlserver" },
      { name: "Microsoft Dynamics", icon: "microsoft" },
    ],
  },
  {
    title: "AI integrations",
    tools: [
      { name: "OpenAI API", icon: "ai-integration" },
      { name: "Gemini", icon: "googlegemini" },
      { name: "AssemblyAI", icon: "ai-integration" },
      { name: "Retell AI", icon: "ai-integration" },
      { name: "DigitalOcean Agent Platform", icon: "digitalocean" },
    ],
  },
  {
    title: "Cloud platforms",
    tools: [
      { name: "Vercel", icon: "vercel" },
      { name: "Render", icon: "render" },
      { name: "DigitalOcean", icon: "digitalocean" },
      { name: "Google Cloud", icon: "googlecloud" },
      { name: "Azure", icon: "azure" },
    ],
  },
  {
    title: "Deployment & CI/CD",
    tools: [
      { name: "Docker", icon: "docker" },
      { name: "Docker Hub", icon: "docker" },
      { name: "GitHub", icon: "github" },
      { name: "GitHub Actions", icon: "githubactions" },
    ],
  },
  {
    title: "Blockchain",
    tools: [
      { name: "Rust" },
      { name: "Internet Computer (ICP)" },
      { name: "DFX" },
    ],
  },
  {
    title: "Development assistants",
    tools: [
      { name: "Codex", icon: "coding-assistant" },
      { name: "Claude Code", icon: "claude" },
    ],
  },
  {
    title: "Testing",
    tools: [
      { name: "Playwright", icon: "playwright" },
      { name: "Cypress", icon: "cypress" },
      { name: "Jest", icon: "jest" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="wordmark" href="#top" aria-label="John Mark Bodegas, back to top">
            JMB<span className="wordmark-dot">.</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero shell" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              Senior <em>Full-Stack Engineer.</em>
            </h1>
            <p className="hero-description">
              I help founders and engineering teams build TypeScript SaaS products. My work spans system architecture,
              full-stack development, AI integrations, and production deployment.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work
              </a>
              <a className="text-link" href="mailto:johnmarkbodegas041095@gmail.com" data-umami-event="contact_email" data-umami-event-placement="hero">
                Get in touch
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <Image
              className="panel-photo"
              src="/JMB.jpg"
              alt="John Mark Bodegas"
              fill
              sizes="(max-width: 850px) 100vw, 45vw"
              priority
            />
          </div>
        </section>

        <section className="intro-band" aria-label="Professional summary">
          <div className="shell intro-inner">
            <p>
              I bring <strong>5+ years of software engineering experience</strong> across sports analytics,
              customer support quality assurance, and enterprise software.
            </p>
          </div>
        </section>

        <section className="section shell" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Selected work</h2>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" id={item.id} aria-labelledby={`${item.id}-title`} key={item.id}>
                <header className="experience-header">
                  <div>
                    <h3 id={`${item.id}-title`}>{item.company}</h3>
                    <p className="experience-role">{item.role}</p>
                  </div>
                  <p className="experience-period">{item.period}</p>
                </header>
                <div className="experience-main">
                  <p className="experience-context">{item.context}</p>
                  {item.featured && (
                    <div className="experience-feature">
                      <h4>{item.featured.project}</h4>
                      <p><strong>{item.featured.outcome}</strong> {item.featured.detail}</p>
                    </div>
                  )}
                  <ul className="experience-highlights">
                    {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <ul className="tag-list" aria-label={`Technologies used at ${item.company}`}>
                    {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  {item.links && (
                    <div className="experience-links">
                      {item.links.map((link) => (
                        <a href={link.href} key={link.href} target="_blank" rel="noopener noreferrer" data-umami-event="visit_project" data-umami-event-project={link.label}>
                          {link.label} <span aria-hidden="true">↗</span>
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="approach-section" id="approach" aria-labelledby="approach-title">
          <div className="shell">
            <div className="section-heading approach-heading">
              <div>
                <p className="section-kicker">How I work</p>
                <h2 id="approach-title">From the first idea to production.</h2>
              </div>
            </div>
            <div className="capability-grid">
              {capabilities.map((item) => (
                <article className="capability-card" key={item.number}>
                  <span className="capability-number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tools-section shell" aria-labelledby="tools-title">
          <div className="section-heading tools-heading">
            <div>
              <p className="section-kicker">Tools and technologies</p>
              <h2 id="tools-title">The stack behind the work.</h2>
            </div>
            <p>Next.js, React, NestJS, Node.js, Python/FastAPI, TypeScript, and MongoDB/PostgreSQL,
              complemented by hands-on blockchain and DevOps experience.</p>
          </div>
          <div className="tool-groups">
            {technologyGroups.map((group) => (
              <div className="tool-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.tools.map((tool) => (
                    <li key={tool.name}>
                      {"icon" in tool && tool.icon && (
                        <img src={`/tech/${tool.icon}.svg`} width="28" height="28" alt="" aria-hidden="true" />
                      )}
                      <span>{tool.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section shell" id="contact" aria-labelledby="contact-title">
          <p className="section-kicker">Let's connect</p>
          <div className="contact-layout">
            <div>
              <h2 id="contact-title">Have something<br /><em>in mind?</em></h2>
              <p>Have a product idea or a senior engineering role in mind? I’d be glad to hear from you.</p>
            </div>
            <a className="contact-link" href="mailto:johnmarkbodegas041095@gmail.com" data-umami-event="contact_email" data-umami-event-placement="contact">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>© {new Date().getFullYear()} John Mark Bodegas</p>
          <div className="footer-links">
            <a href="https://github.com/JMBodz" target="_blank" rel="noreferrer" data-umami-event="visit_github">GitHub <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/john-mark-bodegas/" target="_blank" rel="noreferrer" data-umami-event="visit_linkedin">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="mailto:johnmarkbodegas041095@gmail.com" data-umami-event="contact_email" data-umami-event-placement="footer">Email <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </footer>
    </>
  );
}
