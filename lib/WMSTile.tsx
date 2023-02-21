import TileWMS from "ol/source/TileWMS";

type Props = {
  url: string;
  params: {
    LAYERS: string;
    Tiled: boolean;
  };
};

// FIXME: Props passing
const WMSTile = (url: Props["url"], params: Props["params"]) => {
  return new TileWMS({
    url,
    params,
  });
};

export default WMSTile;
