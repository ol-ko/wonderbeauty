<template>
  <div :class="$style.categoryPage">
    <h1>{{ category.title }}</h1>
    <Highlights :highlights="category.highlights"></Highlights>
    <div v-if="category.description"
         v-html="$md.render(category.description)"
         :class="$style.highlights"
    ></div>
    <a name="prices"></a>

    <section>
      <h2>{{ $t('servicesPrices') }}</h2>

      <section v-for="group in category.serviceGroupsData">
        <h3>{{group.title}}</h3>
        <p v-if="group.description"
           :class="$style.subcategoryDescription">
          {{group.description}}
        </p>
        <ul :class="$style.priceListItems">
          <li v-for="service in group.servicesData">
            <div :class="$style.titleAndPrice">
              <h4 :class="$style.title">{{ service.title }}</h4>
              <span :class="$style.price"> {{ service.price }} {{currency}} </span>
            </div>
            <p v-if="service.duration" :class="$style.duration">{{ service.duration }} {{ $t('min')}}</p>
            <p v-if="service.description" :class="$style.description">{{service.description}}</p>
          </li>
        </ul>
      </section>
    </section>
    <section>
      <h2>{{ $t('otherServices') }}</h2>
      <Services :categories="categories" :currentCategory="category"></Services>
    </section>
  </div>
</template>

<script>
import * as SITE_INFO from '@/assets/content/site/info.json'
import Highlights from '@/components/Highlights.vue';
import BackLink from '@/components/BackLink.vue';
import Services from '@/components/Services.vue';

export default {
  components: {
    Highlights,
    BackLink,
    Services
  },
  data() {
    return {
      currency: SITE_INFO.sitecurrency
    }
  },
  async asyncData({ params, payload, app, env}) {
    if (payload) {
      return { category: {...payload, name: params.category} }
    }

    const categories = env.categories[app.i18n.locale];
    const category = categories.find(c => c.slug === params.category);

    category.serviceGroupsData = [];

    for (let i = 0; i < category['service_groups'].length; i++) {
      const serviceGroupName = category['service_groups'][i];
      const serviceGroup = await require(`@/assets/content/service_groups/${app.i18n.locale}/${serviceGroupName.toLowerCase()}.json`);

      serviceGroup.servicesData = [];

      for (let j = 0; j < serviceGroup.services.length; j++) {
        const serviceName = serviceGroup.services[j];
        const servicesData = await require(`@/assets/content/services/${app.i18n.locale}/${serviceName.toLowerCase()}.json`);
        serviceGroup.servicesData.push(servicesData);
      }

      category.serviceGroupsData.push(serviceGroup);
    }

    return {
      category: { ...category, name: params.category },
      categories: categories.sort((a, b) =>  a.order - b.order)
    }
  }
}
</script>

<style lang="scss" module>
@import '~/assets/css/mixins.scss';
@import '~/assets/css/variables.scss';

.description {
  margin-top: 10px;
}

.duration {
  font-size: $font-size-s;
  color: $color-grey;
}

.priceListItems {
  clear: both;
  @include clear-list;
  margin-bottom: 48px;

  li {
    margin: 20px 0;
  }

  li + li {
    border-top: 1px dashed $color-lightgrey;
    padding-top: 20px;
  }
}

.subcategoryDescription {
  margin-bottom: 30px;
}

.titleAndPrice {
  display: flex;

  .title,
  .price {
    line-height: 1.6;
    font-size: $font-size-l;
    flex: 1 1 auto;
  }

  .title {
    margin: 0 20px 0 0;
  }

  .price {
    text-align: right;
    white-space: nowrap;
  }
}
</style>
