import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { projects } from "@/data/profile";
import { Section, Tag } from "@/components/site";

const title = "Projects — Challa Ranjith Kumar";
const desc = "Academic and personal projects by Challa Ranjith Kumar: an AI multi-model assistant with RAG and MCP, and a responsive portfolio web app.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: desc },
      { property: "og:title", content: title }, { property: "og:description", content: desc },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const cats = ["All", "AI", "Full Stack", "Frontend"] as const;

function ProjectsPage() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const list = projects.filter((p) => cat === "All" || p.category === cat);
  return (
    <Section eyebrow="Projects" title="Things I've built while learning">
      <div className="mb-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${cat === c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
            {c}
          </button>
        ))}
      </div>
      {list.length === 0 ? (
        <p className="text-muted-foreground">No projects in this category yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {list.map((p) => (
            <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }} className="glass card-lift group rounded-xl p-6">
              <div className="flex justify-between font-mono text-xs text-muted-foreground"><span>{p.category} · {p.type}</span><span>{p.period}</span></div>
              <h3 className="mt-3 text-xl font-semibold group-hover:text-primary">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}
