import type { Options } from "ol/source/OSM";
import OSM from "ol/source/OSM";

const OSMTile = (options?: Options) => {
  return new OSM({
    ...options,
  });
};

export default OSMTile;
