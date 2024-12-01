import React, { useEffect, useRef } from 'react';

export const GlowingCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    const cursorGlow = cursorGlowRef.current;

    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (cursor && cursorDot && cursorGlow) {
        cursor.style.transform = `translate(${x}px, ${y}px)`;
        cursorDot.style.transform = `translate(${x}px, ${y}px)`;
        cursorGlow.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorGlowRef}
        className="fixed w-64 h-64 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 cursor-glow"
      />
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(var(--cursor-color), 0.15) 0%, rgba(var(--cursor-color), 0) 70%)',
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-orange-400 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};