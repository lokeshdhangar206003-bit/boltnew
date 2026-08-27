/*
# Create admission inquiries and contact message tables

This migration creates two tables to store public form submissions from the
GC Genius Public School website. The site has no sign-in screen, so submissions
are made by anonymous visitors using the Supabase anon key.

1. New Tables
- `admission_inquiries`: stores parent admission inquiry form submissions.
  - id (uuid, primary key)
  - student_name (text, not null)
  - grade_applying (text, not null)
  - parent_name (text, not null)
  - phone (text, not null) — Indian +91 format
  - email (text, not null)
  - message (text, optional additional notes)
  - created_at (timestamptz, defaults to now)
- `contact_messages`: stores general contact form submissions.
  - id (uuid, primary key)
  - name (text, not null)
  - email (text, not null)
  - phone (text, optional)
  - subject (text, not null)
  - message (text, not null)
  - created_at (timestamptz, defaults to now)

2. Security
- RLS enabled on both tables.
- INSERT-only access granted to anon + authenticated (public can submit forms).
- No SELECT/UPDATE/DELETE policies — submissions are write-only from the public
  client to protect visitor data; management reads via the service role.

3. Notes
- These are intentionally public write tables (no user accounts on this site).
- The `USING (true)` pattern is NOT used; instead only INSERT is allowed.
*/

CREATE TABLE IF NOT EXISTS admission_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  grade_applying text NOT NULL,
  parent_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admission_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON admission_inquiries;
CREATE POLICY "anon_insert_inquiries"
ON admission_inquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_messages;
CREATE POLICY "anon_insert_contact"
ON contact_messages FOR INSERT
TO anon, authenticated WITH CHECK (true);
