<template lang="html">
  <div class="home">
    <main class="main">
      <h1 class="text-center pb-5 font-weight-light text-uppercase">Welcome to my homage to pizza!</h1>
      <img class="img-fluid bianco mx-auto d-block rounded" src="../assets/bianco-1.jpg" alt="a man holding a baby standing in front of Pizzeria Bianco">
      <p class="lead pt-4">
        {{ introPara }}
      </p>
      <div class="text-center pt-4">
        <p class="h6">Is pizza your favorite food, too?</p>

        <form class="d-inline-flex flex-column justify-content-center" action="index.html" method="post">
        <div>
          <input @click="radioButton" checked type="radio" name="favorite" value="Yes">
          <label class="pl-2 pr-4" for="favorite">Yes</label>
          <input @click="radioButton" type="radio" name="favorite" value="No">
          <label class="pl-2" for="favorite">No</label>
        </div>
        </form>
      </div>
      <div class="text-center pt-4">
        <p v-if="favorite">WooHoo!!</p>
        <p v-else>Bummer...</p>
      </div>

    </main>
  </div>
</template>

<script>

export default {
  name: 'Home',


  data() {
    return {

      introPara: "My name is Kevin and I am a big fan of pizza (making and eating). The photo above is of myself and my daughter standing in front of arguably the best pizza restaurant in the United States, Pizzeria Bianco. On this site you will find a brief history of pizza, imagery of different styles of pizza, and a list of some of the best pizzerias in the United States. Enjoy!",

// sets the starting value to true
      favorite: true
    }
  },
// changes paragraph between "WooHoo!!" and "Bummer!"
  methods: {
    radioButton: function() {
      this.favorite = !this.favorite
    }
  }
}
</script>

<style lang="css" scoped>
.main {
    padding: 2rem 4rem;
}

.bianco {
  width: 35rem;
}
</style>
