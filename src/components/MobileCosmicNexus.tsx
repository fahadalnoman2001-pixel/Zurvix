'use client';

import React, { useEffect, useRef, useState } from 'react';
import { TechPlanet } from './CosmicTechCanvas';

interface MobileCosmicNexusProps {
  filterCategory?: 'all' | 'web' | 'mobile' | 'ai';
  onSelectPlanet?: (planet: TechPlanet) => void;
}

export default function MobileCosmicNexus({ filterCategory = 'all', onSelectPlanet }: MobileCosmicNexusProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredPlanet, setHoveredPlanet] = useState<TechPlanet | null>(null);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const [logoReady, setLogoReady] = useState(false);

  // Preload ZURVIX logo
  useEffect(() => {
    const img = new Image();
    img.src = '/brand/zurvix-icon.png';
    img.onload = () => {
      logoImgRef.current = img;
      setLogoReady(true);
    };
  }, []);

  // Compact Planet Configuration tailored specifically for mobile viewport height (180px)
  const planetsRef = useRef<TechPlanet[]>([
    {
      id: 'nextjs',
      name: 'Next.js 16',
      category: 'web',
      metric: 'App Router & Sub-100ms SSR',
      radius: 12,
      orbitA: 62,
      orbitB: 32,
      speed: 0.0022,
      angle: 0.5,
      color: '#FFFFFF',
      glowColor: 'rgba(0, 223, 129, 0.8)',
      hasRing: true,
      description: 'Production web framework with server components and edge rendering.'
    },
    {
      id: 'react',
      name: 'React 19',
      category: 'web',
      metric: 'Server Actions & Compiler',
      radius: 11,
      orbitA: 92,
      orbitB: 46,
      speed: 0.0016,
      angle: 2.3,
      color: '#38BDF8',
      glowColor: 'rgba(56, 189, 248, 0.8)',
      description: 'Declarative component architecture and asynchronous rendering.'
    },
    {
      id: 'flutter',
      name: 'Flutter Native',
      category: 'mobile',
      metric: '120 FPS iOS & Android',
      radius: 12,
      orbitA: 122,
      orbitB: 58,
      speed: 0.0011,
      angle: 4.1,
      color: '#02569B',
      glowColor: 'rgba(2, 86, 155, 0.8)',
      description: 'Cross-platform native mobile engine with hardware GPU acceleration.'
    },
    {
      id: 'openai',
      name: 'AI / GEO',
      category: 'ai',
      metric: 'AI Search & LLM Engine',
      radius: 12,
      orbitA: 152,
      orbitB: 70,
      speed: 0.00075,
      angle: 1.2,
      color: '#10A37F',
      glowColor: 'rgba(16, 163, 127, 0.8)',
      hasRing: true,
      description: 'Generative Engine Optimization and AI citation discovery architecture.'
    }
  ]);

  // Vector Tech Icon Renderers for Compact Mobile Canvas
  const drawCompactIcon = (ctx: CanvasRenderingContext2D, id: string, x: number, y: number, r: number) => {
    ctx.save();
    ctx.translate(x, y);
    const s = r * 0.55;

    if (id === 'nextjs') {
      ctx.beginPath();
      ctx.arc(0, 0, s * 1.3, 0, Math.PI * 2);
      ctx.fillStyle = '#000000';
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(-s * 0.7, -s * 0.7, s * 0.35, s * 1.4);
      ctx.beginPath();
      ctx.moveTo(-s * 0.7, -s * 0.7);
      ctx.lineTo(s * 0.5, s * 0.7);
      ctx.lineTo(s * 0.8, s * 0.7);
      ctx.lineTo(-s * 0.4, -s * 0.7);
      ctx.closePath();
      ctx.fill();
      ctx.fillRect(s * 0.45, -s * 0.7, s * 0.35, s * 0.85);
    } else if (id === 'react') {
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 1.2;
      for (let i = 0; i < 3; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI) / 3);
        ctx.beginPath();
        ctx.ellipse(0, 0, s * 1.2, s * 0.45, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = '#38BDF8';
      ctx.fill();
    } else if (id === 'flutter') {
      ctx.fillStyle = '#47C5FB';
      ctx.beginPath();
      ctx.moveTo(s * 0.7, -s * 0.8);
      ctx.lineTo(-s * 0.8, s * 0.7);
      ctx.lineTo(-s * 0.3, s * 0.7);
      ctx.lineTo(s * 1.2, -s * 0.8);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#02569B';
      ctx.beginPath();
      ctx.moveTo(s * 0.7, s * 0.8);
      ctx.lineTo(-s * 0.1, 0);
      ctx.lineTo(s * 0.4, 0);
      ctx.lineTo(s * 1.2, s * 0.8);
      ctx.closePath();
      ctx.fill();
    } else if (id === 'openai') {
      ctx.fillStyle = '#10A37F';
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x1 = Math.cos(angle) * s * 1.1;
        const y1 = Math.sin(angle) * s * 1.1;
        if (i === 0) ctx.moveTo(x1, y1);
        else ctx.lineTo(x1, y1);
      }
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    let displayWidth = canvas.parentElement?.clientWidth || 360;
    let displayHeight = 175;

    const setupSize = () => {
      if (!canvas.parentElement) return;
      displayWidth = canvas.parentElement.clientWidth;
      displayHeight = 175;
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    setupSize();
    window.addEventListener('resize', setupSize);

    // Micro Stars
    const stars = Array.from({ length: 35 }, () => ({
      x: Math.random() * displayWidth,
      y: Math.random() * displayHeight,
      size: Math.random() * 1.2 + 0.3,
      alpha: Math.random() * 0.5 + 0.2,
      twinkle: Math.random() * 0.005 + 0.002
    }));

    const orbitTilt = -0.15;

    const render = () => {
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      const cx = displayWidth * 0.5;
      const cy = displayHeight * 0.5;
      const scale = Math.min(displayWidth / 375, 1.05);

      // 1. Soft Ambient Radial Glow
      const bgGlow = ctx.createRadialGradient(cx, cy, 5, cx, cy, 110);
      bgGlow.addColorStop(0, 'rgba(0, 223, 129, 0.14)');
      bgGlow.addColorStop(0.6, 'rgba(56, 189, 248, 0.04)');
      bgGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      // 2. Stars
      stars.forEach((s) => {
        s.alpha += s.twinkle;
        const currentAlpha = 0.2 + Math.abs(Math.sin(s.alpha)) * 0.6;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.fill();
      });

      // 3. Central Compact ZURVIX Nexus
      const coreRadius = 22 + Math.sin(Date.now() * 0.001) * 0.8;

      // Rotating Cybernetic Ring
      const ringAngle = Date.now() * 0.0003;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ringAngle);
      ctx.beginPath();
      ctx.arc(0, 0, coreRadius + 6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 223, 129, 0.45)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([8, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Core Disc
      const coreGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, coreRadius);
      coreGrad.addColorStop(0, '#101B15');
      coreGrad.addColorStop(1, '#030604');
      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
      ctx.strokeStyle = '#00DF81';
      ctx.lineWidth = 1.6;
      ctx.stroke();

      // ZURVIX Logo
      if (logoImgRef.current && logoReady) {
        const iconSize = coreRadius * 1.35;
        ctx.drawImage(
          logoImgRef.current,
          cx - iconSize / 2,
          cy - iconSize / 2,
          iconSize,
          iconSize
        );
      }

      // 4. Planets & Orbit Tracks
      planetsRef.current.forEach((planet, idx) => {
        planet.angle += planet.speed;

        const effectiveOrbitA = planet.orbitA * scale;
        const effectiveOrbitB = planet.orbitB * scale;

        const unrotatedX = Math.cos(planet.angle) * effectiveOrbitA;
        const unrotatedY = Math.sin(planet.angle) * effectiveOrbitB;

        const posX = cx + unrotatedX * Math.cos(orbitTilt) - unrotatedY * Math.sin(orbitTilt);
        const posY = cy + unrotatedX * Math.sin(orbitTilt) + unrotatedY * Math.cos(orbitTilt);

        const isHovered = hoveredPlanet?.id === planet.id;
        const isMatched =
          filterCategory === 'all' ||
          (filterCategory === 'web' && planet.category === 'web') ||
          (filterCategory === 'mobile' && planet.category === 'mobile') ||
          (filterCategory === 'ai' && planet.category === 'ai');

        // Orbit ellipse line
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(orbitTilt);
        ctx.beginPath();
        ctx.ellipse(0, 0, effectiveOrbitA, effectiveOrbitB, 0, 0, Math.PI * 2);
        ctx.restore();

        if (isHovered) {
          ctx.strokeStyle = '#00DF81';
          ctx.lineWidth = 1.6;
        } else if (isMatched) {
          ctx.strokeStyle = 'rgba(0, 223, 129, 0.25)';
          ctx.lineWidth = 0.9;
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.lineWidth = 0.5;
        }
        ctx.stroke();

        // Laser Tractor Line
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(posX, posY);
        ctx.strokeStyle = isHovered ? 'rgba(0, 223, 129, 0.7)' : isMatched ? 'rgba(0, 223, 129, 0.15)' : 'rgba(255, 255, 255, 0.03)';
        ctx.lineWidth = 0.6;
        ctx.stroke();

        // Planet Body
        const pRadius = isHovered ? planet.radius * 1.2 : planet.radius;

        const planetGlow = ctx.createRadialGradient(posX, posY, pRadius * 0.4, posX, posY, pRadius * 2);
        planetGlow.addColorStop(0, planet.glowColor);
        planetGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = planetGlow;
        ctx.beginPath();
        ctx.arc(posX, posY, pRadius * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(posX, posY, pRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#080C11';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(posX, posY, pRadius, 0, Math.PI * 2);
        ctx.strokeStyle = isHovered ? '#00DF81' : 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        drawCompactIcon(ctx, planet.id, posX, posY, pRadius);

        // Planet Rings
        if (planet.hasRing) {
          ctx.save();
          ctx.translate(posX, posY);
          ctx.rotate(0.35);
          ctx.beginPath();
          ctx.ellipse(0, 0, pRadius * 1.9, pRadius * 0.6, 0, 0, Math.PI * 2);
          ctx.strokeStyle = isHovered ? '#00DF81' : 'rgba(0, 223, 129, 0.4)';
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
        }

        // Micro Label Badge
        const label = planet.name;
        ctx.font = '600 9px var(--font-sans), sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const textWidth = ctx.measureText(label).width;
        const pillWidth = textWidth + 10;
        const pillHeight = 15;
        const pillY = posY + pRadius + 10;

        ctx.fillStyle = isHovered ? '#00DF81' : 'rgba(8, 12, 17, 0.9)';
        ctx.strokeStyle = isHovered ? '#00DF81' : 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.roundRect(posX - pillWidth / 2, pillY - pillHeight / 2, pillWidth, pillHeight, 999);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isHovered ? '#05080A' : '#FFFFFF';
        ctx.fillText(label, posX, pillY);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setupSize);
      cancelAnimationFrame(animId);
    };
  }, [filterCategory, hoveredPlanet, logoReady]);

  // Touch & Pointer Hit Testing
  const handleTouch = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const cx = rect.width * 0.5;
    const cy = 175 * 0.5;
    const scale = Math.min(rect.width / 375, 1.05);
    const orbitTilt = -0.15;

    let found: TechPlanet | null = null;
    for (const p of planetsRef.current) {
      const effectiveOrbitA = p.orbitA * scale;
      const effectiveOrbitB = p.orbitB * scale;
      const unrotatedX = Math.cos(p.angle) * effectiveOrbitA;
      const unrotatedY = Math.sin(p.angle) * effectiveOrbitB;
      const posX = cx + unrotatedX * Math.cos(orbitTilt) - unrotatedY * Math.sin(orbitTilt);
      const posY = cy + unrotatedX * Math.sin(orbitTilt) + unrotatedY * Math.cos(orbitTilt);

      const dist = Math.hypot(x - posX, y - posY);
      if (dist < p.radius + 16) {
        found = p;
        break;
      }
    }

    setHoveredPlanet(found);
    if (found && onSelectPlanet) {
      onSelectPlanet(found);
    }
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={(e) => e.touches.length > 0 && handleTouch(e.touches[0].clientX, e.touches[0].clientY)}
      onClick={(e) => handleTouch(e.clientX, e.clientY)}
      className="relative w-full h-[175px] rounded-2xl border border-white/[0.08] bg-[#06090D]/75 backdrop-blur-xl overflow-hidden cursor-pointer shadow-lg shadow-black/40"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      
      {/* Top Left Mini HUD Title */}
      <div className="absolute top-2.5 left-3 flex items-center space-x-1.5 pointer-events-none">
        <span className="h-1.5 w-1.5 rounded-full bg-[#00DF81] animate-pulse" />
        <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400">
          ZURVIX TECH ARCHITECTURE
        </span>
      </div>

      {/* Top Right Tap Hint */}
      <div className="absolute top-2.5 right-3 text-[9px] font-mono text-emerald-400/80 pointer-events-none">
        Tap planet to inspect ✦
      </div>
    </div>
  );
}
