<template lang="html">
    <header class="find-header">
      <nuxt-link to="/"><img class="find-logo" src="../static/find-logo-2.png" alt="Find My Brewery Logo"></nuxt-link>
      <h1 class="title">Find My Brewery</h1>
      <div class="line-est">
        <div class="line"></div>
        <h2>EST. 2020</h2>
        <div class="line"></div>
      </div>
    </header>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.find-logo {
  width: 6rem;
}

h1 {
  font-size: 2rem;
  text-transform: uppercase;
  color: #697649;
  padding: 1rem 0;
  letter-spacing: 3px;
}

h2 {
  font-size: 1rem;
  letter-spacing: 3px;
  color: #697649;
  padding: 0 2rem;
}

.line {
  width: 50px;
  height: 3px;
  background-color: #697649;
}

.line-est {
  display: flex;
  align-items: center;
  padding-bottom: 4rem;
}

.find-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
}
</style>
