"use client";

import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Marquee } from './Marquee';
import { FeaturedEvent } from './FeaturedEvent';
import { AboutSection } from './AboutSection';
import { Newsletter } from './Newsletter';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';
import { AdminPanel } from './AdminPanel';
import { AdminLogin } from './AdminLogin';
import { TicketModal } from './TicketModal';
import { EVENTS as INITIAL_EVENTS, GALLERY, type Event, type GalleryItem } from '../constants';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { fbq } from './MetaPixel';

const ADMIN_PASSWORD = 'bumaye2026';

const ensureAbsoluteUrl = (url: string) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('//')) return `https:${url}`;
  return `https://${url}`;
};

export default function App() {
  const [events, setEvents] = useState<Event[]>(INITIAL_EVENTS);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [ticketUrl, setTicketUrl] = useState<string | null>(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [gallery, setGallery] = useState<GalleryItem[]>(GALLERY);
  const [logoUrl, setLogoUrl] = useState<string>('');
  const [aboutImageUrl, setAboutImageUrl] = useState<string>('');
  const [subscribers, setSubscribers] = useState<{ id: string; email: string; created_at: string }[]>([]);
  const [messages, setMessages] = useState<{ id: string; name: string; email: string; subject: string; message: string; is_read: boolean; created_at: string }[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => { 
    const init = async () => {
      setIsSyncing(true);
      // Fetch only essential data for landing page first
      await Promise.all([fetchSettings(), fetchEvents(), fetchGallery()]);
      setIsSyncing(false);
    };
    init();
  }, []);

  useEffect(() => { if (isAdminOpen) fetchInbox(); }, [isAdminOpen]);

  const handleBook = (url: string) => { 
    if (!url) return; 
    fbq('track', 'InitiateCheckout', { content_category: 'Event Ticket' });
    setTicketUrl(ensureAbsoluteUrl(url)); 
  };

  const compressImage = (file: File): Promise<Blob> => new Promise((resolve) => {
    if (file.type === 'image/svg+xml') { resolve(file); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let { width, height } = img;
        const MAX = 1200;
        if (width > height && width > MAX) { height = Math.round(height * (MAX / width)); width = MAX; }
        else if (height > MAX) { width = Math.round(width * (MAX / height)); height = MAX; }
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) { ctx.clearRect(0, 0, width, height); ctx.drawImage(img, 0, 0, width, height); }
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
        }, file.type === 'image/png' ? 'image/png' : 'image/jpeg', file.type === 'image/png' ? 0.8 : 0.6);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });

  const uploadImage = async (file: File | Blob, path: string): Promise<string> => {
    if (!isSupabaseConfigured) return '';
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const { data, error } = await supabase.storage
      .from('assets')
      .upload(`${path}/${fileName}`, file, { cacheControl: '3600', upsert: false });
    
    if (error) throw error;
    const { data: { publicUrl } } = supabase.storage.from('assets').getPublicUrl(data.path);
    return publicUrl;
  };

  const fetchInbox = async () => {
    if (!isSupabaseConfigured) return;
    const [subs, msgs] = await Promise.all([
      supabase.from('subscribers').select('*').order('created_at', { ascending: false }),
      supabase.from('contact_messages').select('*').order('created_at', { ascending: false })
    ]);
    if (subs.data) setSubscribers(subs.data);
    if (msgs.data) setMessages(msgs.data);
  };

  const fetchSettings = async () => {
    if (!isSupabaseConfigured) return;
    const { data, error } = await supabase.from('settings').select('*');
    if (!error && data) {
      const map: Record<string, string> = {};
      data.forEach((s: any) => { map[s.key] = s.value; });
      if (map.logo_url) setLogoUrl(map.logo_url);
      if (map.about_image_url) setAboutImageUrl(map.about_image_url);
    }
  };

  const fetchGallery = async () => {
    if (!isSupabaseConfigured) return;
    const { data, error } = await supabase.from('gallery').select('*').order('display_order', { ascending: true, nullsFirst: false });
    if (error?.message.includes('display_order')) {
      const fallback = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
      if (!fallback.error && fallback.data) setGallery(fallback.data);
      return;
    }
    if (data) {
      console.log(`Gallery sync: Found ${data.length} items`);
      setGallery(data.length > 0 ? data : []);
    }
  };

  const fetchEvents = async () => {
    if (!isSupabaseConfigured) return;
    const { data, error } = await supabase.from('events').select('*').order('date', { ascending: true });
    if (!error && data) {
      console.log(`Events sync: Found ${data.length} items`);
      if (data.length > 0) setEvents(data);
    }
  };

  const handleRefreshAll = async () => { await Promise.all([fetchEvents(), fetchGallery(), fetchSettings(), fetchInbox()]); };

  const handleAddEvent = async (newEvent: Omit<Event, 'id'>) => {
    if (!isSupabaseConfigured) { setEvents([...events, { ...newEvent, id: Math.random().toString(36).substr(2, 9) }]); return; }
    const { data, error } = await supabase.from('events').insert([newEvent]).select();
    if (!error && data) setEvents([...events, data[0]]);
  };

  const handleDeleteEvent = async (id: string) => {
    if (!isSupabaseConfigured) { setEvents(events.filter(e => e.id !== id)); return; }
    await supabase.from('events').delete().eq('id', id);
    setEvents(events.filter(e => e.id !== id));
  };

  const handleUpdateEvent = async (id: string, updatedEvent: Omit<Event, 'id'>) => {
    if (!isSupabaseConfigured) { setEvents(events.map(e => e.id === id ? { ...updatedEvent, id } : e)); return; }
    const { data, error } = await supabase.from('events').update(updatedEvent).eq('id', id).select();
    if (!error && data) setEvents(events.map(e => e.id === id ? data[0] : e));
  };

  const handleAppGalleryAdd = async (files: File[], url: string) => {
    const maxOrder = gallery.length > 0 ? Math.max(...gallery.map(g => g.display_order || 0)) : 0;
    let currentOrder = maxOrder + 1;
    const newItems: Partial<GalleryItem>[] = [];

    // Handle uploaded files
    for (const file of files) {
      try {
        const compressed = await compressImage(file);
        const publicUrl = await uploadImage(compressed, 'gallery');
        newItems.push({ 
          id: Math.random().toString(36).substring(2, 9), 
          url: publicUrl, 
          display_order: currentOrder++ 
        });
      } catch (err) {
        console.error('Upload failed:', err);
      }
    }

    // Handle URL input
    if (url) {
      newItems.push({ 
        id: Math.random().toString(36).substring(2, 9), 
        url, 
        display_order: currentOrder++ 
      });
    }

    if (!isSupabaseConfigured) { 
      setGallery([...gallery, ...newItems as GalleryItem[]]); 
      return; 
    }

    const result = await supabase.from('gallery').insert(newItems.map(i => ({ 
      url: i.url, 
      display_order: i.display_order 
    }))).select();
    
    if (!result.error && result.data) setGallery([...gallery, ...result.data]);
  };

  const handleAppGalleryRemove = async (id: string) => {
    if (!isSupabaseConfigured) { setGallery(gallery.filter(g => g.id !== id)); return; }
    await supabase.from('gallery').delete().eq('id', id);
    setGallery(gallery.filter(g => g.id !== id));
  };

  const handleAppGalleryReorder = (newGallery: GalleryItem[]) => {
    const updated = newGallery.map((item, i) => ({ ...item, display_order: i + 1 }));
    setGallery(updated);
    if (isSupabaseConfigured) updated.forEach(item => supabase.from('gallery').update({ display_order: item.display_order }).eq('id', item.id));
  };

  const handleLogoUpload = async (file: File) => {
    try {
      const compressed = await compressImage(file);
      const url = await uploadImage(compressed, 'branding');
      if (!isSupabaseConfigured) { setLogoUrl(url); return; }
      await supabase.from('settings').upsert({ key: 'logo_url', value: url });
      setLogoUrl(url);
    } catch (err) {
      console.error('Logo upload failed:', err);
    }
  };

  const handleEventImageUpload = async (file: File) => {
    const compressed = await compressImage(file);
    return await uploadImage(compressed, 'events');
  };

  const handleAboutImageUpload = async (file: File) => {
    try {
      const compressed = await compressImage(file);
      const url = await uploadImage(compressed, 'branding');
      if (!isSupabaseConfigured) { setAboutImageUrl(url); return; }
      await supabase.from('settings').upsert({ key: 'about_image_url', value: url });
      setAboutImageUrl(url);
    } catch (err) {
      console.error('About image upload failed:', err);
    }
  };

  const handleSubscriberDelete = async (id: string) => {
    await supabase.from('subscribers').delete().eq('id', id);
    setSubscribers(subscribers.filter(s => s.id !== id));
  };

  const handleMessageDelete = async (id: string) => {
    await supabase.from('contact_messages').delete().eq('id', id);
    setMessages(messages.filter(m => m.id !== id));
  };

  const handleMessageRead = async (id: string) => {
    await supabase.from('contact_messages').update({ is_read: true }).eq('id', id);
    setMessages(messages.map(m => m.id === id ? { ...m, is_read: true } : m));
  };

  return (
    <div className="min-h-screen selection:bg-bumaye-orange selection:text-white overflow-x-hidden">
      <Navbar logoUrl={logoUrl} />
      <Hero gallery={gallery} firstEvent={events[0]} />
      <Marquee />
      <section id="events" className="py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12 md:mb-24">
            <span className="font-mono text-bumaye-orange text-xs tracking-[0.6em] uppercase mb-6 block">The Main Event</span>
            <h2 className="font-display text-7xl md:text-[12rem] uppercase leading-[0.75] tracking-tighter mb-8 px-4">NEXT UP</h2>
            <p className="max-w-xl text-white/40 font-light leading-relaxed text-xl mb-12">Don't miss the next edition.</p>
          </div>
          {events.length > 0 ? <FeaturedEvent event={events[0]} onBook={handleBook} /> : (
            <div className="text-center py-32 glass rounded-[3rem] border border-dashed border-white/10">
              <p className="font-mono text-white/20 uppercase tracking-widest">No upcoming events scheduled</p>
            </div>
          )}
        </div>
      </section>
      <AboutSection imageUrl={aboutImageUrl} />
      <Newsletter />
      <ContactSection />
      <Footer onAdminClick={() => isAdminLoggedIn ? setIsAdminOpen(true) : setShowLogin(true)} />
      
      {isSyncing && (
        <div className="fixed bottom-8 left-8 z-[200] flex items-center gap-3 bg-bumaye-black/80 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl shadow-2xl pointer-events-none">
          <div className="w-2 h-2 bg-bumaye-orange rounded-full animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">Updating Feed...</span>
        </div>
      )}

      <TicketModal url={ticketUrl || ''} isOpen={!!ticketUrl} onClose={() => setTicketUrl(null)} />
      {showLogin && <AdminLogin onLogin={(pw) => { if (pw === ADMIN_PASSWORD) { setIsAdminLoggedIn(true); setShowLogin(false); setLoginError(false); setIsAdminOpen(true); } else { setLoginError(true); } }} onClose={() => { setShowLogin(false); setLoginError(false); }} error={loginError} />}
      {isAdminOpen && isAdminLoggedIn && (
        <AdminPanel 
          events={events} 
          onAdd={handleAddEvent} 
          onUpdate={handleUpdateEvent} 
          onDelete={handleDeleteEvent} 
          onRefresh={handleRefreshAll} 
          onClose={() => setIsAdminOpen(false)} 
          gallery={gallery} 
          onGalleryAdd={handleAppGalleryAdd} 
          onGalleryRemove={handleAppGalleryRemove} 
          onGalleryReorder={handleAppGalleryReorder} 
          logoUrl={logoUrl} 
          onLogoUpload={handleLogoUpload} 
          aboutImageUrl={aboutImageUrl} 
          onAboutImageUpload={handleAboutImageUpload} 
          subscribers={subscribers} 
          contactMessages={messages} 
          onSubscriberDelete={handleSubscriberDelete} 
          onMessageDelete={handleMessageDelete} 
          onMessageRead={handleMessageRead} 
          onImageUpload={handleEventImageUpload}
        />
      )}
    </div>
  );
}
