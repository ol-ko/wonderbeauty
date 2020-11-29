<template>
  <ul :class="$style.nav">
    <li>
      <NuxtLink :to="localePath('/')" :exact-active-class="$style.linkActive">
        {{ $t('nav.studio') }}
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="localePath('/services')" :active-class="$style.linkActive">
        {{ $t('nav.services') }}
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="localePath('/contact')" :exact-active-class="$style.linkActive">
        {{ $t('nav.contact') }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" module>
@import '@/assets/css/mixins.scss';
@import '@/assets/css/variables.scss';

.linkActive {
  text-decoration: none;
  font-weight: bold;
  color: $color-brand-primary;
}

.nav {
  @include clear-list;
  background-color: #fffef5;
  padding: $space-m;
  position: relative;
  overflow: hidden;
  transition: height 0.1s ease-in-out;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 800px;
    @include striped-background;
  }

  a {
    text-decoration: none;
    letter-spacing: 1px;
    display: inline-block;
    position: relative;
    color: $color-brand-primary;
    padding: 8px 16px;
    margin: 4px;
    font-size: $font-size-m;
    font-weight: bold;
    background: white;
    box-sizing: border-box;
    @include composed-border;

    &:hover,
    &:active,
    &.wb-nav-link-active {
      color: white;
      background: $color-brand-primary;

      &:before {
        transform: rotate(-2deg);
      }
    }
  }

  li {
    display: inline-block;
  }

  .isMenu {
    > a:after {
      content: ' \21E3';
    }
  }

  .isOpen {
    > a:after {
      content: ' \21E1';
    }
  }

  ul {
    @include clear-list;
    position: relative;
    margin: $space-s (-$space-m);
    padding: $space-s $space-m $space-s (2 * $space-m);

    li {
      display: inline-block;
    }
  }

  .slide-enter {
    transform: translateY(-$space-s);
  }

  .slide-leave-to {
    transform: translateY(-$space-s);
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.1s ease-in-out;
  }
}
</style>
