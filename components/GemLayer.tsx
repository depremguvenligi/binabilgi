import {
  createContainerComponent,
  createElementHook,
  createPathHook,
  LeafletContextInterface,
} from "@react-leaflet/core";
import vectorTileLayer from "leaflet-vector-tile-layer";

var faultColors: { [key: string]: string } = {
  Anticline: "grey",
  "Blind Thrust": "black",
  Dextral: "blue",
  "Dextral Transform": "blue",
  "Dextral-Normal": "blue",
  "Dextral-Oblique": "blue",
  "Dextral-Reverse": "blue",
  Normal: "red",
  "Normal-Dextral": "red",
  "Normal-Sinistral": "red",
  "Normal-Strike-Slip": "red",
  Reverse: "black",
  "Reverse-Dextral": "black",
  "Reverse-Sinistral": "black",
  "Reverse-Strike-Slip": "black",
  Sinistral: "#b936ff",
  "Sinistral Transform": "#b936ff",
  "Sinistral-Normal": "#b936ff",
  "Sinistral-Reverse": "#b936ff",
  "Spreading Ridge": "red",
  "Strike-Slip": "yellow",
  "Subduction Thrust": "black",
  Syncline: "grey",
  "": "green",
};

const createVectorTileLayer = (
  props: { [key: string]: any },
  context: LeafletContextInterface
) => {
  const layer = vectorTileLayer(props.url, {
    style: (feature: any) => {
      return {
        color: faultColors[feature.properties.slip_type] || "green",
        weight: 2,
        opacity: 1,
        interactive: true,
      };
    },
    ...props.options,
  });

  return {
    instance: layer,
    context,
  };
};

const updateVectorTileLayer = (
  instance: typeof vectorTileLayer,
  props: { [key: string]: any },
  prevProps: { [key: string]: any }
) => {
  if (props.options !== prevProps.options) {
    instance.setStyle(props.options);
  }
};

const useVectorTileLayerElement = createElementHook(
  createVectorTileLayer,
  updateVectorTileLayer
);

const useVectorTileLayer = createPathHook(useVectorTileLayerElement);

const GemLayer = createContainerComponent(useVectorTileLayer);

export default GemLayer;
