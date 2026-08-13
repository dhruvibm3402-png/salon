'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
    { id: 'hair', name: 'Hair Artistry' },
    { id: 'spa', name: 'Spa & Wellness' },
    { id: 'bridal', name: 'Bridal Elegance' },
    { id: 'nails', name: 'Nail Studio' }
];

const SERVICES = [
    { id: 'hc1', cat: 'hair', name: 'Signature Blowout', price: 1200 },
    { id: 'hc2', cat: 'hair', name: 'Root Touch-up & Color', price: 2500 },
    { id: 'hc3', cat: 'hair', name: 'Keratin Smoothing', price: 5000 },
    { id: 'sp1', cat: 'spa', name: 'Deep Tissue Massage', price: 3000 },
    { id: 'sp2', cat: 'spa', name: 'Aura Glow HydraFacial', price: 2500 },
    { id: 'br1', cat: 'bridal', name: 'Pre-Bridal Grooming', price: 12000 },
    { id: 'br2', cat: 'bridal', name: 'Premium Bridal Makeup', price: 15000 },
    { id: 'nl1', cat: 'nails', name: 'Luxury Gel Extensions', price: 1800 },
    { id: 'nl2', cat: 'nails', name: 'Classic French Manicure', price: 800 },
];

export default function ServiceWizard() {
    const [activeCat, setActiveCat] = useState('hair');
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const toggleService = (id: string) => {
        setSelectedServices(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        );
    };

    const total = selectedServices.reduce((sum, id) => {
        const s = SERVICES.find(x => x.id === id);
        return sum + (s?.price || 0);
    }, 0);

    return (
        <section id="wizard" className="py-24 px-6 md:px-12 relative overflow-hidden bg-[#1A1A1A]">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#FADADD] opacity-5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D4AF37] opacity-[0.03] blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10 relative">

                {/* Left: Wizard Info & Categories */}
                <div className="lg:w-1/3 flex flex-col gap-8">
                    <div>
                        <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase mb-4 block font-sans">Curate Your Experience</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#FAF8F5] leading-tight mb-4">
                            Service <br /> <span className="italic text-[#FADADD]">Selection</span>
                        </h2>
                        <p className="text-[#FAF8F5]/60 text-sm font-sans tracking-wide leading-relaxed">
                            Design your personalized beauty and wellness journey. Select your desired treatments to estimate your bespoke package.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 relative">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCat(cat.id)}
                                className={`text-left py-4 px-6 rounded-none border-l-2 transition-all duration-500 font-sans tracking-widest uppercase text-xs ${activeCat === cat.id
                                        ? 'border-[#D4AF37] bg-gradient-to-r from-[#D4AF37]/10 to-transparent text-[#D4AF37]'
                                        : 'border-[#FAF8F5]/10 text-[#FAF8F5]/50 hover:text-[#FAF8F5]/80 hover:border-[#FAF8F5]/30'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Service List & Calculator */}
                <div className="lg:w-2/3 flex flex-col relative">
                    <div className="min-h-[350px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCat}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                                className="grid gap-4"
                            >
                                {SERVICES.filter(s => s.cat === activeCat).map(service => {
                                    const isSelected = selectedServices.includes(service.id);
                                    return (
                                        <div
                                            key={service.id}
                                            onClick={() => toggleService(service.id)}
                                            className={`group cursor-pointer p-6 border transition-all duration-500 flex items-center justify-between
                        ${isSelected
                                                    ? 'border-[#D4AF37] bg-[#D4AF37]/[0.02]'
                                                    : 'border-[#FAF8F5]/10 hover:border-[#FADADD]/40 bg-transparent'
                                                }`}
                                        >
                                            <div className="flex flex-col gap-1">
                                                <h4 className={`font-serif text-2xl transition-colors ${isSelected ? 'text-[#D4AF37]' : 'text-[#FAF8F5] group-hover:text-[#FADADD]'}`}>
                                                    {service.name}
                                                </h4>
                                                <span className="text-[#FAF8F5]/40 text-xs font-sans tracking-widest uppercase">
                                                    Add to package
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <span className="font-serif text-xl tracking-wide text-[#FAF8F5]">
                                                    ₹{service.price.toLocaleString('en-IN')}
                                                </span>
                                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${isSelected ? 'border-[#D4AF37] bg-[#D4AF37]' : 'border-[#FAF8F5]/20'
                                                    }`}>
                                                    {isSelected && <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#1A1A1A]" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Calculator sticky footer */}
                    <div className="mt-12 p-8 border border-[#D4AF37]/30 bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2C] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_10px_40px_rgba(212,175,55,0.05)]">
                        <div className="flex flex-col">
                            <span className="text-[#FAF8F5]/50 text-[10px] tracking-[0.2em] font-sans uppercase mb-1">Estimated Total</span>
                            <div className="font-serif text-5xl text-[#D4AF37]">
                                ₹{total.toLocaleString('en-IN')}
                            </div>
                            <span className="text-[#FAF8F5]/40 text-xs font-sans mt-2">
                                {selectedServices.length} {selectedServices.length === 1 ? 'service' : 'services'} selected
                            </span>
                        </div>

                        <button
                            disabled={selectedServices.length === 0}
                            className={`px-8 py-4 text-xs font-sans tracking-[0.2em] uppercase transition-all duration-500
                ${selectedServices.length > 0
                                    ? 'bg-[#D4AF37] hover:bg-[#FADADD] text-[#1A1A1A] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(250,218,221,0.4)]'
                                    : 'bg-[#FAF8F5]/5 text-[#FAF8F5]/30 cursor-not-allowed border border-[#FAF8F5]/10'}`}
                        >
                            Confirm Booking
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
