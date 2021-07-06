<template lang='pug'>
.footer-nav
  ul.footer-nav__list    
    li.footer-nav__item(v-for="(item, index) in items" :key="index")
      nuxt-link.footer-nav__link(:to='item.href') {{item.link}}
</template>

<script>
export default {
  props: ['items'],
}
</script>

<style lang='scss' src='./footer-nav.scss'></style>