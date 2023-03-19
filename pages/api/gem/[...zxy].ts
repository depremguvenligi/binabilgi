import { readFileSync } from "fs";
import geojsonvt from "geojson-vt";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import vtpbf from "vt-pbf";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { zxy } = req.query;

  if (zxy === undefined || typeof zxy === "string")
    return res.status(400).json({ error: "Bad Request" });

  const file = path.join(
    process.cwd(),
    "public",
    "gem_active_faults.geojson"
  );

  const data = readFileSync(file, "utf8");

  const tileIndex = geojsonvt(JSON.parse(data), {});
  const tile = tileIndex.getTile(+zxy[0], +zxy[1], +zxy[2].replace(".pbf", ""));

  if (tile === null) return res.status(404).json({ error: "Not Found" });

  const buff = vtpbf.fromGeojsonVt({ geojsonLayer: tile });

  res.setHeader("Content-Type", "application/x-protobuf");
  res.setHeader("Content-Length", buff.length);
  res.setHeader("Content-Disposition", `attachment; filename=${zxy[2]}`);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=86400");
  res.end(buff);
};

export default handler;
