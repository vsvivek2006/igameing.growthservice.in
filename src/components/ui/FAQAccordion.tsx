import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  q?: string;
  question?: string;
  a?: string;
  answer?: string;
}

interface FAQAccordionProps {
  items: readonly FAQItem[] | FAQItem[];
  className?: string;
  defaultOpen?: number | null;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  className = '',
  defaultOpen = 0,
}) => {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const faqList = Array.isArray(items) ? items : [];

  if (faqList.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-3 sm:space-y-4 ${className}`}>
      {faqList.map((item, idx) => {
        const questionText = item.q || item.question || '';
        const answerText = item.a || item.answer || '';
        const isOpen = open === idx;

        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'border-amber-400/60 bg-[#0E0E1A]/95 shadow-xl shadow-amber-950/25 ring-1 ring-amber-400/30'
                : 'border-white/10 bg-[#0B0B14]/80 hover:border-amber-400/40 hover:bg-[#0E0E1A]/60 shadow-sm'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              className="group w-full flex items-center justify-between gap-4 p-4 sm:p-5 lg:p-6 text-left transition-colors"
              aria-expanded={isOpen}
            >
              <span
                className={`font-heading font-bold text-sm sm:text-base lg:text-[17px] leading-snug transition-colors ${
                  isOpen
                    ? 'text-amber-300'
                    : 'text-white group-hover:text-amber-200'
                }`}
              >
                {questionText}
              </span>
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen
                    ? 'rotate-180 bg-amber-400/20 border border-amber-400/60 text-amber-300 shadow-sm shadow-amber-400/30'
                    : 'bg-white/5 border border-white/10 text-slate-400 group-hover:border-amber-400/30 group-hover:text-amber-300'
                }`}
              >
                <ChevronDown className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
            </button>

            {isOpen && (
              <div className="px-4 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/10 pt-4 animate-fade-in font-normal">
                {answerText}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
