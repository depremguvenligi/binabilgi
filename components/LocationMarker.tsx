import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";

import axios from "axios";
import { LatLng } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

type SoilPrimeAPIResponse = {
  PGA: number;
  PGV: number;
  SS: number;
  S1: number;
};

const LocationMarker = () => {
  const [position, setPosition] = useState<LatLng>();
  const [pga, setPga] = useState<number>();
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      axios
        .get(
          `http://api.soilprime.com/seismic_hazard?dyhd_no=2&latitude=${e.latlng.lat}&longitude=${e.latlng.lng}`
        )
        .then((res) => {
          const data = res.data as SoilPrimeAPIResponse;
          setPga(data.PGA);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  useEffect(() => {
    map.locate();
  }, [map]);

  return position === null ? null : (
    <Marker position={position || { lat: 51.505, lng: -0.09 }}>
      <Popup>PGA: {pga}</Popup>
    </Marker>
  );
};
export default LocationMarker;
