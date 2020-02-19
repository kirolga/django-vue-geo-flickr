<template>
  <div class="search-box">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 listing-block">
          <p class="h3">Результаты поиска</p>
          <div
            v-if="Object.keys(items).length === 0"
          >В этой области данных не найдено. Попробуйте выбрать другую область</div>
          <div class="list-of-objects">
            <div class="list" v-for="(item, index) in items" :key="index">
              <div class="media-body pl-3">
                <div class="title">{{item.title.substr(0, 49)}}</div>
                <div class="flex">
                  <img class="d-flex align-self-start" :src="`${item.img}`" />
                  <button
                    type="button"
                    v-if="item.is_saved === false"
                    class="btn btn-primary btn-sm btn--save-to-album"
                    v-on:click="saveToAlbum(item)"
                  >Отправить в альбом</button>
                </div>
                <span v-if="item.is_saved" class="badge badge-secondary">Сохранено в альбоме</span>
                <br v-if="item.is_saved">
                <button
                  type="button"
                  class="btn btn-primary btn-sm btn--save-to-album"
                  v-on:click="showCard(item)"
                >Открыть</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ImageCard from "./ImageCard.vue";
Vue.component("imagecard", ImageCard, {
  props: ["currentItem"]
});
import axios from "axios";
import { getCookie } from "../utils.js";
import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/bootstrap-v4.css";

export default {
  name: "SearchBar",
  props: ["title"],
  components() {
    return {
      imagecard: ImageCard
    };
  },
  data() {
    return {
      saved: false,
      items: this.$options.parent.items
    };
  },
  methods: {
    saveToAlbum(item, data) {
      var self = this;
      this.currentItem = item;
      this.$parent.$data.currentItem = item;
      this.$parent.saved = false;
      axios.defaults.headers.post["X-CSRFToken"] = getCookie("csrftoken");

      axios
        .post("api/album", {
          flickr_id: item["id"],
          owner_id: item["owner"],
          title: item["title"],
          picture: item["img"]
        })
        .then(function(response) {
          if (response.status == 201) {
            self.$parent.saved = true;
            item.is_saved = true;
            self._render();
            new Noty({
              text: "Успешно сохранено",
              layout: "topRight",
              type: "success",
              timeout: 1000,
              theme: "bootstrap-v4"
            }).show();
          }
        })
        .catch(function(error) {
          console.debug(error);
          new Noty({
            text: "Произошла ошибка",
            layout: "topRight",
            type: "error",
            timeout: 1000,
            theme: "bootstrap-v4"
          }).show();
        });
    },

    showCard(item) {
      this.$parent.saved = false;
      var self = this;
      this.currentItem = item;
      this.$parent.$data.currentItem = item;
      setTimeout(function(){self.$parent.saved = true;}, 1000);
    }
  }
};
</script>
<style scoped>
.search-box {
  float: left;
  height: 100%;
  overflow: auto;
  width: 30%;
  position: absolute;
  z-index: 1000;
  background-color: #fff;
}
img {
  float: left;
  width: 150px;
  height: 100px;
  object-fit: cover;
}
.media {
  margin-bottom: 15px;
}
.title {
  float: right;
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  color: #4765ab;
}
.media-body {
  border: 1px solid #bcbcbc;
  border-left: 0;
  height: 136px;
}
.btn--save-to-album {
  margin-top: 5%;
}
</style>