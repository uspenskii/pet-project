<template lang='pug'>
.order
  .order__body
    h2.order__title В корзине
    .order__row
      p.order__name Товары
      p.order__value {{ rawCost }} ₽
    .order__row
      p.order__name Сумма скидки
      p.order__value {{ totalSaleCost }} ₽
    .order__row
      p.order__name Общая стоимость
      p.order__value {{ totalCost }} ₽
  .order__footer
    Button.is-form(
      label='Оформить заказ',
      @click.native='send($event)'
    ) 
</template>

<script>
import { priceFormat } from '@/helpers/formatter'
export default {
  props: ['data', 'isCheckout'],
  methods: {
    send() {      
      this.$emit('clickButton')
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.items
    },
    totalCost() {
      return priceFormat(this.$store.state.cart.totalCost)
    },
    totalSaleCost() {
      return priceFormat(this.$store.state.cart.totalSale)
    },
    rawCost() {
      return priceFormat(this.$store.state.cart.rawCost)
    },
    path() {
      return this.$route.fullPath
    },
  },
}
</script>

<style lang='scss' src='./order.scss'></style>