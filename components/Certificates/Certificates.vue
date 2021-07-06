<template lang='pug'>
.certificates
  .certificates__text(v-html="data.page.top")
  .certificates__container(v-for="(item, index) in data.certificates" :key="index")
    Accordion(:data='item', open='false')  
  .certificates__text(v-html="data.page.bottom")
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang='scss' src='./certificates.scss'></style>