import { Options } from "ol/layer/BaseVector";
import VectorLayer from "ol/layer/Vector";
import type VectorSource from "ol/source/Vector";
import { useEffect } from "react";

import { useMap } from "@/lib/useMap";

const OlVectorLayer = (options: Options<VectorSource>) => {
  const { map } = useMap();

  useEffect(() => {
    if (!map) return;

    let vLayer = new VectorLayer({
      ...options,
    });

    map.addLayer(vLayer);

    return () => {
      map.removeLayer(vLayer);
      return;
    };
  }, [map, options]);

  return null;
};

export default OlVectorLayer;
