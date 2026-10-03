import { createFileRoute } from "@tanstack/react-router";
import { education, internships, certifications } from "@/data/profile";
import { Section, Tag } from "@/components/site";

const title = "Education, Internship & Certifications — Challa Ranjith Kumar";
const desc = "B.Tech in AI & Data Science, a Generative AI internship at Pixelwind Technologies, and certifications in Python Full Stack, AWS and Node.js.";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: desc },
      { property: "og:title", content: title }, { property: "og:description", content: desc },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Journey,
});

function Journey() {
  return (
    <>
      <Section eyebrow="Internship" title="Hands-on learning">
        {internships.map((i) => (
          <div key={i.company} className="glass rounded-xl p-6">
            <div className="flex flex-wrap justify-between gap-2">
              <div><h3 className="text-lg font-semibold">{i.role}</h3><p className="text-muted-foreground">{i.company} · {i.location}</p></div>
              <span className="font-mono text-xs text-muted-foreground">{i.period}</span>
            </div>
            <ul className="mt-4 space-y-2">{i.points.map((p) => <li key={p} className="flex gap-3 text-sm text-muted-foreground"><span className="text-primary">▹</span>{p}</li>)}</ul>
            <div className="mt-4 flex flex-wrap gap-2">{i.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
          </div>
        ))}
      </Section>
      <Section eyebrow="Education" title="Academic path">
        <ol className="relative space-y-6 border-l pl-6">
          {education.map((e) => (
            <li key={e.degree} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-primary" />
              <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
              <h3 className="mt-1 font-semibold">{e.degree}</h3>
              <p className="text-sm text-muted-foreground">{e.school} · <span className="text-primary">{e.score}</span></p>
            </li>
          ))}
        </ol>
      </Section>
      <Section eyebrow="Certifications" title="Courses completed">
        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((c) => (
            <div key={c.name} className="glass card-lift rounded-xl p-5">
              <h3 className="font-medium">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.org}</p>
              <p className="mt-3 font-mono text-xs text-muted-foreground">{c.period}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
