<template>
  <div :class="$style.categoryPage">
    <BackLink path="/services" :text="$t('nav.services')"></BackLink>
    <h1>{{ category.title }}</h1>
    <Highlights :highlights="category.highlights"></Highlights>
    <div v-if="category.description"
         v-html="$md.render(category.description)"
         :class="$style.highlights"
    ></div>
    <a name="prices"></a>

    <section>
      <h2>{{ $t('servicesPrices') }}</h2>

      <section v-for="group in category.service_groups">
        <h3>{{group.title}}</h3>
        <p v-if="group.description"
           :class="$style.subcategoryDescription">
          {{group.description}}
        </p>
        <ul :class="$style.priceListItems">
          <li v-for="service in group.services">
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
  </div>
</template>

<script>
import * as SITE_INFO from '@/assets/content/site/info.json'
import Highlights from '@/components/Highlights.vue';
import BackLink from '@/components/BackLink.vue';

export default {
  components: {
    Highlights,
    BackLink
  },
  data() {
    return {
      currency: SITE_INFO.sitecurrency
    }
  },
  async asyncData({ params, payload, app}) {
    if (payload) {
      return { category: {...payload, name: params.category} }
    }

    const category = await require(`@/assets/content/service_category_pages/${app.i18n.locale}/${params.category}.json`);

    for (let i = 0; i < category['service_groups'].length; i++) {
      const serviceGroupName = category['service_groups'][i];
      const serviceGroup = await require(`@/assets/content/service_groups/${app.i18n.locale}/${serviceGroupName.toLowerCase()}.json`);
      console.log(serviceGroup);
      for (let j = 0; j < serviceGroup.services.length; j++) {
        const serviceName = serviceGroup.services[j];
        serviceGroup.services[j] = await require(`@/assets/content/services/${app.i18n.locale}/${serviceName.toLowerCase()}.json`);
      }
      category['service_groups'][i] = serviceGroup;
    }

    return {
      category: { ...category, name: params.category }
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
