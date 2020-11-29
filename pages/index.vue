<template>
  <div>
    <h1>Wonderbeauty</h1>
    <NuxtLink :to="localePath('/services/nails')">Services</NuxtLink>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
