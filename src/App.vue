<template>
  <div id="app">
    <main-nav/>
    <div id="wrapper">
      <router-view/>
    </div>
    <main-footer/>
  </div>
</template>

<script>
import mainNav from './components/Nav/Nav'
import mainFooter from './components/Footer/Footer'

export default {
  name: 'App',
  components: {
    mainNav,
    mainFooter
  }
}
</script>

<style lang="scss">
 @import './assets/scss/reset.scss';
 @import './assets/scss/vars.scss';
 @import './assets/scss/main.scss';

 #app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   font-weight: 600;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: $white;
 }
</style>
