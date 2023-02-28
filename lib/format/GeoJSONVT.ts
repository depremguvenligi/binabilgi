import GeoJSON from "ol/format/GeoJSON.js";
import Projection from "ol/proj/Projection";

const GeoJSONVT = new GeoJSON({
  // Data returned from geojson-vt is in tile pixel units
  dataProjection: new Projection({
    code: "TILE_PIXELS",
    units: "tile-pixels",
    extent: [0, 0, 4096, 4096],
  }),
});

export default GeoJSONVT;
