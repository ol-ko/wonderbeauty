<template>
  <div :class="$style.mainMenuWrapper">
    <nav :class="$style.nav">
      <ul>
        <li>
          <NuxtLink :to="localePath('/')" :exact-active-class="$style.navItemActive">
            {{ $t('nav.studio') }}
          </NuxtLink>
        </li>
        <li>
          <DropDown>
            <template v-slot:default="{ closeDropDown }">
              <ul :class="$style.subMenu">
                <li v-for="category in $categories[$i18n.locale]">
                  <NuxtLink :to="localePath(`/services/${category.slug}`)"  @click.native="closeDropDown" :exact-active-class="$style.navItemActive">
                    {{ category.title }}
                  </NuxtLink>
                </li>
              </ul>
            </template>
            <template v-slot:button>
              {{ $t('nav.services') }}
            </template>
          </DropDown>
        </li>
        <li>
          <NuxtLink :to="localePath('/contact')" :exact-active-class="$style.navItemActive">
            {{ $t('nav.contact') }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <DropDown :dropDownClass="$style.languageSwitch" :buttonClass="$style.languageSwitchButton">
      <template v-slot:button>
        {{ $i18n.locale }}
      </template>
      <template v-slot:default="{ closeDropDown }">
        <LanguageSwitch :langSwitchAction="closeDropDown" :hideCurrent="true"></LanguageSwitch>
      </template>
    </DropDown>
    <SocialMediaLinks></SocialMediaLinks>
  </div>
</template>

<script>
import LanguageSwitch from '~/components/LanguageSwitch.vue'
import SocialMediaLinks from '~/components/SocialMediaLinks.vue'
import IconButton from '~/components/IconButton.vue'
import DropDown from '~/components/DropDown.vue'

export default {
  components: { LanguageSwitch, SocialMediaLinks, IconButton, DropDown }
}
</script>

<style lang="scss" module>
@import '@/assets/css/variables.scss';
@import '@/assets/css/mixins.scss';

.mainMenuWrapper {
  display: none;

  a {
    color: $color-text;
    border: 1px solid transparent;

    &:hover,
    &:focus,
    &:active,
    &.navItemActive {
      color: $color-brand-primary;
    }
  }
}

@media (min-width: $viewport-lg-min) {
  .mainMenuWrapper {
    display: flex;
  }
}

.nav {
  ul {
    @include clear-list;
  }

  > ul {
    display: flex;

    a {
      display: inline-block;
      padding: (($clickable-item-size - $line-height-base * $font-size-base) / 2) $space-m;
    }
  }
}

.subMenu {
  width: 300px;
}

.languageSwitchButton {
  text-transform: uppercase;
}

.languageSwitch {
  right: 0;
  padding-left: $space-m;
  padding-right: $space-m;
}
</style>
