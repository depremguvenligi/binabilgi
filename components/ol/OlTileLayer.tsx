import { Options } from "ol/layer/BaseTile";
import TileLayer from "ol/layer/Tile";
import type TileSource from "ol/source/Tile";
import { useEffect } from "react";

import { useOlMap } from "@/lib/useOlMap";

const OlTileLayer = (options: Options<TileSource>) => {
  const { map } = useOlMap();

  useEffect(() => {
    if (!map) return;

    let Tlayer = new TileLayer({ ...options });

    map.addLayer(Tlayer);

    return () => {
      map.removeLayer(Tlayer);
      return;
    };
  }, [map, options]);

  return null;
};

export default OlTileLayer;
