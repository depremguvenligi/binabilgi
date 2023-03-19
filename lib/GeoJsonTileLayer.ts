import { GeoJsonObject } from "geojson";
import * as L from "leaflet";

class GeoJsonTileLayer extends L.GridLayer {
  includes = L.Evented.prototype;

  url?: string;
  map?: L.Map | null;
  layer?: L.Layer;
  features?: { [key: string]: any };
  cache?: { [key: string]: any };

  initialize(url: string, options: { [key: string]: any }) {
    this.url = url;
    this.layer = new L.GeoJSON(null as unknown as GeoJsonObject, options);
    this.features = {};
    this.cache = {};
    // @ts-ignore
    L.GridLayer.prototype.initialize.call(this, options);
  }

  createTile(coords: any, done: any) {
    var tile = L.DomUtil.create("div", "leaflet-tile");
    tile.style["boxShadow"] = "inset 0 0 2px #f00";
    var url = this!._expandUrl(this.url!, coords);
    if (this.cache![coords]) {
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
  }

  onAdd(map: L.Map) {
    L.GridLayer.prototype.onAdd.call(this, map);
    if (this.layer) map.addLayer(this.layer);
    this.map = map;
    map.on("zoomanim", this._onZoomAnim.bind(this));
    this.on("loading", this._onLoading.bind(this));
    this.on("tileload", this._onTileLoad.bind(this));
    this.on("tileunload", this._onTileUnLoad.bind(this));

    return this;
  }

  onRemove(map: L.Map) {
    this.off("tileunload", this._onTileUnLoad.bind(this));
    this.off("tileload", this._onTileLoad.bind(this));
    this.off("loading", this._onLoading.bind(this));
    map.off("zoomanim", this._onZoomAnim.bind(this));
    this.map = null;
    map.removeLayer(this.layer!);
    L.GridLayer.prototype.onRemove.call(this, map);

    return this;
  }

  // //
  // // Custom methods
  // //
  _expandUrl(template: string, coords: any) {
    return L.Util.template(template || "", coords);
  }

  _updateTiles() {
    // @ts-ignore
    this.layer?.clearLayers();
    this.features = {};
    for (var coords in this.cache) {
      if (this.cache.hasOwnProperty(coords)) {
        this._drawTile(coords);
      }
    }
  }

  _drawTile(coords: any) {
    var geoData = this.cache![coords];
    if (geoData.type == "FeatureCollection") {
      geoData = geoData.features;
    }
    for (var i = 0; i < geoData.length; i++) {
      var id = geoData[i].id;
      if (!this.features![id]) {
        // @ts-ignore
        this.layer!.addData(geoData[i]);
        this.features![id] = true;
      }
    }
    if (!this.cache![coords]) {
      this.cache![coords] = geoData;
    }
  }

  _updateCache(done: any, coords: any, geoData: any) {
    this.cache![coords] = geoData;
    done.call(this);
  }

  _ajaxRequest(method: any, url: any, data: any, callback: any) {
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
  }

  _onZoomAnim(e: any) {
    var zoom = e.zoom;
    if (
      // @ts-ignore
      (this.options.maxZoom && zoom > this.options.maxZoom) ||
      // @ts-ignore
      (this.options.minZoom && zoom < this.options.minZoom)
    ) {
      this.map!.removeLayer(this.layer!);
      this.cache = {};
      // @ts-ignore
      this.layer!.clearLayers();
    } else {
      this._updateTiles();
      this.map!.addLayer(this.layer!);
    }
  }

  _onLoading() {
    this._updateTiles();
  }

  _onTileLoad(e: any) {
    this._drawTile(e.coords);
  }

  _onTileUnLoad(e: any) {
    delete this.cache![e.coords];
  }
}

export default GeoJsonTileLayer;
