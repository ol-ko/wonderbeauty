<template>
  <div :class="$style.languageSwitch">
    <span v-for="locale in $i18n.locales">
      <nuxt-link
        v-if="locale !== $i18n.locale"
        :key="locale"
        :to="switchLocalePath(locale)">{{ locale }}</nuxt-link>
      <span v-else>
        {{locale}}
      </span>
    </span>

  </div>
</template>

<style lang="scss" module>
.languageSwitch {
  text-transform: uppercase;
  width: 132px;

  a, span {
    display: inline-block;
    width: 44px;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
}
</style>
