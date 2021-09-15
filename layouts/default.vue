<template>
  <div>
    <header :class="$style.header">
      <div :class="$style.card">
        <Logo :class="$style.logo"></Logo>
        <MobileMenu></MobileMenu>
        <MainMenu></MainMenu>
      </div>
    </header>
    <main :class="[$style.card, $style.main]">
      <nuxt />
    </main>
    <footer :class="[$style.card, $style.footer]">
      <Logo :class="$style.logo"></Logo>
      <LanguageSwitch :class="$style.languageSwitch"></LanguageSwitch>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LanguageSwitch from '~/components/LanguageSwitch.vue'
import MobileMenu from '~/components/MobileMenu.vue'
import MainMenu from '~/components/MainMenu.vue'

export default {
  components: {
    Logo,
    LanguageSwitch,
    MobileMenu,
    MainMenu
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/css/variables.scss';

.card {
  max-width: 960px;
  margin: 0 auto;
  padding: $space-m;

  @media (min-width: $viewport-lg-min) {
    padding: $space-s 0;
  }
}

.main {
  padding-top: 0;
}

.logo {
  img {
    width: 180px;

    @media (min-width: $viewport-md-min) {
      width: auto;
    }
  }
}

.header {

  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > * {
      flex: 0 0 auto;
    }
  }
}

.footer {
  border-top: 1px solid $color-brand-primary;

  .logo {
    display: none;
  }

  @media (min-width: $viewport-md-min) {
    display: flex;
    border: none;
    margin-top: 1rem;

    .logo {
      flex: 1 0 auto;

      img {
        height: 44px;
      }
    }
  }

  .languageSwitch {
    flex-grow: 0;
  }
}
</style>
