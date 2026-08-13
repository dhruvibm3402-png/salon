"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, Play } from "lucide-react";


import ClientShell from '@/components/ClientShell';
import Brands from '@/components/Brands';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import Gallery from '@/components/Gallery';
import ServiceWizard from '@/components/ServiceWizard';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';

import Booking from '@/components/Booking';
import Blog from '@/components/Blog';
import InstagramGrid from '@/components/InstagramGrid';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import OldFooter from '@/components/Footer';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  const heroImages = [
    "/salon_4.jpg",
    "/salon_1.jpg",
    "/salon_3.jpg"
  ];

  useEffect(() => {
    // Custom cursor logic
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    // Interactive cursor state
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverTarget = target.closest("[data-cursor]");
      if (hoverTarget) {
        setCursorText(hoverTarget.getAttribute("data-cursor") || "");
        gsap.to(cursorRef.current, { scale: 1.5, duration: 0.3 });
      } else {
        setCursorText("");
        gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    const sliderInterval = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);

    // Hero GSAP animations
    const tl = gsap.timeline();

    // Initial load animation
    if (heroImgRef.current) {
      tl.fromTo(
        heroImgRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 2, ease: "power3.out" }
      );
    }

    if (heroContentRef.current) {
      tl.fromTo(
        heroContentRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
        "-=1.5"
      );
    }

    // Scroll parallax for Hero
    gsap.to(heroImgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Panels animation
    panelsRef.current.forEach((panel, i) => {
      gsap.fromTo(
        panel,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
          },
        }
      );
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      clearInterval(sliderInterval);
    };
  }, []);

  return (
    <div className="font-sans">
      <div className="bg-[#bdaea1] min-h-screen p-2 md:p-6">

        {/* Custom Cursor */}
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 w-8 h-8 md:w-4 md:h-4 rounded-full bg-brand-cream/80 backdrop-blur-sm pointer-events-none z-50 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-colors mix-blend-difference hidden md:flex"
        >
          {cursorText && (
            <span className="text-[8px] font-bold tracking-widest text-[#0c0c0c] whitespace-nowrap absolute">
              {cursorText}
            </span>
          )}
        </div>

        {/* Main Website Canvas */}
        <div className="bg-brand-black w-full min-h-[96vh] rounded-2xl md:rounded-[2rem] border border-brand-taupe/30 overflow-hidden relative" ref={containerRef}>

          {/* Decorative Shapes Layer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-10 right-10 w-64 h-64 border border-brand-taupe/10 opacity-30 rotate-45 transform"></div>
            <div className="absolute -bottom-20 -left-20 w-[40rem] h-[40rem] border border-brand-taupe/5 rounded-full opacity-40"></div>
          </div>



          {/* Hero Section */}
          <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
            {/* Cinematic Background Slider */}
            <div className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-brand-black/60 after:via-transparent after:to-brand-black overflow-hidden pointer-events-none">
              <div ref={heroImgRef as any} className="absolute inset-[-10%] w-[120%] h-[120%] overflow-hidden">
                {heroImages.map((src, idx) => (
                  <div
                    key={src}
                    className={`absolute inset-0 w-full h-full transition-all duration-[3000ms] ease-out ${idx === currentHeroIdx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                      }`}
                  >
                    <Image
                      src={src}
                      alt={`Cinematic Editorial ${idx}`}
                      fill
                      className="object-cover sepia-[10%] hue-rotate-[-5deg] saturate-50 mix-blend-luminosity opacity-40 md:opacity-80"
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>
            </div>



            {/* Hero Content */}
            <div ref={heroContentRef} className="relative z-10 text-center flex flex-col items-center px-4 mt-20">
              <span className="text-[10px] md:text-xs text-brand-taupe uppercase tracking-[0.3em] font-medium mb-6 md:mb-8 block">
                The Art of Beauty
              </span>

              <h1 className="font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.85] text-brand-cream font-light mb-8 max-w-6xl tracking-tight">
                ELEGANT <br />
                <span className="italic font-light text-brand-beige">BEAUTY</span><br className="md:hidden" /> EXPERIENCE
              </h1>

              <p className="text-xs md:text-sm text-brand-cream/80 max-w-md uppercase tracking-[0.2em] leading-loose mb-12">
                A premium luxury beauty and spa experience crafted to elevate your confidence and elegance.
              </p>

            </div>
          </section>

          {/* Editorial Split Imagery Section */}
          <section id="salon-panels" className="relative py-24 md:py-32 px-4 md:px-12 bg-brand-black z-20">
            <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[80vh]">

              {/* Panel 1 */}
              <div
                ref={(el: any) => (panelsRef.current[0] = el!)}
                className="group relative flex-1 h-[60vh] md:h-full rounded overflow-hidden cursor-pointer"
                data-cursor="VIEW"
              >
                <Image
                  src="/salon_1.jpg"
                  alt="Expert Hair Styling"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-8 left-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-2">EXPERT<br />HAIR<br />STYLING</h3>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-brand-taupe">01 — Services</span>
                </div>
              </div>

              {/* Panel 2 */}
              <div
                ref={(el: any) => (panelsRef.current[1] = el!)}
                className="group relative flex-1 h-[60vh] md:h-full rounded overflow-hidden cursor-pointer"
                data-cursor="EXPLORE"
              >
                <Image
                  src="/salon_2.jpg"
                  alt="Relaxing Spa Therapy"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-8 left-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-2">RELAXING<br />SPA<br />THERAPY</h3>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-brand-taupe">02 — Relaxation</span>
                </div>
              </div>

              {/* Panel 3 */}
              <div
                ref={(el: any) => (panelsRef.current[2] = el!)}
                className="group relative flex-1 h-[60vh] md:h-full rounded overflow-hidden cursor-pointer"
                data-cursor="VIEW"
              >
                <Image
                  src="/salon_3.jpg"
                  alt="Premium Bridal Makeup"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-8 left-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-2">PREMIUM<br />BRIDAL<br />MAKEUP</h3>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-brand-taupe">03 — Perfection</span>
                </div>
              </div>

            </div>
          </section>



          {/* Footer */}
          <footer className="py-8 md:py-12 border-t border-brand-taupe/20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-[9px] uppercase tracking-[0.2em] text-brand-taupe">
            <div className="mb-6 md:mb-0">
              © {new Date().getFullYear()} The Salon. All rights reserved.
            </div>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-brand-cream transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-cream transition-colors">Twitter</a>
              <a href="#" className="hover:text-brand-cream transition-colors">LinkedIn</a>
            </div>
          </footer>

        </div>
      </div>

      {/* Original Landing Page Appended Sections */}
      <div className="bg-[#FFFFFF] text-[#2C2C2C]">
        <ClientShell />
        <main>
          <Brands />
          <Services />
          <About />
          <WhyUs />
          <Gallery />
          <ServiceWizard />
          <Team />
          <Testimonials />

          <Booking />
          <Blog />
          <InstagramGrid />
          <FAQ />
          <Contact />
        </main>
        <OldFooter />
      </div>

    </div>
  );
}
