<template>
  <div id="app">
    <my-slot>
      <h1 slot="pizza" class="text-center display-2 text-danger text-uppercase pizza-h1">Pizza</h1>
      <h2 slot="pizza" class="text-center display-4 text-dark pizza-h2">piz·za</h2>
      <h3 slot="pizza" class="text-center display-5 text-secondary pt-4">/ˈpētsə/</h3>
    </my-slot>
    <Nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',

  components: {
    Nav,
    Footer,
    'my-slot': Header,
  }
}

</script>

<style>
html {
    box-sizing: border-box;
}

*,
*:after,
*:before {
    box-sizing: inherit;
}

</style>
