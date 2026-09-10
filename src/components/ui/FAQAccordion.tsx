import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: readonly FAQItem[];
  className?: string;
  defaultOpen?: number;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  className = '',
  defaultOpen = 0,
}) => {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`rounded-2xl border transition-all duration-200 ${
            open === idx
              ? 'border-purple-200 shadow-sm shadow-purple-100/60 bg-white'
              : 'border-slate-200 bg-white hover:border-purple-200'
          }`}
        >
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
            aria-expanded={open === idx}
          >
            <span
              className={`font-heading font-semibold text-sm leading-snug transition-colors ${
                open === idx ? 'text-purple-700' : 'text-slate-800'
              }`}
            >
              {item.q}
            </span>
            <ChevronDown
              className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                open === idx ? 'rotate-180 text-purple-600' : 'text-slate-400'
              }`}
            />
          </button>

          {open === idx && (
            <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-purple-50 pt-3">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
