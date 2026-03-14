export const AboutSection = ({ imageUrl }: { imageUrl?: string }) => (
  <section id="about" className="py-8 md:py-12 px-4 md:px-6 bg-white text-bumaye-black rounded-[2rem] sm:rounded-[3rem] mx-4 my-6">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="relative group w-full mx-auto lg:max-w-none">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-black/5">
            {imageUrl ? (
              <img src={imageUrl} alt="Bumaye Crowd" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            ) : (
              <div className="w-full h-full bg-bumaye-black flex items-center justify-center p-12 text-center border border-black/5">
                <span className="font-display text-white/10 uppercase tracking-tighter text-4xl">BUMAYE</span>
              </div>
            )}
          </div>
        </div>
        <div className="text-center lg:text-left">
          <span className="font-mono text-bumaye-orange text-[10px] uppercase tracking-[0.4em] mb-3 block">The Movement</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase mb-6 leading-[0.9] tracking-tighter">WHAT IS<br />BUMAYE?</h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-bumaye-black/70 font-light max-w-md mx-auto lg:mx-0">
            <p>Bumaye is more than an event — it's a feeling. A space where good energy, love and freedom hit different. Where you walk in as a stranger and leave as family.</p>
            <p>Come as you are. Dance like nobody's watching. From Afrobeats to Dancehall, R&B to Amapiano — we keep the vibes high and the love higher. See you on the next one ♥</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
