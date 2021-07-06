<template lang='pug'>
.slide
  nuxt-link(:to='"stocks/" + data.alias')    
    img.slide__image(:src='data.images.desktop_mini')
    img.slide__mobile(:src='data.images.mobile')
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang='scss' src='./slide.scss'></style>