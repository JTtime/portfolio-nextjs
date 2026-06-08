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
      "AI Product Engineer | Senior Full-Stack Engineer (LLMs, RAG, Agents)",

    description:
      "AI-native full-stack engineer with 6+ years of experience building and scaling production AI products. Specialized in integrating LLMs into real systems — RAG pipelines, agent workflows, tool calling, intelligent document systems, and AI-powered SaaS used by Fortune 500 teams, government platforms, and 500K+ users.",

    email: "jeevraj.vjti@gmail.com",

    location: "Mumbai, Maharashtra, India",

    availability:
      "Open to Senior Full-Stack / AI Engineering / GenAI Product opportunities",

    resumeUrl: "/assets/resume.pdf",

    avatarUrl: "/assets/profile.jpg",
  },

  about: {
    headline:
      "I build production AI systems that solve real business problems at scale.",

    bio: [
      "I’m an AI-native Full-Stack Engineer with 6+ years of experience building production-grade applications across web, backend, and intelligent systems. Over the last few years, my work has increasingly focused on applied AI — integrating LLMs into enterprise products, building agentic workflows, secure data systems, and scalable GenAI experiences used by real users in production.",

      "My strength lies in owning products end-to-end. I work across React/Next.js frontends, FastAPI and Node.js backends, database systems, and AI orchestration layers to build complete systems rather than isolated features. I particularly enjoy solving messy engineering problems involving streaming architectures, RAG pipelines, document intelligence, tool calling, structured generation, and enterprise-grade AI reliability.",

      "At Findability Sciences, I work on production AI systems used by 800+ global managers and enterprise clients. My work includes agentic workflows, patent drafting copilots, LLM-powered analytics, and secure AI systems that process thousands of daily interactions. Previously, I helped build a GenAI-powered LMS used across multiple Indian states and worked on fintech onboarding systems serving more than 500K users.",

      "I care deeply about practical engineering over hype. My approach to AI is grounded in shipping systems that improve workflows, reduce manual effort, and deliver measurable business outcomes — whether that means reducing patent drafting effort, enabling natural language analytics on billion-row datasets, or helping educators automate classroom workflows.",

      "Long term, I aim to build meaningful AI-first SaaS products that solve painful real-world problems at scale, particularly in domains where workflows are fragmented, manual, and inefficient."
    ],

    highlights: [
      {
        label: "Experience",
        value: "6+ Years"
      },

      {
        label: "AI Engineering",
        value: "LLMs · Agents · RAG · Tool Calling · Prompt Evaluation"
      },

      {
        label: "Frontend",
        value: "React · Next.js · TypeScript · React Native"
      },

      {
        label: "Backend",
        value: "Python · FastAPI · Node.js · SQL"
      },

      {
        label: "Current Focus",
        value: "Enterprise GenAI Systems"
      },

      {
        label: "Specialization",
        value: "Production AI Products"
      }
    ],
  },
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

    
  ],


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
      url: "mailto:jeevraj.vjti@gmail.com",
      icon: "Mail",
    }
  ],

  projects: [
    {
      id: "patent-drafting-copilot",

      title: "AI Patent Drafting Copilot",

      description:
        "Built a production-grade AI patent drafting platform enabling automated claim drafting, dependent claims generation, figure descriptions, summaries, technical field creation, and contextual patent assistance for IP law firms.",

      longDescription:
        "Owned frontend and backend development for an enterprise patent lifecycle platform designed to reduce drafting effort for legal professionals by 60%+. Built agentic workflows, subsection-level AI drafting, markdown-safe structured generation, streaming responses, background generation agents, contextual editing flows, secure OAuth-based access, and intelligent drafting orchestration. Worked extensively on optimistic UI patterns, AI feedback loops, long-form generation handling, and scalable document workflows.",

      type: "company",

      companyName: "Findability Sciences",

      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "Python",
        "FastAPI",
        "OpenAI",
        "LLM",
        "AI Agents",
        "Streaming",
        "Enterprise SaaS"
      ],

      featured: true,

      year: 2026,

      liveUrl:
        "https://www.findability.ai/en/agentic-ai-platform",

      companyUrl:
        "https://www.findability.ai"
    },

    {
      id: "sap-hana-analytics",

      title: "LLM-Based Analytics on SAP HANA",

      description:
        "Built secure LLM-powered analytics workflows allowing enterprise users to query billion-row SAP HANA datasets using natural language.",

      longDescription:
        "Designed and implemented enterprise guardrails around LLM-generated SQL including RBAC-based access filtering, partition pruning, query cost validation, and SQL safety mechanisms. Reduced database query load by ~70% while improving analytics latency from ~60 seconds to under 3 seconds. Built workflows enabling non-technical managers to perform advanced analytics without SQL expertise.",

      type: "company",

      companyName: "Findability Sciences",

      tags: [
        "Python",
        "FastAPI",
        "OpenAI",
        "SAP HANA",
        "SQL",
        "LLM",
        "Enterprise AI",
        "Guardrails"
      ],

      featured: true,

      year: 2026,

      companyUrl:
        "https://www.findability.ai"
    },

    {
      id: "enterprise-agentic-platform",

      title: "Enterprise Agentic AI Platform",

      description:
        "Built and scaled a production-grade agentic AI system handling 3000+ daily interactions for intelligent business workflows.",

      longDescription:
        "Led frontend and backend engineering for enterprise AI assistants capable of contextual reasoning, tool calling, structured responses, and workflow automation. Built scalable orchestration patterns for production reliability, conversation handling, document understanding, streaming AI responses, and intelligent business reporting systems used by 800+ global managers.",

      type: "company",

      companyName: "Findability Sciences",

      tags: [
        "Agents",
        "OpenAI",
        "Tool Calling",
        "FastAPI",
        "React",
        "Next.js",
        "Enterprise AI",
        "RAG"
      ],

      featured: true,

      year: 2026,

      companyUrl:
        "https://www.findability.ai"
    },

    {
      id: "government-lms-genai",

      title: "Government LMS with GenAI",

      description:
        "Built and deployed a GenAI-powered Learning Management System used across multiple Indian states supporting digital classrooms and intelligent education workflows.",

      longDescription:
        "Developed AI-powered doubt solving, MCQ generation, automated educational assistance, and content generation workflows for a government-backed LMS platform supporting 10K+ monthly sessions. Architected microfrontend systems and Python microservices while enabling hardware integrations such as Interactive Flat Panels (IFP boards), classroom clickers, and stylus/pen input systems.",

      type: "company",

      companyName: "Vridhee Innovations",

      tags: [
        "React",
        "Node.js",
        "Python",
        "FastAPI",
        "LLM",
        "Education AI",
        "Microfrontends",
        "Microservices"
      ],

      featured: true,

      year: 2025
    },
    {
      id: "enterprise-rag-platform",

      title: "Enterprise RAG & Document Intelligence Platform",

      description:
        "Built enterprise-grade document ingestion and retrieval pipelines for complex PDFs, scanned documents, OCR-heavy files, and multimodal enterprise content.",

      longDescription:
        "Designed document understanding workflows for real-world enterprise scenarios where PDFs contain tables, diagrams, scanned pages, inconsistent layouts, and semi-structured data. Worked on chunking strategies, metadata extraction, embeddings, semantic retrieval, OCR processing, citation grounding, and retrieval optimization to improve answer quality and reduce hallucinations in production AI systems.",

      type: "personal",

      tags: [
        "Python",
        "RAG",
        "OCR",
        "Embeddings",
        "Document AI",
        "Vector Database",
        "Semantic Search",
        "LLM"
      ],

      featured: true,

      year: 2025,
    },

    {
      id: "enterprise-ai-chat-platform",

      title: "Enterprise AI Chat Platform",

      description:
        "Customized enterprise conversational AI systems with streaming responses, multi-provider orchestration, custom LLM backends, and tool-enabled workflows.",

      longDescription:
        "Worked extensively on enterprise-grade chat experiences involving streaming token responses, conditional rendering, persistent chat memory, tool calling, structured outputs, response orchestration, markdown-safe rendering, and multi-provider AI integration. Focused heavily on production concerns including latency, reliability, and scalable frontend architecture.",

      type: "personal",

      tags: [
        "React",
        "Node.js",
        "Streaming",
        "OpenAI",
        "Tool Calling",
        "LLM",
        "Chat UI",
        "Enterprise AI"
      ],

      featured: true,

      year: 2025,

      githubUrl:
        "https://github.com/JTtime"
    },

    {
      id: "abacus-answer-sheet-ai",

      title: "AI-Powered Abacus Answer Sheet Recognition",

      description:
        "Built a CNN-based handwritten digit recognition pipeline for automated evaluation of abacus answer sheets.",

      longDescription:
        "Designed an ML pipeline for digit recognition and answer validation using computer vision techniques and CNN-based models. Integrated the trained system with FastAPI to automate answer sheet evaluation and reduce manual checking effort for educational workflows.",

      type: "personal",

      tags: [
        "Python",
        "CNN",
        "Computer Vision",
        "FastAPI",
        "Deep Learning",
        "OCR"
      ],

      featured: false,

      year: 2025,
    },

    {
      id: "accounting-anomaly-detection",

      title: "Accounting Anomaly Detection System",

      description:
        "Built anomaly detection workflows for accounting transactions using rule-based and unsupervised learning techniques.",

      longDescription:
        "Experimented with anomaly detection strategies for financial transaction datasets using rule engines and unsupervised ML approaches to identify unusual spending patterns, duplicate entries, inconsistencies, and suspicious accounting behaviour.",

      type: "personal",

      tags: [
        "Python",
        "Machine Learning",
        "Anomaly Detection",
        "Finance AI",
        "Data Analysis"
      ],

      featured: false,

      year: 2025,
    }
  ],

  experience: [
    {
      id: "findability-sciences",

      company: "Findability Sciences",

      role:
        "Software Engineer (AI Product)",

      type: "full-time",

      startDate: "Jan 2025",

      endDate: "Present",

      description: [
        "Building production-grade GenAI products used by enterprise customers and global business teams, owning systems end-to-end across frontend, backend, and AI orchestration layers.",

        "Built and scaled LLM-powered analytics workflows (FastAPI + OpenAI) used by 800+ global managers for automated analytics, reporting, and natural-language-driven business intelligence.",

        "Led development of a production-grade agentic AI platform handling 3000+ daily interactions, reducing enterprise query resolution time by 54% through intelligent workflow automation.",

        "Owned frontend and backend engineering for an AI-assisted patent drafting platform enabling 60%+ time savings for IP law firms through automated drafting, intelligent document generation, and contextual legal assistance.",

        "Implemented enterprise AI guardrails including RBAC filtering, structured outputs, secure workflows, SQL safety checks, and orchestration reliability for production AI systems.",

        "Worked extensively on streaming AI systems, tool calling, RAG pipelines, document intelligence, markdown-safe generation, background agents, and scalable enterprise architecture."
      ],

      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Python",
        "FastAPI",
        "OpenAI",
        "Azure OpenAI",
        "LLM",
        "RAG",
        "Agents",
        "Tool Calling",
        "SQL",
        "Docker"
      ],

      companyUrl:
        "https://www.findability.ai",

      location:
        "Mumbai, India",

      remote: true
    },

    {
      id: "vridhee-innovations",

      company: "Vridhee Innovations",

      role:
        "Full-Stack Engineer (AI)",

      type: "full-time",

      startDate: "May 2024",

      endDate: "Jan 2025",

      description: [
        "Built and deployed a GenAI-powered Learning Management System (React, Node.js, FastAPI) used across multiple Indian states supporting 10K+ monthly sessions.",

        "Implemented LLM-powered doubt solving, intelligent content generation, and MCQ creation systems, reducing teacher effort by approximately 40%.",

        "Designed scalable microfrontend architecture and Python microservices, reducing deployment time by nearly 60% while improving maintainability across teams.",

        "Integrated hardware-based educational workflows including Interactive Flat Panel (IFP) boards, classroom clickers, and stylus/pen-based digital classroom experiences.",

        "Mentored junior developers and standardized frontend/backend engineering practices for better maintainability and development velocity."
      ],

      techStack: [
        "React",
        "Node.js",
        "Python",
        "FastAPI",
        "Microfrontends",
        "Microservices",
        "LLM",
        "OpenAI",
        "Redux",
        "SQL"
      ],

      location:
        "Mumbai, India",

      remote: false
    },

    {
      id: "edufund",

      company: "EduFund",

      role:
        "Product Engineer",

      type: "full-time",

      startDate: "May 2023",

      endDate: "Mar 2024",

      description: [
        "Designed and shipped the end-to-end onboarding flow for EduFund’s mobile application serving 500K+ users as the sole frontend engineer responsible for the onboarding experience.",

        "Worked across mobile, web, and backend systems using React Native, Next.js, FastAPI, and Node.js to support rapid product delivery.",

        "Built a GenAI-powered chatbot for college fee prediction using Python and OpenAI APIs to improve accessibility of educational financial planning.",

        "Collaborated closely with product and business teams to rapidly ship user-facing experiences while balancing engineering quality and speed."
      ],

      techStack: [
        "React Native",
        "React",
        "Next.js",
        "Node.js",
        "Python",
        "FastAPI",
        "OpenAI",
        "Redux",
        "TypeScript"
      ],

      location:
        "Mumbai, India",

      remote: false
    },

    {
      id: "headgear-audio",

      company: "HeadGear Audio",

      role:
        "Full-Stack Web Developer",

      type: "full-time",

      startDate: "Aug 2019",

      endDate: "Apr 2023",

      description: [
        "Built and maintained a complete e-commerce platform using Next.js with Python FastAPI backend systems, handling customer experiences end-to-end.",

        "Developed analytics dashboards, API integrations, reporting systems, and internal tooling to support business operations and product visibility.",

        "Worked extensively on SEO optimization, frontend performance improvements, and scalable web architecture to improve discoverability and user experience.",

        "Owned both frontend and backend development responsibilities, contributing across UI engineering, APIs, integrations, and platform stability."
      ],

      techStack: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Python",
        "FastAPI",
        "Node.js",
        "REST APIs",
        "SQL"
      ],

      location:
        "Mumbai, India",

      remote: false
    }
  ]
};

// export default portfolioData;





// const portfolioData: PortfolioData = {
//   meta: {
//     name: "Jeevraj Taralkar",

//     tagline:
//       "Full-Stack AI Engineer building enterprise GenAI systems",

//     description:
//       "Full-stack engineer specializing in Python, React, Next.js, TypeScript, and enterprise AI systems. I build production-grade GenAI applications, patent copilots, RAG pipelines, agentic workflows, and intelligent developer experiences.",

//     email: "jeevraj.vjti@gmail.com",

//     location: "Mumbai, Maharashtra, India",

//     availability:
//       "Open to Senior Fullstack / AI Engineering / Frontend opportunities",

//     resumeUrl: "/assets/resume.pdf",

//     avatarUrl: "/assets/profile.jpg",
//   },

//   about: {
//     headline:
//       "I build scalable AI-powered systems that solve real business problems.",

//     bio: [
//       "I’m a Full-Stack AI Engineer with strong expertise in Python backend systems, FastAPI, React/Next.js, and the MERN ecosystem, with growing specialization in enterprise AI and GenAI applications. My focus is not on building flashy demos, but on solving complex real-world problems through solid engineering, scalable architectures, and practical AI integration.",
// "My technical strength lies in bridging robust backend systems with polished frontend experiences — building applications end-to-end using Python, FastAPI, Node.js, React, Next.js, MongoDB, and modern AI orchestration frameworks. I enjoy designing scalable APIs, agentic workflows, document intelligence systems, RAG pipelines, and streaming AI experiences that work reliably in production environments.",
// "My journey into tech was unconventional. Before software engineering, I spent over a decade in operational environments solving practical problems under ambiguity. That experience shaped how I think as an engineer today: iterate fast, focus on business outcomes, and build systems that solve painful manual workflows rather than chasing hype.",

// "Currently, I work on enterprise AI systems including patent drafting copilots, intelligent document processing, retrieval-augmented systems, agentic architectures, and LLM-powered workflows. I particularly enjoy working at the intersection of backend engineering, AI systems, and product thinking.",

// "Long term, I aspire to build meaningful SaaS products that solve large-scale business problems using applied AI — especially in industries where workflows remain fragmented, manual, and inefficient."

//     ],


//     highlights: [
//       {
//         label: "Frontend",
//         value:
//           "React · Next.js · TypeScript · Material UI"
//       },

//       {
//         label: "AI Engineering",
//         value:
//           "LLMs · Agents · RAG · Tool Calling"
//       },

//       {
//         label: "Backend",
//         value:
//           "Node.js · Python · FastAPI"
//       },

//       {
//         label: "Current Focus",
//         value:
//           "Enterprise GenAI Systems"
//       }
//     ],
//   },

//   social: [
//     {
//       label: "GitHub",
//       url: "https://github.com/JTtime",
//       icon: "Github",
//     },

//     {
//       label: "LinkedIn",
//       url:
//         "https://www.linkedin.com/in/jeevraj-taralkar-69103829/",
//       icon: "Linkedin",
//     },

//     {
//       label: "Email",
//       url: "mailto:your-email@example.com",
//       icon: "Mail",
//     }
//   ],

//   projects: [
//     {
//       id: "patent-copilot",

//       title: "AI Patent Drafting Copilot",

//       description:
//         "Built enterprise patent drafting workflows powered by LLMs for claim generation, dependent claims, figure descriptions, summaries, and contextual drafting.",

//       longDescription:
//         "Worked on a production-grade patent lifecycle platform with AI-assisted drafting, subsection generation, streaming responses, background agents, optimistic UI updates, and complex document workflows.",

//       type: "company",

//       companyName: "Confidential Enterprise Client",

//       tags: [
//         "React",
//         "Next.js",
//         "TypeScript",
//         "LLM",
//         "AI Agents",
//         "Enterprise SaaS"
//       ],

//       featured: true,

//       year: 2026,
//       liveUrl: "https://www.findability.ai/en/agentic-ai-platform",
//     },

//     {
//       id: "enterprise-rag",

//       title: "Enterprise RAG Pipeline",

//       description:
//         "Designed enterprise-grade document ingestion and retrieval workflows supporting PDFs, OCR, metadata extraction, chunking, embeddings, and semantic retrieval.",

//       longDescription:
//         "Built document pipelines for complex enterprise content where PDFs contain tables, scanned text, layouts, and multimodal content requiring more than naive chunking strategies.",

//       type: "personal",

//       tags: [
//         "Python",
//         "RAG",
//         "LLM",
//         "OCR",
//         "Vector DB",
//         "Document AI"
//       ],

//       featured: true,

//       year: 2025,
//     },

//     {
//       id: "librechat-customization",

//       title: "Enterprise AI Chat Platform",

//       description:
//         "Customized LibreChat for enterprise clients with custom LLM backends, streaming responses, conditional rendering, and multi-provider orchestration.",

//       type: "personal",

//       tags: [
//         "React",
//         "Node.js",
//         "LibreChat",
//         "Streaming",
//         "LLM"
//       ],

//       featured: true,

//       year: 2026,
//     },

//     {
//       id: "smartgrid-react-ui",

//       title: "SmartGrid React UI",

//       description:
//         "Published a reusable React data grid component library with configurable rendering and UI abstractions for enterprise applications.",

//       type: "personal",

//       tags: [
//         "React",
//         "TypeScript",
//         "NPM",
//         "UI Library"
//       ],

//       githubUrl:
//         "https://github.com/JTtime",

//       featured: true,

//       year: 2025,
//     },

//     {
//       id: "gaplens-ai",

//       title: "GapLens AI",

//       description:
//         "A GenAI-powered resume and interview assistant helping candidates improve resumes, identify gaps, and prepare for technical interviews.",

//       type: "personal",

//       tags: [
//         "React",
//         "Node.js",
//         "OpenAI",
//         "AI"
//       ],

//       featured: true,

//       year: 2025,

//     },

//     {
//       id: "abacus-recognition",

//       title: "Abacus Answer Sheet Recognition",

//       description:
//         "CNN-based handwritten digit recognition integrated with FastAPI for automated answer sheet evaluation.",

//       type: "personal",

//       tags: [
//         "Python",
//         "CNN",
//         "Computer Vision",
//         "FastAPI"
//       ],

//       year: 2025,
//     },

//     {
//       id: "accounting-anomaly",

//       title: "Accounting Anomaly Detection",

//       description:
//         "Experimented with rule-based and unsupervised anomaly detection on accounting transaction data for identifying irregular financial patterns.",

//       type: "personal",

//       tags: [
//         "Python",
//         "Machine Learning",
//         "Anomaly Detection"
//       ],

//       year: 2025,
//     }
//   ],

//   blogs: [
//     {
//       id: "tool-calling",

//       title:
//         "From Chatbots to AI Agents: A Practical Guide to OpenAI Tool Calling",

//       summary:
//         "Practical lessons from building agentic AI systems with tool calling, orchestration, and production workflows.",

//       date: "2025-08-02",

//       tags: [
//         "OpenAI",
//         "AI Agents",
//         "Tool Calling",
//         "LLM"
//       ],

//       readingTime: "10 min",
//       url: "https://www.linkedin.com/pulse/from-chatbots-ai-agents-practical-guide-building-agentic-taralkar-oxiuf/"

//     },

//     {
//       id: "genai-journey",

//       title:
//         "From JavaScript Curiosity to Enterprise GenAI Systems",

//       summary:
//         "My transition from traditional frontend engineering into production-grade AI systems.",

//       date: "2025-08-01",

//       tags: [
//         "GenAI",
//         "Career Growth",
//         "MERN"
//       ],

//       readingTime: "8 min"
//     },

//     {
//       id: "prompt-engineering",

//       title:
//         "Vibe Coding is a lie",

//       summary:
//         "Prompt Engineering Is Overrated. Engineering Skill Is Not.",

//       date: "2026-02-01",

//       tags: [
//         "RAG",
//         "LLM",
//         "AI Engineering",
//         "Prompt Engineering",
//         "Vibe Coding"
//       ],

//       readingTime: "9 min",
//       url: "https://jeevrajtaralkar.substack.com/p/prompt-engineering-is-overrated-engineering"
//     },
//     {
//       id: "production-rag",

//       title:
//         "The Reality of Building a Production-Grade RAG System",

//       summary:
//         "Why real-world RAG systems require OCR, document understanding, multimodal parsing, and better retrieval design.",

//       date: "2026-02-01",

//       tags: [
//         "RAG",
//         "LLM",
//         "AI Engineering"
//       ],

//       readingTime: "9 min"
//     },
//   ],

//   experience: [
//     {
//       id: "findability-sciences",

//       company: "Findability Sciences",

//       role:
//         "Software Engineer / GenAI Engineer",

//       type: "full-time",

//       startDate: "2025",

//       endDate: "Present",

//       description: [
//         "Building enterprise-grade GenAI systems and intelligent business workflows",
//         "Developing React/Next.js interfaces for AI-powered applications",
//         "Working on document intelligence, agentic systems, and enterprise automation",
//         "Integrating LLM APIs, orchestration layers, and retrieval systems"
//       ],

//       techStack: [
//         "React",
//         "Next.js",
//         "TypeScript",
//         "Python",
//         "LLMs",
//         "RAG"
//       ],

//       remote: true
//     },

//     {
//       id: "freelance-ai",

//       company:
//         "Independent / Freelance",

//       role:
//         "Full-Stack AI Engineer",

//       type: "freelance",

//       startDate: "2024",

//       endDate: "Present",

//       description: [
//         "Built AI copilots, RAG systems, and enterprise automation tools",
//         "Developed streaming chat experiences and agentic workflows",
//         "Created reusable React architectures for complex enterprise products",
//         "Consulted on GenAI integrations and LLM-powered products"
//       ],

//       techStack: [
//         "React",
//         "Next.js",
//         "TypeScript",
//         "Node.js",
//         "Python",
//         "FastAPI",
//         "OpenAI"
//       ],

//       remote: true
//     }
//   ]
// };

export default portfolioData;
