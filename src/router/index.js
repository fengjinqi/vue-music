import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
import Recommend from '@/components/recommend'
import Search from '@/components/search'
import Ranking from '@/components/ranking'
import Singer from '@/components/singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
    {
        path: '/ranking',
        name: 'ranking',
        component: Ranking
    },
    {
        path: '/singer',
        name: 'singer',
        component: Singer
    }
  ]
})
