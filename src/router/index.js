import Vue from 'vue'
import VueRouter from 'vue-router'
import addProduct from '../views/landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'admin',
    component: addProduct,
    redirect: {
      name: 'login'
    },
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../components/userLoginAdmin/login.vue')
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashBoard.vue'),
    beforeEnter: (to, from, next) => {
      const level = localStorage.getItem('level')
      const token = localStorage.getItem('access_token')
      if (token) {
        if (level < 2) {
          next()
        } else {
          next({ name: 'login' })
        }
      } else {
        next({ name: 'login' })
      }
    },
    children: [
      {
        path: 'addProduct',
        name: 'addProduct',
        component: () => import(/* webpackChunkName: "about" */ '../components/addProduct.vue')
      },
      {
        path: 'allProduct',
        name: 'allProduct',
        component: () => import(/* webpackChunkName: "about" */ '../components/viewProduct.vue')
      },
      {
        path: 'updateProduct/:id',
        name: 'updateProduct',
        props: true,
        component: () => import(/* webpackChunkName: "about" */ '../components/updateProduct.vue')
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
