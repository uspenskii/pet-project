<template lang='pug'>
.requisites
  h2.requisites__header {{data.title}}
  .requisites__body
    .requisites__item(v-for="item in data.values" :key="item.id")
      p.requisites__text.blue {{item.title}}
      p.requisites__text {{item.value}} 
</template>

<script>
export default {
  props: ['data'],  
}
</script>

<style lang='scss' src='./requisites.scss'></style>
