<template lang="html">
  <div id="nav">
    <nav class="navbar navbar-expand-sm navbar-light d-flex justify-content-center nav">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav bg-light container-fluid ul text-uppercase text-center d-flex justify-content-around">
            <router-link v-for="link in links" :key="link.id" :to="link.page" class="nav-link">
              {{link.text}}
            </router-link>
          </ul>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',

  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/'
        },
        {
          id: 1,
          text: 'History',
          page: '/history'
        },
        {
          id: 2,
          text: 'Styles',
          page: '/styles'
        },
        {
          id: 3,
          text: 'Pizzerias',
          page: '/pizzerias'
        }
      ]
    }
  }
}


</script>

<style lang="css" scoped>
.nav {
  padding: 0;
  margin: 0;
}

.ul {
  margin: auto;
  padding: 2rem 0;
}
</style>
