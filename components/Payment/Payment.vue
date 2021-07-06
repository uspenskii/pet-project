<template lang='pug'>
.payment
  h3.payment__header {{data.title}}
  .payment__content(v-for="(item, index) in data.items" :key="item.id")
    .payment__circle
      p.payment__number {{index + 1}}
    .payment__text
      p.payment__title {{item.title}}
      p.payment__subtitle {{item.content}}
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang='scss' src='./payment.scss'></style>