'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export default function Motion3DElement() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [shapeMode, setShapeMode] = useState<'icosahedron' | 'torus' | 'cube'>('icosahedron');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 460);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 460);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // 3D Geometry Vertices Generators
    const phi = (1 + Math.sqrt(5)) / 2;
    
    // Icosahedron definition
    const icosahedronVertices: Point3D[] = [
      { x: -1, y: phi, z: 0 },
      { x: 1, y: phi, z: 0 },
      { x: -1, y: -phi, z: 0 },
      { x: 1, y: -phi, z: 0 },
      { x: 0, y: -1, z: phi },
      { x: 0, y: 1, z: phi },
      { x: 0, y: -1, z: -phi },
      { x: 0, y: 1, z: -phi },
      { x: phi, y: 0, z: -1 },
      { x: phi, y: 0, z: 1 },
      { x: -phi, y: 0, z: -1 },
      { x: -phi, y: 0, z: 1 },
    ].map((p) => {
      const len = Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z);
      return { x: (p.x / len) * 115, y: (p.y / len) * 115, z: (p.z / len) * 115 };
    });

    const icosahedronEdges = [
      [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
      [1, 5], [5, 11], [11, 10], [10, 7], [7, 1],
      [3, 9], [3, 4], [3, 2], [3, 6], [3, 8],
      [9, 4], [4, 2], [2, 6], [6, 8], [8, 9],
      [4, 5], [5, 9], [9, 1], [1, 8], [8, 7],
      [7, 6], [6, 10], [10, 2], [2, 11], [11, 4]
    ];

    // Inner Dodecahedron (nested dual)
    const innerVertices: Point3D[] = icosahedronVertices.map(v => ({
      x: v.x * 0.55,
      y: v.y * 0.55,
      z: v.z * 0.55,
    }));

    // Ambient floating orbital particle ring
    const particleCount = 48;
    const orbitalParticles: Point3D[] = Array.from({ length: particleCount }, (_, i) => {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 160 + (i % 3) * 15;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * (radius * 0.45),
        z: Math.sin(angle * 2) * 45
      };
    });

    // Rotation angles
    let rotX = 0.4;
    let rotY = 0.6;
    let rotZ = 0.1;
    let targetRotX = 0.4;
    let targetRotY = 0.6;
    let speedMultiplier = 1;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow interpolation
      targetRotY += 0.008 * speedMultiplier;
      targetRotX += 0.004 * speedMultiplier;

      const mouseInfluenceX = (mousePos.y / height - 0.5) * 0.8;
      const mouseInfluenceY = (mousePos.x / width - 0.5) * 0.8;

      rotX += (targetRotX + mouseInfluenceX - rotX) * 0.05;
      rotY += (targetRotY + mouseInfluenceY - rotY) * 0.05;
      rotZ += 0.002;

      const cx = width / 2;
      const cy = height / 2;
      const fov = 380;

      // 3D rotation projection helper
      const project = (p: Point3D): { x: number; y: number; z: number; scale: number } => {
        // Rotate Y
        let x1 = p.x * Math.cos(rotY) + p.z * Math.sin(rotY);
        let y1 = p.y;
        let z1 = -p.x * Math.sin(rotY) + p.z * Math.cos(rotY);

        // Rotate X
        let x2 = x1;
        let y2 = y1 * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = y1 * Math.sin(rotX) + z1 * Math.cos(rotX);

        // Rotate Z
        let x3 = x2 * Math.cos(rotZ) - y2 * Math.sin(rotZ);
        let y3 = x2 * Math.sin(rotZ) + y2 * Math.cos(rotZ);
        let z3 = z2;

        const distance = 300;
        const scale = fov / (fov + z3 + distance);
        return {
          x: cx + x3 * scale,
          y: cy + y3 * scale,
          z: z3,
          scale
        };
      };

      // 1. Draw outer orbital particles
      orbitalParticles.forEach((p, idx) => {
        const proj = project(p);
        const alpha = Math.max(0.15, Math.min(0.85, (proj.z + 180) / 360));
        const size = Math.max(1, 2.2 * proj.scale);

        ctx.beginPath();
        ctx.arc(proj.x, proj.y, size, 0, Math.PI * 2);
        ctx.fillStyle = idx % 2 === 0 ? `rgba(0, 223, 129, ${alpha})` : `rgba(255, 255, 255, ${alpha * 0.7})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00DF81';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 2. Project icosahedron vertices
      const projectedOuter = icosahedronVertices.map(project);
      const projectedInner = innerVertices.map(project);

      // 3. Draw Outer Edges with depth glow
      icosahedronEdges.forEach(([start, end]) => {
        const p1 = projectedOuter[start];
        const p2 = projectedOuter[end];

        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.12, Math.min(0.85, (avgZ + 120) / 240));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(0, 223, 129, ${alpha * 0.75})`;
        ctx.lineWidth = Math.max(0.8, 1.6 * ((p1.scale + p2.scale) / 2));
        ctx.stroke();
      });

      // 4. Draw Inner Nested Dual Edges
      icosahedronEdges.forEach(([start, end]) => {
        const p1 = projectedInner[start];
        const p2 = projectedInner[end];

        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.08, Math.min(0.5, (avgZ + 80) / 160));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // 5. Connect Outer to Inner vertices (Ray lines)
      for (let i = 0; i < projectedOuter.length; i++) {
        const po = projectedOuter[i];
        const pi = projectedInner[i];

        ctx.beginPath();
        ctx.moveTo(po.x, po.y);
        ctx.lineTo(pi.x, pi.y);
        ctx.strokeStyle = 'rgba(0, 223, 129, 0.15)';
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // 6. Draw Glowing Vertex Nodes
      projectedOuter.forEach((p) => {
        const alpha = Math.max(0.2, Math.min(1, (p.z + 120) / 240));
        const radius = Math.max(1.8, 3.8 * p.scale);

        // Glow ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 223, 129, ${alpha * 0.25})`;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#00DF81';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos, isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 230, y: 230 });
      }}
      className="relative w-full h-[380px] sm:h-[460px] flex items-center justify-center rounded-3xl border border-white/[0.08] bg-[#070A0E]/80 backdrop-blur-2xl p-4 overflow-hidden group shadow-2xl transition-all duration-300 hover:border-[#00DF81]/30"
    >
      {/* Ambient Central Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00DF81]/15 rounded-full blur-[90px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />

      {/* Canvas for 3D Render */}
      <canvas
        ref={canvasRef}
        className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Minimal Top Telemetry Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 rounded-full border border-white/10 bg-black/50 px-3 py-1 backdrop-blur-md">
        <div className="h-1.5 w-1.5 rounded-full bg-[#00DF81] animate-ping" />
        <span className="text-[10px] font-mono font-medium tracking-wider text-gray-300 uppercase">
          ZURVIX 3D Matrix • Live 60FPS
        </span>
      </div>

      {/* Minimal Bottom Telemetry Badge */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center space-x-2 rounded-full border border-white/10 bg-black/50 px-3 py-1 backdrop-blur-md">
        <span className="text-[10px] font-mono text-[#00DF81]">
          Interactive Perspective
        </span>
      </div>

      {/* Subtle Grid Coordinates Overlay (Minimalist) */}
      <div className="absolute bottom-4 left-4 z-20 text-[10px] font-mono text-gray-500 hidden sm:block">
        POS: X-{Math.round(mousePos.x)} Y-{Math.round(mousePos.y)}
      </div>
    </div>
  );
}
