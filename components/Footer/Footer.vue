<template lang='pug'>
.footer
  .container
    .footer__inner
      .grid.is-row.footer__top
        .col-3.col-md-12
          .footer__info
            Logo.is-footer
            p.footer__text Вся информация носит ознакомительный характер и ни при каких условиях не является публичной офертой.
        .col-2.shift-1.grid.is-end.mt-20.unshift-l-0.col-m-4.col-s-12
          FooterNav(:items='items')
        .col-2.is-end.grid.mt-20.col-m-4.col-s-12
          FooterNav(:items='items2')
        .col-2.grid.mt-20.col-l-3.col-m-4.col-s-12
          .footer__wrap
            a.footer__phone(
              v-for='(item, index) in data.phones',
              :key='index',
              :href='"tel:" + item',
              targer='_blank'
            ) {{ item }}            
            .footer__social
              Social(:items='socials')
      .footer__bottom
        .footer__copy © {{ new Date().getFullYear() }} СанГарант ООО
        .footer__creators
          a.footer__link(href='//dancecolor.ru', target='_blank') Сделано <img src="/img/i-dancecolor.svg"> DANCECOLOR
</template>

<script>
export default {
  props: ['data', 'logo', 'img', 'title'],
  data() {
    return {
      items: [
        { link: 'О нас', href: '/about' },
        { link: 'Сертификаты', href: '/certificates' },
        { link: 'Пресс-центр', href: '/news' },
        { link: 'Реквизиты', href: '/requisites' },
      ],
      items2: [
        { link: 'Контакты', href: '/contacts' },
        { link: 'Оплата и доставка', href: '/delivery' },
        { link: 'Установка', href: '/attendance' },
        { link: 'Конфиденциальность', href: '/policy' },
      ],
      socials: [
        { img: '/img/i-vk.svg', href: '/' },
        { img: '/img/i-facebook.svg', href: '/' },
        { img: '/img/i-twitter.svg', href: '/' },
      ],
    }
  },
}
</script>

<style lang='scss' src='./footer.scss'></style>