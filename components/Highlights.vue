<template>
  <section v-if="highlights" :class="$style.highlights">
    <ul>
      <li v-for="highlight in highlights">
        <h4>{{highlight.heading}}</h4>
        <p>{{highlight.text}}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    highlights: Array
  }
}
</script>

<style lang="scss" module>
@import '~/assets/css/mixins.scss';
@import '~/assets/css/variables.scss';

.highlights {
  ul {
    @include clear-list;

    @media (min-width: $viewport-lg-min) {
      display: flex;
      flex-wrap: wrap;
      margin: auto (- $space-m / 2);

      li {
        box-sizing: border-box;
        flex: 0 0 50%;
        padding: 0 ($space-m / 2);
      }
    }
  }
}
</style>
