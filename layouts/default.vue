<template>
  <div :class="$style.container">
    <header :class="$style.header">
      <div :class="$style.card">
        <Logo :class="$style.logo"></Logo>
        <div :class="[$style.socialMediaLinks, $style.metaNavigation]">
          <a href="https://www.instagram.com/wonderbeauty_zug/">
            <img src="~/assets/images/instagram_logo.svg" :alt="$t('instagram.alt')">
          </a>
          <a href="https://www.facebook.com/groups/1650666418549680/">
            <img src="~/assets/images/facebook_logo.svg" :alt="$t('facebook.alt')">
          </a>
        </div>
      </div>
      <MainNavigation></MainNavigation>
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
import MainNavigation from '~/components/MainNavigation.vue'

export default {
  components: {
    Logo,
    LanguageSwitch,
    MainNavigation
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

.container {
  max-width: 960px;
  margin: 0 auto;
}
.card {
  background: white;
  padding: $space-m;
  overflow: hidden;
}
.main {
  padding-top: 0;
}

.logo img {
  width: 200px;

  @media (min-width: $viewport-md-min) {
    width: auto;
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

.metaNavigation {
  flex: 1 0 auto;
}

.header {
  .card {
    display: flex;
  }
}

.socialMediaLinks {
  display: flex;
  justify-content: flex-end;

  img {
    width: 24px;
  }

  a {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: $viewport-md-min) {
      margin-top: 4px;
    }
  }
}
</style>
