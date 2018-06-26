import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import PageNotFound from '@/components/Errors/PageNotFound/PageNotFound'
import FindTheNote from '@/components/Games/FindTheNote/FindTheNote'
import Games from '@/components/Games/Games'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/games',
      name: 'Games',
      component: Games,
      children: [
        {
          name: 'Find The Note',
          path: 'find-the-note',
          component: FindTheNote,
        }
      ]
    },
    {
      name: '404',
      path: '*',
      component: PageNotFound
    }
  ]
})
