'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    name: 'Aisha Mehta',
    role: 'Bride — October 2024',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
    text: 'My bridal makeup was absolutely flawless. Priya understood exactly what I envisioned and created a look that made me feel like royalty. The entire team was so professional and warm. Every detail was perfect — I could not have asked for more.',
  },
  {
    name: 'Shreya Patel',
    role: 'Regular Client',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    rating: 5,
    text: 'I have been coming to this Salon for two years and the quality never wavers. The keratin treatment transformed my hair completely — silky, frizz-free and absolutely gorgeous. The salon atmosphere is so calming, it feels like a mini vacation every visit.',
  },
  {
    name: 'Kavita Nair',
    role: 'VIP Client',
    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80',
    rating: 5,
    text: 'The Luxury Package is worth every rupee. The spa therapy, hydra facial and balayage in a single day was pure bliss. I left looking 10 years younger and feeling completely rejuvenated. This Salon is my forever beauty home.',
  },
  {
    name: 'Neha Singhania',
    role: 'Party Makeup Client',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80',
    rating: 5,
    text: 'Booked a last-minute appointment for a gala and Ananya worked magic. The makeup lasted the entire evening and I received compliments all night. The products they use are genuinely premium — you can feel and see the difference instantly.',
  },
  {
    name: 'Divya Krishnan',
    role: 'Skincare Client',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&q=80',
    rating: 5,
    text: 'After one HydraFacial session, my skin has never looked better. Meera is incredibly knowledgeable and tailored the treatment to my specific skin concerns. I am now a regular and the results keep improving. Absolutely life-changing.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent(prev => (prev + dir + total) % total);
  }, [total]);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => go(1), 5500);
    return () => clearInterval(t);
  }, [go]);

  const variants = {
    enter:  (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="py-24 px-5 lg:px-10 relative overflow-hidden" style={{ background: '#1A1A1A' }}>
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 65%)' }} />

      {/* Decorative quote mark */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 font-playfair text-[200px] leading-none opacity-[0.03] pointer-events-none text-white select-none">
        "
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-poppins tracking-[0.35em] uppercase mb-3" style={{ color: '#D4AF37' }}>
            Voices of Delight
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="italic text-gradient-gold">Stories</span>
          </h2>
          <div className="w-16 h-px mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="rounded-3xl p-6 md:p-12 relative overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <span key={i} style={{ color: '#D4AF37' }} className="text-xl">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-cormorant text-xl md:text-2xl text-white/85 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2"
                    style={{ borderColor: 'rgba(212,175,55,0.4)' }}>
                    <Image
                      src={testimonials[current].img}
                      alt={testimonials[current].name}
                      fill
                      sizes="56px"
                      quality={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-playfair text-white font-semibold text-lg">{testimonials[current].name}</p>
                    <p className="text-white/40 font-poppins text-xs">{testimonials[current].role}</p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-40 h-40 opacity-5"
                  style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => go(-1)}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-colors"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  background: i === current ? 'linear-gradient(90deg, #D4AF37, #E7B8A4)' : 'rgba(255,255,255,0.2)',
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-colors"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
