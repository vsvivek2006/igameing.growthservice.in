import React from 'react';
import { FileSearch, Network, BarChart2, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_PROOFS, COMPLIANCE_COMMITMENTS } from '../../data/trustData';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

export const HomeProcessProof: React.FC = () => {
  return (
    <section className="relative bg-model3-base overflow-hidden py-24 lg:py-32 border-b border-white/10">
      <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <Reveal direction="up" className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-5">
            Process Transparency
          </div>
          <h2 className="type-h2 text-white mb-5">
            What You Actually Receive
          </h2>
          <p className="text-slate-300 leading-relaxed">
            We do not publish fabricated testimonials or manufactured case studies. Instead, here is exactly what engagements deliver — described with the specificity that lets you evaluate whether our methodology matches your requirements.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {PROCESS_PROOFS.map((proof, i) => (
            <Reveal key={proof.title} direction="up" delay={i * 150}>
              <div className="gradient-border-card-dark p-7 rounded-3xl h-full flex flex-col group hover:-translate-y-1.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center mb-5">
                  {proof.icon === 'FileSearch' ? (
                    <FileSearch className="w-6 h-6 text-purple-400" />
                  ) : proof.icon === 'Network' ? (
                    <Network className="w-6 h-6 text-purple-400" />
                  ) : (
                    <BarChart2 className="w-6 h-6 text-purple-400" />
                  )}
                </div>
                <h3 className="font-heading font-bold text-white text-base mb-3 group-hover:text-amber-300 transition-colors">
                  {proof.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{proof.description}</p>
                <ul className="space-y-2 mt-auto">
                  {proof.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Compliance commitments */}
        <Reveal direction="up">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 text-center">
              Our Operating Commitments
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {COMPLIANCE_COMMITMENTS.map((c) => (
                <div key={c.title} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">{c.title}</div>
                    <p className="text-xs text-slate-400 leading-relaxed">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
