CREATE TABLE wedding_rsvp (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  attending BOOLEAN NOT NULL,
  guests_count INTEGER DEFAULT 1,
  menu TEXT DEFAULT 'standard',
  wishes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);