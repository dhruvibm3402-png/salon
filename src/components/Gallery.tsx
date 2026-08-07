'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Hair', 'Makeup', 'Spa', 'Nails', 'Bridal', 'Skincare'];

const images = [
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80', cat: 'Hair', label: 'Silk Blow Out', tall: true },
  { src: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=700&q=80', cat: 'Makeup', label: 'Party Glam', tall: false },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&q=80', cat: 'Spa', label: 'Hot Stone Massage', tall: true },
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=80', cat: 'Nails', label: 'French Manicure', tall: false },
  { src: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=700&q=80', cat: 'Bridal', label: 'Bridal Makeup', tall: true },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80', cat: 'Skincare', label: 'Glow Facial', tall: false },
  { src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=700&q=80', cat: 'Hair', label: 'Balayage', tall: false },
  { src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&q=80', cat: 'Skincare', label: 'HydraFacial', tall: true },
  { src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=700&q=80', cat: 'Hair', label: 'Keratin Gloss', tall: false },
  { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&q=80', cat: 'Spa', label: 'Aromatherapy', tall: true },
  { src: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=700&q=80', cat: 'Skincare', label: 'Skin Ritual', tall: false },
  { src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=700&q=80', cat: 'Bridal', label: 'Bridal Party', tall: false },
];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<null | typeof images[0]>(null);

  const filtered = active === 'All' ? images : images.filter(i => i.cat === active);

  return (
    <section id="gallery" className="py-24 px-5 lg:px-10" style={{ background: '#FAF8F5' }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-poppins tracking-[0.35em] uppercase mb-3" style={{ color: '#D4AF37' }}>
            Inspiration
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Beauty <span className="italic text-gradient-gold">Gallery</span>
          </h2>
          <div className="w-16 h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 rounded-full text-sm font-poppins font-medium transition-all duration-300"
              style={
                active === cat
                  ? { background: 'linear-gradient(135deg, #D4AF37, #B8962E)', color: 'white', boxShadow: '0 4px 15px rgba(212,175,55,0.3)' }
                  : { background: 'white', color: '#2C2C2C', border: '1px solid rgba(212,175,55,0.25)' }
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src + img.cat}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="relative group rounded-2xl overflow-hidden cursor-zoom-in break-inside-avoid mb-4"
                onClick={() => setLightbox(img)}
                style={{ height: img.tall ? 320 : 200 }}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={75}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                  <div>
                    <p className="text-white font-poppins font-medium text-sm">{img.label}</p>
                    <p className="text-white/60 text-xs">{img.cat}</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-lg"
                    style={{ background: 'rgba(212,175,55,0.85)' }}>
                    🔍
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              className="relative z-10 max-w-3xl w-full aspect-[4/3] rounded-2xl overflow-hidden"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
              style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.6)' }}
            >
              <Image
                src={lightbox.src.replace('w=700', 'w=1200')}
                alt={lightbox.label}
                fill
                quality={90}
                sizes="90vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-playfair text-xl">{lightbox.label}</p>
                <p className="text-white/60 font-poppins text-sm">{lightbox.cat}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors text-lg"
                aria-label="Close lightbox"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
