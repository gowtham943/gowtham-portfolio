import { useEffect, useState } from 'react';
import { ArrowDown, GitBranch, Link } from 'lucide-react';

const TITLES = [
  'Senior Backend Engineer',
  'AI Systems Engineer'
];

export default function Home() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = TITLES[titleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIdx]);

  const scrollDown = () =>
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center hero-grid overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Accent orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center fade-in-up">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 text-xs font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to Senior / Lead roles
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-none">
          <span className="text-slate-100">Gowtham</span>{' '}
          <span className="gradient-text">Kandasamy</span>
        </h1>

        {/* Animated title */}
        <div className="h-10 flex items-center justify-center mb-8">
          <span className="text-xl sm:text-2xl font-semibold text-cyan-400 font-mono">
            {displayed}
            <span className="cursor-blink ml-0.5 text-cyan-300">|</span>
          </span>
        </div>

        {/* 3-sentence bio */}
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
          Senior Software Engineer with{' '}
          <span className="text-slate-200 font-medium">7 years</span> of experience
          designing high-throughput backend platforms and AI-powered systems in
          the energy sectors.{' '}
          I architect end-to-end solutions — from{' '}
          <span className="text-cyan-400 font-medium">Automation web applications</span> and{' '}
          <span className="text-cyan-400 font-medium">Custom Direct Acyclic Graph (DAG) Architecture Applications</span> and{' '}
          <span className="text-cyan-400 font-medium">RAG pipelines</span> to{' '}
          containerized microservices.{' '}
          Passionate about bridging modern AI tooling with production-grade
          engineering to ship systems that genuinely scale.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary px-7 py-3 rounded-xl text-white font-semibold text-sm shadow-lg flex items-center gap-2"
          >
            View Projects
            <ArrowDown size={16} />
          </button>
          <a
            href="https://github.com/gowtham943"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-xl font-semibold text-sm border border-slate-700 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all flex items-center gap-2"
          >
            <GitBranch size={16} />
            GitHub Profile
          </a>
          <a
            href="https://www.linkedin.com/in/gowtham-kandasamy-aa3426106/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-xl font-semibold text-sm border border-slate-700 text-slate-300 hover:border-violet-500/50 hover:text-violet-400 hover:bg-violet-400/5 transition-all flex items-center gap-2"
          >
            <Link size={16} />
            LinkedIn
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 text-center">
          {[
            { value: '7+', label: 'Years Experience' },
            { value: '85%', label: 'Ops Time Saved' },
            { value: '$13k', label: 'Infra Cost Cut / yr' },
            { value: '60k+', label: 'Accounts Managed' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-bold gradient-text">{value}</div>
              <div className="text-xs text-slate-500 mt-0.5 uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}
