/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Ticket, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Menu, 
  X, 
  Music2, 
  Users, 
  Camera,
  Play,
  Mail,
  Send,
  ChevronRight,
  Plus,
  Trash2,
  Clock,
  ExternalLink,
  Settings,
  Edit2,
  Database,
  RefreshCw
} from 'lucide-react';
import { EVENTS as INITIAL_EVENTS, GALLERY, type Event, type GalleryItem } from './constants';
import { supabase, isSupabaseConfigured } from './lib/supabase';

// --- Components ---

const TicketModal = ({ url, isOpen, onClose }: { url: string; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
      >
        <div className="absolute inset-0 bg-bumaye-black/90 backdrop-blur-xl" onClick={onClose} />
        <motion.div 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative w-full max-w-5xl h-[80vh] bg-white rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={onClose}
              className="p-2 bg-bumaye-black/10 hover:bg-bumaye-black/20 rounded-full transition-colors text-bumaye-black"
            >
              <X size={24} />
            </button>
          </div>
          <div className="w-full h-full pt-12">
            <iframe 
              src={url} 
              className="w-full h-full border-none"
              title="Ticket Shop"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-black/5 flex justify-between items-center">
            <p className="text-[10px] font-mono uppercase tracking-widest text-black/40">Secure Checkout via Ticket Provider</p>
            <a href={url} target="_blank" rel="noreferrer" className="text-[10px] font-mono uppercase tracking-widest text-bumaye-orange flex items-center gap-1 hover:underline">
              Open in new tab <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const AdminPanel = ({ events, onAdd, onUpdate, onDelete, onRefresh, onClose, gallery, onGalleryAdd, onGalleryRemove }: { 
  events: Event[];
  onAdd: (e: Omit<Event, 'id'>) => Promise<void>;
  onUpdate: (id: string, e: Omit<Event, 'id'>) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onRefresh: () => Promise<void>;
  onClose: () => void;
  gallery?: GalleryItem[];
  onGalleryAdd?: (files: File[], url: string) => Promise<void>;
  onGalleryRemove?: (id: string) => Promise<void>;
}) => {
    // Gallery manager state
    const [galleryInput, setGalleryInput] = useState('');
    const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
    const [galleryError, setGalleryError] = useState('');
    const [isGalleryUploading, setIsGalleryUploading] = useState(false);

    const handleGalleryAddSubmit = async () => {
      if (!galleryInput && galleryFiles.length === 0) {
        setGalleryError('Voer een URL in of selecteer bestanden');
        return;
      }
      setIsGalleryUploading(true);
      if (onGalleryAdd) {
        await onGalleryAdd(galleryFiles, galleryInput);
      }
      setGalleryFiles([]);
      setGalleryInput('');
      setGalleryError('');
      setIsGalleryUploading(false);
    };

    const handleGalleryFile = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        setGalleryFiles(Array.from(files));
      } else {
        setGalleryFiles([]);
      }
    };

    const handleGalleryRemoveClick = async (id: string) => {
      if (onGalleryRemove) await onGalleryRemove(id);
    };
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [newEvent, setNewEvent] = useState<Omit<Event, 'id'>>({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    city: '',
    ticketUrl: '',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
    flyerUrl: '',
    status: 'upcoming'
  });

  const handleEdit = (event: Event) => {
    setEditingId(event.id);
    setNewEvent({
      title: event.title,
      description: event.description || '',
      date: event.date,
      time: event.time || '',
      location: event.location,
      city: event.city,
      ticketUrl: event.ticketUrl,
      image: event.image,
      flyerUrl: event.flyerUrl || '',
      status: event.status
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setNewEvent({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      city: '',
      ticketUrl: '',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
      flyerUrl: '',
      status: 'upcoming'
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, field: 'image' | 'flyerUrl') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewEvent(prev => ({ ...prev, [field]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await onRefresh();
    } catch (error) {
      console.error('Refresh error:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      await onDelete(id);
    } catch (error) {
      console.error('Delete error:', error);
    } finally {
      setDeletingId(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editingId) {
        await onUpdate(editingId, newEvent);
        setEditingId(null);
      } else {
        await onAdd(newEvent);
      }
      setNewEvent({
        title: '',
        description: '',
        date: '',
        time: '',
        location: '',
        city: '',
        ticketUrl: '',
        image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
        flyerUrl: '',
        status: 'upcoming'
      });
    } catch (error) {
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-bumaye-black/95 backdrop-blur-md" onClick={onClose} />
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white rounded-[2.5rem] overflow-hidden flex flex-col text-bumaye-black">
        <div className="p-8 border-b border-black/5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h2 className="font-display text-4xl uppercase tracking-tighter">Event Manager</h2>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest ${isSupabaseConfigured ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
              <Database size={12} />
              {isSupabaseConfigured ? 'Supabase Connected' : 'Local Mode'}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-4 py-2 bg-black/5 hover:bg-black/10 rounded-xl transition-all font-mono text-[10px] uppercase tracking-widest disabled:opacity-50"
            >
              <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} />
              {isRefreshing ? 'Syncing...' : 'Sync Now'}
            </button>
            <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors"><X size={24} /></button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40">
                {editingId ? 'Edit Event' : 'Add New Event'}
              </h3>
              {editingId && (
                <button 
                  onClick={handleCancelEdit}
                  className="text-[10px] font-mono uppercase tracking-widest text-bumaye-orange hover:underline"
                >
                  Cancel Edit
                </button>
              )}
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                placeholder="Event Title" 
                value={newEvent.title}
                onChange={e => setNewEvent({...newEvent, title: e.target.value})}
                className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                required
              />
              <textarea 
                placeholder="Description" 
                value={newEvent.description}
                onChange={e => setNewEvent({...newEvent, description: e.target.value})}
                className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange resize-none"
                rows={3}
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  placeholder="Date (e.g. JULY 25, 2026)" 
                  value={newEvent.date}
                  onChange={e => setNewEvent({...newEvent, date: e.target.value})}
                  className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                  required
                />
                <input 
                  placeholder="Time (e.g. 23:00 - 05:00)" 
                  value={newEvent.time}
                  onChange={e => setNewEvent({...newEvent, time: e.target.value})}
                  className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  placeholder="Location" 
                  value={newEvent.location}
                  onChange={e => setNewEvent({...newEvent, location: e.target.value})}
                  className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                  required
                />
                <input 
                  placeholder="City" 
                  value={newEvent.city}
                  onChange={e => setNewEvent({...newEvent, city: e.target.value})}
                  className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                  required
                />
              </div>
              <input 
                placeholder="Ticket URL" 
                value={newEvent.ticketUrl}
                onChange={e => setNewEvent({...newEvent, ticketUrl: e.target.value})}
                className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                required
              />
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-black/40 ml-2">Main Image</label>
                  <div className="flex gap-4">
                    <input 
                      type="text"
                      placeholder="Image URL" 
                      value={newEvent.image}
                      onChange={e => setNewEvent({...newEvent, image: e.target.value})}
                      className="flex-1 bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                    />
                    <label className="cursor-pointer bg-black/5 border border-black/10 rounded-xl px-4 py-3 hover:bg-black/10 transition-colors flex items-center justify-center">
                      <Camera size={20} />
                      <input type="file" className="hidden" accept="image/*" onChange={e => handleFileUpload(e, 'image')} />
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-black/40 ml-2">Flyer Banner (Wide)</label>
                  <div className="flex gap-4">
                    <input 
                      type="text"
                      placeholder="Flyer URL" 
                      value={newEvent.flyerUrl}
                      onChange={e => setNewEvent({...newEvent, flyerUrl: e.target.value})}
                      className="flex-1 bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                    />
                    <label className="cursor-pointer bg-black/5 border border-black/10 rounded-xl px-4 py-3 hover:bg-black/10 transition-colors flex items-center justify-center">
                      <Plus size={20} />
                      <input type="file" className="hidden" accept="image/*" onChange={e => handleFileUpload(e, 'flyerUrl')} />
                    </label>
                  </div>
                  {newEvent.flyerUrl && (
                    <div className="mt-2 aspect-[21/9] rounded-xl overflow-hidden border border-black/10">
                      <img src={newEvent.flyerUrl} alt="Flyer Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>

              <select 
                value={newEvent.status}
                onChange={e => setNewEvent({...newEvent, status: e.target.value as any})}
                className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange appearance-none"
              >
                <option value="upcoming">Upcoming</option>
                <option value="sold-out">Sold Out</option>
                <option value="past">Past</option>
              </select>
              <button 
                disabled={isSubmitting}
                className="w-full bg-bumaye-orange text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-bumaye-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  editingId ? <Edit2 size={20} /> : <Plus size={20} />
                )}
                {isSubmitting ? 'SAVING...' : (editingId ? 'UPDATE EVENT' : 'CREATE EVENT')}
              </button>
            </form>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40 mb-6">Existing Events</h3>
            <div className="space-y-4">
              {events.map(event => (
                <div key={event.id} className="flex items-center justify-between p-4 bg-black/5 rounded-2xl group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={event.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase">{event.title}</h4>
                      <p className="text-[10px] text-black/40 uppercase">{event.city} • {event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleEdit(event)}
                      className="p-2 text-bumaye-orange hover:bg-bumaye-orange/10 rounded-lg transition-colors"
                      title="Edit Event"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(event.id)}
                      disabled={deletingId === event.id}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                      title="Delete Event"
                    >
                      {deletingId === event.id ? (
                        <div className="w-4 h-4 border-2 border-red-500/30 border-t-red-500 rounded-full animate-spin" />
                      ) : (
                        <Trash2 size={18} />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Manager */}
        {gallery && onGalleryAdd && onGalleryRemove && (
          <div className="border-t border-black/10 p-8">
            <h2 className="font-display text-3xl mb-6 uppercase tracking-tighter">Gallery Manager</h2>
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Afbeelding/video URL"
                value={galleryInput}
                onChange={e => setGalleryInput(e.target.value)}
                className="flex-1 bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
              />
              <label className="cursor-pointer bg-black/5 border border-black/10 rounded-xl px-4 py-3 hover:bg-black/10 transition-colors flex items-center justify-center relative">
                <Camera size={20} />
                {galleryFiles.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-bumaye-orange text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">{galleryFiles.length}</span>
                )}
                <input type="file" multiple className="hidden" accept="image/*,video/*" onChange={handleGalleryFile} />
              </label>
              <button
                onClick={handleGalleryAddSubmit}
                disabled={isGalleryUploading}
                className="bg-bumaye-orange text-white px-6 py-3 rounded-xl font-bold hover:bg-bumaye-black transition-all disabled:opacity-50"
              >
                {isGalleryUploading ? 'Uploading...' : 'Toevoegen'}
              </button>
            </div>
            {galleryError && <div className="text-red-500 text-xs mb-2">{galleryError}</div>}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
              {gallery.map((item) => (
                <div key={item.id} className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-white/5 border border-white/10 group">
                  {item.url.startsWith('data:video') || item.url.endsWith('.mp4') ? (
                    <video src={item.url} controls className="w-full h-full object-cover" />
                  ) : (
                    <img src={item.url} alt={`Gallery ${item.id}`} className="w-full h-full object-cover" />
                  )}
                  <button
                    onClick={() => handleGalleryRemoveClick(item.id)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Verwijder"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Marquee = () => {
  return (
    <div className="bg-bumaye-orange py-4 overflow-hidden whitespace-nowrap border-y border-black/10 mt-20">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="font-display text-4xl md:text-6xl text-white mx-8 uppercase tracking-tighter">
            AFROBEATS • DANCEHALL • HIPHOP • R&B •
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bumaye-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-display text-3xl tracking-tighter text-bumaye-orange flex items-center gap-2">
          <div className="w-8 h-8 bg-bumaye-orange rounded-lg flex items-center justify-center text-white">
            <Music2 size={20} />
          </div>
          BUMAYE
        </a>
        
        <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.2em]">
          <a href="#events" className="hover:text-bumaye-orange transition-colors">Events</a>
          <a href="#about" className="hover:text-bumaye-orange transition-colors">About</a>
          <a href="#gallery" className="hover:text-bumaye-orange transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-bumaye-orange transition-colors">Contact</a>
          <div className="h-4 w-[1px] bg-white/20 mx-2" />
          <a href="https://www.instagram.com/bumaye.nl" target="_blank" rel="noreferrer" className="p-2 glass rounded-full hover:bg-bumaye-orange transition-all">
            <Instagram size={16} />
          </a>
          <button className="bg-bumaye-orange text-white px-8 py-2.5 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-bumaye-orange/20">
            TICKETS
          </button>
        </div>

        <button className="md:hidden text-white p-2 glass rounded-lg" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-bumaye-black z-40 p-10 flex flex-col justify-center gap-8 font-display text-5xl uppercase"
          >
            <button className="absolute top-8 right-8 text-white" onClick={() => setIsOpen(false)}><X size={40} /></button>
            <a href="#events" onClick={() => setIsOpen(false)} className="hover:text-bumaye-orange transition-colors">Events</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-bumaye-orange transition-colors">About</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="hover:text-bumaye-orange transition-colors">Gallery</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-bumaye-orange transition-colors">Contact</a>
            <div className="flex gap-6 mt-8">
              <a href="https://www.instagram.com/bumaye.nl" className="text-bumaye-orange p-4 glass rounded-full"><Instagram size={32} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ gallery, firstEvent }: { gallery: GalleryItem[], firstEvent?: Event }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.15),transparent_70%)]" />
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-bumaye-orange/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-bumaye-yellow/5 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-8">
            <span className="w-2 h-2 bg-bumaye-orange rounded-full animate-ping" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">Next Event: Rotterdam • July 25</span>
          </div>
          
          <h1 className="font-display text-[12vw] md:text-[9vw] leading-[0.8] tracking-tighter uppercase mb-6 select-none">
            BUMAYE<br />
            <span className="text-stroke opacity-50 text-[3.5vw] md:text-[2.5vw] tracking-[0.2em] mt-6 block leading-none">
              AFROBEATS • DANCEHALL • HIPHOP • R&B
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a href={firstEvent ? firstEvent.ticketUrl : "#"} target={firstEvent ? "_blank" : "_self"} rel="noreferrer" className="group bg-bumaye-orange text-white px-12 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-white hover:text-bumaye-black transition-all shadow-2xl shadow-bumaye-orange/30">
            GET TICKETS <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </a>
          <button className="group glass text-white px-12 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-white/10 transition-all">
            WATCH TEASER <Play size={20} className="fill-current" />
          </button>
        </motion.div>

        {/* Hero Gallery Section */}
        {gallery && gallery.length > 0 && (
          <div className="mt-40 w-full text-left">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-8">
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter">THE VIBE</h2>
              <a
                href="https://www.instagram.com/bumaye.nl"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] hover:text-bumaye-orange transition-colors"
              >
                Follow @bumaye.nl <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {gallery.slice(0, 6).map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
                  className="aspect-[3/4] rounded-3xl overflow-hidden bg-white/5 border border-white/10"
                >
                  {item.url.startsWith('data:video') || item.url.endsWith('.mp4') ? (
                    <video src={item.url} controls className="w-full h-full object-cover" />
                  ) : (
                    <img
                      src={item.url}
                      alt={`Gallery ${item.id}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] vertical-text">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

const FeaturedEvent: React.FC<{ event: Event; onBook: (url: string) => void }> = ({ event, onBook }) => {
  const [showFlyer, setShowFlyer] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-full max-w-6xl mx-auto bg-white/5 rounded-[3rem] overflow-hidden border border-white/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="aspect-square lg:aspect-auto relative overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bumaye-black/60 to-transparent lg:hidden" />
          <div className="absolute top-8 left-8">
            <span className="px-6 py-2 bg-bumaye-yellow text-bumaye-black rounded-full text-xs font-bold uppercase tracking-widest">
              {event.status === 'sold-out' ? 'SOLD OUT' : 'TICKETS AVAILABLE'}
            </span>
          </div>
        </div>

        <div className="p-10 md:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-bumaye-orange font-mono text-xs uppercase tracking-widest">
              <Calendar size={16} />
              {event.date}
            </div>
            {event.time && (
              <div className="flex items-center gap-2 text-white/40 font-mono text-xs uppercase tracking-widest">
                <Clock size={16} />
                {event.time}
              </div>
            )}
          </div>

          <h2 className="font-display text-6xl md:text-8xl uppercase mb-6 leading-[0.85] tracking-tighter">
            {event.title}
          </h2>

          <div className="flex items-center gap-3 text-white/60 text-lg uppercase tracking-widest mb-10">
            <MapPin size={20} className="text-bumaye-orange" />
            {event.location} • {event.city}
          </div>

          {event.description && (
            <p className="text-white/40 text-lg mb-12 leading-relaxed max-w-md">
              {event.description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => event.status !== 'sold-out' && onBook(event.ticketUrl)}
              className={`flex-1 py-6 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all text-lg ${
                event.status === 'sold-out' 
                ? 'bg-white/5 text-white/20 cursor-not-allowed' 
                : 'bg-white text-bumaye-black hover:bg-bumaye-orange hover:text-white'
              }`}
            >
              <Ticket size={24} />
              {event.status === 'sold-out' ? 'JOIN WAITLIST' : 'SECURE TICKETS'}
            </button>
            
            {event.flyerUrl && (
              <button 
                onClick={() => setShowFlyer(true)}
                className="px-10 py-6 rounded-2xl font-bold border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-3 text-white uppercase tracking-widest text-sm"
              >
                <Camera size={20} /> VIEW FLYER
              </button>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showFlyer && event.flyerUrl && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10"
          >
            <div className="absolute inset-0 bg-bumaye-black/95 backdrop-blur-2xl" onClick={() => setShowFlyer(false)} />
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl aspect-[21/9] bg-bumaye-black rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
            >
              <button 
                onClick={() => setShowFlyer(false)}
                className="absolute top-8 right-8 z-20 p-3 bg-black/50 hover:bg-bumaye-orange rounded-full transition-colors text-white"
              >
                <X size={32} />
              </button>
              <img 
                src={event.flyerUrl} 
                alt={`${event.title} Flyer`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Newsletter = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-bumaye-orange/5 -z-10" />
        <Mail className="mx-auto mb-8 text-bumaye-orange" size={48} />
        <h2 className="font-display text-5xl md:text-7xl uppercase mb-6 leading-none">JOIN THE TRIBE</h2>
        <p className="text-white/60 max-w-lg mx-auto mb-10 text-lg">
          Subscribe to get early access to tickets, exclusive line-up reveals, and special discounts.
        </p>
        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="YOUR EMAIL ADDRESS" 
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors font-mono text-sm"
          />
          <button className="bg-white text-bumaye-black px-8 py-4 rounded-2xl font-bold hover:bg-bumaye-orange hover:text-white transition-all flex items-center justify-center gap-2">
            JOIN <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="font-mono text-bumaye-orange text-xs tracking-widest uppercase mb-4 block">Get in Touch</span>
          <h2 className="font-display text-7xl uppercase mb-8 leading-none">WANT TO<br />COLLABORATE?</h2>
          <p className="text-white/60 text-xl mb-12 leading-relaxed">
            Whether you're a DJ, promoter, or brand looking to partner with the hottest Afrobeats event in the NL, we'd love to hear from you.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-bumaye-orange">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1">Email Us</p>
                <p className="text-xl font-bold">info@bumaye.nl</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-bumaye-orange">
                <Instagram size={24} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1">Follow Us</p>
                <p className="text-xl font-bold">@bumaye.nl</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass rounded-[3rem] p-10 md:p-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-2">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-2">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-2">Subject</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors appearance-none">
                <option className="bg-bumaye-black">General Inquiry</option>
                <option className="bg-bumaye-black">DJ / Artist Booking</option>
                <option className="bg-bumaye-black">Partnership</option>
                <option className="bg-bumaye-black">Press</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-2">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors resize-none"></textarea>
            </div>
            <button className="w-full bg-bumaye-orange text-white py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-bumaye-black transition-all">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const residents = [
    { name: 'HENRY X', role: 'AFROBEATS MASTER' },
    { name: 'RUDY LIMA', role: 'URBAN VIBES' },
    { name: 'MC GARY BLACK', role: 'THE VOICE' },
    { name: 'DJ WEF', role: 'DANCEHALL QUEEN' }
  ];

  return (
    <section id="about" className="py-32 px-6 bg-white text-bumaye-black rounded-[4rem] mx-4 my-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=800" 
                alt="Bumaye Crowd" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-bumaye-orange rounded-[3rem] p-10 flex flex-col justify-end text-white shadow-2xl shadow-bumaye-orange/40 hidden md:flex">
              <Users size={48} className="mb-6" />
              <span className="font-display text-5xl leading-none uppercase tracking-tighter">100K+</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-80 mt-2">Global Community</span>
            </div>
          </div>

          <div>
            <span className="font-mono text-bumaye-orange text-xs tracking-[0.4em] uppercase mb-6 block">The Movement</span>
            <h2 className="font-display text-7xl md:text-8xl uppercase mb-10 leading-[0.9] tracking-tighter">CULTURE IN<br />MOTION</h2>
            <div className="space-y-8 text-xl leading-relaxed text-bumaye-black/70">
              <p>
                Bumaye isn't just an event; it's a celebration of the African diaspora's global influence on music and dance. We bring the soul of Lagos, the heat of Kingston, and the pulse of London to the heart of the Netherlands.
              </p>
              <p>
                Our mission is to create a safe, high-energy space where music lovers can connect, dance, and experience the best of Afrobeats, Dancehall, and Urban culture.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 mt-16">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-bumaye-orange/10 rounded-2xl flex items-center justify-center text-bumaye-orange">
                  <Music2 size={28} />
                </div>
                <h4 className="font-display text-2xl uppercase tracking-tighter">CURATED SOUNDS</h4>
                <p className="text-sm text-bumaye-black/50">Hand-picked DJs and artists from across the globe.</p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 bg-bumaye-orange/10 rounded-2xl flex items-center justify-center text-bumaye-orange">
                  <Camera size={28} />
                </div>
                <h4 className="font-display text-2xl uppercase tracking-tighter">IMMERSIVE MEDIA</h4>
                <p className="text-sm text-bumaye-black/50">Capturing every moment with premium visual production.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-bumaye-black/5 pt-24">
          <h3 className="font-display text-5xl uppercase mb-12 text-center">RESIDENT VIBE MAKERS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {residents.map((dj, i) => (
              <div key={i} className="text-center group">
                <div className="aspect-square rounded-full bg-bumaye-black/5 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-bumaye-orange opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="w-full h-full flex items-center justify-center text-bumaye-black/10 group-hover:text-bumaye-orange transition-colors">
                    <Music2 size={64} />
                  </div>
                </div>
                <h4 className="font-display text-2xl uppercase tracking-tighter">{dj.name}</h4>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bumaye-black/40">{dj.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bumaye-black border-t border-white/10 pt-32 pb-10 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
        <span className="font-display text-[30vw] leading-none uppercase tracking-tighter">BUMAYE</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-6xl text-bumaye-orange mb-8 tracking-tighter">BUMAYE</h2>
            <p className="text-white/40 max-w-sm mb-10 text-lg leading-relaxed">
              The ultimate Afrobeats, Dancehall, and Urban experience in the Netherlands. Celebrating culture through rhythm and energy.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/bumaye.nl" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-bumaye-orange transition-all group">
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-bumaye-orange transition-all group">
                <Music2 size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">Quick Links</h4>
            <ul className="space-y-4 font-bold uppercase text-sm tracking-widest">
              <li><a href="#events" className="hover:text-bumaye-orange transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Events</a></li>
              <li><a href="#about" className="hover:text-bumaye-orange transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> About</a></li>
              <li><a href="#gallery" className="hover:text-bumaye-orange transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Gallery</a></li>
              <li><a href="#contact" className="hover:text-bumaye-orange transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">Legal</h4>
            <ul className="space-y-4 font-bold uppercase text-sm tracking-widest">
              <li><a href="#" className="hover:text-bumaye-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-bumaye-orange transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-bumaye-orange transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] font-mono uppercase tracking-[0.4em]">
          <p>© 2026 BUMAYE EVENTS • ALL RIGHTS RESERVED</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
            <a href="#" className="hover:text-white transition-colors">Spotify</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [events, setEvents] = useState<Event[]>(INITIAL_EVENTS);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [ticketUrl, setTicketUrl] = useState<string | null>(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [gallery, setGallery] = useState<GalleryItem[]>(GALLERY);

  // Admin wachtwoord (voor demo, zet dit in env of backend voor productie!)
  const ADMIN_PASSWORD = 'bumaye2026';

  // Eenvoudige login prompt
  const AdminLogin = ({ onLogin, onClose, error }: { onLogin: (pw: string) => void; onClose: () => void; error?: boolean }) => {
    const [pw, setPw] = useState('');
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-bumaye-black/95 backdrop-blur-md" onClick={onClose} />
        <div className="relative w-full max-w-xs bg-white rounded-2xl p-8 flex flex-col gap-4 items-center">
          <h2 className="font-display text-2xl mb-2">Admin Login</h2>
          <input
            type="password"
            placeholder="Wachtwoord"
            value={pw}
            onChange={e => setPw(e.target.value)}
            className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
          />
          {error && <div className="text-red-500 text-xs">Onjuist wachtwoord</div>}
          <button
            onClick={() => onLogin(pw)}
            className="w-full bg-bumaye-orange text-white py-3 rounded-xl font-bold hover:bg-bumaye-black transition-all"
          >
            Login
          </button>
          <button onClick={onClose} className="text-xs text-bumaye-orange mt-2 hover:underline">Annuleren</button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    fetchEvents();
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    if (!isSupabaseConfigured) return;

    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setGallery(data);
    }
  };

  const fetchEvents = async () => {
    if (!isSupabaseConfigured) return;

    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true });

    if (error) {
      console.error('Error fetching events:', error);
      // Fallback to initial events if Supabase is not configured or error occurs
      return;
    }

    if (data) {
      setEvents(data);
    }
  };

  const handleAddEvent = async (newEvent: Omit<Event, 'id'>) => {
    if (!isSupabaseConfigured) {
      const localEvent = { ...newEvent, id: Math.random().toString(36).substr(2, 9) };
      setEvents([...events, localEvent]);
      return;
    }

    const { data, error } = await supabase
      .from('events')
      .insert([newEvent])
      .select();

    if (error) {
      console.error('Error adding event:', error);
      // Local update for demo if Supabase fails
      const localEvent = { ...newEvent, id: Math.random().toString(36).substr(2, 9) };
      setEvents([...events, localEvent]);
      return;
    }

    if (data) {
      setEvents([...events, data[0]]);
    }
  };

  const handleDeleteEvent = async (id: string) => {
    if (!isSupabaseConfigured) {
      setEvents(events.filter(e => e.id !== id));
      return;
    }

    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting event:', error);
      // Local update for demo
      setEvents(events.filter(e => e.id !== id));
      return;
    }

    setEvents(events.filter(e => e.id !== id));
  };

  const handleUpdateEvent = async (id: string, updatedEvent: Omit<Event, 'id'>) => {
    if (!isSupabaseConfigured) {
      setEvents(events.map(e => e.id === id ? { ...updatedEvent, id } : e));
      return;
    }

    const { data, error } = await supabase
      .from('events')
      .update(updatedEvent)
      .eq('id', id)
      .select();

    if (error) {
      console.error('Error updating event:', error);
      // Local update for demo
      setEvents(events.map(e => e.id === id ? { ...updatedEvent, id } : e));
      return;
    }

    if (data) {
      setEvents(events.map(e => e.id === id ? data[0] : e));
    }
  };

  const handleAppGalleryAdd = async (files: File[], url: string) => {
    const newItems: GalleryItem[] = [];
    
    // Compress image or read video directly
    const compressImage = (file: File): Promise<string> => new Promise((resolve) => {
      if (!file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let { width, height } = img;
          const MAX = 1200;
          if (width > height && width > MAX) {
            height = Math.round(height * (MAX / width));
            width = MAX;
          } else if (height > MAX) {
            width = Math.round(width * (MAX / height));
            height = MAX;
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', 0.6));
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });

    for (const file of files) {
      newItems.push({ id: Math.random().toString(36).substring(2, 9), url: await compressImage(file) });
    }
    
    if (url) {
      newItems.push({ id: Math.random().toString(36).substring(2, 9), url });
    }

    if (!isSupabaseConfigured) {
      setGallery([...gallery, ...newItems]);
      return;
    }

    // Insert into supabase
    const { data, error } = await supabase
      .from('gallery')
      .insert(newItems.map(item => ({ url: item.url })))
      .select();
      
    if (error) {
      alert("Error: Database upload exceeded limits or failed. Max 1MB allowed without bucket. Upload fewer files at once.\n" + error.message);
    } else if (data) {
      fetchGallery();
    }
  };

  const handleAppGalleryRemove = async (id: string) => {
    if (!isSupabaseConfigured) {
      setGallery(gallery.filter(g => g.id !== id));
      return;
    }
    const { error } = await supabase.from('gallery').delete().eq('id', id);
    if (!error) {
      setGallery(gallery.filter(g => g.id !== id));
    }
  };

  return (
    <div className="min-h-screen selection:bg-bumaye-orange selection:text-white">
      <Navbar />
      <Hero gallery={gallery} firstEvent={events[0]} />
      <Marquee />
      <section id="events" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24 relative">
            <span className="font-mono text-bumaye-orange text-xs tracking-[0.6em] uppercase mb-6 block">The Main Event</span>
            <h2 className="font-display text-8xl md:text-[12rem] uppercase leading-[0.75] tracking-tighter mb-8">
              NEXT UP
            </h2>
            <p className="max-w-xl text-white/40 font-light leading-relaxed text-xl mb-12">
              We focus on one massive experience at a time. Quality over quantity. This is what's coming next to the dancefloor.
            </p>
            <button
              onClick={() => {
                if (isAdminLoggedIn) {
                  setIsAdminOpen(true);
                } else {
                  setShowLogin(true);
                }
              }}
              className="absolute top-0 right-0 p-4 glass rounded-full hover:bg-bumaye-orange transition-all text-white/20 hover:text-white"
              title="Admin Panel"
            >
              <Settings size={20} />
            </button>
          </div>

          {events.length > 0 ? (
            <FeaturedEvent event={events[0]} onBook={setTicketUrl} />
          ) : (
            <div className="text-center py-32 glass rounded-[3rem] border border-dashed border-white/10">
              <p className="font-mono text-white/20 uppercase tracking-widest">No upcoming events scheduled</p>
            </div>
          )}
        </div>
      </section>

      <AboutSection />

      <Newsletter />
      <ContactSection />
      <Footer />

      <TicketModal
        url={ticketUrl || ''}
        isOpen={!!ticketUrl}
        onClose={() => setTicketUrl(null)}
      />

      {/* Admin login modal */}
      {showLogin && (
        <AdminLogin
          onLogin={(pw) => {
            if (pw === ADMIN_PASSWORD) {
              setIsAdminLoggedIn(true);
              setShowLogin(false);
              setLoginError(false);
              setIsAdminOpen(true);
            } else {
              setLoginError(true);
            }
          }}
          onClose={() => { setShowLogin(false); setLoginError(false); }}
          error={loginError}
        />
      )}

      {/* Admin panel alleen als ingelogd */}
      {isAdminOpen && isAdminLoggedIn && (
        <AdminPanel
          events={events}
          onAdd={handleAddEvent}
          onUpdate={handleUpdateEvent}
          onDelete={handleDeleteEvent}
          onRefresh={fetchEvents}
          onClose={() => setIsAdminOpen(false)}
          gallery={gallery}
          onGalleryAdd={handleAppGalleryAdd}
          onGalleryRemove={handleAppGalleryRemove}
        />
      )}
    </div>
  );
}
