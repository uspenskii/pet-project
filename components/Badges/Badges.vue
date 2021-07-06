<template lang='pug'>
.badges  
  p.badges__item.is-new(v-if="options.isNew") Новинка
  p.badges__item.is-sale(v-if="options.sale") {{options.sale}}
  .badges__item.is-gift(v-if="options.isDroplet")
    img.badges__gift(src='/img/i-gift.svg', alt='')  
  a.badges__item.is-review(v-if="options.videoUrl" :href='options.videoUrl' target="_blank") Обзор
</template>

<script>
export default {
  props: ['options'],
}
</script>

<style lang='scss' src='./badges.scss'></style>