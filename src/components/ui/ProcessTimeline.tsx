import React from 'react';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: readonly ProcessStep[];
  className?: string;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps, className = '' }) => {
  return (
    <div className={`space-y-0 ${className}`}>
      {steps.map((s, idx) => (
        <div key={s.step} className="flex gap-5 group">
          {/* Step indicator + connector */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 text-sm font-black flex items-center justify-center shadow-md shadow-amber-400/20 group-hover:from-amber-300 group-hover:to-amber-400 transition-all z-10">
              {s.step}
            </div>
            {idx < steps.length - 1 && (
              <div className="w-px flex-1 bg-gradient-to-b from-amber-400/40 to-white/10 mt-1 mb-1 min-h-[2rem]" />
            )}
          </div>

          {/* Content */}
          <div className={`pb-8 ${idx === steps.length - 1 ? '' : ''}`}>
            <h4 className="font-heading font-bold text-white text-base mb-1 leading-snug">{s.title}</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{s.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessTimeline;
