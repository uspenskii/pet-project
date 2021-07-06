<template lang='pug'>
.page__content
  Breadcrumb(:data='breadcrumbs', headline='Оформление заказа')
  Section
    .grid.is-row
      .col-9.col-m-12
        FormCheckout(:data='data.form', ref='form')
      .col-3.col-m-12
        Order(@clickButton='checkout')
</template>

<script>
import pageMixin from '@/helpers/pageMixin'
export default {
  mixins: [pageMixin],
  layout: 'default',
  middleware({ store, redirect }) {
    store.dispatch('cart/info').then(() => {
      if (!store.state.cart.items.length) {
        return redirect('/cart')
      }
    })
  },
  data() {
    return {
      breadcrumbs: [
        {
          title: 'Корзина',
        },
      ],
    }
  },
  methods: {
    checkout() {
      if (!this.$store.state.cart.items.length) {
        return this.$router.replace('/cart')
      }
      this.$refs.form.send()
    },
  },
  async asyncData(context) {
    return context.$api.load('checkout')
  },
}
</script>