-- Add mobile flyer column to events table (camelCase to match existing columns)
ALTER TABLE events ADD COLUMN IF NOT EXISTS "flyerMobileUrl" TEXT;
