<template>
  <div :class="$style.socialMediaLinks">
    <a href="https://www.instagram.com/wonderbeauty_zug/">
      <img src="~/assets/images/instagram_logo.svg" :alt="$t('instagram.alt')">
    </a>
    <a href="https://www.facebook.com/groups/1650666418549680/">
      <img src="~/assets/images/facebook_logo.svg" :alt="$t('facebook.alt')">
    </a>
  </div>
</template>

<style lang="scss" module>
.socialMediaLinks {
  display: flex;

  img {
    width: 24px;
  }

  a {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
