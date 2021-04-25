<template>
  <div :class="$style.mobileMenuWrapper">
    <IconButton @click="toggleMenu" :label="$t('nav.open')" :icon="MenuIcon" :class="$style.mobileMenuButton" v-click-outside="closeMenu"></IconButton>
    <div :class="[$style.background, { [$style.backgroundVisible]: isMenuOpen}]" @click="closeMenu"></div>
    <div :aria-hidden="!isMenuOpen" :class="[$style.mobileMenu, { [$style.menuOpen]: isMenuOpen}]">
      <nav :class="$style.nav">
        <ul>
          <li>
            <NuxtLink :to="localePath('/')" :exact-active-class="$style.linkActive">
              {{ $t('nav.studio') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/services')" :active-class="$style.linkActive">
              {{ $t('nav.services') }}
            </NuxtLink>
            <ul>
              <li v-for="category in $categories[$i18n.locale]">
                <NuxtLink :to="localePath(`/services/${category.slug}`)">
                  {{ category.title }}
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink :to="localePath('/contact')" :exact-active-class="$style.linkActive">
              {{ $t('nav.contact') }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <IconButton :label="$t('nav.close')" :icon="CloseIcon" :class="$style.closeButton"></IconButton>
      <SocialMediaLinks></SocialMediaLinks>
      <LanguageSwitch></LanguageSwitch>
    </div>
  </div>
</template>

<script>
import LanguageSwitch from '~/components/LanguageSwitch.vue'
import SocialMediaLinks from '~/components/SocialMediaLinks.vue'
import IconButton from '~/components/IconButton.vue'
import MenuIcon from '@/assets/images/icons/bars-solid.svg?raw';
import CloseIcon from '@/assets/images/icons/times-solid.svg?raw';
import { clickOutside } from '~/directives/clickOutside'

export default {
  components: { LanguageSwitch, SocialMediaLinks, IconButton },
  data() {
    return {
      isMenuOpen: false,
      MenuIcon,
      CloseIcon
    }
  },
  directives: {
    clickOutside
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/css/variables.scss';
@import '@/assets/css/mixins.scss';

@media (min-width: $viewport-lg-min) {
  .mobileMenuWrapper {
    display: none;
  }
}

.mobileMenu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 100%;
  width: 280px;
  background: white;
  transition: transform 0.2s ease-in-out;
  padding: ($clickable-item-size + $space-m) $space-m $space-m;
  overflow: auto;
}

.menuOpen {
  transform: translateX(-100%);
}

.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 100%;
  width: 100%;
  background-color: rgba(0,0,0, 0.4);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.backgroundVisible {
  transform: translateX(-100%);
  opacity: 1;
}

.mobileMenuButton, .closeButton {
  position: absolute;
  top: $space-m;
  right: $space-m;
}

.nav {
  margin: 0 (-$space-m) 1rem (-$space-m);
  ul {
    @include clear-list;

    li {
      a {
        display: inline-block;
        padding: (($clickable-item-size - $line-height-base * $font-size-base) / 2) $space-m;
      }

      li {
        a {
          padding-left: $space-m * 2;
        }
      }
    }
  }
}
.metaNavigation {
  display: flex;
}
</style>
