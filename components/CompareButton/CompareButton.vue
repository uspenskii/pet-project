<template lang='pug'>
button.product-card__compare(v-if="type == 'productCard'"  @click='toggleCompare' :class='{ "is-active": isActive, "is-loading": loading }', )
  img(src='/img/i-options2.svg')
  span(v-if="!isActive") Добавить к сравнению
  span(v-else) Убрать из сравнения
button.compare-button( v-else
  :class='{ "is-active": isActive, "is-loading": loading }',
  @click='toggleCompare'
)
</template>

<script>
export default {
  props: ['productId', 'type'],
  data() {
    return {
      quantity: 0,
      loading: false,
    }
  },
  methods: {
    toggleCompare() {
      if (this.loading) {
        return
      }
      this.loading = true
      if (this.isActive) {
        this.$store.dispatch('compare/remove', this.productId).then(() => {
          this.loading = false
        })
      } else {
        this.$store.dispatch('compare/add', this.productId).then(() => {
          this.loading = false
        })
      }
    },
  },

  computed: {
    isActive() {
      return !!this.$store.state.compare.products.find(
        (product) => product.id == this.productId
      )
    },
  },
}
</script>

<style lang='scss' src='./compare-button.scss'></style>