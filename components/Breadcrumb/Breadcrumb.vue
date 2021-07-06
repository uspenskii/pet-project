<template lang='pug'>
.container
  ul.breadcrumb
    li.breadcrumb__item
      nuxt-link.breadcrumb__home(:to='"/"', title='На главную')
        img(src='/img/i-home.svg', alt='' width=20 height="20")
    li.breadcrumb__item(v-for='(item, index) in data', :key='index')
      nuxt-link.breadcrumb__link(v-if='item.url', :to='item.url') {{ item.title }}
      span.breadcrumb__span(v-else) {{ item.title }}
  h1.breadcrumb__title(v-if='headline') {{ headline }}
</template>



<script>
export default {
  props: ['data', 'headline'],
}
</script>

<style lang='scss' src='./breadcrumb.scss'></style>