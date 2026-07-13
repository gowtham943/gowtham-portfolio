import { Mail, Link, GitBranch, MapPin, Send, ArrowUpRight } from 'lucide-react';

const SOCIALS = [
  {
    icon: <Link size={20} />,
    label: 'LinkedIn',
    handle: 'gowtham-kandasamy-aa3426106',
    url: 'https://www.linkedin.com/in/gowtham-kandasamy-aa3426106/',
    color: 'hover:border-blue-500/50 hover:bg-blue-500/5 hover:text-blue-400',
    badge: 'Professional Network',
  },
  {
    icon: <GitBranch size={20} />,
    label: 'GitHub',
    handle: 'gowtham943',
    url: 'https://github.com/gowtham943',
    color: 'hover:border-slate-500/50 hover:bg-slate-500/5 hover:text-slate-300',
    badge: 'Open Source',
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Let's connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Get In Touch
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
          <p className="mt-4 text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            I'm currently open to Senior / Lead engineering roles and interesting AI systems
            problems. If something resonates — drop me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left — direct contact */}
          <div className="space-y-5">
            <h3 className="text-slate-200 font-semibold text-base mb-2">Direct Contact</h3>

            {/* Email card */}
            <a
              href="mailto:gowthamkandasamy32@gmail.com"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:bg-cyan-400/5 transition-all duration-200"
            >
              <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-400/20 transition-colors">
                <Mail size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-slate-100 font-semibold text-sm">Email</div>
                <div className="text-slate-400 text-xs mt-0.5 truncate">
                  gowthamkandasamy32@gmail.com
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-slate-600 group-hover:text-cyan-400 transition-colors flex-shrink-0"
              />
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-400">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-slate-100 font-semibold text-sm">Location</div>
                <div className="text-slate-400 text-xs mt-0.5">Tiruppur, Tamil Nadu, India</div>
                <div className="text-slate-500 text-xs">Open to Remote &amp; Hybrid roles</div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <h4 className="text-slate-400 text-xs uppercase tracking-widest mb-3 font-semibold">
                Quick Facts
              </h4>
              <div className="space-y-2">
                {[
                  ['Experience', '7 Years'],
                  ['Domain', 'Energy · AI'],
                  ['Primary Stack', 'Java · Python'],
                  ['Email', 'gowthamkandasamy32@gmail.com'],
                ].map(([key, val]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-slate-500">{key}</span>
                    <span className="text-slate-300 font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — social links */}
          <div className="space-y-5">
            <h3 className="text-slate-200 font-semibold text-base mb-2">Find Me Online</h3>

            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 transition-all duration-200 ${s.color}`}
              >
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 group-hover:border-current group-hover:text-current transition-colors">
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-100 font-semibold text-sm group-hover:text-current transition-colors">
                      {s.label}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-500 text-xs border border-slate-700">
                      {s.badge}
                    </span>
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5">{s.handle}</div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-slate-600 group-hover:text-current transition-colors flex-shrink-0"
                />
              </a>
            ))}

            {/* Availability chip */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-400/5 border border-emerald-500/20">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-emerald-400">Available</span>
                {' '}— Currently exploring Senior / Lead engineering &amp; AI systems roles.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <span>© 2026 Gowtham Kandasamy. Built with React + Tailwind CSS.</span>
          <div className="flex items-center gap-1">
            <Send size={11} />
            <span>Open to opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
