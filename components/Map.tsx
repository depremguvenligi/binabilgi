import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";

import { LayersControl, MapContainer, TileLayer } from "react-leaflet";

import LocationMarker from "./LocationMarker";
import MinimapControl from "./MiniMap";

const Map = () => {
  return (
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
      className="w-full h-screen"
    >
      <LayersControl position="bottomright">
        <LayersControl.Overlay name="OSM" checked>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="IBB Geology">
          <TileLayer
            attribution='&copy; <a href="https://www.ibb.gov.tr">İstanbul Büyükşehir Belediyesi</a> contributors'
            url="/tiles/ibb-geology/{z}/{x}/{y}.png"
          />
        </LayersControl.Overlay>
      </LayersControl>
      <LocationMarker />
      <MinimapControl position="topright" />
    </MapContainer>
  );
};

export default Map;
