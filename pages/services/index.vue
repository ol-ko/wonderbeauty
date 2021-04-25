<template>
  <section>
    <h1>{{ $t('nav.services') }}</h1>
    <Services :categories="categories"></Services>
  </section>
</template>

<script>
import Services from '@/components/Services';
export default {
  components: {
    Services
  },
  async asyncData({ env, app }) {
    const categories = env.categories[app.i18n.locale];
    return {
      categories: categories.sort((a, b) =>  a.order - b.order)
    }
  }
}
</script>
