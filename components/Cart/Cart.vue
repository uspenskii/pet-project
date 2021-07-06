<template lang='pug'>
.cart
  .cart__gifts
    Progress
  .cart__wrapper
    .cart__cover
      .cart__header
        p.cart__title В корзине
        button.cart__clear(@click='clearCart') Очистить
      .cart__body
        .cart__item(v-for='(item, index) in cartItems', :key='index')
          ProductRow.is-cart(:data='cartItems[index]')
      .cart__footer(v-if='cartItems.length > 0')
        .cart__prices
          p.cart__subtext Всего
          p.cart__price {{ totalCost }} ₽
        nuxt-link.cart__link(v-on:click.native='close', to='/cart') Перейти в корзину
</template>

<script>
import { priceFormat } from '@/helpers/formatter'
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    clearCart() {
      this.$store.dispatch('cart/clear')
    },
    open() {
      document.querySelector('body').classList.add('is-cart-open')
    },
    close() {
      this.$nuxt.$emit('closeCart')
      document.querySelector('body').classList.remove('is-cart-open')
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.items
    },
    totalCost() {
      return priceFormat(this.$store.state.cart.totalCost)
    },
  },
  mounted() {
    this.$nuxt.$on('openCart', () => {
      this.open()
    })
    this.$nuxt.$on('closeCart', () => {
      this.close()
    })
  },
}
</script>

<style lang='scss' src='./cart.scss'></style>