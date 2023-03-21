import { useLeafletContext } from "@react-leaflet/core";
import { useEffect } from "react";

import GeoJsonTileLayer from "@/lib/GeoJsonTileLayer";

type Props = {
  url: string;
};

const BuildingLayer = ({ url }: Props) => {
  // Create a building layer with XYZ GeoJSON tiles
  const context = useLeafletContext();

  useEffect(() => {
    // @ts-ignore
    const layer = new GeoJsonTileLayer({ url });
    const container = context.layerContainer || context.map;

    container.addLayer(layer);

    return () => {
      container.removeLayer(layer);
    };
  });

  return null;
};

export default BuildingLayer;
