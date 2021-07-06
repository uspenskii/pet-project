<template lang='pug'>
.counter(:class='{ "is-alt": isAlt }')
  button.counter__button(
    @click='addProduct(), addToCart()',
    :class='{ "is-wide": isWide }',
    v-if='quantity == 0'
  ) В корзину
  .counter__amount(v-show='quantity > 0', :class='{ "is-loading": loading }')
    button.counter__update.is-min(
      v-debounce='removeToCart',
      @click='removeProduct',
      :class='{ "is-disabled": quantity == 0 }'
    )
    p.counter__quantity {{ quantity }}
    span(style='display: none') {{ getProduct }}
    button.counter__update(v-debounce='addToCart', @click='addProduct')
</template>

<script>
import { getError } from '@/helpers/errors'
export default {
  props: ['productId', 'isAlt', 'isWide'],
  data() {
    return {
      quantity: 0,
      loading: false,
    }
  },
  methods: {
    addProduct() {
      this.quantity++
    },
    removeProduct() {
      if (this.quantity >= 0) {
        this.quantity--
      }
    },
    addToCart() {
      if (this.loading) {
        return
      }
      this.loading = true
      if (this.quantity == 1) {
        this.$store
          .dispatch('cart/add', {
            id: this.productId,
            quantity: this.quantity,
          })
          .then(() => {
            this.loading = false
          })
      } else {
        this.$store
          .dispatch('cart/update', {
            id: this.productId,
            quantity: this.quantity,
          })
          .finally(() => {
            this.loading = false
          })
      }
    },
    removeToCart() {
      if (this.loading) {
        return
      }
      this.loading = true
      this.$store
        .dispatch('cart/update', {
          id: this.productId,
          quantity: this.quantity,
        })
        .then(() => {
          this.loading = false
        })
    },
  },

  computed: {
    getProduct() {
      let cart = this.$store.state.cart.items
      let current = cart.find((item) => item.id == this.productId)
      return (this.quantity = current ? current.quantity : 0)
    },
  },
}
</script>

<style lang='scss' src='./counter.scss'></style>