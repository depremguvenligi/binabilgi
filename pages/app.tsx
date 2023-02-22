import Head from "next/head";

import OlLayers from "@/components/OlLayers";
import OlMap from "@/components/OlMap";
import OlTileLayer from "@/components/OlTileLayer";
import OSMTile from "@/lib/tiles/OSMTile";
import WMSTile from "@/lib/tiles/WMSTile";

const BinaBilgi = () => {
  return (
    <div>
      <Head>
        <title>Bina Bilgi</title>
      </Head>
      <OlMap center={[0, 0]} zoom={12}>
        <OlLayers>
          <OlTileLayer source={OSMTile()} />
          <OlTileLayer
            source={WMSTile({
              url: "https://ahocevar.com/geoserver/wms",
              params: { LAYERS: "topp:states", TILED: true },
              serverType: "geoserver",
              // Countries have transparency, so do not fade tiles:
              transition: 0,
            })}
          />
        </OlLayers>
      </OlMap>
    </div>
  );
};

export default BinaBilgi;
