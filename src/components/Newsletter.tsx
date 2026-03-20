import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { fbq } from './MetaPixel';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    const { error } = await supabase.from('subscribers').insert([{ email }]);
    if (error) {
      if (error.code === '23505') {
        fbq('track', 'Lead', { content_name: 'Newsletter Subscription' });
        setStatus('success');
      } else {
        setStatus('error');
      }
      return;
    }
    fbq('track', 'Lead', { content_name: 'Newsletter Subscription' });
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto glass rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
        <Mail className="mx-auto mb-6 text-bumaye-orange" size={32} />
        <h2 className="font-display text-4xl md:text-6xl uppercase mb-4 leading-none">JOIN THE TRIBE</h2>
        <p className="text-white/40 max-w-lg mx-auto mb-10 text-base">Subscribe to get early access to tickets, exclusive line-up reveals, and special discounts.</p>
        {status === 'success' ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-bumaye-orange/20 text-bumaye-orange py-4 px-8 rounded-2xl inline-block font-bold">
            WELCOME TO THE FAMILY! CHECK YOUR INBOX SOON.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="YOUR EMAIL ADDRESS" className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors font-mono text-sm" disabled={status === 'loading'} />
            <button type="submit" disabled={status === 'loading'} className="bg-white text-bumaye-black px-8 py-4 rounded-2xl font-bold hover:bg-bumaye-orange hover:text-white transition-all flex items-center justify-center gap-2">
              {status === 'loading' ? 'SUBMITTING...' : 'JOIN'} <Send size={18} />
            </button>
          </form>
        )}
        {status === 'error' && <p className="text-red-500 mt-4 text-xs font-mono">Something went wrong. Please try again.</p>}
      </div>
    </section>
  );
};
