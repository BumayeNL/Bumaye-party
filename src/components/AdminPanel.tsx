import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Reorder } from 'motion/react';
import { X, Plus, Trash2, Camera, Check, Save, RefreshCw, Edit2, Database, Mail, Calendar, Palette, Copy, Download, Users, GripVertical } from 'lucide-react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';
import { type Event, type GalleryItem } from '../constants';

export const AdminPanel = ({ events, onAdd, onUpdate, onDelete, onRefresh, onClose, gallery = [], onGalleryAdd, onGalleryRemove, onGalleryReorder, logoUrl, onLogoUpload, aboutImageUrl, onAboutImageUpload, subscribers = [], contactMessages = [], onSubscriberDelete, onMessageDelete, onMessageRead, onImageUpload }: {
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
  onImageUpload?: (file: File) => Promise<string>;
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
    image: '',
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
      image: '',
      flyerUrl: '',
      status: 'upcoming'
    });
  };

  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: 'image' | 'flyerUrl') => {
    const file = e.target.files?.[0];
    if (file && onImageUpload) {
      setIsUploadingImage(true);
      try {
        const url = await onImageUpload(file);
        setNewEvent(prev => ({ ...prev, [field]: url }));
      } catch (err) {
        console.error('Upload failed:', err);
      } finally {
        setIsUploadingImage(false);
      }
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
        image: '',
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
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-black/40 uppercase ml-2">Main Image</label>
                      <input type="file" accept="image/*" onChange={e => handleFileUpload(e, 'image')} className="hidden" id="event-img" />
                      <label htmlFor="event-img" className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 cursor-pointer hover:bg-black/10 transition-all flex items-center gap-2 text-xs">
                        <Camera size={16} /> {newEvent.image ? 'CHANGE IMAGE' : 'UPLOAD IMAGE'}
                      </label>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-black/40 uppercase ml-2">Flyer (Optional)</label>
                      <input type="file" accept="image/*" onChange={e => handleFileUpload(e, 'flyerUrl')} className="hidden" id="event-flyer" />
                      <label htmlFor="event-flyer" className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 cursor-pointer hover:bg-black/10 transition-all flex items-center gap-2 text-xs">
                        <Camera size={16} /> {newEvent.flyerUrl ? 'CHANGE FLYER' : 'UPLOAD FLYER'}
                      </label>
                    </div>
                  </div>
                  <input
                    placeholder="Ticket URL"
                    value={newEvent.ticketUrl}
                    onChange={e => setNewEvent({ ...newEvent, ticketUrl: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                    required
                  />
                  <button
                    disabled={isSubmitting || isUploadingImage}
                    className="w-full bg-bumaye-orange text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-bumaye-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting || isUploadingImage ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      editingId ? <Edit2 size={20} /> : <Plus size={20} />
                    )}
                    {isUploadingImage ? 'UPLOADING...' : (isSubmitting ? 'SAVING...' : (editingId ? 'UPDATE EVENT' : 'CREATE EVENT'))}
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
                          if (file) onAboutImageUpload?.(file);
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
