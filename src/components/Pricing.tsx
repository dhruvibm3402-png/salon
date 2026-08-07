'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Basic',
    price: '₹1,999',
    period: 'per visit',
    desc: 'Perfect for everyday beauty essentials',
    featured: false,
    badge: null,
    features: [
      'Haircut & blowout',
      'Basic facial',
      'Eyebrow threading',
      'Express manicure',
      'Complimentary head massage',
    ],
  },
  {
    name: 'Premium',
    price: '₹4,999',
    period: 'per visit',
    desc: 'Our most popular all-inclusive experience',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Everything in Basic',
      'Hair coloring (single process)',
      'Hydra Facial treatment',
      'Gel manicure & pedicure',
      'Back & shoulder massage',
      'Eyebrow threading & tinting',
      'Complimentary refreshments',
    ],
  },
  {
    name: 'Luxury',
    price: '₹9,999',
    period: 'per visit',
    desc: 'An unparalleled full-day indulgence',
    featured: false,
    badge: null,
    features: [
      'Everything in Premium',
      'Keratin / balayage treatment',
      'Full spa therapy (90 min)',
      'Nail art design',
      'Anti-aging facial',
      'Aromatherapy session',
      'Priority booking',
    ],
  },
  {
    name: 'VIP Bridal',
    price: '₹24,999',
    period: 'package',
    desc: 'Your dream wedding, flawlessly executed',
    featured: false,
    badge: '✦ Exclusive',
    features: [
      'Bridal & party makeup trials',
      'Day-of bridal makeup & hair',
      'Bridesmaid packages (×3)',
      'Luxury spa day pre-wedding',
      'Nail art & gel extensions',
      'Personalised beauty consultation',
      'Dedicated stylist team',
      'Post-wedding pamper session',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-5 lg:px-10 relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(231,184,164,0.06) 0%, transparent 50%)',
        }} />

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
            Investment in You
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Luxury <span className="italic text-gradient-gold">Packages</span>
          </h2>
          <div className="w-16 h-px mx-auto mb-4"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
          <p className="text-[#2C2C2C]/55 font-poppins max-w-md mx-auto text-sm leading-relaxed">
            Choose the experience that suits your lifestyle. All packages include a complimentary consultation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className="relative rounded-3xl overflow-hidden flex flex-col"
              style={
                plan.featured
                  ? {
                      background: 'linear-gradient(160deg, #1A1A1A 0%, #2C2422 100%)',
                      boxShadow: '0 24px 60px rgba(212,175,55,0.28)',
                      border: '1px solid rgba(212,175,55,0.35)',
                    }
                  : {
                      background: '#FAFAFA',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                      border: '1px solid rgba(212,175,55,0.1)',
                    }
              }
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Featured gradient top bar */}
              {plan.featured && (
                <div className="h-1" style={{ background: 'linear-gradient(90deg, #D4AF37, #E7B8A4, #D4AF37)' }} />
              )}

              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-5 right-5">
                  <span
                    className="text-xs font-poppins font-semibold px-3 py-1 rounded-full"
                    style={
                      plan.featured
                        ? { background: 'rgba(212,175,55,0.2)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.4)' }
                        : { background: 'linear-gradient(135deg, #D4AF37, #B8962E)', color: 'white' }
                    }
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Name & price */}
                <p className="font-poppins text-sm font-medium tracking-widest uppercase mb-2"
                  style={{ color: plan.featured ? '#D4AF37' : '#D4AF37' }}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="font-playfair text-4xl font-bold"
                    style={{ color: plan.featured ? '#FFFFFF' : '#1A1A1A' }}>
                    {plan.price}
                  </span>
                  <span className="text-xs pb-2" style={{ color: plan.featured ? 'rgba(255,255,255,0.45)' : '#2C2C2C66' }}>
                    /{plan.period}
                  </span>
                </div>
                <p className="text-xs font-poppins mb-6 leading-relaxed"
                  style={{ color: plan.featured ? 'rgba(255,255,255,0.5)' : '#2C2C2C99' }}>
                  {plan.desc}
                </p>

                {/* Divider */}
                <div className="h-px mb-6"
                  style={{ background: plan.featured ? 'rgba(255,255,255,0.08)' : 'rgba(212,175,55,0.15)' }} />

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="mt-0.5 shrink-0" style={{ color: '#D4AF37' }}>✦</span>
                      <span className="text-sm font-poppins"
                        style={{ color: plan.featured ? 'rgba(255,255,255,0.75)' : '#2C2C2C' }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  className="mt-8 w-full py-3.5 rounded-full font-poppins font-semibold text-sm transition-all duration-300"
                  style={
                    plan.featured
                      ? { background: 'linear-gradient(135deg, #D4AF37, #B8962E)', color: 'white' }
                      : { background: 'transparent', color: '#D4AF37', border: '1.5px solid #D4AF37' }
                  }
                  whileHover={{
                    scale: 1.02,
                    boxShadow: plan.featured ? '0 8px 24px rgba(212,175,55,0.4)' : '0 4px 16px rgba(212,175,55,0.2)',
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book This Package
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-xs font-poppins mt-8"
          style={{ color: '#2C2C2C66' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          All prices are inclusive of taxes. Custom packages available — contact us for details.
        </motion.p>
      </div>
    </section>
  );
}
