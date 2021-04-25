<template>
  <span v-html="icon" :class="[$style.icon, $style[theme], $style[size]]"></span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/css/variables.scss';

@mixin color-icon($color) {
  [class*='current-color'] {
    fill: $color;
  }

  [class*='current-color'] {
    stroke: $color;
  }
}

.icon {
  display: flex;
  align-items: center;
}

.default {
  @include color-icon($color-text);
}
.primary {
  @include color-icon($color-brand-primary);
}

.s {
  svg {
    height: $font-size-s;
  }
}
</style>
