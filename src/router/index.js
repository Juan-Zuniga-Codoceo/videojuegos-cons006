import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import GameDetailsView from '@/views/Games.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/game/:gameId',
    name: 'game-details',
    component: GameDetailsView,
  },
  {
    path: '*',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
