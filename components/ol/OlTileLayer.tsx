import TileLayer from "ol/layer/Tile";
import type TileSource from "ol/source/Tile";
import { useEffect } from "react";

import { useMap } from "@/lib/useMap";

type Props = {
  source: TileSource;
};

const OlTileLayer = ({ source }: Props) => {
  const { map } = useMap();

  useEffect(() => {
    if (!map) return;

    let Tlayer = new TileLayer({
      source,
    });

    map.addLayer(Tlayer);

    return () => {
      map.removeLayer(Tlayer);
      return;
    };
  }, [map, source]);

  return null;
};

export default OlTileLayer;
