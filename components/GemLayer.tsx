import { useLeafletContext } from "@react-leaflet/core";
import vectorTileLayer from "leaflet-vector-tile-layer";
import { useEffect } from "react";

type Props = {
  url: string;
};

const GEMLayer = ({ url }: Props) => {
  const context = useLeafletContext();

  useEffect(() => {
    const layer = vectorTileLayer(url);
    const container = context.layerContainer || context.map;

    container.addLayer(layer);

    return () => {
      container.removeLayer(layer);
    };
  });

  return null;
};

export default GEMLayer;
