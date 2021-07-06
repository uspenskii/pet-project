import { getError } from '@/helpers/errors'

export const strict = false

export const state = (test) => ({
  items: [],
  quantity: 0,
  totalCost: 0,
  totalSale: 0,
  rawCost: 0,
  sale: {},
  progress: {},
})

export const actions = {
  add({ dispatch, commit }, { id, quantity }) {
    return this.$api
      .post('/cart/add', {
        id,
        quantity,
      })
      .then((data) => {
        commit('update', data)
      })
  },

  update({ dispatch, commit }, { id, quantity }) {
    return this.$api
      .post('/cart/update', {
        id,
        quantity,
      })
      .then((data) => {
        commit('update', data)
      })
      .catch((data) => {
        alert(getError(data))
      })
  },

  remove({ dispatch, commit }, id) {
    return this.$api
      .post('/cart/remove', {
        ids: id,
      })
      .then((data) => {
        commit('update', data)
      })
  },

  clear({ dispatch, commit }) {
    return this.$api.post('/cart/clear').then((data) => {
      commit('update', data)
    })
  },

  info({ dispatch, commit }) {
    return this.$api.get('/cart/info').then((data) => {
      commit('update', data)
    })
  },
}

export const mutations = {
  update: (state, cart) => {
    state.items = cart.cartItems
    state.quantity = cart.totalQuantity
    state.totalCost = cart.totalCost
    state.totalSale = cart.totalSaleCost
    state.rawCost = cart.rawCost
    state.progress = cart.sideBar
    state.sale = cart.sale
  },
}
