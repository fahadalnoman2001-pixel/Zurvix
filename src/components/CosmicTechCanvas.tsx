'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface TechPlanet {
  id: string;
  name: string;
  category: string;
  metric: string;
  radius: number; // planet size
  orbitA: number; // semi-major axis
  orbitB: number; // semi-minor axis
  speed: number;
  angle: number;
  color: string;
  glowColor: string;
  hasRing?: boolean;
  hasMoon?: boolean;
  description: string;
}

interface CosmicTechCanvasProps {
  onSelectPlanet?: (planet: TechPlanet) => void;
  filterCategory?: 'all' | 'web' | 'mobile' | 'ai';
}

export default function CosmicTechCanvas({ onSelectPlanet, filterCategory = 'all' }: CosmicTechCanvasProps) {
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

  // Planetary Tech System - Silky-smooth slow cinematic orbital motion
  const planetsRef = useRef<TechPlanet[]>([
    {
      id: 'nextjs',
      name: 'Next.js 16',
      category: 'web',
      metric: 'App Router & Sub-100ms SSR',
      radius: 25,
      orbitA: 175,
      orbitB: 90,
      speed: 0.0018,
      angle: 0.4,
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
      radius: 23,
      orbitA: 235,
      orbitB: 115,
      speed: 0.0014,
      angle: 2.2,
      color: '#38BDF8',
      glowColor: 'rgba(56, 189, 248, 0.8)',
      description: 'Declarative component architecture and asynchronous rendering.'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'web',
      metric: '100% Strict Type Safety',
      radius: 22,
      orbitA: 295,
      orbitB: 142,
      speed: 0.0011,
      angle: 4.1,
      color: '#3178C6',
      glowColor: 'rgba(49, 120, 198, 0.8)',
      description: 'Strict type validation for bulletproof full-stack codebases.'
    },
    {
      id: 'flutter',
      name: 'Flutter Native',
      category: 'mobile',
      metric: '120 FPS iOS & Android',
      radius: 24,
      orbitA: 355,
      orbitB: 168,
      speed: 0.00085,
      angle: 1.1,
      color: '#02569B',
      glowColor: 'rgba(2, 86, 155, 0.8)',
      hasMoon: true,
      description: 'Cross-platform native mobile engine with hardware GPU acceleration.'
    },
    {
      id: 'laravel',
      name: 'Laravel 11',
      category: 'web',
      metric: 'REST & GraphQL APIs',
      radius: 23,
      orbitA: 415,
      orbitB: 195,
      speed: 0.0007,
      angle: 3.4,
      color: '#FF2D20',
      glowColor: 'rgba(255, 45, 32, 0.8)',
      description: 'Enterprise backend framework powering robust database logic.'
    },
    {
      id: 'openai',
      name: 'OpenAI / GEO',
      category: 'ai',
      metric: 'AI Search & LLM Engine',
      radius: 24,
      orbitA: 475,
      orbitB: 222,
      speed: 0.00055,
      angle: 5.4,
      color: '#10A37F',
      glowColor: 'rgba(16, 163, 127, 0.8)',
      hasRing: true,
      description: 'Generative Engine Optimization and AI citation discovery architecture.'
    },
    {
      id: 'threejs',
      name: 'Three.js Spatial',
      category: 'web',
      metric: 'Spatial 3D & WebGL',
      radius: 22,
      orbitA: 535,
      orbitB: 248,
      speed: 0.00045,
      angle: 0.8,
      color: '#FFFFFF',
      glowColor: 'rgba(0, 223, 129, 0.8)',
      description: 'Interactive 3D graphics, shaders, and immersive spatial web.'
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      category: 'web',
      metric: 'Edge CDN & Auto-Scale',
      radius: 22,
      orbitA: 595,
      orbitB: 275,
      speed: 0.00035,
      angle: 2.7,
      color: '#FF9900',
      glowColor: 'rgba(255, 153, 0, 0.8)',
      description: 'Global edge distribution, SSL security, and CI/CD pipelines.'
    }
  ]);

  const mousePos = useRef({ x: 0, y: 0, active: false });
  const smoothMouse = useRef({ x: 0, y: 0 });

  // Vector Tech Icon Renderers (Pixel-Perfect Crisp Canvas Graphics)
  const drawTechIcon = (ctx: CanvasRenderingContext2D, id: string, x: number, y: number, r: number) => {
    ctx.save();
    ctx.translate(x, y);

    const s = r * 0.55; // Icon scale

    if (id === 'nextjs') {
      // Next.js Black Disc + White 'N'
      ctx.beginPath();
      ctx.arc(0, 0, s * 1.3, 0, Math.PI * 2);
      ctx.fillStyle = '#000000';
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      // Left vertical bar
      ctx.fillRect(-s * 0.7, -s * 0.7, s * 0.35, s * 1.4);
      // Diagonal slash
      ctx.beginPath();
      ctx.moveTo(-s * 0.7, -s * 0.7);
      ctx.lineTo(s * 0.5, s * 0.7);
      ctx.lineTo(s * 0.8, s * 0.7);
      ctx.lineTo(-s * 0.4, -s * 0.7);
      ctx.closePath();
      ctx.fill();
      // Right vertical bar
      ctx.fillRect(s * 0.45, -s * 0.7, s * 0.35, s * 0.85);
    } else if (id === 'react') {
      // React Cyan Atom Symbol
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 1.8;
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
    } else if (id === 'typescript') {
      // TypeScript Blue Box with White TS
      ctx.fillStyle = '#3178C6';
      ctx.beginPath();
      ctx.roundRect(-s * 1.1, -s * 1.1, s * 2.2, s * 2.2, s * 0.3);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold ${Math.round(s * 1.1)}px var(--font-sans), sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('TS', 0, 1);
    } else if (id === 'flutter') {
      // Flutter Geometric Wing Mark
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
    } else if (id === 'laravel') {
      // Laravel Red Cube
      ctx.fillStyle = '#FF2D20';
      ctx.font = `bold ${Math.round(s * 1.4)}px var(--font-mono), monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('L', 0, 0);
    } else if (id === 'openai') {
      // OpenAI / AI Star Sparkle
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
    } else if (id === 'threejs') {
      // Three.js Triangle Wireframe
      ctx.strokeStyle = '#00DF81';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, -s * 1.1);
      ctx.lineTo(s * 1.1, s * 0.8);
      ctx.lineTo(-s * 1.1, s * 0.8);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, s * 0.25, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
    } else if (id === 'cloud') {
      // Cloud / AWS Symbol
      ctx.fillStyle = '#FF9900';
      ctx.beginPath();
      ctx.arc(-s * 0.35, 0, s * 0.45, 0, Math.PI * 2);
      ctx.arc(s * 0.35, 0, s * 0.45, 0, Math.PI * 2);
      ctx.arc(0, -s * 0.35, s * 0.55, 0, Math.PI * 2);
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

    let displayWidth = canvas.parentElement?.clientWidth || 1000;
    let displayHeight = canvas.parentElement?.clientHeight || 650;

    const setupCanvasSize = () => {
      if (!canvas.parentElement) return;
      displayWidth = canvas.parentElement.clientWidth;
      displayHeight = canvas.parentElement.clientHeight;
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    setupCanvasSize();
    window.addEventListener('resize', setupCanvasSize);

    // Starfield Particles - Clean, calm, elegant count with slow breathing shimmer
    const starCount = 95;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * displayWidth,
      y: Math.random() * displayHeight,
      size: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.004 + 0.0018,
      color: Math.random() > 0.8 ? '#00DF81' : Math.random() > 0.6 ? '#38BDF8' : '#FFFFFF'
    }));

    // Meteors - Gentle, rare, slow-gliding celestial accents
    const meteors = Array.from({ length: 2 }, () => ({
      x: Math.random() * displayWidth,
      y: Math.random() * (displayHeight * 0.4),
      length: Math.random() * 80 + 40,
      speed: Math.random() * 1.2 + 0.8,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.15,
      alpha: 0,
      active: false
    }));

    let nextMeteorSpawn = Date.now() + 4000;
    const orbitTilt = -0.22;

    const render = () => {
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      const isMobile = displayWidth < 640;
      const isTablet = displayWidth >= 640 && displayWidth < 1024;
      const orbitScale = isMobile ? Math.min(displayWidth / 580, 0.62) : isTablet ? 0.8 : 1.0;

      const cx = displayWidth > 1024 ? displayWidth * 0.60 : displayWidth * 0.5;
      const cy = isMobile ? Math.min(displayHeight * 0.42, 270) : displayHeight * 0.5;

      // Smooth mouse / touch interpolation (Fluid Parallax Easing)
      if (mousePos.current.active) {
        smoothMouse.current.x += (mousePos.current.x - displayWidth / 2 - smoothMouse.current.x) * 0.04;
        smoothMouse.current.y += (mousePos.current.y - displayHeight / 2 - smoothMouse.current.y) * 0.04;
      } else {
        smoothMouse.current.x += (0 - smoothMouse.current.x) * 0.03;
        smoothMouse.current.y += (0 - smoothMouse.current.y) * 0.03;
      }

      // 1. Cosmic Atmospheric Glow
      const glowRadius = isMobile ? 320 : 520;
      const nebula1 = ctx.createRadialGradient(cx + (isMobile ? 30 : 100), cy - (isMobile ? 30 : 80), 20, cx + (isMobile ? 30 : 100), cy - (isMobile ? 30 : 80), glowRadius);
      nebula1.addColorStop(0, 'rgba(0, 223, 129, 0.12)');
      nebula1.addColorStop(0.5, 'rgba(13, 148, 136, 0.05)');
      nebula1.addColorStop(1, 'transparent');
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      const nebula2 = ctx.createRadialGradient(cx - (isMobile ? 50 : 180), cy + (isMobile ? 40 : 100), 20, cx - (isMobile ? 50 : 180), cy + (isMobile ? 40 : 100), glowRadius * 0.85);
      nebula2.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
      nebula2.addColorStop(0.6, 'rgba(139, 92, 246, 0.04)');
      nebula2.addColorStop(1, 'transparent');
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      // 2. Stars (Slow, gentle shimmer with fluid parallax)
      stars.forEach((s) => {
        s.alpha += s.twinkleSpeed;
        const currentAlpha = 0.25 + Math.abs(Math.sin(s.alpha)) * 0.65;

        const px = s.x + smoothMouse.current.x * 0.012;
        const py = s.y + smoothMouse.current.y * 0.012;

        ctx.beginPath();
        ctx.arc(px, py, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color === '#FFFFFF' ? `rgba(255, 255, 255, ${currentAlpha * 0.75})` : s.color;
        if (s.size > 1.2 && !isMobile) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = s.color;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 3. Meteors (Rare, slow, and graceful)
      const currentTime = Date.now();
      if (currentTime > nextMeteorSpawn) {
        const availableMeteor = meteors.find(m => !m.active);
        if (availableMeteor) {
          availableMeteor.x = Math.random() * displayWidth * 0.85;
          availableMeteor.y = Math.random() * (displayHeight * 0.35);
          availableMeteor.alpha = 0.85;
          availableMeteor.active = true;
          nextMeteorSpawn = currentTime + Math.random() * 8000 + 6000;
        }
      }

      meteors.forEach((m) => {
        if (!m.active) return;
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= 0.0035;

        if (m.alpha <= 0 || m.x > displayWidth || m.y > displayHeight) {
          m.active = false;
          return;
        }

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const meteorGrad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        meteorGrad.addColorStop(0, 'transparent');
        meteorGrad.addColorStop(0.7, `rgba(0, 223, 129, ${m.alpha * 0.3})`);
        meteorGrad.addColorStop(1, `rgba(255, 255, 255, ${m.alpha * 0.9})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = meteorGrad;
        ctx.lineWidth = 1.5;
        if (!isMobile) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#00DF81';
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // 4. Desktop-Only Planetary System & Solar Nexus (Keeps mobile hero completely clean and minimal)
      const isDesktop = displayWidth >= 1024;

      if (isDesktop) {
        // Central Grand ZURVIX Nexus (High-End Frosted Glass Plate + Glowing Green Logo)
        const baseCoreRadius = 58;
        const corePulse = Math.sin(Date.now() * 0.0008) * 1.8;
        const coreRadius = baseCoreRadius + corePulse;

        // Solar Atmospheric Flares
        const coreBurst = ctx.createRadialGradient(cx, cy, coreRadius * 0.2, cx, cy, coreRadius * 3.6);
        coreBurst.addColorStop(0, 'rgba(0, 223, 129, 0.4)');
        coreBurst.addColorStop(0.3, 'rgba(0, 223, 129, 0.12)');
        coreBurst.addColorStop(0.7, 'rgba(5, 150, 105, 0.04)');
        coreBurst.addColorStop(1, 'transparent');
        ctx.fillStyle = coreBurst;
        ctx.beginPath();
        ctx.arc(cx, cy, coreRadius * 3.6, 0, Math.PI * 2);
        ctx.fill();

        // Rotating Cybernetic Ring
        const ringAngle = Date.now() * 0.00025;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(ringAngle);
        ctx.beginPath();
        ctx.arc(0, 0, coreRadius + 12, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 223, 129, 0.45)';
        ctx.lineWidth = 1.8;
        ctx.setLineDash([14, 10, 5, 10]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();

        // Frosted Glass Core Disc
        const coreDisc = ctx.createRadialGradient(cx - 10, cy - 10, 4, cx, cy, coreRadius);
        coreDisc.addColorStop(0, '#101B15');
        coreDisc.addColorStop(0.6, '#060B08');
        coreDisc.addColorStop(1, '#020503');

        ctx.beginPath();
        ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
        ctx.fillStyle = coreDisc;
        ctx.shadowBlur = 28;
        ctx.shadowColor = '#00DF81';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Outer Glowing Ring Border
        ctx.beginPath();
        ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
        ctx.strokeStyle = '#00DF81';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Render ZURVIX Logo Icon (zurvix-icon.png)
        if (logoImgRef.current && logoReady) {
          const iconSize = coreRadius * 1.35;
          ctx.save();
          ctx.shadowBlur = 18;
          ctx.shadowColor = '#00DF81';
          ctx.drawImage(
            logoImgRef.current,
            cx - iconSize / 2,
            cy - iconSize / 2,
            iconSize,
            iconSize
          );
          ctx.shadowBlur = 0;
          ctx.restore();
        }

        // 5. Draw Orbit Tracks & Tech Planets
        planetsRef.current.forEach((planet, idx) => {
          planet.angle += planet.speed;

          const effectiveOrbitA = planet.orbitA * orbitScale;
          const effectiveOrbitB = planet.orbitB * orbitScale;

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

          // Draw Elliptical Orbit Track
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(orbitTilt);
          ctx.beginPath();
          ctx.ellipse(0, 0, effectiveOrbitA, effectiveOrbitB, 0, 0, Math.PI * 2);
          ctx.restore();

          if (isHovered) {
            ctx.strokeStyle = '#00DF81';
            ctx.lineWidth = 2.2;
          } else if (isMatched) {
            ctx.strokeStyle = idx % 2 === 0 ? 'rgba(0, 223, 129, 0.28)' : 'rgba(255, 255, 255, 0.1)';
            ctx.lineWidth = 1;
          } else {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
            ctx.lineWidth = 0.6;
          }
          ctx.stroke();

          // Laser Tractor Light Beam from ZURVIX Core to Planet
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(posX, posY);
          if (isHovered) {
            ctx.strokeStyle = 'rgba(0, 223, 129, 0.85)';
            ctx.lineWidth = 2;
          } else if (isMatched) {
            ctx.strokeStyle = 'rgba(0, 223, 129, 0.16)';
            ctx.lineWidth = 0.8;
          } else {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 0.5;
          }
          ctx.stroke();

          // Laser Data Pulse
          const pulseCycle = (Date.now() * 0.0003 + idx * 0.125) % 1;
          const pulseAlpha = Math.sin(pulseCycle * Math.PI);
          if (pulseAlpha > 0.05 && (isMatched || isHovered)) {
            const pulseX = cx + (posX - cx) * pulseCycle;
            const pulseY = cy + (posY - cy) * pulseCycle;
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 2.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${pulseAlpha * 0.9})`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#00DF81';
            ctx.fill();
            ctx.shadowBlur = 0;
          }

          // 6. Draw Planet Body & Vector Tech Icon
          const basePRadius = planet.radius;
          const pRadius = isHovered ? basePRadius * 1.25 : basePRadius;

          // Atmosphere Glow Aura
          const planetGlow = ctx.createRadialGradient(posX, posY, pRadius * 0.4, posX, posY, pRadius * 2.4);
          planetGlow.addColorStop(0, planet.glowColor);
          planetGlow.addColorStop(1, 'transparent');
          ctx.fillStyle = planetGlow;
          ctx.beginPath();
          ctx.arc(posX, posY, pRadius * 2.4, 0, Math.PI * 2);
          ctx.fill();

          // Planet Sphere Dark Glass Body
          ctx.beginPath();
          ctx.arc(posX, posY, pRadius, 0, Math.PI * 2);
          ctx.fillStyle = '#080C11';
          ctx.shadowBlur = isHovered ? 24 : 10;
          ctx.shadowColor = planet.glowColor;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Planet Rim Outline
          ctx.beginPath();
          ctx.arc(posX, posY, pRadius, 0, Math.PI * 2);
          ctx.strokeStyle = isHovered ? '#00DF81' : 'rgba(255, 255, 255, 0.3)';
          ctx.lineWidth = isHovered ? 2 : 1.4;
          ctx.stroke();

          // Draw Crisp Official Vector Icon Inside Planet Sphere
          drawTechIcon(ctx, planet.id, posX, posY, pRadius);

          // Planet Rings (if enabled)
          if (planet.hasRing) {
            ctx.save();
            ctx.translate(posX, posY);
            ctx.rotate(0.35);
            ctx.beginPath();
            ctx.ellipse(0, 0, pRadius * 2.1, pRadius * 0.65, 0, 0, Math.PI * 2);
            ctx.strokeStyle = isHovered ? '#00DF81' : 'rgba(0, 223, 129, 0.4)';
            ctx.lineWidth = 1.4;
            ctx.stroke();
            ctx.restore();
          }

          // Orbiting Satellite Moon
          if (planet.hasMoon) {
            const moonAngle = Date.now() * 0.0008;
            const moonX = posX + Math.cos(moonAngle) * (pRadius * 1.8);
            const moonY = posY + Math.sin(moonAngle) * (pRadius * 1.2);
            ctx.beginPath();
            ctx.arc(moonX, moonY, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#38BDF8';
            ctx.fill();
          }

          // Floating HUD Pill Badge (Desktop Crisp)
          const label = planet.name;
          const fontSize = 12;
          ctx.font = `600 ${fontSize}px var(--font-sans), sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          const textWidth = ctx.measureText(label).width;
          const pillWidth = textWidth + 18;
          const pillHeight = 22;
          const pillY = posY + pRadius + 16;

          // Badge Background
          ctx.fillStyle = isHovered ? '#00DF81' : 'rgba(8, 12, 17, 0.9)';
          ctx.strokeStyle = isHovered ? '#00DF81' : 'rgba(255, 255, 255, 0.22)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(posX - pillWidth / 2, pillY - pillHeight / 2, pillWidth, pillHeight, 999);
          ctx.fill();
          ctx.stroke();

          // Badge Text
          ctx.fillStyle = isHovered ? '#05080A' : '#FFFFFF';
          ctx.fillText(label, posX, pillY);

          // Extended Tooltip on hover
          if (isHovered) {
            const metricText = planet.metric;
            ctx.font = '11px var(--font-mono), monospace';
            ctx.fillStyle = '#00DF81';
            ctx.fillText(metricText, posX, pillY + 20);
          }
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setupCanvasSize);
      cancelAnimationFrame(animId);
    };
  }, [filterCategory, hoveredPlanet, logoReady]);

  // Pointer & Touch Interactivity (Desktop-centric, fast return on mobile)
  const updatePointer = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width < 1024) {
      // Keep mobile serene and clean without planet hit-testing
      return;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    mousePos.current = { x, y, active: true };

    let foundPlanet: TechPlanet | null = null;
    const orbitScale = 1.0;
    const cx = rect.width * 0.60;
    const cy = rect.height * 0.5;
    const orbitTilt = -0.22;

    for (const p of planetsRef.current) {
      const effectiveOrbitA = p.orbitA * orbitScale;
      const effectiveOrbitB = p.orbitB * orbitScale;
      const unrotatedX = Math.cos(p.angle) * effectiveOrbitA;
      const unrotatedY = Math.sin(p.angle) * effectiveOrbitB;
      const posX = cx + unrotatedX * Math.cos(orbitTilt) - unrotatedY * Math.sin(orbitTilt);
      const posY = cy + unrotatedX * Math.sin(orbitTilt) + unrotatedY * Math.cos(orbitTilt);

      const basePRadius = p.radius;
      const dist = Math.hypot(x - posX, y - posY);
      if (dist < basePRadius + 24) {
        foundPlanet = p;
        break;
      }
    }

    setHoveredPlanet(foundPlanet);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePointer(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updatePointer(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updatePointer(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleMouseLeave = () => {
    mousePos.current.active = false;
    setHoveredPlanet(null);
  };

  const handleClick = () => {
    if (hoveredPlanet && onSelectPlanet) {
      onSelectPlanet(hoveredPlanet);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
      className="relative w-full h-full min-h-[520px] sm:min-h-[600px] lg:min-h-[720px] overflow-hidden select-none cursor-pointer"
    >
      {/* 3D Cosmic Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Floating Space HUD Pill - Desktop Only */}
      <div className="hidden lg:flex absolute top-4 right-4 z-20 items-center space-x-2 rounded-full border border-white/15 bg-black/75 px-4 py-1.5 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#00DF81] animate-ping" />
        <span className="text-[10px] font-mono tracking-wider text-gray-200 uppercase">
          ZURVIX SOLAR NEXUS
        </span>
      </div>

      {/* Hovered/Touched Planet Inspector Card - Desktop Only */}
      {hoveredPlanet && (
        <div className="hidden lg:block absolute bottom-6 right-6 z-30 max-w-sm rounded-2xl border border-[#00DF81] bg-[#080C11]/95 backdrop-blur-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center space-x-2.5 mb-1.5">
            <span className="h-3.5 w-3.5 rounded-full shadow-md" style={{ backgroundColor: hoveredPlanet.color }} />
            <h4 className="text-sm font-bold text-white">{hoveredPlanet.name}</h4>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#00DF81]/15 text-[#00DF81] uppercase">
              {hoveredPlanet.category}
            </span>
          </div>
          <p className="text-xs text-emerald-400 font-mono font-medium">{hoveredPlanet.metric}</p>
          <p className="text-[11px] text-gray-300 mt-1 leading-relaxed">{hoveredPlanet.description}</p>
          <div className="mt-2.5 pt-2 border-t border-white/10 text-[10px] font-mono text-gray-400 flex items-center justify-between">
            <span>Orbit: {hoveredPlanet.orbitA}px</span>
            <span className="text-[#00DF81] font-bold">Tap to discuss →</span>
          </div>
        </div>
      )}
    </div>
  );
}
