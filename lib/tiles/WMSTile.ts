import type { Options } from "ol/source/TileWMS";
import TileWMS from "ol/source/TileWMS";

const WMSTile = (options: Options) => {
  return new TileWMS({
    ...options,
  });
};

export default WMSTile;
