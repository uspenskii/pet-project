<template lang='pug'>
.menu-cart(:class='{ unactive: isEmpty }')
  button.menu-cart__button(@click='show')
    .menu-cart__image
      img(src='/img/i-cart.svg')
    .menu-cart__info
      span.menu-cart__title Корзина
      span.menu-cart__amount(v-html='cartCountText')
</template>

<script>
import { labelFormat } from '@/helpers/formatter'
import ClickOutside from 'vue-click-outside'
export default {
  data() {
    return {
      opened: false,
      progress: false,
    }
  },
  methods: {
    show() {
      if (!this.isEmpty) {
        this.$nuxt.$emit('openCart')
      }
    },
  },
  directives: {
    ClickOutside,
  },

  mounted() {
    document.querySelector('.js-overlay').addEventListener('click', () => {
      this.hide()
    })
  },
  computed: {
    quantity() {
      return this.$store.state.cart.quantity
    },    
    isEmpty() {
      return this.quantity == 0
    },
    cartCountText() {
      return (
        this.quantity +
        ' ' +
        labelFormat(this.quantity, ['товар', 'товара', 'товаров'])
      )
    },
  },
}
</script>

<style lang='scss' src='./menu-cart.scss'></style>