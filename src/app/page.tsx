import type { Metadata } from 'next';

// Client-only shell (loading, cursor, navbar, floating widgets)
import ClientShell from '@/components/ClientShell';

// Page sections (all server-renderable)
import Hero          from '@/components/Hero';
import Brands        from '@/components/Brands';
import Services      from '@/components/Services';
import About         from '@/components/About';
import WhyUs         from '@/components/WhyUs';
import Gallery       from '@/components/Gallery';
import Pricing       from '@/components/Pricing';
import Team          from '@/components/Team';
import Testimonials  from '@/components/Testimonials';
import BeforeAfter   from '@/components/BeforeAfter';
import Booking       from '@/components/Booking';
import Blog          from '@/components/Blog';
import InstagramGrid from '@/components/InstagramGrid';
import FAQ           from '@/components/FAQ';
import Contact       from '@/components/Contact';
import Footer        from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Salon — Luxury Beauty & Spa Experience',
  description:
    'Indulge in world-class beauty treatments at Salon. Expert hairstylists, bridal makeup, spa therapy, nail art and more. Book your appointment today.',
};

export default function HomePage() {
  return (
    <>
      {/* Client-only overlays */}
      <ClientShell />

      {/* Page content */}
      <main>
        <Hero />
        <Brands />
        <Services />
        <About />
        <WhyUs />
        <Gallery />
        <Pricing />
        <Team />
        <Testimonials />
        <BeforeAfter />
        <Booking />
        <Blog />
        <InstagramGrid />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
