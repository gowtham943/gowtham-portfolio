import { MapPin, Calendar, Trophy } from 'lucide-react';

interface Job {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  accentColor: string;
  dotColor: string;
  highlights: string[];
  badge?: string;
}

const JOBS: Job[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Perch Energy',
    period: 'Mar 2025 – May 2026',
    location: 'Remote',
    type: 'Helios Arcadia New Energy',
    accentColor: 'border-cyan-500/40',
    dotColor: 'bg-cyan-400',
    badge: 'Most Recent',
    highlights: [
      'Architected a centralized automation hub that slashed manual processing time by <strong class="text-cyan-300">85%</strong>, streamlining the critical ingestion layer for <strong class="text-cyan-300">18 global utilities</strong> across 198 concurrent projects.',
      'Implemented a Hamilton-based DAG methodology for dynamic data processing, managing scalable subscriber profiles for over <strong class="text-cyan-300">60,000 accounts</strong>.',
      'Accelerated engineering velocity by <strong class="text-cyan-300">50%</strong> by designing context-aware Cursor AI rules and local tool mappings that automated codebase indexing for high-precision utility components.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Arcadia',
    period: 'May 2022 – Mar 2025',
    location: 'Chennai, India (Remote)',
    type: 'Urjanet, an Arcadia enterprise',
    accentColor: 'border-violet-500/40',
    dotColor: 'bg-violet-400',
    highlights: [
      'Engineered a high-performance <strong class="text-violet-300">Java 17</strong> contract platform (CAE) featuring a three-stage Auto-QC engine for structural PDF text-layer diffing, reclaiming <strong class="text-violet-300">3 FTE capacities</strong> daily.',
      'Won the <strong class="text-violet-300">2024 Corporate Hackathon</strong> by single-handedly migrating legacy toolsets to an open-source PyMuPDF solution, yielding <strong class="text-violet-300">$13k/year</strong> in recurring cost savings.',
      'Built the flagship TDS engine handling <strong class="text-violet-300">140+ global LSEs</strong> using Selenium and PDFlib TET for automated text extraction at maximum precision.',
      'Selected by management to pioneer technical screening — interviewed, hired, and onboarded high-performance engineering squads to scale production.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Urjanet Energy Solutions',
    period: 'May 2019 – May 2022',
    location: 'Chennai, India',
    type: 'Energy Data Platform',
    accentColor: 'border-emerald-500/40',
    dotColor: 'bg-emerald-400',
    highlights: [
      'Standardized robust regional layout schemas for <strong class="text-emerald-300">50+ utilities</strong> using structured Java and Hibernate backend parsing components.',
      'Automated engineering JIRA triage and complex metrics analysis by building custom REST API integrations within the internal anomaly detector platform (PAD).',
      'Published custom Google Apps Script functions to automate sheet tracking across cross-functional operational squads.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Career journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Professional Experience
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-3 bottom-3 w-0.5 timeline-line rounded-full" />

          <div className="space-y-10">
            {JOBS.map((job, i) => (
              <div key={i} className="relative pl-12 md:pl-16">
                {/* Dot */}
                <div
                  className={`absolute left-2.5 md:left-4 top-5 w-4 h-4 rounded-full ${job.dotColor} ring-4 ring-slate-950 shadow-lg`}
                />

                {/* Card */}
                <div
                  className={`card-glow bg-slate-900 rounded-2xl p-6 border border-slate-800 ${job.accentColor} hover:border-opacity-80`}
                >
                  {/* Card top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-slate-100 font-bold text-lg">{job.title}</h3>
                        {job.badge && (
                          <span className="px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                            {job.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-base font-semibold gradient-text mt-0.5">
                        {job.company}
                      </div>
                      <div className="text-slate-500 text-xs mt-0.5">{job.type}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-xs text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: h }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education footer */}
        <div className="mt-12 p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-amber-400/10 border border-amber-500/20">
            <Trophy size={20} className="text-amber-400" />
          </div>
          <div>
            <div className="text-slate-100 font-semibold text-sm">
            </div>
            <div className="text-slate-500 text-xs mt-0.5">
              &nbsp;Best Project of the Year (CAE) &nbsp;|&nbsp; "It's My Ship" Award
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
