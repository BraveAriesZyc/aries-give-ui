import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [{
      path: '/Shopping',
      component: () => import(/* webpackChunkName: "about" */ '../views/ShoppingCart/index.vue'),
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ '../views/ShoppingCart/index.vue'),
      children: [
        {
          path: '/Shopping/cart',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/ShoppingCart/shopping/home.vue'),
        },
        {
          path: '/Shopping/message',
          component: () => import(/* webpackChunkName: "about" */ '../views/ShoppingCart/shopping/message.vue'),
        },
        {
          path: '/Shopping/myapp',
          component: () => import(/* webpackChunkName: "about" */ '../views/ShoppingCart/shopping/myApp.vue'),
        }
      ]
    }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
