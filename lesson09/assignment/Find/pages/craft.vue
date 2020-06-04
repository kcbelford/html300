<template lang="html">
  <div class="">
    <find-header/>
    <find-nav/>
    <div class="craft-container">
      <h1 class="font-weight-light">What is Craft Beer Anyway?</h1>
      <p class="lead">{{ craftBeer }}</p>
    </div>
    <find-footer/>
  </div>
</template>

<script>
import header from '~/components/header.vue'
import nav from '~/components/nav.vue'
import footer from '~/components/footer.vue'

export default {
  components: {
    'find-header': header,
    'find-nav': nav,
    'find-footer': footer
  },

  data () {
    return {
      craftBeer: 'A craft brewery or microbrewery is a brewery that produces small amounts of beer, typically much smaller than large-scale corporate breweries, and is independently owned. Such breweries are generally characterized by their emphasis on quality, flavor, and brewing technique.'
    }
  }
}
</script>

<style lang="css" scoped>
.craft-container {
  text-align: center;
}

h1 {
  padding: 6rem 0 4rem;
  color: #525B5E;
}

p {
  padding: 0 4rem;
  text-align: left;
}
</style>
