<template lang='pug'>
.accordion
  .accordion__header(@click='toggle')
    h2.accordion__headline {{data.title}}
    button.accordion__toggle(:class='{ "is-active": opened }')
  transition(name='fade')
    .accordion__body(v-if='opened')
      .accordion__item(v-for="(item, index) in data.photos" :key="index")
        img(:src='item')      
</template>

<script>
export default {
  props: ['data', 'open'],
  data() {
    return {      
      opened: !this.open,
    }
  },
  methods: {
    toggle() {
      this.opened = !this.opened
    },
  },
}
</script>

<style lang='scss' src='./accordion.scss'></style>