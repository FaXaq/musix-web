import NavItem from '@/components/Nav/NavItem/NavItem';

export default {
  name: 'Nav',
  data () {
    return {
      close: false,
      routes: []
    }
  },
  components: {
    NavItem
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
          let r = {
            name: route.name,
            path: route.path,
            icon: route.meta ? route.meta.icon : undefined,
            text: route.meta ? route.meta.name : undefined,
            title: route.meta ? route.meta.title : undefined
          }

          if (route.children) {
            r.name = this._findDefaultRouteName(route.children)
          }

          array.push(r)
        }
      })
    },
    _findDefaultRouteName(routes) {
      for (var i = 0; i < routes.length; i++) {
        if (routes[i].path === '') {
          return routes[i].name
        }
      }

      return '404'
    },
    menuItemSelected() {
      this.close = false
    }
  },
  created() {
    this.populateRoutes(this.routes, this.$router.options.routes)
  }
}
