import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { profile } from "@/data/profile";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/journey", label: "Journey" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="no-print sticky top-0 z-50 glass border-x-0 border-t-0">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="font-mono text-sm font-semibold">
          <span className="text-primary">~/</span>ranjith
        </Link>
        <nav className="flex gap-1 overflow-x-auto text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="no-print mt-24 border-t">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-4">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-primary">Email</a>
        </div>
      </div>
    </footer>
  );
}

export function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded-full border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground">{children}</span>;
}

export function Btn({ children, variant = "primary", ...p }: { children: ReactNode; variant?: "primary" | "ghost" } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:opacity-90"
      : "border bg-secondary/40 text-foreground hover:border-primary/50";
  return <a {...p} className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition ${cls} ${p.className ?? ""}`}>{children}</a>;
}
