<template lang="html">
  <div class="">
    <h1 v-if="!submitted">Welcome</h1>
    <form class="" action="" method="post">
      <!-- <label for=""></label>
      <input v-model="userInput" type="text" name="search-brewery" placeholder="Brewery Name" value=""> -->
      <label for="brewery-search"></label>
      <input v-model="userInput" type="text" name="brewery-search" placeholder="Brewery or City Name" value="">
      <button @click.prevent="findBrewery" type="submit" name="find-brewery">Find My Brewery</button>
    </form>
    <div v-if="submitted" class="">
      <h1>Here are your breweries</h1>
       <div
         v-for="brewery of breweries"
         :key="brewery.id"
         :brewery="brewery"
         class=""
         >
         <h4>{{ brewery.name }}</h4>
         <h5><a :href="brewery.website_url" target="_blank">{{ brewery.website_url }}</a></h5>
         <h5>{{ brewery.brewery_type }}</h5>
         <h5>{{ brewery.street }}</h5>
         <h5>{{ brewery.city }}</h5>
         <h5>{{ brewery.state }}</h5>
         <h5>{{ brewery.postal_code}}</h5>
       </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
		brewery: Object
	},

  data() {
      return {
        userInput: "",
        submitted: false,
        loading: true,
        breweries: null,
        errored: false
      }
    },

  methods: {
    findBrewery: function() {
      this.submitted = true;
      axios
        .get('https://api.openbrewerydb.org/breweries/search?query=' + this.userInput)
        .then(response => (this.breweries = response.data))
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  }

  // mounted () {
  // axios
  //   .get('https://api.openbrewerydb.org/breweries/search?query=' + this.userInput)
  //   .then(response => (this.breweries = response.data))
  //   .catch(error => {
  //     console.log(error)
  //     this.errored = true
  //   })
  //   .finally(() => this.loading = false)
  // }
}

// https://api.openbrewerydb.org/breweries?by_name=
// https://api.openbrewerydb.org/breweries?by_city=
// https://api.openbrewerydb.org/breweries?by_state=
</script>

<style lang="css" scoped>
</style>
