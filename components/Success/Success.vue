<template lang='pug'>
.success
  .success__container
    h2.success__title Ваш заказ успешно принят!
    p.success__text Ваш заказ <label class='success__link'>{{data.order.id}}</label> на сумму <label class='success__link'>{{totalCost}} ₽</label> успешно принят и в ближайшее время наши сотрудники свяжуться с вами для обсуждения всех деталей.
    p.success__link Спасибо, что выбрали нас!
    nuxt-link.success__button(to='/') Перейти на главную страницу
  
</template>

<script>
import { priceFormat } from '@/helpers/formatter'
export default {
  props: ['data'],
  computed: {    
    totalCost() {
      return priceFormat(this.data.order.cost)
    },
  },
}
</script>

<style lang='scss' src='./success.scss'></style>