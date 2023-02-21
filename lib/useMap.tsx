import OLMap from "ol/Map";
import { createContext, useContext, useState } from "react";

type ContextType = {
  map: OLMap | null;
  // eslint-disable-next-line unused-imports/no-unused-vars
  setMap: (map: OLMap) => void;
  removeMap: () => void;
};

const OLMapContextDefault: ContextType = {
  map: null,
  setMap: () => {},
  removeMap: () => {},
};

const OLMapContext = createContext<ContextType>(OLMapContextDefault);

type Props = {
  children: React.ReactNode;
};

const OLMapProvider = ({ children }: Props) => {
  const [map, setMap] = useState<OLMap | null>(null);

  return (
    <OLMapContext.Provider
      value={{ map, setMap, removeMap: () => setMap(null) }}
    >
      {children}
    </OLMapContext.Provider>
  );
};

const useMap = () => {
  const context = useContext(OLMapContext);
  if (context === undefined) {
    throw new Error("useMap must be used within a MapProvider");
  }
  return context;
};

export { OLMapProvider, useMap };
