<template>
  <button @click="$emit('click')" :aria-label="label" :class="$style.iconButton">
    <img :src="require(`~/assets/images/icons/${icon}.svg`)" alt="">
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/css/variables.scss';

.iconButton {
  border: none;
  background: none;
  padding: (($clickable-item-size - $icon-size) / 2) 0;
  margin: auto;
  width: $clickable-item-size;
  height: $clickable-item-size;
  text-align: center;

  img {
    height: $icon-size;
  }
}
</style>
