import Head from "next/head";
import OSM from "ol/source/OSM";
import TileWMS from "ol/source/TileWMS";

import OlLayers from "@/components/ol/OlLayers";
import OlMap from "@/components/ol/OlMap";
import OlTileLayer from "@/components/ol/OlTileLayer";

const BinaBilgi = () => {
  return (
    <div>
      <Head>
        <title>Bina Bilgi</title>
      </Head>
      <OlMap center={[0, 0]} zoom={12}>
        <OlLayers>
          <OlTileLayer source={new OSM()} />
          <OlTileLayer
            source={
              new TileWMS({
                url: "https://ahocevar.com/geoserver/wms",
                params: { LAYERS: "topp:states", TILED: true },
                serverType: "geoserver",
                // Countries have transparency, so do not fade tiles:
                transition: 0,
              })
            }
          />
        </OlLayers>
      </OlMap>
    </div>
  );
};

export default BinaBilgi;
