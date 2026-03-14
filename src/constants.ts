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
  flyerMobileUrl?: string;
  status: 'upcoming' | 'sold-out' | 'past';
}

export const EVENTS: Event[] = [];

export interface GalleryItem {
  id: string;
  url: string;
  display_order?: number;
}

export const GALLERY: GalleryItem[] = [];
