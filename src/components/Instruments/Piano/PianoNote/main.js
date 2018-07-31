export default {
  data() {
    return { }
  },
  watch: {
    highlight() {
      this.highlighted()
    }
  },
  methods: {
    highlighted() {
      for (var i = 0; i < this.highlight.length; i++) {
        if (this.highlight[i]) return i
      }
      return -1
    }
  },
  props: {
    note: {
      type: Array
    },
    highlight: {
      type: Array
    }
  },
  created() {
    this.highlighted()
  },
  updated() {
    this.highlighted()
  }
}
