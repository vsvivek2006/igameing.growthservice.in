import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../../routing/route-types';

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  dark?: boolean;
  variant?: 'light' | 'dark';
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className = '',
}) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs sm:text-sm ${className}`}>
      <ol className="flex items-center flex-wrap gap-1 sm:gap-2">
        <li>
          <Link
            to="/"
            className="inline-flex items-center gap-1 transition-colors text-slate-400 hover:text-amber-400"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1 sm:gap-2">
              <ChevronRight
                className="w-3.5 h-3.5 text-slate-500 shrink-0"
              />
              {isLast || !item.path ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className="font-semibold truncate max-w-[200px] sm:max-w-[300px] text-amber-400"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="transition-colors truncate max-w-[150px] sm:max-w-[250px] text-slate-300 hover:text-amber-300"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
