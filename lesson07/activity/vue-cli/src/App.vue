<template>
  <div id="app">
  <button @click="submitButton" class="btn btn-primary click-button" type="button" name="button">Click Me</button>
  <button :disabled="isDisabled" class="btn btn-success submit-button" type="button" name="button" data-placement="bottom" :title="title">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isDisabled: true,
      title: "click the other button first"
    }
  },
  methods: {
    submitButton: function() {
      this.isDisabled = !this.isDisabled,
      this.title = ""
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
