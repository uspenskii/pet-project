<template lang='pug'>
form.form
  .grid.is-row(v-if='type === "search"')
    .col-6.col-m-12
      .form__body
        label.form__label
          span.form__span Название товара
          .form__input
            Input 
        label.form__label
          span.form__span Текст
          .form__input
            Input 
        label.form__label
          span.form__span Категория
          .form__input
            no-ssr 
              Select 
        label.form__label
          span.form__span Новинка
          .form__input 
            no-ssr
              Select 
    .col-6.col-m-12
      .form__body
        label.form__label
          span.form__span Артикул
          .form__input
            Input
        label.form__label
          .form__span Стоимость
          .form__input
            Range(:value='[20, 80]', min='0', max='100')
        label.form__label
          span.form__span Производитель
          .form__input
            no-ssr 
              Select
        label.form__label
          span.form__span Спецпредложение
          .form__input
            no-ssr 
              Select
    .col-3.col-m-12
      Button.is-form(label='Начать поиск')
      
  .form__body.is-review(v-if='type === "review"')
    h2.form__title Оставить отзыв
    label.form__label
      span.form__span Ваше Имя и Фамилия
      .form__input
        Input
    .form__label
      span.form__span Ваша оценка
      Stars
    label.form__label
      span.form__span Отзыв о товаре
      .form__input
        textarea.input
    .form__label
      Checkbox(label='Согласен на обработку персональных данных')
    .form__button
      Button.is-form(label='Оставить свой отзыв')
  .form__body.is-order(v-if='type === "order"')
    .grid.is-row
      .col-12
        h2.form__title Получение товара
      .col-6.col-m-12
        label.form__label
        span.form__span Способ доставки
        .form__input
          no-ssr
            Select(:data='data.delivery.types')
      .col-6.col-m-12
        label.form__label
        span.form__span Адрес доставки
        .form__input
          Input
      .col-6.col-m-12
        label.form__label
        span.form__span Удобный способ оплаты
        .form__input
          no-ssr
            Select(:data='data.payment.types')
      .col-12
        Alert
      .col-12
        h2.form__title Персональные данные
      .col-6.col-m-12
        label.form__label
        span.form__span Ваше ФИО *
        .form__input
          Input
      .col-6.col-m-12
        label.form__label
        span.form__span Название предприятия
        .form__input
          Input
      .col-6.col-m-12
        label.form__label
        span.form__span Ваш Email *
        .form__input
          Input
      .col-6.col-m-12
        label.form__label
        span.form__span Ваш телефон *
        .form__input
          Input
      .col-12
        label.form__label
        span.form__span Отзыв о товаре
        .form__input
          textarea.input
</template>



<script>
export default {
  props: ['type', 'data'],
}
</script>

<style lang='scss' src='./form.scss'></style>