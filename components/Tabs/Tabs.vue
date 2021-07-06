<template lang='pug'>
.tabs
  .tabs__header
    button.tabs__button(
      @click='toggleTab(1)',
      :class='{ "is-active": tab == 1 }'
    ) Описание
    button.tabs__button(
      @click='toggleTab(2)',
      :class='{ "is-active": tab == 2 }'
    ) Характеристики
    button.tabs__button(
      @click='toggleTab(3)',
      :class='{ "is-active": tab == 3 }'
    ) Видеообзор
    button.tabs__button(
      @click='toggleTab(4)',
      :class='{ "is-active": tab == 4 }'
    ) Оплата и доставка
    button.tabs__button(
      @click='toggleTab(5)',
      :class='{ "is-active": tab == 5 }'
    ) Отзывы  <i> ( {{ data.reviewCount }} )</i>
  .tabs__body(v-if='tab == 1')
    .text.is-tab(v-html="data.description")
  .tabs__body(v-if='tab == 2')
    .tabs__specifications
      .tabs__specification
        Specifications.alt(:data='data.characteristics' :brand='data.brand' :category='data.category')
  .tabs__body(v-if='tab == 3')
    iframe.tabs__video(
      :src='data.videoUrl',
      frameborder='0',
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
      allowfullscreen
    )
  .tabs__body(v-if='tab == 4')
    .tabs__deliveries
      .tabs__delivery(v-if="data.deliveries.lenght" v-html="data.deliveries")        
  .tabs__body(v-if='tab == 5')
    .grid.is-row
      .col-8.col-m-12
        Review(:data='item' v-for="item in reviews" :key="item.id")
      .col-4.col-m-12
        FormReview(:id='data.id')
</template>



<script>
export default {
  props: ['data', 'reviews'],
  data() {
    return {
      tab: 5,
    };
  },
  methods: {
    toggleTab(id) {
      this.tab = id;
    },
  },
}
</script>

<style lang='scss' src='./tabs.scss'></style>