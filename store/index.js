

export const strict = false

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('cart/info')
    await dispatch('compare/get')
  },  
}


