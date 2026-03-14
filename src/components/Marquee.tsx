import { motion } from 'motion/react';

export const Marquee = () => (
  <div className="bg-bumaye-orange py-4 overflow-hidden whitespace-nowrap border-y border-black/10 mt-20">
    <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="inline-block">
      {[...Array(15)].map((_, i) => (
        <span key={i} className="font-display text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tighter">
          AFRO • DANCEHALL • HIPHOP • R&B • AMAPIANO •&nbsp;
        </span>
      ))}
    </motion.div>
  </div>
);
