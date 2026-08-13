'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const images = [
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', cat: 'Hair Studio', label: 'Silk Blow Out', w: 'w-full md:w-[400px]', h: 'h-[60vw] md:h-[500px]', y: 'mt-0' },
  { src: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80', cat: 'Makeup Pro', label: 'Party Glam', w: 'w-[85%] md:w-[500px]', h: 'h-[50vw] md:h-[400px]', y: 'mt-12 md:mt-40 self-end' },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', cat: 'Spa & Relax', label: 'Wellness Ritual', w: 'w-[90%] md:w-[350px]', h: 'h-[75vw] md:h-[600px]', y: 'mt-12 md:mt-[-80px] self-start' },
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80', cat: 'Nail Art', label: 'French Manicure', w: 'w-[80%] md:w-[450px]', h: 'h-[55vw] md:h-[450px]', y: 'mt-12 md:mt-24 self-end' },
  { src: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=800&q=80', cat: 'Bridal', label: 'Bridal Elegance', w: 'w-full md:w-[600px]', h: 'h-[70vw] md:h-[700px]', y: 'mt-12 md:mt-[-40px]' },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80', cat: 'Skincare', label: 'Glow Facial', w: 'w-[85%] md:w-[400px]', h: 'h-[50vw] md:h-[400px]', y: 'mt-12 md:mt-56 self-start' },
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!scrollWrapperRef.current || window.innerWidth < 768) return;

      const totalScroll = scrollWrapperRef.current.scrollWidth - window.innerWidth;

      gsap.to(scrollWrapperRef.current, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: `+=${totalScroll}`,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative bg-[#1A1A1A] py-32 md:py-0 md:h-screen overflow-hidden flex flex-col justify-center"
    >
      <div className="absolute top-12 left-6 md:top-24 md:left-12 z-20 mix-blend-difference pointer-events-none">
        <p className="text-[10px] md:text-xs font-sans tracking-[0.4em] uppercase text-[#D4AF37] mb-4">
          Visual Inspiration
        </p>
        <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#FAF8F5]">
          Artistic <span className="italic text-[#FADADD]">Gallery</span>
        </h2>
      </div>

      <div
        ref={scrollWrapperRef}
        className="flex flex-col md:flex-row items-center gap-12 md:gap-24 px-6 md:px-[20vw] h-full w-full md:w-max mt-32 md:mt-0"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className={`relative group ${img.w} ${img.h} ${img.y} shrink-0 overflow-hidden cursor-pointer`}
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover sepia-[20%] saturate-50 transition-transform duration-[1.5s] group-hover:scale-110 ease-[cubic-bezier(0.25,1,0.5,1)]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Elegant dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
              <p className="text-[9px] uppercase tracking-[0.3em] font-sans text-[#D4AF37] mb-2">
                {img.cat}
              </p>
              <h3 className="text-2xl md:text-4xl font-serif text-[#FAF8F5] italic tracking-wide">
                {img.label}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 right-12 z-20 hidden md:flex items-center gap-4 text-[#FAF8F5]/50 mix-blend-difference">
        <span className="text-[10px] uppercase tracking-widest font-sans">Scroll horizontally</span>
        <div className="w-12 h-[1px] bg-[#D4AF37]" />
      </div>
    </section>
  );
}
