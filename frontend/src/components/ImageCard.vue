<template>
  <div class="image-block">
    <div class="close" v-on:click="destroy()">X</div>
    <div class="image-card">
      <img class="image-card__image" :src="imageUrl" />
      <div class="image-card__body">
        <p class="image-title">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageCard",
  methods: {
    destroy() {
      this.$destroy();
      this.$parent.saved = false;
    }
  },
  computed: {
    imageUrl() {
      return this.$parent.$parent.$children[0].$data.currentItem.img;
    },
    title() {
      return (
        this.$parent.$parent.$children[0].$data.currentItem.title ||
        "Без названия"
      );
    }
  }
};
</script>

<style>
.close {
  cursor: pointer;
}
</style>
