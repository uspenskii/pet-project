<template lang='pug'>
nuxt-link.stock(:to='"stocks/" + data.alias', :class='className')
  .stock__cover
    img(:src='data.images.desktop_mini').stock__image     
    img(:src='data.images.mobile').stock__mobile
  //- .stock__wrapper
    //- h3.stock__title {{ title }}
    //- img.stock__img(:src='product', :alt='title')
    //- .stock__arrow
    //-   Arrow(className='is-stock')
</template>

<script>
export default {
  props: ['className', 'data'],
}
</script>

<style lang='scss' src='./stock.scss'></style>