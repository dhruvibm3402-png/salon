"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, Play } from "lucide-react";

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
    "/cinematic_hero_bg.png",
    "/cinematic_hero_bg_2.png",
    "/panel_image_2.png"
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
    <div className="bg-[#bdaea1] min-h-screen p-2 md:p-6 font-sans">

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

        {/* Navbar */}
        <nav className="absolute top-0 w-full z-40 flex items-center justify-between p-6 md:px-12 md:py-8 text-brand-cream">
          <div className="text-xl md:text-2xl font-serif tracking-widest uppercase cursor-pointer" data-cursor="HOME">
            Sal Studio
          </div>

          <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.2em] font-medium">
            <a href="#about" className="hover:text-brand-beige transition-colors" data-cursor="EXPLORE">About</a>
            <a href="#services" className="hover:text-brand-beige transition-colors" data-cursor="EXPLORE">Services</a>
            <a href="#projects" className="hover:text-brand-beige transition-colors" data-cursor="EXPLORE">Projects</a>
            <a href="#contact" className="hover:text-brand-beige transition-colors" data-cursor="EXPLORE">Contact</a>
          </div>

          <button className="flex items-center space-x-3 text-[10px] uppercase tracking-widest group" data-cursor="MENU">
            <span className="hidden md:block">Menu</span>
            <div className="w-8 flex flex-col items-end space-y-[3px]">
              <span className="w-full h-[1px] bg-brand-cream group-hover:w-1/2 transition-all duration-300"></span>
              <span className="w-2/3 h-[1px] bg-brand-cream group-hover:w-full transition-all duration-300"></span>
            </div>
          </button>
        </nav>

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
              The Art of Elevation
            </span>

            <h1 className="font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.85] text-brand-cream font-light mb-8 max-w-6xl tracking-tight">
              CINEMATIC <br className="hidden md:block" />
              <span className="italic font-light text-brand-beige">DIGITAL</span> JOURNEY
            </h1>

            <p className="text-xs md:text-sm text-brand-cream/80 max-w-md uppercase tracking-[0.2em] leading-loose mb-12">
              A premium luxury editorial experience crafted to evoke emotion and elegance.
            </p>

          </div>
        </section>

        {/* Editorial Split Imagery Section */}
        <section id="services" className="relative py-24 md:py-32 px-4 md:px-12 bg-brand-black z-20">
          <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[80vh]">

            {/* Panel 1 */}
            <div
              ref={(el: any) => (panelsRef.current[0] = el!)}
              className="group relative flex-1 h-[60vh] md:h-full rounded overflow-hidden cursor-pointer"
              data-cursor="VIEW"
            >
              <Image
                src="/panel_image_1.png"
                alt="Discover Your Experience"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute bottom-8 left-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-2">DISCOVER<br />YOUR<br />EXPERIENCE</h3>
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
                src="/panel_image_2.png"
                alt="Explore Our World"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute bottom-8 left-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-2">EXPLORE<br />OUR<br />WORLD</h3>
                <span className="text-[9px] uppercase tracking-[0.2em] text-brand-taupe">02 — Curation</span>
              </div>
            </div>

            {/* Panel 3 */}
            <div
              ref={(el: any) => (panelsRef.current[2] = el!)}
              className="group relative flex-1 h-[60vh] md:h-full rounded overflow-hidden cursor-pointer"
              data-cursor="VIEW"
            >
              <Image
                src="/panel_image_3.png"
                alt="Meet Our Standard"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute bottom-8 left-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-2">MEET<br />OUR<br />STANDARD</h3>
                <span className="text-[9px] uppercase tracking-[0.2em] text-brand-taupe">03 — Quality</span>
              </div>
            </div>

          </div>
        </section>

        {/* Introduction Section */}
        <section id="about" className="py-24 md:py-40 px-6 md:px-24 flex items-center justify-center border-t border-brand-taupe/10 relative overflow-hidden">
          <div className="w-full max-w-5xl text-center relative z-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-taupe mb-8 block">Introduction</span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-snug lg:leading-tight text-brand-cream/90 font-light">
              We transcend the ordinary, crafting <span className="italic text-brand-beige">elegant narratives</span> that stand the test of time. An editorial approach to digital presence.
            </h2>
          </div>

          {/* Subtle beige accent logo or shape in background */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[40rem] font-serif text-brand-taupe opacity-[0.03] pointer-events-none italic">
            S
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-[#0a0a0a] flex flex-col items-center justify-center bg-cover bg-center text-center border-t border-brand-taupe/10">
          <h2 className="font-serif text-5xl md:text-8xl mb-12 text-brand-cream font-extralight tracking-tight">
            ELEVATE YOUR <br className="hidden md:block" /> <span className="italic text-brand-beige">AESTHETIC.</span>
          </h2>
          <a href="#contact" className="group relative inline-block overflow-hidden rounded-full border border-brand-taupe/40 px-12 py-4" data-cursor="START">
            <span className="relative z-10 text-[10px] uppercase tracking-[0.2em] text-brand-cream mix-blend-difference">Initiate Contact</span>
            <div className="absolute bottom-0 left-0 h-full w-full bg-brand-cream translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
          </a>
        </section>

        {/* Footer */}
        <footer className="py-8 md:py-12 border-t border-brand-taupe/20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-[9px] uppercase tracking-[0.2em] text-brand-taupe">
          <div className="mb-6 md:mb-0">
            © {new Date().getFullYear()} Sal Studio. All rights reserved.
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-brand-cream transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-cream transition-colors">Twitter</a>
            <a href="#" className="hover:text-brand-cream transition-colors">LinkedIn</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
