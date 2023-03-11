create extension if not exists moddatetime schema extensions;

create type public.building_types as enum('residential', 'workplace', 'mixed', 'public');
create type public.energy_classes as enum('A', 'B', 'C', 'D', 'E', 'F', 'G');
create type public.constructor_types as enum(
  'general',
  'architect',
  'engineer',
  'contractor',
  'inspector',
  'other'
);

create table public.contractors (
  id bigint generated by default as identity primary key,
  inserted_at timestamp with time zone default timezone ('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone ('utc'::text, now()) not null,
  name text,
  type constructor_types not null
);

create index contractors_name_idx on public.contractors using btree (name);

create trigger handle_updated_at before
update on public.contractors for each row execute procedure moddatetime(updated_at);

create table public.buildings (
  id bigint generated by default as identity primary key,
  inserted_at timestamp with time zone default timezone ('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone ('utc'::text, now()) not null,
  name text,
  type building_types not null,
  location point not null,
  address text,
  floor integer,
  year integer,
  energy_class energy_classes,
  constructor_id bigint,
  architect_id bigint,
  inspector_id bigint,
  constraint constructor_id foreign key (constructor_id) references contractors (id) on delete restrict,
  constraint architect_id foreign key (architect_id) references contractors (id) on delete restrict,
  constraint inspector_id foreign key (inspector_id) references contractors (id) on delete restrict
);

create index buildings_location_idx on public.buildings using gist (location);
create index buildings_name_idx on public.buildings using btree (name);

create trigger handle_updated_at before
update on public.buildings for each row execute procedure moddatetime(updated_at);

create table public.reports (
  id bigint generated by default as identity primary key,
  inserted_at timestamp with time zone default timezone ('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone ('utc'::text, now()) not null,
  comment text,
  url text,
  building_id bigint not null,
  user_id uuid not null,
  constraint building_id foreign key (building_id) references buildings (id) on delete restrict,
  constraint user_id foreign key (user_id) references next_auth.users (id) on delete restrict
);

create index reports_building_id_idx on public.reports using btree (building_id);
create index reports_user_id_idx on public.reports using btree (user_id);

create trigger handle_updated_at before
update on public.reports for each row execute procedure moddatetime(updated_at);
