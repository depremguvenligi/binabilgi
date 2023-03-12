import { useLeafletContext } from "@react-leaflet/core";
import { GeoJsonObject } from "geojson";
import type { Map } from "leaflet";
import L from "leaflet";
import { useEffect } from "react";

type Props = {
  url: string;
};

const BuildingLayer = ({ url }: Props) => {
  // @ts-ignore
  L.GeoJSONTileLayer = L.GridLayer.extend({
    includes: L.Evented.prototype,

    url: null,
    map: null,
    layer: null,
    features: null,
    cache: null,

    //
    // Leaflet layer methods
    //
    initialize(url: string, options: { [key: string]: any }) {
      this.url = url;
      this.layer = new L.GeoJSON(null as unknown as GeoJsonObject, options);
      this.features = {};
      this.cache = {};
      // @ts-ignore
      L.GridLayer.prototype.initialize.call(this, options);
    },

    createTile(coords: any, done: any) {
      var tile = L.DomUtil.create("div", "leaflet-tile");
      tile.style["boxShadow"] = "inset 0 0 2px #f00";
      var url = this._expandUrl(this.url, coords);
      if (this.cache[coords]) {
        done.call(this);
      } else {
        this._ajaxRequest(
          "GET",
          url,
          false,
          this._updateCache.bind(this, done, coords)
        );
      }
      return tile;
    },

    onAdd(map: Map) {
      L.GridLayer.prototype.onAdd.call(this, map);
      map.addLayer(this.layer);
      this.map = map;
      map.on("zoomanim", this._onZoomAnim.bind(this));
      this.on("loading", this._onLoading.bind(this));
      this.on("tileload", this._onTileLoad.bind(this));
      this.on("tileunload", this._onTileUnLoad.bind(this));
    },

    onRemove(map: Map) {
      this.off("tileunload", this._onTileUnLoad.bind(this));
      this.off("tileload", this._onTileLoad.bind(this));
      this.off("loading", this._onLoading.bind(this));
      map.off("zoomanim", this._onZoomAnim.bind(this));
      this.map = null;
      map.removeLayer(this.layer);
      L.GridLayer.prototype.onRemove.call(this, map);
    },

    //
    // Custom methods
    //
    _expandUrl: function (template: string, coords: any) {
      return L.Util.template(template, coords);
    },

    _updateTiles: function () {
      this.layer.clearLayers();
      this.features = {};
      for (var coords in this.cache) {
        if (this.cache.hasOwnProperty(coords)) {
          this._drawTile(coords);
        }
      }
    },

    _drawTile(coords: any) {
      var geoData = this.cache[coords];
      if (geoData.type == "FeatureCollection") {
        geoData = geoData.features;
      }
      for (var i = 0; i < geoData.length; i++) {
        var id = geoData[i].id;
        if (!this.features[id]) {
          this.layer.addData(geoData[i]);
          this.features[id] = true;
        }
      }
      if (!this.cache[coords]) {
        this.cache[coords] = geoData;
      }
    },

    _updateCache: function (done: any, coords: any, geoData: any) {
      this.cache[coords] = geoData;
      done.call(this);
    },

    _ajaxRequest: function (method: any, url: any, data: any, callback: any) {
      var request = new XMLHttpRequest();
      request.open(method, url, true);
      request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
          callback(JSON.parse(request.responseText));
        }
      };
      if (data) {
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(data));
      } else {
        request.send();
      }
      return request;
    },

    _onZoomAnim: function (e: any) {
      var zoom = e.zoom;
      if (
        (this.options.maxZoom && zoom > this.options.maxZoom) ||
        (this.options.minZoom && zoom < this.options.minZoom)
      ) {
        this.map.removeLayer(this.layer);
        this.cache = {};
        this.layer.clearLayers();
      } else {
        this._updateTiles();
        this.map.addLayer(this.layer);
      }
    },

    _onLoading: function () {
      this._updateTiles();
    },

    _onTileLoad: function (e: any) {
      this._drawTile(e.coords);
    },

    _onTileUnLoad: function (e: any) {
      delete this.cache[e.coords];
    },
  });

  // @ts-ignore
  L.geoJSONTileLayer = function (url: string, options: { [key: string]: any }) {
    // @ts-ignore
    return new L.GeoJSONTileLayer(url, options);
  };

  // Create a building layer with XYZ GeoJSON tiles
  const context = useLeafletContext();

  useEffect(() => {
    // @ts-ignore
    const ellipse = new L.geoJSONTileLayer({ url });
    const container = context.layerContainer || context.map;

    container.addLayer(ellipse);

    return () => {
      container.removeLayer(ellipse);
    };
  });

  return null;
};

export default BuildingLayer;
