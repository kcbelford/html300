<template lang="html">
  <div class="footer">
    <p class="footer-content">created by kevin belford using the <a href="https://www.openbrewerydb.org/" target="_blank" class="api-link">open brewery db api</a></p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.footer {
  background-color: #24352B;
  text-align: center;
  padding: 4rem 0;
  margin-top: 4rem;
}

.footer-content {
  color: #FFFFFF;
  text-transform: uppercase;
  word-spacing: 2px;
  letter-spacing: 0.5px;
  margin: 0;
}

.api-link {
  color: #AFB28D;
}

.api-link:hover:visited {
  color: #AFB28D;
}
</style>
