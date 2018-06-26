export default {
  name: 'Nav',
  data () {
    return {
      close: false,
      routes: []
    }
  },

  methods: {
    toggleClose() {
      this.close = !this.close
    },

    dragOpen() {
      this.close = true
    },

    dragClose() {
      this.close = false
    },
    populateRoutes(array, routes) {
      routes.forEach(route => {
        if (route.name !== "404") {
          array.push({
            name: route.name,
            path: route.path,
          })

          if (route.children) {
            array[array.length - 1].children = []
            this.populateRoutes(array[array.length - 1].children, route.children)
          }
        }
      })
    }
  },
  created() {
    this.populateRoutes(this.routes, this.$router.options.routes)

    console.log(this.routes)
  }
}
