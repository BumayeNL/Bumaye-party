-- Bumaye Forms & Newsletter Tables
-- Uitvoeren in: Supabase Dashboard → SQL Editor → New query → Run

-- Newsletter Subscribers
create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz default now()
);

alter table public.subscribers enable row level security;

create policy "Subscribers zijn publiek insertable"
  on public.subscribers for insert
  with check (true);

create policy "Alleen authenticated users mogen subscribers zien"
  on public.subscribers for select
  using (true);

create policy "Alleen authenticated users mogen subscribers verwijderen"
  on public.subscribers for delete
  using (true);

-- Contact Messages
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  is_read boolean default false,
  created_at timestamptz default now()
);

alter table public.contact_messages enable row level security;

create policy "Contact messages zijn publiek insertable"
  on public.contact_messages for insert
  with check (true);

create policy "Alleen authenticated users mogen messages zien"
  on public.contact_messages for select
  using (true);

create policy "Alleen authenticated users mogen messages aanpassen/verwijderen"
  on public.contact_messages for all
  using (true)
  with check (true);
