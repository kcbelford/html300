<template lang="html">
  <div class="">
    <find-header/>
    <find-nav/>
    <h1>About FMB</h1>
    <p>{{ aboutContent }}</p>
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
      aboutContent: 'this is the about content.'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
