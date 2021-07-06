<template lang='pug'>
.price(:class='{ "is-big": data.isBig }')
  p.price__new(v-html='costFormatted + " ₽"')
  p.price__old(v-if='data.costOld', v-html='costOldFormatted + " ₽"')
</template>

<script>
import { priceFormat } from '@/helpers/formatter'
export default {
  props: ['data'],
  computed: {
    costFormatted() {
      return priceFormat(this.data.cost)
    },
    costOldFormatted() {
      return priceFormat(this.data.costOld)
    },
  },
}
</script>

<style lang='scss' src='./price.scss'></style>