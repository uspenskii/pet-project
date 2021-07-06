<template lang='pug'>
section.section(:class='className')
  .container
    .section__header(v-if='title')
      h2.section__title {{ title }}
      p.section__subtitle(v-if='subtitle') {{ subtitle }}
    .section__body
      slot
</template>

<script>
export default {
  props: ['title', 'subtitle', 'className'],
}

</script>

<style lang='scss' src='./section.scss'></style>