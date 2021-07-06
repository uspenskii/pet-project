<template lang='pug'>
form.sidebar(@change='updateFacets', ref='form')
  .sidebar__button(
    v-if='data.count > 0',
    @click='filter',
    ref='result',
    :class='{ "is-loading": loading }'
  ) Показать {{ data.count }}
  .sidebar__button.disabled(
    v-if='data.count < 1',
    @click='filter',
    ref='result'
  ) Нет результатов
  .sidebar__item(v-if='data.price')
    .sidebar__header
      h2.sidebar__name Цена
    .sidebar__bodys
      Range(
        :data='data.price',
        @change='priceChange',
        @update='priceUpdate',
        ref='price'
      )
  .sidebar__item(v-for='(item, j) in data.facets', :key='j') 
    .sidebar__header 
      h2.sidebar__name {{ item.label }}
    .sidebar__body
      Checkbox(
        v-for='(option, index) in item.options',
        :key='index',
        :data='option',
        v-model='option.is_checked',
        :disabled='!option.count',
        @change='getPosition'
      )
      //- v-if='index < number',
    //- span.sidebar__more(v-if='item.options.length > 5', @click='showMore(j)') Показать больше
  .sidebar__unfill(@click='reset') Сбросить фильтры
</template>

<script>
export default {
  props: ['data', 'type'],
  data() {
    return {
      ajax: null,
      loading: false,
      number: 5,
    }
  },
  methods: {
    showMore(id) {
      console.log(id)
      this.number = 60
    },
    priceUpdate(values) {
      this.data.price.from = values[0]
      this.data.price.to = values[1]
    },
    priceChange(values) {
      this.data.price.from = values[0]
      this.data.price.to = values[1]
      this.updateFacets()
      this.getPosition(this.$refs.price.$refs.range)
    },
    getPosition(el) {
      let top = this.getCoords(el).top - this.getCoords(this.$refs.form).top
      top += el.offsetHeight / 2 - 23
      this.$refs.result.setAttribute('style', `top: ${top}px; display:flex;`)
    },

    reset() {
      this.data.facets.forEach((facet) => {
        facet.options.forEach((option) => {
          option.is_checked = false
        })
      })

      if (this.data.price) {
        this.data.price.from = 0
        this.data.price.to = 0
      }

      this.filter(() => {
        this.updateFacets()
      })
    },
    filter(callback = null) {
      this.$router
        .replace({
          query: this.params,
        })
        .catch(callback)

      this.$refs.result.setAttribute('style', `display:none;`)
    },
    updateFacets(e) {
      this.loading = true
      this.$emit('facets', {
        params: this.params,
        callback: () => {
          this.loading = false
        },
      })
    },
    getCoords(elem) {
      // (1)
      var box = elem.getBoundingClientRect()

      var body = document.body
      var docEl = document.documentElement

      // (2)
      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
      var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft

      // (3)
      var clientTop = docEl.clientTop || body.clientTop || 0
      var clientLeft = docEl.clientLeft || body.clientLeft || 0

      // (4)
      var top = box.top + scrollTop - clientTop
      var left = box.left + scrollLeft - clientLeft

      return {
        top: top,
        left: left,
      }
    },
  },
  computed: {
    params() {
      let params = {}

      this.data.facets.forEach((facet) => {
        facet.options.forEach((option) => {
          if (option.is_checked) {
            if (params[option.name]) {
              params[option.name].push(option.value)
            } else {
              params[option.name] = [option.value]
            }
          }
        })
      })

      if (this.data.price) {
        if (
          this.data.price.from &&
          this.data.price.from > this.data.price.min
        ) {
          params.price_from = this.data.price.from
        }
        if (this.data.price.to && this.data.price.to < this.data.price.max) {
          params.price_to = this.data.price.to
        }
      }

      return params
    },
  },
}
</script>

<style lang='scss' src='./sidebar.scss'></style>