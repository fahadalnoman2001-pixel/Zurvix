'use client';

import React, { useEffect, useRef, useState } from 'react';

export type HeroMode = 'all' | 'web' | 'mobile' | 'ai';

interface TechNode3D {
  id: string;
  name: string;
  category: 'web' | 'mobile' | 'ai' | 'core';
  metric: string;
  x: number;
  y: number;
  z: number;
  color: string;
}

interface KineticHero3DProps {
  activeMode: HeroMode;
  onSelectNode?: (nodeName: string) => void;
}

export default function KineticHero3D({ activeMode, onSelectNode }: KineticHero3DProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredNode, setHoveredNode] = useState<TechNode3D | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // 3D Orbital Nodes with generous spacing
  const nodesRef = useRef<TechNode3D[]>([
    { id: 'nextjs', name: 'Next.js 16', category: 'web', metric: 'App Router & SSR', x: -140, y: -100, z: 90, color: '#00DF81' },
    { id: 'react', name: 'React 19', category: 'web', metric: 'Server Actions', x: 150, y: -80, z: -50, color: '#38BDF8' },
    { id: 'typescript', name: 'TypeScript', category: 'web', metric: '100% Type-Safe', x: -170, y: 20, z: -80, color: '#60A5FA' },
    { id: 'laravel', name: 'Laravel 11', category: 'web', metric: 'Scalable APIs', x: 160, y: 80, z: 100, color: '#F87171' },
    { id: 'flutter', name: 'Flutter Native', category: 'mobile', metric: '120 FPS iOS & Android', x: -120, y: 120, z: 70, color: '#38BDF8' },
    { id: 'openai', name: 'AI & OpenAI', category: 'ai', metric: 'LLM & GEO Search', x: 30, y: 150, z: -110, color: '#00DF81' },
    { id: 'threejs', name: 'Three.js / 3D', category: 'web', metric: 'Spatial WebGL', x: -80, y: -40, z: 160, color: '#A78BFA' },
    { id: 'aws', name: 'Cloud & DevOps', category: 'web', metric: 'Edge Deployment', x: 130, y: -30, z: -140, color: '#FBBF24' },
  ]);

  const rotationRef = useRef({ x: 0.25, y: 0.5, vx: 0.0025, vy: 0.004 });
  const mouseInfluence = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 640);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 560);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Deep space particle dust
    const particleCount = 85;
    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * 650,
      y: (Math.random() - 0.5) * 550,
      z: (Math.random() - 0.5) * 500,
      size: Math.random() * 2 + 0.6,
      pulse: Math.random() * Math.PI * 2
    }));

    // 3D Orbital Celestial Rings (Points along circles)
    const ringRadii = [130, 190, 240];
    const ringPoints = ringRadii.map((radius) => {
      const count = 36;
      return Array.from({ length: count }, (_, i) => {
        const theta = (i / count) * Math.PI * 2;
        return {
          x: Math.cos(theta) * radius,
          y: Math.sin(theta * 2) * 15,
          z: Math.sin(theta) * radius
        };
      });
    });

    const getModeColor = () => {
      if (activeMode === 'web') return '#00DF81';
      if (activeMode === 'mobile') return '#38BDF8';
      if (activeMode === 'ai') return '#A78BFA';
      return '#00DF81';
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Auto rotation + inertia
      if (!isDragging) {
        rotationRef.current.y += rotationRef.current.vy;
        rotationRef.current.x += rotationRef.current.vx;
      }

      // Smooth mouse follow
      const targetRotX = rotationRef.current.x + mouseInfluence.current.y * 0.35;
      const targetRotY = rotationRef.current.y + mouseInfluence.current.x * 0.35;

      const rotX = targetRotX;
      const rotY = targetRotY;

      const cx = width / 2;
      const cy = height / 2;
      const fov = 480;

      // 3D Projection math
      const project = (x: number, y: number, z: number) => {
        // Rotate Y
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = x * cosY + z * sinY;
        const y1 = y;
        const z1 = -x * sinY + z * cosY;

        // Rotate X
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        const distance = 360;
        const scale = fov / (fov + z2 + distance);
        return {
          px: cx + x2 * scale,
          py: cy + y2 * scale,
          pz: z2,
          scale,
          alpha: Math.max(0.12, Math.min(1, (z2 + 220) / 440))
        };
      };

      // 1. Draw Space Particle Cloud
      const now = Date.now() * 0.0015;
      particles.forEach((p) => {
        p.pulse += 0.015;
        const pulseAlpha = (Math.sin(p.pulse) + 1) / 2;
        const proj = project(p.x, p.y, p.z);

        ctx.beginPath();
        ctx.arc(proj.px, proj.py, p.size * proj.scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 223, 129, ${proj.alpha * pulseAlpha * 0.4})`;
        ctx.fill();
      });

      // 2. Draw 3D Celestial Orbital Rings
      ringPoints.forEach((ring, rIdx) => {
        const projectedRing = ring.map(pt => project(pt.x, pt.y, pt.z));
        ctx.beginPath();
        for (let i = 0; i < projectedRing.length; i++) {
          const pt = projectedRing[i];
          if (i === 0) ctx.moveTo(pt.px, pt.py);
          else ctx.lineTo(pt.px, pt.py);
        }
        ctx.closePath();
        ctx.strokeStyle = rIdx === 1 ? `rgba(0, 223, 129, 0.18)` : `rgba(255, 255, 255, 0.06)`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // 3. Central Quantum Light Core
      const coreProj = project(0, 0, 0);

      // Atmospheric Radial Light Burst
      const coreGlow = ctx.createRadialGradient(coreProj.px, coreProj.py, 2, coreProj.px, coreProj.py, 160 * coreProj.scale);
      coreGlow.addColorStop(0, `${getModeColor()}44`);
      coreGlow.addColorStop(0.5, `${getModeColor()}11`);
      coreGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(coreProj.px, coreProj.py, 160 * coreProj.scale, 0, Math.PI * 2);
      ctx.fill();

      // Central Nested 3D Octahedron
      const coreRadius = 40;
      const coreVerts = [
        { x: 0, y: -coreRadius, z: 0 },
        { x: 0, y: coreRadius, z: 0 },
        { x: -coreRadius, y: 0, z: 0 },
        { x: coreRadius, y: 0, z: 0 },
        { x: 0, y: 0, z: -coreRadius },
        { x: 0, y: 0, z: coreRadius },
      ].map((v) => project(v.x, v.y, v.z));

      const coreEdges = [
        [0, 2], [0, 3], [0, 4], [0, 5],
        [1, 2], [1, 3], [1, 4], [1, 5],
        [2, 4], [4, 3], [3, 5], [5, 2]
      ];

      coreEdges.forEach(([i1, i2]) => {
        const p1 = coreVerts[i1];
        const p2 = coreVerts[i2];
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.strokeStyle = `rgba(0, 223, 129, ${(p1.alpha + p2.alpha) * 0.5})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();
      });

      // 4. Project and Draw Tech Nodes
      const projectedNodes = nodesRef.current.map((node) => {
        const proj = project(node.x, node.y, node.z);
        return { node, ...proj };
      });

      // Sort by Z for realistic depth
      projectedNodes.sort((a, b) => a.pz - b.pz);

      // Draw Laser Energy Beams
      projectedNodes.forEach((pn) => {
        const isCurrentActive =
          activeMode === 'all' ||
          (activeMode === 'web' && (pn.node.category === 'web' || pn.node.category === 'core')) ||
          (activeMode === 'mobile' && (pn.node.category === 'mobile' || pn.node.category === 'core')) ||
          (activeMode === 'ai' && (pn.node.category === 'ai' || pn.node.category === 'core'));

        const isHovered = hoveredNode?.id === pn.node.id;

        // Laser line
        ctx.beginPath();
        ctx.moveTo(coreProj.px, coreProj.py);
        ctx.lineTo(pn.px, pn.py);

        if (isHovered) {
          ctx.strokeStyle = '#00DF81';
          ctx.lineWidth = 2.4;
        } else if (isCurrentActive) {
          ctx.strokeStyle = `rgba(0, 223, 129, ${pn.alpha * 0.6})`;
          ctx.lineWidth = 1.4;
        } else {
          ctx.strokeStyle = `rgba(255, 255, 255, ${pn.alpha * 0.12})`;
          ctx.lineWidth = 0.8;
        }
        ctx.stroke();

        // High-speed Laser Pulse on Beam
        const pulsePos = (now * 1.5 + Math.abs(pn.node.x) * 0.015) % 1;
        const pulseX = coreProj.px + (pn.px - coreProj.px) * pulsePos;
        const pulseY = coreProj.py + (pn.py - coreProj.py) * pulsePos;

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 3 * pn.scale, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00DF81';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw Node Bodies & Floating Hologram Badges
      projectedNodes.forEach((pn) => {
        const isHovered = hoveredNode?.id === pn.node.id;
        const nodeRadius = isHovered ? 24 * pn.scale : 18 * pn.scale;

        // Glowing outer halo
        ctx.beginPath();
        ctx.arc(pn.px, pn.py, nodeRadius * 2, 0, Math.PI * 2);
        ctx.fillStyle = isHovered
          ? 'rgba(0, 223, 129, 0.4)'
          : `rgba(0, 223, 129, ${pn.alpha * 0.15})`;
        ctx.fill();

        // Node Circle
        ctx.beginPath();
        ctx.arc(pn.px, pn.py, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#00DF81' : '#080C11';
        ctx.strokeStyle = isHovered ? '#FFFFFF' : `rgba(0, 223, 129, ${pn.alpha * 0.85})`;
        ctx.lineWidth = isHovered ? 2 : 1.5;
        ctx.shadowBlur = isHovered ? 18 : 6;
        ctx.shadowColor = '#00DF81';
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Node Center Core Dot
        ctx.beginPath();
        ctx.arc(pn.px, pn.py, 3.5 * pn.scale, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#05080A' : '#00DF81';
        ctx.fill();

        // Node Label Pill (HUD Badge)
        const labelText = pn.node.name;
        ctx.font = `600 ${Math.round(11 * pn.scale)}px var(--font-sans), sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const textWidth = ctx.measureText(labelText).width;
        const pillWidth = textWidth + 18 * pn.scale;
        const pillHeight = 22 * pn.scale;
        const pillY = pn.py + nodeRadius + 15 * pn.scale;

        // Pill background
        ctx.fillStyle = isHovered ? 'rgba(0, 223, 129, 0.95)' : 'rgba(8, 12, 17, 0.85)';
        ctx.strokeStyle = isHovered ? '#00DF81' : `rgba(255, 255, 255, ${pn.alpha * 0.25})`;
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.roundRect(pn.px - pillWidth / 2, pillY - pillHeight / 2, pillWidth, pillHeight, 999);
        ctx.fill();
        ctx.stroke();

        // Pill Text
        ctx.fillStyle = isHovered ? '#05080A' : '#FFFFFF';
        ctx.fillText(labelText, pn.px, pillY);

        // If hovered, display sub-metric tooltip
        if (isHovered) {
          const subText = pn.node.metric;
          ctx.font = `11px var(--font-mono), monospace`;
          ctx.fillStyle = '#00DF81';
          ctx.fillText(subText, pn.px, pillY + 18);
        }
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [activeMode, hoveredNode, isDragging]);

  // Mouse / Touch Drag Tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !canvasRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (isDragging) {
      const dx = x - dragStart.x;
      const dy = y - dragStart.y;
      rotationRef.current.y += dx * 0.007;
      rotationRef.current.x += dy * 0.007;
      setDragStart({ x, y });
    } else {
      mouseInfluence.current = {
        x: (x / rect.width - 0.5) * 0.7,
        y: (y / rect.height - 0.5) * 0.7,
      };

      // Hit test nodes
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const fov = 480;
      const rotX = rotationRef.current.x + mouseInfluence.current.y * 0.35;
      const rotY = rotationRef.current.y + mouseInfluence.current.x * 0.35;

      let foundNode: TechNode3D | null = null;

      for (const node of nodesRef.current) {
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = node.x * cosY + node.z * sinY;
        const y1 = node.y;
        const z1 = -node.x * sinY + node.z * cosY;

        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        const distance = 360;
        const scale = fov / (fov + z2 + distance);
        const px = cx + x2 * scale;
        const py = cy + y2 * scale;

        const dist = Math.hypot(x - px, y - py);
        if (dist < 34 * scale) {
          foundNode = node;
          break;
        }
      }

      setHoveredNode(foundNode);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    if (hoveredNode && onSelectNode) {
      onSelectNode(hoveredNode.name);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => {
        setIsDragging(false);
        setHoveredNode(null);
        mouseInfluence.current = { x: 0, y: 0 };
      }}
      onClick={handleClick}
      className="relative w-full h-[460px] sm:h-[520px] lg:h-[560px] rounded-3xl border border-[#00DF81]/20 bg-gradient-to-b from-[#080C11]/90 via-[#06090D]/80 to-[#040608]/90 backdrop-blur-2xl overflow-hidden group shadow-2xl transition-all duration-500 hover:border-[#00DF81]/40 cursor-grab active:cursor-grabbing select-none"
    >
      {/* Dynamic Aurora Glow Behind 3D Canvas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#00DF81]/15 rounded-full blur-[110px] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-teal-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="relative z-10 w-full h-full" />

      {/* Top Left HUD Status */}
      <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 rounded-full border border-white/10 bg-black/60 px-3.5 py-1.5 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#00DF81] animate-ping" />
        <span className="text-[10px] font-mono font-bold tracking-wider text-gray-200 uppercase">
          SPATIAL TECH GRAPH • DRAG TO ROTATE 3D
        </span>
      </div>

      {/* Top Right Latency Telemetry */}
      <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center space-x-2 rounded-full border border-[#00DF81]/30 bg-[#00DF81]/10 px-3 py-1 backdrop-blur-md">
        <span className="text-[10px] font-mono font-bold text-[#00DF81]">
          Engine Latency: &lt;1ms
        </span>
      </div>

      {/* Bottom Center Node Telemetry Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2 rounded-full border border-white/[0.1] bg-black/80 px-4 py-1.5 backdrop-blur-md shadow-xl text-center">
        <span className="text-[11px] font-mono text-gray-300">
          {hoveredNode
            ? `⚡ ${hoveredNode.name}: ${hoveredNode.metric}`
            : `Hover or Drag 3D nodes to inspect full-stack architecture`}
        </span>
      </div>
    </div>
  );
}
