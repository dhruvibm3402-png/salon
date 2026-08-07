'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const BOOK_IMGS = [
  'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&q=80',
  'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=900&q=80',
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=900&q=80',
  'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=900&q=80'
];

const services = [
  'Hair Styling', 'Hair Coloring', 'Hair Spa', 'Bridal Makeup', 'Party Makeup',
  'Facial Treatment', 'Hydra Facial', 'Manicure', 'Pedicure', 'Nail Art',
  'Spa Therapy', 'Keratin Treatment', 'Waxing', 'Head Massage', 'Eyebrow Threading',
];

const times = [
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
  '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
];

type FormState = { name: string; phone: string; email: string; service: string; date: string; time: string; message: string };

const inputClass = `
  w-full px-4 py-3.5 rounded-xl text-sm font-poppins text-[#1A1A1A]
  border border-[rgba(212,175,55,0.2)] bg-white
  focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30
  placeholder:text-[#2C2C2C]/35 transition-all duration-200
`.trim();

export default function Booking() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', service: '', date: '', time: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % BOOK_IMGS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 px-5 lg:px-10 relative overflow-hidden" style={{ background: '#FAF8F5' }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left: Illustration */}
        <motion.div
          className="relative block order-last lg:order-first"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-[460px] bg-neutral-100 mx-auto"
            style={{ boxShadow: '0 30px 70px rgba(0,0,0,0.15)' }}>
            <AnimatePresence>
              <motion.div
                key={currentImg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image src={BOOK_IMGS[currentImg]} alt="Book an appointment" fill sizes="(max-width: 768px) 100vw, 460px" quality={85} className="object-cover" priority />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <p className="font-playfair text-white text-2xl font-semibold mb-1">Your Moment of Beauty</p>
              <p className="text-white/60 font-poppins text-sm">Book in just 2 minutes. Transformations that last a lifetime.</p>
            </div>
            {/* Dots */}
            <div className="absolute top-6 right-6 flex gap-1.5 z-20">
              {BOOK_IMGS.map((_, idx) => (
                <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentImg ? 'bg-[#D4AF37] w-4' : 'bg-white/50'}`} />
              ))}
            </div>
          </div>


        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="text-xs font-poppins tracking-[0.35em] uppercase mb-3" style={{ color: '#D4AF37' }}>
              Reserve Your Spot
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-2">
              Book Your <span className="italic text-gradient-gold">Appointment</span>
            </h2>
            <p className="text-[#2C2C2C]/55 font-poppins text-sm mb-8 leading-relaxed">
              Fill in your details and our team will confirm your booking within 2 hours.
            </p>
          </div>

          {submitted ? (
            <motion.div
              className="rounded-2xl p-10 text-center"
              style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.2)' }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-2">Booking Received!</h3>
              <p className="text-[#2C2C2C]/60 font-poppins text-sm mb-6">
                Thank you, {form.name}! We&rsquo;ll confirm your appointment within 2 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full text-white text-sm font-poppins font-medium"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #B8962E)' }}
              >
                Book Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-poppins text-[#2C2C2C]/60 mb-1.5">Full Name *</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                    placeholder="Priya Sharma" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-poppins text-[#2C2C2C]/60 mb-1.5">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange}
                    placeholder="+91 98765 43210" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-poppins text-[#2C2C2C]/60 mb-1.5">Email Address *</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                  placeholder="priya@example.com" className={inputClass} />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-poppins text-[#2C2C2C]/60 mb-1.5">Select Service *</label>
                <select id="service" name="service" required value={form.service} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Choose a service</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-xs font-poppins text-[#2C2C2C]/60 mb-1.5">Preferred Date *</label>
                  <input id="date" name="date" type="date" required value={form.date} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="time" className="block text-xs font-poppins text-[#2C2C2C]/60 mb-1.5">Preferred Time *</label>
                  <select id="time" name="time" required value={form.time} onChange={handleChange} className={inputClass}>
                    <option value="" disabled>Choose time</option>
                    {times.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-poppins text-[#2C2C2C]/60 mb-1.5">Special Requests</label>
                <textarea id="message" name="message" rows={3} value={form.message} onChange={handleChange}
                  placeholder="Any special requests or notes for our team..." className={`${inputClass} resize-none`} />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full font-poppins font-semibold text-white mt-2 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8962E 100%)' }}
                whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(212,175,55,0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                      <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Confirming…
                  </span>
                ) : 'Confirm Appointment →'}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
