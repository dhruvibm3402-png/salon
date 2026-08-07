'use client';

import { motion } from 'framer-motion';

import { Award, Sparkles, Gem, ShieldCheck, Cpu, Leaf, Smartphone, Heart } from 'lucide-react';

const reasons = [
  { icon: Award, title: 'Certified Stylists', desc: 'Award-winning professionals with 5+ years of luxury salon experience.' },
  { icon: Sparkles, title: 'Luxury Products', desc: "We use only premium brands like Kérastase, L'Oréal & Charlotte Tilbury." },
  { icon: Gem, title: 'Affordable Packages', desc: 'Luxury experiences curated to fit every lifestyle and budget.' },
  { icon: ShieldCheck, title: '100% Hygiene', desc: 'Sterilised tools, single-use products & hospital-grade sanitation protocols.' },
  { icon: Cpu, title: 'Latest Equipment', desc: 'State-of-the-art beauty tech including HydraFacial, laser & more.' },
  { icon: Leaf, title: 'Relaxing Environment', desc: 'An oasis of calm with aromatherapy, mood lighting & curated playlists.' },
  { icon: Smartphone, title: 'Online Booking', desc: 'Seamless appointment scheduling available 24/7 from any device.' },
  { icon: Heart, title: 'Customer Satisfaction', desc: '20,000+ happy clients with a 4.9★ average rating across platforms.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-5 lg:px-10 relative overflow-hidden" style={{ background: '#1A1A1A' }}>
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-poppins tracking-[0.35em] uppercase mb-3" style={{ color: '#D4AF37' }}>
            Our Promise
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="italic text-gradient-gold">Us</span>
          </h2>
          <div className="w-16 h-px mx-auto mb-4"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
          <p className="text-white/40 font-poppins max-w-xl mx-auto text-sm leading-relaxed">
            We are more than a salon — we are your personal beauty sanctuary, dedicated to making every visit unforgettable.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="group relative rounded-2xl p-6 overflow-hidden cursor-default"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              whileHover={{ y: -5, borderColor: 'rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.06)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ boxShadow: 'inset 0 0 40px rgba(212,175,55,0.06)' }} />

              {/* Icon */}
              <div className="mb-5 block" style={{ color: '#D4AF37' }}>
                <r.icon strokeWidth={1.5} size={36} />
              </div>

              <h3 className="font-playfair text-white font-semibold text-lg mb-2">{r.title}</h3>
              <p className="text-white/45 font-poppins text-sm leading-relaxed">{r.desc}</p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: 'linear-gradient(90deg, #D4AF37, #E7B8A4)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
