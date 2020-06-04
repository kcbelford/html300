<template lang="html">
  <div class="">
    <find-header/>
    <find-nav/>
    <h1>What is Craft Beer?</h1>
    <p>{{ craftBeer }}</p>
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
      craftBeer: 'this is all about craft beer.'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
