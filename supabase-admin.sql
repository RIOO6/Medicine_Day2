-- Run this in Supabase Dashboard -> SQL Editor.
-- Passwords must be managed by Supabase Auth, not stored in this table.

-- SIMPLE ONE-DAY WEBSITE LOGIN (no Supabase Auth)
-- This is intentionally a basic browser gate. The credentials and participant
-- rows are reachable through the public browser key while this is enabled.
create table if not exists public.admin_credentials (
  id boolean primary key default true check (id = true),
  username text not null unique,
  password text not null,
  display_name text not null,
  enabled_until timestamptz not null
);

alter table public.admin_credentials enable row level security;
drop policy if exists "Public can check active admin credentials" on public.admin_credentials;
create policy "Public can check active admin credentials"
on public.admin_credentials
for select
to anon, authenticated
using (enabled_until > now());

-- Replace these values before running this INSERT. This example lasts 12 hours.
-- insert into public.admin_credentials (username, password, display_name, enabled_until)
-- values ('event-admin', 'CHANGE-THIS-PASSWORD', 'Event Administrator', now() + interval '12 hours');

-- Without Supabase Auth, the database cannot distinguish a logged-in browser
-- from another browser using the public key. This policy is therefore required
-- for the simple website gate to load registrations.
alter table public.participants enable row level security;
drop policy if exists "Public can read participants during admin window" on public.participants;
create policy "Public can read participants during admin window"
on public.participants
for select
to anon, authenticated
using (exists (select 1 from public.admin_credentials where enabled_until > now()));

-- Enable live INSERT notifications for the employee page.
do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'participants'
  ) then
    alter publication supabase_realtime add table public.participants;
  end if;
end
$$;

