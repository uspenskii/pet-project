<template lang='pug'>
.serv
  .grid.is-row
    .col-3.col-l-6.col-s-12(v-for='(item, index) in services', :key='index')
      Service(:items='item')
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          img: '/img/i-services1.svg',
          text: 'Бесплатная доставка по всей России от 8000 ₽',
        },
        {
          img: '/img/i-services2.svg',
          text: 'Собственный склад готовой продукции',
        },
        {
          img: '/img/i-services3.svg',
          text: 'Гибкая система скидок для каждого клиента',
        },
        {
          img: '/img/i-services4.svg',
          text: 'Персональная поддержка каждого клиента',
        },
      ],
    }
  },
}
</script>

