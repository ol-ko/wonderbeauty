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
        <li>
          <a :href="$t('nav.bookOnlineLink')" :class='$style.bookOnline'>
            {{ $t('nav.book')}}
          </a>
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

$navItemBorderWidth: 1px;
$navItemPaddingV: ($clickable-item-size - $line-height-base * $font-size-base - 2 * $navItemBorderWidth) / 2;
$navItemPaddingH: $space-s / 2;

.mainMenuWrapper {
  display: none;

  a {
    color: $color-text;
    border: $navItemBorderWidth solid transparent;

    &:hover,
    &:focus,
    &:active,
    &.navItemActive {
      color: $color-brand-primary;
    }
  }

  .bookOnline {
    margin: 0 $space-s / 2;
    border-radius: 3px;
    color: $color-brand-primary;
    border: $navItemBorderWidth solid $color-brand-primary;
    box-shadow: 4px 4px 0 0 rgba($color-brand-primary, 0.5);

    &:hover, &:focus, &:active  {
      background: $color-brand-primary;
      color: white;
      text-decoration: none;
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
      padding: $navItemPaddingV $navItemPaddingH;
    }
  }
}

.subMenu {
  width: 276px;
}

.languageSwitchButton {
  text-transform: uppercase;
  width: 62px;
}

.languageSwitch {
  right: 0;
  width: 62px;
}
</style>
