<template lang='pug'>
.progress.js-progress
  .progress__items
    .progress__item(v-for="(item, index) in thresholds" :key="index" :style='{bottom : item.title.slice(0, -1) * 5 + "%"}')
      p.progress__counter {{item.title}}
      .progress__icon
        img(src='/img/progress-1.svg')
  .progress__max
    .progress__current(:style='{"height" : percent + "%"}')
</template>

<script>
export default {
  computed: {
    percent() {      
      let progress = this.$store.state.cart.progress.cost;     
      if (progress) {
        return (progress.current / progress.max) * 100;
      } else {
        return 0;
      }
    },
    thresholds() {
      return this.$store.state.cart.progress.thresholds;
    },
  },
}
</script>

<style lang='scss' src='./progress.scss'></style>