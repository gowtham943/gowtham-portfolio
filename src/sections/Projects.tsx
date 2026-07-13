import { ExternalLink, GitBranch, ArrowUpRight, Shield, MessageSquare, Activity } from 'lucide-react';

interface Project {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tech: string[];
  githubUrl: string;
  externalUrl?: string;
  externalLabel?: string;
  accentColor: string;
  iconBg: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    icon: <Shield size={22} />,
    title: 'ClaimGuard AI',
    subtitle: 'Enterprise Health Insurance Claims Auditing Platform',
    description:
      'A production-grade AI compliance engine that ingests insurance policy documents, indexes them for semantic search, and audits claim forms against policy rules using Gemini 2.5 Flash — returning structured APPROVED / FLAGGED / DENIED verdicts with policy citations.',
    bullets: [
      'IBM Docling extracts layout-aware Markdown from policy PDFs; heading-aware chunking feeds Gemini embeddings (3072-dim) into pgvector for sub-50ms similarity search.',
      'Automated RAG Triad evaluation scripts measure faithfulness, answer relevance, and context precision — keeping retrieval quality measurable in CI.',
      'FastAPI async pipelines with 202 Accepted + WebSocket live progress; React 19 dashboard with Policy Ingestion, Claims Desk, Audit Console, and RAG Chat views.',
    ],
    tech: ['FastAPI', 'React 19', 'TypeScript', 'pgvector', 'IBM Docling', 'Gemini 2.5 Flash', 'WebSockets', 'PostgreSQL', 'Docker', 'JWT', 'Alembic'],
    githubUrl: 'https://github.com/gowtham943/claims-auditor-ui',
    externalUrl: 'https://whimsical.com/learning155/claimsauditorai-JtXsvrjVANkvoUXjj8HTLu',
    externalLabel: 'Architecture Board',
    accentColor: 'from-cyan-500 to-blue-600',
    iconBg: 'bg-cyan-400/10 border-cyan-500/30 text-cyan-400',
    featured: true,
  },
  {
    icon: <MessageSquare size={22} />,
    title: 'LAN Vault Messenger',
    subtitle: 'Secure Full-Duplex Chat System',
    description:
      'A real-time peer-to-peer messaging platform built on Spring Boot and STOMP over WebSockets — delivering bi-directional communication with persistent message history and schema-versioned database migrations.',
    bullets: [
      'Java 21 + Spring Boot backend with STOMP broker enabling full-duplex WebSocket messaging — no polling, true real-time event delivery.',
      'Liquibase database tracking ensures schema migrations are version-controlled and reproducible across environments.',
      'Clean REST API for auth + message history; designed for local-network deployment with minimal infrastructure overhead.',
    ],
    tech: ['Java 21', 'Spring Boot', 'STOMP', 'WebSockets', 'Liquibase', 'PostgreSQL', 'REST API'],
    githubUrl: 'https://github.com/gowtham943/chat-system',
    accentColor: 'from-violet-500 to-purple-700',
    iconBg: 'bg-violet-400/10 border-violet-500/30 text-violet-400',
  },
  {
    icon: <Activity size={22} />,
    title: 'Habit Tracker & AI Coach',
    subtitle: 'MCP-Powered Personal Productivity System',
    description:
      'A containerized personal productivity system with a dual-layer AI architecture — an MCP Server for deterministic database operations and a local RAG engine that injects your habit history into every coaching conversation.',
    bullets: [
      'FastMCP Server over SSE routes structured tool calls from the agent loop directly into PostgreSQL — no hallucinated writes, deterministic CRUD.',
      'Local RAG layer uses ChromaDB + all-minilm:v2 (384-dim embeddings) to retrieve historical habit trends and inject them into every system prompt frame.',
      'Repository hooks keep relational data and vector memory in perfect sync; persistent chatbot sidebar stays live across all Streamlit views.',
    ],
    tech: ['FastAPI', 'FastMCP (SSE)', 'MCP', 'ChromaDB', 'RAG', 'Ollama', 'PostgreSQL', 'Streamlit', 'Docker Compose'],
    githubUrl: 'https://github.com/gowtham943/spd-habit-tracker',
    accentColor: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-400/10 border-emerald-500/30 text-emerald-400',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Independent systems
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Personal Projects
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
          <p className="mt-4 text-slate-500 text-sm max-w-xl mx-auto">
            Each project is a production-minded system — not a tutorial clone. Click any card to explore the source code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative group flex flex-col">
      {/* Featured ribbon */}
      {project.featured && (
        <div className="absolute -top-3 left-6 z-10">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-lg">
            ⭐ Featured
          </span>
        </div>
      )}

      {/* Card — clicking navigates to GitHub */}
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col flex-1 card-glow bg-slate-900 rounded-2xl border border-slate-800 hover:border-slate-700 overflow-hidden cursor-pointer"
        aria-label={`View ${project.title} on GitHub`}
      >
        {/* Gradient top strip */}
        <div className={`h-1 w-full bg-gradient-to-r ${project.accentColor}`} />

        <div className="p-6 flex flex-col flex-1">
          {/* Icon + title */}
          <div className="flex items-start gap-4 mb-4">
            <div className={`p-2.5 rounded-xl border flex-shrink-0 ${project.iconBg}`}>
              {project.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-slate-100 font-bold text-base leading-tight">
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={14}
                  className="text-slate-600 group-hover:text-cyan-400 transition-colors flex-shrink-0"
                />
              </div>
              <p className="text-slate-500 text-xs mt-0.5 leading-tight">{project.subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

          {/* Bullets */}
          <ul className="space-y-2 mb-5 flex-1">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-xs text-slate-500 leading-relaxed">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 text-xs border border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>

      {/* Action buttons below card */}
      <div className="flex gap-2 mt-2">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-400 hover:text-slate-100 text-xs font-medium transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <GitBranch size={13} />
          Source Code
        </a>
        {project.externalUrl && (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={13} />
            {project.externalLabel ?? 'View'}
          </a>
        )}
      </div>
    </div>
  );
}
