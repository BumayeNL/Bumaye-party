import React, { useState } from 'react';
import { Mail, Instagram, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('contact_messages').insert([formData]);
    if (error) { setStatus('error'); return; }
    setStatus('success');
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        <div>
          <span className="font-mono text-bumaye-orange text-xs tracking-widest uppercase mb-4 block">Get in Touch</span>
          <h2 className="font-display text-5xl sm:text-7xl uppercase mb-8 leading-none">WANT TO<br />COLLABORATE?</h2>
          <p className="text-white/60 text-xl mb-12 leading-relaxed">Whether you're a DJ, promoter, or brand looking to partner with the hottest Afrobeats event in the NL, we'd love to hear from you.</p>
          <div className="space-y-8">
            {[{ icon: <Mail size={24} />, label: 'Email Us', value: 'bumayeevent@gmail.com' }, { icon: <Instagram size={24} />, label: 'Follow Us', value: '@bumaye.nl' }].map(item => (
              <div key={item.label} className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-bumaye-orange">{item.icon}</div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1">{item.label}</p>
                  <p className="text-xl font-bold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 relative overflow-hidden">
          {status === 'success' && (
            <div className="absolute inset-0 z-10 bg-bumaye-black/90 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 bg-bumaye-orange/20 rounded-full flex items-center justify-center mb-6"><Send size={32} className="text-bumaye-orange" /></div>
              <h3 className="font-display text-4xl mb-4 uppercase">MESSAGE SENT!</h3>
              <p className="text-white/60 mb-8 max-w-xs">We've received your inquiry and will get back to you shortly.</p>
              <button onClick={() => setStatus('idle')} className="text-bumaye-orange font-mono text-xs tracking-widest uppercase hover:underline">Send another message</button>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[{ label: 'Name', field: 'name', type: 'text' }, { label: 'Email', field: 'email', type: 'email' }].map(({ label, field, type }) => (
                <div key={field} className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-2">{label}</label>
                  <input required type={type} value={(formData as any)[field]} onChange={e => setFormData({ ...formData, [field]: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors" disabled={status === 'loading'} />
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-2">Subject</label>
              <select value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors appearance-none" disabled={status === 'loading'}>
                {['General Inquiry','DJ / Artist Booking','Partnership','Press'].map(o => <option key={o} className="bg-bumaye-black">{o}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-2">Message</label>
              <textarea required rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors resize-none" disabled={status === 'loading'} />
            </div>
            <button type="submit" disabled={status === 'loading'} className="w-full bg-bumaye-orange text-white py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-bumaye-black transition-all flex items-center justify-center gap-3">
              {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'} <Send size={20} />
            </button>
            {status === 'error' && <p className="text-red-500 text-center text-xs font-mono">Failed to send. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};
