import Image from "next/image";

const experience = [
  {
    role: "Senior Software Engineer",
    company: "N-LITE Sports",
    period: "Dec 2021 — Present",
    detail:
      "Planned features with use case and robustness diagrams. Built recurring team practices, Stripe seat-based subscriptions, multisport organization tools, and player assessments.",
    tags: ["Next.js", "NestJS", "MongoDB", "Stripe"],
  },
  {
    role: "Senior Software Engineer",
    company: "Assembled Systems",
    period: "Dec 2025 — Sep 2026",
    detail:
      "Integrated audio and text processing for customer service quality analysis with 95%+ accuracy. Added OCR and vision recognition for knowledge-base files and customizable playbook forms.",
    tags: ["React", "TypeScript", "Python", "FastAPI"],
  },
  {
    role: "Backend Engineer",
    company: "ICTI",
    period: "Dec 2025 — Feb 2026",
    detail:
      "Implemented asset tokenization with ICP DFX, CI/CD smoke tests for canisters and ledgers, and automated staging cycle monitoring and top-ups.",
    tags: ["Rust", "ICP", "CI/CD"],
  },
  {
    role: "DevOps Engineer",
    company: "Trade Imperial",
    period: "Jul 2025 — Aug 2025",
    detail:
      "Deployed the application to DigitalOcean with CI/CD, added Twilio push notifications, and connected real-time market-value webhooks.",
    tags: ["DigitalOcean", "PostgreSQL", "Twilio"],
  },
  {
    role: "Software Engineer",
    company: "RapidSignal Electronics",
    period: "May 2021 — Dec 2022",
    detail:
      "Worked on enterprise systems for batching plants and manufacturing management using .NET, ASP.NET Core APIs, Blazor, and Microsoft Dynamics AX 2012 and 365.",
    tags: [".NET", "ASP.NET Core", "Blazor", "Dynamics 365"],
  },
];

const capabilities = [
  {
    number: "01",
    title: "Build the product",
    description:
      "Turn an idea into usable web features, from the interface and API to the underlying data model.",
  },
  {
    number: "02",
    title: "Connect the systems",
    description:
      "Make payments, messaging, data processing, and external services work as part of one coherent flow.",
  },
  {
    number: "03",
    title: "Ship with confidence",
    description:
      "Set up deployments and automation that help teams release changes reliably and keep improving.",
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
            <p className="eyebrow"><span className="eyebrow-line" /> Philippines · Product, systems, delivery</p>
            <h1 id="hero-title">
              Senior software engineer. <em>Making ideas work.</em>
            </h1>
            <p className="hero-description">
              I&apos;m John Mark Bodegas. I build full-stack products, connect the systems behind them,
              and help teams ship with confidence.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:johnmarkbodegas041095@gmail.com">
                Get in touch <span aria-hidden="true">↗</span>
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
            <div className="panel-topline"><span>What I bring</span><span>01 / 03</span></div>
            <div className="panel-bottom">
              <p>From first conversation<br />to reliable release.</p>
              <span>Product <span className="panel-separator">/</span> Systems <span className="panel-separator">/</span> Delivery</span>
            </div>
          </div>
        </section>

        <section className="intro-band" aria-label="Professional summary">
          <div className="shell intro-inner">
            <p className="section-kicker">A little about me</p>
            <p>
              I work at the intersection of <strong>business needs and engineering detail</strong> —
              shaping ideas, building useful software, and making the path to production smoother.
            </p>
          </div>
        </section>

        <section className="section shell" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected experience</p>
              <h2 id="work-title">Work that moves things forward.</h2>
            </div>
            <p>Across product engineering, integrations, and delivery.</p>
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
                  <p className="experience-detail">{item.detail}</p>
                  <ul className="tag-list" aria-label={`Technologies used at ${item.company}`}>
                    {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
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
                <h2 id="approach-title">A practical range, end to end.</h2>
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
            <p className="skills-line"><span>Core tools</span> TypeScript · React · Next.js · Node.js · NestJS · C# · .NET · ASP.NET Core · Blazor · Microsoft Dynamics · Python · FastAPI · PostgreSQL · MongoDB · Docker</p>
          </div>
        </section>

        <section className="contact-section shell" id="contact" aria-labelledby="contact-title">
          <p className="section-kicker">Let's connect</p>
          <div className="contact-layout">
            <div>
              <h2 id="contact-title">Have something<br /><em>in mind?</em></h2>
              <p>I&apos;m always open to a conversation about useful products and challenging engineering work.</p>
            </div>
            <a className="contact-link" href="mailto:johnmarkbodegas041095@gmail.com">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>© {new Date().getFullYear()} John Mark Bodegas</p>
          <div className="footer-links">
            <a href="https://github.com/JMBodz" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/john-mark-bodegas/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="mailto:johnmarkbodegas041095@gmail.com">Email <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </footer>
    </>
  );
}
