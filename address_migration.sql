-- Add address and zipcode columns to events table
ALTER TABLE events ADD COLUMN IF NOT EXISTS address TEXT;
ALTER TABLE events ADD COLUMN IF NOT EXISTS zipcode TEXT;
