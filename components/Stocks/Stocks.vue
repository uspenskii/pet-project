<template lang='pug'>
.stocks
  .stocks__item(v-for='item in data', :key='item.id')  
    Slide(:data='item')
</template>

<script>
export default {
  props: ['data'],
}
</script>

<style lang='scss' src='./stocks.scss'></style>
