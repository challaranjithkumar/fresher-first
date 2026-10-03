import { createFileRoute } from "@tanstack/react-router";
import { profile, skills, education, internships, projects, certifications, resumeMeta } from "@/data/profile";

const title = "Resume — Challa Ranjith Kumar";
const desc = "Resume of Challa Ranjith Kumar, fresher full stack web developer: skills, education, internship, projects and certifications.";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: desc },
      { property: "og:title", content: title }, { property: "og:description", content: desc },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Resume,
});

function H({ children }: { children: string }) {
  return <h2 className="mt-6 border-b pb-1 text-sm font-semibold uppercase tracking-wider text-primary print:text-black">{children}</h2>;
}

function Resume() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs text-muted-foreground">Version {resumeMeta.version} · Updated {resumeMeta.updated}</p>
        <button onClick={() => window.print()} className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Print / Save as PDF</button>
      </div>
      <article className="glass rounded-xl p-8 text-sm leading-relaxed print:border-0 print:p-0">
        <h1 className="text-3xl font-semibold">{profile.name}</h1>
        <p className="text-muted-foreground">{profile.phone} · {profile.email} · linkedin.com/in/ranjith-challa-481513311</p>
        <H>Objective</H><p className="mt-2">{profile.objective}</p>
        <H>Education</H>
        {education.map((e) => <div key={e.degree} className="mt-2 flex justify-between gap-4"><span><b>{e.degree}</b> — {e.school} ({e.score})</span><span className="shrink-0">{e.period}</span></div>)}
        <H>Technical Skills</H>
        {skills.map((s) => <p key={s.category} className="mt-1"><b>{s.category}:</b> {s.items.join(", ")}</p>)}
        <H>Internship</H>
        {internships.map((i) => (
          <div key={i.company} className="mt-2">
            <div className="flex justify-between"><b>{i.role} — {i.company}, {i.location}</b><span>{i.period}</span></div>
            <ul className="ml-5 list-disc">{i.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        ))}
        <H>Academic Projects</H>
        {projects.map((p) => (
          <div key={p.slug} className="mt-2">
            <div className="flex justify-between"><b>{p.name}</b><span>{p.period}</span></div>
            <ul className="ml-5 list-disc">{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
          </div>
        ))}
        <H>Certifications</H>
        <ul className="ml-5 mt-2 list-disc">{certifications.map((c) => <li key={c.name}>{c.name} — {c.org} ({c.period})</li>)}</ul>
        <H>Languages</H><p className="mt-2">{profile.languages.join(", ")}</p>
      </article>
    </div>
  );
}
