"use client";

import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { type Event, type GalleryItem } from '../constants';

export const Hero = ({ gallery, firstEvent }: { gallery: GalleryItem[], firstEvent?: Event }) => {
  const scrollToEvents = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('events');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex flex-col bg-bumaye-black">
      {/* Hero content — fixed height, no overlap */}
      <div className="min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center pt-28 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto relative z-10 text-center w-full">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/10 scale-90 md:scale-100">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
              <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white">
                Next Event: {firstEvent ? `${firstEvent.city} • ${firstEvent.date}` : 'Checking dates...'}
              </span>
            </div>
            <div className="relative mb-8 md:mb-12">
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="relative inline-block">
                <img src="/assets/bumaye-banner.png" alt="BUMAYE!" className="w-[60vw] md:w-[45vw] max-w-[700px] h-auto drop-shadow-[0_20px_50px_rgba(251,27,129,0.4)] transform -rotate-1 select-none pointer-events-none mb-4" />
              </motion.div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-white/50 text-sm md:text-lg italic tracking-wide mb-6 md:mb-8">
                Where genres blend &amp; nations fuse
              </motion.p>
              <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="font-display text-[3.8vw] sm:text-xl md:text-[2.2vw] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white drop-shadow-lg flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4 whitespace-nowrap">
                <span>HIPHOP</span><span className="text-white/40">X</span><span>R&B</span><span className="text-white/40">X</span><span>AFRO</span><span className="text-white/40">X</span><span>DANCEHALL</span>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="#events" onClick={scrollToEvents} className="group bg-white text-bumaye-black px-8 py-3.5 rounded-full font-bold text-base flex items-center gap-3 hover:bg-bumaye-pink hover:text-white transition-all shadow-2xl shadow-black/20">
                GET TICKETS <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <button className="group bg-black/10 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded-full font-bold text-base flex items-center gap-3 hover:bg-white/10 transition-all">
                WATCH TEASER <Play size={18} className="fill-current" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Gallery section — completely separate block, no overlap */}
      {gallery && gallery.length > 0 && (
        <div id="gallery" className="w-full px-4 md:px-6 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 mb-8">
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter text-white drop-shadow-md">THE VIBE</h2>
              <a href="https://www.instagram.com/bumaye.nl" target="_blank" rel="noreferrer" className="group flex items-center gap-4 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] hover:text-bumaye-orange transition-colors">
                Follow @bumaye.nl <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            <div className="flex overflow-x-auto gap-6 hide-scrollbar snap-x snap-mandatory pb-4">
              {gallery.slice(0, 12).map((item, i) => (
                <motion.div key={item.id} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ scale: 1.05 }} className="flex-none w-[180px] md:w-[240px] aspect-[3/4] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 snap-start">
                  {item.url.endsWith('.mp4') ? <video src={item.url} controls className="w-full h-full object-cover" /> : <img src={item.url} alt={`Gallery ${item.id}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
