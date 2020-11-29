<template>
  <div :class="$style.services">
    <div v-for="service in services" :class="$style.service">
      <div :class="$style.img">
        <nuxt-link :to="localePath(`services/${slug(service.title)}`)">
          <img
            :srcset="
              `/img/${slug(service.title)}_888x599.jpg 888px,
               /img/${slug(service.title)}_552x372.jpg 552px,
               /img/${slug(service.title)}_444x299.jpg 444,
               /img/${slug(service.title)}_276x186.jpg 276px`
            "
            sizes="(max-width: 599px) 100vw, (max-width: 959px) 50vw, 200px"
            :src="`/img/${slug(service.title)}_552x372.jpg`"
            :alt="service"
          />
        </nuxt-link>
      </div>
      <div>
        <nuxt-link :to="localePath(`services/${service}`)">
          <h4>{{ service.title }}</h4>
        </nuxt-link>

        <p>{{ service.summary }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import slug from '@/helpers/slug';

export default {
  props: {
    categories: Array,
    currentCategory: String
  },
  computed: {
    services() {
      return this.categories.filter(category => category !== this.currentCategory)
    }
  },
  methods: {
    slug(str) {
      return slug(str);
    }
  }
}
</script>

<style lang="scss" module>
@import '~/assets/css/mixins.scss';
@import '~/assets/css/variables.scss';

.services {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
}

.service {
  padding: 0 12px 24px 12px;
  box-sizing: border-box;

  @media (min-width: $viewport-md-min) {
    flex: 0 0 50%;
  }

  @media (min-width: $viewport-lg-min) {
    flex: 0 0 33.33%;
  }

  img {
    width: 100%;
  }
}
</style>
