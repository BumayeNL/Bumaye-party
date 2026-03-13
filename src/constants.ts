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

// Mock data verwijderd. Data wordt nu uit Supabase gehaald.
export const EVENTS: Event[] = [];

export const GALLERY: string[] = [];
