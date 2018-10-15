import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Case from './views/Case.vue'
// import Star from './views/Star.vue'
import Snow from './views/Snow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/case',
      name: 'case',
      component: Case
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/snow',
      name: 'snow',
      component: Snow
    }
  ]
})
