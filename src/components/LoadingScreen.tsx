'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + Math.random() * 12 + 4;
      });
    }, 80);
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#1A1A1A' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Soft background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: Math.random() * 6 + 3,
                height: Math.random() * 6 + 3,
                background: 'radial-gradient(circle, #D4AF37, transparent)',
                left: `${10 + i * 11}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{ y: [-10, -40, -10], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}

          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-8 flex flex-col items-center"
          >
            {/* Diamond icon */}
            <motion.div
              className="mb-5"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <path
                  d="M26 3L49 26L26 49L3 26L26 3Z"
                  stroke="url(#gold-grad)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M26 12L40 26L26 40L12 26L26 12Z"
                  fill="url(#gold-grad)"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient id="gold-grad" x1="3" y1="3" x2="49" y2="49">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="50%" stopColor="#F0E0A0" />
                    <stop offset="100%" stopColor="#B8962E" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <motion.h1
              className="font-playfair text-4xl tracking-widest text-white"
              initial={{ letterSpacing: '0.4em', opacity: 0 }}
              animate={{ letterSpacing: '0.25em', opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              SALON
            </motion.h1>
            <span className="text-[9px] tracking-[0.45em] mt-2 block"
              style={{ color: '#D4AF37' }}
            >
              BEAUTY &amp; SPA
            </span>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-56"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="h-px bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #D4AF37, #F0E0A0, #E7B8A4)',
                  width: `${Math.min(progress, 100)}%`,
                  transition: 'width 0.1s linear',
                }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-white/30 text-xs tracking-widest">LOADING</span>
              <span className="text-xs" style={{ color: '#D4AF37' }}>
                {Math.min(Math.round(progress), 100)}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
