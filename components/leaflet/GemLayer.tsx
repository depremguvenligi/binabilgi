import {
  createContainerComponent,
  createElementHook,
  createPathHook,
  LeafletContextInterface,
} from "@react-leaflet/core";
import vectorTileLayer from "leaflet-vector-tile-layer";
import { defaultFeatureLayer } from "leaflet-vector-tile-layer";

const faultColors: { [key: string]: string } = {
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
    featureToLayer: (
      feature: any,
      layerName: string,
      pxPerExtent: any,
      options: { [key: string]: any }
    ) => {
      const layer = defaultFeatureLayer(
        feature,
        layerName,
        pxPerExtent,
        options
      );
      layer.bindPopup(
        // List all properties of the feature
        Object.keys(feature.properties)
          .map((key) => {
            return `<b>${key}</b>: ${feature.properties[key]}`;
          })
          .join("<br />")
      );

      return layer;
    },
    style: (feature: any) => {
      return {
        color: faultColors[feature.properties.slip_type] || "green",
        weight: 3,
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
