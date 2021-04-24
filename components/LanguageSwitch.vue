<template>
  <div :class="$style.languageSwitch">
    <div v-if="mode === 'dropdown'">
      <button :class="$style.dropdownButton" @click="toggleDropdown()">
        {{$i18n.locale}} <span v-html="isDropdownVisible ? '▲' : '▼'"></span>
      </button>
      <div v-if="isDropdownVisible" :class="$style.dropdown">
        <nuxt-link
          v-for="locale in $i18n.locales.filter(l => l !== $i18n.locale)"
          :key="locale"
          @click.native="closeDropdown()"
          :to="switchLocalePath(locale)">{{ locale }}</nuxt-link>
      </div>
    </div>
    <div v-else :class="$style.languageSwitchSimple">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownVisible: false
    }
  },
  props: {
    mode: {
      type: String,
      required: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    closeDropdown() {
      this.isDropdownVisible = false;
    }
  }
}
</script>
<style lang="scss" module>
@import '@/assets/css/variables.scss';
@import '@/assets/css/mixins.scss';

.languageSwitch {
  a, span {
    text-transform: uppercase;
    display: inline-block;
    width: 44px;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
}

.languageSwitchSimple {
  width: 132px;
}

.dropdownWrapper {
  position: relative;
}

.dropdownButton {
  border: none;
  display: flex;
  background: none;
  text-transform: uppercase;
  height: 44px;
  line-height: 44px;
  font-weight: bold;
  color: $color-brand-primary;
  background: white;

  @media (min-width: $viewport-md-min) {
    margin-top: 4px;
  }

  &:hover,&:active,&:focus {
    outline: 2px solid $color-brand-primary;
  }

  span {
    width: auto;
    font-size: 0.5em;
    margin-left: 0.5em;
  }
}

.dropdown {
  position: absolute;
  background: white;
  outline: 2px solid $color-brand-primary;
  z-index: 1;
  margin-left: -41px;
}
</style>
