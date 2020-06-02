<template>
  <section class="container">
    <find-header/>
    <find-nav/>
    <search/>
  </section>
</template>

<script>
import header from '~/components/header.vue'
import nav from '~/components/nav.vue'
import search from '~/components/search.vue'

export default {
  components: {
    'find-header': header,
    'find-nav': nav,
    search
  }
}
</script>

<style>

</style>
