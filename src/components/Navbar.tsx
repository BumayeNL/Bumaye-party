"use client";

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Instagram, Menu, X } from 'lucide-react';

export const Navbar = ({ logoUrl }: { logoUrl?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const smoothScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => smoothScrollTo(id), 400);
    } else {
      smoothScrollTo(id);
    }
  }, [isOpen, smoothScrollTo]);

  const scrollToEvents = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => smoothScrollTo('events'), 400);
    } else {
      smoothScrollTo('events');
    }
  }, [isOpen, smoothScrollTo]);

  // Mobile menu rendered via portal to escape nav stacking context
  const mobileMenu = mounted && isOpen ? createPortal(
    <AnimatePresence>
      <motion.div
        key="mobile-menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] bg-bumaye-black flex flex-col items-center justify-center text-center"
        style={{ top: 0, left: 0, right: 0, bottom: 0, position: 'fixed' }}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-white/60 hover:text-bumaye-orange transition-colors p-2"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>

        {/* Nav links */}
        <div className="flex flex-col gap-8 font-display text-5xl uppercase tracking-tighter">
          {['Events', 'About', 'Gallery', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="hover:text-bumaye-orange transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-6 mt-14 w-full max-w-xs px-6"
        >
          <button
            onClick={scrollToEvents}
            className="w-full bg-bumaye-orange text-white py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-bumaye-orange/40"
          >
            TICKETS KOPEN
          </button>
          <a
            href="https://www.instagram.com/bumaye.nl"
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-white/5 border border-white/10 rounded-full text-bumaye-orange hover:bg-bumaye-orange hover:text-white transition-all"
          >
            <Instagram size={28} />
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  ) : null;

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bumaye-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 h-8 md:h-10">
            {logoUrl ? <img src={logoUrl} alt="BUMAYE" className="h-full object-contain" /> : <span className="font-display text-3xl tracking-tighter text-bumaye-orange">BUMAYE</span>}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 font-display text-sm uppercase tracking-[0.15em]">
            {['Events', 'About', 'Gallery', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => handleNavClick(e, item.toLowerCase())} className="hover:text-bumaye-orange transition-colors">{item}</a>
            ))}
            <div className="h-4 w-[1px] bg-white/20 mx-2" />
            <a href="https://www.instagram.com/bumaye.nl" target="_blank" rel="noreferrer" className="p-2 glass rounded-full hover:bg-bumaye-orange transition-all"><Instagram size={16} /></a>
            <button onClick={scrollToEvents} className="bg-bumaye-orange text-white px-8 py-2.5 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-bumaye-orange/20">TICKETS</button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 glass rounded-lg relative z-[10000]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu via portal */}
      {mobileMenu}
    </>
  );
};
