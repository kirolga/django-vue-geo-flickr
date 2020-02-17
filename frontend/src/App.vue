<template>
  <div id="app">
    <l-map
      :zoom.sync="zoom"
      :options="mapOptions"
      :center="center"
      :bounds="bounds"
      :min-zoom="minZoom"
      :max-zoom="maxZoom"
      ref="map"
    >
      <l-tile-layer :url="url"></l-tile-layer>
    </l-map>
    <searchbar v-if="showSearchBar"></searchbar>
    <imagecard v-if="saved"></imagecard>
  </div>
</template>

<style>
body {
  margin: 0;
  height: 100vh;
}

#app {
  display: flex;
  height: 100%;
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import Vue from "vue";
import * as Vue2Leaflet from "vue2-leaflet";
import ImageCard from "./components/ImageCard.vue";
import LDraw from "leaflet-draw";
import axios from "axios";
import SearchBar from "./components/NavBar.vue";
import { getCookie } from "./utils.js";
Vue.component("l-map", Vue2Leaflet.LMap);
Vue.component("l-tile-layer", Vue2Leaflet.LTileLayer);
Vue.component("searchbar", SearchBar, {
  props: ["items"]
});
Vue.component("imagecard", ImageCard, {
  props: ["currentItem"]
});

export default {
  components() {
    return {
      LMap,
      LTileLayer
    };
  },
  data() {
    return {
      url: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 11,
      center: [55.45, 37.36],
      bounds: null,
      showSearchBar: false,
      mapOptions: { zoomControl: false },
      items: "",
      saved: false
    };
  },
  methods: {
    showSearchBar() {
      this.showToolBar = !this.showToolBar;
    }
  },
  mounted() {
    this.$nextTick(() => {
      const map = this.$refs.map.mapObject;
      const drawControl = new L.Control.Draw({
        position: "topright",
        draw: {
          polyline: false,
          polygon: false,
          rectangle: true,
          circle: false,
          marker: false,
          circlemarker: false
        },
        delete: true
      });
      map.addControl(drawControl);
      const editableLayers = new L.FeatureGroup().addTo(map);
      var layer;
      map.on(L.Draw.Event.CREATED, e => {
        this.showSearchBar = false;
        this.saved = false;
        if (map.hasLayer(layer)) {
          map.removeLayer(layer);
        }
        layer = e.layer;
        editableLayers.addLayer(layer);
        axios.defaults.headers.post["X-CSRFToken"] = getCookie("csrftoken");
        let query = JSON.stringify({
          bbox: layer.getBounds().toBBoxString()
        });
        var self = this;
        const params = new URLSearchParams();
        params.append("bbox", layer.getBounds().toBBoxString());
        axios
          .post("api/search", params)
          .then(function(response) {
            if (response.status == 200) {
              self.showSearchBar = true;
              self.items = response.data.photo;
            }
          })
          .catch(function(error) {
            console.debug(error);
          });
      });
    });
  }
};
</script>
