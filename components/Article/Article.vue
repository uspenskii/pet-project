<template lang='pug'>
.article
  .article__header
    .article__cover
      img.article__image(:src='data.image', alt='')
    .article__info
      p.article__date {{data.date}}
      h1.article__title {{data.title}}
  .article__body
    .text.is-article(v-html="data.content")
  .article__footer
    nuxt-link.article__link(to='/news') Назад к событиям
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang='scss' src='./article.scss'></style>