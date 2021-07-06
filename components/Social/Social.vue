<template lang='pug'>
.social
  a.social__item(v-for="(item, index) in items" :key="index" :href='item.href', target='_blank')
    img.social__img(:src='item.img')
</template>

<script>
export default {
  props: ['items'],
}
</script>

<style lang='scss' src='./social.scss'></style>