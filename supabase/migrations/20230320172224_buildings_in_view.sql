create or replace function buildings_in_view(
    min_lat float,
    min_long float,
    max_lat float,
    max_long float
  ) returns setof record language sql as $$
select id,
  name,
  st_astext("location") as location
from "public"."buildings"
where location && ST_SetSRID(
    ST_MakeBox2D(
      ST_Point(min_long, min_lat),
      ST_Point(max_long, max_lat)
    ),
    4326
  ) $$;
