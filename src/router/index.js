import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: () => import( /* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    redirect: "/Banner",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/home.vue'),
    children: [{
        path: '/Banner',
        name: 'Banner',
        component: () => import( /* webpackChunkName: "about" */ '../views/banner.vue')
      },
      {
        path: '/ComCase',
        name: 'ComCase',
        component: () => import( /* webpackChunkName: "about" */ '../views/comCase.vue')
      },
      {
        path: '/Spread',
        name: 'Spread',
        component: () => import( /* webpackChunkName: "about" */ '../views/proAndServe/spread.vue')
      },
      {
        path: '/Marketing',
        name: 'Marketing',
        component: () => import( /* webpackChunkName: "about" */ '../views/proAndServe/marketing.vue')
      },
      {
        path: '/Design',
        name: 'Design',
        component: () => import( /* webpackChunkName: "about" */ '../views/proAndServe/design.vue')
      },
      {
        path: '/Offline',
        name: 'Offline',
        component: () => import( /* webpackChunkName: "about" */ '../views/proAndServe/offline.vue')
      },
      {
        path: '/Monitor',
        name: 'Monitor',
        component: () => import( /* webpackChunkName: "about" */ '../views/proAndServe/monitor.vue')
      },
      {
        path: '/Team',
        name: 'Team',
        component: () => import( /* webpackChunkName: "about" */ '../views/team.vue')
      },
      {
        path: '/Data',
        name: 'Data',
        component: () => import( /* webpackChunkName: "about" */ '../views/data.vue')
      },
      {
        path: '/News',
        name: 'News',
        component: () => import( /* webpackChunkName: "about" */ '../views/news.vue')
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router