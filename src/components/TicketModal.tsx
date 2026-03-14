import { AnimatePresence, motion } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';

const ensureAbsoluteUrl = (url: string) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('//')) return `https:${url}`;
  return `https://${url}`;
};

export const TicketModal = ({ url, isOpen, onClose }: { url: string; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  const absoluteUrl = ensureAbsoluteUrl(url);
  const isBlocked = ['linktr.ee','instagram.com','facebook.com','tiktok.com','spotify.com'].some(s => absoluteUrl.toLowerCase().includes(s));

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        <div className="absolute inset-0 bg-bumaye-black/90 backdrop-blur-xl" onClick={onClose} />
        <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full max-w-5xl h-[80vh] bg-white rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="absolute top-4 right-4 z-10">
            <button onClick={onClose} className="p-2 bg-bumaye-black/10 hover:bg-bumaye-black/20 rounded-full transition-colors text-bumaye-black"><X size={24} /></button>
          </div>
          <div className="w-full h-full pt-12">
            {isBlocked ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center bg-bumaye-black">
                <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center mb-8 border border-white/10"><ExternalLink size={40} className="text-bumaye-orange" /></div>
                <h3 className="font-display text-4xl text-white mb-4 uppercase tracking-tighter">SECURE REDIRECT</h3>
                <p className="text-white/40 max-w-sm mb-12 text-lg leading-relaxed">This shop requires a dedicated browser window for a secure checkout experience.</p>
                <a href={absoluteUrl} target="_blank" rel="noreferrer" onClick={onClose} className="px-12 py-5 bg-white text-bumaye-black rounded-2xl font-bold text-xl hover:bg-bumaye-orange hover:text-white transition-all transform hover:scale-105">OPEN TICKET SHOP</a>
              </div>
            ) : (
              <iframe src={absoluteUrl} className="w-full h-full border-none" title="Ticket Shop" />
            )}
          </div>
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-black/5 flex justify-between items-center">
            <p className="text-[10px] font-mono uppercase tracking-widest text-black/40">Secure Checkout via Ticket Provider</p>
            <a href={absoluteUrl} target="_blank" rel="noreferrer" className="text-[10px] font-mono uppercase tracking-widest text-bumaye-orange flex items-center gap-1 hover:underline">Open in new tab <ExternalLink size={12} /></a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
