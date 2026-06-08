// ============================================================
// PORTFOLIO DATA — Edit this file to update the entire site
// ============================================================

export type ProjectType = "personal" | "company" | "opensource";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  type: ProjectType;
  tags: string[];
  thumbnail?: string; // path relative to /public/assets/
  githubUrl?: string;
  liveUrl?: string;
  companyUrl?: string;
  companyName?: string;
  featured?: boolean;
  year: number;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string; // ISO date string
  tags: string[];
  url?: string; // external link (e.g. Medium, Hashnode, Dev.to)
  readingTime?: string;
  thumbnail?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: "full-time" | "part-time" | "contract" | "internship" | "freelance";
  startDate: string; // e.g. "Jan 2023"
  endDate: string | "Present";
  description: string[];
  techStack: string[];
  companyUrl?: string;
  companyLogo?: string; // path relative to /public/assets/
  location?: string;
  remote?: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string; // lucide icon name
}

export interface PortfolioData {
  meta: {
    name: string;
    tagline: string;
    description: string;
    email: string;
    location: string;
    availability: string; // e.g. "Open to opportunities"
    resumeUrl?: string; // path to resume PDF in /public/assets/
    avatarUrl?: string; // path relative to /public/assets/
  };
  about: {
    headline: string;
    bio: string[];
    highlights: { label: string; value: string }[];
  };
  social: SocialLink[];
  projects: Project[];
  blogs: BlogPost[];
  experience: Experience[];
}

const portfolioData: PortfolioData = {
  meta: {
    name: "Jeevraj Taralkar",
    tagline: "AI Product Engineer · Full-Stack · LLMs · Agents · RAG",
    description:
      "I build and ship production AI systems — agentic workflows, LLM pipelines, and full-stack SaaS used by Fortune 500 teams, government platforms, and 500K+ users. 6 years of end-to-end ownership across React, Python, and AI infrastructure.",
    email: "jeevraj.vjti@gmail.com",
    location: "Mumbai, India",
    availability: "Open to remote opportunities",
    resumeUrl: "/assets/Jeevraj-Taralkar-AInative.pdf",
    avatarUrl: undefined,
  },

  about: {
    headline: "I ship AI products that work in the real world — not just in demos",
    bio: [
      "I'm a Fullstack AI Engineer with 6+ years of experience building production systems that combine LLMs, agentic workflows, and full-stack engineering. My work has reached Fortune 500 managers, 500K+ consumer app users, and government classrooms across three Indian states.",
      "At Findability Sciences, I own the frontend and backend of a flagship Agentic AI platform — an LLM-powered analytics system running on SAP HANA that handles 3,000+ daily interactions, reduced query resolution time by 54%, and cut billion-row query latency from ~60s to under 3s.",
      "I've also built a full AI-assisted patent drafting product end-to-end: agentic flows, tool calling, OAuth access, and markdown-safe LLM outputs for IP law firms. And a GenAI-powered LMS deployed across three Indian states, integrating real-time doubt solving, MCQ generation, and hardware interactions with IFP boards.",
      "I think in systems, not just features. I care about latency, reliability, and the UX of AI-powered products — not just whether the model responds.",
    ],
    highlights: [
      { label: "Current", value: "AI Product Engineer @ Findability Sciences" },
      { label: "Stack", value: "Python · FastAPI · React · Next.js · TypeScript" },
      { label: "AI", value: "LLMs · RAG · Agents · Tool Calling · OpenAI · Azure" },
      { label: "Scale", value: "Fortune 500 clients · 500K+ users · 3,000+ daily AI interactions" },
    ],
  },

  social: [
    { label: "GitHub", url: "https://github.com/JTtime", icon: "Github" },
    { label: "Twitter / X", url: "https://twitter.com/JTtime_C", icon: "Twitter" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/jeevraj-taralkar-69103829/",
      icon: "Linkedin",
    },
    { label: "Email", url: "mailto:jeevraj.vjti@gmail.com", icon: "Mail" },
  ],

  projects: [
    {
      id: "agentic-analytics-sap",
      title: "Agentic AI Analytics on SAP HANA",
      description:
        "Production LLM pipeline that lets 800+ global managers query billion-row SAP HANA datasets in plain English. Enforces RBAC-aware SQL guardrails (partition pruning, cost checks) on LLM-generated queries. Reduced query latency from ~60s to under 3s and cut overall query load by ~70%.",
      longDescription:
        "Built on FastAPI and OpenAI with a custom SQL guardrail layer that enforces row-level security, partition pruning, and query cost limits before any LLM-generated SQL touches the database. Handles 3,000+ daily interactions. The agentic layer routes between clarification, decomposition, and direct execution depending on query complexity.",
      type: "company",
      companyName: "Findability Sciences",
      companyUrl: "https://www.findability.ai/en/manufacturing-ai",
      tags: ["Python", "FastAPI", "OpenAI", "SAP HANA", "Agents", "LLM", "SQL Guardrails"],
      featured: true,
      year: 2025,
    },
    {
      id: "patent-drafting-ai",
      title: "AI Patent Drafting Copilot",
      description:
        "End-to-end AI-assisted patent drafting platform for IP law firms. Built agentic flows with tool calling, OAuth-based secure access, and markdown-safe LLM outputs. Dual attorney/inventor portals with version management, claims refinement, and examiner analysis views — enabling 60%+ time savings in patent drafting.",
      longDescription:
        "Full ownership of frontend (Next.js, React, TypeScript, Zustand) and backend AI pipeline (FastAPI, OpenAI). Features include CKEditor-integrated AI content insertion, collapsible draft blocks, QA notes workflows, claim version dropdowns with RBAC, and real-time state management across the attorney and inventor portals.",
      type: "company",
      companyName: "Findability Sciences",
      companyUrl: "https://www.findability.ai/en",
      tags: ["Next.js", "React", "TypeScript", "FastAPI", "OpenAI", "Tool Calling", "Agents", "Zustand"],
      featured: true,
      year: 2025,
    },
    {
      id: "genai-lms",
      title: "GenAI-Powered Government LMS",
      description:
        "A full-stack Learning Management System deployed across 3 Indian states, supporting 10K+ monthly sessions. Integrated LLM-based doubt solving and MCQ generation directly into digital classrooms with support for IFP boards, pen input, and clicker hardware. Cut teacher effort by 40% and deployment time by 60% via a microfrontend + microservices architecture.",
      type: "company",
      companyName: "Vridhee Innovations",
      companyUrl: "https://about.vridhee.com/",
      tags: ["React", "Node.js", "FastAPI", "LLM", "GenAI", "Microfrontends", "Python"],
      featured: true,
      year: 2024,
    },
    {
      id: "edufund-onboarding",
      title: "EduFund Mobile Onboarding & GenAI Chatbot",
      description:
        "Designed and shipped the end-to-end onboarding flow for a consumer fintech app with 500K+ users, as the sole frontend engineer. Also built a GenAI chatbot for college fee prediction using Python and OpenAI APIs — working across Web (Next.js), Mobile (React Native), and Backend (FastAPI, Node.js).",
      type: "company",
      companyName: "EduFund",
      tags: ["React Native", "Next.js", "FastAPI", "Python", "OpenAI", "Node.js"],
      year: 2023,
    },
    {
      id: "trishasync",
      title: "trishasync",
      description:
        "A published React component library for animated promise-state transitions. Ships MorphSpinner, MorphButton, and GlassCard components with smooth loading/success/error state animations. Available on npm.",
      type: "personal",
      tags: ["React", "TypeScript", "npm", "Animation", "Component Library"],
      githubUrl: "https://github.com/JTtime/promiseTriState",
      liveUrl: "https://www.npmjs.com/package/trishasync",
      featured: false,
      year: 2024,
    },
    {
      id: "rag-ingestion-pipeline",
      title: "Production RAG Ingestion Pipeline",
      description:
        "A production-grade RAG ingestion system with multi-format support (PDF, DOCX, PPTX, images), PDF classification, OCR pipelines, table and formula extraction, and a Node.js hybrid architecture. Built on sentence-transformers, FAISS, and PyMuPDF.",
      type: "personal",
      tags: ["Python", "RAG", "FAISS", "OCR", "LangChain", "Node.js", "PyMuPDF"],
      githubUrl: "https://github.com/JTtime/rag-pipeline",
      year: 2024,
    },
  ],

  blogs: [
    {
      id: "borderless-table-extraction",
      title: "Extracting Borderless Tables from PDFs Without an LLM",
      summary:
        "Most PDF table extractors break on borderless tables. Here's how I approached the problem using Table Transformer ONNX models, pdfplumber heuristics, and surrounding context capture — all without a single LLM call.",
      date: "2026-06-08",
      tags: ["Python", "PDF", "ML", "Document Processing"],
      readingTime: "8 min",
      url: "https://jeevrajtaralkar.substack.com/p/extracting-borderless-tables-from",
    },
    {
      id: "ONNX-document-ML",
      title: "Why ONNX Is the Right Choice for Offline Document ML",
      summary:
        "After working on document-heavy ML systems, I’ve become increasingly convinced that for many practical use cases, pre-trained ONNX models outperform custom-trained pipelines in overall engineering value.",
      date: "2026-06-08",
      tags: ["OpenAI", "AI Agents", "Tool Calling", "LLM"],
      readingTime: "12 min",
      url: "https://open.substack.com/pub/jeevrajtaralkar/p/why-onnx-is-the-right-choice-for",
    },
    {
      id: "tool-calling",
      title: "From Chatbots to AI Agents: A Practical Guide to OpenAI Tool Calling",
      summary:
        "Practical lessons from building agentic AI systems with tool calling, orchestration, and production workflows.",
      date: "2025-08-02",
      tags: ["OpenAI", "AI Agents", "Tool Calling", "LLM"],
      readingTime: "10 min",
      url: "https://www.linkedin.com/pulse/from-chatbots-ai-agents-practical-guide-building-agentic-taralkar-oxiuf/",
    },
    {
      id: "prompt-engineering",
      title: "Vibe Coding is a lie",
      summary: "Prompt Engineering Is Overrated. Engineering Skill Is Not.",
      date: "2026-02-01",
      tags: ["RAG", "LLM", "AI Engineering", "Prompt Engineering", "Vibe Coding"],
      readingTime: "9 min",
      url: "https://jeevrajtaralkar.substack.com/p/prompt-engineering-is-overrated-engineering",
    },
    {
      id: "production-rag",
      title: "The Reality of Building a Production-Grade RAG System",
      summary:
        "A hands-on look at what actually breaks when you deploy RAG in production — and how startup founders can design systems that handle complex, unstructured data like Fortune 500 documents.",
      date: "2025-10-22",
      tags: ["RAG", "LLM", "AI Engineering"],
      readingTime: "9 min",
      url: "https://jeevrajtaralkar.substack.com/p/the-harsh-reality-of-rag-why-youtube?triedRedirect=true"
    },
    {
      id: "openai-cheaper-models",
      title: "I Tried the Cheaper Models. Here’s Why I Came Back to OpenAI",
      summary: "Benchmarks are fun. Demos are exciting. Blog posts that claim “this model beats GPT on reasoning” make for great headlines. But when you’re actually building production-grade AI apps? That’s where the rubber meets the road.",
      date: "2025-08-18",
      tags: ["OpenAI", "Cheaper Models", "GenAI"],
      url: "https://jeevrajtaralkar.substack.com/p/i-tried-the-cheaper-models-heres",
      readingTime: "8 min",
    },
    {
      id: "genai-journey",
      title: "From JavaScript Curiosity to Enterprise GenAI Systems",
      summary: "My transition from traditional fullstack engineering into production-grade AI systems.",
      date: "2025-08-02",
      tags: ["GenAI", "Career Growth", "MERN", "OpenAI"],
      readingTime: "8 min",
      url: "https://www.linkedin.com/pulse/from-javascript-curiosity-building-enterprise-grade-genai-taralkar-qdkwf/"
    },
   
    // {
    //   id: "yc-document-intelligence",
    //   title: "The Case for Document Infrastructure as a YC Startup",
    //   summary:
    //     "Unstructured data is still the hardest unsolved problem in enterprise AI. Every company drowns in PDFs, invoices, contracts, and reports. Here's why I think a deterministic, offline-first document processing layer is a fundable, defensible business.",
    //   date: "2024-09-18",
    //   tags: ["Startups", "YC", "Document AI", "Open Source"],
    //   readingTime: "10 min",
    //   url: "https://dev.to/jeevraj/document-intelligence-yc",
    // },
    // {
    //   id: "tatr-deep-dive",
    //   title: "Table Transformer (TATR) Deep Dive for Practitioners",
    //   summary:
    //     "Everything I learned reading order detection, TATR architecture, and hybrid pipelines for complex financial documents — and how this research shaped the roadmap of my PDF extraction library.",
    //   date: "2024-08-05",
    //   tags: ["Deep Learning", "TATR", "Document AI", "Research"],
    //   readingTime: "12 min",
    //   url: "https://dev.to/jeevraj/tatr-deep-dive",
    // },
  ],

  experience: [
    {
      id: "findability-sciences",
      company: "Findability Sciences",
      role: "Software Engineer — AI Product",
      type: "full-time",
      startDate: "Jan 2025",
      endDate: "Present",
      description: [
        "Own end-to-end development of the company's flagship Agentic AI platform — a production LLM system handling 3,000+ daily interactions used by 800+ global managers at Fortune 500 clients",
        "Built and scaled LLM pipelines (FastAPI + OpenAI/Azure OpenAI) for automated analytics and reporting on SAP HANA, reducing query latency from ~60s to under 3s on billion-row datasets",
        "Enforced RBAC-aware SQL guardrails on LLM-generated queries — partition pruning, cost checks — reducing query load by ~70%",
        "Led development of an AI patent drafting copilot with agentic flows, tool calling, and OAuth-based access, enabling 60%+ time savings in patent drafting for IP law firms",
        "Shipped dual attorney/inventor portals end-to-end: claims refinement views, version management, QA workflows, and CKEditor-integrated AI content insertion",
      ],
      techStack: [
        "Python",
        "FastAPI",
        "OpenAI",
        "Azure OpenAI",
        "React",
        "Next.js",
        "TypeScript",
        "Zustand",
        "SAP HANA",
        "Agents",
        "Tool Calling",
      ],
      companyUrl: "https://www.findability.ai/en",
      companyLogo: "findability-logo.jpg",
      remote: true,
      location: "Mumbai, India",
    },
    {
      id: "vridhee-innovations",
      company: "Vridhee Innovations",
      role: "Full-Stack Engineer — AI",
      type: "full-time",
      startDate: "May 2024",
      endDate: "Jan 2025",
      description: [
        "Built and deployed a GenAI-powered LMS (React, Node.js, FastAPI) used across 3 Indian states, supporting 10K+ monthly sessions",
        "Integrated LLM-based doubt solving and MCQ generation into digital classrooms, reducing teacher effort by 40%",
        "Designed microfrontend + Python microservices architecture that cut deployment time by 60%",
        "Added hardware integrations for IFP boards, clicker devices, and pen input for classroom deployments",
        "Mentored junior engineers and standardized frontend and backend best practices across the team",
      ],
      techStack: [
        "React",
        "Node.js",
        "FastAPI",
        "Python",
        "LLM",
        "Microfrontends",
        "Microservices",
        "Docker",
      ],
      companyUrl: "https://about.vridhee.com/",
      companyLogo: "vridhee-logo.svg",
      remote: false,
      location: "Navi Mumbai, India",
    },
    {
      id: "edufund",
      company: "EduFund",
      role: "Product Engineer",
      type: "full-time",
      startDate: "May 2023",
      endDate: "Mar 2024",
      companyLogo: "edufund-logo.svg",
      companyUrl: "https://www.edufund.in/", 
      description: [
        "Sole frontend engineer who designed and shipped the end-to-end onboarding flow for a mobile app serving 500K+ users",
        "Built a GenAI chatbot for college fee prediction using Python and OpenAI APIs",
        "Worked across three surfaces simultaneously: Web (Next.js), Mobile (React Native), and Backend (FastAPI, Node.js)",
      ],
      techStack: [
        "Next.js",
        "React Native",
        "FastAPI",
        "Python",
        "OpenAI",
        "Node.js",
        "TypeScript",
      ],
      remote: false,
      location: "Bengaluru, India",
    },
    {
      id: "headgear-audio",
      company: "HeadGear Audio LLP",
      role: "Full-Stack Web Developer",
      type: "full-time",
      startDate: "Aug 2019",
      endDate: "Apr 2023",
      companyLogo: "headgear-audio-logo.png",
      companyUrl: "https://headgearaudio.in/",
      description: [
        "Built an end-to-end e-commerce platform using Next.js with a Python FastAPI backend",
        "Implemented analytics dashboards, third-party API integrations, and SEO optimizations",
      ],
      techStack: ["Next.js", "Python", "FastAPI", "React", "SEO"],
      remote: false,
      location: "Mumbai, India",
    },
  ],
};

export default portfolioData;