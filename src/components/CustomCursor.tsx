'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'view' | 'button'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="view"]')) {
        setCursorState('view');
      } else if (target.closest('button, a, input, select, textarea, [role="button"]')) {
        setCursorState('button');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId: number;
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animationFrameId = requestAnimationFrame(animateTrailing);
    };
    animationFrameId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary center dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            cursorState === 'button'
              ? 'w-2 h-2 bg-[#00DF81]'
              : cursorState === 'view'
              ? 'opacity-0'
              : 'w-2 h-2 bg-[#00DF81]'
          }`}
        />
      </div>

      {/* Trailing Outer Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ${
            cursorState === 'view'
              ? 'w-20 h-20 bg-[#00DF81] text-[#05080A] font-bold text-xs tracking-wider shadow-lg shadow-[#00DF81]/40'
              : cursorState === 'button'
              ? 'w-12 h-12 border-2 border-[#00DF81] bg-[#00DF81]/10 scale-110'
              : 'w-8 h-8 border border-[#00DF81]/40 bg-white/[0.02]'
          }`}
        >
          {cursorState === 'view' && <span>VIEW</span>}
        </div>
      </div>
    </>
  );
}
