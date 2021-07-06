<template lang='pug'>
form.form(@submit.prevent='search')
  .grid.is-row
    .col-6.col-m-12
      .form__body
        label.form__label
          span.form__span Название товара
          .form__input
            Input(v-model='data.title')
        label.form__label
          span.form__span Текст
          .form__input
            Input(v-model='data.text') 
        label.form__label
          span.form__span Категория
          .form__input
            Select(:data='data.categoryList', v-model='data.category') 
    .col-6.col-m-12
      .form__body
        label.form__label
          span.form__span Артикул
          .form__input
            Input(v-model='data.code')
        label.form__label
          .form__span Стоимость
          .form__input
            Range(
              :data='data.price',
              @update='priceUpdate',
              @change='priceUpdate'
            )
        label.form__label
          span.form__span Производитель
          .form__input
            Select(:data='data.brandList', v-model='data.brand')
    .col-3.col-m-12
      Button.is-form(label='Начать поиск')
</template>



<script>
export default {
  props: ['data'],
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    search() {
      this.$router.push({
        query: this.params,
      })
    },
    priceUpdate(values) {
      this.data.price.from = values[0]
      this.data.price.to = values[1]
    },
  },
  computed: {
    params() {
      let params = {}

      if (this.data.title) {
        params.title = this.data.title
      }

      if (this.data.code) {
        params.code = this.data.code
      }

      if (this.data.text) {
        params.text = this.data.text
      }

      if (this.data.category) {
        params.category = this.data.category
      }

      if (this.data.brand) {
        params.brand = this.data.brand
      }

      if (this.data.price.from > this.data.price.min) {
        params.price_from = this.data.price.from
      }

      if (this.data.price.to < this.data.price.max) {
        params.price_to = this.data.price.to
      }

      return params
    },
  },
}
</script>

<style lang='scss' src='../Form/form.scss'></style>