import Vue from 'vue'
import Router from 'vue-router'
/* home */
import Home from '@/components/Home/Home'
/* errors */
import PageNotFound from '@/components/Errors/PageNotFound/PageNotFound'
/* games */
import FindTheNote from '@/components/Games/FindTheNote/FindTheNote'
import GamesHome from '@/components/Games/GamesHome/GamesHome'
import GamesStructure from '@/components/Games/Games'
/* theory */
import TheoryStructure from '@/components/Theory/Theory'
import TheoryHome from '@/components/Theory/TheoryHome/TheoryHome'
import Scales from '@/components/Theory/Scales/Scales'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        icon: 'home',
        name: 'Home',
        title: 'Home',
      },
      component: Home
    },
    {
      path: '/games',
      name: 'Games',
      meta: {
        icon: 'gamepad',
        title: 'Games',
        name: 'Games',
      },
      component: GamesStructure,
      children: [
        {
          name: 'Games Home',
          path: '',
          component: GamesHome,
          meta: {
            title: 'Games',
            name: 'Games'
          }
        },
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
      meta: {
        icon: 'graduation-cap',
        title: 'Theory',
        name: 'Theory',
      },
      component: TheoryStructure,
      children: [
        {
          name: 'Theory Home',
          path: '',
          component: TheoryHome,
          meta: {
            title: 'Theory',
            name: 'Theory'
          }
        },
        {
          name: 'Scales',
          path: 'scales',
          component: Scales,
          meta: {
            title: 'Scales Theory',
            name: 'Scales Theory',
          }
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
