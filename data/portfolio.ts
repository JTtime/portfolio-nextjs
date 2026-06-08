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
    name: "Jeevraj",
    tagline: "Open-source developer building document intelligence tools",
    description:
      "I build open-source Python libraries and developer tools — focused on document processing, ML-adjacent engineering, and making documents machine-readable before any LLM touches them.",
    email: "hello@jeevraj.dev",
    location: "India",
    availability: "Open to opportunities",
    resumeUrl: "/assets/resume.pdf",
    avatarUrl: undefined,
  },

  about: {
    headline: "I build infrastructure for documents.",
    bio: [
      "I'm a solo developer with an entrepreneurial streak — obsessed with open-source tooling, document processing pipelines, and the engineering that sits between raw PDFs and useful data.",
      "My current focus is a Python library for PDF table extraction: borderless tables, context capture, zero system dependencies. No LLMs, no model training from scratch — just deterministic, offline extraction powered by pre-trained ONNX models.",
      "I also build on the frontend side. React, TypeScript, component libraries. I published a React animation library called trishasync and have shipped full-stack features across multiple products.",
      "The goal is to build document infrastructure that makes the unstructured web machine-readable — and eventually, a company around it.",
    ],
    highlights: [
      { label: "Focus", value: "Document Processing & ML-Adjacent Engineering" },
      { label: "Stack", value: "Python · React · TypeScript · Next.js" },
      { label: "Current", value: "PDF Table Extraction Library (OSS)" },
      { label: "Ambition", value: "YC-bound document intelligence startup" },
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
      id: "pdf-table-extractor",
      title: "pdf-table-extractor",
      description:
        "A Python library for extracting tables from PDFs — including borderless and complex tables — with surrounding context capture. Zero system dependencies, offline, deterministic. Built on pdfplumber, PyMuPDF, and pre-trained ONNX models.",
      longDescription:
        "Designed for production use in document intelligence pipelines. Handles bordered, borderless, and nested tables. Captures surrounding paragraph context for each table. Ships with a pre-trained Table Transformer (TATR) ONNX model. No LLM required, no model training from scratch, no Tesseract or Poppler installs.",
      type: "personal",
      tags: ["Python", "PDF", "ML", "ONNX", "pdfplumber", "PyMuPDF", "OSS"],
      githubUrl: "https://github.com/JTtime/pdf-table-extractor",
      featured: true,
      year: 2024,
    },
    {
      id: "trishasync",
      title: "trishasync",
      description:
        "A React component library focused on animated promise-state transitions. Ships MorphSpinner, MorphButton, and GlassCard components with smooth loading/success/error state animations.",
      type: "personal",
      tags: ["React", "TypeScript", "npm", "Animation", "Component Library"],
      githubUrl: "https://github.com/JTtime/promiseTriState",
      liveUrl: "https://www.npmjs.com/package/trishasync",
      featured: true,
      year: 2024,
    },
    {
      id: "rag-ingestion-pipeline",
      title: "RAG Ingestion Pipeline",
      description:
        "A production RAG ingestion system with multi-format support (PDF, DOCX, PPTX, images), PDF classification, OCR pipelines, table/formula extraction, and a Node.js hybrid architecture. Built on sentence-transformers, FAISS, and pymupdf.",
      type: "personal",
      tags: ["Python", "RAG", "FAISS", "OCR", "LangChain", "Node.js"],
      githubUrl: "https://github.com/JTtime/rag-pipeline",
      year: 2024,
    },
    {
      id: "patent-management-tool",
      title: "Patent Management Tool",
      description:
        "Contributed frontend features to a patent lifecycle management SaaS — including multi-step figure description workflows, consolidated summary slides, and integration of an AI helping-agent view with optimistic UI updates.",
      type: "company",
      companyName: "Confidential",
      tags: ["React", "TypeScript", "Next.js", "SaaS"],
      year: 2024,
    },
    {
      id: "docling-contribution",
      title: "Docling OSS Contribution",
      description:
        "Open-source contribution to the Docling document parsing library — improved handling of multi-column PDF layouts and edge-case table detection.",
      type: "opensource",
      tags: ["Python", "PDF", "Open Source", "Document Parsing"],
      githubUrl: "https://github.com/DS4SD/docling",
      year: 2024,
    },
  ],

  blogs: [
    {
      id: "tool-calling",

      title:
        "From Chatbots to AI Agents: A Practical Guide to OpenAI Tool Calling",

      summary:
        "Practical lessons from building agentic AI systems with tool calling, orchestration, and production workflows.",

      date: "2025-08-02",

      tags: [
        "OpenAI",
        "AI Agents",
        "Tool Calling",
        "LLM"
      ],

      readingTime: "10 min",
      url: "https://www.linkedin.com/pulse/from-chatbots-ai-agents-practical-guide-building-agentic-taralkar-oxiuf/"

    },
    {
      id: "prompt-engineering",

      title:
        "Vibe Coding is a lie",

      summary:
        "Prompt Engineering Is Overrated. Engineering Skill Is Not.",

      date: "2026-02-01",

      tags: [
        "RAG",
        "LLM",
        "AI Engineering",
        "Prompt Engineering",
        "Vibe Coding"
      ],

      readingTime: "9 min",
      url: "https://jeevrajtaralkar.substack.com/p/prompt-engineering-is-overrated-engineering"
    },
    {
      id: "production-rag",

      title:
        "The Reality of Building a Production-Grade RAG System",

      summary:
        "Why real-world RAG systems require OCR, document understanding, multimodal parsing, and better retrieval design.",

      date: "2026-02-01",

      tags: [
        "RAG",
        "LLM",
        "AI Engineering"
      ],

      readingTime: "9 min"
    },
    {
      id: "genai-journey",

      title:
        "From JavaScript Curiosity to Enterprise GenAI Systems",

      summary:
        "My transition from traditional frontend engineering into production-grade AI systems.",

      date: "2025-08-01",

      tags: [
        "GenAI",
        "Career Growth",
        "MERN"
      ],

      readingTime: "8 min"
    },
    {
      id: "borderless-table-extraction",
      title: "Extracting Borderless Tables from PDFs Without an LLM",
      summary:
        "Most PDF table extractors break on borderless tables. Here's how I approached the problem using Table Transformer ONNX models, pdfplumber heuristics, and surrounding context capture — all without a single LLM call.",
      date: "2024-11-15",
      tags: ["Python", "PDF", "ML", "Document Processing"],
      readingTime: "8 min",
      url: "https://dev.to/jeevraj/borderless-table-extraction",
    },
    {
      id: "onnx-for-document-ml",
      title: "Why ONNX Is the Right Choice for Offline Document ML",
      summary:
        "A practical look at why pre-trained ONNX models beat fine-tuning your own for document processing tasks — covering inference speed, portability, zero-install distribution, and the tradeoffs that matter for a Python library.",
      date: "2024-10-02",
      tags: ["ONNX", "ML", "Python", "Offline AI"],
      readingTime: "6 min",
      url: "https://dev.to/jeevraj/onnx-document-ml",
    },
    {
      id: "yc-document-intelligence",
      title: "The Case for Document Infrastructure as a YC Startup",
      summary:
        "Unstructured data is still the hardest unsolved problem in enterprise AI. Every company drowns in PDFs, invoices, contracts, and reports. Here's why I think a deterministic, offline-first document processing layer is a fundable, defensible business.",
      date: "2024-09-18",
      tags: ["Startups", "YC", "Document AI", "Open Source"],
      readingTime: "10 min",
      url: "https://dev.to/jeevraj/document-intelligence-yc",
    },
    {
      id: "tatr-deep-dive",
      title: "Table Transformer (TATR) Deep Dive for Practitioners",
      summary:
        "Everything I learned reading order detection, TATR architecture, and hybrid pipelines for complex financial documents — and how this research shaped the roadmap of my PDF extraction library.",
      date: "2024-08-05",
      tags: ["Deep Learning", "TATR", "Document AI", "Research"],
      readingTime: "12 min",
      url: "https://dev.to/jeevraj/tatr-deep-dive",
    },
  ],

  experience: [
    {
      id: "current-freelance",
      company: "Independent / Freelance",
      role: "Open-Source Developer & Consultant",
      type: "freelance",
      startDate: "Jan 2024",
      endDate: "Present",
      description: [
        "Building open-source Python libraries for PDF table extraction targeting document intelligence pipelines",
        "Shipped trishasync — a React animation component library published to npm",
        "Consulting on frontend architecture (React/TypeScript) and Python ML tooling for early-stage startups",
        "Researching YC-viable product positioning for a document processing cloud API",
      ],
      techStack: [
        "Python",
        "React",
        "TypeScript",
        "ONNX",
        "pdfplumber",
        "PyMuPDF",
        "Next.js",
      ],
      remote: true,
    },
    {
      id: "patent-company",
      company: "Confidential Startup",
      role: "Frontend Engineer",
      type: "contract",
      startDate: "Jun 2024",
      endDate: "Nov 2024",
      description: [
        "Built multi-step figure description workflow with consolidated summary slides in a patent management SaaS",
        "Integrated AI helping-agent view with selection state, optimistic UI updates, and tooltip-based metadata",
        "Implemented pushQuestion API endpoint integration with real-time state management",
      ],
      techStack: ["React", "TypeScript", "Next.js", "REST APIs"],
      remote: true,
    },
  ],
};

export default portfolioData;