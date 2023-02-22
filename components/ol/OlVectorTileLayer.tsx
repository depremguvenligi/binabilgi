import VectorTileLayer, { Options } from "ol/layer/VectorTile";
import { useEffect } from "react";

import { useMap } from "@/lib/useMap";

const OlVectorTileLayer = (options?: Options) => {
  const { map } = useMap();

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
