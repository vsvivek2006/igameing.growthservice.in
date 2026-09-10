import React from 'react';

export const LoadingFallback: React.FC = () => {
  return (
    <div className="min-h-[50vh] flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-purple-200 border-t-purple-600 animate-spin" />
        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
          Loading Content...
        </p>
      </div>
    </div>
  );
};

export default LoadingFallback;
