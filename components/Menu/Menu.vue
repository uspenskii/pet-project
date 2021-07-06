<template lang='pug'>
.menu
  ul.menu__list
    li.menu__item
      nuxt-link.menu__link(to='/discounts') Скидки
      label.menu__number {{data.salesCount}}
    li.menu__item
      nuxt-link.menu__link(to='/stocks') Акции
      label.menu__number {{data.stocksCount}}
    li.menu__item
      nuxt-link.menu__link(to='/brands') Все бренды
    li.menu__item(v-for="item in data.categories" :key="item.id")
      nuxt-link.menu__link(:to='"categories/" + item.alias') {{item.title}}
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang='scss' src='./menu.scss'></style>