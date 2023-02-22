import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_API_URL!
    ? process.env.SUPABASE_API_URL!
    : "http://localhost:54321",
  process.env.SUPABASE_KEY!
);
