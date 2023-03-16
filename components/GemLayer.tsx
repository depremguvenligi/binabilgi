import { useLeafletContext } from "@react-leaflet/core";
import vectorTileLayer from "leaflet-vector-tile-layer";
import { useEffect } from "react";

type Props = {
  url: string;
};

const GEMLayer = ({ url }: Props) => {
  const context = useLeafletContext();

  useEffect(() => {
    const layer = vectorTileLayer(url, {
      style: {
        weight: 2,
        interactive: true,
      },
    });
    const container = context.layerContainer || context.map;

    layer.attribution =
      '&copy; <a href="https://github.com/GEMScienceTools/gem-global-active-faults">GEM</a>';

    container.addLayer(layer);

    return () => {
      container.removeLayer(layer);
    };
  });

  return null;
};

export default GEMLayer;
