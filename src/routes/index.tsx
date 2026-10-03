import { createFileRoute, Link } from "@tanstack/react-router";
import { profile, skills, projects, internships } from "@/data/profile";
import { Section, Tag, Btn } from "@/components/site";

const title = "Challa Ranjith Kumar — Entry-level Full Stack Web Developer";
const desc = "Portfolio of Challa Ranjith Kumar, a final-year AI & Data Science student and fresher full stack web developer with Java, Python, JavaScript and Generative AI projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.title,
          email: profile.email,
          sameAs: [profile.linkedin],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-20 md:grid-cols-[1.3fr_1fr] md:pt-28">
        <div className="animate-reveal">
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" /> Fresher · B.Tech AI & DS, class of 2027
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Hi, I'm <span className="text-gradient">Ranjith</span>.<br />
            Full Stack Web Developer.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Entry-level developer passionate about building responsive web applications and AI-driven tools with Java, Python, JavaScript and Generative AI.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90">View Projects</Link>
            <Link to="/resume" className="inline-flex items-center rounded-lg border bg-secondary/40 px-5 py-2.5 text-sm font-medium transition hover:border-primary/50">Resume</Link>
            <Link to="/contact" className="inline-flex items-center rounded-lg border bg-secondary/40 px-5 py-2.5 text-sm font-medium transition hover:border-primary/50">Contact Me</Link>
          </div>
          <div className="mt-6 flex gap-4 text-sm text-muted-foreground">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn ↗</a>
            <a href={`mailto:${profile.email}`} className="hover:text-primary">{profile.email}</a>
          </div>
        </div>
        <TerminalCard />
      </section>

      <Section eyebrow="01 · About" title="Who I am">
        <div className="grid gap-6 md:grid-cols-3">
          <p className="text-muted-foreground md:col-span-2 md:text-lg">{profile.objective}</p>
          <div className="glass rounded-xl p-5 text-sm">
            <p className="font-mono text-xs text-primary">Quick facts</p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>🎓 B.Tech AI & DS (2023–2027)</li>
              <li>💼 {internships.length} internship completed</li>
              <li>🛠 {projects.length} academic projects</li>
              <li>🗣 {profile.languages.join(", ")}</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="02 · Skills" title="What I work with">
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((s) => (
            <div key={s.category} className="glass card-lift rounded-xl p-6">
              <h3 className="font-medium">{s.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">{s.items.map((i) => <Tag key={i}>{i}</Tag>)}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="03 · Projects" title="What I've built">
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }} className="glass card-lift group rounded-xl p-6">
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>{p.category} · {p.type}</span><span>{p.period}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold group-hover:text-primary">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.tech.slice(0, 5).map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </Link>
          ))}
        </div>
        <div className="mt-8"><Btn variant="ghost" href="/projects">All projects →</Btn></div>
      </Section>
    </>
  );
}

function TerminalCard() {
  return (
    <div className="glass animate-reveal rounded-xl font-mono text-sm shadow-2xl [animation-delay:150ms]">
      <div className="flex gap-1.5 border-b px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-destructive/70" />
        <span className="h-3 w-3 rounded-full bg-accent/70" />
        <span className="h-3 w-3 rounded-full bg-primary/70" />
      </div>
      <pre className="overflow-x-auto p-5 leading-relaxed text-muted-foreground">
<span className="text-accent">const</span> ranjith = {"{"}
{"\n"}  role: <span className="text-primary">"Full Stack Dev"</span>,
{"\n"}  level: <span className="text-primary">"Fresher"</span>,
{"\n"}  stack: [<span className="text-primary">"Java"</span>, <span className="text-primary">"Python"</span>, <span className="text-primary">"JS"</span>],
{"\n"}  ai: [<span className="text-primary">"RAG"</span>, <span className="text-primary">"LLMs"</span>, <span className="text-primary">"MCP"</span>],
{"\n"}  openToWork: <span className="text-accent">true</span>,
{"\n"}{"}"};<span className="animate-blink text-primary">▍</span>
      </pre>
    </div>
  );
}
