'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Home',       href: '#hero' },
  { label: 'Services',   href: '#services' },
  { label: 'About',      href: '#about' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Pricing',    href: '#pricing' },
  { label: 'Team',       href: '#team' },
  { label: 'Blog',       href: '#blog' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active,     setActive]     = useState('');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setActive(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(255,255,255,0.90)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: scrolled ? '0 2px 30px rgba(212,175,55,0.12)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212,175,55,0.15)' : 'none',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-20">

          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={e => { e.preventDefault(); scrollTo('#hero'); }}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-9 h-9 relative">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <path d="M20 2L38 20L20 38L2 20L20 2Z"
                  stroke="url(#nl)" strokeWidth="1.5" fill="none" />
                <path d="M20 10L30 20L20 30L10 20L20 10Z"
                  fill="url(#nl)" opacity="0.4" />
                <defs>
                  <linearGradient id="nl" x1="2" y1="2" x2="38" y2="38">
                    <stop stopColor="#D4AF37" />
                    <stop offset="1" stopColor="#E7B8A4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <span
                className={`font-playfair text-xl font-semibold tracking-widest block leading-none ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`}
              >
                SALON
              </span>
              <span
                className="text-[9px] tracking-[0.35em] block"
                style={{ color: '#D4AF37' }}
              >
                BEAUTY &amp; SPA
              </span>
            </div>
          </motion.a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-poppins tracking-wide relative group transition-colors duration-300 ${
                  scrolled ? 'text-[#2C2C2C] hover:text-[#D4AF37]' : 'text-white/85 hover:text-white'
                } ${active === link.href ? '!text-[#D4AF37]' : ''}`}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px bg-[#D4AF37] transition-all duration-300 w-0 group-hover:w-full"
                  style={{ width: active === link.href ? '100%' : undefined }}
                />
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => scrollTo('#booking')}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium font-poppins text-white"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #B8962E)' }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(212,175,55,0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              Book Now
            </motion.button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {[0, 1, 2].map(i => (
                <motion.span
                  key={i}
                  className="block h-px rounded-full"
                  style={{ background: scrolled ? '#1A1A1A' : 'white', originX: '50%' }}
                  animate={{
                    width: i === 1 ? (mobileOpen ? '60%' : '75%') : '100%',
                    rotate: i === 0 ? (mobileOpen ? 45 : 0) : i === 2 ? (mobileOpen ? -45 : 0) : 0,
                    y: i === 0 ? (mobileOpen ? 8 : 0) : i === 2 ? (mobileOpen ? -8 : 0) : 0,
                    opacity: i === 1 ? (mobileOpen ? 0 : 1) : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[999] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)} />

            {/* Panel */}
            <motion.nav
              className="absolute top-0 right-0 h-full w-[280px] flex flex-col pt-24 pb-10 px-8"
              style={{ background: '#1A1A1A' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Gold accent */}
              <div className="absolute top-0 left-0 w-full h-1"
                style={{ background: 'linear-gradient(90deg, #D4AF37, #E7B8A4)' }} />

              <div className="flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-left py-3.5 px-2 text-white/80 hover:text-white font-poppins text-base border-b border-white/5 flex items-center justify-between group transition-colors"
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <span>{link.label}</span>
                    <span className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </motion.button>
                ))}
              </div>

              <motion.button
                onClick={() => scrollTo('#booking')}
                className="mt-8 py-3.5 rounded-full text-white font-medium font-poppins text-sm tracking-wide"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #B8962E)' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileTap={{ scale: 0.97 }}
              >
                Book Appointment
              </motion.button>

              <div className="mt-auto flex gap-4 justify-center">
                {['instagram', 'facebook', 'twitter'].map(s => (
                  <a key={s} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors text-xs capitalize">
                    {s[0].toUpperCase()}
                  </a>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
