# Ranjith Kumar Challa — Fresher Portfolio Plan

## Positioning
"Entry-level Full Stack Web Developer & AI enthusiast" — final-year B.Tech AI & DS student. Projects, skills, internship and education lead the site. No invented experience, numbers, or skill percentages.

## Verified content (from your resume)
- Contact: email, phone, LinkedIn
- Education: B.Tech AI & DS (2023–2027, pursuing), Intermediate MPC 86.80%, SSC 10.0 CGPA
- Skills: Java, Python, C (DSA), HTML, CSS, JavaScript, ML, DL, NLP, LLMs, Prompt Engineering, RAG, MCP, LoRA/QLoRA, Vector DBs
- Internship: Python with Generative AI Intern, Pixelwind Technologies (Apr–Jun 2026)
- Projects: Multi-Model AI Assistant System, Responsive Portfolio Website
- Certifications: Python Full Stack (AIM UPSKILL), AWS Cloud Computing (APSSDC), Intro to Node.js (Linux Foundation)
- Languages: Telugu, English

## Still needed from you
1. College name: resume says "Sitam Engineering College, Vizianagaram", your message says "Satya Institute of Technology and Management" — which is correct?
2. GitHub username, Naukri profile URL
3. Target roles and preferred locations / remote preference
4. Node.js certificate dates (resume shows Oct 2025 – Sep 2025)
5. GitHub / live links for both projects, and a profile photo (optional)
Missing items show as "needs your input" in the dashboard, never as fake data.

## Phase 1 — Public portfolio (build now)
Dark theme first, refined developer aesthetic, subtle scroll reveals, reduced-motion support, mobile-first.
Pages: Home (hero, about, skills, featured projects), Projects (filter + detail pages), Experience & Education (internship, education timeline, certifications), Resume (view, print, download PDF), Contact (validated form, saved to database).
SEO: per-page metadata, sitemap, robots, Person structured data.

## Phase 2 — Private dashboard
Sign-in (only you). Edit profile, skills, education, internship, certifications, projects, links. Portfolio and resume both read from this single source, so edits appear everywhere. Resume versions saved with date.

## Phase 3 — AI Resume Maker
Paste a job description, get matching skills, missing skills ("Skill not currently listed in your profile"), relevant projects, a tailored summary and an ATS-friendly resume PDF. AI only rewords existing facts.

## Phase 4 — Jobs (needs a real source)
Job preferences, matches with matching/missing skills, in-app notifications. Requires a permitted job feed (e.g. a job-search API). No scraping, no fabricated links — unverified links say "Official application link requires verification."

## Technical details
- Platform stack replaces Next.js/Prisma: TanStack Start (React, TypeScript, SSR), Tailwind CSS, Framer Motion, Lovable Cloud (Postgres, auth, storage). Same goals, managed setup.
- Tables: profile, skills, education, internships, certifications, projects, resume_versions, social_links, contact_messages, job_preferences, jobs, job_notifications; admin role in a separate user_roles table with RLS.
- AI via the built-in AI gateway; server functions only, no keys in the browser.
- GitHub repos fetched from the public GitHub API by username.
