"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Calendar, Clock, MapPin, Ticket, Camera, X } from 'lucide-react';
import { type Event } from '../constants';

export const FeaturedEvent: React.FC<{ event: Event; onBook: (url: string) => void }> = ({ event, onBook }) => {
  const [showFlyer, setShowFlyer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Pick the right flyer: mobile gets TikTok format, desktop gets banner
  const activeFlyer = isMobile
    ? (event.flyerMobileUrl || event.flyerUrl)
    : (event.flyerUrl || event.flyerMobileUrl);

  const hasFlyer = !!(event.flyerUrl || event.flyerMobileUrl);

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative w-full max-w-6xl mx-auto bg-white/5 rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="aspect-square lg:aspect-auto relative overflow-hidden">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-bumaye-black/60 to-transparent lg:hidden" />
          <div className="absolute top-8 left-8">
            <span className="px-6 py-2 bg-bumaye-yellow text-bumaye-black rounded-full text-xs font-bold uppercase tracking-widest">
              {event.status === 'sold-out' ? 'SOLD OUT' : 'TICKETS AVAILABLE'}
            </span>
          </div>
        </div>
        <div className="p-6 md:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-4 sm:gap-6 mb-6 md:mb-8">
            <div className="flex items-center gap-2 text-bumaye-orange font-mono text-xs uppercase tracking-widest"><Calendar size={16} />{event.date}</div>
            {event.time && <div className="flex items-center gap-2 text-white/40 font-mono text-xs uppercase tracking-widest"><Clock size={16} />{event.time}</div>}
          </div>
          <h2 className="font-display text-6xl md:text-8xl uppercase mb-6 leading-[0.85] tracking-tighter">{event.title}</h2>
          <div className="flex items-center gap-3 text-white/60 text-lg uppercase tracking-widest mb-10"><MapPin size={20} className="text-bumaye-orange" />{event.location} • {event.city}</div>
          {event.description && <p className="text-white/40 text-lg mb-12 leading-relaxed max-w-md">{event.description}</p>}
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => event.status !== 'sold-out' && onBook(event.ticketUrl)} className={`flex-1 py-6 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all text-lg ${event.status === 'sold-out' ? 'bg-white/5 text-white/20 cursor-not-allowed' : 'bg-white text-bumaye-black hover:bg-bumaye-orange hover:text-white'}`}>
              <Ticket size={24} />{event.status === 'sold-out' ? 'JOIN WAITLIST' : 'SECURE TICKETS'}
            </button>
            {hasFlyer && (
              <button onClick={() => setShowFlyer(true)} className="px-10 py-6 rounded-2xl font-bold border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-3 text-white uppercase tracking-widest text-sm">
                <Camera size={20} />VIEW FLYER
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Flyer Modal — responsive format */}
      <AnimatePresence>
        {showFlyer && activeFlyer && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10">
            <div className="absolute inset-0 bg-bumaye-black/95 backdrop-blur-2xl" onClick={() => setShowFlyer(false)} />
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`relative bg-bumaye-black rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 ${
                isMobile
                  ? 'w-full max-w-[85vw] aspect-[9/16]'  /* TikTok format on mobile */
                  : 'w-full max-w-6xl aspect-[21/9]'       /* Banner format on desktop */
              }`}
            >
              <button onClick={() => setShowFlyer(false)} className="absolute top-4 right-4 md:top-8 md:right-8 z-20 p-3 bg-black/50 hover:bg-bumaye-orange rounded-full transition-colors text-white"><X size={24} /></button>
              <img src={activeFlyer} alt={`${event.title} Flyer`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
