import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, MessageCircle, PhoneCall } from 'lucide-react';
import businessConfig from '../../config/business';
import { trackEvent } from '../../analytics/tracking';

export const MobileBottomBar: React.FC = () => {
  const whatsappNumber = (businessConfig.phone?.whatsapp || businessConfig.contact?.whatsapp || '917654928455').replace(/[^0-9]/g, '');
  const message = encodeURIComponent(
    'Hi iGaming Growth team, I am an operator looking for technical SEO & growth engineering for my platform.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div 
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#06060c]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] flex items-center gap-2 shadow-[0_-8px_25px_rgba(0,0,0,0.8)]"
      role="region"
      aria-label="Mobile quick actions"
    >
      {/* 1-Tap WhatsApp Direct Link */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('mobile_bar_whatsapp_click', { source: 'mobile_bottom_bar' })}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs shadow-md shadow-emerald-950/40 active:scale-[0.98] transition-transform"
      >
        <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
        <span>WhatsApp</span>
      </a>

      {/* 1-Tap Strategy Call */}
      <Link
        to="/book-call"
        onClick={() => trackEvent('mobile_bar_call_click', { source: 'mobile_bottom_bar' })}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs active:scale-[0.98] transition-transform"
      >
        <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
        <span>Book Call</span>
      </Link>

      {/* Free Technical Audit CTA */}
      <Link
        to="/free-seo-audit"
        onClick={() => trackEvent('mobile_bar_audit_click', { source: 'mobile_bottom_bar' })}
        className="flex-1 flex items-center justify-center gap-1 py-2.5 px-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 font-extrabold text-xs shadow-md shadow-amber-500/20 active:scale-[0.98] transition-transform"
      >
        <Zap className="w-3.5 h-3.5 fill-slate-950" />
        <span>Free Audit</span>
      </Link>
    </div>
  );
};

export default MobileBottomBar;
