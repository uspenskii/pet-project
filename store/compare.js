export const strict = false

export const state = (update) => ({
  groups: [],
  products: [],
})

export const actions = {

  add({ dispatch, commit }, id) {
    return this.$api.post('/compare/add', { id }).then((data) => {
      commit('update', data)
    })
  },

  remove({ dispatch, commit }, id) {
    return this.$api.post('/compare/remove', { ids: [id] }).then((data) => {
      commit('update', data)
    })
  },

  get({ dispatch, commit }) {
    return this.$api.get('/compare/info').then((data) => {
      commit('update', data)
    })
  },

  clear({ dispatch, commit }) {
    return this.$api.get('/compare/clear').then((data) => {
      commit('update', data)
    })
  },
}

export const mutations = {
  update: (state, compare) => {
    state.groups = compare.groups
    state.products = compare.products
  },
}
