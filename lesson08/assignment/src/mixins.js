export const imageBorderMixin = {
  data () {
    return {
      // outline is set to false so images don't have outline until clicked
      outline: false
    }
  },

  methods: {
    // when image is clicked outline turns 'true' and the image has an outline
    myMixin: function() {
      this.outline = !this.outline
    }
  }
}
