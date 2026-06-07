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

    tagline:
      "Full-Stack AI Engineer building enterprise GenAI systems",

    description:
      "Full-stack engineer specializing in Python, React, Next.js, TypeScript, and enterprise AI systems. I build production-grade GenAI applications, patent copilots, RAG pipelines, agentic workflows, and intelligent developer experiences.",

    email: "jeevraj.vjti@gmail.com",

    location: "Mumbai, Maharashtra, India",

    availability:
      "Open to Senior Fullstack / AI Engineering / Frontend opportunities",

    resumeUrl: "/assets/resume.pdf",

    avatarUrl: "/assets/profile.jpg",
  },

  about: {
    headline:
      "I build scalable AI-powered systems that solve real business problems.",

    bio: [
      "I’m a Full-Stack AI Engineer with strong expertise in Python backend systems, FastAPI, React/Next.js, and the MERN ecosystem, with growing specialization in enterprise AI and GenAI applications. My focus is not on building flashy demos, but on solving complex real-world problems through solid engineering, scalable architectures, and practical AI integration.",
"My technical strength lies in bridging robust backend systems with polished frontend experiences — building applications end-to-end using Python, FastAPI, Node.js, React, Next.js, MongoDB, and modern AI orchestration frameworks. I enjoy designing scalable APIs, agentic workflows, document intelligence systems, RAG pipelines, and streaming AI experiences that work reliably in production environments.",
"My journey into tech was unconventional. Before software engineering, I spent over a decade in operational environments solving practical problems under ambiguity. That experience shaped how I think as an engineer today: iterate fast, focus on business outcomes, and build systems that solve painful manual workflows rather than chasing hype.",

"Currently, I work on enterprise AI systems including patent drafting copilots, intelligent document processing, retrieval-augmented systems, agentic architectures, and LLM-powered workflows. I particularly enjoy working at the intersection of backend engineering, AI systems, and product thinking.",

"Long term, I aspire to build meaningful SaaS products that solve large-scale business problems using applied AI — especially in industries where workflows remain fragmented, manual, and inefficient."

    ],


    highlights: [
      {
        label: "Frontend",
        value:
          "React · Next.js · TypeScript · Material UI"
      },

      {
        label: "AI Engineering",
        value:
          "LLMs · Agents · RAG · Tool Calling"
      },

      {
        label: "Backend",
        value:
          "Node.js · Python · FastAPI"
      },

      {
        label: "Current Focus",
        value:
          "Enterprise GenAI Systems"
      }
    ],
  },

  social: [
    {
      label: "GitHub",
      url: "https://github.com/JTtime",
      icon: "Github",
    },

    {
      label: "LinkedIn",
      url:
        "https://www.linkedin.com/in/jeevraj-taralkar-69103829/",
      icon: "Linkedin",
    },

    {
      label: "Email",
      url: "mailto:your-email@example.com",
      icon: "Mail",
    }
  ],

  projects: [
    {
      id: "patent-copilot",

      title: "AI Patent Drafting Copilot",

      description:
        "Built enterprise patent drafting workflows powered by LLMs for claim generation, dependent claims, figure descriptions, summaries, and contextual drafting.",

      longDescription:
        "Worked on a production-grade patent lifecycle platform with AI-assisted drafting, subsection generation, streaming responses, background agents, optimistic UI updates, and complex document workflows.",

      type: "company",

      companyName: "Confidential Enterprise Client",

      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "LLM",
        "AI Agents",
        "Enterprise SaaS"
      ],

      featured: true,

      year: 2026,
    },

    {
      id: "enterprise-rag",

      title: "Enterprise RAG Pipeline",

      description:
        "Designed enterprise-grade document ingestion and retrieval workflows supporting PDFs, OCR, metadata extraction, chunking, embeddings, and semantic retrieval.",

      longDescription:
        "Built document pipelines for complex enterprise content where PDFs contain tables, scanned text, layouts, and multimodal content requiring more than naive chunking strategies.",

      type: "personal",

      tags: [
        "Python",
        "RAG",
        "LLM",
        "OCR",
        "Vector DB",
        "Document AI"
      ],

      featured: true,

      year: 2025,
    },

    {
      id: "librechat-customization",

      title: "Enterprise AI Chat Platform",

      description:
        "Customized LibreChat for enterprise clients with custom LLM backends, streaming responses, conditional rendering, and multi-provider orchestration.",

      type: "personal",

      tags: [
        "React",
        "Node.js",
        "LibreChat",
        "Streaming",
        "LLM"
      ],

      featured: true,

      year: 2026,
    },

    {
      id: "smartgrid-react-ui",

      title: "SmartGrid React UI",

      description:
        "Published a reusable React data grid component library with configurable rendering and UI abstractions for enterprise applications.",

      type: "personal",

      tags: [
        "React",
        "TypeScript",
        "NPM",
        "UI Library"
      ],

      githubUrl:
        "https://github.com/JTtime",

      featured: true,

      year: 2025,
    },

    {
      id: "gaplens-ai",

      title: "GapLens AI",

      description:
        "A GenAI-powered resume and interview assistant helping candidates improve resumes, identify gaps, and prepare for technical interviews.",

      type: "personal",

      tags: [
        "React",
        "Node.js",
        "OpenAI",
        "AI"
      ],

      featured: true,

      year: 2025,
    },

    {
      id: "abacus-recognition",

      title: "Abacus Answer Sheet Recognition",

      description:
        "CNN-based handwritten digit recognition integrated with FastAPI for automated answer sheet evaluation.",

      type: "personal",

      tags: [
        "Python",
        "CNN",
        "Computer Vision",
        "FastAPI"
      ],

      year: 2025,
    },

    {
      id: "accounting-anomaly",

      title: "Accounting Anomaly Detection",

      description:
        "Experimented with rule-based and unsupervised anomaly detection on accounting transaction data for identifying irregular financial patterns.",

      type: "personal",

      tags: [
        "Python",
        "Machine Learning",
        "Anomaly Detection"
      ],

      year: 2025,
    }
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

      readingTime: "10 min"
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
    }
  ],

  experience: [
    {
      id: "findability-sciences",

      company: "Findability Sciences",

      role:
        "Software Engineer / GenAI Engineer",

      type: "full-time",

      startDate: "2025",

      endDate: "Present",

      description: [
        "Building enterprise-grade GenAI systems and intelligent business workflows",
        "Developing React/Next.js interfaces for AI-powered applications",
        "Working on document intelligence, agentic systems, and enterprise automation",
        "Integrating LLM APIs, orchestration layers, and retrieval systems"
      ],

      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Python",
        "LLMs",
        "RAG"
      ],

      remote: true
    },

    {
      id: "freelance-ai",

      company:
        "Independent / Freelance",

      role:
        "Full-Stack AI Engineer",

      type: "freelance",

      startDate: "2024",

      endDate: "Present",

      description: [
        "Built AI copilots, RAG systems, and enterprise automation tools",
        "Developed streaming chat experiences and agentic workflows",
        "Created reusable React architectures for complex enterprise products",
        "Consulted on GenAI integrations and LLM-powered products"
      ],

      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Python",
        "FastAPI",
        "OpenAI"
      ],

      remote: true
    }
  ]
};

export default portfolioData;
