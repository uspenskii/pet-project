<template lang='pug'>
.sidebar-about
  ul.sidebar-about__list
    li.sidebar-about__item(v-for='(item, index) in items', :key='index')
      label.sidebar-about__link.is-active(v-if="item.link === path") {{ item.title }}
      nuxt-link.sidebar-about__link(v-else :to='item.link') {{ item.title }}
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'О нас', link: '/about' },
        { title: 'Пресс-центр', link: '/news' },
        { title: 'Сертификаты', link: '/certificates' },
        { title: 'Реквизиты', link: '/requisites' },
        { title: 'Контакты', link: '/contacts' },
      ],            
    }
  },
  computed: {
    path() {
      return this.$route.fullPath
    },
  }
}
</script>

<style lang='scss' src='./sidebar-about.scss'></style>