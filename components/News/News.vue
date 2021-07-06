<template lang='pug'>
nuxt-link.news(:to='`/news/${data.alias}`')
  .news__cover
    img.news__image(:src='data.image', alt='')
  .news__body
    p.news__date {{data.date}}
    p.news__title {{data.title}}
</template>

<script>
export default {
  props: ['data'],  
}
</script>

<style lang='scss' src='./news.scss'></style>