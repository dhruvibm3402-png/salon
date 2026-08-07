'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';

const HERO_BG = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1800&q=80&auto=format&fit=crop';
const MODEL_IMG = 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=900&q=85&auto=format&fit=crop';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opaque = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const springY = useSpring(yBg, { stiffness: 60, damping: 20 });

  // GSAP text split on mount
  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const words = el.querySelectorAll('.word');
    gsap.from(words, {
      y: 80,
      opacity: 0,
      skewY: 4,
      stagger: 0.12,
      duration: 1,
      ease: 'power4.out',
      delay: 0.6,
    });
  }, []);

  const scrollDown = () => {
    document.getElementById('brands')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: springY }}
      >
        <Image
          src={HERO_BG}
          alt="Luxury salon interior"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(105deg, rgba(26,26,26,0.82) 0%, rgba(26,26,26,0.55) 50%, rgba(26,26,26,0.25) 100%)',
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 80% at 20% 50%, rgba(212,175,55,0.08) 0%, transparent 60%)',
        }} />
      </motion.div>

      {/* Floating decorative shapes */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {/* Top-right orb */}
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Bottom-left orb */}
        <motion.div
          className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #E7B8A4 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Decorative diamond shapes */}
        {[
          { top: '18%', left: '8%', size: 48, delay: 0 },
          { top: '65%', left: '14%', size: 28, delay: 1.2 },
          { top: '30%', right: '12%', size: 36, delay: 0.6 },
        ].map((s, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{ top: s.top, left: (s as any).left, right: (s as any).right }}
            animate={{ y: [0, -12, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
          >
            <svg width={s.size} height={s.size} viewBox="0 0 40 40" fill="none">
              <path d="M20 2L38 20L20 38L2 20Z" stroke="#D4AF37" strokeWidth="1" fill="rgba(212,175,55,0.2)" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-24 pb-16"
        style={{ opacity: opaque, y: yText }}
      >
        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 self-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="w-8 h-px" style={{ background: '#D4AF37' }} />
            <span className="text-xs font-poppins tracking-[0.35em] uppercase"
              style={{ color: '#D4AF37' }}>
              Premium Beauty &amp; Wellness
            </span>
          </motion.div>

          {/* Headline with word split */}
          <h1
            ref={headlineRef}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] text-white overflow-hidden"
          >
            {['Luxury', 'Beauty', 'Salon', '& Spa'].map((word, i) => (
              <span key={i} className="overflow-hidden block">
                <span className="word inline-block">
                  {i === 3 ? (
                    <>
                      <span style={{ color: '#D4AF37' }}>&amp; </span>
                      <span>Spa</span>
                    </>
                  ) : i === 0 ? (
                    <span className="italic">{word}</span>
                  ) : word}
                </span>
              </span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            className="text-white/70 font-poppins text-sm lg:text-lg leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            Step into a world of pure indulgence. Our expert stylists and therapists
            transform your beauty with premium treatments crafted exclusively for you.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            className="flex gap-6 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {[
              { value: '15+', label: 'Years' },
              { value: '20K+', label: 'Clients' },
              { value: '30+', label: 'Experts' },
            ].map(s => (
              <div key={s.label} className="flex flex-col">
                <span className="font-playfair text-2xl font-bold" style={{ color: '#D4AF37' }}>{s.value}</span>
                <span className="text-white/50 text-xs font-poppins tracking-widest uppercase">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.6 }}
          >
            <motion.button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-magnetic px-6 py-3.5 rounded-full text-white font-poppins font-semibold text-sm tracking-wide"
              style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8962E 100%)' }}
              whileHover={{ scale: 1.04, boxShadow: '0 12px 32px rgba(212,175,55,0.45)' }}
              whileTap={{ scale: 0.97 }}
            >
              Book Appointment
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-magnetic px-6 py-3.5 rounded-full text-white font-poppins font-medium text-sm tracking-wide border border-white/25 hover:border-white/50 transition-colors backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.08)' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Services
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="relative block lg:mt-0"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 rounded-3xl blur-3xl opacity-30 scale-95"
            style={{ background: 'radial-gradient(circle, #D4AF37, #E7B8A4)' }} />

          {/* Model image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-sm mx-auto"
            style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.4)' }}>
            <Image
              src={MODEL_IMG}
              alt="Professional beauty model"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 420px"
              quality={90}
              className="object-cover"
            />
            {/* Gradient bottom overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>


        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        aria-label="Scroll down"
      >
        <span className="text-white/40 text-[10px] tracking-[0.3em] font-poppins uppercase">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center pt-1.5"
        >
          <motion.div
            className="w-1 h-1.5 rounded-full bg-[#D4AF37]"
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </motion.div>
      </motion.button>
    </section>
  );
}
