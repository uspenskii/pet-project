<template lang='pug'>
.page__content
  Breadcrumb(:data='breadcrumbs', headline='Корзина')
  Section(v-if='totalCost == 0')
    .cart-list__none
      h2.cart-list__headline В корзине пока ничего нет
      nuxt-link.cart-list__button(to='/') На главную
  Section(v-else)
    .grid.is-row
      .col-9.col-m-12
        CartList
      .col-3.col-l-12
        Order(@clickButton='toCheckout')
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      breadcrumbs: [
        {
          title: 'Корзина',
        },
      ],
    }
  },
  methods: {
    toCheckout() {
      this.$router.push('/checkout')
    },
  },
  computed: {
    totalCost() {
      return this.$store.state.cart.totalCost
    },
  },
  async asyncData({ store }) {
    await store.dispatch('cart/info')
  },
}
</script>