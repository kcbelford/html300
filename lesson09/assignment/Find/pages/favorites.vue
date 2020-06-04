<template lang="html">
  <div class="">
    <find-header/>
    <find-nav/>
    <h1>Our Favorite Breweries</h1>
    <div v-for="favorite in myFavorites" :key="favorite.id" class="">
      <h2>{{ favorite.brewery }}</h2>
      <a href="#">{{ favorite.website }}</a>
      <img :src="favorite.image" :alt="favorite.alt">
      <p>{{ favorite.info }}</p>
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
      myFavorites: [
        {
          id: 0,
          brewery: '7 Seas',
          website: '7Seas.com',
          image: require('~/static/seven-seas.jpg'),
          alt: 'image alt description',
          info: 'brewery information here'
        },
        {
          id: 1,
          brewery: '7 Seas',
          website: '7Seas.com',
          image: require('~/static/seven-seas.jpg'),
          alt: 'image alt description',
          info: 'brewery information here'
        },
        {
          id: 2,
          brewery: '7 Seas',
          website: '7Seas.com',
          image: require('~/static/seven-seas.jpg'),
          alt: 'image alt description',
          info: 'brewery information here'
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
img {
  width: 30rem;
}
</style>
