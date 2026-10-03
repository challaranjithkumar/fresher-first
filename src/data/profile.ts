// Single source of truth for portfolio + resume. Only verified resume facts.
export const profile = {
  name: "Challa Ranjith Kumar",
  title: "Entry-level Full Stack Web Developer",
  tagline: "Final-year AI & Data Science student building web apps and AI-driven tools.",
  location: "Andhra Pradesh, India",
  email: "challaranjithkuram523@gmail.com",
  phone: "+91 7569463579",
  linkedin: "https://www.linkedin.com/in/ranjith-challa-481513311",
  github: null as string | null, // needs input
  naukri: null as string | null, // needs input
  objective:
    "Passionate about full-stack development, with hands-on experience in Java and modern web development, along with practical exposure to Python and Generative AI. Completed an internship and built projects across frontend, backend, and AI-driven technologies. Seeking a software or web developer role to apply my skills and grow with an innovative team.",
  languages: ["Telugu", "English"],
};

export const skills: { category: string; items: string[] }[] = [
  { category: "Programming", items: ["Java", "Python", "Data Structures using C"] },
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
  {
    category: "AI / Generative AI",
    items: ["Machine Learning", "Deep Learning", "NLP", "Large Language Models", "Prompt Engineering", "RAG", "MCP", "Fine-Tuning (LoRA/QLoRA)", "Vector Databases"],
  },
  { category: "Soft skills", items: ["Problem Solving", "Self-learning", "Communication", "Team Collaboration"] },
];

export const education = [
  // NOTE: college name awaiting confirmation (Sitam vs Satya Institute)
  { degree: "B.Tech, Artificial Intelligence & Data Science", school: "Sitam Engineering College, Vizianagaram", period: "2023 – 2027", score: "Pursuing" },
  { degree: "Intermediate (MPC)", school: "Sri Satya Sai Junior College, Salur", period: "2021 – 2023", score: "86.80%" },
  { degree: "Secondary Education (SSC)", school: "Z.P. High School, Panchali", period: "2020 – 2021", score: "10.0 CGPA" },
];

export const internships = [
  {
    role: "Python with Generative AI Intern",
    company: "Pixelwind Technologies",
    location: "Visakhapatnam",
    period: "Apr 2026 – Jun 2026",
    points: [
      "Completed a Generative AI internship covering Machine Learning, Deep Learning, NLP, and modern LLM systems.",
      "Hands-on exposure to transformers, attention mechanisms, prompt engineering, RAG, and Model Context Protocol (MCP).",
      "Learned model optimization techniques including fine-tuning, LoRA/QLoRA, and vector databases for similarity search.",
    ],
    tech: ["Python", "LLMs", "RAG", "MCP", "LoRA/QLoRA", "Vector DBs"],
  },
];

export const certifications = [
  { name: "Python Full Stack", org: "AIM UPSKILL Tech", period: "Aug 2025 – Oct 2025" },
  { name: "AWS Cloud Computing", org: "AP State Skill Development", period: "Dec 2024 – Jan 2025" },
  { name: "Introduction to Node.js", org: "Linux Foundation", period: "2025" },
];

export type Project = {
  slug: string;
  name: string;
  category: "AI" | "Frontend" | "Full Stack";
  type: "Academic" | "Personal";
  period: string;
  summary: string;
  points: string[];
  tech: string[];
  featured: boolean;
  repo: string | null;
  demo: string | null;
};

export const projects: Project[] = [
  {
    slug: "multi-model-ai-assistant",
    name: "Multi-Model AI Assistant System",
    category: "AI",
    type: "Academic",
    period: "May 2026 – Jun 2026",
    summary: "An AI assistant that routes each query to the language model best suited for the task, grounded in external documents.",
    points: [
      "Routes user queries across multiple language models to leverage the strengths of each for different task types.",
      "Retrieval-Augmented Generation with embeddings, chunking, and vector search to ground responses in documents.",
      "Prompt engineering plus Model Context Protocol (MCP) for structured tool calling with external services.",
    ],
    tech: ["Python", "LLMs", "RAG", "Embeddings", "Vector Search", "MCP"],
    featured: true,
    repo: null,
    demo: null,
  },
  {
    slug: "responsive-portfolio-website",
    name: "Responsive Portfolio Website",
    category: "Full Stack",
    type: "Academic",
    period: "Feb 2025 – Mar 2025",
    summary: "A personal portfolio web app showcasing skills, projects, resume, and contact information in an accessible format.",
    points: [
      "Showcases skills, projects, resume, and contact details in a visually appealing, accessible layout.",
      "Frontend built with HTML, CSS, and JavaScript, using a lightweight Python web framework for routing and deployment.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    featured: true,
    repo: null,
    demo: null,
  },
];

export const resumeMeta = { version: "v1", updated: "Oct 2026" };
