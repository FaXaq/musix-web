import NavItem from './NavItem.vue';

export default {
  name: 'NavItem',
  data() {
    return {
      open: false
    }
  },
  computed: {
    currentRoute() {
      return this.$router.currentRoute.name
    }
  },
  methods: {
    toggleSubMenu() {
      this.open = !this.open
    },
    menuItemSelected() {
      this.$emit('selected')
    }
  },
  components: {
    NavItem
  },
  props: {
    route: {
      type: Object
    }
  }
}
