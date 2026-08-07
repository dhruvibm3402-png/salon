'use client';

import { motion } from 'framer-motion';

const brands = [
  "L'Oréal", 'Wella', 'Schwarzkopf', 'Matrix', 'MAC', 'Lakmé',
  'Maybelline', 'O3+', 'Forest Essentials', 'Kérastase', 'NARS', 'Charlotte Tilbury',
];

// Duplicate for seamless loop
const doubled = [...brands, ...brands];

export default function Brands() {
  return (
    <section id="brands" className="py-12 overflow-hidden relative" style={{ background: '#FAF8F5' }}>
      {/* Left/right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #FAF8F5, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #FAF8F5, transparent)' }} />

      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-poppins tracking-[0.35em] uppercase text-[#D4AF37] mb-2">
          Trusted Brands We Use
        </p>
      </motion.div>

      {/* Marquee track */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee items-center gap-16 shrink-0">
          {doubled.map((brand, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0 group">
              {/* Decorative diamond */}
              <div
                className="w-1.5 h-1.5 rotate-45 rounded-sm shrink-0"
                style={{ background: '#D4AF37', opacity: i % 2 === 0 ? 1 : 0 }}
              />
              <span
                className="font-playfair text-xl font-semibold whitespace-nowrap transition-colors duration-300 group-hover:text-[#D4AF37]"
                style={{ color: i % 3 === 0 ? '#2C2C2C' : '#8a8070' }}
              >
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
