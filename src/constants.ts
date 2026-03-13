/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Event {
  id: string;
  title: string;
  description?: string;
  date: string;
  time?: string;
  location: string;
  city: string;
  ticketUrl: string;
  image: string;
  flyerUrl?: string;
  status: 'upcoming' | 'sold-out' | 'past';
}

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'BUMAYE - ROTTERDAM CARNIVAL SPECIAL',
    date: 'JULY 25, 2026',
    location: 'MAASSILO',
    city: 'ROTTERDAM',
    ticketUrl: 'https://eventix.shop/bumaye',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
    flyerUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1200',
    status: 'upcoming'
  },
  {
    id: '2',
    title: 'BUMAYE - AMSTERDAM ADE EDITION',
    date: 'OCTOBER 18, 2026',
    location: 'PARADISO',
    city: 'AMSTERDAM',
    ticketUrl: 'https://eventix.shop/bumaye',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    status: 'upcoming'
  },
  {
    id: '3',
    title: 'BUMAYE - UTRECHT URBAN NIGHT',
    date: 'NOVEMBER 12, 2026',
    location: 'CENTRAL STUDIOS',
    city: 'UTRECHT',
    ticketUrl: 'https://eventix.shop/bumaye',
    image: 'https://images.unsplash.com/photo-1514525253361-bee8718a74a2?auto=format&fit=crop&q=80&w=800',
    status: 'upcoming'
  },
  {
    id: '4',
    title: 'BUMAYE - ANTWERP TAKEOVER',
    date: 'DECEMBER 05, 2026',
    location: 'IKON',
    city: 'ANTWERP',
    ticketUrl: 'https://eventix.shop/bumaye',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    status: 'sold-out'
  }
];

export interface GalleryItem {
  id: string;
  url: string;
}

export const GALLERY: GalleryItem[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600' },
  { id: '2', url: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=600' },
  { id: '3', url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600' },
  { id: '4', url: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=600' },
  { id: '5', url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=600' },
  { id: '6', url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=600' },
];
