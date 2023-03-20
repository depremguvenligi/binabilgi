import type { NextApiRequest, NextApiResponse } from "next";

import { supabase } from "@/lib/supabaseClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await supabase.rpc("buildings_in_view", {
    min_lat: req.body.min_lat,
    min_long: req.body.min_long,
    max_lat: req.body.max_lat,
    max_long: req.body.max_long,
  });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};

export default handler;
