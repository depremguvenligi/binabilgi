import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";

import {
  LayerGroup,
  LayersControl,
  MapContainer,
  TileLayer,
} from "react-leaflet";

import GemLayer from "./GemLayer";
import LocationMarker from "./LocationMarker";
import MinimapControl from "./MiniMap";

const Map = () => {
  return (
    <MapContainer
      center={{ lat: 41.0, lng: 28.98 }}
      zoom={13}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MinimapControl position="topright" />
      <LayersControl position="bottomright">
        <LayersControl.Overlay name="GEM">
          <LayerGroup attribution='&copy; <a href="https://github.com/GEMScienceTools/gem-global-active-faults">GEM</a>'>
            <GemLayer url="/api/gem/{z}/{x}/{y}.pbf" />
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
