<template>
  <div>
    <h1>{{ title }}</h1>
    <Highlights :highlights="highlights"></Highlights>
    <section>
      <h2>{{ $t('nav.services') }}</h2>
      <Services :categories="categories"></Services>
    </section>
  </div>
</template>

<script>
import Services from '@/components/Services';
import Highlights from '@/components/Highlights';

export default {
  components: {
    Services,
    Highlights
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  },
  async asyncData({ env, app }) {
    const categories = env.categories[app.i18n.locale]; //await Promise.all(categoryPromises);
    const homepageContent = await require(`@/assets/content/pages/${app.i18n.locale}/homepage.json`)

    return {
      categories: categories.sort((a, b) =>  a.order - b.order),
      ...homepageContent
    }
  }
}
</script>
