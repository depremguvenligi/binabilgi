import VectorTileLayer, { Options } from "ol/layer/VectorTile";
import { useEffect } from "react";

import { useOlMap } from "@/lib/useOlMap";

const OlVectorTileLayer = (options?: Options) => {
  const { map } = useOlMap();

  useEffect(() => {
    if (!map) return;

    let vtLayer = new VectorTileLayer({
      ...options,
    });

    map.addLayer(vtLayer);

    return () => {
      map.removeLayer(vtLayer);
      return;
    };
  }, [map, options]);

  return null;
};

export default OlVectorTileLayer;
