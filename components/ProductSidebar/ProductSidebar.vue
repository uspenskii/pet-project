<template lang='pug'>
.product-sidebar
  .product-sidebar__content
    .product-sidebar__header
      p.product-sidebar__price {{ cost }} ₽
      p.product-sidebar__old-price(v-if='costold !== null') {{ costold }} ₽
    .product-sidebar__body
      .product-sidebar__row(v-if='drop && remainder.is_max')
        img.product-sidebar__img(src='/img/i-alert.svg')
        p.product-sidebar__title Ваша скидка стоставляет 20%
      .product-sidebar__row(v-if='drop && !remainder.is_max')
        img.product-sidebar__img(src='/img/i-alert.svg')
        p.product-sidebar__title Купите ещё на <i>{{ remainder.untilNext }} ₽</i> и скидка {{remainder.title}} ваша
      .product-sidebar__row
        img.product-sidebar__img(src='/img/i-box.svg')
        .product-sidebar__info
          p.product-sidebar__title Любая информация о товаре
          a.product-sidebar__link(href='') Опционально
      .product-sidebar__row
        img.product-sidebar__img(src='/img/i-delivery.svg')
        .product-sidebar__info
          p.product-sidebar__title Доставка бесплатно
          a.product-sidebar__link(href='') Уточняйте у менеджера
  .product-sidebar__footer
    Counter.sidebar(:productId='id', isWide='isWide')
</template>



<script>
export default {
  props: ['cost', 'costold', 'counter', 'id', 'drop'],
  data() {
    return {
      initial: [
        {
          quantity: this.counter,
          id: this.id,
        },
      ],
    }
  },
  computed: {
    remainder() {
      return this.$store.state.cart.sale      
    },
    
  },
}
</script>

<style lang='scss' src='./product-sidebar.scss'></style>