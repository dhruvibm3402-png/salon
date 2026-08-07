'use client';

import Image from 'next/image';
import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const pairs = [
  {
    label: 'Balayage Transformation',
    before: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=700&q=80',
    after:  'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=700&q=80',
  },
  {
    label: 'HydraFacial Glow',
    before: 'https://images.unsplash.com/photo-1556227834-09f1de7a7d14?w=700&q=80',
    after:  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&q=80',
  },
  {
    label: 'Keratin Smoothing',
    before: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80',
    after:  'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=700&q=80',
  },
];

function Slider({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  const onMouseDown  = () => { dragging.current = true; };
  const onMouseMove  = (e: React.MouseEvent) => { if (dragging.current) updatePos(e.clientX); };
  const onMouseUp    = () => { dragging.current = false; };
  const onTouchMove  = (e: React.TouchEvent) => { updatePos(e.touches[0].clientX); };

  return (
    <div>
      <div
        ref={containerRef}
        className="comparison-slider relative rounded-2xl overflow-hidden aspect-[4/3] cursor-col-resize select-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        style={{ touchAction: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
      >
        {/* After (full width) */}
        <div className="absolute inset-0">
          <Image src={after} alt={`After: ${label}`} fill sizes="(max-width: 768px) 90vw, 33vw" quality={80} className="object-cover" />
        </div>

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image src={before} alt={`Before: ${label}`} fill sizes="(max-width: 768px) 90vw, 33vw" quality={80} className="object-cover" />
          {/* Before label */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-poppins font-semibold bg-black/50 text-white backdrop-blur-sm">
            Before
          </div>
        </div>

        {/* After label */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-poppins font-semibold text-white backdrop-blur-sm"
          style={{ background: 'rgba(212,175,55,0.8)' }}>
          After
        </div>

        {/* Drag handle */}
        <div
          className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
          style={{ left: `calc(${pos}% - 1px)` }}
        >
          <div className="w-0.5 h-full" style={{ background: 'rgba(212,175,55,0.8)' }} />
          <div
            className="absolute w-10 h-10 rounded-full flex items-center justify-center border-2"
            style={{
              background: '#D4AF37',
              borderColor: 'white',
              boxShadow: '0 4px 16px rgba(212,175,55,0.5)',
            }}
          >
            <span className="text-white text-sm font-bold">⇔</span>
          </div>
        </div>
      </div>
      <p className="text-center mt-3 text-sm font-poppins font-medium" style={{ color: '#2C2C2C' }}>{label}</p>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="before-after" className="py-24 px-5 lg:px-10" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-poppins tracking-[0.35em] uppercase mb-3" style={{ color: '#D4AF37' }}>
            Real Results
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Before <span className="italic text-gradient-gold">&amp;</span> After
          </h2>
          <div className="w-16 h-px mx-auto mb-4"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
          <p className="text-[#2C2C2C]/55 font-poppins max-w-md mx-auto text-sm leading-relaxed">
            Drag the slider to reveal the transformation. Real results from our real clients.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {pairs.map(p => (
            <Slider key={p.label} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
