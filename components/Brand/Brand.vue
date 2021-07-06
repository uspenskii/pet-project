<template lang='pug'>
.brand
  nuxt-link.brand__link(:to='"brands/" + brands.alias')
    img.brand__img(:src='brands.image' :alt='brands.title')
</template>

<script>
export default {
  props: ['brands']
}
</script>

<style lang='scss' src='./brand.scss'></style>