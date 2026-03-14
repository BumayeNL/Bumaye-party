import { Instagram, Music2, ChevronRight } from 'lucide-react';

export const Footer = ({ onAdminClick }: { onAdminClick: () => void }) => (
  <footer className="bg-bumaye-black border-t border-white/10 pt-32 pb-10 px-6 relative overflow-hidden">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none hidden sm:block">
      <span className="font-display text-[30vw] leading-none uppercase tracking-tighter">BUMAYE</span>
    </div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-display text-6xl text-bumaye-orange mb-8 tracking-tighter">BUMAYE</h2>
          <p className="text-white/40 max-w-sm mb-10 text-lg leading-relaxed">The ultimate Afrobeats, Dancehall, and Urban experience in the Netherlands.</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/bumaye.nl" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-bumaye-orange transition-all group"><Instagram size={24} className="group-hover:scale-110 transition-transform" /></a>
            <a href="#" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-bumaye-orange transition-all group"><Music2 size={24} className="group-hover:scale-110 transition-transform" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">Quick Links</h4>
          <ul className="space-y-4 font-bold uppercase text-sm tracking-widest">
            {['Events','About','Gallery','Contact'].map(item => (
              <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-bumaye-orange transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">Legal</h4>
          <ul className="space-y-4 font-bold uppercase text-sm tracking-widest">
            {['Privacy Policy','Terms of Use','Cookies'].map(item => (
              <li key={item}><a href="#" className="hover:text-bumaye-orange transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] font-mono uppercase tracking-[0.4em]">
        <p>© 2026 BUMAYE EVENTS • ALL RIGHTS RESERVED</p>
        <div className="flex gap-8">
          {['Instagram','TikTok','Spotify'].map(s => <a key={s} href="#" className="hover:text-white transition-colors">{s}</a>)}
          <button onClick={onAdminClick} className="hover:text-white transition-colors opacity-50 lowercase text-[10px] font-mono tracking-[0.4em]">admin</button>
        </div>
      </div>
    </div>
  </footer>
);
