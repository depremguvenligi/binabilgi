import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NODE_ENV === "development"
    ? "http://localhost:54321"
    : `https://${process.env.SUPABASE_PROJECT_ID!}.supabase.co`,
  process.env.SUPABASE_KEY!
);
