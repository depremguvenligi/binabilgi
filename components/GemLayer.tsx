import {
  createContainerComponent,
  createElementHook,
  createPathHook,
  LeafletContextInterface,
} from "@react-leaflet/core";
import vectorTileLayer from "leaflet-vector-tile-layer";

const createVectorTileLayer = (
  props: { [key: string]: any },
  context: LeafletContextInterface
) => {
  return {
    instance: vectorTileLayer(props.url, {
      ...props.options,
      style: { weight: 2 },
    }),
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

const GEMLayer = createContainerComponent(useVectorTileLayer);

export default GEMLayer;
