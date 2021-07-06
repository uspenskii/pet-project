<template lang='pug'>
.about
  .container
    .about__header
      h2.about__title {{data.title}}
      .about__text(v-html="data.content") 
    .about__content
      //- Partners
      //- Rewards
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang='scss' src='./about.scss'></style>
