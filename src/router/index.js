import Vue from 'vue'
import VueRouter from 'vue-router'
import addProduct from '../views/dashBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'admin',
    component: addProduct
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/dashBoard.vue'),
    children: [
      {
        path: 'addProduct',
        name: 'addProduct',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/addProduct.vue')
      },
      {
        path: 'allProduct',
        name: 'allProduct',
        component: () => import(/* webpackChunkName: "about" */ '../components/viewProduct.vue')
      }

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
