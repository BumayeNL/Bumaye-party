"use client";

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Instagram, Menu, X } from 'lucide-react';

export const Navbar = ({ logoUrl }: { logoUrl?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    // Small delay to let the mobile menu close first
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80; // navbar height
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, isOpen ? 350 : 0);
  }, [isOpen]);

  const scrollToEvents = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById('events');
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, isOpen ? 350 : 0);
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bumaye-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 h-8 md:h-10">
          {logoUrl ? <img src={logoUrl} alt="BUMAYE" className="h-full object-contain" /> : <span className="font-display text-3xl tracking-tighter text-bumaye-orange">BUMAYE</span>}
        </a>
        <div className="hidden md:flex items-center gap-8 font-display text-sm uppercase tracking-[0.15em]">
          {['Events','About','Gallery','Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => handleNavClick(e, item.toLowerCase())} className="hover:text-bumaye-orange transition-colors">{item}</a>
          ))}
          <div className="h-4 w-[1px] bg-white/20 mx-2" />
          <a href="https://www.instagram.com/bumaye.nl" target="_blank" rel="noreferrer" className="p-2 glass rounded-full hover:bg-bumaye-orange transition-all"><Instagram size={16} /></a>
          <button onClick={scrollToEvents} className="bg-bumaye-orange text-white px-8 py-2.5 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-bumaye-orange/20">TICKETS</button>
        </div>
        <button className="md:hidden text-white p-2 glass rounded-lg relative z-[110]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-bumaye-black/98 backdrop-blur-3xl z-[100] flex flex-col items-center justify-center text-center p-6 sm:p-10">
            <button className="absolute top-8 right-8 text-white/40 hover:text-bumaye-orange transition-colors z-[110]" onClick={() => setIsOpen(false)}><X size={40} /></button>
            <div className="flex flex-col gap-6 font-display text-4xl sm:text-6xl uppercase tracking-tighter">
              {['Events','About','Gallery','Contact'].map((item, i) => (
                <motion.a key={item} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} href={`#${item.toLowerCase()}`} onClick={(e) => handleNavClick(e, item.toLowerCase())} className="hover:text-bumaye-orange transition-colors">{item}</motion.a>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col items-center gap-8 mt-12 w-full max-w-xs">
              <button onClick={scrollToEvents} className="w-full bg-bumaye-orange text-white py-5 rounded-3xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-bumaye-orange/40">TICKETS KOPEN</button>
              <a href="https://www.instagram.com/bumaye.nl" target="_blank" rel="noreferrer" className="p-5 glass rounded-full text-bumaye-orange hover:bg-bumaye-orange hover:text-white transition-all"><Instagram size={32} /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
