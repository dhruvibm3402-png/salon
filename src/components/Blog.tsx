'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const posts = [
  {
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80',
    cat: 'Hair Care',
    date: 'Jan 28, 2025',
    title: '10 Secrets to Salon-Worthy Hair at Home',
    excerpt: 'Our master stylists reveal their top tips for maintaining luxurious, healthy hair between appointments — from the right brush to the perfect overnight treatment.',
    readTime: '5 min read',
  },
  {
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80',
    cat: 'Skincare',
    date: 'Feb 10, 2025',
    title: 'The Ultimate Guide to Glowing Skin in 2025',
    excerpt: 'HydraFacial, microneedling, or a classic glow peel? Our skin experts break down the most effective treatments for achieving that lit-from-within radiance.',
    readTime: '7 min read',
  },
  {
    img: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=700&q=80',
    cat: 'Bridal',
    date: 'Feb 22, 2025',
    title: 'Your Complete Bridal Beauty Timeline',
    excerpt: 'From 6 months to the morning of your wedding — the essential beauty prep schedule every bride needs to look and feel absolutely radiant on her most special day.',
    readTime: '6 min read',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-5 lg:px-10" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-xs font-poppins tracking-[0.35em] uppercase mb-3" style={{ color: '#D4AF37' }}>
              Beauty Insights
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A]">
              Latest <span className="italic text-gradient-gold">Beauty Tips</span>
            </h2>
          </div>
          <a href="#" className="text-sm font-poppins font-medium text-[#D4AF37] border-b border-[#D4AF37]/40 hover:border-[#D4AF37] transition-colors pb-0.5">
            View All Articles →
          </a>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              className="group rounded-2xl overflow-hidden bg-[#FAF8F5] flex flex-col"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden shrink-0">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={75}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Category badge */}
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-poppins font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #B8962E)' }}
                >
                  {post.cat}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3 text-xs font-poppins" style={{ color: '#2C2C2C99' }}>
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-current" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-[#1A1A1A] mb-3 leading-snug group-hover:text-[#D4AF37] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-sm font-poppins text-[#2C2C2C]/60 leading-relaxed flex-1">{post.excerpt}</p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-5 text-sm font-poppins font-medium text-[#D4AF37] group/link"
                >
                  Read More
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
