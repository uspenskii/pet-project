<template lang='pug'>
.menu-options
  .menu-options__control
    .menu-options__image
      img.menu-options__img(src='/img/i-search-alt.svg')
    .menu-options__content
      nuxt-link.menu-options__link(to='/search/result')
        h4.menu-options__title {{ title }}
        p.menu-options__text(v-if='text') {{ text }}
</template>

<script>
export default {
  props: ['img', 'title', 'text'],
}
</script>

<style lang='scss' src='./menu-options.scss'></style>