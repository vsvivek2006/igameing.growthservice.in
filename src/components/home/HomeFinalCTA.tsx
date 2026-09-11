import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import businessConfig from '../../config/business';

export const HomeFinalCTA: React.FC = () => {
  const whatsappPhone = (businessConfig.phone?.whatsapp || businessConfig.contact?.whatsapp || '917654928455').replace(/[^0-9]/g, '');

  return (
    <section className="relative py-24 lg:py-32 bg-model3-base overflow-hidden border-t border-white/10">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-purple-600/15 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-[400px] h-[300px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>Complimentary Technical Diagnostic</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading mb-6">
          Ready to Build a Platform That <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
            Compounds Over Time?
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Tell us about your platform and competitive landscape. We will prepare an architectural diagnostic, competitor intercept audit, and technical remediation roadmap within 48 business hours.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Link
            to="/free-seo-audit"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-xl shadow-amber-400/25 transition-all duration-200 active:scale-[0.98]"
          >
            <span>Request Platform Diagnostic</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </Link>

          <a
            href={`https://wa.me/${whatsappPhone}?text=Hello%20iGaming%20Growth%20Team%2C%20I%20want%20to%20discuss%20our%20platform%20growth.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#25D366]/20 transition-all duration-200 active:scale-[0.98]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.99.583 3.841 1.594 5.393L2.05 22l4.74-1.524A9.957 9.957 0 0012 21.999c5.523 0 10-4.478 10-10 0-5.523-4.477-10-10.001-10zm0 18.181a8.177 8.177 0 01-4.163-1.135l-.298-.177-3.09.81.825-3.013-.194-.31A8.181 8.181 0 0120.18 12c0 4.518-3.677 8.181-8.181 8.181z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Quick trust points */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
          {[
            'No fake ranking promises',
            '48hr diagnostic response',
            'Confidential under NDA',
            '100% Client Code Ownership',
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFinalCTA;
