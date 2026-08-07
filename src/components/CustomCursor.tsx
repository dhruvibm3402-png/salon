'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX  = useMotionValue(-100);
  const trailY  = useMotionValue(-100);

  const springX = useSpring(trailX, { stiffness: 120, damping: 20, mass: 0.5 });
  const springY = useSpring(trailY, { stiffness: 120, damping: 20, mass: 0.5 });

  const isHoveringRef = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    document.body.classList.add('custom-cursor');

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const onEnter = () => {
      isHoveringRef.current = true;
      dotRef.current?.classList.add('scale-[2.5]', 'opacity-50');
    };

    const onLeave = () => {
      isHoveringRef.current = false;
      dotRef.current?.classList.remove('scale-[2.5]', 'opacity-50');
    };

    window.addEventListener('mousemove', onMove);

    const interactables = document.querySelectorAll('a, button, [role="button"], input, select, textarea, label');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.body.classList.remove('custom-cursor');
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [cursorX, cursorY, trailX, trailY]);

  return (
    <>
      {/* Main dot */}
      <motion.div
        ref={dotRef}
        className="pointer-events-none fixed z-[99999] top-0 left-0 w-3 h-3 rounded-full transition-transform duration-200"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'linear-gradient(135deg, #D4AF37, #E7B8A4)',
          boxShadow: '0 0 8px rgba(212,175,55,0.6)',
        }}
      />
      {/* Ring trail */}
      <motion.div
        className="pointer-events-none fixed z-[99998] top-0 left-0 w-8 h-8 rounded-full border border-[#D4AF37]/40"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
