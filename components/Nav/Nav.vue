<template lang='pug'>
nav.nav
  ul.nav__list
    li.nav__item
      nuxt-link.nav__link(to='/attendance', @click.native='close') Услуги
    li.nav__item
      nuxt-link.nav__link(to='/delivery' @click.native='close') Оплата и доставка
    li.nav__item
      nuxt-link.nav__link(to='/about' @click.native='close') Компания
    li.nav__item
      nuxt-link.nav__link(to='/contacts' @click.native='close') Контакты
</template>

<script>
export default {
  methods: {
    close() {
      this.$nuxt.$emit('closeDropMenu')
    },
  },
}
</script>

<style lang='scss' src='./nav.scss'></style>