import Head from "next/head";
import MVT from "ol/format/MVT";
import OSM from "ol/source/OSM";
import TileWMS from "ol/source/TileWMS";
import VectorTileSource from "ol/source/VectorTile";

import OlLayers from "@/components/ol/OlLayers";
import OlMap from "@/components/ol/OlMap";
import OlTileLayer from "@/components/ol/OlTileLayer";
import OlVectorTileLayer from "@/components/ol/OlVectorTileLayer";

const BinaBilgi = () => {
  return (
    <div>
      <Head>
        <title>Bina Bilgi</title>
      </Head>
      <OlMap center={[0, 0]} zoom={3}>
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
          {/* <OlVectorLayer
            source={
              new VectorSource({
                url: "https://openlayers.org/data/vector/ecoregions.json",
                format: new JSONFeature(),
              })
            }
          /> */}
          <OlVectorTileLayer
            source={
              new VectorTileSource({
                url: "/api/vector-tile/{z}/{x}/{y}.pbf",
                format: new MVT(),
              })
            }
          />
        </OlLayers>
      </OlMap>
    </div>
  );
};

export default BinaBilgi;
