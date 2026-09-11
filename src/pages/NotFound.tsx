import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { SEOHead } from '../seo';
import { Container, Button } from '../components/ui';
import { FadeIn } from '../components/animations';

export const NotFound: React.FC = () => {
  const quickLinks = [
    { label: 'All Services', path: '/services', desc: '12 specialized growth & SEO services' },
    { label: 'Industries We Serve', path: '/industries', desc: 'Gaming, casino, sports & financial verticals' },
    { label: 'Technical SEO Guides', path: '/resources', desc: 'Engineering frameworks & architectural blueprints' },
    { label: 'Book a Strategy Call', path: '/book-call', desc: '30-minute private growth consultation' },
  ];

  return (
    <div className="bg-model3-base text-white selection:bg-amber-400 selection:text-black font-sans antialiased overflow-x-hidden">
      <SEOHead
        title="404 — Page Not Found | iGaming Growth"
        description="The requested page could not be found on iGaming Growth. Explore our specialized B2B digital marketing services, industry verticals, and technical SEO guides."
        robots="noindex, follow"
      />

      <div className="relative min-h-[75vh] flex items-center justify-center py-20 bg-model3-base bg-hero-atmosphere text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-dark-mesh opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[350px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />

        <Container size="md" className="relative text-center space-y-8">
          <FadeIn>
            <div className="w-20 h-20 rounded-3xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mx-auto shadow-xl mb-6">
              <ShieldAlert className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>HTTP 404 — Resource Not Found</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-4">
              Page Not Found
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
              The URL you requested does not exist on our servers, may have been relocated, or is no longer available. Explore our core services or return to the homepage.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Button to="/" variant="gold" size="lg" icon={<ArrowLeft className="w-4 h-4" />}>
                Return to Homepage
              </Button>
              <Button to="/services" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:border-amber-400/50">
                Explore All Services
              </Button>
              <Button to="/free-seo-audit" variant="secondary" size="lg">
                Free SEO Audit
              </Button>
            </div>

            {/* Quick Navigation Directory */}
            <div className="pt-8 border-t border-white/10 max-w-2xl mx-auto text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">
                Recommended Destinations
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="p-4 rounded-2xl bg-[#0D0D18]/90 border border-white/10 shadow-sm hover:border-amber-400/40 hover:bg-amber-400/5 transition-all duration-200 group block hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-heading font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                        {item.label}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-xs text-slate-400 leading-snug">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>
    </div>
  );
};

export default NotFound;
