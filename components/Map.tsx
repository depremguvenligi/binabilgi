import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";

import { LayersControl, MapContainer, TileLayer } from "react-leaflet";

import GEMLayer from "./GemLayer";
import LocationMarker from "./LocationMarker";
import MinimapControl from "./MiniMap";

const Map = () => {
  return (
    <MapContainer
      center={{ lat: 41.0, lng: 28.98 }}
      zoom={13}
      className="w-full h-screen"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayersControl position="bottomright">
        <LayersControl.Overlay name="GEM">
          <GEMLayer url="/api/vector-tile/{z}/{x}/{y}.pbf" />
        </LayersControl.Overlay>
      </LayersControl>
      <LocationMarker />
      <MinimapControl position="topright" />
    </MapContainer>
  );
};

export default Map;
