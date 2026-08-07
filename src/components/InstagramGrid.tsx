'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const grams = [
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=75', likes: 312, comments: 18 },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=75', likes: 489, comments: 27 },
  { src: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=400&q=75', likes: 621, comments: 43 },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=75', likes: 278, comments: 15 },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=75', likes: 553, comments: 31 },
  { src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=400&q=75', likes: 402, comments: 22 },
  { src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=75', likes: 389, comments: 19 },
  { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=75', likes: 467, comments: 34 },
  { src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&q=75', likes: 511, comments: 29 },
];

export default function InstagramGrid() {
  return (
    <section id="instagram" className="py-24 px-5 lg:px-10" style={{ background: '#FAF8F5' }}>
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
            Follow Us
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2">
            <span className="italic text-gradient-gold">@salon</span>
          </h2>
          <p className="text-[#2C2C2C]/50 font-poppins text-sm">Beauty inspiration, daily updates & behind-the-scenes moments</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-9 gap-3">
          {grams.map((g, i) => (
            <motion.a
              key={g.src}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden aspect-square col-span-1"
              style={{ gridColumn: `span ${i < 3 ? 3 : 1}` }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              aria-label={`Instagram post ${i + 1}`}
            >
              <Image
                src={g.src}
                alt={`Instagram post ${i + 1}`}
                fill
                sizes="(max-width: 768px) 33vw, 200px"
                quality={75}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1">
                <div className="flex items-center gap-3 text-white text-sm font-poppins">
                  <span>♥ {g.likes}</span>
                  <span>💬 {g.comments}</span>
                </div>
                <div className="text-xs text-white/60 mt-1">View on Instagram</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#D4AF37]/30 text-sm font-poppins font-medium text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
            Follow @mysalon
          </a>
        </motion.div>
      </div>
    </section>
  );
}
