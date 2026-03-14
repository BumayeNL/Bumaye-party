/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Reorder } from 'motion/react';
import { ArrowRight, Play, Instagram, Menu, X, Plus, Trash2, Camera, Check, AlertCircle, Save, LogOut, ChevronLeft, ChevronRight, Globe, Lock, Music2, Share2, Youtube, ExternalLink, Ticket, Calendar, MapPin, Users, Mail, Send, Clock, Settings, Edit2, Database, RefreshCw, ChevronUp, ChevronDown, GripVertical, Palette, Copy, Download } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import bannerImage from './assets/bumaye-banner.png';
import heroBannerNew from './assets/hero-banner-new.png';
import { EVENTS as INITIAL_EVENTS, GALLERY, type Event, type GalleryItem } from './constants';
import { supabase, isSupabaseConfigured } from './lib/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

// --- Helpers ---

// Helper function to ensure absolute URLs
const ensureAbsoluteUrl = (url: string) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('//')) return `https:${url}`;
  return `https://${url}`;
};

// --- Components ---

const TicketModal = ({ url, isOpen, onClose }: { url: string; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  const absoluteUrl = ensureAbsoluteUrl(url);
  const lowUrl = absoluteUrl.toLowerCase();

  // Sites that usually block being in an iframe
  const isBlocked = [
    'linktr.ee',
    'instagram.com',
    'facebook.com',
    'tiktok.com',
    'spotify.com'
  ].some(site => lowUrl.includes(site));

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
            {isBlocked ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center bg-bumaye-black">
                <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center mb-8 border border-white/10">
                  <ExternalLink size={40} className="text-bumaye-orange" />
                </div>
                <h3 className="font-display text-4xl text-white mb-4 uppercase tracking-tighter">SECURE REDIRECT</h3>
                <p className="text-white/40 max-w-sm mb-12 text-lg leading-relaxed">
                  This shop requires a dedicated browser window for a secure checkout experience.
                </p>
                <a
                  href={absoluteUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                  className="px-12 py-5 bg-white text-bumaye-black rounded-2xl font-bold text-xl hover:bg-bumaye-orange hover:text-white transition-all transform hover:scale-105"
                >
                  OPEN TICKET SHOP
                </a>
              </div>
            ) : (
              <iframe
                src={absoluteUrl}
                className="w-full h-full border-none"
                title="Ticket Shop"
              />
            )}
          </div>

          <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-black/5 flex justify-between items-center">
            <p className="text-[10px] font-mono uppercase tracking-widest text-black/40">Secure Checkout via Ticket Provider</p>
            <a href={absoluteUrl} target="_blank" rel="noreferrer" className="text-[10px] font-mono uppercase tracking-widest text-bumaye-orange flex items-center gap-1 hover:underline">
              {isBlocked ? 'Link copied to clipboard' : 'Open in new tab'} <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const AdminPanel = ({ events, onAdd, onUpdate, onDelete, onRefresh, onClose, gallery = [], onGalleryAdd, onGalleryRemove, onGalleryReorder, logoUrl, onLogoUpload, aboutImageUrl, onAboutImageUpload, subscribers = [], contactMessages = [], onSubscriberDelete, onMessageDelete, onMessageRead }: {
  events: Event[];
  onAdd: (e: Omit<Event, 'id'>) => Promise<void>;
  onUpdate: (id: string, e: Omit<Event, 'id'>) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onRefresh: () => Promise<void>;
  onClose: () => void;
  gallery?: GalleryItem[];
  onGalleryAdd?: (files: File[], url: string) => Promise<void>;
  onGalleryRemove?: (id: string) => Promise<void>;
  onGalleryReorder?: (newGallery: GalleryItem[]) => void;
  logoUrl?: string;
  onLogoUpload?: (file: File) => Promise<void>;
  aboutImageUrl?: string;
  onAboutImageUpload?: (file: File) => Promise<void>;
  subscribers?: { id: string; email: string; created_at: string }[];
  contactMessages?: { id: string; name: string; email: string; subject: string; message: string; is_read: boolean; created_at: string }[];
  onSubscriberDelete?: (id: string) => Promise<void>;
  onMessageDelete?: (id: string) => Promise<void>;
  onMessageRead?: (id: string) => Promise<void>;
}) => {
  const [activeTab, setActiveTab] = useState<'events' | 'gallery' | 'branding' | 'inbox'>('events');
  // Gallery manager state
  const [galleryInput, setGalleryInput] = useState('');
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [galleryError, setGalleryError] = useState('');
  const [isGalleryUploading, setIsGalleryUploading] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

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

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopyStatus(id);
    setTimeout(() => setCopyStatus(null), 2000);
  };

  const handleExportCSV = () => {
    if (!subscribers || subscribers.length === 0) return;
    const headers = ['Email', 'Joined At'];
    const rows = subscribers.map(sub => [
      sub.email,
      new Date(sub.created_at).toLocaleString()
    ]);
    const csvContent = [headers, ...rows].map(e => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `bumaye_subscribers_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (activeTab === 'inbox') {
      onRefresh();
    }
  }, [activeTab]);

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

  const handleLogoFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onLogoUpload) {
      await onLogoUpload(file);
    }
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
      <div className="absolute inset-0 bg-bumaye-black/95 backdrop-blur-md" onClick={onClose} />
      <div className="relative z-10 w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-white rounded-3xl sm:rounded-[2.5rem] overflow-hidden flex flex-col text-bumaye-black">
        <div className="p-4 sm:p-8 border-b border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <h2 className="font-display text-4xl uppercase tracking-tighter">Admin Panel</h2>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest ${isSupabaseConfigured ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
              <Database size={12} />
              {isSupabaseConfigured ? 'Supabase Connected' : 'Local Mode'}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-4 py-2 bg-black/5 hover:bg-black/10 rounded-xl transition-all font-mono text-[10px] uppercase tracking-widest disabled:opacity-50"
            >
              <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} />
              {isRefreshing ? 'Syncing...' : 'Sync Now'}
            </button>
            <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors"><X size={24} /></button>
          </div>
        </div>

        <div className="px-8 flex border-b border-black/5">
          {[
            { id: 'events', label: 'Events', icon: <Calendar size={14} /> },
            { id: 'gallery', label: 'Gallery', icon: <Camera size={14} /> },
            { id: 'branding', label: 'Branding', icon: <Palette size={14} /> },
            { id: 'inbox', label: 'Inbox', icon: <Mail size={14} />, count: (subscribers.length + contactMessages.filter(m => !m.is_read).length) }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-4 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 border-b-2 transition-all ${activeTab === tab.id ? 'border-bumaye-orange text-bumaye-orange' : 'border-transparent text-black/40 hover:text-black'}`}
            >
              {tab.icon} {tab.label}
              {tab.count !== undefined && tab.count > 0 && (
                <span className="bg-bumaye-orange text-white px-2 py-0.5 rounded-full text-[8px]">{tab.count}</span>
              )}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto">
          {activeTab === 'events' && (
            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-black/5">
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
                    onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                    required
                  />
                  <textarea
                    placeholder="Description"
                    value={newEvent.description}
                    onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange resize-none"
                    rows={3}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      placeholder="Date (e.g. March 27, 2026)"
                      value={newEvent.date}
                      onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
                      className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                      required
                    />
                    <input
                      placeholder="Time (e.g. 23:00 - 05:00)"
                      value={newEvent.time}
                      onChange={e => setNewEvent({ ...newEvent, time: e.target.value })}
                      className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      placeholder="Location"
                      value={newEvent.location}
                      onChange={e => setNewEvent({ ...newEvent, location: e.target.value })}
                      className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                      required
                    />
                    <input
                      placeholder="City"
                      value={newEvent.city}
                      onChange={e => setNewEvent({ ...newEvent, city: e.target.value })}
                      className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                      required
                    />
                  </div>
                  <input
                    placeholder="Ticket URL"
                    value={newEvent.ticketUrl}
                    onChange={e => setNewEvent({ ...newEvent, ticketUrl: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                    required
                  />
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
          )}

          {activeTab === 'gallery' && gallery && onGalleryAdd && onGalleryRemove && (
            <div className="p-8 border-b border-black/5">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40 mb-6">Gallery Manager</h3>
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
              <Reorder.Group
                axis="x"
                values={gallery}
                onReorder={onGalleryReorder || (() => { })}
                className="flex overflow-x-auto gap-4 mt-6 pb-4 hide-scrollbar"
              >
                {gallery.map((item) => (
                  <Reorder.Item
                    key={item.id}
                    value={item}
                    className="relative flex-none w-[120px] aspect-[3/4] rounded-2xl overflow-hidden bg-black/5 border border-black/5 group"
                  >
                    {item.url.startsWith('data:video') || item.url.endsWith('.mp4') ? (
                      <video src={item.url} className="w-full h-full object-cover pointer-events-none" />
                    ) : (
                      <img src={item.url} alt="" className="w-full h-full object-cover pointer-events-none" />
                    )}

                    {/* Drag Handle Indicator */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-grab active:cursor-grabbing">
                      <GripVertical className="text-white" size={24} />
                    </div>

                    {/* Remove Control */}
                    <div className="absolute top-2 right-2 z-[60]">
                      <button
                        onPointerDown={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          handleGalleryRemoveClick(item.id);
                        }}
                        className="bg-red-500 text-white rounded-full p-2 hover:bg-red-600 shadow-xl transition-all hover:scale-110 relative pointer-events-auto"
                        title="Delete Image"
                      >
                        <Trash2 size={14} className="pointer-events-none" />
                      </button>
                    </div>
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </div>
          )}

          {activeTab === 'branding' && (
            <div className="p-8 space-y-12">
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40 mb-8">Branding Settings</h3>
                {/* Site Logo */}
                <div className="mb-12">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-black/40 mb-2 block">Site Logo</label>
                  <div className="flex items-center gap-6">
                    <div className="h-16 bg-black/5 rounded-2xl p-4 flex items-center justify-center border border-black/5 min-w-[120px]">
                      {logoUrl ? (
                        <img src={logoUrl} alt="Current Logo" className="h-full object-contain" />
                      ) : (
                        <span className="text-[10px] font-mono text-black/20">NO LOGO</span>
                      )}
                    </div>
                    <div className="relative group">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoFile}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                      />
                      <button className="bg-bumaye-black text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-bumaye-orange transition-all flex items-center gap-3">
                        <Camera size={18} /> {logoUrl ? 'Change Logo' : 'Upload Logo'}
                      </button>
                    </div>
                  </div>
                  <p className="mt-4 text-[10px] font-mono text-black/40 leading-relaxed uppercase tracking-[0.2em]">
                    Recommended: PNG or SVG with transparent background.<br />
                    Maintain a horizontal ratio. Max height: 60px.
                  </p>
                </div>

                {/* About Image Setting */}
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-black/40 mb-2 block">About Section Image</label>
                  <div className="flex items-center gap-6">
                    <div className="h-24 w-20 bg-black/5 rounded-2xl overflow-hidden border border-black/5">
                      {aboutImageUrl ? (
                        <img src={aboutImageUrl} alt="Current About" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-black/5 text-black/20 font-mono text-[8px] text-center p-2">NO IMAGE</div>
                      )}
                    </div>
                    <div className="relative group">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) onAboutImageUpload(file);
                        }}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                      />
                      <button className="bg-bumaye-black text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-bumaye-orange transition-all flex items-center gap-3">
                        <Camera size={18} /> {aboutImageUrl ? 'Change Image' : 'Upload Image'}
                      </button>
                    </div>
                  </div>
                  <p className="mt-4 text-[10px] font-mono text-black/40 leading-relaxed uppercase tracking-[0.2em]">
                    This image appears in the "What is Bumaye?" section.<br />
                    Recommended: Vertical 4:5 ratio image.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inbox' && (
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Messages */}
                <div>
                  <h3 className="font-display text-4xl mb-6 uppercase tracking-tight">Messages</h3>
                  <div className="space-y-4">
                    {!contactMessages || contactMessages.length === 0 ? (
                      <div className="p-12 text-center border border-dashed border-black/10 rounded-3xl">
                        <Mail className="mx-auto mb-4 text-black/10" size={32} />
                        <p className="text-black/40 font-mono text-xs uppercase tracking-widest">No messages yet</p>
                      </div>
                    ) : (
                      contactMessages.map(msg => (
                        <div
                          key={msg.id}
                          className={`p-6 rounded-3xl border transition-all cursor-pointer group/msg ${msg.is_read ? 'bg-black/5 border-transparent' : 'bg-white border-bumaye-orange shadow-lg'}`}
                          onMouseEnter={() => !msg.is_read && onMessageRead?.(msg.id)}
                          onClick={() => setSelectedMessage(msg)}
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full ${msg.is_read ? 'bg-black/10' : 'bg-bumaye-orange'}`} />
                              <div>
                                <h4 className="font-bold uppercase text-sm mb-1">{msg.name}</h4>
                                <div className="flex items-center gap-2">
                                  <p className="text-[10px] font-mono text-black/40 uppercase tracking-widest">{msg.email}</p>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleCopy(msg.email, msg.id);
                                    }}
                                    className="p-1 text-black/20 hover:text-bumaye-orange transition-colors"
                                    title="Copy Email"
                                  >
                                    {copyStatus === msg.id ? <Check size={10} /> : <Copy size={10} />}
                                  </button>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onMessageDelete?.(msg.id);
                              }}
                              className="text-black/10 hover:text-red-500 transition-colors p-2"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <div className="bg-black/5 p-4 rounded-xl mb-4 line-clamp-2">
                            <p className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1 text-bumaye-orange">Subject: {msg.subject}</p>
                            <p className="text-sm leading-relaxed">{msg.message}</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-mono text-bumaye-orange opacity-0 group-hover/msg:opacity-100 transition-opacity">Read Message →</span>
                            <p className="text-[8px] font-mono text-black/20 uppercase">
                              {new Date(msg.created_at).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Newsletter Subscribers */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display text-4xl uppercase tracking-tight">Subscribers</h3>
                    {subscribers && subscribers.length > 0 && (
                      <button
                        onClick={handleExportCSV}
                        className="flex items-center gap-2 px-4 py-2 bg-black/5 hover:bg-black/10 rounded-full transition-all text-xs font-mono uppercase tracking-widest text-black/40 hover:text-black"
                      >
                        <Download size={14} /> Export CSV
                      </button>
                    )}
                  </div>
                  <div className="bg-black/5 rounded-[2.5rem] p-6">
                    {!subscribers || subscribers.length === 0 ? (
                      <div className="py-12 text-center">
                        <Users className="mx-auto mb-4 text-black/10" size={32} />
                        <p className="text-black/40 font-mono text-xs uppercase tracking-widest">No subscribers yet</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {subscribers.map(sub => (
                          <div key={sub.id} className="flex items-center justify-between p-4 bg-white rounded-2xl">
                            <p className="text-xs font-mono font-bold">{sub.email}</p>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleCopy(sub.email, sub.id)}
                                className="p-2 text-black/20 hover:text-bumaye-orange transition-colors"
                                title="Copy Email"
                              >
                                {copyStatus === sub.id ? <Check size={14} /> : <Copy size={14} />}
                              </button>
                              <button
                                onClick={() => onSubscriberDelete?.(sub.id)}
                                className="p-2 text-black/10 hover:text-red-500 transition-colors"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Message View Modal */}
        <AnimatePresence>
          {selectedMessage && (
            <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-bumaye-black/98 backdrop-blur-xl"
                onClick={() => setSelectedMessage(null)}
              />
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <div className="p-12">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <span className="font-mono text-bumaye-orange text-[10px] uppercase tracking-[0.3em] mb-4 block">Information</span>
                      <h4 className="font-display text-4xl uppercase mb-2">{selectedMessage.name}</h4>
                      <div className="flex items-center gap-3">
                        <p className="text-sm font-mono text-black/40">{selectedMessage.email}</p>
                        <button
                          onClick={() => handleCopy(selectedMessage.email, 'modal-email')}
                          className="text-bumaye-orange hover:bg-bumaye-orange/10 p-2 rounded-lg transition-colors flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest font-bold"
                        >
                          {copyStatus === 'modal-email' ? <Check size={14} /> : <Copy size={14} />}
                          {copyStatus === 'modal-email' ? 'Copied' : 'Copy Email'}
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedMessage(null)}
                      className="p-3 bg-black/5 hover:bg-black/10 rounded-full transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-black/20 block mb-2">Subject</span>
                      <p className="text-xl font-bold uppercase">{selectedMessage.subject}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-black/20 block mb-2">Message</span>
                      <div className="bg-black/5 p-8 rounded-2xl">
                        <p className="text-lg leading-relaxed whitespace-pre-wrap">{selectedMessage.message}</p>
                      </div>
                    </div>
                    <div className="pt-8 border-t border-black/5 flex justify-between items-center text-[10px] font-mono text-black/20 uppercase tracking-[0.2em]">
                      <span>Sent on {new Date(selectedMessage.created_at).toLocaleString()}</span>
                      <button
                        onClick={() => {
                          onMessageDelete?.(selectedMessage.id);
                          setSelectedMessage(null);
                        }}
                        className="text-red-500 hover:underline"
                      >
                        Delete Message
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Marquee = () => {
  return (
    <div className="bg-bumaye-orange py-4 overflow-hidden whitespace-nowrap border-y border-black/10 mt-20">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >
        {[...Array(15)].map((_, i) => (
          <span key={i} className="font-display text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tighter">
            AFRO • DANCEHALL • HIPHOP • R&B • AMAPIANO •&nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Navbar = ({ logoUrl }: { logoUrl?: string }) => {
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
        <a href="#" className="flex items-center gap-2 h-8 md:h-10">
          {logoUrl ? (
            <img src={logoUrl} alt="BUMAYE" className="h-full object-contain" />
          ) : (
            <span className="font-display text-3xl tracking-tighter text-bumaye-orange">BUMAYE</span>
          )}
        </a>

        <div className="hidden md:flex items-center gap-8 font-display text-sm uppercase tracking-[0.15em]">
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bumaye-black/95 backdrop-blur-2xl z-50 flex flex-col items-center justify-center text-center p-6 sm:p-10"
          >
            <button
              className="absolute top-8 right-8 text-white/40 hover:text-bumaye-orange transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={40} />
            </button>

            <div className="flex flex-col gap-6 sm:gap-8 font-display text-4xl sm:text-6xl uppercase tracking-tighter">
              {['Events', 'About', 'Gallery', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-bumaye-orange transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-8 mt-12 sm:mt-16 w-full max-w-xs"
            >
              <button className="w-full bg-bumaye-orange text-white py-5 rounded-3xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-bumaye-orange/40">
                TICKETS KOPEN
              </button>

              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/bumaye.nl"
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 glass rounded-full text-bumaye-orange hover:bg-bumaye-orange hover:text-white transition-all"
                >
                  <Instagram size={32} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ gallery, firstEvent }: { gallery: GalleryItem[], firstEvent?: Event }) => {
  return (
    <section 
      className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-start md:justify-center pt-24 md:pt-32 pb-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBannerNew})` }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.3),transparent_70%)]" />
        {/* Smooth transition to next section */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-bumaye-black via-bumaye-black/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/20">
            <span className="w-2 h-2 bg-white rounded-full animate-ping" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white">Next Event: Rotterdam • March 27</span>
          </div>

          <div className="relative mb-8 md:mb-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative inline-block"
            >
              <img
                src={bannerImage}
                alt="BUMAYE!"
                className="w-[80vw] md:w-[50vw] max-w-[800px] h-auto drop-shadow-[0_20px_50px_rgba(251,27,129,0.4)] transform -rotate-1 select-none pointer-events-none mb-4"
              />
            </motion.div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 md:mt-10 font-display text-lg sm:text-xl md:text-[2.2vw] tracking-[0.15em] uppercase text-white drop-shadow-lg flex items-center justify-center gap-2 md:gap-4 flex-wrap"
            >
              <span>HIPHOP</span>
              <span className="text-white/40">X</span>
              <span>R&B</span>
              <span className="text-white/40">X</span>
              <span>AFRO</span>
              <span className="text-white/40">X</span>
              <span>DANCEHALL</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a href={firstEvent ? firstEvent.ticketUrl : "#"} target={firstEvent ? "_blank" : "_self"} rel="noreferrer" className="group bg-white text-bumaye-black px-8 py-3.5 rounded-full font-bold text-base flex items-center gap-3 hover:bg-bumaye-pink hover:text-white transition-all shadow-2xl shadow-black/20">
            GET TICKETS <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
          <button className="group bg-black/10 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded-full font-bold text-base flex items-center gap-3 hover:bg-white/10 transition-all">
            WATCH TEASER <Play size={18} className="fill-current" />
          </button>
        </motion.div>

        {/* Hero Gallery Section */}
        {gallery && gallery.length > 0 && (
          <div className="mt-16 md:mt-40 w-full text-left">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 mb-8">
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter text-white drop-shadow-md">THE VIBE</h2>
              <a
                href="https://www.instagram.com/bumaye.nl"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] hover:text-bumaye-orange transition-colors"
              >
                Follow @bumaye.nl <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <div className="flex overflow-x-auto gap-6 hide-scrollbar snap-x snap-mandatory pb-4">
              {gallery.slice(0, 12).map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                  className="flex-none w-[180px] md:w-[240px] aspect-[3/4] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 snap-start"
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
      className="relative w-full max-w-6xl mx-auto bg-white/5 rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10"
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

        <div className="p-6 md:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-4 sm:gap-6 mb-6 md:mb-8">
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
              className={`flex-1 py-6 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all text-lg ${event.status === 'sold-out'
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
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    const { error } = await supabase
      .from('subscribers')
      .insert([{ email }]);

    if (error) {
      if (error.code === '23505') { // Unique violation
        setStatus('success'); // Assume already subscribed as success
      } else {
        setStatus('error');
      }
      return;
    }

    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto glass rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-bumaye-orange/5 -z-10" />
        <Mail className="mx-auto mb-6 text-bumaye-orange" size={32} />
        <h2 className="font-display text-4xl md:text-6xl uppercase mb-4 leading-none">JOIN THE TRIBE</h2>
        <p className="text-white/40 max-w-lg mx-auto mb-10 text-base">
          Subscribe to get early access to tickets, exclusive line-up reveals, and special discounts.
        </p>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-bumaye-orange/20 text-bumaye-orange py-4 px-8 rounded-2xl inline-block font-bold"
          >
            WELCOME TO THE FAMILY! CHECK YOUR INBOX SOON.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors font-mono text-sm"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-white text-bumaye-black px-8 py-4 rounded-2xl font-bold hover:bg-bumaye-orange hover:text-white transition-all flex items-center justify-center gap-2"
            >
              {status === 'loading' ? 'SUBMITTING...' : 'JOIN'} <Send size={18} />
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-red-500 mt-4 text-xs font-mono">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase
      .from('contact_messages')
      .insert([formData]);

    if (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      return;
    }

    setStatus('success');
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        <div>
          <span className="font-mono text-bumaye-orange text-xs tracking-widest uppercase mb-4 block">Get in Touch</span>
          <h2 className="font-display text-5xl sm:text-7xl uppercase mb-8 leading-none">WANT TO<br />COLLABORATE?</h2>
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

        <div className="glass rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 relative overflow-hidden">
          {status === 'success' && (
            <div className="absolute inset-0 z-10 bg-bumaye-black/90 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 bg-bumaye-orange/20 rounded-full flex items-center justify-center mb-6">
                <Send size={32} className="text-bumaye-orange" />
              </div>
              <h3 className="font-display text-4xl mb-4 uppercase">MESSAGE SENT!</h3>
              <p className="text-white/60 mb-8 max-w-xs">We've received your inquiry and will get back to you shortly.</p>
              <button
                onClick={() => setStatus('idle')}
                className="text-bumaye-orange font-mono text-xs tracking-widest uppercase hover:underline"
              >
                Send another message
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-2">Name</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors"
                  disabled={status === 'loading'}
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-2">Email</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors"
                  disabled={status === 'loading'}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-2">Subject</label>
              <select
                value={formData.subject}
                onChange={e => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors appearance-none"
                disabled={status === 'loading'}
              >
                <option className="bg-bumaye-black">General Inquiry</option>
                <option className="bg-bumaye-black">DJ / Artist Booking</option>
                <option className="bg-bumaye-black">Partnership</option>
                <option className="bg-bumaye-black">Press</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-2">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors resize-none"
                disabled={status === 'loading'}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-bumaye-orange text-white py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-bumaye-black transition-all flex items-center justify-center gap-3"
            >
              {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'} <Send size={20} />
            </button>
            {status === 'error' && (
              <p className="text-red-500 text-center text-xs font-mono">Failed to send. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const AboutSection = ({ imageUrl }: { imageUrl?: string }) => {
  return (
    <section id="about" className="py-8 md:py-12 px-4 md:px-6 bg-white text-bumaye-black rounded-[2rem] sm:rounded-[3rem] mx-4 my-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative group w-full mx-auto lg:max-w-none">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-black/5">
              <img
                src={imageUrl || "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=800"}
                alt="Bumaye Crowd"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <span className="font-mono text-bumaye-orange text-[10px] uppercase tracking-[0.4em] mb-3 block">The Movement</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase mb-6 leading-[0.9] tracking-tighter">WHAT IS<br />BUMAYE?</h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-bumaye-black/70 font-light max-w-md mx-auto lg:mx-0">
              <p>
                Bumaye is more than an event — it's a feeling.
                A space where good energy, love and freedom hit different. Where you walk in as a stranger and leave as family.
              </p>
              <p>
                Come as you are. Dance like nobody's watching. From Afrobeats to Dancehall, R&B to Amapiano — we keep the vibes high and the love higher. See you on the next one ♥.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onAdminClick }: { onAdminClick: () => void }) => {
  return (
    <footer className="bg-bumaye-black border-t border-white/10 pt-32 pb-10 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none hidden sm:block">
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
            <button onClick={onAdminClick} className="hover:text-white transition-colors opacity-50 lowercase">admin</button>
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
  const [logoUrl, setLogoUrl] = useState<string>('');
  const [aboutImageUrl, setAboutImageUrl] = useState<string>('');
  const [subscribers, setSubscribers] = useState<{ id: string; email: string; created_at: string }[]>([]);
  const [messages, setMessages] = useState<{ id: string; name: string; email: string; subject: string; message: string; is_read: boolean; created_at: string }[]>([]);

  useEffect(() => {
    if (isAdminOpen) {
      fetchInbox();
    }
  }, [isAdminOpen]);

  // Handle booking click - check if URL is embeddable or needs new tab
  const handleBook = (url: string) => {
    if (!url) return;
    const absUrl = ensureAbsoluteUrl(url);
    setTicketUrl(absUrl);
  };

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

  // Helper function to compress images and handle transparency
  const compressImage = (file: File): Promise<string> => new Promise((resolve) => {
    // Skip processing for SVG or if transparency is absolutely critical and we don't want to risk it
    if (file.type === 'image/svg+xml') {
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
        if (ctx) {
          // Ensure canvas is clear for transparency
          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);
        }

        // Preserve transparency for PNGs by using image/png
        const isPng = file.type === 'image/png';
        const mimeType = isPng ? 'image/png' : 'image/jpeg';
        const quality = isPng ? 1.0 : 0.6; // High quality for PNG to keep details

        const dataUrl = canvas.toDataURL(mimeType, quality);

        // Final sanity check: if the compressed version is somehow way larger (rare), maybe return original
        // For now, we trust the transparency fix
        resolve(dataUrl);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });

  useEffect(() => {
    fetchEvents();
    fetchGallery();
    fetchSettings();
    fetchInbox();
  }, []);

  const fetchInbox = async () => {
    if (!isSupabaseConfigured) return;

    const [subs, msgs] = await Promise.all([
      supabase.from('subscribers').select('*').order('created_at', { ascending: false }),
      supabase.from('contact_messages').select('*').order('created_at', { ascending: false })
    ]);

    if (subs.data) setSubscribers(subs.data);
    if (msgs.data) setMessages(msgs.data);
  };

  const handleRefreshAll = async () => {
    await Promise.all([
      fetchEvents(),
      fetchGallery(),
      fetchSettings(),
      fetchInbox()
    ]);
  };

  const fetchSettings = async () => {
    if (!isSupabaseConfigured) return;

    const { data, error } = await supabase
      .from('settings')
      .select('*');

    if (!error && data) {
      const settingsMap: Record<string, string> = {};
      data.forEach((s: any) => { settingsMap[s.key] = s.value; });
      if (settingsMap.logo_url) setLogoUrl(settingsMap.logo_url);
      if (settingsMap.about_image_url) setAboutImageUrl(settingsMap.about_image_url);
    }
  };

  const fetchGallery = async () => {
    if (!isSupabaseConfigured) return;

    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('display_order', { ascending: true, nullsFirst: false });

    if (error && error.message.includes('display_order')) {
      // Fallback: fetch without ordering if display_order is missing
      const fallback = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

      if (!fallback.error && fallback.data) {
        setGallery(fallback.data);
      }
      return;
    }

    if (error) {
      console.error('Error fetching gallery:', error);
      return;
    }

    if (data) {
      setGallery(data.length > 0 ? data : []);
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
    const newItems: Partial<GalleryItem>[] = [];
    const maxOrder = gallery.length > 0 ? Math.max(...gallery.map(g => g.display_order || 0)) : 0;

    let currentOrder = maxOrder + 1;
    for (const file of files) {
      newItems.push({
        id: Math.random().toString(36).substring(2, 9),
        url: await compressImage(file),
        display_order: currentOrder++
      });
    }

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

    // Insert into supabase
    let insertResult = await supabase
      .from('gallery')
      .insert(newItems.map(item => ({ url: item.url, display_order: item.display_order })))
      .select();

    if (insertResult.error && insertResult.error.message.includes('display_order')) {
      // Fallback: try inserting without display_order if the column doesn't exist yet
      insertResult = await supabase
        .from('gallery')
        .insert(newItems.map(item => ({ url: item.url })))
        .select();
    }

    if (insertResult.error) {
      alert("Error: Database upload failed. " + insertResult.error.message);
    } else if (insertResult.data) {
      setGallery([...gallery, ...insertResult.data]);
    }
  };

  const handleAppGalleryReorder = (newGallery: GalleryItem[]) => {
    // Update local state immediately for responsiveness
    const updatedGallery = newGallery.map((item, index) => ({
      ...item,
      display_order: index + 1
    }));

    setGallery(updatedGallery);

    // Sync to database if configured
    if (isSupabaseConfigured) {
      syncGalleryOrder(updatedGallery);
    }
  };

  const syncGalleryOrder = async (orderedGallery: GalleryItem[]) => {
    // Perform updates in parallel
    const updates = orderedGallery.map((item) =>
      supabase
        .from('gallery')
        .update({ display_order: item.display_order })
        .eq('id', item.id)
    );

    const results = await Promise.all(updates);
    const errors = results.filter(r => r.error);
    if (errors.length > 0) {
      console.error('Error syncing gallery order:', errors);
    }
  };

  const handleLogoUpload = async (file: File) => {
    // Reuse compressImage for logo too
    const compressedDataUrl = await compressImage(file);

    if (!isSupabaseConfigured) {
      setLogoUrl(compressedDataUrl);
      return;
    }

    const { error } = await supabase
      .from('settings')
      .upsert({ key: 'logo_url', value: compressedDataUrl })
      .select();

    if (error) {
      console.error('Error uploading logo:', error);
      alert('Er is iets misgegaan bij het uploaden van het logo.');
      return;
    }

    setLogoUrl(compressedDataUrl);
  };

  const handleAboutImageUpload = async (file: File) => {
    const compressedDataUrl = await compressImage(file);

    if (!isSupabaseConfigured) {
      setAboutImageUrl(compressedDataUrl);
      return;
    }

    const { error } = await supabase
      .from('settings')
      .upsert({ key: 'about_image_url', value: compressedDataUrl })
      .select();

    if (error) {
      console.error('Error uploading about image:', error);
      alert('Er is iets misgegaan bij het uploaden van de afbeelding.');
      return;
    }

    setAboutImageUrl(compressedDataUrl);
  };

  const handleSubscriberDelete = async (id: string) => {
    if (!isSupabaseConfigured) return;
    const { error } = await supabase.from('subscribers').delete().eq('id', id);
    if (!error) setSubscribers(subscribers.filter(s => s.id !== id));
  };

  const handleMessageDelete = async (id: string) => {
    if (!isSupabaseConfigured) return;
    const { error } = await supabase.from('contact_messages').delete().eq('id', id);
    if (!error) setMessages(messages.filter(m => m.id !== id));
  };

  const handleMessageRead = async (id: string) => {
    if (!isSupabaseConfigured) return;
    const { error } = await supabase.from('contact_messages').update({ is_read: true }).eq('id', id);
    if (!error) setMessages(messages.map(m => m.id === id ? { ...m, is_read: true } : m));
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
    <div className="min-h-screen selection:bg-bumaye-orange selection:text-white overflow-x-hidden">
      <Navbar logoUrl={logoUrl} />
      <Hero gallery={gallery} firstEvent={events[0]} />
      <Marquee />
      <section id="events" className="py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12 md:mb-24 relative">
            <span className="font-mono text-bumaye-orange text-xs tracking-[0.6em] uppercase mb-6 block">The Main Event</span>
            <h2 className="font-display text-6xl md:text-[12rem] uppercase leading-[0.75] tracking-tighter mb-8">
              NEXT UP
            </h2>
            <p className="max-w-xl text-white/40 font-light leading-relaxed text-xl mb-12">
              where genres blend & nations fuse.
            </p>
          </div>

          {events.length > 0 ? (
            <FeaturedEvent event={events[0]} onBook={handleBook} />
          ) : (
            <div className="text-center py-32 glass rounded-[3rem] border border-dashed border-white/10">
              <p className="font-mono text-white/20 uppercase tracking-widest">No upcoming events scheduled</p>
            </div>
          )}
        </div>
      </section>

      <AboutSection imageUrl={aboutImageUrl} />

      <Newsletter />
      <ContactSection />
      <Footer onAdminClick={() => {
        if (isAdminLoggedIn) {
          setIsAdminOpen(true);
        } else {
          setShowLogin(true);
        }
      }} />

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
        />
      )}
    </div>
  );
}
