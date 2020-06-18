<template lang="html">
  <div class="home">
    <Header/>
    <Nav/>
    <main class="main">
      <h1 class="text-center pb-5 font-weight-light text-uppercase">Hey there pizza lover!</h1>
      <img class="img-fluid bianco mx-auto d-block rounded" src="../assets/bianco-1.jpg" alt="a man holding a baby standing in front of Pizzeria Bianco">
      <p class="lead">
        My name is Kevin and I am a big fan of pizza (making and eating). The photo above is of myself and my daughter standing in front of arguably the best pizza restaurant in the United States, Pizzeria Bianco.
        On this site you will find a brief history of pizza, imagery of different styles of pizza, and a list of some of the best pizzerias in the United States. Enjoy!
      </p>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',

  components: {
    Nav,
    Header,
    Footer
  }
}
</script>

<style lang="css" scoped>
.main {
    padding: 6rem 4rem;
    /* background-color: #F9F8F9; */
}

p {
  padding: 4rem 8rem 0;
}

.bianco {
  width: 35rem;
}

@media screen  and (max-width: 769px) {
  p {
    padding: 4rem 2rem 0 ;
  }
}

@media screen and (max-width: 577px) {
  .main {
    padding: 6rem 0.5rem;
  }

  p {
    padding: 4rem 0 0;
  }
}
</style>
