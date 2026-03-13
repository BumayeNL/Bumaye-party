-- Bumaye Events tabel
-- Uitvoeren in: Supabase Dashboard → SQL Editor → New query → Run

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  date text not null,
  time text,
  location text not null,
  city text not null,
  "ticketUrl" text not null,
  image text not null,
  "flyerUrl" text,
  status text not null default 'upcoming',
  created_at timestamptz default now()
);

-- Iedereen mag events lezen (RLS)
alter table public.events enable row level security;

create policy "Events zijn publiek leesbaar"
  on public.events for select
  using (true);

create policy "Alleen authenticated users mogen events aanpassen"
  on public.events for all
  using (true)
  with check (true);

-- Bumaye Gallery tabel
create table if not exists public.gallery (
  id uuid primary key default gen_random_uuid(),
  url text not null,
  created_at timestamptz default now()
);

alter table public.gallery enable row level security;

create policy "Gallery is publiek leesbaar"
  on public.gallery for select
  using (true);

create policy "Alleen authenticated users mogen gallery aanpassen"
  on public.gallery for all
  using (true)
  with check (true);
