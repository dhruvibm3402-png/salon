'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'How far in advance should I book a bridal package?',
    a: 'We recommend booking your bridal package at least 3–4 months in advance to secure your preferred date. For peak wedding season (October–February), 6 months ahead is ideal. Early booking also allows time for a trial session.',
  },
  {
    q: 'Do you offer a consultation before the appointment?',
    a: 'Absolutely! All our packages include a complimentary 15-minute consultation. For colour services and bridal bookings, a detailed in-person or video consultation is scheduled to understand your vision and skin/hair profile.',
  },
  {
    q: 'What products do you use and are they safe for sensitive skin?',
    a: "We exclusively use premium salon brands including L'Oréal Professionnel, Kérastase, Charlotte Tilbury, and Forest Essentials. All products are dermatologist-tested. Please mention any allergies during your consultation.",
  },
  {
    q: 'Can I reschedule or cancel my appointment?',
    a: 'Yes — we ask for 24 hours notice for rescheduling or cancellation without a fee. Same-day cancellations may incur a 20% service charge. You can reschedule via our website, app, or by calling our front desk.',
  },
  {
    q: 'Do you have parking available?',
    a: 'We offer complimentary valet parking for all clients. There is also a paid public parking garage adjacent to the salon. Our Bandra West location has easy access to local auto-rickshaw and cab services.',
  },
  {
    q: 'What hygiene standards do you follow?',
    a: 'Hygiene is our highest priority. All tools are sterilised in medical-grade autoclaves between each client. We use single-use disposable items wherever possible, and all stations are sanitised with hospital-grade disinfectants.',
  },
  {
    q: 'Do you offer home services or destination bridal packages?',
    a: 'Yes! Our senior artists offer premium home service for bridal makeup, blowouts and select treatments within Mumbai. Destination wedding packages are available — contact us for bespoke pricing and availability.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-5 lg:px-10" style={{ background: '#FFFFFF' }}>
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-poppins tracking-[0.35em] uppercase mb-3" style={{ color: '#D4AF37' }}>
            Got Questions?
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Frequently Asked <span className="italic text-gradient-gold">Questions</span>
          </h2>
          <div className="w-16 h-px mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{ border: open === i ? '1px solid rgba(212,175,55,0.35)' : '1px solid rgba(212,175,55,0.12)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                style={{ background: open === i ? 'rgba(212,175,55,0.04)' : 'white' }}
                aria-expanded={open === i}
              >
                <span className="font-poppins font-semibold text-sm text-[#1A1A1A] pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm"
                  style={{ background: open === i ? 'linear-gradient(135deg, #D4AF37, #B8962E)' : 'rgba(212,175,55,0.1)', color: open === i ? 'white' : '#D4AF37' }}
                >
                  +
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-1">
                      <div className="h-px mb-4" style={{ background: 'rgba(212,175,55,0.15)' }} />
                      <p className="text-sm font-poppins text-[#2C2C2C]/65 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
