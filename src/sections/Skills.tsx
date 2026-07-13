import { Brain, Code2, Wrench, ShieldCheck } from 'lucide-react';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  color: string;
  borderColor: string;
  skills: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    icon: <Brain size={20} />,
    title: 'AI & Architecture',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    skills: [
      'Retrieval-Augmented Generation (RAG)',
      'Vector Embeddings',
      'pgvector & ChromaDB',
      'Model Context Protocol (MCP)',
      'Cursor AI',
      'Ollama',
      'IBM Docling',
      'FastMCP (SSE)',
    ],
  },
  {
    icon: <Code2 size={20} />,
    title: 'Languages & Frameworks',
    color: 'text-violet-400',
    borderColor: 'border-violet-500/30',
    skills: [
      'Java 17 / 21',
      'Python',
      'Spring Boot',
      'FastAPI',
      'SQLModel / SQLAlchemy',
      'Hamilton DAG',
      'Hibernate',
      'React 19',
      'Streamlit',
      'PostgreSQL',
      'Alembic',
      'Liquibase',
    ],
  },
  {
    icon: <Wrench size={20} />,
    title: 'Automation & DevOps',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    skills: [
      'Docker',
      'Docker Compose',
      'Kubernetes (EKS)',
      'Helm',
      'AWS S3',
      'AWS Secrets Manager',
      'CI/CD Pipelines',
      'RPA (UiPath)',
      'Selenium',
      'PyMuPDF',
      'PDFlib TET',
      'WebSockets',
      'Google Apps Script'
    ],
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Security & Integrations',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    skills: [
      'JWT',
      'bcrypt',
      'Okta',
      'Azure AD',
      'Dropbox API',
      'Microsoft Teams Webhooks',
      'REST APIs',
      'STOMP / WebSockets',
      'OpenCSV',
    ],
  },
];

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="text-center mb-14">
      <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
        What I work with
      </p>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
        {title}
      </h2>
      <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Core Competencies" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className={`card-glow bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-slate-700`}
            >
              {/* Card header */}
              <div className={`flex items-center gap-3 mb-5 ${cat.color}`}>
                <div className={`p-2 rounded-lg bg-slate-800 border ${cat.borderColor}`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-slate-100 text-base">{cat.title}</h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-tag px-3 py-1 rounded-full text-xs font-medium bg-slate-800 border border-slate-700 text-slate-300 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency note */}
        <p className="text-center text-slate-600 text-xs mt-10 uppercase tracking-widest">
          7 years across Python · Java · Cloud · AI — shipping production systems
        </p>
      </div>
    </section>
  );
}
