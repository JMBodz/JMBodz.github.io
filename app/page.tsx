import Image from "next/image";

type Experience = {
  role: string;
  company: string;
  period: string;
  context: string;
  highlights: string[];
  tags: string[];
  links?: { label: string; href: string }[];
};

const experience: Experience[] = [
  {
    role: "Pioneer Software Engineer & Assistant Project Manager",
    company: "N-LITE Sports",
    period: "Dec 2021 — Present",
    context: "Sports analytics platform architected and built from scratch to production.",
    highlights: [
      "Helped define the system architecture, plan features, and manage delivery as a pioneering engineer and Assistant Project Manager.",
      "Built multi-sport tools, scheduling and recurring team practices, Stripe payments and seat-based subscriptions, and player assessment modules.",
      "Integrated AI analysis and GoHighLevel (GHL) workflows.",
    ],
    tags: ["Next.js", "NestJS", "MongoDB", "Stripe"],
    links: [
      { label: "N-LITE public website", href: "https://nlitesports.com/" },
      { label: "N-LITE enterprise platform", href: "https://enterprise.n-lite.us/" },
    ],
  },
  {
    role: "Architect & Senior Software Engineer",
    company: "Assembled Systems",
    period: "Dec 2025 — Sep 2026",
    context: "Multi-tenant customer support QA system and playbook management.",
    highlights: [
      "Architected and delivered a multi-tenant QA system with audio and text quality analysis achieving 95%+ accuracy.",
      "Integrated file processing, OCR, and vision recognition for knowledge-base content.",
      "Built custom form builders for playbook management and quality assessments.",
    ],
    tags: ["React", "TypeScript", "Python", "FastAPI"],
  },
  {
    role: "Backend Engineer",
    company: "ICTI",
    period: "Dec 2025 — Feb 2026",
    context: "Asset tokenization on the Internet Computer.",
    highlights: [
      "Contributed asset tokenization and blockchain infrastructure using Rust and ICP DFX.",
      "Added CI/CD smoke tests for canisters and ledgers, plus automated staging cycle monitoring and top-ups.",
    ],
    tags: ["Rust", "ICP", "CI/CD"],
  },
  {
    role: "DevOps Engineer",
    company: "Trade Imperial",
    period: "Jul 2025 — Aug 2025",
    context: "Deployment and integrations for a trading application.",
    highlights: [
      "Delivered rapid cloud deployment on DigitalOcean with automated CI/CD pipelines.",
      "Added Twilio push notifications and real-time market-value webhooks.",
    ],
    tags: ["DigitalOcean", "PostgreSQL", "Twilio"],
  },
  {
    role: "Software Engineer",
    company: "RapidSignal Electronics",
    period: "May 2021 — Dec 2022",
    context: "Enterprise systems for batching plants and manufacturing management.",
    highlights: [
      "Worked with .NET MVC, ASP.NET Core APIs, Blazor, Dynamics AX 2012, and Dynamics 365.",
      "Used SQL Server as the database for these enterprise systems.",
    ],
    tags: [".NET", "ASP.NET Core", "Blazor", "Dynamics AX", "Dynamics 365", "SQL Server"],
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
            <p className="eyebrow"><span className="eyebrow-line" aria-hidden="true" /> Discovery · Planning · Development · Delivery</p>
            <h1 id="hero-title">
              Senior <em>Full-Stack Engineer.</em>
            </h1>
            <p className="hero-description">
              I help founders ship MVPs built to scale. I bring 5+ years of experience taking products from
              idea to production through system architecture, full-stack development, API and AI integrations,
              and cloud deployment.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:johnmarkbodegas041095@gmail.com" data-umami-event="contact_email" data-umami-event-placement="hero">
                Let’s discuss your idea. <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#work">
                Explore my work <span aria-hidden="true">↓</span>
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
            <p className="section-kicker">A little about me</p>
            <p>
              I build products from scratch through <strong>full-stack web development and system architecture</strong>,
              connecting APIs, deploying to the cloud, and automating delivery with DevOps.
            </p>
          </div>
        </section>

        <section className="section shell" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected experience</p>
              <h2 id="work-title">Where I worked and what I built.</h2>
            </div>
            <p>Real product work across web apps, integrations, and delivery.</p>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-item" key={item.company}>
                <div className="experience-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="experience-main">
                  <p className="experience-company">{item.company}</p>
                  <h3>{item.role}</h3>
                  <p className="experience-context">{item.context}</p>
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
                <p className="experience-period">{item.period}</p>
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
