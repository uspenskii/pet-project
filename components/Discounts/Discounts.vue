<template lang='pug'>
.discounts
  .discounts__left 
    h2.discounts__title Больше берем – <span>больше cкидки...</span>
    p.discounts__text Ищите товары отмеченные<img src="/img/i-drop.svg">капелькой и чем больше вы их купите, тем больше будет скидка на данные товары!
    img.discounts__img(src='/img/i-decor.svg', alt='')
  .discounts__right
    .discounts__item
      Discount(className='is-lightBlue', discount='5%', text='Когда сумма заказа от 30 000 ₽', icon='/img/discount-img1.svg')
    .discounts__item
      Discount(className='is-orange', discount='10%', text='Когда сумма заказа от 50 000 ₽', icon='/img/discount-img2.svg')
    .discounts__item
      Discount(className='is-darkBlue', discount='8%', text='Когда сумма заказа от 40 000 ₽', icon='/img/discount-img3.svg')
    .discounts__item
      Discount(className='is-red', discount='15%', text='Когда сумма заказа от 70 000 ₽', icon='/img/discount-img2.svg')
</template>

<script>
export default {
  
}
</script>

<style lang='scss' src='./discounts.scss'></style>