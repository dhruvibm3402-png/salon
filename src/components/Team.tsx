'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Priya Sharma',
    role: 'Creative Director & Master Stylist',
    exp: '14 Years',
    spec: 'Balayage, Precision Cuts',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&q=80',
    socials: { ig: '#', fb: '#', li: '#' },
  },
  {
    name: 'Ananya Kapoor',
    role: 'Senior Makeup Artist',
    exp: '10 Years',
    spec: 'Bridal, Editorial Makeup',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80',
    socials: { ig: '#', fb: '#', li: '#' },
  },
  {
    name: 'Meera Nair',
    role: 'Skin & Spa Therapist',
    exp: '9 Years',
    spec: 'HydraFacial, Anti-aging',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80',
    socials: { ig: '#', fb: '#', li: '#' },
  },
  {
    name: 'Ritu Verma',
    role: 'Nail Art Specialist',
    exp: '7 Years',
    spec: 'Nail Art, Gel Extensions',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80',
    socials: { ig: '#', fb: '#', li: '#' },
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-5 lg:px-10" style={{ background: '#FAF8F5' }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-poppins tracking-[0.35em] uppercase mb-3" style={{ color: '#D4AF37' }}>
            The Artists
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Meet Our <span className="italic text-gradient-gold">Experts</span>
          </h2>
          <div className="w-16 h-px mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="group relative rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={80}
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400" />

                {/* Social icons – appear on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[
                    { label: 'Instagram', icon: 'ig', href: member.socials.ig },
                    { label: 'Facebook',  icon: 'fb', href: member.socials.fb },
                    { label: 'LinkedIn',  icon: 'in', href: member.socials.li },
                  ].map(s => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold backdrop-blur-sm border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                      style={{ background: 'rgba(255,255,255,0.1)' }}
                      whileHover={{ scale: 1.15 }}
                    >
                      {s.icon.toUpperCase()}
                    </motion.a>
                  ))}
                </div>

                {/* Experience badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-poppins font-semibold"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #B8962E)', color: 'white' }}>
                  {member.exp}
                </div>
              </div>

              {/* Info */}
              <div className="p-5 bg-white">
                <h3 className="font-playfair text-lg font-semibold text-[#1A1A1A] mb-0.5">{member.name}</h3>
                <p className="text-xs font-poppins mb-2" style={{ color: '#D4AF37' }}>{member.role}</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-poppins px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(212,175,55,0.08)', color: '#2C2C2C99' }}>
                    {member.spec}
                  </span>
                </div>
              </div>

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
