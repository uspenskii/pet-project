<template lang='pug'>
.review
  .review__cover
    p.review__fio {{data.fio[0]}} {{data.fio[1]}}
  .review__row
    .review__header
      .review__info
        p.review__date {{data.date}}
        p.review__name(ref="name") {{data.name}}
      .review__rating
        Rating.is-alt(:rating='data.rating')
    .review__body
      p.review__description {{data.description}}
</template>



<script>
export default {
  props: ['data']
}
</script>

<style lang='scss' src='./review.scss'></style>