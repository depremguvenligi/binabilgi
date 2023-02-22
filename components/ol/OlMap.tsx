import "../node_modules/ol/ol.css";

import Map from "ol/Map";
import View from "ol/View";
import React, { useEffect, useRef } from "react";

import { useMap } from "@/lib/useMap";

type Props = {
  children: React.ReactNode;
  zoom: number;
  center: [number, number];
};

const OlMap = ({ children, zoom, center }: Props) => {
  const { map, setMap, removeMap } = useMap();
  const mapId = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapId.current) throw Error("mapId is not assigned");

    let theMap = new Map({
      layers: [],
      view: new View({
        center,
        zoom,
      }),
    });

    theMap.setTarget(mapId.current);
    setMap(theMap);

    return () => {
      if (!theMap) return;
      theMap.setTarget(undefined);
      removeMap();
    };
  }, [center, zoom]);

  return (
    <div ref={mapId} className="w-full h-screen">
      {children}
    </div>
  );
};

export default OlMap;
