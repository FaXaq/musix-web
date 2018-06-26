import Vue from 'vue'
import Router from 'vue-router'
/* home */
import Home from '@/components/Home/Home'
/* errors */
import PageNotFound from '@/components/Errors/PageNotFound/PageNotFound'
/* games */
import FindTheNote from '@/components/Games/FindTheNote/FindTheNote'
import Games from '@/components/Games/Games'
/* theory */
import Theory from '@/components/Theory/Theory'

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
          component: FindTheNote
        }
      ]
    },
    {
      path: '/theory',
      name: 'Theory',
      component: Theory,
      children: [
        {
          name: 'Scales',
          path: 'scales',
          component: Theory
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
