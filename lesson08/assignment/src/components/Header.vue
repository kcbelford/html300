<template lang="html">
  <div class="header">
    <router-link to="/" class="text-decoration-none">
    <!-- slot connected to app.vue page -->
    <slot name="pizza"></slot>
    </router-link>
  </div>
</template>

<script>

export default {

  name: 'Header',

  components: {
  }
}

</script>

<style lang="css" scoped>
.header {
  padding: 5rem 0 6rem;
}

.pizza-h2 {
  padding-bottom: 1.25rem;
}

</style>
