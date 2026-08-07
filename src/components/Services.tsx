'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  { title: 'Hair Styling', icon: '✂️', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', desc: 'Expert cuts, blowouts & signature styles', duration: '60–90 min', price: 'From ₹800' },
  { title: 'Hair Coloring', icon: '🎨', img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80', desc: 'Balayage, highlights & vivid color', duration: '90–180 min', price: 'From ₹2,000' },
  { title: 'Hair Spa', icon: '🌿', img: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80', desc: 'Deep nourishing treatments for lustrous hair', duration: '45–60 min', price: 'From ₹1,200' },
  { title: 'Bridal Makeup', icon: '👰', img: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80', desc: 'Timeless bridal looks for your perfect day', duration: '120–180 min', price: 'From ₹8,000' },
  { title: 'Party Makeup', icon: '💄', img: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80', desc: 'Glamorous looks for every celebration', duration: '60–90 min', price: 'From ₹3,500' },
  { title: 'Facial Treatments', icon: '🧖', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', desc: 'Rejuvenating facials for radiant skin', duration: '60 min', price: 'From ₹1,500' },
  { title: 'Hydra Facial', icon: '💦', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80', desc: 'Medical-grade hydration & anti-aging', duration: '45 min', price: 'From ₹3,500' },
  { title: 'Manicure', icon: '💅', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', desc: 'Luxury nail care & cuticle treatment', duration: '45 min', price: 'From ₹600' },
  { title: 'Pedicure', icon: '🦶', img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80', desc: 'Relaxing foot care with premium products', duration: '60 min', price: 'From ₹900' },
  { title: 'Nail Art', icon: '🌸', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', desc: 'Intricate nail designs & gel extensions', duration: '60–120 min', price: 'From ₹1,200' },
  { title: 'Spa Therapy', icon: '🧘', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80', desc: 'Full-body relaxation & wellness rituals', duration: '90 min', price: 'From ₹4,000' },
  { title: 'Keratin Treatment', icon: '✨', img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80', desc: 'Frizz-free, silky smooth hair transformation', duration: '150 min', price: 'From ₹4,500' },
  { title: 'Waxing', icon: '🌙', img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80', desc: 'Smooth skin with premium wax formulas', duration: '30–60 min', price: 'From ₹400' },
  { title: 'Head Massage', icon: '🙆', img: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80', desc: 'Tension-releasing scalp & head therapy', duration: '30 min', price: 'From ₹700' },
  { title: 'Eyebrow Threading', icon: '🌟', img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80', desc: 'Perfect arches with expert precision', duration: '15 min', price: 'From ₹200' },
  { title: 'Skin Care', icon: '🌺', img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80', desc: 'Personalised skincare regimens & peels', duration: '60 min', price: 'From ₹2,000' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 px-5 lg:px-10" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-poppins tracking-[0.35em] uppercase mb-3" style={{ color: '#D4AF37' }}>
            What We Offer
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Our <span className="italic text-gradient-gold">Premium</span> Services
          </h2>
          <div className="w-16 h-px mx-auto mb-4" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
          <p className="text-[#2C2C2C]/60 font-poppins max-w-xl mx-auto text-sm leading-relaxed">
            Indulge in our comprehensive range of beauty treatments, each designed to enhance your natural beauty and leave you feeling extraordinary.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ boxShadow: hovered === i ? '0 20px 50px rgba(212,175,55,0.2)' : '0 4px 20px rgba(0,0,0,0.06)' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={75}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              </div>

              {/* Content */}
              <div className="p-5" style={{ background: '#FFFFFF' }}>
                <h3 className="font-playfair font-semibold text-[#1A1A1A] text-lg mb-1.5">{s.title}</h3>
                <p className="text-sm text-[#2C2C2C]/60 font-poppins mb-3 leading-relaxed">{s.desc}</p>
                <div className="flex items-center justify-between text-xs font-poppins">
                  <span className="text-[#2C2C2C]/50">⏱ {s.duration}</span>
                  <span className="font-semibold" style={{ color: '#D4AF37' }}>{s.price}</span>
                </div>
              </div>

              {/* Hover gold border top line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: 'linear-gradient(90deg, #D4AF37, #E7B8A4)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
