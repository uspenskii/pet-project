<template lang='pug'>
.arrow
  button.arrow(:class='className', ref='button') 
    img.arrow__img(v-if='img', :src='img')
</template>

<script>
export default {
  props: ['img', 'className'],
}
</script>

<style lang='scss' src='./arrow.scss'></style>