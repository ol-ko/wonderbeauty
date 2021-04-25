<template>
  <ul :class="$style.languageSwitch">
    <li v-for="locale in locales">
        <nuxt-link
          v-if="locale !== $i18n.locale"
          :key="locale"
          @click.native="onLangSwitch"
          :to="switchLocalePath(locale)">{{ locale }}</nuxt-link>
        <span v-else>
          {{locale}}
        </span>
      </li>
  </ul>
</template>

<script>
export default {
  props: {
    hideCurrent: {
      type: Boolean,
      default: false
    },
    langSwitchAction: {
      type: Function,
      required: false
    }
  },
  computed: {
    locales() {
      return this.hideCurrent ? this.$i18n.locales.filter(l => l !== this.$i18n.locale) : this.$i18n.locales;
    }
  },
  methods: {
    onLangSwitch() {
      if (this.langSwitchAction) {
        this.langSwitchAction();
      }
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/css/variables.scss';
@import '@/assets/css/mixins.scss';

.languageSwitch {
  @include clear-list;
  display: flex;

  a, span {
    text-transform: uppercase;
    display: inline-block;
    width: $clickable-item-size;
    height: $clickable-item-size;
    line-height: $clickable-item-size;
    text-align: center;
  }
}
</style>
