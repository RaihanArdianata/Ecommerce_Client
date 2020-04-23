import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const baseUrl = 'http://localhost:3000'
const store = new Vuex.Store({
  state: {
    product: [],
    status: [],
    category: [],
    customer: [],
    order: []
  },
  mutations: {
    SET_PRODUCT: function (state, payload) {
      state.product = payload
    }
  },
  actions: {
    login: function (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: baseUrl + '/user/login',
          data: {
            email: payload.email,
            password: payload.password
          }
        })
          .then((result) => {
            return resolve(result)
          })
          .catch((err) => {
            return reject(err)
          })
      })
    },
    fetchProduct: function (context, _) {
      axios({
        method: 'GET',
        url: baseUrl + '/product',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((result) => {
          const product = result.data
          context.commit('SET_PRODUCT', product)
        })
    },
    fetchOrder: function () {

    },
    fetchStatus: function () {

    }
  }
})

export default store
