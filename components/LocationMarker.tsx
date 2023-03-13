import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";

import { LatLng } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import useSWR from "swr";

import fetcher from "@/lib/fetcher";

type SoilPrimeAPIResponse = {
  PGA: number;
  PGV: number;
  SS: number;
  S1: number;
};

const LocationMarker = () => {
  const [position, setPosition] = useState<LatLng>();
  const { data } = useSWR<SoilPrimeAPIResponse>(
    position
      ? `https://api.soilprime.com/seismic_hazard?dyhd_no=2&latitude=${position?.lat}&longitude=${position?.lng}`
      : null,
    fetcher
  );
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    map.locate();
  }, [map]);

  return position === null ? null : (
    <Marker
      position={position || { lat: 51.505, lng: -0.09 }}
      attribution='&copy; <a href="https://www.soilprime.com/">SoilPrime</a> PGA'
    >
      <Popup>PGA: {data?.PGA}</Popup>
    </Marker>
  );
};

export default LocationMarker;
