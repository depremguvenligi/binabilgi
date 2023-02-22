import axios from "axios";
import geojsonvt from "geojson-vt";
import type { NextApiRequest, NextApiResponse } from "next";
import vtpbf from "vt-pbf";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { xyz } = req.query;

  if (xyz === undefined || typeof xyz === "string")
    return res.status(400).json({ error: "Bad Request" });

  const { data } = await axios.get(
    "https://openlayers.org/data/vector/ecoregions.json"
  );

  const tileIndex = geojsonvt(data, {});
  const tile = tileIndex.getTile(+xyz[0], +xyz[1], +xyz[2].replace(".pbf", ""));

  if (tile === null) return res.status(404).json({ error: "Not Found" });

  const buff = vtpbf.fromGeojsonVt({ geojsonLayer: tile });

  res.setHeader("Content-Type", "application/x-protobuf");
  res.setHeader("Content-Encoding", "gzip");
  res.setHeader("Content-Length", buff.length);
  res.setHeader("Content-Disposition", "attachment; filename=tile.pbf");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(buff);
};

export default handler;
