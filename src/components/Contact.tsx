'use client';

import { motion } from 'framer-motion';

const info = [
  {
    icon: '📍',
    label: 'Address',
    lines: ['14, Linking Road, Bandra West', 'Mumbai, Maharashtra 400050'],
  },
  {
    icon: '📞',
    label: 'Phone',
    lines: ['+91 98765 43210', '+91 99887 76655'],
  },
  {
    icon: '✉️',
    label: 'Email',
    lines: ['hello@salon.com', 'bookings@salon.com'],
  },
  {
    icon: '⏰',
    label: 'Hours',
    lines: ['Mon–Sat: 9:00 AM – 8:00 PM', 'Sunday: 10:00 AM – 6:00 PM'],
  },
];

const socials = [
  { label: 'Instagram', href: '#', icon: 'IG' },
  { label: 'Facebook',  href: '#', icon: 'FB' },
  { label: 'YouTube',   href: '#', icon: 'YT' },
  { label: 'Pinterest', href: '#', icon: 'PT' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-5 lg:px-10 relative overflow-hidden" style={{ background: '#FAF8F5' }}>
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
            Find Us
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Get in <span className="italic text-gradient-gold">Touch</span>
          </h2>
          <div className="w-16 h-px mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{ height: 'clamp(280px, 50vw, 420px)' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              title="Salon location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3967374087!2d72.8319!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM0LjYiTiA3MsKwNDknNTQuOCJF!5e0!3m2!1sen!2sin!4v1699000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.05)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {info.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="p-5 rounded-2xl"
                  style={{ background: 'white', border: '1px solid rgba(212,175,55,0.12)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(212,175,55,0.12)' }}
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <p className="text-xs font-poppins font-semibold tracking-widest uppercase mb-2"
                    style={{ color: '#D4AF37' }}>
                    {item.label}
                  </p>
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-sm font-poppins text-[#2C2C2C]/70 leading-relaxed">{line}</p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Social media */}
            <div className="pt-4">
              <p className="text-xs font-poppins tracking-[0.3em] uppercase mb-4" style={{ color: '#D4AF37' }}>
                Follow Us
              </p>
              <div className="flex gap-3">
                {socials.map(s => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold font-poppins transition-colors duration-300"
                    style={{ border: '1px solid rgba(212,175,55,0.25)', color: '#D4AF37' }}
                    whileHover={{
                      background: 'linear-gradient(135deg, #D4AF37, #B8962E)',
                      color: 'white',
                      borderColor: 'transparent',
                      scale: 1.1,
                    }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA strip */}
            <div
              className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{ background: 'linear-gradient(135deg, #1A1A1A, #2C2422)', border: '1px solid rgba(212,175,55,0.15)' }}
            >
              <div>
                <p className="font-playfair text-white text-lg font-semibold">Ready to Glow?</p>
                <p className="text-white/40 font-poppins text-xs mt-0.5">Book your luxury experience today</p>
              </div>
              <motion.button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-full text-white font-poppins font-semibold text-sm shrink-0"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #B8962E)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(212,175,55,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
