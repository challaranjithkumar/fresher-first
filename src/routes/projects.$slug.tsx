import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects } from "@/data/profile";
import { Section, Tag } from "@/components/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    const t = `${loaderData.project.name} — Challa Ranjith Kumar`;
    return {
      meta: [
        { title: t }, { name: "description", content: loaderData.project.summary },
        { property: "og:title", content: t }, { property: "og:description", content: loaderData.project.summary },
        { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <Section eyebrow="404" title="Project not found"><Link to="/projects" className="text-primary">← Back to projects</Link></Section>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();
  return (
    <Section eyebrow={`${p.category} · ${p.type} · ${p.period}`} title={p.name}>
      <p className="max-w-3xl text-lg text-muted-foreground">{p.summary}</p>
      <h3 className="mt-10 font-medium">Key features</h3>
      <ul className="mt-4 max-w-3xl space-y-3">
        {p.points.map((pt) => (
          <li key={pt} className="flex gap-3 text-muted-foreground"><span className="text-primary">▹</span>{pt}</li>
        ))}
      </ul>
      <h3 className="mt-10 font-medium">Technologies</h3>
      <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
      <div className="mt-10 flex flex-wrap gap-3 text-sm">
        {p.repo ? <a href={p.repo} target="_blank" rel="noreferrer" className="rounded-lg bg-primary px-5 py-2.5 text-primary-foreground">GitHub</a> : <span className="rounded-lg border px-4 py-2 text-muted-foreground">GitHub link coming soon</span>}
        {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="rounded-lg border px-5 py-2.5">Live demo</a>}
      </div>
      <Link to="/projects" className="mt-12 inline-block text-sm text-primary">← All projects</Link>
    </Section>
  );
}
