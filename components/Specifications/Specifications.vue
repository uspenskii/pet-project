<template lang='pug'>
.specifications
  
  .specifications__body
    .specifications__row(v-if='brand')
      p.specifications__name Бренд
      nuxt-link.specifications__value(:to='`/categories/${brand.alias}`') {{ brand.title }}
    .specifications__row
      p.specifications__name Категория
      nuxt-link.specifications__value(:to='`/categories/${category.alias}`') {{ category.title }}
    .specifications__row(v-for='(item, index) in data', :key='index')
      p.specifications__name {{ item.label }}
      p.specifications__value {{ item.value }}
</template>



<script>
export default {
  props: ['data', 'brand', 'category'],
}
</script>

<style lang='scss' src='./specifications.scss'></style>