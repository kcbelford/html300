<template lang="html">
  <div id="nav">
    <nav class="navbar navbar-expand-sm navbar-light d-flex justify-content-center nav">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav bg-light container-fluid ul text-uppercase text-center d-flex justify-content-around">
            <li class="nav-item active">
              <a class="nav-link"><router-link to="/">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><router-link to="/history">History</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><router-link to="/styles">Styles</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><router-link to="/pizzerias">Pizzerias</router-link></a>
            </li>
          </ul>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav'
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
