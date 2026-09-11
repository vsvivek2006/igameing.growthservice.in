import React, { useEffect, useRef, useState } from 'react';

// ─── High-Contrast 3D Luminous Gaming & Traffic Globe ─────────────────────────
// Responsive on mobile (320px) and desktop (4K).
// High-visibility illuminated sphere, rotating coordinate wireframe, and active gaming nodes.

interface HubNode {
  id: string;
  name: string;
  cx: number;
  cy: number;
  color: string;
  pulse: string;
  metric: string;
}

const GAMING_HUBS: HubNode[] = [
  { id: 'hub-nepal-in', name: 'South Asia Core (Nepal/IN)', cx: 285, cy: 215, color: '#f59e0b', pulse: '#fbbf24', metric: '15.9M Clicks' },
  { id: 'hub-uae', name: 'Middle East Exchange (UAE)', cx: 240, cy: 210, color: '#06b6d4', pulse: '#38bdf8', metric: '0.4s Speed' },
  { id: 'hub-seasia', name: 'SE Asia Gaming Hub', cx: 335, cy: 250, color: '#10b981', pulse: '#34d399', metric: '51.4K Players' },
  { id: 'hub-eu', name: 'EU Tier-1 Compliance', cx: 195, cy: 170, color: '#a855f7', pulse: '#c084fc', metric: '0 Bans' },
];

const ORBITAL_RINGS = [
  { rx: 200, ry: 70, dur: '16s', color: '#f59e0b', opacity: 0.55, rot: 25, dash: '8 6' },
  { rx: 220, ry: 65, dur: '22s', color: '#06b6d4', opacity: 0.45, rot: -35, dash: '10 8' },
  { rx: 185, ry: 55, dur: '14s', color: '#8b5cf6', opacity: 0.5, rot: 65, dash: '6 6' },
];

export const Globe3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop, { passive: true });
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Subtle mouse parallax on desktop only; passive and non-blocking
  useEffect(() => {
    const el = containerRef.current;
    if (!el || window.innerWidth < 768) return;

    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transform = `perspective(900px) rotateY(${dx * 6}deg) rotateX(${-dy * 5}deg)`;
    };

    const reset = () => {
      el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
    };

    window.addEventListener('mousemove', handle, { passive: true });
    window.addEventListener('mouseleave', reset);
    return () => {
      window.removeEventListener('mousemove', handle);
      window.removeEventListener('mouseleave', reset);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] lg:max-w-[460px] aspect-square mx-auto select-none flex items-center justify-center">
      {/* ── Outer Atmospheric Glow ───────────────────────────────────────── */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/20 via-amber-500/15 to-cyan-500/20 blur-3xl pointer-events-none transform scale-95" />
      <div className="absolute w-3/4 h-3/4 rounded-full bg-amber-400/10 blur-2xl pointer-events-none animate-pulse" />

      {/* ── Parallax Interactive Frame ───────────────────────────────────── */}
      <div
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center"
        style={{ transition: 'transform 0.15s ease-out', willChange: 'transform' }}
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full drop-shadow-[0_0_35px_rgba(245,158,11,0.2)]"
          style={{ overflow: 'visible' }}
          aria-hidden="true"
        >
          <defs>
            {/* Luminous Glow Filters */}
            <filter id="globe-glow-gold" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="globe-glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="globe-glow-purple" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* High-Contrast Luminous Globe Gradients */}
            <radialGradient id="globe-sphere-body" cx="42%" cy="38%" r="58%">
              <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#110d29" stopOpacity="0.98" />
              <stop offset="85%" stopColor="#0a0718" stopOpacity="1" />
              <stop offset="100%" stopColor="#050510" stopOpacity="1" />
            </radialGradient>

            <radialGradient id="globe-rim-light" cx="30%" cy="28%" r="65%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.32" />
              <stop offset="35%" stopColor="#a855f7" stopOpacity="0.18" />
              <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="arc-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            <linearGradient id="arc-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>

          {/* ── 1. Outer Orbit Rings ─────────────────────────────────────────── */}
          {ORBITAL_RINGS.map((ring, idx) => (
            <g key={idx} transform={`rotate(${ring.rot} 250 250)`}>
              <ellipse
                cx="250"
                cy="250"
                rx={ring.rx}
                ry={ring.ry}
                fill="none"
                stroke={ring.color}
                strokeWidth="1.6"
                strokeOpacity={ring.opacity}
                strokeDasharray={ring.dash}
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 250 250"
                  to="360 250 250"
                  dur={ring.dur}
                  repeatCount="indefinite"
                />
              </ellipse>
              {/* Orbiting Satellite Node */}
              <circle cx={250 + ring.rx} cy="250" r="4.5" fill={ring.color} filter={isDesktop ? "url(#globe-glow-gold)" : undefined}>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 250 250"
                  to="360 250 250"
                  dur={ring.dur}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}

          {/* ── 2. Sphere Solid Body ────────────────────────────────────────── */}
          {/* Base Rim Glow */}
          <circle cx="250" cy="250" r="148" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeOpacity="0.4" filter={isDesktop ? "url(#globe-glow-purple)" : undefined} />
          <circle cx="250" cy="250" r="146" fill="url(#globe-sphere-body)" stroke="#f59e0b" strokeWidth="1.8" strokeOpacity="0.6" />
          {/* Inner Light Infill */}
          <circle cx="250" cy="250" r="145" fill="url(#globe-rim-light)" pointerEvents="none" />

          {/* ── 3. High-Visibility Latitude Coordinates ─────────────────────── */}
          {[-70, -45, -20, 0, 20, 45, 70].map((lat, i) => {
            const y = 250 + (lat / 90) * 136;
            const rx = Math.sqrt(Math.max(0, 145 * 145 - (y - 250) * (y - 250)));
            const isEquator = lat === 0;
            return (
              <ellipse
                key={`lat-${i}`}
                cx="250"
                cy={y}
                rx={rx}
                ry={rx * 0.28}
                fill="none"
                stroke={isEquator ? '#f59e0b' : '#818cf8'}
                strokeWidth={isEquator ? '1.5' : '0.8'}
                strokeOpacity={isEquator ? '0.75' : '0.35'}
                strokeDasharray={isEquator ? 'none' : '4 3'}
              />
            );
          })}

          {/* ── 4. Rotating Longitude Slices (Animated Sphere Effect) ────────── */}
          {[-75, -50, -25, 0, 25, 50, 75].map((lng, i) => {
            const widthFactor = Math.cos((lng / 90) * (Math.PI / 2));
            return (
              <ellipse
                key={`lng-${i}`}
                cx="250"
                cy="250"
                rx={Math.max(4, 145 * widthFactor)}
                ry="145"
                fill="none"
                stroke="#6366f1"
                strokeWidth="0.85"
                strokeOpacity="0.32"
              />
            );
          })}

          {/* ── 5. Data Flow Trajectory Arcs Between Gaming Hubs ────────────── */}
          {/* Arc 1: EU -> Middle East */}
          <path
            d="M 195 170 Q 215 175 240 210"
            fill="none"
            stroke="url(#arc-gradient-1)"
            strokeWidth="2"
            strokeOpacity="0.8"
            strokeDasharray="4 3"
          />
          {/* Arc 2: Middle East -> Nepal/India */}
          <path
            d="M 240 210 Q 260 200 285 215"
            fill="none"
            stroke="url(#arc-gradient-1)"
            strokeWidth="2.4"
            strokeOpacity="0.9"
            filter={isDesktop ? "url(#globe-glow-gold)" : undefined}
          />
          {/* Arc 3: Nepal/India -> SE Asia */}
          <path
            d="M 285 215 Q 315 220 335 250"
            fill="none"
            stroke="url(#arc-gradient-2)"
            strokeWidth="2.2"
            strokeOpacity="0.85"
            filter={isDesktop ? "url(#globe-glow-cyan)" : undefined}
          />

          {/* ── 6. Active Gaming Nodes & Verified Hotspots ──────────────────── */}
          {GAMING_HUBS.map((hub) => (
            <g key={hub.id}>
              {/* Radar Beacon Pulse */}
              <circle cx={hub.cx} cy={hub.cy} r="10" fill={hub.pulse} opacity="0.25">
                <animate attributeName="r" values="6;16;6" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite" />
              </circle>
              {/* Glowing Core Pin */}
              <circle
                cx={hub.cx}
                cy={hub.cy}
                r="4.5"
                fill={hub.color}
                stroke="#ffffff"
                strokeWidth="1.2"
                filter={isDesktop ? "url(#globe-glow-gold)" : undefined}
              />
            </g>
          ))}

          {/* ── 7. Center Telemetry HUD Badge ───────────────────────────────── */}
          <g transform="translate(250, 250)">
            {/* Center HUD Backing */}
            <rect
              x="-68"
              y="-28"
              width="136"
              height="56"
              rx="14"
              fill="#06060c"
              fillOpacity="0.88"
              stroke="#f59e0b"
              strokeWidth="1.2"
              strokeOpacity="0.6"
              filter={isDesktop ? "url(#globe-glow-gold)" : undefined}
            />
            {/* Live Indicator */}
            <circle cx="-48" cy="-10" r="3.5" fill="#10b981">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <text
              x="-38"
              y="-7"
              fontSize="9"
              fontWeight="800"
              letterSpacing="1.5"
              fill="#f59e0b"
              fontFamily="monospace"
            >
              LIVE NETWORK
            </text>
            <text
              x="0"
              y="16"
              textAnchor="middle"
              fontSize="16"
              fontWeight="900"
              fill="#ffffff"
              fontFamily="system-ui, sans-serif"
            >
              15.9M+ Clicks
            </text>
          </g>

          {/* ── 8. Highlight Overlay (Gloss) ─────────────────────────────────── */}
          <path
            d="M 120 200 A 145 145 0 0 1 380 200 A 145 70 0 0 0 120 200 Z"
            fill="#ffffff"
            fillOpacity="0.04"
            pointerEvents="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default Globe3DCanvas;
