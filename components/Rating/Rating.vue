<template lang='pug'>
.rating
  ul.rating__list
    li.rating__item(
      :class='{ "is-active": item <= rating }',
      v-for='(item, index) in 5',
      :key='index'
    )
  p.rating__amount {{ reviewsCountText }}
</template>

<script>
import { labelFormat } from '@/helpers/formatter'
export default {
  props: ['rating', 'reviewCount'],
  computed: {
    reviewsCountText() {
      return (
        this.reviewCount +
        ' ' +
        labelFormat(this.reviewCount, ['отзыв', 'отзыва', 'отзывов'])
      )
    },
  },
}
</script>

<style lang='scss' src='./rating.scss'></style>