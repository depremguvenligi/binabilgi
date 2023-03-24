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
      {/* <BuildingLayer url="https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json" /> */}
      <MinimapControl position="topright" />
      <LayersControl position="bottomright">
        <LayersControl.Overlay name="GEM Global Active Faults">
          <LayerGroup attribution='&copy; <a href="https://github.com/GEMScienceTools/gem-global-active-faults">GEM</a>'>
            <GemLayer url="/api/gem/{z}/{x}/{y}.pbf" />
          </LayerGroup>
        </LayersControl.Overlay>
        {process.env.NEXT_PUBLIC_SUPABASE_IBB_GEOLOGY_BUCKET && (
          <LayersControl.Overlay name="Istanbul Municipality Geology">
            <TileLayer
              attribution='&copy; <a href="https://www.ibb.gov.tr">İstanbul Büyükşehir Belediyesi</a>'
              url={
                process.env.NEXT_PUBLIC_SUPABASE_IBB_GEOLOGY_BUCKET +
                "/{z}/{x}/{y}.png"
              }
            />
          </LayersControl.Overlay>
        )}
      </LayersControl>
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
