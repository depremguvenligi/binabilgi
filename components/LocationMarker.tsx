import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";

import { LatLng, Marker as LeafletMarker } from "leaflet";
import { useEffect, useMemo, useRef, useState } from "react";
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

  const markerRef = useRef<LeafletMarker>(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    [],
  )

  useEffect(() => {
    map.locate();
  }, [map]);

  return position === null ? null : (
    <Marker
      draggable={true}
      position={position || { lat: 51.505, lng: -0.09 }}
      attribution='&copy; <a href="https://www.soilprime.com/">SoilPrime</a> PGA'
      eventHandlers={eventHandlers}
      ref={markerRef}
    >
      <Popup>PGA: {data?.PGA}g</Popup>
    </Marker>
  );
};

export default LocationMarker;
