<template lang='pug'>
.cart-list    
  .cart-list__header
    button.cart-list__select(
      :class='{ "is-active": select }',
      @click='selectAll'
    ) Выделить все
    button.cart-list__remove(@click='removeProducts') Удалить выделенные  
  .cart-list__body
    .cart-list__item(v-for='(item, index) in cartItems', :key='index')
      input.cart-list__checkbox(
        type='checkbox',
        v-model='products',
        :value='item.id',
        @input='check(item.id)'
      )
      .cart-list__product
        ProductRow.is-row(:data='cartItems[index]')    
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      select: false,
      products: [],
    }
  },
  methods: {
    removeProducts() {
      this.$store.dispatch('cart/remove', this.products)
    },
    selectAll() {
      this.select = !this.select
      if (this.select) {
        for (let i = 0; i < this.cartItems.length; i++) {
          this.products.push(this.cartItems[i].id)
        }
      } else {
        this.products = []
      }
    },
    check(id) {
      if (this.products.length > 0) {        
        if ((this.products.length + 1) == this.cartItems.length) {
          this.selectAll()
        }
        
        let item = this.products.includes(id)
        if (item) {
          let indexProduct = this.products.indexOf(id)
          this.products.splice(indexProduct, 1)
        } else {
          this.products.push(id)          
        }
      } else {
        this.products.push(id)
      }
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.items
    },
    totalCost() {
      return this.$store.state.cart.totalCost
    },
    totalSaleCost() {
      return this.$store.state.cart.totalSale
    },
    rawCost() {
      return this.$store.state.cart.rawCost
    },    
  },
}
</script>

<style lang='scss' src='./cart-list.scss'></style>