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
    const categoryPromises = env.serviceCategories.map(serviceCategory => require(`@/assets/content/service_category_pages/${app.i18n.locale}/${serviceCategory}.json`));
    const categories = await Promise.all(categoryPromises);
    return {
      categories: categories.sort((a, b) =>  a.order - b.order)
    }
  }
}
</script>
