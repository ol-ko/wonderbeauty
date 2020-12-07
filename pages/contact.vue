<template>
  <section>
    <h1>{{ $t('nav.contact') }}</h1>
    <div :class="$style.contact">
      <section :class="$style.appointment">
        <h3>{{ $t('appointments') }}</h3>
        <p v-for="contact in contacts">
          <strong>{{ contact.name }}</strong><br>
          <a :href="'tel:' + contact.phone.replace(' ')">{{ contact.phone }}</a><br>
          {{contact.info}}
        </p>
      </section>
      <section :class="$style.map">
        <h3>{{ $t('address')}}</h3>
        <p>{{ address }}</p>
        <iframe width="100%" height="450" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCYGXUgVMb4Ox24h0UlFSAX04260Sbs7PE
&amp;q=Riedmatt+4,+6300+Zug" allowfullscreen="allowfullscreen"></iframe>
        <section>
          <h3>{{ $t('parking')}}</h3>
          <p>{{ parking }}</p>
        </section>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ app }) {
    return require(`@/assets/content/pages/${app.i18n.locale}/contact-us.json`)
  }
}
</script>

<style lang="scss" module>
@import '~/assets/css/variables.scss';

.map{
  iframe {
    border: 0;
    background: $color-lightgrey;
  }
}

@media (min-width: $viewport-lg-min) {
  .contact {
    display: flex;
  }
  .appointment {
    flex: 0 0 40%;

    h3 {
      margin-top: 0;
    }
  }

  .map {
    margin-top: 0;
    flex: 0 0 60%;
  }
}
</style>
