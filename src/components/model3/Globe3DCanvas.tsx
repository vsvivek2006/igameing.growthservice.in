import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ─── Procedural Point Cloud on Sphere ─────────────────────────────────────────
function SphereParticles({ count = 1200 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Distribute points evenly on sphere using golden spiral (Fibonacci sphere)
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorPurple = new THREE.Color('#9333ea');
    const colorIndigo = new THREE.Color('#6366f1');
    const colorAmber = new THREE.Color('#f59e0b');
    const colorCyan = new THREE.Color('#06b6d4');

    const phi = Math.PI * (Math.sqrt(5) - 1); // golden angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;

      const scale = 2.4;
      pos[i * 3] = x * scale;
      pos[i * 3 + 1] = y * scale;
      pos[i * 3 + 2] = z * scale;

      // Color variation based on position & random seed
      let chosenColor = colorIndigo;
      const rand = Math.random();
      if (rand < 0.3) chosenColor = colorPurple;
      else if (rand < 0.5) chosenColor = colorCyan;
      else if (rand < 0.65) chosenColor = colorAmber;

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// ─── Glowing Orbital Rings ───────────────────────────────────────────────────
function OrbitalRing({ radius, tilt, speed, color }: { radius: number; tilt: [number, number, number]; speed: number; color: string }) {
  const ringRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * speed;
    }
  });

  const curve = useMemo(() => {
    return new THREE.EllipseCurve(0, 0, radius, radius, 0, 2 * Math.PI, false, 0);
  }, [radius]);

  const points = useMemo(() => {
    const pts = curve.getPoints(100);
    return pts.map((p) => new THREE.Vector3(p.x, p.y, 0));
  }, [curve]);

  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);

  return (
    <group rotation={tilt}>
      <group ref={ringRef}>
        <line geometry={lineGeometry}>
          <lineBasicMaterial color={color} transparent opacity={0.35} />
        </line>
        {/* Pulsing satellite marker on ring */}
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#f59e0b" />
        </mesh>
      </group>
    </group>
  );
}

// ─── Data Arc Connections ────────────────────────────────────────────────────
function DataArcs() {
  const arcsGroupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (arcsGroupRef.current) {
      arcsGroupRef.current.rotation.y += delta * 0.12;
    }
  });

  // Create 4 curved arcs across the globe
  const arcCurves = useMemo(() => {
    const curves = [];
    const pointsData = [
      { start: [1.6, 1.2, 1.2], end: [-1.4, 0.8, 1.6], midH: 3.1 },
      { start: [-1.2, -0.9, 1.7], end: [1.8, -0.4, 1.3], midH: 2.9 },
      { start: [0.2, 1.9, 1.2], end: [1.7, -1.0, 1.2], midH: 3.2 },
      { start: [-1.8, 0.2, 1.4], end: [0.3, -1.8, 1.4], midH: 3.0 },
    ];

    for (const d of pointsData) {
      const p1 = new THREE.Vector3(...(d.start as [number, number, number]));
      const p2 = new THREE.Vector3(...(d.end as [number, number, number]));
      const mid = p1.clone().add(p2).multiplyScalar(0.5).normalize().multiplyScalar(d.midH);
      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      curves.push(new THREE.BufferGeometry().setFromPoints(curve.getPoints(50)));
    }
    return curves;
  }, []);

  return (
    <group ref={arcsGroupRef}>
      {arcCurves.map((geom, idx) => (
        <line key={idx} geometry={geom}>
          <lineBasicMaterial
            color={idx % 2 === 0 ? '#c084fc' : '#38bdf8'}
            transparent
            opacity={0.55}
          />
        </line>
      ))}
    </group>
  );
}

// ─── Globe Inner Core & Atmosphere Wireframe ──────────────────────────────────
function GlobeCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.08;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.05;
    }
  });

  return (
    <>
      {/* Dark semi-transparent core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[2.36, 32, 32]} />
        <meshBasicMaterial
          color="#0b0b18"
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Outer latitude/longitude wireframe grid */}
      <mesh ref={wireRef}>
        <sphereGeometry args={[2.42, 24, 18]} />
        <meshBasicMaterial
          color="#4c1d95"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>
    </>
  );
}

// ─── Master Interactive Scene ─────────────────────────────────────────────────
function GlobeScene({ mousePos }: { mousePos: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Smooth lerp to mouse position for organic 3D parallax
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePos.y * 0.35,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePos.x * 0.45,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <GlobeCore />
      <SphereParticles count={1100} />
      <DataArcs />
      <OrbitalRing radius={3.1} tilt={[Math.PI / 4, 0.2, 0]} speed={0.25} color="#8b5cf6" />
      <OrbitalRing radius={3.4} tilt={[-Math.PI / 5, -0.4, 0.3]} speed={-0.18} color="#f59e0b" />
      <OrbitalRing radius={2.85} tilt={[Math.PI / 2.8, 0.8, -0.2]} speed={0.15} color="#06b6d4" />
    </group>
  );
}

// ─── Fallback Component for Mobile / Low-Power Devices ────────────────────────
const Globe2DFallback: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-amber-500/20 blur-3xl" />
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-purple-500/40 p-4 flex items-center justify-center animate-spin-slow">
        <div className="w-full h-full rounded-full border border-dashed border-amber-400/40 p-6 flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-[#0d0d1e]/80 border border-purple-400/50 shadow-inner flex items-center justify-center">
            <div className="text-center px-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                GLOBAL SEO CORE
              </span>
              <div className="text-xl font-black text-white mt-1">90.4K Clicks</div>
              <div className="text-[10px] text-purple-300 mt-0.5">Top Tier Visibility</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Exported Canvas Wrapper ─────────────────────────────────────────────
export const Globe3DCanvas: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);

  useEffect(() => {
    // Detect WebGL capability safely
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebGLSupported(!!gl);
    } catch {
      setWebGLSupported(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = -(e.clientY / innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (webGLSupported === false) {
    return <Globe2DFallback />;
  }

  return (
    <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[620px] select-none">
      {/* Ambient background glow behind canvas */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-600/15 via-transparent to-transparent pointer-events-none blur-2xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.6} />
        <GlobeScene mousePos={mousePos} />
      </Canvas>
    </div>
  );
};
