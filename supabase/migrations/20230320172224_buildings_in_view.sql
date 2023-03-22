set check_function_bodies = off;
CREATE OR REPLACE FUNCTION public.buildings_in_view(
    min_lat double precision,
    min_long double precision,
    max_lat double precision,
    max_long double precision
  ) RETURNS SETOF record LANGUAGE sql AS $function$
select id,
  name,
  st_astext(location) as location
from public.buildings
where location && ST_SetSRID(
    ST_MakeBox2D(
      ST_Point(min_long, min_lat),
      ST_Point(max_long, max_lat)
    ),
    4326
  ) $function$;
