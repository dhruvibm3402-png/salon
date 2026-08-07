'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const quickLinks = [
  { label: 'Home',       href: '#hero' },
  { label: 'Services',   href: '#services' },
  { label: 'About Us',   href: '#about' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Pricing',    href: '#pricing' },
  { label: 'Our Team',   href: '#team' },
  { label: 'Contact',    href: '#contact' },
  { label: 'FAQ',        href: '#faq' },
];

const serviceLinks = [
  'Hair Styling', 'Bridal Makeup', 'Facial Treatments', 'Hydra Facial',
  'Spa Therapy', 'Nail Art', 'Keratin Treatment', 'Waxing',
];

const igPreviews = [
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=150&q=70',
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=150&q=70',
  'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=150&q=70',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=150&q=70',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=150&q=70',
  'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=150&q=70',
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#1A1A1A' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-20 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                <path d="M20 2L38 20L20 38L2 20L20 2Z" stroke="url(#fl)" strokeWidth="1.5" fill="none" />
                <path d="M20 10L30 20L20 30L10 20L20 10Z" fill="url(#fl)" opacity="0.4" />
                <defs>
                  <linearGradient id="fl" x1="2" y1="2" x2="38" y2="38">
                    <stop stopColor="#D4AF37" />
                    <stop offset="1" stopColor="#E7B8A4" />
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <span className="font-playfair text-xl font-semibold tracking-widest text-white block leading-none">SALON</span>
                <span className="text-[9px] tracking-[0.35em]" style={{ color: '#D4AF37' }}>BEAUTY &amp; SPA</span>
              </div>
            </div>

            <p className="text-white/40 font-poppins text-sm leading-relaxed mb-6">
              A world-class beauty sanctuary dedicated to your glow. Luxury treatments, expert artistry, and an unforgettable experience — every visit.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { label: 'Instagram', icon: 'IG' },
                { label: 'Facebook',  icon: 'FB' },
                { label: 'YouTube',   icon: 'YT' },
                { label: 'Pinterest', icon: 'PT' },
              ].map(s => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold font-poppins text-white/40 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-poppins text-xs tracking-[0.3em] uppercase font-semibold mb-5" style={{ color: '#D4AF37' }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-sm font-poppins text-white/45 hover:text-white flex items-center gap-2 group transition-colors duration-200"
                  >
                    <span className="w-3 h-px bg-[#D4AF37]/0 group-hover:bg-[#D4AF37] transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins text-xs tracking-[0.3em] uppercase font-semibold mb-5" style={{ color: '#D4AF37' }}>
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map(s => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-sm font-poppins text-white/45 hover:text-white flex items-center gap-2 group transition-colors duration-200"
                  >
                    <span className="w-3 h-px bg-[#D4AF37]/0 group-hover:bg-[#D4AF37] transition-all duration-300 group-hover:w-4" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Instagram */}
          <div>
            <h4 className="font-poppins text-xs tracking-[0.3em] uppercase font-semibold mb-5" style={{ color: '#D4AF37' }}>
              Newsletter
            </h4>
            {subscribed ? (
              <motion.p
                className="text-sm font-poppins mb-6"
                style={{ color: '#D4AF37' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✦ Thank you for subscribing!
              </motion.p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5 mb-7">
                <p className="text-xs font-poppins text-white/35 leading-relaxed">
                  Get exclusive beauty tips, special offers and early access to new services.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs font-poppins text-white placeholder-white/25 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                    aria-label="Email address for newsletter"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl text-white text-xs font-poppins font-medium shrink-0"
                    style={{ background: 'linear-gradient(135deg, #D4AF37, #B8962E)' }}
                  >
                    →
                  </button>
                </div>
              </form>
            )}

            {/* Mini Instagram feed */}
            <div>
              <p className="font-poppins text-xs tracking-[0.3em] uppercase text-white/30 mb-3">Instagram</p>
              <div className="grid grid-cols-3 gap-1.5">
                {igPreviews.map((src, i) => (
                  <a key={i} href="#" className="block relative aspect-square rounded-lg overflow-hidden group">
                    <Image
                      src={src}
                      alt={`Instagram preview ${i + 1}`}
                      fill
                      sizes="60px"
                      quality={70}
                      className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 font-poppins text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Salon. All rights reserved. Crafted with ♥ in Mumbai.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <a key={l} href="#" className="text-white/25 hover:text-white/60 font-poppins text-xs transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
