import axios from "axios";
import geojsonvt from "geojson-vt";
import type { NextApiRequest, NextApiResponse } from "next";
import vtpbf from "vt-pbf";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { zxy } = req.query;

  if (zxy === undefined || typeof zxy === "string")
    return res.status(400).json({ error: "Bad Request" });

  const { data } = await axios.get(
    "https://openlayers.org/data/vector/ecoregions.json"
  );

  const tileIndex = geojsonvt(data, {});
  const tile = tileIndex.getTile(+zxy[0], +zxy[1], +zxy[2].replace(".pbf", ""));

  if (tile === null) return res.status(404).json({ error: "Not Found" });

  const buff = vtpbf.fromGeojsonVt({ geojsonLayer: tile });

  res.setHeader("Content-Type", "application/x-protobuf");
  res.setHeader("Content-Length", buff.length);
  res.setHeader("Content-Disposition", `attachment; filename=${zxy[2]}.pbf`);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(buff);
};

export default handler;
