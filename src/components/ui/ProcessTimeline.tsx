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
            <div className="w-10 h-10 rounded-full bg-purple-600 text-white text-sm font-extrabold flex items-center justify-center shadow-md shadow-purple-500/25 group-hover:bg-purple-500 transition-colors z-10">
              {s.step}
            </div>
            {idx < steps.length - 1 && (
              <div className="w-px flex-1 bg-gradient-to-b from-purple-300 to-slate-200 mt-1 mb-1 min-h-[2rem]" />
            )}
          </div>

          {/* Content */}
          <div className={`pb-8 ${idx === steps.length - 1 ? '' : ''}`}>
            <h4 className="font-heading font-bold text-slate-900 text-base mb-1 leading-snug">{s.title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessTimeline;
