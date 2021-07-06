<template lang='pug'>
.services
  .services__header
    p.services__title Рады предложить нашим покупателям услуги по установке приобретенной у нас сантехники.
    p.services__subtitle Отметим, что установка возможна только в Москве и ближайшем Подмосковье.
  .services__options
    .services__option(v-for="item in data" :key="item.id")
      .services__cont
        .services__text(v-html="item.content")
        .services__prices 
          p.services__price {{item.price}} ₽
      .services__info
        img(src='/img/info.svg', alt='')
        .services__dropdown
          p {{item.hint}}    
    .services__option
      .services__cont
        p.services__text Установка <a href="">дозаторов, диспенсеров, аксессуаров</a>
        .services__prices 
          p.services__price 700 - 1500 ₽
      .services__info
        img(src='/img/info.svg', alt='')
        .services__dropdown
          p Любая информация на усмотрение заказчика    
  ul.services__list
    li.services__item
      p.services__notes цены на работы указаны без учета стоимости материалов;    
  p.services__garanty Гарантия на все виды работ <span>12 месяцев</span>
</template> мастер имеет право увеличить стоимость работ, если сантехоборудование находится в труднодоступном месте и заказчик не может обеспечить свободный доступ к этому оборудованию.

<script>
export default {
  props: ['data']
}
</script>

<style lang='scss' src='./services.scss'></style>