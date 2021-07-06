<template lang='pug'>
.page(v-if='!$fetchState.pending')
  .page__overlay.js-overlay(@click='closeCart')
  .page__right
    Cart
  header.page__header
    Header(:data='data.header')
  main.page__body
    Nuxt
  footer.page__footer
    Footer(:data='data.footer')
</template>


<script>
export default {
  data() {
    return {
      data: {},
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log('layout update')
  },
  methods: {
    closeCart() {
      this.$nuxt.$emit('closeCart')
    },
  },
  async fetch() {
    await this.$api.get(`layout`).then((response) => {
      this.data = response
    })
  },
}
</script>