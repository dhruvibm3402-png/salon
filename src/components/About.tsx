'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const ABOUT_IMG = 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&q=85&auto=format&fit=crop';
const ACCENT_IMG = 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&q=80&auto=format&fit=crop';

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: 'K+', label: 'Happy Clients' },
  { value: 30, suffix: '+', label: 'Professional Stylists' },
  { value: 100, suffix: '+', label: 'Beauty Awards' },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(end / 50);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref} className="font-playfair text-4xl font-bold" style={{ color: '#D4AF37' }}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-5 lg:px-10 overflow-hidden" style={{ background: '#FAF8F5' }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: Images */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main image */}
          <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] max-w-[420px] mx-auto lg:mx-0"
            style={{ boxShadow: '0 30px 70px rgba(0,0,0,0.15)' }}>
            <Image
              src={ABOUT_IMG}
              alt="Luxury salon interior"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              quality={85}
              className="object-cover"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          {/* Accent small image */}
          <div className="absolute -bottom-8 right-0 lg:-right-12 w-32 h-36 sm:w-40 sm:h-44 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
            <Image
              src={ACCENT_IMG}
              alt="Beauty products"
              fill
              sizes="160px"
              quality={75}
              className="object-cover"
            />
          </div>

          {/* Floating experience badge */}
          <motion.div
            className="absolute top-8 right-0 lg:-right-10 glass rounded-2xl px-4 py-3 text-center shadow-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="font-playfair text-3xl font-bold" style={{ color: '#D4AF37' }}>15+</p>
            <p className="text-xs font-poppins text-[#2C2C2C]/70 mt-0.5">Years of<br />Excellence</p>
          </motion.div>

          {/* Background decorative circle */}
          <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="text-xs font-poppins tracking-[0.35em] uppercase mb-3" style={{ color: '#D4AF37' }}>
              Our Story
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-4">
              Where Beauty Meets<br />
              <span className="italic text-gradient-gold">Artistry</span>
            </h2>
            <div className="w-12 h-px mb-6" style={{ background: 'linear-gradient(90deg, #D4AF37, #E7B8A4)' }} />
          </div>

          <p className="text-[#2C2C2C]/65 font-poppins leading-relaxed">
            Founded in 2010, our Salon was born from a passion to bring world-class beauty experiences to discerning clientele. We believe every visit should feel like a retreat — a moment carved just for you.
          </p>
          <p className="text-[#2C2C2C]/65 font-poppins leading-relaxed">
            Our team of award-winning stylists and therapists combine the latest techniques with time-honoured traditions, using only the finest luxury products to deliver results that are nothing short of transformative.
          </p>

          {/* Signature features */}
          <div className="flex flex-col gap-3 mt-2">
            {[
              'Certified & award-winning professionals',
              'Premium luxury product lines',
              'Personalised beauty consultation',
              'Hygiene-first, client-safe environment',
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #B8962E)' }}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm font-poppins text-[#2C2C2C]/75">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 mt-4 pt-6 border-t border-[#D4AF37]/15">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="p-4 rounded-2xl text-center"
                style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.12)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Counter end={s.value} suffix={s.suffix} />
                <p className="text-xs font-poppins text-[#2C2C2C]/55 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
