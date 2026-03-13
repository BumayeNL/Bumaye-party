import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Helper to check if a string is a valid URL
const isValidUrl = (url: string | undefined): url is string => {
  if (!url) return false;
  try {
    new URL(url);
    return url.startsWith('http');
  } catch {
    return false;
  }
};

export const isSupabaseConfigured = isValidUrl(supabaseUrl) && Boolean(supabaseAnonKey);

// We use a safe placeholder to prevent the constructor from throwing.
// The SDK validates the URL format strictly.
const SAFE_URL = 'https://placeholder.supabase.co';
const SAFE_KEY = 'placeholder';

export const supabase = createClient(
  isSupabaseConfigured ? supabaseUrl! : SAFE_URL,
  isSupabaseConfigured ? supabaseAnonKey! : SAFE_KEY
);
