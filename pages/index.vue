<template>
  <div>
<!--    <h1>{{ title }}</h1>-->
<!--    <Highlights :highlights="highlights"></Highlights>-->
    <section>
      <h2>{{ $t('nav.services') }}</h2>
      <Services :categories="categories"></Services>
    </section>
  </div>
</template>

<script>
import Services from '@/components/Services';

export default {
  components: {
    Services
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  },
  async asyncData({ env, app }) {
    const categoryPromises = env.serviceCategories.map(serviceCategory => require(`@/assets/content/service_category_pages/${app.i18n.locale}/${serviceCategory}.json`));
    const categories = await Promise.all(categoryPromises);

    // const homepageContent = await require(`@/assets/content/homepage/${app.i18n.locale}/homepage.json`)

    return {
      categories: categories.sort((a, b) =>  a.order - b.order),
      // ...homepageContent
    }
  }
}
</script>
