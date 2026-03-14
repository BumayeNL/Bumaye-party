-- Add mobile flyer column to events table
ALTER TABLE events ADD COLUMN IF NOT EXISTS flyer_mobile_url TEXT;

-- Map to flyerMobileUrl in the application
COMMENT ON COLUMN events.flyer_mobile_url IS 'TikTok format (9:16) flyer for mobile view';
