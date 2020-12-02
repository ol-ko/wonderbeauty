<template>
  <nuxt-link :to="localePath(path)" :class="$style.backLink">{{ $t('back', { text }) }}</nuxt-link>
</template>

<script>
export default {
  props: {
    path: String,
    text: String
  }
}
</script>

<style lang="scss" module>
@import '~/assets/css/mixins.scss';
@import '~/assets/css/variables.scss';

.backLink {
  display: inline-block;
  padding: $space-m 0 0 0;

  &:before {
    content: '\21E0  ';
    white-space: pre;
  }
}
</style>
