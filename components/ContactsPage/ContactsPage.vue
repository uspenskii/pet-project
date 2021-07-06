<template lang='pug'>
.contacts-page
  .contacts-page__contact(v-for="item in data.addresses" :key="item.id")
    AccordionContact(:data='item', open='false')  
</template>



<script>
export default {
  props: ['data'],
}
</script>

<style lang='scss' src='./contacts-page.scss'></style>