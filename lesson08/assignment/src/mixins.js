export const imageBorderMixin = {
  data () {
    return {
      outline: false
    }
  },

  methods: {
    myMixin: function() {
      this.outline = !this.outline
    }
  }
}
