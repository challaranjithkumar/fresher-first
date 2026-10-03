import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { profile } from "@/data/profile";
import { Section } from "@/components/site";

const title = "Contact — Challa Ranjith Kumar";
const desc = "Get in touch with Challa Ranjith Kumar about entry-level software or web developer opportunities.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: desc },
      { property: "og:title", content: title }, { property: "og:description", content: desc },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(10, "Message is too short").max(2000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget));
    if (fd['website']) return; // honeypot
    const r = schema.safeParse(fd);
    if (!r.success) {
      setErrors(Object.fromEntries(r.error.issues.map((i) => [i.path[0], i.message])));
      return;
    }
    setErrors({});
    const { name, email, subject, message } = r.data;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field = "w-full rounded-lg border bg-secondary/40 px-4 py-2.5 text-sm outline-none focus:border-primary";
  return (
    <Section eyebrow="Contact" title="Let's talk about opportunities">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4 text-muted-foreground">
          <p>I'm open to entry-level software and web developer roles. Reach out anytime.</p>
          <p><span className="font-mono text-xs text-primary">EMAIL</span><br /><a className="hover:text-primary" href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p><span className="font-mono text-xs text-primary">PHONE</span><br />{profile.phone}</p>
          <p><span className="font-mono text-xs text-primary">LINKEDIN</span><br /><a className="hover:text-primary" href={profile.linkedin} target="_blank" rel="noreferrer">ranjith-challa ↗</a></p>
        </div>
        <form onSubmit={onSubmit} noValidate className="glass space-y-4 rounded-xl p-6">
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          {(["name", "email", "subject"] as const).map((f) => (
            <div key={f}>
              <label htmlFor={f} className="mb-1 block text-sm capitalize">{f}</label>
              <input id={f} name={f} type={f === "email" ? "email" : "text"} className={field} />
              {errors[f] && <p className="mt-1 text-xs text-destructive">{errors[f]}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="message" className="mb-1 block text-sm">Message</label>
            <textarea id="message" name="message" rows={5} className={field} />
            {errors['message'] && <p className="mt-1 text-xs text-destructive">{errors['message']}</p>}
          </div>
          <button className="w-full rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground">Send message</button>
          {sent && <p className="text-sm text-primary">Your email app should open with the message ready to send.</p>}
        </form>
      </div>
    </Section>
  );
}
